import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useThemeContext } from "../context/theme";
import { localePath, useLocale } from "../context/locale";
import { useTranslation } from "../i18n";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./icons";
import site from "../data/site";

const sectionIds = site.nav.map((item) => item.href.slice(1));

function useActiveSection() {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      // Band across the middle of the viewport: whichever section owns it wins.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return active;
}

function LocaleSwitch({ label }) {
  const router = useRouter();
  const locale = useLocale();
  const other = locale === "fr" ? "en" : "fr";

  const switchTo = () => {
    // Le hash est lu au clic plutôt qu'au rendu : l'inclure dans un href
    // provoquerait un écart d'hydratation entre le HTML statique et le client.
    router.push(`${localePath(other)}${window.location.hash}`);
  };

  return (
    <button
      type="button"
      onClick={switchTo}
      aria-label={label}
      className="rounded-full border border-line px-3 py-2 text-xs font-medium tracking-wide text-muted uppercase transition-colors hover:border-accent hover:text-accent"
    >
      {other}
    </button>
  );
}

export default function Nav() {
  const { theme, toggleTheme } = useThemeContext();
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef(null);
  const active = useActiveSection();

  useEffect(() => {
    // La progression est écrite directement dans le DOM : la passer par un
    // state re-rendrait toute la nav à chaque pixel de scroll.
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.min(ratio, 1)})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lock the page while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const ThemeIcon = theme === "dark" ? SunIcon : MoonIcon;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-surface/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#home" className="font-display text-base font-bold tracking-tight">
          {site.shortName}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href.slice(1) ? "true" : undefined}
              className={`relative py-1 text-sm transition-colors hover:text-ink ${
                active === item.href.slice(1) ? "text-ink" : "text-muted"
              }`}
            >
              {t.nav[item.key]}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                  active === item.href.slice(1) ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitch label={t.nav.toLocale} />

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.nav.toLight : t.nav.toDark}
            className="rounded-full border border-line p-2.5 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ThemeIcon className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={t.nav.openMenu}
            aria-expanded={menuOpen}
            className="rounded-full border border-line p-2.5 text-ink transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            <MenuIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <span
        ref={progressRef}
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent"
      />

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-surface md:hidden">
          <div className="flex h-20 items-center justify-between px-6">
            <span className="font-display text-base font-bold tracking-tight">
              {site.shortName}
              <span className="text-accent">.</span>
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label={t.nav.closeMenu}
              className="rounded-full border border-line p-2.5 text-ink"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-2 px-6 pb-24">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-display border-b border-line py-5 text-3xl font-bold tracking-tight transition-colors hover:text-accent"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
