import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import externalLinks from './src/lib/markdown-external-links.mjs';

export default defineConfig({
  site: 'https://amineboularbah.com',
  output: 'static',
  markdown: {
    processor: satteri({
      hastPlugins: [externalLinks],
      features: { smartPunctuation: false },
    }),
  },
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  devToolbar: { enabled: false },
});
