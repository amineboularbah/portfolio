import { copy } from './copy';
import { projects } from './projects';
import { locales, localPath, type Locale } from './site';

export const sections = [
  '',
  'projects',
  'about',
  'services',
  'contact',
  'faq',
  'privacy',
] as const;
export type Section = (typeof sections)[number];
export interface Page {
  locale: Locale;
  section: Section;
  projectSlug?: string;
  path: string;
  title: string;
  description: string;
}

export const pages: Page[] = locales.flatMap((locale) => {
  const t = copy[locale];
  const metadata: Record<Section, [string, string]> = {
    '': [
      locale === 'en'
        ? 'Amine Boularbah | Lead Mobile Engineer & Flutter Developer'
        : locale === 'fr'
          ? 'Amine Boularbah | Ingénieur mobile Flutter & fondateur'
          : 'Amine Boularbah | Ingeniero móvil Flutter y fundador',
      t.home.intro,
    ],
    projects: [t.nav.projects + ' | Amine Boularbah', t.projects.intro],
    about: [t.nav.about + ' | Amine Boularbah', t.about.intro],
    services: [
      (locale === 'fr'
        ? 'Services Flutter et ingénierie mobile'
        : locale === 'es'
          ? 'Servicios Flutter e ingeniería móvil'
          : 'Flutter & Mobile Engineering Services') + ' | Amine Boularbah',
      t.services.intro,
    ],
    contact: [t.nav.contact + ' | Amine Boularbah', t.contact.intro],
    faq: [
      (locale === 'fr'
        ? 'Questions fréquentes'
        : locale === 'es'
          ? 'Preguntas frecuentes'
          : 'Frequently Asked Questions') + ' | Amine Boularbah',
      t.faq.intro,
    ],
    privacy: [t.nav.privacy + ' | Amine Boularbah', t.privacy.intro],
  };
  return [
    ...sections.map((section) => ({
      locale,
      section,
      path: localPath(locale, section),
      title: metadata[section][0],
      description: metadata[section][1],
    })),
    ...projects.map((project) => ({
      locale,
      section: 'projects' as const,
      projectSlug: project.slug,
      path: localPath(locale, 'projects/' + project.slug),
      title:
        project.name +
        ' | ' +
        t.nav.projects +
        ' | ' +
        project.content[locale].role +
        ' | Amine Boularbah',
      description: project.content[locale].summary,
    })),
  ];
});

export function translatedPage(page: Page, locale: Locale) {
  return pages.find(
    (candidate) =>
      candidate.locale === locale &&
      candidate.section === page.section &&
      candidate.projectSlug === page.projectSlug,
  )!;
}
