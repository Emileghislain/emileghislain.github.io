/*
  Structure uniquement — postes, entreprises, missions et libellés de période
  sont dans i18n/en.js et i18n/fr.js sous `experience.<id>`.

  `from` / `to` au format AAAA-MM alimentent l'attribut <time dateTime>. Le
  libellé affiché reste dans les dictionnaires, chaque langue abrégeant les
  mois à sa façon.

  `current: true` affiche le badge « En poste ».
*/

const experience = [
  {
    id: "afreetech",
    url: "https://afreetech.com/",
    from: "2025-12",
    to: null,
    current: true,
  },
  {
    id: "novobyte",
    url: "https://novobyte.org/",
    from: "2021-01",
    to: "2025-12",
    current: false,
  },
];

export default experience;
