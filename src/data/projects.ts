import type { ImageMetadata } from 'astro';
import type { Localized } from './site';
import football from '../assets/thumbnails/433-football-thumbnail.webp';
import receipto from '../assets/thumbnails/receipto-thumbnail.webp';
import flura from '../assets/thumbnails/flura-thumbnail.webp';
import ignite from '../assets/thumbnails/ignite-tournaments-thumbnail.webp';
import fielduro from '../assets/thumbnails/fielduro-thumbnail.webp';
import finflo from '../assets/thumbnails/finflo-thumbnail.webp';
import indiscutido from '../assets/thumbnails/indiscutido-thumbnail.webp';
import gymerz from '../assets/thumbnails/gymerz-thumbnail.webp';
import pennyflow from '../assets/thumbnails/pennyflow-thumbnail.webp';
import isophro from '../assets/thumbnails/isophro-thumbnail.webp';
import baridPurchase from '../assets/thumbnails/barid-purchase-thumbnail.webp';

export interface Project {
  slug: string;
  name: string;
  category: 'client' | 'own';
  image: ImageMetadata;
  imageAlt?: Localized<string>;
  visual: 'montage' | 'screen' | 'thumbnail';
  color: string;
  tags: string[];
  url: string;
  content: Localized<{
    role: string;
    title: string;
    summary: string;
    context: string;
    contributions: string[];
  }>;
}

