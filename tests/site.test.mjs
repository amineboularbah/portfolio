import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { runInNewContext } from 'node:vm';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { load } from 'cheerio';

const origin = 'https://amineboularbah.com';
const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const read = (path) => readFileSync(join(dist, path), 'utf8');
const walk = (directory) =>
  readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
const pages = walk(dist)
  .filter((file) => file.endsWith('/index.html'))
  .map((file) => {
    const path = file.slice(dist.length).replace(/index\.html$/, '');
    return { path: '/' + path, $: load(readFileSync(file, 'utf8')) };
  });
const byPath = new Map(pages.map((page) => [page.path, page]));
const resolveFile = (url) =>
  join(
    dist,
    decodeURIComponent(url.pathname),
    url.pathname.endsWith('/') ? 'index.html' : '',
  );

test('39 English, French, and Spanish pages have unique indexable metadata', () => {
  assert.equal(pages.length, 39);
  const titles = new Set();
  const descriptions = new Set();
  for (const { path, $ } of pages) {
    const locale = path.startsWith('/fr/')
      ? 'fr'
      : path.startsWith('/es/')
        ? 'es'
        : 'en';
    assert.equal($('html').attr('lang'), locale, path);
    assert.equal($('html').attr('data-theme'), 'light', path);
    assert.equal($('main h1').length, 1, path);
    assert.equal($('link[rel=canonical]').attr('href'), origin + path, path);
    assert.doesNotMatch($('meta[name=robots]').attr('content'), /noindex/);
    const title = $('title').text();
    const description = $('meta[name=description]').attr('content');
    assert.ok(title.length > 15 && description.length > 40, path);
    assert.ok(!titles.has(title), `Duplicate title: ${path}`);
    assert.ok(!descriptions.has(description), `Duplicate description: ${path}`);
    titles.add(title);
    descriptions.add(description);
    assert.equal($('meta[property="og:url"]').attr('content'), origin + path);
    assert.ok(
      existsSync(
        resolveFile(new URL($('meta[property="og:image"]').attr('content'))),
      ),
    );
  }
});

