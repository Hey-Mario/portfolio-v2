import type { PortfolioContent } from "./types"

/** Version française de `en.ts` — mêmes sources, même structure. */
export const fr: PortfolioContent = {
  hero: {
    role: "Ingénieur full-stack",
    availability: "Disponible à partir de janvier 2027 · missions & CDI",
    title:
      "Je conçois des plateformes SaaS et marketplaces fiables, de la base de données à l'interface.",
    summary:
      "Je suis Mario, ingénieur full-stack avec trois ans et demi d'expérience en production. J'ai livré des fonctionnalités pour les produits de simulation, de location et de marketplace d'un groupe du secteur solaire, une marketplace e-learning et une plateforme d'enchères en ligne, avec Next.js, Angular, NestJS, Fastify et Laravel.",
    location: "Antananarivo, Madagascar · À distance (UTC+3)",
    primaryCta: "Démarrer un projet",
    secondaryCta: "Télécharger le CV",
  },
  stats: [
    { value: "3,5 ans", label: "à développer des logiciels en production" },
    { value: "4", label: "plateformes en ligne auxquelles j'ai contribué" },
    { value: "6", label: "podiums en hackathons et concours" },
  ],
  about: {
    eyebrow: "À propos",
    title: "Ingénieur avant tout, orienté produit toujours.",
    paragraphs: [
      "Depuis mai 2023, je travaille à l'agence d'Ivato de Solar Transit Ltd, où je développe des logiciels commerciaux et techniques pour un groupe mauricien du secteur solaire : un simulateur solaire payant, un parcours client de location solaire, une marketplace de fournisseurs, un ERP interne et les services de plateforme partagés.",
      "En parallèle, j'ai réalisé Akademika.mg, une marketplace e-learning pour Madagascar, en mission freelance. Depuis octobre 2026, je suis associé chez Pyxis, la société derrière Lavanty.online, la marketplace d'enchères en ligne de Madagascar.",
      "Je termine le Master eBIHAR en IA & Big Data (ESTIA). J'utilise le développement assisté par IA au quotidien, comme accélérateur, jamais comme substitut à la conception, aux tests et à la revue de code.",
    ],
    pillarsTitle: "Pourquoi travailler avec moi",
    pillars: [
      {
        title: "Responsabilité de bout en bout",
        description:
          "Je mène une fonctionnalité du schéma de données à l'API, à l'interface et au déploiement, avec la spécification et les tests qui la rendent maintenable.",
      },
      {
        title: "Une logique métier solide",
        description:
          "Parcours du lead au paiement, commissions, portefeuilles, tarification multidevise, KYC et litiges : les règles commerciales dont vivent les SaaS et les marketplaces.",
      },
      {
        title: "Performance & fiabilité",
        description:
          "Déplacer les traitements du client vers le serveur, mettre en cache les résultats, utiliser des mises à jour atomiques et des tests d'intégration qui verrouillent le comportement avant un refactoring.",
      },
      {
        title: "Sécurité par défaut",
        description:
          "Verrouillage anti-force brute, redirections sûres, révocation de sessions, limitation de débit et authentification par cookie httpOnly font partie du travail, pas d'une étape après coup.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Comment je peux vous aider",
    intro:
      "En renfort senior dans votre équipe, ou comme l'ingénieur qui emmène votre produit de l'idée à la production.",
    items: [
      {
        title: "Applications web full-stack",
        description:
          "Applications prêtes pour la production avec Next.js ou Angular côté front et Node.js (NestJS, Fastify) ou Laravel côté back.",
      },
      {
        title: "Fonctionnalités SaaS & marketplace",
        description:
          "Abonnements et limites de sièges, paiements et commissions, parrainage, avis et classements, back-offices et outils de support.",
      },
      {
        title: "API & intégrations",
        description:
          "API REST validées et documentées, et intégrations : analytique CRM (Odoo), e-mails transactionnels, génération de PDF, cartes et stockage de fichiers.",
      },
      {
        title: "Performance, sécurité & maintenance",
        description:
          "Renforcement d'applications existantes : pages lentes, requêtes lourdes, failles d'authentification et tests manquants, corrigés et documentés.",
      },
      {
        title: "Applications mobiles multiplateformes",
        description:
          "Applications Ionic et Capacitor qui partagent le code et les API de votre plateforme web.",
      },
    ],
    processTitle: "Ma façon de travailler",
    process: [
      {
        title: "Comprendre",
        description:
          "Nous clarifions les objectifs, les utilisateurs et les contraintes. Je pose les questions qui révèlent tôt la complexité cachée.",
      },
      {
        title: "Spécifier",
        description:
          "Une spécification fonctionnelle courte avec critères d'acceptation, pour s'accorder sur ce que « terminé » veut dire avant de coder.",
      },
      {
        title: "Construire & tester",
        description:
          "Des itérations courtes et relisibles, des tests automatisés sur les parcours critiques et des démos régulières.",
      },
      {
        title: "Livrer & accompagner",
        description: "Déploiement, documentation et suivi une fois les vrais utilisateurs arrivés.",
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
        summary:
          "Pyxis est la société derrière Lavanty.online, la marketplace d'enchères en ligne de Madagascar.",
        highlights: [
          "Conception du système de support intégré de Lavanty : tickets, pièces jointes privées, assignation des agents, réponses rapides, capture d'écran et liens protégés contre l'hameçonnage.",
          "Garanties d'enchère placées derrière un pattern Strategy pour basculer entre enchères avec caution et enchères avec KYC seul, même en cours d'enchère, couvert par plus de 600 lignes de tests d'intégration.",
          "Renforcement de l'authentification : verrouillage progressif du code PIN, protection contre les redirections ouvertes et révocation des sessions côté serveur.",
          "Livraison du site bilingue de Pyxis sous Next.js 16, avec des tests Playwright et d'accessibilité axe sur 16 largeurs d'écran.",
        ],
      },
      {
        id: "solar-transit",
        company: "Solar Transit Ltd (FINAMAD)",
        role: "Développeur full-stack",
        location: "Ivato, Madagascar",
        summary:
          "Logiciels commerciaux et techniques pour un groupe mauricien du secteur solaire : opérations commerciales, simulation solaire, marketplaces et parcours clients.",
        highlights: [
          "Simulateur solaire payant PVGIS : multidevise, multilingue avec prise en charge de l'écriture de droite à gauche, sitemaps SEO, simulations pour le compte des clients et mise en cache des résultats.",
          "Solar Rent : validation de la facture d'électricité à l'inscription, suivi du lead au client et gestion des rendez-vous avec notifications en temps réel ; co-développement des éditions business et entreprise.",
          "ERP SFER : parcours du lead au paiement, attribution automatique et en masse des leads, e-mails de rappel quotidiens, reporting, recherche et comptages plus rapides.",
          "Marketplace Solar Advisor : pages fournisseurs et produits, avis et favoris, et une API NestJS qui classe les fournisseurs par continent.",
          "Socle de plateforme : limites de sièges multi-tenant, accès support administrateur sécurisé, parrainage, analytique CRM Odoo et synchronisation de données auditable avec reprise sur erreur.",
        ],
      },
      {
        id: "akademika",
        company: "Akademika.mg",
        role: "Développeur full-stack · mission freelance",
        location: "Antananarivo · À distance",
        summary:
          "Une marketplace e-learning où les formateurs malgaches vendent des cours en Ariary.",
        highlights: [
          "Création du back-end NestJS et d'une couche de requêtes TypeORM réutilisable : filtres, relations imbriquées, sélection de champs et tris.",
          "Suivi de progression calculé par des vues SQL, et système de quiz complet : création, notation, tentatives et modes de reprise.",
          "Partie commerce : paiement transactionnel, coupons, liens d'affiliation signés HMAC, commissions des formateurs et validation des commandes Mobile Money.",
        ],
      },
      {
        id: "mahomby",
        company: "Mahomby",
        role: "Stagiaire développeur full-stack",
        location: "Antananarivo",
        summary: "Premier projet professionnel, du modèle de données au déploiement.",
        highlights: [
          "Conception et création du modèle de données MongoDB.",
          "Interface utilisateur en Angular et Ionic, API REST en Node.js et Express.",
          "Déploiement du projet sur Render.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Projets",
    title: "Réalisations choisies",
    intro:
      "Des produits que j'ai construits ou auxquels j'ai contribué en production. Ouvrez un projet pour voir précisément ce sur quoi j'ai travaillé.",
    items: [
      {
        id: "lavanty",
        name: "Lavanty.online",
        category: "Marketplace d'enchères en ligne",
        role: "Associé · ingénieur full-stack",
        summary:
          "La marketplace d'enchères en ligne de Madagascar : enchères en direct avec enchère automatique, identités vérifiées et remise accompagnée entre acheteurs et vendeurs.",
        highlights: [
          "Système de support intégré (Fastify, MongoDB, Next.js) : tickets, pièces jointes privées, assignation des agents, réponses rapides, capture d'écran et affichage des liens qui bloque les motifs d'hameçonnage.",
          "Pattern Strategy pour les garanties d'enchère : bascule entre caution et KYC seul, même en cours d'enchère, verrouillée par plus de 600 lignes de tests d'intégration.",
          "Renforcement de l'authentification : verrouillage progressif du PIN, protection contre les redirections ouvertes, déconnexion côté serveur et remplacement de session par navigateur.",
          "Quotas IA quotidiens et récompenses de parrainage sans conditions de course, grâce à des mises à jour MongoDB atomiques et un traitement sérialisé et rejouable par compte.",
          "Recherche d'annonces insensible aux accents avec classement des résultats, et recherche de vendeurs limitée en débit contre l'énumération.",
          "Parcours de litige et d'arbitrage : sanction de l'acheteur absent, proposition au deuxième enchérisseur, ouverture de litige idempotente.",
        ],
      },
      {
        id: "akademika",
        name: "Akademika.mg",
        category: "Marketplace e-learning",
        role: "Développeur full-stack · freelance",
        summary:
          "Une plateforme à la Udemy pour Madagascar : les formateurs publient des cours en Ariary, les apprenants les suivent avec progression, quiz et certificats.",
        highlights: [
          "Auteur d'environ deux tiers des commits du projet et créateur de son back-end NestJS.",
          "Moteur de requêtes TypeORM réutilisable : une quinzaine d'opérateurs de filtre, jointures imbriquées, sélection de champs façon GraphQL et tri imbriqué.",
          "Progression calculée par des vues SQL plutôt que par des compteurs qui peuvent dériver, et quiz débloqués à la fin du cours.",
          "Système de quiz complet : création côté formateur, notation des QCM selon un seuil de réussite, tentatives limitées et modes de correction.",
          "Commerce : paiement transactionnel, coupons, liens d'affiliation signés HMAC, partage des commissions par formateur et validation des commandes Mobile Money.",
          "Back-office d'administration, sessions JWT en cookie httpOnly, interface selon les rôles et métadonnées SEO.",
        ],
      },
      {
        id: "pvgis",
        name: "PVGIS24 · pvgis.com",
        category: "SaaS de simulation solaire",
        role: "Développeur full-stack · Solar Transit",
        summary:
          "Une plateforme de simulation photovoltaïque pour les professionnels du solaire et les particuliers : estimations de production, analyse financière, rapports PDF et abonnements payants.",
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
        category: "Plateforme de location solaire · Maurice",
        role: "Développeur full-stack · Solar Transit",
        summary:
          "La location de panneaux solaires avec maintenance complète : les clients demandent une étude personnalisée, s'inscrivent et suivent leur projet solaire en ligne.",
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
        summary:
          "Une marketplace pour comparer panneaux, onduleurs et fournisseurs solaires, avec avis, classements et simulations de projets.",
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
  },
  testimonial: {
    eyebrow: "Recommandation",
    quotes: [
      "Les contributions de Mario témoignent d'une compréhension de l'ensemble du cycle de vie logiciel : des parcours utilisateurs efficaces, des fonctionnalités commerciales, des fondations de plateforme maintenables et la performance des systèmes.",
      "Plutôt que de considérer l'IA comme un substitut à la conception logicielle, il l'utilise comme une aide au développement, avec l'attention portée à la scalabilité, à la maintenabilité et aux exigences commerciales qu'on retrouve dans ses contributions.",
      "Je recommande Mario avec enthousiasme pour des postes d'ingénierie logicielle full-stack, de développement de plateformes SaaS et de systèmes métier.",
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
        detail:
          "Ingénierie big data, machine & deep learning, applications intégrant l'IA, cloud & cybersécurité.",
        status: "En cours",
      },
      {
        degree: "Licence en informatique, parcours Intégration & Développement",
        school: "ESTI, Antananarivo",
      },
      { degree: "Formation au framework Laravel", school: "NDAO EDEV" },
    ],
    awardsTitle: "Hackathons & concours",
    awards: [
      {
        rank: "1re place",
        event: "Projet interne ESTI",
        project: "Goûteo, une plateforme de commande de goûters en ligne",
        url: "https://gouteo.vercel.app",
      },
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
      {
        rank: "2e place",
        event: "Hackathon interne ESTI",
        date: "mars 2023",
        project: "Alterneo, la mise en relation d'étudiants en alternance et d'entreprises",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Construisons quelque chose ensemble",
    intro:
      "Parlez-moi de votre projet ou du poste que vous proposez. Je suis disponible pour des missions et des postes à temps plein à partir de janvier 2027.",
  },
}