export const projects: Project[] = [
  {
    slug: '433-football',
    name: '433 Football',
    category: 'client',
    image: football,
    imageAlt: {
      en: '433 Football match experiences and predictions presented on iPhone',
      fr: 'Expériences de match et pronostics 433 Football présentés sur iPhone',
      es: 'Experiencias de partidos y pronósticos de 433 Football en iPhone',
    },
    visual: 'thumbnail',
    color: '#e9eddf',
    tags: ['Flutter', 'BLoC', 'Mobile architecture'],
    url: 'https://www.433.com',
    content: {
      en: {
        role: 'Lead Mobile Engineer',
        title: 'A home for the love of football.',
        summary:
          'Mobile architecture and engineering leadership for the official 433 app.',
        context:
          'The 433 app brings football content and fan experiences together. My work focuses on the Flutter rebuild and the foundations that help the engineering team develop and maintain it.',
        contributions: [
          'Lead a team of 5 engineers rebuilding the official 433 mobile app, serving a global community of 77M+ football fans.',
          'Architected the application from the ground up using Clean Architecture, BLoC, and a multi-package monorepo, establishing the foundation for mobile development at 433.',
          'Designed and implemented real-time live updates with SignalR and native live experiences using Swift/SwiftUI + ActivityKit on iOS and Kotlin on Android.',
          'Owned complex integrations including Segment CDP and Airship, partnering with Marketing and Analytics teams to deliver tracking, engagement, and customer-data requirements.',
          'Optimized GitHub Actions/Fastlane CI/CD pipelines, reducing execution time by 47% and accelerating development and release cycles.',
          'Own architecture, technical decisions, and complex feature delivery while mentoring 5 engineers, reviewing PRs, and driving engineering standards across the mobile team.',
        ],
      },
      fr: {
        role: 'Lead Mobile Engineer',
        title: 'Une app pour la passion du football.',
        summary:
          'Architecture mobile et leadership technique pour l’application officielle 433.',
        context:
          'L’application 433 rassemble contenus et expériences pour les fans de football. Mon travail porte sur sa refonte Flutter et les bases qui permettent à l’équipe de la développer et de la maintenir.',
        contributions: [
          'Je dirige une équipe de 5 ingénieurs chargée de la refonte de l’application mobile officielle de 433, au service d’une communauté mondiale de plus de 77 millions de fans de football.',
          'J’ai conçu l’application depuis zéro avec Clean Architecture, BLoC et un monorepo multipackage, établissant les fondations du développement mobile chez 433.',
          'J’ai conçu et développé les mises à jour en temps réel avec SignalR et les expériences natives de suivi en direct avec Swift/SwiftUI et ActivityKit sur iOS et Kotlin sur Android.',
          'J’ai pris en charge des intégrations complexes, notamment Segment CDP et Airship, en collaboration avec les équipes marketing et analytique pour répondre aux besoins de suivi, d’engagement et de données clients.',
          'J’ai optimisé les pipelines CI/CD GitHub Actions/Fastlane, réduisant leur temps d’exécution de 47 % et accélérant les cycles de développement et de livraison.',
          'Je suis responsable de l’architecture, des décisions techniques et de la livraison de fonctionnalités complexes, tout en accompagnant 5 ingénieurs, en réalisant les revues de pull requests et en définissant les standards d’ingénierie de l’équipe mobile.',
        ],
      },
      es: {
        role: 'Lead Mobile Engineer',
        title: 'Un hogar para la pasión por el fútbol.',
        summary:
          'Arquitectura móvil y liderazgo técnico para la app oficial de 433.',
        context:
          'La app de 433 reúne contenido y experiencias para los aficionados al fútbol. Mi trabajo se centra en su reconstrucción con Flutter y en las bases que permiten al equipo desarrollarla y mantenerla.',
        contributions: [
          'Lidero un equipo de 5 ingenieros encargado de reconstruir la aplicación móvil oficial de 433, al servicio de una comunidad mundial de más de 77 millones de aficionados al fútbol.',
          'Diseñé la aplicación desde cero con Clean Architecture, BLoC y un monorepositorio con múltiples paquetes, estableciendo la base del desarrollo móvil en 433.',
          'Diseñé e implementé actualizaciones en tiempo real con SignalR y experiencias nativas de seguimiento en directo con Swift/SwiftUI y ActivityKit en iOS y Kotlin en Android.',
          'Me responsabilicé de integraciones complejas, como Segment CDP y Airship, en colaboración con los equipos de marketing y analítica para cubrir los requisitos de seguimiento, interacción y datos de clientes.',
          'Optimicé los pipelines CI/CD de GitHub Actions/Fastlane, reduciendo el tiempo de ejecución un 47 % y acelerando los ciclos de desarrollo y publicación.',
          'Soy responsable de la arquitectura, las decisiones técnicas y la entrega de funcionalidades complejas, mientras acompaño a 5 ingenieros, reviso pull requests e impulso los estándares de ingeniería del equipo móvil.',
        ],
      },
    },
  },
  {
    slug: 'ignite-tournaments',
    name: 'Ignite Tournaments',
    category: 'client',
    image: ignite,
    imageAlt: {
      en: 'Ignite Tournaments esports discovery and team screens presented on iPhone',
      fr: 'Découverte de tournois esport et écrans d’équipes Ignite Tournaments sur iPhone',
      es: 'Descubrimiento de torneos de esports y pantallas de equipos de Ignite Tournaments en iPhone',
    },
    visual: 'thumbnail',
    color: '#211844',
    tags: ['Flutter', 'Riverpod', 'Team leadership'],
    url: 'https://www.ignitetournaments.com',
    content: {
      en: {
        role: 'Lead Flutter Engineer',
        title: 'Bringing competition to mobile.',
        summary:
          'Leading Flutter development for an esports tournament platform.',
        context:
          'Ignite Tournaments combines tournament participation, player communities, and rewards. I led Flutter engineering and worked across the mobile architecture, integrations, and delivery process.',
        contributions: [
          'Lead the Flutter team and shape a maintainable application architecture.',
          'Build real-time tournament experiences and platform integrations.',
          'Develop release pipelines and a repeatable delivery process.',
        ],
      },
      fr: {
        role: 'Lead Flutter Engineer',
        title: 'La compétition sur mobile.',
        summary:
          'Pilotage du développement Flutter d’une plateforme de tournois esport.',
        context:
          'Ignite Tournaments réunit tournois, communautés de joueurs et récompenses. J’ai piloté le développement Flutter et travaillé sur l’architecture, les intégrations et les livraisons.',
        contributions: [
          'Accompagner l’équipe Flutter et concevoir une architecture maintenable.',
          'Développer les expériences de tournoi en temps réel et les intégrations.',
          'Mettre en place des pipelines de publication et un processus reproductible.',
        ],
      },
      es: {
        role: 'Lead Flutter Engineer',
        title: 'La competición llega al móvil.',
        summary:
          'Liderazgo del desarrollo Flutter de una plataforma de torneos de esports.',
        context:
          'Ignite Tournaments combina torneos, comunidades de jugadores y recompensas. Lideré el desarrollo Flutter y trabajé en la arquitectura, las integraciones y el proceso de entrega.',
        contributions: [
          'Liderar el equipo Flutter y definir una arquitectura mantenible.',
          'Desarrollar experiencias de torneo en tiempo real e integraciones.',
          'Crear procesos de publicación y entregas repetibles.',
        ],
      },
    },
  },
  {
    slug: 'receipto',
    name: 'Receipto',
    category: 'own',
    image: receipto,
    imageAlt: {
      en: 'Receipto receipt library on iPhone with smart scanning and organized receipts',
      fr: 'La bibliothèque de reçus Receipto sur iPhone, avec numérisation intelligente et reçus organisés',
      es: 'Biblioteca de recibos de Receipto en iPhone, con escaneos inteligentes y recibos organizados',
    },
    visual: 'thumbnail',
    color: '#f4edda',
    tags: ['Flutter', 'Smart scans', 'Product ownership'],
    url: 'https://receipto.app/',
    content: {
      en: {
        role: 'Founder & Mobile Engineer',
        title: 'Less paperwork. More headspace.',
        summary:
          'My receipt management app, built to make everyday business records easier to handle.',
        context:
          'Receipto brings receipt photos and emailed receipts into one organized place. Smart scans, folders, and exports help freelancers and small businesses spend less time sorting paperwork.',
        contributions: [
          'Take the product from idea through development and release.',
          'Build receipt capture, email workflows, and export experiences.',
          'Connect product feedback with ongoing mobile improvements.',
        ],
      },
      fr: {
        role: 'Fondateur et ingénieur mobile',
        title: 'Moins de paperasse. L’esprit plus libre.',
        summary:
          'Mon application de gestion de reçus, pour simplifier les justificatifs du quotidien.',
        context:
          'Receipto réunit les photos de reçus et les reçus envoyés par e-mail. La numérisation intelligente, les dossiers et les exports aident les indépendants et les petites entreprises à mieux organiser leurs documents.',
        contributions: [
          'Porter le produit de l’idée au développement et à la publication.',
          'Créer la capture de reçus, les flux e-mail et les exports.',
          'Relier les retours des utilisateurs aux améliorations du produit.',
        ],
      },
      es: {
        role: 'Fundador e ingeniero móvil',
        title: 'Menos papeleo. Más tranquilidad.',
        summary:
          'Mi app de gestión de recibos, creada para simplificar los documentos del día a día.',
        context:
          'Receipto reúne fotos de recibos y recibos enviados por correo. Los escaneos inteligentes, las carpetas y las exportaciones ayudan a autónomos y pequeñas empresas a organizar sus documentos.',
        contributions: [
          'Llevar el producto desde la idea hasta su desarrollo y publicación.',
          'Crear la captura de recibos, los flujos de correo y las exportaciones.',
          'Conectar los comentarios de los usuarios con las mejoras del producto.',
        ],
      },
    },
  },
  {
    slug: 'fielduro',
    name: 'Fielduro',
    category: 'own',
    image: fielduro,
    imageAlt: {
      en: 'Fielduro documents, invoicing, and time tracking on iPhone, Mac, and iPad',
      fr: 'Documents, facturation et suivi du temps Fielduro sur iPhone, Mac et iPad',
      es: 'Documentos, facturación y seguimiento del tiempo de Fielduro en iPhone, Mac y iPad',
    },
    visual: 'thumbnail',
    color: '#e7eef2',
    tags: ['Mobile product', 'Business workflows', 'AppWrapp'],
    url: 'https://fielduro.com/',
    content: {
      en: {
        role: 'Founder, AppWrapp',
        title: 'Good work. Less admin.',
        summary:
          'A connected workflow for the paperwork behind service businesses.',
        context:
          'Fielduro brings estimates, work orders, invoices, and receipts into a focused workspace. It is one of the products I build through AppWrapp for independent service businesses.',
        contributions: [
          'Shape a product around the journey from an estimate to an invoice.',
          'Connect related job documents in a focused user experience.',
          'Work on clear, shareable business paperwork.',
        ],
      },
      fr: {
        role: 'Fondateur d’AppWrapp',
        title: 'Le travail bien fait. Moins d’administratif.',
        summary:
          'Un parcours cohérent pour les documents des entreprises de services.',
        context:
          'Fielduro réunit devis, bons de travail, factures et reçus dans un espace dédié. C’est l’un des produits que je développe avec AppWrapp pour les prestataires indépendants.',
        contributions: [
          'Concevoir le parcours qui relie un devis à une facture.',
          'Rassembler les documents d’une intervention dans une interface claire.',
          'Travailler sur des documents professionnels faciles à partager.',
        ],
      },
      es: {
        role: 'Fundador de AppWrapp',
        title: 'Buen trabajo. Menos gestiones.',
        summary:
          'Un flujo conectado para los documentos de los negocios de servicios.',
        context:
          'Fielduro reúne presupuestos, órdenes de trabajo, facturas y recibos. Es uno de los productos que desarrollo en AppWrapp para profesionales y negocios de servicios.',
        contributions: [
          'Diseñar el recorrido desde el presupuesto hasta la factura.',
          'Conectar los documentos de un trabajo en una experiencia clara.',
          'Crear documentos profesionales fáciles de compartir.',
        ],
      },
    },
  },
  {
    slug: 'flura',
    name: 'Flura',
    category: 'own',
    image: flura,
    imageAlt: {
      en: 'Flura daily symptom check-in and health history on iPhone',
      fr: 'Bilan quotidien des symptômes et historique de santé Flura sur iPhone',
      es: 'Registro diario de síntomas e historial de salud de Flura en iPhone',
    },
    visual: 'thumbnail',
    color: '#e9eee7',
    tags: ['Flutter', 'Health tracking', 'Product ownership'],
    url: 'https://flura.app/',
    content: {
      en: {
        role: 'Founder & Mobile Engineer',
        title: 'A clearer picture of everyday health.',
        summary:
          'A symptom journal that helps people keep a more useful record of how they feel.',
        context:
          'Flura is a health tracking app for people living with chronic conditions. It brings symptom logging, health history, and shareable reports into a considered mobile experience. It supports personal record-keeping and is not a diagnostic tool.',
        contributions: [
          'Design and build the mobile product from the ground up.',
          'Develop symptom logging and health-history experiences.',
          'Make recorded information easier to review and share with a clinician.',
        ],
      },
      fr: {
        role: 'Fondateur et ingénieur mobile',
        title: 'Mieux comprendre son quotidien.',
        summary:
          'Un journal de symptômes pour conserver un historique plus utile de son ressenti.',
        context:
          'Flura accompagne les personnes vivant avec des maladies chroniques. L’application rassemble le suivi des symptômes, l’historique et les rapports à partager. Elle aide à tenir un journal personnel et ne constitue pas un outil de diagnostic.',
        contributions: [
          'Concevoir et développer le produit mobile de bout en bout.',
          'Créer le suivi des symptômes et de l’historique de santé.',
          'Faciliter la consultation des informations et leur partage avec un soignant.',
        ],
      },
      es: {
        role: 'Fundador e ingeniero móvil',
        title: 'Una visión más clara del día a día.',
        summary:
          'Un diario de síntomas para llevar un registro más útil de cómo te sientes.',
        context:
          'Flura acompaña a personas que viven con enfermedades crónicas. Reúne el registro de síntomas, el historial y los informes para compartir. Ayuda a llevar un diario personal y no es una herramienta de diagnóstico.',
        contributions: [
          'Diseñar y desarrollar el producto móvil desde cero.',
          'Crear el registro de síntomas y el historial de salud.',
          'Facilitar la revisión de los datos y su intercambio con profesionales sanitarios.',
        ],
      },
    },
  },
  {
    slug: 'finflo',
    name: 'FinFlo',
    category: 'own',
    image: finflo,
    imageAlt: {
      en: 'FinFlo budget dashboard and spending charts on iPhone',
      fr: 'Tableau de bord des budgets et graphiques de dépenses FinFlo sur iPhone',
      es: 'Panel de presupuestos y gráficos de gastos de FinFlo en iPhone',
    },
    visual: 'thumbnail',
    color: '#e5eee8',
    tags: ['Flutter', 'Personal finance', 'AppWrapp'],
    url: 'https://apps.apple.com/app/id6741395623',
    content: {
      en: {
        role: 'Founder & Mobile Engineer',
        title: 'Everyday spending, in view.',
        summary:
          'A personal finance app for keeping track of expenses and budgets.',
        context:
          'FinFlo is an expense tracker in the AppWrapp product family. It brings spending records and budgets into a mobile experience designed around everyday use.',
        contributions: [
          'Design and build the mobile product.',
          'Develop expense tracking and budgeting workflows.',
          'Own the product through its App Store release and iteration.',
        ],
      },
      fr: {
        role: 'Fondateur et ingénieur mobile',
        title: 'Les dépenses du quotidien, en clair.',
        summary:
          'Une application de finances personnelles pour suivre ses dépenses et ses budgets.',
        context:
          'FinFlo est l’application de suivi des dépenses de la famille AppWrapp. Elle rassemble les dépenses et les budgets dans une expérience mobile pensée pour le quotidien.',
        contributions: [
          'Concevoir et développer le produit mobile.',
          'Créer les parcours de suivi des dépenses et des budgets.',
          'Accompagner la publication sur l’App Store et les évolutions du produit.',
        ],
      },
      es: {
        role: 'Fundador e ingeniero móvil',
        title: 'Tus gastos del día a día, a la vista.',
        summary:
          'Una app de finanzas personales para seguir gastos y presupuestos.',
        context:
          'FinFlo forma parte de la familia AppWrapp. Reúne gastos y presupuestos en una experiencia móvil pensada para el uso diario.',
        contributions: [
          'Diseñar y desarrollar el producto móvil.',
          'Crear los flujos de seguimiento de gastos y presupuestos.',
          'Llevar el producto hasta su publicación en el App Store y sus mejoras.',
        ],
      },
    },
  },
];

