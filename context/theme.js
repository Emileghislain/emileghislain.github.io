import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "eg-theme";
const Context = createContext(null);

/*
  The theme lives on <html data-theme>, written before first paint by the inline
  script in _document. React subscribes to that DOM state rather than owning a
  copy of it, which keeps SSR, hydration and the toggle in agreement.
*/

const listeners = new Set();

function subscribe(onChange) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function getSnapshot() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerSnapshot() {
  return "dark";
}

function applyTheme(next) {
  document.documentElement.dataset.theme = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // private browsing / storage disabled — the theme just won't persist
  }
  listeners.forEach((listener) => listener());
}

export function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    applyTheme(getSnapshot() === "dark" ? "light" : "dark");
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useThemeContext() {
  const value = useContext(Context);
  if (!value) throw new Error("useThemeContext must be used inside <ThemeProvider>");
  return value;
}

export { STORAGE_KEY };
