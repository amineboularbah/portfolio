import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://amineboularbah.com',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  devToolbar: { enabled: false },
});