export const earlierWork = [
  {
    name: 'Indiscutido',
    tags: 'Flutter · Supabase',
    image: indiscutido,
    imageAlt: {
      en: 'Indiscutido boxing schedules and fight results presented on iPhone',
      fr: 'Calendrier de boxe et résultats des combats Indiscutido sur iPhone',
      es: 'Calendario de boxeo y resultados de combates de Indiscutido en iPhone',
    },
    summary: {
      en: 'A live boxing companion with fight tracking and community features.',
      fr: 'Une app de boxe avec suivi des combats et fonctions communautaires.',
      es: 'Una app de boxeo con seguimiento de combates y funciones de comunidad.',
    },
  },
  {
    name: 'GYMERZ',
    tags: 'Flutter · .NET',
    image: gymerz,
    imageAlt: {
      en: 'GYMERZ fitness community and activity screens presented on iPhone',
      fr: 'Communauté sportive et écrans d’activité GYMERZ sur iPhone',
      es: 'Comunidad de fitness y pantallas de actividad de GYMERZ en iPhone',
    },
    summary: {
      en: 'A fitness marketplace connecting people with coaches and gyms.',
      fr: 'Une plateforme de fitness reliant utilisateurs, coachs et salles.',
      es: 'Una plataforma de fitness que conecta personas, entrenadores y gimnasios.',
    },
  },
  {
    name: 'PennyFlow',
    tags: 'SwiftUI · CoreData',
    image: pennyflow,
    imageAlt: {
      en: 'PennyFlow subscription budgets and payment calendar presented on iPhone',
      fr: 'Budgets d’abonnements et calendrier des paiements PennyFlow sur iPhone',
      es: 'Presupuestos de suscripciones y calendario de pagos de PennyFlow en iPhone',
    },
    summary: {
      en: 'A native iOS app for keeping track of recurring subscriptions.',
      fr: 'Une application iOS native pour suivre les abonnements récurrents.',
      es: 'Una app nativa de iOS para seguir las suscripciones recurrentes.',
    },
  },
  {
    name: 'iSophro',
    tags: 'Flutter · Firebase',
    image: isophro,
    imageAlt: {
      en: 'iSophro guided sessions and daily mood check-in presented on iPhone',
      fr: 'Séances guidées et bilan quotidien de l’humeur iSophro sur iPhone',
      es: 'Sesiones guiadas y registro diario del estado de ánimo de iSophro en iPhone',
    },
    summary: {
      en: 'A guided sophrology and wellness app with audio and video experiences.',
      fr: 'Une app de sophrologie et de bien-être avec des expériences audio et vidéo.',
      es: 'Una app de sofrología y bienestar con experiencias de audio y vídeo.',
    },
  },
  {
    name: 'Barid Purchase',
    tags: 'Flutter · Laravel',
    image: baridPurchase,
    imageAlt: {
      en: 'Barid Purchase procurement reports and budget charts presented on iPhone',
      fr: 'Rapports d’achats et graphiques budgétaires Barid Purchase sur iPhone',
      es: 'Informes de compras y gráficos presupuestarios de Barid Purchase en iPhone',
    },
    summary: {
      en: 'Mobile procurement workflows for Poste Maroc.',
      fr: 'Des outils mobiles de gestion des achats pour Poste Maroc.',
      es: 'Gestión de compras desde el móvil para Poste Maroc.',
    },
  },
];
