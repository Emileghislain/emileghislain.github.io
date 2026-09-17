import Image from "next/image";
import site from "../data/site";
import { socialIcons } from "./icons";
import { useAssetPath } from "../lib/asset";
import { useTranslation } from "../i18n";

function Chevron({ className }) {
  return (
    <svg
      viewBox="0 0 40 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M32 4 6 32l26 28" />
    </svg>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const asset = useAssetPath();
  const hasResume = Boolean(site.resume);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pt-28 pb-16 md:px-10 md:pt-36 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/*
          Entrées en CSS pur plutôt qu'avec <Reveal> : le hero est au-dessus de
          la ligne de flottaison et ne doit pas dépendre du JS pour être lisible.
        */}
        <div className="text-center lg:text-left">
          <h1 className="animate-rise text-5xl leading-[1.05] font-bold tracking-tight md:text-7xl">
            {t.hero.greeting}
            <span className="text-accent">.</span>
          </h1>

          <p className="font-display animate-rise mt-4 flex items-center justify-center gap-5 text-2xl font-light tracking-tight [animation-delay:120ms] md:text-4xl lg:justify-start">
            <span
              aria-hidden
              className="hidden h-px w-16 origin-left bg-accent lg:block"
            />
            {t.hero.intro}
          </p>

          <p className="font-display animate-rise mt-3 text-4xl leading-tight font-bold tracking-tight [animation-delay:240ms] md:text-6xl">
            {t.hero.role}
          </p>

          <div className="animate-rise mt-10 flex flex-wrap justify-center gap-4 [animation-delay:380ms] lg:justify-start">
            <a
              href="#contact"
              className="bg-accent px-8 py-3.5 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href={hasResume ? site.resume : "#projects"}
              className="border border-accent px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-accent-soft"
            >
              {hasResume ? t.hero.resume : t.hero.work}
            </a>
          </div>

          {/* Les réseaux entrent en dernier, une fois les appels à l'action posés. */}
          <ul className="animate-rise mt-12 flex items-center justify-center gap-3.5 [animation-delay:520ms] lg:justify-start">
            <li aria-hidden className="hidden h-px w-10 bg-line lg:block" />
            {site.socials.map((social) => {
              const Icon = socialIcons[social.id];
              return (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* `medallion` sert de point d'ancrage au survol : voir globals.css. */}
        <div className="medallion animate-medallion relative mx-auto aspect-square w-full max-w-64 [animation-delay:200ms] sm:max-w-80 lg:max-w-104">
          {/* Halo behind the portrait */}
          <div
            aria-hidden
            className="animate-breathe absolute inset-[10%] rounded-full bg-(--glow) blur-3xl"
          />
          {/* Concentric coral rings */}
          <div
            aria-hidden
            className="absolute inset-[4%] rounded-full border-[6px] border-accent/80"
          />
          <div
            aria-hidden
            className="absolute inset-[13%] rounded-full border border-accent/30"
          />

          {/* Anneau pointillé en rotation lente, à contresens de l'orbite */}
          <div
            aria-hidden
            className="orbit animate-orbit-slow absolute inset-[9%] rounded-full border border-dashed border-accent/25"
          />

          {/* Point qui parcourt l'anneau extérieur */}
          <div aria-hidden className="orbit animate-orbit absolute inset-[5%]">
            <span className="absolute top-0 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_14px_var(--glow)]" />
          </div>

          <div className="absolute inset-[16%] overflow-hidden rounded-full">
            <Image
              src={asset("/images/me.png")}
              alt={t.hero.portraitAlt}
              width={500}
              height={500}
              priority
              className="h-full w-full object-cover contrast-[1.05] saturate-[0.95]"
            />
            {/* Melts the studio backdrop into the page instead of a hard white disc */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle,transparent_38%,var(--surface)_100%)]"
            />
          </div>

          <Chevron className="animate-drift absolute top-[26%] -left-5 h-10 w-7 text-accent/45 sm:-left-6 lg:h-16 lg:w-10" />
          <Chevron className="animate-drift absolute -right-5 bottom-[22%] h-10 w-7 rotate-180 text-accent/45 sm:-right-6 lg:h-16 lg:w-10" />
        </div>
      </div>
    </section>
  );
}
