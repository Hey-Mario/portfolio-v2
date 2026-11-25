import type { PortfolioContent } from "./types"

/**
 * Sources: git history of the projects below, the CV, and the recommendation letter
 * from the Technical Lead of Solar Transit Ltd (18 Nov 2026).
 */
export const en: PortfolioContent = {
  hero: {
    role: "Full-stack engineer",
    availability: "Available now · missions & full-time roles",
    title: "I build SaaS and marketplace platforms.",
    highlights: ["SaaS", "marketplace"],
    summary:
      "I'm Mario, a full-stack engineer with 3.5+ years in production. I've shipped features for a solar-energy group's simulation, rental and marketplace products, an e-learning marketplace and an online auction platform, using Next.js, Angular, NestJS, Python and Laravel.",
    location: "Antananarivo, Madagascar · Remote (UTC+3)",
    primaryCta: "Start a project",
    secondaryCta: "Download CV",
  },
  stats: [
    { value: "3.5+ yrs", label: "building production software" },
    { value: "10+", label: "live websites & platforms I've contributed to" },
    { value: "6", label: "hackathon & competition podiums" },
  ],
  about: {
    eyebrow: "About",
    title: "Engineer first, product-minded always.",
    paragraphs: [
      "Since May 2023 at Solar Transit Ltd (Ivato), I build software for a Mauritius-based solar-energy group: a paid solar simulator, a leasing customer journey, a supplier marketplace and an internal ERP.",
      "I delivered Akademika.mg, an e-learning marketplace, as a freelance mission. Since October 2026 I'm a partner at Pyxis, the company behind Lavanty.online, Madagascar's online auction marketplace.",
      "I'm completing an MSc in AI & Big Data (ESTIA). I use AI-assisted development daily as an accelerator, never as a substitute for design, tests and review.",
    ],
    pillarsTitle: "Why teams work with me",
    pillars: [
      {
        title: "End-to-end ownership",
        description:
          "From schema to API, interface and deployment, with the specs and tests that keep it maintainable.",
      },
      {
        title: "Business logic that holds up",
        description:
          "Lead-to-payment flows, commissions, wallets, multi-currency pricing, KYC and disputes.",
      },
      {
        title: "Performance & reliability",
        description:
          "Server-side work, caching, atomic database updates and integration tests before every refactor.",
      },
      {
        title: "Security by default",
        description:
          "Brute-force lockouts, safe redirects, session revocation, rate limits and httpOnly-cookie auth.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "How I can help",
    intro:
      "Extra hands for your team, or the engineer who takes your product from idea to production.",
    items: [
      {
        title: "Full-stack web applications",
        description:
          "Production-ready apps: Next.js or Angular front end, NestJS, Fastify or Laravel back end.",
      },
      {
        title: "SaaS & marketplace features",
        description:
          "Subscriptions and seat limits, payments and commissions, referrals, reviews and rankings, admin back offices.",
      },
      {
        title: "APIs & integrations",
        description:
          "Validated, documented REST APIs, plus Odoo analytics, email, PDF, maps and file storage.",
      },
      {
        title: "Performance, security & maintenance",
        description:
          "Slow pages, heavy queries, authentication weaknesses and missing tests: fixed and documented.",
      },
      {
        title: "Cross-platform mobile apps",
        description: "Ionic and Capacitor apps sharing code and APIs with your web app.",
      },
    ],
    processTitle: "How I work",
    process: [
      {
        title: "Discover",
        description:
          "We clarify goals, users and constraints, and I surface hidden complexity early.",
      },
      {
        title: "Specify",
        description: "A short spec: agree on what “done” means.",
      },
      {
        title: "Build & test",
        description:
          "Small, reviewable iterations, automated tests on critical paths, regular demos.",
      },
      {
        title: "Ship & support",
        description: "Deployment, docs, follow-up.",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've been building",
    items: [
      {
        id: "pyxis",
        company: "Pyxis",
        role: "Partner & full-stack engineer",
        location: "Antananarivo · Remote",
        summary: "Company behind Lavanty.online, Madagascar's online auction marketplace.",
        highlights: [
          "Built Lavanty's support system: tickets, agents, quick replies, phishing-safe links.",
          "Switchable bid guarantees (deposit or KYC-only), backed by 600+ lines of tests.",
          "Hardened authentication with escalating PIN lockout, open-redirect protection and server-side session revocation.",
          "Improved the internal task-management tool used by the sales team: task duplication, outcome tracking and permissions.",
          "Built the bilingual (French/English) Pyxis company website on Next.js 16, with Playwright and axe accessibility checks across 16 viewport widths.",
        ],
      },
      {
        id: "solar-transit",
        company: "Solar Transit Ltd (FINAMAD)",
        role: "Full-stack developer",
        location: "Ivato, Madagascar",
        summary: "Sales, simulation, marketplaces and customer journeys for a solar-energy group.",
        highlights: [
          "PVGIS paid simulator: multi-currency, multilingual, RTL, SEO, result caching.",
          "Solar Rent: bill validation, lead tracking, appointments, live notifications.",
          "SFER ERP: lead-to-payment workflows, automated and bulk lead allocation, daily reminder emails, reporting and faster search and counts.",
          "Solar Advisor marketplace: supplier and product pages, reviews and favourites, and a NestJS API that ranks suppliers by continent.",
          "Platform foundations: multi-tenant seat limits, secure admin support access, referrals, Odoo CRM analytics and auditable data synchronisation with recovery.",
          "Other live sites I contributed to: solarpool.mu, msdg.mu, mbs467.mu, solar-pv-schemes.mu, solardropshipping.com.",
        ],
      },
      {
        id: "akademika",
        company: "Akademika.mg",
        role: "Full-stack developer · freelance mission",
        location: "Antananarivo · Remote",
        summary: "E-learning marketplace where trainers sell courses in Ariary.",
        highlights: [
          "Built the NestJS back end and a reusable TypeORM query layer.",
          "SQL-view progress tracking and a full quiz system.",
          "Built the commerce flow: orders created in a single database transaction, coupons, affiliate links, instructor commissions, and Mobile Money payments that an admin verifies and approves.",
        ],
      },
      {
        id: "mahomby",
        company: "Mahomby",
        role: "Full-stack developer intern",
        location: "Antananarivo",
        summary: "Startup app helping students find and apply to universities.",
        highlights: [
          "Designed and built the MongoDB data model.",
          "Built the mobile app interface with Angular and Ionic, and the REST API with Node.js and Express.",
          "Handled the deployment on Render.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected work",
    intro: "Products I've built or contributed to in production.",
    items: [
      {
        id: "lavanty",
        name: "Lavanty.online",
        category: "Online auction marketplace",
        role: "Partner · full-stack engineer",
        summary:
          "Madagascar's online auction marketplace: live bidding, verified identities, guided handover.",
        highlights: [
          "Integrated support system (Fastify, MongoDB, Next.js): tickets, private attachments, agent assignment, quick replies, screenshot capture and link rendering that blocks phishing patterns.",
          "Bid-guarantee Strategy pattern: switch between deposit-backed and KYC-only bidding, even mid-auction, pinned down by 600+ lines of integration tests.",
          "Authentication hardening: escalating PIN lockout, open-redirect protection, server-side logout and session replacement per browser.",
          "Race-free daily AI quotas and referral rewards using atomic MongoDB updates and per-account serialised, retryable processing.",
          "Accent-insensitive, ranked listing search, and rate-limited seller lookup to prevent enumeration.",
          "Dispute and arbitration flows: buyer no-show sanctions, offer to the second bidder, idempotent dispute opening.",
          "Automated the generation of an always up-to-date FAQ by running a carefully structured prompt through a reusable AI skill.",
        ],
      },
      {
        id: "akademika",
        name: "Akademika.mg",
        category: "E-learning marketplace",
        role: "Full-stack developer · freelance",
        summary: "A Udemy-style platform for Madagascar: courses in Ariary, quizzes, certificates.",
        highlights: [
          "Authored about two-thirds of the project's commits and created its NestJS back end.",
          "Reusable TypeORM query engine: around fourteen filter operators, nested joins, GraphQL-like field selection and nested sorting.",
          "Course progress computed by SQL views instead of counters that can drift, and quizzes locked until the course is completed.",
          "Complete quiz system: teacher-side builder, multiple-choice grading against a pass mark, limited attempts and feedback modes.",
          "Commerce: orders created in a single database transaction, coupons, affiliate links, per-instructor commission splits, and manual Mobile Money payments that an admin verifies and approves.",
          "Admin back office, httpOnly-cookie JWT sessions, role-based UI and SEO metadata.",
        ],
      },
      {
        id: "pvgis",
        name: "PVGIS24 · pvgis.com",
        category: "Solar simulation SaaS",
        role: "Full-stack developer · Solar Transit",
        summary:
          "Photovoltaic simulation SaaS: production estimates, financial analysis, PDF reports.",
        focus: ["Multi-currency", "i18n & RTL", "SEO", "Caching"],
        highlights: [
          "Multi-currency pricing.",
          "Multilingual interface with right-to-left language support.",
          "SEO sitemaps.",
          "Simulations created on customers' behalf.",
          "Caching of simulation results.",
        ],
        note: "As described in my Technical Lead's recommendation letter.",
      },
      {
        id: "solar-rent",
        name: "Solar Rent",
        category: "Solar leasing platform · Mauritius",
        role: "Full-stack developer · Solar Transit",
        summary:
          "Solar leasing with full maintenance: request a study, sign up, follow your project.",
        focus: ["Customer onboarding", "Lead tracking", "Appointments", "Real-time notifications"],
        highlights: [
          "Electricity-bill (CEB) validation during registration.",
          "Lead-to-customer progress tracking.",
          "Appointment management with real-time notifications.",
          "Co-developed the business and enterprise editions.",
        ],
        note: "As described in my Technical Lead's recommendation letter.",
      },
      {
        id: "solar-advisor",
        name: "Solar Advisor",
        category: "Solar products & suppliers marketplace",
        role: "Full-stack developer · Solar Transit",
        summary: "Compare solar panels, inverters and suppliers: reviews, rankings, simulations.",
        highlights: [
          "NestJS ranking API: suppliers ranked by continent from approved reviews, with a minimum-review threshold and tie-aware ranking.",
          "Review summaries (averages, star breakdowns, top tags) and rating fields on product listings via TypeORM virtual columns.",
          "Moved review filtering and sorting from the browser to the server.",
          "Favourites, slug-based URLs, supplier and product pages (Laravel, Livewire).",
          "Solar projects with a Google Maps satellite picker and multi-page PDF reports rendered with Gotenberg.",
          "Account lifecycle: scheduled deletion, encrypted reactivation links and split customer/admin subdomains.",
        ],
      },
      {
        id: "sfer",
        name: "SFER ERP",
        category: "Internal ERP & sales pipeline",
        role: "Full-stack developer · Solar Transit",
        summary: "The internal tool that runs the sales pipeline, from lead to payment.",
        focus: ["ERP", "Sales pipeline", "Reporting", "Email automation"],
        highlights: [
          "Lead-to-payment workflows.",
          "Automated and bulk lead allocation.",
          "Daily reminder emails, reporting and charts.",
          "Performance work: lazy loading, faster search and counts.",
        ],
        note: "As described in my Technical Lead's recommendation letter.",
      },
      {
        id: "pyxis-site",
        name: "pyxis.site",
        category: "Company website",
        role: "Partner · front-end",
        summary: "The bilingual website of Pyxis, the studio behind Lavanty.",
        highlights: [
          "Redesigned landing page with typed French and English copy.",
          "Share images generated at build time and structured data for search engines.",
          "Playwright test suite covering 16 viewport widths, accessibility (axe), no-JavaScript rendering and reduced motion.",
        ],
      },
    ],
    more: {
      title: "Other live sites I've contributed to",
      items: [
        {
          name: "Solardropshipping",
          url: "https://solardropshipping.com",
          description: "Wholesale solar supplies marketplace",
        },
        {
          name: "Solar PV Schemes",
          url: "https://solar-pv-schemes.mu",
          description: "Tool for preparing CEB solar-scheme application files",
        },
        {
          name: "MSDG.mu",
          url: "https://msdg.mu",
          description: "Online registration for CEB's small-scale solar program",
        },
        {
          name: "SolarPool",
          url: "https://solarpool.mu",
          description: "Solar-powered pool pumps by Solar Center Mauritius",
        },
        {
          name: "MBS467",
          url: "https://mbs467.mu",
          description: "Advertising on Mauritius' largest outdoor LED screen",
        },
      ],
    },
  },
  testimonial: {
    eyebrow: "Recommendation",
    quotes: [
      "Mario's contributions demonstrate an appreciation of the full software lifecycle: effective user journeys, commercial functionality, maintainable platform foundations and system performance.",
    ],
    author: "Arvish Mungur",
    role: "Technical Lead, Solar Transit Ltd",
  },
  skills: {
    eyebrow: "Skills",
    title: "Tools I use to ship",
    groups: [
      {
        title: "Front end",
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
        title: "Back end",
        items: [
          "Node.js",
          "NestJS",
          "Fastify",
          "Express",
          "Laravel",
          "Filament",
          "FastAPI",
          "REST APIs",
          "WebSockets",
        ],
      },
      {
        title: "Data",
        items: ["MySQL", "MongoDB", "TypeORM", "SQL views & aggregations", "Zod validation"],
      },
      {
        title: "Quality & delivery",
        items: [
          "Vitest",
          "Playwright",
          "axe accessibility",
          "Git & code review",
          "Vercel",
          "Render",
        ],
      },
      {
        title: "Practices",
        items: [
          "i18n & RTL",
          "SEO",
          "Accessibility",
          "Web security",
          "Performance",
          "Functional specs",
          "AI-assisted development",
        ],
      },
    ],
  },
  education: {
    eyebrow: "Education",
    title: "Learning & recognition",
    items: [
      {
        degree: "MSc in Artificial Intelligence & Big Data (eBIHAR Master)",
        school: "ESTIA, France · via IT University, Madagascar",
        detail: "Big data, ML & deep learning, AI apps, cloud & cybersecurity.",
        status: "In progress",
      },
      {
        degree: "Bachelor's degree in Computer Science, Integration & Development",
        school: "ESTI, Antananarivo",
      },
      { degree: "Laravel framework training", school: "NDAO EDEV" },
      { degree: "English language course", school: "ECM English Course Madagascar" },
    ],
    awardsTitle: "Hackathons & competitions",
    awards: [
      {
        rank: "1st place",
        event: "ESTI internal project",
        project: "Goûteo, an online snack-ordering platform",
        url: "https://gouteo.vercel.app",
      },
      {
        rank: "1st place",
        event: "ESTI · PROJ210",
        date: "Oct 2022",
        project: "FC-Commerce, a platform to manage and sell continuing-education courses",
      },
      {
        rank: "2nd place",
        event: "DevFest Hackathon",
        date: "Nov 2022",
        project: "A community platform to raise awareness of and report pollution",
      },
      {
        rank: "2nd place",
        event: "Alliance Voahary Gasy Hackathon",
        date: "Dec 2022",
        project: "A mobile app making Malagasy laws easier to access",
      },
      {
        rank: "3rd place",
        event: "Zah@Geek · Orange Digital Center",
        date: "Jan 2023",
        project: "An educational mobile app for children with a parental web app",
      },
      {
        rank: "2nd place",
        event: "ESTI internal hackathon",
        date: "Mar 2023",
        project: "Alterneo, matching work-study students with companies",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something together",
    intro:
      "Tell me about your project or the role you're hiring for. I'm available right away for missions and full-time positions.",
  },
}
