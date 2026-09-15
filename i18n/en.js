const en = {
  meta: {
    title: "Kamela EG | Fullstack Developer",
    description:
      "Kamela Emile Ghislain — Fullstack Developer. Backend and API design, frontend integration, mobile applications.",
  },

  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contacts",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
    toLocale: "Lire en français",
  },

  hero: {
    greeting: "Hello",
    intro: "I'm Kamela",
    role: "Fullstack Developer",
    primaryCta: "Got a project?",
    resume: "My resume",
    work: "See my work",
    portraitAlt: "Portrait of Kamela Emile Ghislain",
  },

  about: {
    heading: "About me",
    paragraphs: [
      "I am a Telecommunications Engineer specialised in Mobile Networks & Services. For the past few years I have been sharpening my craft first as a backend developer and web integrator, now across the whole stack.",
      "I care about modelling clean APIs and dependable backends as much as about the interfaces people actually touch. Outside of that, I mostly listen to music.",
    ],
  },

  services: {
    backend: {
      title: "Backend & API Design",
      description:
        "Node, Python/Odoo and Laravel services — modelled, tested, containerised and shipped through CI.",
    },
    frontend: {
      title: "Frontend & Web Integration",
      description:
        "React and Next.js interfaces built pixel-close to the design, responsive and localised.",
    },
    mobile: {
      title: "Mobile Applications",
      description:
        "Cross-platform apps with React Native and Expo, from routing to store release.",
    },
  },

  stats: {
    experience: "Years of experience",
    technologies: "Technologies used",
    delivered: "Projects delivered",
  },

  experience: {
    heading: "Professional experience",
    current: "Current",

    afreetech: {
      position: "Fullstack Developer",
      company: "Afreetech",
      about:
        "A Cameroon-based digital services firm specialising in enterprise and government digitalisation: ERP, document management, infrastructure and application development for public and industrial clients across Central and West Africa.",
      period: "Dec 2025 — Present",
      missions: [
        "Built the debt-collection, subscriptions and customer-portal modules of the Odoo ERP running a national water utility.",
        "Delivered the administration back-office of the Observatoire du Numérique portal: data tables, role management, indicator comparison.",
        "Lead front-end on the subscriber e-agency: dashboard, API layer and the six service-request workflows.",
        "Contributed to an internal Electron desktop tool — pages, components and the bilingual interface.",
        "Worked in Git Flow on GitLab CI pipelines: unit and end-to-end tests, SonarQube quality gate, Trivy scanning, automatic QA deploys.",
      ],
    },

    novobyte: {
      position: "Fullstack Developer",
      company: "Novobyte LLC",
      about:
        "A Yaoundé-based IT services company building custom software — web and mobile apps, APIs, UI/UX, cloud and DevOps.",
      period: "2021 — Dec 2025",
      missions: [
        "Front-end development of Shoppy, the multi-vendor marketplace: shop and collections pages, faceted search, product reviews, theming and responsive work.",
        "Designed and built the REST API of HELDIS, a school-management platform: 25 models, token auth, badge scanning and push notifications to parents.",
        "Administration interfaces and web integrations from designs, across several products in the catalogue.",
        "Spring Boot API for a moving platform, built with one other developer: transport orders, availability windows, zone-based pricing.",
        "Developer community platform: bootcamps, hackathons, publications and moderation.",
        "Marketing sites and landing pages built from designs.",
      ],
    },
  },

  projects: {
    heading: "Projects",
    viewGithub: "View Github",
    viewProject: "View project",
    screenshotAlt: "{title} screenshot",
    showMore: "See {count} more projects",
    showLess: "Show fewer projects",

    "gescom-erp": {
      title: "Gescom — Utility ERP",
      role: "Odoo developer",
      description:
        "An ERP covering the business of a national water utility across ~38 custom Odoo modules: subscriptions and connections, metering and field rounds, billing, debt collection, fraud handling, interventions and incidents, cash desk, stock and purchasing, document management and SMS. Shipped with a Helm chart, a GitLab CI pipeline, a pytest suite with shared fixtures and a 20+ page engineering wiki.",
    },
    "camwater-eagency": {
      title: "Gescom e-Agency",
      role: "Front-end developer",
      description:
        "The customer-facing side of that same utility: subscribers request a new connection, a meter relocation, a calibration or a reconnection, file complaints, settle invoices and top up prepaid meters — each request tracked by reference, including for visitors who are not signed in.",
    },
    "odn-portal": {
      title: "Observatoire du Numérique",
      role: "Front-end developer",
      description:
        "A public portal for a national digital-affairs ministry, publishing the country's digital indicators. Next.js 15 with the App Router, Redux Toolkit and full internationalisation, wrapped in a GitLab pipeline that runs unit and end-to-end tests, SonarQube quality gates and Trivy image scanning before every QA deploy.",
    },
    "aft-automatisation": {
      title: "Automation — Desktop",
      role: "Front-end developer",
      description:
        "A cross-platform desktop tool that files technical references against a taxonomy of categories, specialties and experts, then resolves each one to its folder on the company share. LDAP sign-in, a local database reached from the main process over IPC, and a bilingual interface.",
    },
    "shoppy-web": {
      title: "Shoppy Web",
      role: "Front-end developer",
      description:
        "A multi-vendor marketplace: localised storefronts, catalogs and collections, per-shop pages, deep search, cart and phone-verified checkout, plus a full customer area covering orders, subscriptions, transactions and wishlist. Vendor chat, JSON-LD structured data, an internal API layer, end-to-end tests and error monitoring.",
    },
    "etic-saas": {
      title: "ETIC — SaaS Platform",
      role: "Front-end developer",
      description:
        "A multilingual SaaS platform for tutoring: Stripe-backed subscriptions, an administration area over paginated data tables, and request workflows connecting customers with tutors.",
    },
    "heavens-hotel": {
      title: "Heavens Hotel",
      role: "Front-end developer",
      description:
        "A complete hotel website — rooms, activities, dining, booking and checkout, gallery, blog and careers — paired with an admin back-office built around data tables and a rich-text content editor.",
    },
    "app-meteo": {
      title: "National Weather App",
      description:
        "A mobile weather app for the national meteorology service: guided onboarding, location picker, daily dashboard, animated radar view, severe-weather alerts and the official bulletins published by forecasters.",
    },
    "home-beauty": {
      title: "Home Beauty",
      role: "Mobile developer",
      description:
        "A marketplace mobile app for at-home beauty services, with two separate journeys — customer and provider. Firebase auth and push notifications, geolocation and photo upload, backed by a dedicated Node/Express API.",
    },
    "jojo-backend": {
      title: "Jojo — Moving Platform API",
      role: "Backend developer",
      description:
        "The Spring Boot API behind a moving and delivery marketplace: customers describe what they need shipped, the service prices it from a furniture inventory and zone rules, and matches it to a mover. JWT authentication with OTP, KYC documents and driver licences, IBAN payouts, ratings and transactional email, all on MongoDB.",
    },
    "heldis-school": {
      title: "School Management API",
      role: "Backend developer",
      description:
        "A Laravel REST API running a school year end to end across 25 models: enrolment, classrooms, subjects and staff, attendance registers, homework, evaluations and report-card scores, disciplinary records and convocations — with token auth, badge scanning and push notifications to parents.",
    },
    premierdev: {
      title: "PremierDev — Community Platform",
      role: "Backend developer",
      description:
        "A platform for a developer community: bootcamps and hackathons, tutors and student cohorts, teams and sponsors, plus a publication feed with comments, likes and view counts.",
    },
    "landing-ebm": {
      title: "EBM — Landing Page",
      role: "Front-end developer",
      description:
        "A single-page marketing site in React: rotating hero carousel, services section and call to action, built on a Bootstrap grid.",
    },
    "hackathon-aft": {
      title: "AFT — Interactive Showcase",
      description:
        "A showcase site built for a hackathon: real-time 3D scenes with React Three Fiber, timeline-driven animation and section transitions tied to scroll position.",
    },
  },

  contact: {
    label: "Contacts",
    heading: ["Have a project?", "Let's talk!"],
    body: "Tell me what you are building and how I can help. I usually answer within a couple of days.",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Submit",
    hint: "Opens your mail client with the message ready to send.",
    mailSubject: "Portfolio — message from {name}",
  },

  footer: {
    rights: "Designed and built with care — all rights reserved, {year}.",
  },
};

export default en;
