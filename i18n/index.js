import { useLocale } from "../context/locale";
import en from "./en";
import fr from "./fr";

export const locales = ["fr", "en"];
export const defaultLocale = "fr";

const dictionaries = { fr, en };

export function getDictionary(locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/** Fills `{placeholders}` in a dictionary string. */
export function format(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    Object.hasOwn(values, key) ? String(values[key]) : match,
  );
}

/**
 * Reads the active locale from the LocaleProvider declared by the page, and
 * hands back the matching dictionary.
 */
export function useTranslation() {
  const locale = useLocale();
  return { t: getDictionary(locale), locale };
}
