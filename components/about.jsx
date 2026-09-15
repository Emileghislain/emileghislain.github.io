import Reveal from "./reveal";
import site from "../data/site";
import { serviceIcons } from "./icons";
import { useTranslation } from "../i18n";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24"
    >
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <ol className="space-y-0">
          {site.services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            const copy = t.services[service.id];
            return (
              <Reveal as="li" key={service.id} delay={index * 90}>
                {index > 0 && (
                  <span
                    aria-hidden
                    className="my-2 -ml-1.25 block h-2.5 w-2.5 rounded-full bg-accent"
                  />
                )}
                <div className="flex items-start gap-5 border-l-2 border-accent py-5 pl-7">
                  <Icon className="mt-0.5 h-8 w-8 shrink-0 text-ink" />
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {copy.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {copy.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <div>
          <Reveal
            as="h2"
            className="text-4xl font-bold tracking-tight md:text-5xl"
          >
            {t.about.heading}
          </Reveal>

          <div className="mt-8 space-y-5 text-sm leading-7 text-muted md:text-base md:leading-8">
            {t.about.paragraphs.map((paragraph, index) => (
              <Reveal
                as="p"
                key={paragraph.slice(0, 24)}
                delay={80 + index * 80}
              >
                {paragraph}
              </Reveal>
            ))}
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {site.stats.map((stat, index) => (
              <Reveal key={stat.key} delay={index * 90}>
                <dt className="sr-only">{t.stats[stat.key]}</dt>
                <dd>
                  <span className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="font-display ml-1 text-3xl font-bold text-accent md:text-4xl">
                    {stat.suffix}
                  </span>
                  <span className="mt-2 block text-sm text-muted">
                    {t.stats[stat.key]}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
