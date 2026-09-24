export const locales = ['en', 'fr', 'es'] as const;
export type Locale = (typeof locales)[number];
export type Localized<T = string> = Record<Locale, T>;

export const site = {
  name: 'Amine Boularbah',
  url: 'https://amineboularbah.com',
  email: 'hello@amineboularbah.com',
  role: 'Lead Mobile Engineer & Founder',
  city: 'Málaga, Spain',
  studio: 'https://appwrapp.com',
  socialImage: {
    path: '/social/amine-boularbah-social-v1.png',
    width: 1200,
    height: 630,
    alt: {
      en: 'Amine Boularbah, Lead Mobile Engineer. Portrait, Flutter, architecture, and native integrations.',
      fr: 'Amine Boularbah, ingénieur mobile lead. Portrait, Flutter, architecture et intégrations natives.',
      es: 'Amine Boularbah, responsable de ingeniería móvil. Retrato, Flutter, arquitectura e integraciones nativas.',
    },
  },
  resume: {
    basePath: '/resume/amine-boularbah-resume',
    languages: {
      en: { suffix: '', downloadName: 'Amine-Boularbah-Resume' },
      fr: { suffix: '-fr', downloadName: 'Amine-Boularbah-CV-FR' },
      es: { suffix: '-es', downloadName: 'Amine-Boularbah-CV-ES' },
    },
  },
  profiles: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/amineboularbah' },
    { label: 'GitHub', url: 'https://github.com/amineboularbah' },
    {
      label: 'Upwork',
      url: 'https://www.upwork.com/freelancers/aminebboularbah',
    },
    { label: 'Malt', url: 'https://www.malt.com/profile/amineboularbah' },
  ],
};

export function localPath(locale: Locale, path = '') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return (
    (locale === 'en' ? '/' : '/' + locale + '/') + (clean ? clean + '/' : '')
  );
}

export function absolute(path: string) {
  return new URL(path, site.url).href;
}
