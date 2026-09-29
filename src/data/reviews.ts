// Short excerpts from publicly visible Upwork feedback and LinkedIn recommendations.
// Keep source links and wording in sync with the original profiles.
export const reviewSources = {
  upwork: 'https://www.upwork.com/freelancers/aminebboularbah',
  linkedin:
    'https://www.linkedin.com/in/amineboularbah/details/recommendations/',
} as const;

export const reviews = [
  {
    source: 'upwork',
    quote: 'His patience and problem solving skills are legendary.',
    person: null,
    context: 'App optimization',
    language: 'en',
  },
  {
    source: 'upwork',
    quote:
      'His work was methodical and when it comes to solve multiple problems, he demonstrated patience and resilience.',
    person: null,
    context: 'Back-End Development and notification logic re-implementation',
    language: 'en',
  },
  {
    source: 'linkedin',
    quote:
      'He is an exceptionally talented and motivated developer with a deep expertise in his field.',
    person: 'Jeffrey Godwyll',
    context: 'VP of Engineering, Ignite Tournaments',
    language: 'en',
  },
  {
    source: 'linkedin',
    quote:
      'Amine consistently delivered high-quality work, contributed to architectural decisions, and collaborated effectively across teams.',
    person: 'Prajaktaa Thomas',
    context: 'Former mobile teammate, Ignite Tournaments',
    language: 'en',
  },
  {
    source: 'linkedin',
    quote:
      "Il a tout de suite compris les principes de l'agilité au coeur de l'ADN de notre structure",
    person: 'Erwan Pelmoine',
    context: 'Former manager, Flow Digital Studio',
    language: 'fr',
  },
] as const;
