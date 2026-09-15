const CAREER_START = 2022;

/*
  Structure uniquement — aucun texte affiché ne vit ici.
  Les libellés, titres et descriptions sont dans i18n/en.js et i18n/fr.js,
  reliés par les `key` / `id` ci-dessous.
*/

const site = {
  name: "Kamela Emile Ghislain",
  shortName: "Kamela EG",

  // TODO: replace with the address contact messages should reach.
  email: "contact@example.com",
  // Drop the PDF in /public and point here; while null the hero shows
  // "See my work" instead of a "My resume" button that would 404.
  resume: null,

  stats: [
    {
      key: "experience",
      value: new Date().getFullYear() - CAREER_START,
      suffix: "+",
    },
    { key: "technologies", value: 12, suffix: "+" },
    // TODO: set this to your real shipped-project count.
    { key: "delivered", value: 15, suffix: "+" },
  ],

  // The low-contrast band under the hero. Tech names stay untranslated.
  stack: [
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "React Native",
    "Node.js",
    "Python",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "Docker",
  ],

  services: [
    { id: "backend", icon: "server" },
    { id: "frontend", icon: "code" },
    { id: "mobile", icon: "phone" },
  ],

  socials: [
    { id: "github", label: "GitHub", href: "https://github.com/Emileghislain" },
    { id: "gitlab", label: "GitLab", href: "https://gitlab.com/emileghislain" },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kamela-%C3%A9mile-94124a194/",
    },
    { id: "twitter", label: "Twitter", href: "https://twitter.com/egkamer" },
  ],

  nav: [
    { href: "#home", key: "home" },
    { href: "#about", key: "about" },
    { href: "#experience", key: "experience" },
    { href: "#projects", key: "projects" },
    { href: "#contact", key: "contact" },
  ],
};

export default site;
