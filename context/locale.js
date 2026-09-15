import { createContext, useContext, useEffect } from "react";
import { defaultLocale, locales } from "../i18n";

/*
  En export statique il n'y a pas de routage i18n Next : chaque locale a son
  propre fichier de page (pages/index.js = fr, pages/en.js = en) qui déclare
  ici la langue active. Les composants la lisent via useLocale().
*/

const LocaleContext = createContext(defaultLocale);

export function LocaleProvider({ locale, children }) {
  const active = locales.includes(locale) ? locale : defaultLocale;

  // _document ne fixe `lang` qu'au build. Sur une bascule de langue côté
  // client, l'attribut resterait sur l'ancienne valeur sans cette synchro.
  useEffect(() => {
    document.documentElement.lang = active;
  }, [active]);

  return <LocaleContext.Provider value={active}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

/** Chemin de la page servant une locale donnée. */
export function localePath(locale) {
  return locale === defaultLocale ? "/" : `/${locale}`;
}
