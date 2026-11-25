import type { PortfolioContent } from "./types"

/** Version française de `en.ts` — mêmes sources, même structure. */
export const fr: PortfolioContent = {
  hero: {
    role: "Ingénieur full-stack",
    availability: "Disponible immédiatement · missions & CDI",
    title: "Je conçois des plateformes SaaS et marketplaces.",
    highlights: ["SaaS et marketplaces"],
    summary:
      "Ingénieur full-stack, je livre en production des SaaS, des marketplaces et des plateformes d'enchères, avec Next.js, Angular, NestJS et Laravel.",
    location: "Antananarivo, Madagascar · À distance (UTC+3)",
    primaryCta: "Démarrer un projet",
    secondaryCta: "Télécharger le CV",
  },
  stats: [
    { value: "+3,5 ans", label: "à développer des logiciels en production" },
    { value: "+10", label: "plateformes en ligne auxquelles j'ai contribué" },
    { value: "4", label: "podiums en hackathons et concours" },
  ],
  about: {
    eyebrow: "À propos",
    title: "Ingénieur avant tout, orienté produit toujours.",
    paragraphs: [
      "Je m'occupe du produit entier, pas seulement du ticket : des specs claires, une logique métier solide, des pages rapides et sûres.",
      "Je termine un Master en IA & Big Data (ESTIA) et j'utilise le développement assisté par IA au quotidien, comme accélérateur, jamais comme substitut à la conception, aux tests et à la revue.",
    ],
    pillarsTitle: "Pourquoi travailler avec moi",
    pillars: [
      {
        title: "Responsabilité de bout en bout",
        description:
          "Du schéma à l'API, l'interface et le déploiement, avec les spécifications et tests qui la rendent maintenable.",
      },
      {
        title: "Une logique métier solide",
        description:
          "Parcours du lead au paiement, commissions, portefeuilles, tarification multidevise, KYC et litiges.",
      },
      {
        title: "Performance & fiabilité",
        description:
          "Traitements côté serveur, cache, mises à jour atomiques et tests d'intégration avant chaque refactoring.",
      },
      {
        title: "Sécurité par défaut",
        description:
          "Verrouillage anti-force brute, redirections sûres, révocation de sessions, limitation de débit et cookies httpOnly.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Comment je peux vous aider",
    intro:
      "En renfort de votre équipe, ou l'ingénieur qui mène votre produit de l'idée à la production.",
    items: [
      {
        title: "Applications web full-stack",
        description:
          "Applications prêtes pour la production : front Next.js ou Angular, back NestJS, Fastify ou Laravel.",
      },
      {
        title: "Fonctionnalités SaaS & marketplace",
        description:
          "Abonnements et limites de sièges, paiements et commissions, parrainage, avis et classements, back-offices.",
      },
      {
        title: "API & intégrations",
        description:
          "API REST validées et documentées, plus analytique Odoo, e-mails, PDF, cartes et stockage de fichiers.",
      },
      {
        title: "Audit & maintenance",
        description:
          "Pages lentes, requêtes lourdes et tests manquants : repérés, corrigés et documentés.",
      },
      {
        title: "Applications mobiles multiplateformes",
        description: "Apps Ionic et Capacitor qui partagent code et API avec votre web.",
      },
    ],
    processTitle: "Ma façon de travailler",
    process: [
      {
        title: "Comprendre",
        description:
          "Nous clarifions objectifs, utilisateurs et contraintes, et je révèle tôt la complexité cachée.",
      },
      {
        title: "Spécifier",
        description: "Une spec courte : s'accorder sur ce que « terminé » veut dire.",
      },
      {
        title: "Construire & tester",
        description:
          "Itérations courtes et relisibles, tests automatisés sur les parcours critiques, démos régulières.",
      },
      {
        title: "Livrer & accompagner",
        description: "Déploiement, documentation et suivi après la mise en ligne.",
      },
    ],
  },
  experience: {
    eyebrow: "Expérience",
    title: "Là où j'ai construit",
    items: [
      {
        id: "pyxis",
        company: "Pyxis",
        role: "Associé & ingénieur full-stack",
        location: "Antananarivo · À distance",
        summary: "La société derrière Lavanty.online, marketplace d'enchères de Madagascar.",
        highlights: [
          "Système de support de Lavanty : tickets, agents, réponses rapides, liens anti-hameçonnage.",
          "Garanties d'enchère modulables (caution ou KYC seul), 600+ lignes de tests.",
          "Renforcement de l'authentification : verrouillage progressif du code PIN, protection contre les redirections ouvertes et révocation des sessions côté serveur.",
          "Amélioration de l'outil interne de gestion des tâches de l'équipe commerciale : duplication des tâches, suivi des résultats et permissions.",
          "Réalisation du site bilingue (français/anglais) de Pyxis sous Next.js 16, avec des tests Playwright et d'accessibilité axe sur 16 largeurs d'écran.",
        ],
      },
      {
        id: "solar-transit",
        company: "Solar Transit Ltd",
        role: "Développeur full-stack",
        location: "Ivato, Madagascar · FINAMAD",
        summary: "Ventes, simulation, marketplaces et parcours clients pour un groupe solaire.",
        highlights: [
          "Simulateur payant PVGIS : multidevise, multilingue, RTL, SEO, cache.",
          "Solar Rent : validation de facture, suivi des leads, rendez-vous, notifications.",
          "ERP SFER : parcours du lead au paiement, attribution automatique et en masse des leads, e-mails de rappel quotidiens, reporting, recherche et comptages plus rapides.",
          "Marketplace Solar Advisor : pages fournisseurs et produits, avis et favoris, et une API NestJS qui classe les fournisseurs par continent.",
          "Socle de plateforme : limites de sièges multi-tenant, accès support administrateur sécurisé, parrainage, analytique CRM Odoo et synchronisation de données auditable avec reprise sur erreur.",
          "Contributions à d'autres sites en ligne : solarpool.mu, msdg.mu, mbs467.mu, solar-pv-schemes.mu, solardropshipping.com.",
        ],
      },
      {
        id: "akademika",
        company: "Akademika.mg",
        role: "Développeur full-stack · mission freelance",
        location: "Antananarivo · À distance",
        summary: "Marketplace e-learning où les formateurs vendent des cours en Ariary.",
        highlights: [
          "Back-end NestJS et couche de requêtes TypeORM réutilisable.",
          "Suivi de progression par vues SQL et système de quiz complet.",
          "Partie commerce : commandes créées dans une seule transaction en base de données, coupons, liens d'affiliation, commissions des formateurs et paiements Mobile Money vérifiés puis validés par un administrateur.",
        ],
      },
      {
        id: "mahomby",
        company: "Mahomby",
        role: "Stagiaire développeur full-stack",
        location: "Antananarivo",
        summary: "Appli mobile d'une startup pour trouver une université et y postuler.",
        highlights: [
          "Conception et création du modèle de données MongoDB.",
          "Interface de l'application mobile en Angular et Ionic, API REST en Node.js et Express.",
          "Déploiement du projet sur Render.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Projets",
    title: "Réalisations choisies",
    intro: "Des produits construits ou auxquels j'ai contribué en production.",
    items: [
      {
        id: "lavanty",
        name: "Lavanty.online",
        imageAlt: "Page d'accueil de Lavanty.online : enchères en direct à Madagascar",
        category: "Marketplace d'enchères en ligne",
        role: "Associé · ingénieur full-stack",
        summary:
          "Enchères en direct, identités vérifiées, remise accompagnée entre acheteur et vendeur.",
        highlights: [
          "Système de support intégré (Fastify, MongoDB, Next.js) : tickets, pièces jointes privées, assignation des agents, réponses rapides, capture d'écran et affichage des liens qui bloque les motifs d'hameçonnage.",
          "Pattern Strategy pour les garanties d'enchère : bascule entre caution et KYC seul, même en cours d'enchère, verrouillée par plus de 600 lignes de tests d'intégration.",
          "Renforcement de l'authentification : verrouillage progressif du PIN, protection contre les redirections ouvertes, déconnexion côté serveur et remplacement de session par navigateur.",
          "Quotas IA quotidiens et récompenses de parrainage sans conditions de course, grâce à des mises à jour MongoDB atomiques et un traitement sérialisé et rejouable par compte.",
          "Recherche d'annonces insensible aux accents avec classement des résultats, et recherche de vendeurs limitée en débit contre l'énumération.",
          "Parcours de litige et d'arbitrage : sanction de l'acheteur absent, proposition au deuxième enchérisseur, ouverture de litige idempotente.",
          "Automatisation de la création d'une FAQ toujours à jour, en lançant un prompt soigneusement construit via un skill IA réutilisable.",
        ],
      },
      {
        id: "akademika",
        name: "Akademika.mg",
        imageAlt: "Page d'accueil d'Akademika.mg : formations en ligne",
        category: "Marketplace e-learning",
        role: "Développeur full-stack · freelance",
        summary: "Plateforme à la Udemy pour Madagascar : cours en Ariary, quiz, certificats.",
        highlights: [
          "Auteur d'environ deux tiers des commits du projet et créateur de son back-end NestJS.",
          "Moteur de requêtes TypeORM réutilisable : une quinzaine d'opérateurs de filtre, jointures imbriquées, sélection de champs façon GraphQL et tri imbriqué.",
          "Progression calculée par des vues SQL plutôt que par des compteurs qui peuvent dériver, et quiz débloqués à la fin du cours.",
          "Système de quiz complet : création côté formateur, notation des QCM selon un seuil de réussite, tentatives limitées et modes de correction.",
          "Commerce : commandes créées dans une seule transaction en base de données, coupons, liens d'affiliation, partage des commissions par formateur et paiements Mobile Money manuels, vérifiés puis validés par un administrateur.",
          "Back-office d'administration, sessions JWT en cookie httpOnly, interface selon les rôles et métadonnées SEO.",
        ],
      },
      {
        id: "pvgis",
        name: "PVGIS24 · pvgis.com",
        imageAlt: "Calculateur de panneaux solaires PVGIS24 avec carte satellite",
        category: "SaaS de simulation solaire",
        role: "Développeur full-stack · Solar Transit",
        summary:
          "SaaS de simulation photovoltaïque : production, analyse financière, rapports PDF.",
        focus: ["Multidevise", "i18n & RTL", "SEO", "Mise en cache"],
        highlights: [
          "Tarification multidevise.",
          "Interface multilingue avec prise en charge des langues de droite à gauche.",
          "Sitemaps SEO.",
          "Simulations créées pour le compte des clients.",
          "Mise en cache des résultats de simulation.",
        ],
        note: "Selon la lettre de recommandation de mon Technical Lead.",
      },
      {
        id: "solar-rent",
        name: "Solar Rent",
        imageAlt: "Page d'accueil de Solar Rent : l'énergie solaire sans risque",
        category: "Plateforme de location solaire · Maurice",
        role: "Développeur full-stack · Solar Transit",
        summary:
          "Location solaire avec maintenance : étude, inscription, suivi du projet en ligne.",
        focus: ["Inscription client", "Suivi des leads", "Rendez-vous", "Notifications temps réel"],
        highlights: [
          "Validation de la facture d'électricité (CEB) à l'inscription.",
          "Suivi de la progression du lead au client.",
          "Gestion des rendez-vous avec notifications en temps réel.",
          "Co-développement des éditions business et entreprise.",
        ],
        note: "Selon la lettre de recommandation de mon Technical Lead.",
      },
      {
        id: "solar-advisor",
        name: "Solar Advisor",
        category: "Marketplace de produits et fournisseurs solaires",
        role: "Développeur full-stack · Solar Transit",
        summary: "Comparez panneaux, onduleurs et fournisseurs : avis, classements, simulations.",
        highlights: [
          "API de classement NestJS : fournisseurs classés par continent à partir des avis approuvés, avec seuil minimal d'avis et gestion des ex æquo.",
          "Synthèses d'avis (moyennes, répartition par étoiles, tags principaux) et notes sur les listes de produits via des colonnes virtuelles TypeORM.",
          "Filtrage et tri des avis déplacés du navigateur vers le serveur.",
          "Favoris, URL à base de slugs, pages fournisseurs et produits (Laravel, Livewire).",
          "Projets solaires avec sélection satellite Google Maps et rapports PDF multipages générés avec Gotenberg.",
          "Cycle de vie des comptes : suppression programmée, liens de réactivation chiffrés et sous-domaines client/admin séparés.",
        ],
      },
      {
        id: "sfer",
        name: "ERP SFER",
        category: "ERP interne & pipeline commercial",
        role: "Développeur full-stack · Solar Transit",
        summary: "L'outil interne qui pilote le pipeline commercial, du lead au paiement.",
        focus: ["ERP", "Pipeline commercial", "Reporting", "Automatisation des e-mails"],
        highlights: [
          "Parcours du lead au paiement.",
          "Attribution automatique et en masse des leads.",
          "E-mails de rappel quotidiens, reporting et graphiques.",
          "Performance : chargement différé, recherche et comptages plus rapides.",
        ],
        note: "Selon la lettre de recommandation de mon Technical Lead.",
      },
      {
        id: "pyxis-site",
        name: "pyxis.site",
        imageAlt: "Page d'accueil de Pyxis : le bon produit numérique pour votre métier",
        category: "Site d'entreprise",
        role: "Associé · front-end",
        summary: "Le site bilingue de Pyxis, le studio derrière Lavanty.",
        highlights: [
          "Refonte de la page d'accueil avec des textes français et anglais typés.",
          "Images de partage générées au build et données structurées pour les moteurs de recherche.",
          "Suite de tests Playwright couvrant 16 largeurs d'écran, l'accessibilité (axe), le rendu sans JavaScript et la réduction des animations.",
        ],
      },
    ],
    more: {
      title: "Autres sites en ligne auxquels j'ai contribué",
      items: [
        {
          name: "Solardropshipping",
          url: "https://solardropshipping.com",
          description: "Marketplace de fournitures solaires en gros",
        },
        {
          name: "Solar PV Schemes",
          url: "https://solar-pv-schemes.mu",
          description: "Outil de préparation des dossiers de candidature solaire CEB",
        },
        {
          name: "MSDG.mu",
          url: "https://msdg.mu",
          description: "Inscription en ligne au programme solaire MSDG du CEB",
        },
        {
          name: "SolarPool",
          url: "https://solarpool.mu",
          description: "Pompes de piscine solaires par Solar Center Mauritius",
        },
        {
          name: "MBS467",
          url: "https://mbs467.mu",
          description: "Publicité sur le plus grand écran LED extérieur de Maurice",
        },
      ],
    },
  },
  testimonial: {
    eyebrow: "Recommandation",
    quotes: [
      "Les contributions de Mario témoignent d'une compréhension de l'ensemble du cycle de vie logiciel : des parcours utilisateurs efficaces, des fonctionnalités commerciales, des fondations de plateforme maintenables et la performance des systèmes.",
    ],
    author: "Arvish Mungur",
    role: "Technical Lead, Solar Transit Ltd",
    translated: "Traduit de l'anglais.",
  },
  skills: {
    eyebrow: "Compétences",
    title: "Mes outils pour livrer",
    groups: [
      {
        title: "Front-end",
        items: [
          "TypeScript",
          "Next.js",
          "React",
          "Angular",
          "NgRx",
          "Tailwind CSS",
          "Livewire",
          "Alpine.js",
          "Ionic / Capacitor",
        ],
      },
      {
        title: "Back-end",
        items: [
          "Node.js",
          "NestJS",
          "Fastify",
          "Express",
          "Laravel",
          "Filament",
          "FastAPI",
          "API REST",
          "WebSockets",
        ],
      },
      {
        title: "Données",
        items: ["MySQL", "MongoDB", "TypeORM", "Vues & agrégations SQL", "Validation Zod"],
      },
      {
        title: "Qualité & livraison",
        items: [
          "Vitest",
          "Playwright",
          "Accessibilité axe",
          "Git & revue de code",
          "Vercel",
          "Render",
        ],
      },
      {
        title: "Pratiques",
        items: [
          "i18n & RTL",
          "SEO",
          "Accessibilité",
          "Sécurité web",
          "Performance",
          "Spécifications fonctionnelles",
          "Développement assisté par IA",
        ],
      },
    ],
  },
  education: {
    eyebrow: "Formation",
    title: "Formation & distinctions",
    items: [
      {
        degree: "Master of Science en Intelligence Artificielle & Big Data (Master eBIHAR)",
        school: "ESTIA, France · via IT University, Madagascar",
        detail: "Big data, ML & deep learning, apps IA, cloud & cybersécurité.",
        status: "En cours",
      },
      {
        degree: "Licence en informatique, parcours Intégration & Développement",
        school: "ESTI, Antananarivo",
      },
    ],
    awardsTitle: "Hackathons & concours",
    awards: [
      {
        rank: "1re place",
        event: "ESTI · PROJ210",
        date: "oct. 2022",
        project: "FC-Commerce, une plateforme de gestion et de vente de formations continues",
      },
      {
        rank: "2e place",
        event: "Hackathon DevFest",
        date: "nov. 2022",
        project:
          "Une plateforme communautaire de sensibilisation et de signalement de la pollution",
      },
      {
        rank: "2e place",
        event: "Hackathon Alliance Voahary Gasy",
        date: "déc. 2022",
        project: "Une application mobile pour faciliter l'accès aux lois malgaches",
      },
      {
        rank: "3e place",
        event: "Zah@Geek · Orange Digital Center",
        date: "janv. 2023",
        project: "Une application mobile éducative pour enfants avec une application web parentale",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Construisons quelque chose ensemble",
    intro: "Parlez-moi de votre projet ou du poste que vous proposez. Je réponds sous 24 h.",
  },
}
