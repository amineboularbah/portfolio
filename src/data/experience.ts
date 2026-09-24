import type { Localized } from './site';

export const experience = [
  {
    period: {
      en: 'Sep 2025–Present',
      fr: 'Sept. 2025–Aujourd’hui',
      es: 'Sept. 2025–Actualidad',
    },
    company: '433 Football',
    url: 'https://www.433.com',
    role: {
      en: 'Lead Mobile Engineer',
      fr: 'Lead Mobile Engineer',
      es: 'Lead Mobile Engineer',
    },
    description: {
      en: 'Leading mobile engineering, architecture, and team practices for the Flutter app rebuild.',
      fr: 'Pilotage de l’ingénierie mobile, de l’architecture et des pratiques d’équipe pour la refonte Flutter.',
      es: 'Liderazgo de ingeniería móvil, arquitectura y prácticas de equipo para la reconstrucción con Flutter.',
    },
  },
  {
    period: { en: '2021–2025', fr: '2021–2025', es: '2021–2025' },
    company: 'Ignite Tournaments',
    url: 'https://www.ignitetournaments.com',
    role: { en: 'Flutter Lead', fr: 'Flutter Lead', es: 'Flutter Lead' },
    description: {
      en: 'Led Flutter development for an esports platform, from architecture and integrations to release delivery.',
      fr: 'Pilotage du développement Flutter d’une plateforme esport, de l’architecture aux publications.',
      es: 'Liderazgo del desarrollo Flutter de una plataforma de esports, desde la arquitectura hasta las publicaciones.',
    },
  },
  {
    period: { en: '2021', fr: '2021', es: '2021' },
    company: 'Flow Digital Studio',
    role: {
      en: 'Flutter Developer',
      fr: 'Développeur Flutter',
      es: 'Desarrollador Flutter',
    },
    description: {
      en: 'Built mobile products in collaboration with design and product teams, including iSophro and MyButcher.',
      fr: 'Développement de produits mobiles avec les équipes design et produit, dont iSophro et MyButcher.',
      es: 'Desarrollo de productos móviles con equipos de diseño y producto, entre ellos iSophro y MyButcher.',
    },
  },
  {
    period: { en: '2020–2021', fr: '2020–2021', es: '2020–2021' },
    company: 'MEGALOGI',
    role: {
      en: 'Mobile Developer',
      fr: 'Développeur mobile',
      es: 'Desarrollador móvil',
    },
    description: {
      en: 'Worked on Flutter applications including Barid Purchase for Poste Maroc.',
      fr: 'Développement d’applications Flutter, dont Barid Purchase pour Poste Maroc.',
      es: 'Desarrollo de aplicaciones Flutter, incluida Barid Purchase para Poste Maroc.',
    },
  },
];

export const credentials = [
  {
    key: 'credential1',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/78GNB17YLC98',
    issuer: 'Meta · Coursera',
    year: '2024',
  },
  {
    key: 'credential2',
    url: 'https://coursera.org/verify/NXWJ4OHRRCJN',
    issuer: 'Meta · Coursera',
    year: '2024',
  },
] as const;