test('language alternates are reciprocal, self-referencing, and default to English', () => {
  for (const { path, $ } of pages) {
    const links = $('link[rel=alternate][hreflang]').toArray();
    assert.equal(links.length, 4, path);
    const englishPath = path.replace(/^\/(fr|es)\//, '/');
    for (const language of ['en', 'fr', 'es', 'x-default']) {
      const targetPath =
        language === 'en' || language === 'x-default'
          ? englishPath
          : '/' + language + englishPath;
      assert.equal(
        $(`link[hreflang="${language}"]`).attr('href'),
        origin + targetPath,
        path,
      );
      const target = byPath.get(targetPath);
      assert.ok(target, targetPath);
      assert.ok(
        target.$(`link[rel=alternate][href="${origin + path}"]`).length > 0,
        path,
      );
    }
    const menuLinks = $('.language-menu a')
      .toArray()
      .map((a) => $(a).attr('href'));
    assert.deepEqual(menuLinks, [
      englishPath,
      '/fr' + englishPath,
      '/es' + englishPath,
    ]);
  }
});

test('sitemap and crawler files match the real page inventory', () => {
  const $ = load(read('sitemap.xml'), { xml: true });
  const urls = $('url');
  assert.equal(urls.length, pages.length);
  assert.deepEqual(
    new Set(
      $('loc')
        .toArray()
        .map((node) => $(node).text()),
    ),
    new Set(pages.map((p) => origin + p.path)),
  );
  urls.each((_, node) => assert.equal($(node).find('xhtml\\:link').length, 4));
  assert.match(
    read('robots.txt'),
    /User-agent: \*\s+Allow: \/\s+Sitemap: https:\/\/amineboularbah\.com\/sitemap\.xml/,
  );
  const llms = read('llms.txt');
  for (const { path } of pages.filter((p) => p.$('html').attr('lang') === 'en'))
    assert.ok(llms.includes(origin + path));
  assert.doesNotMatch(llms, /localhost|127\.0\.0\.1/);
});

test('structured data identifies the person, studio, and visible breadcrumbs', () => {
  for (const { path, $ } of pages) {
    const graph = JSON.parse($('script[type="application/ld+json"]').text())[
      '@graph'
    ];
    const person = graph.find((item) => item['@type'] === 'Person');
    assert.equal(person.name, 'Amine Boularbah');
    assert.equal(person.url, origin + '/');
    assert.equal(person.email, 'hello@amineboularbah.com');
    assert.ok(person.sameAs.includes('https://github.com/amineboularbah'));
    const organization = graph.find((item) => item['@type'] === 'Organization');
    assert.equal(organization.url, 'https://appwrapp.com/');
    const breadcrumb = graph.find((item) => item['@type'] === 'BreadcrumbList');
    if (breadcrumb) {
      assert.deepEqual(
        breadcrumb.itemListElement.map((item) => item.name),
        $('.breadcrumbs li')
          .toArray()
          .map((node) => $(node).text().trim()),
      );
    }
    assert.doesNotMatch(
      JSON.stringify(graph),
      /aggregateRating|reviewRating|priceRange/,
    );
    if (path.endsWith('/services/'))
      assert.ok(graph.some((item) => item['@type'] === 'Service'));
  }
});

test('all internal links, fragments, styles, scripts, and image variants resolve', () => {
  for (const { path, $ } of pages) {
    const references = [];
    $('[href],[src]').each((_, node) => {
      const item = $(node);
      references.push(item.attr('href') ?? item.attr('src'));
    });
    $('[srcset]').each((_, node) =>
      references.push(
        ...$(node)
          .attr('srcset')
          .split(',')
          .map((part) => part.trim().split(/\s+/)[0]),
      ),
    );
    for (const reference of references) {
      const url = new URL(reference, origin + path);
      if (url.origin !== origin) continue;
      assert.ok(existsSync(resolveFile(url)), `${path}: missing ${reference}`);
      if (url.hash) {
        const target = byPath.get(url.pathname);
        assert.ok(
          target &&
            target
              .$('[id]')
              .toArray()
              .some(
                (node) =>
                  target.$(node).attr('id') ===
                  decodeURIComponent(url.hash.slice(1)),
              ),
          `${path}: missing fragment ${reference}`,
        );
      }
    }
    $('img').each((_, node) => {
      assert.ok($(node).attr('alt'), `${path}: missing image alternative`);
      assert.ok(
        $(node).attr('width') && $(node).attr('height'),
        `${path}: missing image dimensions`,
      );
    });
    assert.equal($('button svg, a.button svg').length, 0);
  }
});

test('legacy FAQ and home fragments survive, and unknown pages are not indexed', () => {
  const faq = load(read('faq.html'));
  assert.equal(faq('link[rel=canonical]').attr('href'), origin + '/faq/');
  assert.match(faq('meta[http-equiv=refresh]').attr('content'), /url=\/faq\//i);
  assert.match(faq('meta[name=robots]').attr('content'), /noindex/);
  const home = byPath.get('/').$;
  for (const id of [
    'home',
    'portfolio',
    'about',
    'skills',
    'resume',
    'certifications',
    'services',
    'testimonial',
    'contact',
  ])
    assert.equal(home('#' + id).length, 1, id);
  const error = load(read('404.html'));
  assert.equal(error('h1').length, 1);
  assert.match(error('meta[name=robots]').attr('content'), /noindex/);
  assert.equal(error('link[rel=canonical]').length, 0);
  assert.equal(read('CNAME').trim(), 'amineboularbah.com');
  assert.ok(existsSync(join(dist, '.nojekyll')));
});

test('first visit stays light and English; only an explicit dark preference changes it', () => {
  const $ = byPath.get('/').$;
  const boot = $('head script').first().text();
  for (const [stored, expected] of [
    [null, 'light'],
    ['light', 'light'],
    ['dark', 'dark'],
    ['invalid', 'light'],
  ]) {
    const document = { documentElement: { dataset: { theme: 'light' } } };
    runInNewContext(boot, {
      document,
      localStorage: { getItem: () => stored },
    });
    assert.equal(document.documentElement.dataset.theme, expected);
  }
  const document = { documentElement: { dataset: { theme: 'light' } } };
  runInNewContext(boot, {
    document,
    localStorage: {
      getItem: () => {
        throw new Error('Storage blocked');
      },
    },
  });
  assert.equal(document.documentElement.dataset.theme, 'light');
  for (const file of walk(dist).filter((file) => /\.(html|js)$/.test(file))) {
    const script = readFileSync(file, 'utf8');
    assert.doesNotMatch(
      script,
      /navigator\.language|ab-lang|prefers-color-scheme/,
    );
  }
});

test('core content and navigation work without client JavaScript', () => {
  for (const locale of ['', '/fr', '/es']) {
    const projects = byPath.get(locale + '/projects/').$;
    assert.equal(projects('.project-card').length, 6);
    assert.equal(projects('.project-card[hidden]').length, 0);
    assert.equal(projects('.archive-list details').length, 5);
    assert.equal(projects('.mobile-menu a').length, 4);
    assert.equal(projects('.language-menu a').length, 3);
    const contact = byPath.get(locale + '/contact/').$;
    assert.ok(contact('a[href^="mailto:hello@amineboularbah.com"]').length > 0);
    assert.equal(contact('form').length, 0);
    assert.equal(byPath.get(locale + '/faq/').$('.faq-list details').length, 6);
  }
});
