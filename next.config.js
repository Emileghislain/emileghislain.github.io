/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Export statique : `next build` écrit un site HTML complet dans out/.
  output: "export",

  // Pas de serveur d'optimisation d'images en statique.
  images: {
    unoptimized: true,
  },
  /*
    Pas de basePath : le site est servi à la racine de emileghislain.github.io,
    ce qui suppose que le dépôt s'appelle exactement `emileghislain.github.io`.
    S'il redevenait une page de projet (github.io/<depot>), il faudrait remettre
    basePath et assetPrefix au nom du dépôt, sinon CSS, JS et images seraient
    cherchés à la racine du domaine et la page s'afficherait nue.
  */

  // Chaque page devient <dossier>/index.html plutôt que <page>.html : servi
  // correctement par GitHub Pages comme par Apache, sans configuration.
  trailingSlash: true,

  /*
    Le bloc `i18n` de Next et `redirects()` ont été retirés : tous deux exigent
    un serveur et sont refusés par `output: export`.

    Les langues passent désormais par deux pages statiques — pages/index.js
    (français, servi à /) et pages/en.js (anglais, servi à /en/) — la locale
    étant portée par context/locale.js au lieu du routeur.

    À FAIRE côté hébergeur : les anciennes URLs /home, /about, /skills,
    /experience et /contact ne redirigent plus. Ajoute les règles dans un
    .htaccess (o2switch) ou accepte de les perdre si rien ne pointe dessus.
  */
};

module.exports = nextConfig;
