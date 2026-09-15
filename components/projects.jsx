import { useRef, useState } from "react";
import Image from "next/image";
import Reveal from "./reveal";
import projects from "../data/projects";
import { ArrowUpRightIcon, ChevronDownIcon } from "./icons";
import { useAssetPath } from "../lib/asset";
import { format, useTranslation } from "../i18n";

/** How many cards show before the "see more" button. */
const FEATURED_COUNT = 6;

const toneClass = {
  plain: "text-slate-300",
  accent: "text-accent",
  comment: "text-slate-500",
};

/** Decorative stand-in used until a project has a real screenshot. */
function CodeCard({ lines }) {
  // Les lignes s'échelonnent via `transition-delay` : la classe .reveal-in
  // posée par <Reveal> sur le parent déclenche tout, sans JS supplémentaire.
  const lineDelay = (index) => 150 + index * 110;

  return (
    <div className="relative pt-4 pr-4">
      <div
        aria-hidden
        className="code-frame absolute top-0 right-0 h-[85%] w-[85%] border border-accent/35"
      />
      <pre className="relative overflow-x-auto bg-[#0b1118] p-6 font-mono text-[11px] leading-6 md:text-xs">
        <code>
          {lines.map((line, index) => (
            <span
              key={line.text}
              style={{ transitionDelay: `${lineDelay(index)}ms` }}
              className={`code-line block ${toneClass[line.tone]}`}
            >
              {line.text}
              {index === lines.length - 1 && (
                <span
                  aria-hidden
                  style={{ animationDelay: `${lineDelay(lines.length)}ms` }}
                  className="code-caret ml-1.5 inline-block h-3 w-1.75 translate-y-px bg-accent align-middle"
                />
              )}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

function ProjectVisual({ project, alt }) {
  const asset = useAssetPath();

  if (project.image) {
    return (
      <div className="relative pt-4 pr-4">
        <div
          aria-hidden
          className="code-frame absolute top-0 right-0 h-[85%] w-[85%] border border-accent/35"
        />
        <Image
          src={asset(project.image)}
          alt={alt}
          width={720}
          height={450}
          className="relative w-full object-cover"
        />
      </div>
    );
  }
  return <CodeCard lines={project.code} />;
}

function ProjectRow({ project, index, t }) {
  // Keep the zig-zag running on the absolute index so the rhythm survives
  // the split between featured and collapsed cards.
  const visualFirst = index % 2 === 1;
  const copy = t.projects[project.id];

  return (
    <Reveal className="group grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={`min-w-0 ${visualFirst ? "lg:order-2" : ""}`}>
        <h3 className="text-2xl font-bold tracking-tight">{copy.title}</h3>

        {/* What he actually did — the first thing a recruiter looks for. */}
        {copy.role && (
          <p className="mt-3 flex max-w-md gap-3 text-sm leading-6 font-medium text-accent">
            <span aria-hidden className="mt-2.5 h-px w-6 shrink-0 bg-accent" />
            {copy.role}
          </p>
        )}

        <ul className="mt-5 flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-4 py-1.5 text-xs text-muted">
              {tag}
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-md text-sm leading-7 text-muted">{copy.description}</p>

        {(project.github || project.demo) && (
          <div className="mt-8 flex flex-wrap items-center gap-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-accent px-7 py-3 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
              >
                {t.projects.viewGithub}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 border-b border-ink pb-1 text-sm font-medium"
              >
                {t.projects.viewProject}
                <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </div>
        )}
      </div>

      <div
        className={`min-w-0 transition-transform duration-500 ease-out group-hover:-translate-y-1.5 ${
          visualFirst ? "lg:order-1" : ""
        }`}
      >
        <ProjectVisual project={project} alt={format(t.projects.screenshotAlt, { title: copy.title })} />
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const headingRef = useRef(null);

  const featured = projects.slice(0, FEATURED_COUNT);
  const rest = projects.slice(FEATURED_COUNT);

  const toggle = () => {
    // Collapsing from deep in the list would leave the viewport stranded
    // somewhere below the section, so walk back up to the heading.
    if (expanded) headingRef.current?.scrollIntoView({ block: "start" });
    setExpanded((current) => !current);
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
      <Reveal className="flex flex-col items-center">
        <h2 ref={headingRef} className="text-4xl font-bold tracking-tight md:text-5xl">
          {t.projects.heading}
        </h2>
        <span aria-hidden className="section-rule mt-8 h-14 w-0.5 bg-accent" />
      </Reveal>

      <div className="mt-16 space-y-20 md:space-y-24">
        {featured.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} t={t} />
        ))}

        {/*
          The remaining cards stay in the served HTML — only hidden — so their
          descriptions are still indexable and the reveal costs no re-render.
        */}
        {rest.length > 0 && (
          <div id="projects-more" hidden={!expanded} className="space-y-20 md:space-y-24">
            {rest.map((project, index) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={FEATURED_COUNT + index}
                t={t}
              />
            ))}
          </div>
        )}
      </div>

      {rest.length > 0 && (
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={expanded}
            aria-controls="projects-more"
            className="group inline-flex items-center gap-2.5 border border-accent px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-accent-soft"
          >
            {expanded ? t.projects.showLess : format(t.projects.showMore, { count: rest.length })}
            <ChevronDownIcon
              className={`h-4 w-4 text-accent transition-transform duration-300 ${
                expanded ? "rotate-180" : "group-hover:translate-y-0.5"
              }`}
            />
          </button>
        </div>
      )}
    </section>
  );
}
