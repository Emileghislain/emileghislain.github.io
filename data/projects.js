/*
  Structure uniquement. Titres, rôles et descriptions vivent dans i18n/en.js et
  i18n/fr.js, sous `projects.<id>` — l'`id` ci-dessous est la clé de jointure.

  L'ORDRE DU TABLEAU EST LE CLASSEMENT : les `FEATURED_COUNT` premiers (voir
  components/projects.jsx) s'affichent d'emblée, le reste est replié derrière le
  bouton « voir plus ». Pour mettre un projet en avant, remonte-le simplement.

  `github` et `demo` à null masquent le bouton correspondant.

  Les blocs `code` sont illustratifs et volontairement non traduits.
*/

const projects = [
  {
    id: "gescom-erp",
    tags: ["Odoo 18", "Python", "PostgreSQL", "Kubernetes"],
    github: null,
    demo: null,
    code: [
      { text: "modules/custom/", tone: "plain" },
      { text: "  cam_recouvrement/  → debt collection", tone: "accent" },
      { text: "  cam_abonnement/    → subscriptions", tone: "accent" },
      { text: "  cam_portal/        → customer portal", tone: "accent" },
      { text: "// the three modules I own, of ~38", tone: "comment" },
    ],
  },
  {
    id: "camwater-eagency",
    tags: ["Next.js", "TypeScript", "Redux", "Cypress"],
    github: null,
    demo: null,
    code: [
      { text: "app/(account)/dashboard/", tone: "plain" },
      {
        text: "  branchement/[reference]/  → connection requests",
        tone: "accent",
      },
      { text: "  prepaid/buy/payment/      → prepaid top-up", tone: "accent" },
      {
        text: "  reclamations/[reference]/ → complaint tracking",
        tone: "accent",
      },
      {
        text: "// public /track for unauthenticated follow-up",
        tone: "comment",
      },
    ],
  },
  {
    id: "odn-portal",
    tags: ["Next.js", "React 19", "i18next", "Docker"],
    github: null,
    demo: null,
    code: [
      { text: "src/app/admin/", tone: "plain" },
      { text: "  indicators/  → comparison and filters", tone: "accent" },
      { text: "  users/       → roles and permissions", tone: "accent" },
      { text: "  editors/     → content publishing", tone: "accent" },
      { text: "// the back-office, 321 of my file touches", tone: "comment" },
    ],
  },
  {
    id: "heavens-hotel",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    github: null,
    demo: null,
    code: [
      { text: "const { data: rooms } = useQuery({", tone: "plain" },
      { text: "  queryKey: ['rooms', { from, to, guests }],", tone: "accent" },
      {
        text: "  queryFn: () => api.searchAvailability({ from, to, guests }),",
        tone: "accent",
      },
      { text: "})", tone: "plain" },
      {
        text: "// 20+ public sections and an editorial back-office",
        tone: "comment",
      },
    ],
  },
  {
    id: "home-beauty",
    tags: ["React Native", "Expo", "Firebase", "Express"],
    github: null,
    demo: null,
    code: [
      { text: "app/", tone: "plain" },
      { text: "  (auth)/      → sign in, sign up, OTP", tone: "accent" },
      { text: "  (customer)/  → search, booking, tracking", tone: "accent" },
      { text: "  (provider)/  → agenda, services, earnings", tone: "accent" },
      { text: "// role-based routing with expo-router", tone: "comment" },
    ],
  },
  {
    id: "shoppy-web",
    tags: ["Next.js", "TypeScript", "i18n", "Sentry"],
    github: null,
    demo: null,
    code: [
      { text: "src/app/(localized)/[locale]/", tone: "plain" },
      {
        text: "  shop/[slug]/[category_id]/   → vendor storefronts",
        tone: "accent",
      },
      {
        text: "  collections/                 → curated lists",
        tone: "accent",
      },
      {
        text: "  search/deep-search/          → faceted search",
        tone: "accent",
      },
      {
        text: "// the pages I built, of 40+ localised routes",
        tone: "comment",
      },
    ],
  },

  // ─── Au-delà d'ici, replié derrière le bouton « voir plus » ───

  {
    id: "jojo-backend",
    tags: ["Spring Boot", "Java 19", "MongoDB", "JWT"],
    github: null,
    demo: null,
    code: [
      { text: '@Document(collection = "transports")', tone: "accent" },
      { text: "public class Transport {", tone: "plain" },
      {
        text: "    private Inventory inventory;      // furniture, volumes",
        tone: "accent",
      },
      {
        text: "    private TransportZoneInfo zone;   // zone-based pricing",
        tone: "accent",
      },
      { text: "}", tone: "plain" },
    ],
  },
  {
    id: "heldis-school",
    tags: ["Laravel", "PHP", "MySQL", "Sanctum"],
    github: null,
    demo: null,
    code: [
      {
        text: "Route::middleware('auth:sanctum')->group(function () {",
        tone: "plain",
      },
      {
        text: "    Route::apiResource('scores', ScoreAPIController::class);",
        tone: "accent",
      },
      {
        text: "    Route::apiResource('calls', CallAPIController::class);",
        tone: "accent",
      },
      { text: "});", tone: "plain" },
      {
        text: "// 25 models, 20 API controllers, push notifications",
        tone: "comment",
      },
    ],
  },
  {
    id: "etic-saas",
    tags: ["Next.js", "TypeScript", "Stripe", "TanStack Table"],
    github: null,
    demo: null,
    code: [
      { text: "app/[locale]/admin/", tone: "plain" },
      { text: "  users/            → user management", tone: "accent" },
      {
        text: "  requests/         → customer & tutor requests",
        tone: "accent",
      },
      { text: "  earnings/         → payouts overview", tone: "accent" },
      { text: "// the screens I built", tone: "comment" },
    ],
  },
  {
    id: "aft-automatisation",
    tags: ["Electron", "React", "Prisma", "MongoDB", "LDAP"],
    github: null,
    demo: null,
    code: [
      { text: "app/pages/", tone: "plain" },
      { text: "  Experts.tsx        → expert directory", tone: "accent" },
      { text: "  References.tsx     → reference filing", tone: "accent" },
      { text: "  FolderExplorer.tsx → share navigation", tone: "accent" },
      {
        text: "// renderer stays sandboxed, DB lives in main",
        tone: "comment",
      },
    ],
  },
  {
    id: "premierdev",
    tags: ["Laravel", "PHP", "MySQL", "Blade"],
    github: null,
    demo: null,
    code: [
      { text: "class Bootcamp extends Model {", tone: "plain" },
      {
        text: "    public function team()     { return $this->hasMany(Team::class); }",
        tone: "accent",
      },
      {
        text: "    public function sponsors() { return $this->hasMany(Sponsor::class); }",
        tone: "accent",
      },
      { text: "}", tone: "plain" },
      {
        text: "// bootcamps, hackathons, news, likes and views",
        tone: "comment",
      },
    ],
  },
  {
    id: "landing-ebm",
    tags: ["React", "Bootstrap", "React Router"],
    github: null,
    demo: null,
    code: [
      { text: "src/landing/", tone: "plain" },
      { text: "  banner.js     → rotating hero carousel", tone: "accent" },
      { text: "  whatWeDo.js   → services section", tone: "accent" },
      { text: "  getStart.js   → call to action", tone: "accent" },
      { text: "// single-page marketing site", tone: "comment" },
    ],
  },
  {
    id: "app-meteo",
    tags: ["React Native", "Expo", "NativeWind", "TypeScript"],
    github: null,
    demo: null,
    code: [
      {
        text: "const { coords } = await Location.getCurrentPositionAsync()",
        tone: "plain",
      },
      { text: "const forecast = await getForecast(coords)", tone: "accent" },
      {
        text: "const alerts = forecast.warnings.filter(isSevere)",
        tone: "accent",
      },
      { text: "return <SevereWeatherBanner alerts={alerts} />", tone: "plain" },
      { text: "// dashboard, radar and official bulletins", tone: "comment" },
    ],
  },
  {
    id: "landing-ebm",
    tags: ["React", "Bootstrap", "React Router"],
    github: null,
    demo: null,
    code: [
      { text: "src/landing/", tone: "plain" },
      { text: "  banner.js     → rotating hero carousel", tone: "accent" },
      { text: "  whatWeDo.js   → services section", tone: "accent" },
      { text: "  getStart.js   → call to action", tone: "accent" },
      { text: "// single-page marketing site", tone: "comment" },
    ],
  },

  /* {
    id: "hackathon-aft",
    tags: ["Next.js", "Three.js", "GSAP", "Tailwind"],
    github: null,
    demo: "https://hackathon-aft.vercel.app",
    code: [
      { text: "<Canvas camera={{ position: [0, 0, 6], fov: 45 }}>", tone: "plain" },
      { text: "  <Environment preset='city' />", tone: "accent" },
      { text: "  <FloatingMesh scroll={scrollProgress} />", tone: "accent" },
      { text: "</Canvas>", tone: "plain" },
      { text: "// GSAP timeline synced to scroll", tone: "comment" },
    ],
  }, */
];

export default projects;
