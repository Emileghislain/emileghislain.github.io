import Reveal from "./reveal";
import experience from "../data/experience";
import { useTranslation } from "../i18n";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20"
    >
      <Reveal className="flex flex-col items-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          {t.experience.heading}
        </h2>
        <span aria-hidden className="section-rule mt-8 h-14 w-0.5 bg-accent" />
      </Reveal>

      <ol className="mt-16 ml-1 border-l border-line">
        {experience.map((entry, index) => {
          const copy = t.experience[entry.id];
          return (
            <Reveal
              as="li"
              key={entry.id}
              delay={index * 90}
              className="relative pb-14 pl-8 last:pb-0 md:pl-12"
            >
              {/* The ring punches a hole in the timeline so the dot sits on it. */}
              <span
                aria-hidden
                className="absolute top-1.5 left-[-6.5px] h-3 w-3 rounded-full bg-accent ring-4 ring-surface"
              />

              <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
                <time dateTime={entry.from}>{copy.period}</time>
              </p>

              <h3 className="mt-3 text-xl font-bold tracking-tight md:text-2xl">
                {copy.position}
              </h3>

              <p className="mt-1 text-sm text-muted">
                {entry.url ? (
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-line transition-colors hover:border-accent hover:text-accent"
                  >
                    {copy.company}
                  </a>
                ) : (
                  copy.company
                )}
                {entry.current && (
                  <span className="ml-3 rounded-full border border-accent/40 px-2.5 py-0.5 text-[11px] text-accent">
                    {t.experience.current}
                  </span>
                )}
              </p>

              {copy.about && (
                <p className="mt-3 max-w-2xl text-[13px] leading-6 text-muted">
                  {copy.about}
                </p>
              )}

              <ul className="mt-5 space-y-2.5">
                {copy.missions.map((mission) => (
                  <li
                    key={mission}
                    className="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-px w-4 shrink-0 bg-accent/60"
                    />
                    {mission}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
