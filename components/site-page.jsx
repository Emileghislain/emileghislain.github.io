import Head from "next/head";
import Nav from "./nav";
import Hero from "./hero";
import StackBand from "./stack-band";
import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import site from "../data/site";
import { LocaleProvider } from "../context/locale";
import { useAssetPath } from "../lib/asset";
import { useTranslation } from "../i18n";

function Content() {
  const { t, locale } = useTranslation();
  const asset = useAssetPath();

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${site.name} — ${t.hero.role}`} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={locale === "fr" ? "fr_FR" : "en_US"} />
        <link rel="icon" href={asset("/images/me.png")} />
      </Head>

      <Nav />
      <main>
        <Hero />
        <StackBand />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/**
 * Le corps du site, rendu à l'identique pour chaque langue. Les deux fichiers
 * de page (pages/index.js pour le français, pages/en.js pour l'anglais) ne font
 * que déclarer la locale — l'export statique n'a pas de routage i18n Next.
 */
export default function SitePage({ locale }) {
  return (
    <LocaleProvider locale={locale}>
      <Content />
    </LocaleProvider>
  );
}
