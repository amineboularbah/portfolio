# Amine Boularbah

Personal portfolio for [amineboularbah.com](https://amineboularbah.com), built with Astro and published on GitHub Pages.

English and light mode are the defaults. French and Spanish have their own complete page trees. Visitors can explicitly switch language or save a light/dark preference. There is no automatic language or system-theme redirect.

## Development

Use Node 24, as specified in `.nvmrc`.

```sh
nvm use
npm ci
npm run dev
```

The local site runs at `http://127.0.0.1:4322`. For a production preview:

```sh
npm run build
npm run preview
```

Run `npm run validate` before opening a pull request. It checks formatting, Astro/TypeScript, the production build, and generated-site tests. `npm run format` applies formatting. Run `npm audit --audit-level=high` when reviewing dependencies.

## Project structure

| Location                    | Purpose                                                             |
| --------------------------- | ------------------------------------------------------------------- |
| `src/data/site.ts`          | Public identity, contact, profile links, locales, URL helpers       |
| `src/data/copy.ts`          | English, French, and Spanish interface and page copy                |
| `src/data/projects.ts`      | Client projects, AppWrapp products, and earlier work                |
| `src/data/experience.ts`    | Experience, credentials, services, process, FAQs                    |
| `src/data/pages.ts`         | Shared route and metadata inventory for all 42 pages                |
| `src/pages/[...path].astro` | Generates every translated page from that inventory                 |
| `src/pages/`                | Sitemap, robots.txt, llms.txt, and custom 404                       |
| `src/components/`           | Reusable navigation, content sections, project cards, footer        |
| `src/layouts/Layout.astro`  | Document shell, metadata, structured data, motion                   |
| `src/styles/global.css`     | Shared typography, colors, themes, responsive layouts               |
| `src/assets/`               | Source images processed into responsive variants by Astro           |
| `public/`                   | Favicons, social card, domain file, and preserved legacy image URLs |
| `tests/site.test.mjs`       | Checks the built site, links, languages, discovery, defaults        |

The site is static HTML and CSS with small progressive enhancements for theme switching, menus, project filters, copying an email address, and entrance motion. There is no client UI framework, database, analytics, or tracking script. Manrope is self-hosted. Core content, email links, FAQ disclosures, and navigation remain available without JavaScript. Motion respects `prefers-reduced-motion`.

## Editing content

Update all three locales together. A new featured project in `projects.ts` automatically gets a detail page in each locale, metadata, alternate-language links, and sitemap entries. Use real project imagery and distinguish client responsibilities from products owned through AppWrapp.

Keep claims attributable. See [content sources](docs/SOURCES.md) before editing experience, credentials, testimonials, or outcomes. Do not publish private contracts, addresses, rates, customer numbers, or unverified performance metrics.

### Sharing previews

The default LinkedIn/Open Graph and large Twitter/X image is `public/social/amine-boularbah-social-v1.png` (1200 × 630), featuring the existing portrait, Manrope typography, and portfolio colors. All three languages share the image with localized alternative text. See [design and export instructions](design/README.md). The earlier `/social-card.png` remains available for existing shared links.

### Public resume

`/resume/`, `/fr/resume/`, and `/es/resume/` render English, French, and Spanish Markdown as semantic HTML. Each page offers PDF, Word (.docx), and plain-text downloads in its own language without JavaScript. Desktop and mobile navigation and the footer link to the readable page. The homepage hero stays unchanged.

- Update `src/content/resume.md`, `resume.fr.md`, and `resume.es.md` together, preserving the meaning of the approved English source. Do not infer language fluency or convert qualifications into unverified local equivalents.
- Regenerate all three Word and text versions using Python 3.10+ with `python-docx==1.2.0`: `python3 scripts/build-resume.py`. This optional authoring dependency is not needed to build or deploy the website.
- The English PDF preserves the supplied two-column design and embedded fonts. It is curated separately and is never rebuilt by the exporter. Keep any updates narrow and compare its rendered pages with the approved original.
- Export the French and Spanish Word files to PDF, preserving their document language and hyperlinks. Save them beside the matching Word and text files.
- Render and review every page of all three Word files and PDFs, including page breaks and accented characters. Confirm matching product order and certificate links.
- After reviewing all outputs, run `python3 scripts/build-resume.py --manifest-only`. Commit the three Markdown sources, nine downloads, and `scripts/resume-manifest.json` together. Generated-site tests check the HTML against each translation, download language, product order, and checksums.

English download paths remain `/resume/amine-boularbah-resume.{pdf,docx,txt}`. French and Spanish use `-fr` and `-es` suffixes before the extension. Page download links include a content-checksum query parameter so updated files bypass older browser and CDN cache entries. The three readable pages are included in the sitemap with language alternates and referenced in `llms.txt`. Personal contact details and claims are reproduced from Amine’s approved website version; they are not independently verified.

## Deployment

The `.github/workflows/website.yml` workflow validates pull requests. After a validated change lands on `main`, it uploads `dist/` and deploys through the GitHub Pages environment. Actions are pinned to reviewed commit SHAs; Dependabot proposes monthly dependency updates.

GitHub repository settings must use **Pages > Source > GitHub Actions**. Keep the custom domain `amineboularbah.com` and HTTPS enabled. `public/CNAME` preserves the domain in the built artifact. The workflow needs repository read access during the build and Pages write/OIDC permissions only in the deploy job.

Use a feature branch and reviewed pull request. To roll back a content or code release, revert its commit on `main` and let the same checks and deployment run. Do not upload source files directly to the Pages branch or switch the domain/DNS to another host.

## Search and AI discovery

- Canonical URLs, localized descriptions, Open Graph metadata, and reciprocal `en`/`fr`/`es`/`x-default` alternates are generated from the same route inventory.
- Person, Organization, WebSite, ProfilePage/WebPage, BreadcrumbList, and service data reflect visible content. No fabricated reviews or ratings are marked up.
- Submit `https://amineboularbah.com/sitemap.xml` in Google Search Console. The sitemap contains all 42 indexable pages and excludes the 404 and legacy FAQ alias.
- `robots.txt` allows crawling and advertises the sitemap. `llms.txt` is an optional human-readable directory, not a guarantee of AI inclusion or recommendations.
- GitHub Pages serves a genuine 404 for unknown URLs. The old `/faq.html` uses an immediate HTML redirect with a canonical link to `/faq/`; it is not an HTTP 301. Old home fragment IDs and public image URLs remain available.

Google states that [ordinary SEO practices also apply to AI features](https://developers.google.com/search/docs/appearance/ai-features); no special AI file is required. This project improves website SEO and machine readability. App Store Optimization is a separate task involving app-store listings.

## Release review

Alongside automated checks, review home, work, a project, about, services, contact, and FAQ at narrow mobile and desktop widths. Test light/dark persistence, translated equivalent-page links, navigation, project filtering, and email-copy feedback. Check public routes and the deployment workflow after release. The tests do not guarantee search indexing, AI recommendations, or delivery to an email inbox.