export const services: {
  title: Localized;
  body: Localized;
  topics: string[];
}[] = [
  {
    title: {
      en: 'Build a mobile product',
      fr: 'Créer un produit mobile',
      es: 'Crear un producto móvil',
    },
    body: {
      en: 'Turn a focused product idea into an iOS and Android experience. I work through the scope, Flutter architecture, interfaces, integrations, and release process.',
      fr: 'Transformer une idée précise en expérience iOS et Android : cadrage, architecture Flutter, interfaces, intégrations et publication.',
      es: 'Convertir una idea concreta en una experiencia para iOS y Android: alcance, arquitectura Flutter, interfaces, integraciones y publicación.',
    },
    topics: ['Flutter & Dart', 'iOS & Android', 'MVP'],
  },
  {
    title: {
      en: 'Improve an existing app',
      fr: 'Améliorer une application',
      es: 'Mejorar una app existente',
    },
    body: {
      en: 'Make the next chapter easier to build. I help investigate performance and reliability issues, simplify architecture, and plan manageable improvements.',
      fr: 'Préparer la suite du produit : analyser les problèmes de performance et de fiabilité, simplifier l’architecture et planifier des améliorations réalistes.',
      es: 'Preparar la siguiente etapa: investigar problemas de rendimiento y fiabilidad, simplificar la arquitectura y planificar mejoras asumibles.',
    },
    topics: ['Architecture', 'Performance', 'Testing'],
  },
  {
    title: {
      en: 'Connect the hard parts',
      fr: 'Relier les briques techniques',
      es: 'Conectar las piezas difíciles',
    },
    body: {
      en: 'Payments, subscriptions, notifications, analytics, and native capabilities. I work through the details that connect a mobile app to the services around it.',
      fr: 'Paiements, abonnements, notifications, analytics et fonctions natives : je travaille sur les détails qui relient l’application à son environnement.',
      es: 'Pagos, suscripciones, notificaciones, analítica y funciones nativas: trabajo en los detalles que conectan la app con los servicios que la rodean.',
    },
    topics: ['Native SDKs', 'APIs', 'CI/CD'],
  },
  {
    title: {
      en: 'Support your engineering team',
      fr: 'Accompagner votre équipe',
      es: 'Acompañar a tu equipo',
    },
    body: {
      en: 'Practical technical leadership for mobile teams: architecture decisions, useful reviews, mentoring, and release practices that make good work repeatable.',
      fr: 'Un leadership technique concret : choix d’architecture, revues de code utiles, accompagnement et pratiques de publication fiables.',
      es: 'Liderazgo técnico práctico: decisiones de arquitectura, revisiones útiles, mentoría y procesos de publicación fiables.',
    },
    topics: ['Technical leadership', 'Code reviews', 'Mentoring'],
  },
];

export const process = [
  {
    title: { en: 'Understand', fr: 'Comprendre', es: 'Entender' },
    body: {
      en: 'Start with the people, the problem, and what is already there.',
      fr: 'Partir des utilisateurs, du problème et de l’existant.',
      es: 'Empezar por las personas, el problema y lo que ya existe.',
    },
  },
  {
    title: { en: 'Make a plan', fr: 'Définir un plan', es: 'Definir un plan' },
    body: {
      en: 'Agree on priorities, trade-offs, and a scope that makes sense.',
      fr: 'S’accorder sur les priorités, les compromis et un périmètre réaliste.',
      es: 'Acordar prioridades, decisiones y un alcance razonable.',
    },
  },
  {
    title: {
      en: 'Build together',
      fr: 'Construire ensemble',
      es: 'Construir juntos',
    },
    body: {
      en: 'Work in visible steps, share progress, and review what matters.',
      fr: 'Avancer par étapes visibles, partager les progrès et valider l’essentiel.',
      es: 'Avanzar en pasos visibles, compartir progresos y revisar lo importante.',
    },
  },
  {
    title: {
      en: 'Release and learn',
      fr: 'Publier et apprendre',
      es: 'Publicar y aprender',
    },
    body: {
      en: 'Prepare the release, observe real use, and decide what comes next.',
      fr: 'Préparer la publication, observer l’usage réel et choisir la suite.',
      es: 'Preparar la publicación, observar el uso real y decidir el siguiente paso.',
    },
  },
];

