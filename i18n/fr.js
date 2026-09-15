const fr = {
  meta: {
    title: "Kamela EG | Développeur Fullstack",
    description:
      "Kamela Emile Ghislain — Développeur Fullstack. Conception d'API et de backends, intégration front, applications mobiles.",
  },

  nav: {
    home: "Accueil",
    about: "À propos",
    experience: "Parcours",
    projects: "Projets",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    toLight: "Passer au thème clair",
    toDark: "Passer au thème sombre",
    toLocale: "Read in English",
  },

  hero: {
    greeting: "Bonjour",
    intro: "Je suis Kamela",
    role: "Développeur Fullstack",
    primaryCta: "Un projet ?",
    resume: "Mon CV",
    work: "Voir mes projets",
    portraitAlt: "Portrait de Kamela Emile Ghislain",
  },

  about: {
    heading: "À propos",
    paragraphs: [
      "Je suis ingénieur en télécommunications, spécialisé en réseaux et services mobiles. Depuis quelques années j'affûte mon métier, d'abord comme développeur backend et intégrateur web, aujourd'hui sur toute la chaîne.",
      "Je tiens autant à la conception d'API propres et de backends fiables qu'aux interfaces que les gens manipulent vraiment. À côté de ça, j'écoute beaucoup de musique.",
    ],
  },

  services: {
    backend: {
      title: "Backend & conception d'API",
      description:
        "Services Node, Python/Odoo et Laravel — modélisés, testés, conteneurisés et livrés par la CI.",
    },
    frontend: {
      title: "Frontend & intégration web",
      description:
        "Interfaces React et Next.js fidèles à la maquette, responsives et traduites.",
    },
    mobile: {
      title: "Applications mobiles",
      description:
        "Applications multiplateformes en React Native et Expo, du routage à la mise en ligne.",
    },
  },

  stats: {
    experience: "Années d'expérience",
    technologies: "Technologies utilisées",
    delivered: "Projets livrés",
  },

  experience: {
    heading: "Expériences professionnelles",
    current: "En poste",

    afreetech: {
      position: "Ingénieur d'etudes / Développeur Fullstack",
      company: "Afreetech",
      about:
        "ESN camerounaise spécialisée dans la digitalisation des entreprises et des administrations : ERP, gestion électronique de documents, infrastructure et développement applicatif, pour des clients publics et industriels d'Afrique centrale et de l'Ouest.",
      period: "Déc. 2025 — Aujourd'hui",
      missions: [
        "Développement des modules recouvrement, abonnements et portail client de l'ERP Odoo d'un opérateur national d'eau.",
        "Réalisation du back-office d'administration du portail de l'Observatoire du Numérique : tableaux de données, gestion des rôles, comparatif d'indicateurs.",
        "Lead front-end de l'e-agence abonnés : tableau de bord, couche API et les six parcours de demande de service.",
        "Contribution à un outil de bureau Electron interne — pages, composants et interface bilingue.",
        "Travail en Git Flow sur pipelines GitLab CI : tests unitaires et end-to-end, quality gate SonarQube, scan Trivy, déploiement automatique en QA.",
      ],
    },

    novobyte: {
      position: "Développeur Fullstack",
      company: "Novobyte LLC",
      about:
        "Société de services informatiques basée à Yaoundé, qui conçoit des logiciels sur mesure — applications web et mobiles, API, UI/UX, cloud et DevOps.",
      period: "2021 — Déc. 2025",
      missions: [
        "Développement front de Shoppy, la marketplace multi-vendeurs : pages boutique et collections, recherche à facettes, avis produits, thème et responsive.",
        "Conception et réalisation de l'API REST de HELDIS, plateforme de gestion scolaire : 25 modèles, authentification par jeton, scan de badges et notifications push aux parents.",
        "Interfaces d'administration et intégrations web d'après maquettes, sur plusieurs produits du catalogue.",
        "API Spring Boot d'une plateforme de déménagement, développée en binôme : commandes de transport, disponibilités, tarification par zones.",
        "Plateforme communautaire de développeurs : bootcamps, hackathons, publications et modération.",
        "Sites vitrines et pages d'accueil réalisés d'après maquettes.",
      ],
    },
  },

  projects: {
    heading: "Projets",
    viewGithub: "Voir sur Github",
    viewProject: "Voir le projet",
    screenshotAlt: "Capture d'écran de {title}",
    showMore: "Voir les {count} autres projets",
    showLess: "Réduire la liste",

    "gescom-erp": {
      title: "Gescom — ERP métier",
      role: "Développeur odoo",
      description:
        "Un ERP qui couvre le métier d'un opérateur national d'eau à travers une quarantaine de modules Odoo sur mesure : abonnements et branchements, relevés et tournées, facturation, recouvrement, gestion de la fraude, interventions et incidents, caisse, stock et achats, GED et SMS. Livré avec un chart Helm, un pipeline GitLab CI, une suite pytest à fixtures partagées et un wiki d'ingénierie d'une vingtaine de pages.",
    },
    "camwater-eagency": {
      title: "Gescom e-Agency",
      role: "Développeur front-end",
      description:
        "Le versant client de ce même opérateur : les abonnés demandent un branchement, un déplacement de compteur, un étalonnage ou une remise en service, déposent des réclamations, règlent leurs factures et rechargent leur compteur prépayé — chaque demande suivie par référence, y compris pour un visiteur non connecté.",
    },
    "odn-portal": {
      title: "Observatoire du Numérique",
      role: "Développeur front-end",
      description:
        "Le portail public d'un ministère du numérique, qui publie les indicateurs numériques du pays. Next.js 15 en App Router, Redux Toolkit et internationalisation complète, le tout encadré par un pipeline GitLab qui enchaîne tests unitaires et end-to-end, quality gate SonarQube et scan Trivy avant chaque déploiement en QA.",
    },
    "aft-automatisation": {
      title: "Automatisation — Bureau",
      role: "Développeur front-end",
      description:
        "Un outil de bureau multiplateforme qui classe des références techniques selon une taxonomie de catégories, de spécialités et d'experts, puis résout chacune vers son dossier sur le partage de l'entreprise. Connexion LDAP, base locale pilotée depuis le processus principal via IPC, interface bilingue.",
    },
    "shoppy-web": {
      title: "Shoppy Web",
      role: "Développeur front-end",
      description:
        "Une marketplace multi-vendeurs : vitrines localisées, catalogues et collections, pages par boutique, recherche à facettes, panier et commande vérifiée par téléphone, ainsi qu'un espace client complet — commandes, abonnements, transactions et liste d'envies. Chat vendeur, données structurées JSON-LD, couche d'API interne, tests end-to-end et supervision des erreurs.",
    },
    "etic-saas": {
      title: "ETIC — Plateforme SaaS",
      role: "Développeur front-end",
      description:
        "Une plateforme SaaS multilingue de tutorat : abonnements adossés à Stripe, espace d'administration bâti sur des tableaux paginés, et parcours de demande qui relient les clients aux tuteurs.",
    },
    "heavens-hotel": {
      title: "Heavens Hotel",
      role: "Développeur front-end",
      description:
        "Le site complet d'un hôtel — chambres, activités, restauration, réservation et paiement, galerie, blog et recrutement — doublé d'un back-office d'administration bâti autour de tableaux de données et d'un éditeur de contenu riche.",
    },
    "app-meteo": {
      title: "Application météo nationale",
      role: "Développeur mobile",
      description:
        "Une application météo mobile pour un service météorologique national : parcours d'accueil guidé, choix de la localisation, tableau de bord quotidien, radar animé, alertes de phénomènes dangereux et bulletins officiels publiés par les prévisionnistes.",
    },
    "home-beauty": {
      title: "Home Beauty",
      role: "Développeur mobile",
      description:
        "Une application mobile de mise en relation pour des prestations de beauté à domicile, avec deux parcours distincts — cliente et prestataire. Authentification et notifications push Firebase, géolocalisation et envoi de photos, adossées à une API Node/Express dédiée.",
    },
    "jojo-backend": {
      title: "Jojo — API de déménagement",
      role: "Développeur backend",
      description:
        "L'API Spring Boot d'une place de marché de déménagement et de livraison : le client décrit ce qu'il fait transporter, le service le chiffre à partir d'un inventaire de mobilier et de règles de zones, puis l'associe à un déménageur. Authentification JWT avec OTP, pièces d'identité et permis de conduire, versements par IBAN, notations et e-mails transactionnels, le tout sur MongoDB.",
    },
    "heldis-school": {
      title: "API de gestion scolaire",
      role: "Développeur backend",
      description:
        "Une API REST Laravel qui porte toute une année scolaire à travers 25 modèles : inscriptions, classes, matières et personnel, appels et présences, devoirs, évaluations et notes de bulletin, sanctions et convocations — avec authentification par jeton, scan de badges et notifications push vers les parents.",
    },
    premierdev: {
      title: "PremierDev — Plateforme communautaire",
      role: "Développeur backend",
      description:
        "Une plateforme pour une communauté de développeurs : bootcamps et hackathons, tuteurs et promotions d'étudiants, équipes et sponsors, ainsi qu'un fil de publications avec commentaires, likes et compteurs de vues.",
    },
    "landing-ebm": {
      title: "EBM — Page d'accueil",
      role: "Développeur frontend",
      description:
        "Un site vitrine d'une page en React : carrousel d'accroche, section services et appel à l'action, sur une grille Bootstrap.",
    },
  },

  contact: {
    label: "Contact",
    heading: ["Un projet en tête ?", "Parlons-en !"],
    body: "Dites-moi ce que vous construisez et en quoi je peux aider. Je réponds en général sous deux jours.",
    name: "Nom",
    email: "E-mail",
    message: "Message",
    submit: "Envoyer",
    hint: "Ouvre votre client mail avec le message prêt à partir.",
    mailSubject: "Portfolio — message de {name}",
  },

  footer: {
    rights: "Conçu et développé avec soin — tous droits réservés, {year}.",
  },
};

export default fr;
