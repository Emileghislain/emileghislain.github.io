import site from "../data/site";
import { socialIcons } from "./icons";
import { format, useTranslation } from "../i18n";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface-alt">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-14 text-center md:px-10">
        <p className="font-display text-base font-bold tracking-tight">{site.name}</p>
        <p className="text-xs text-muted">
          {format(t.footer.rights, { year: new Date().getFullYear() })}
        </p>

        <ul className="mt-2 flex items-center gap-4">
          {site.socials.map((social) => {
            const Icon = socialIcons[social.id];
            return (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
