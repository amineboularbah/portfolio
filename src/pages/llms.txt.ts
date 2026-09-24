import { pages } from '../data/pages';
import { absolute, site } from '../data/site';
export function GET() {
  const lines = [
    '# Amine Boularbah',
    '',
    '> Lead mobile engineer and founder of AppWrapp, based in Málaga, Spain. Works remotely with founders and engineering teams. Focus: Flutter, Dart, mobile architecture, native integrations, and technical leadership.',
    '',
    '## Profile',
    '',
    '- Contact: ' + site.email,
    '- [Résumé (English PDF)](' + absolute(site.resume.basePath + '.pdf') + ')',
    '- Studio: ' + site.studio,
    ...site.profiles.map(
      (profile) => '- [' + profile.label + '](' + profile.url + ')',
    ),
    '',
    '## English pages',
    '',
    ...pages
      .filter((page) => page.locale === 'en')
      .map(
        (page) =>
          '- [' +
          page.title +
          '](' +
          absolute(page.path) +
          '): ' +
          page.description,
      ),
    '',
    '## Translations',
    '',
    '- [Français](' + site.url + '/fr/)',
    '- [Español](' + site.url + '/es/)',
    '',
    'Project pages distinguish client collaborations from products built through AppWrapp. Credentials and professional references are linked on the About page. Public copy makes no guarantees about availability, prices, performance metrics, or delivery dates.',
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
