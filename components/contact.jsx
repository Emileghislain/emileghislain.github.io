import { useState } from "react";
import Reveal from "./reveal";
import site from "../data/site";
import { format, useTranslation } from "../i18n";

const emptyForm = { name: "", email: "", message: "" };

const fieldClass =
  "w-full border-0 border-b border-line bg-transparent pb-3 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState(emptyForm);

  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  // No backend yet: hand the message off to the visitor's mail client.
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(format(t.contact.mailSubject, { name: form.name }));
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <Reveal className="flex items-center gap-5">
        <span aria-hidden className="h-px w-14 bg-accent" />
        <span className="text-sm text-muted">{t.contact.label}</span>
      </Reveal>

      <div className="mt-10 grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            {t.contact.heading[0]}
            <br />
            {t.contact.heading[1]}
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted">{t.contact.body}</p>
        </Reveal>

        <Reveal as="form" delay={80} onSubmit={handleSubmit} className="space-y-9">
          <div>
            <label htmlFor="contact-name" className="sr-only">
              {t.contact.name}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={t.contact.name}
              value={form.name}
              onChange={update("name")}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="sr-only">
              {t.contact.email}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={t.contact.email}
              value={form.email}
              onChange={update("email")}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="sr-only">
              {t.contact.message}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={3}
              placeholder={t.contact.message}
              value={form.message}
              onChange={update("message")}
              className={`${fieldClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="bg-accent px-9 py-3 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
          >
            {t.contact.submit}
          </button>

          <p className="text-xs text-muted">{t.contact.hint}</p>
        </Reveal>
      </div>
    </section>
  );
}
