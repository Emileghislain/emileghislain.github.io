import { useRouter } from "next/router";

/**
 * Préfixe un chemin de /public avec le `basePath` de next.config.js.
 *
 * next/link et router.push l'appliquent seuls, mais PAS les <link> bruts ni
 * next/image en `unoptimized` — les deux cas qu'on a ici. Sans ce préfixe,
 * /images/me.png est demandé à la racine du domaine et renvoie 404 dès que le
 * site est servi depuis un sous-chemin (GitHub Pages de projet).
 */
export function useAssetPath() {
  const { basePath } = useRouter();
  return (path) => `${basePath}${path}`;
}
