import { pages, translatedPage } from '../data/pages';
import { absolute, locales } from '../data/site';

export function GET() {
  const urls = pages
    .map(
      (page) =>
        '<url><loc>' +
        absolute(page.path) +
        '</loc>' +
        [...locales, 'x-default' as const]
          .map(
            (locale) =>
              '<xhtml:link rel="alternate" hreflang="' +
              locale +
              '" href="' +
              absolute(
                translatedPage(page, locale === 'x-default' ? 'en' : locale)
                  .path,
              ) +
              '"/>',
          )
          .join('') +
        '</url>',
    )
    .join('');
  return new Response(
    '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' +
      urls +
      '</urlset>',
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
}