export const faqs: { question: Localized; answer: Localized }[] = [
  {
    question: {
      en: 'What kind of mobile work do you do?',
      fr: 'Sur quels projets mobiles travaillez-vous ?',
      es: '¿Qué tipo de trabajo móvil haces?',
    },
    answer: {
      en: 'I focus on Flutter and Dart, mobile architecture, native iOS and Android integrations, and technical leadership. I work on new products and existing apps that need a clearer path forward.',
      fr: 'Je me concentre sur Flutter et Dart, l’architecture mobile, les intégrations natives iOS et Android et le leadership technique. Je travaille sur de nouveaux produits et des applications existantes.',
      es: 'Me centro en Flutter y Dart, arquitectura móvil, integraciones nativas de iOS y Android y liderazgo técnico. Trabajo tanto en productos nuevos como en apps existentes.',
    },
  },
  {
    question: {
      en: 'Can I hire you for a project?',
      fr: 'Puis-je vous confier un projet ?',
      es: '¿Puedo contratarte para un proyecto?',
    },
    answer: {
      en: 'Yes, I discuss independent contracts, focused engineering engagements, and studio projects through AppWrapp. Email me with your product, the support you need, and your timing so we can discuss fit and availability.',
      fr: 'Oui, j’étudie les missions indépendantes, les besoins techniques ciblés et les projets de studio via AppWrapp. Envoyez-moi votre contexte, le besoin et le calendrier pour discuter de l’adéquation et de mes disponibilités.',
      es: 'Sí, estudio contratos independientes, colaboraciones técnicas concretas y proyectos a través de AppWrapp. Escríbeme con el producto, la ayuda que necesitas y los plazos para hablar de encaje y disponibilidad.',
    },
  },
  {
    question: {
      en: 'Where are you based? Do you work remotely?',
      fr: 'Où êtes-vous basé ? Travaillez-vous à distance ?',
      es: '¿Dónde estás? ¿Trabajas en remoto?',
    },
    answer: {
      en: 'I am based in Málaga, Spain, and work remotely with founders and teams internationally, including Europe and the United States. We can agree on practical communication and timezone overlap for the project.',
      fr: 'Je suis basé à Málaga, en Espagne, et je collabore à distance avec des équipes internationales, notamment en Europe et aux États-Unis. Nous pouvons convenir d’un rythme de communication adapté.',
      es: 'Vivo en Málaga y colaboro en remoto con equipos internacionales, incluidos Europa y Estados Unidos. Podemos acordar una forma de comunicación y unos horarios de coincidencia prácticos.',
    },
  },
  {
    question: {
      en: 'What is AppWrapp?',
      fr: 'Qu’est-ce qu’AppWrapp ?',
      es: '¿Qué es AppWrapp?',
    },
    answer: {
      en: 'AppWrapp is my independent mobile engineering studio. Its product family includes Receipto, Fielduro, Flura, and FinFlo. The studio also helps founders and businesses build mobile apps.',
      fr: 'AppWrapp est mon studio indépendant d’ingénierie mobile. Ses produits comprennent Receipto, Fielduro, Flura et FinFlo. Le studio aide aussi les fondateurs et les entreprises à créer leurs applications.',
      es: 'AppWrapp es mi estudio independiente de ingeniería móvil. Incluye Receipto, Fielduro, Flura y FinFlo, y también ayuda a fundadores y empresas a crear sus aplicaciones.',
    },
  },
  {
    question: {
      en: 'Can you work with an existing team or codebase?',
      fr: 'Pouvez-vous rejoindre une équipe ou un projet existant ?',
      es: '¿Puedes trabajar con un equipo o código existente?',
    },
    answer: {
      en: 'Yes. I can review an existing Flutter application, investigate a specific issue, help with integrations, or support a team with architecture and delivery. The first step is understanding the current product and constraints.',
      fr: 'Oui. Je peux analyser une application Flutter, étudier un problème, accompagner des intégrations ou aider l’équipe sur l’architecture et les livraisons. La première étape est de comprendre le produit et ses contraintes.',
      es: 'Sí. Puedo revisar una app Flutter, investigar un problema, trabajar en integraciones o apoyar al equipo con arquitectura y entregas. Primero hay que entender el producto y sus limitaciones.',
    },
  },
  {
    question: {
      en: 'Where can I see your experience and credentials?',
      fr: 'Où consulter votre expérience et vos certificats ?',
      es: '¿Dónde puedo ver tu experiencia y certificados?',
    },
    answer: {
      en: 'The Work pages describe my role in selected products. The About page includes my experience, professional profiles, and the original links to my Meta credentials on Coursera.',
      fr: 'Les pages Projets décrivent mon rôle sur plusieurs produits. La page À propos présente mon parcours, mes profils professionnels et les liens vers mes certificats Meta sur Coursera.',
      es: 'Las páginas de Proyectos describen mi papel en distintos productos. En Sobre mí encontrarás mi experiencia, mis perfiles profesionales y los enlaces a mis certificados de Meta en Coursera.',
    },
  },
];
