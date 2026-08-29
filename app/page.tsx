import {
  featured,
  internalWork,
  leadership,
  moreWork,
  site,
  type Project,
} from "@/lib/content";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="project-link underline decoration-[0.06em] underline-offset-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function ProjectBlock({ project }: { project: Project }) {
  return (
    <article className="grid gap-4 border-t hairline py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-10">
      <div>
        {project.kicker ? <p className="chip mb-3">{project.kicker}</p> : null}
        <h3 className="serif text-[1.7rem] leading-tight tracking-tight md:text-[2rem]">
          {project.name}
        </h3>
        {project.stack ? (
          <p className="mt-3 text-sm text-[var(--ink-soft)]">{project.stack}</p>
        ) : null}
      </div>
      <div>
        <p className="text-[1.05rem] leading-relaxed text-[var(--ink)]">{project.blurb}</p>
        {project.outcome ? (
          <p className="mt-3 text-[0.98rem] leading-relaxed text-[var(--ink-soft)]">
            {project.outcome}
          </p>
        ) : null}
        {project.notes ? (
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{project.notes}</p>
        ) : null}
        {project.links.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            {project.links.map((link) => (
              <li key={link.href + link.label}>
                <ExternalLink href={link.href}>{link.label}</ExternalLink>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 text-sm text-[var(--ink-soft)]">No public demo.</p>
        )}
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <a href="#work" className="skip-link">
        Skip to work
      </a>

      <header className="site-header sticky top-0 z-20 border-b hairline">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
          <a href="#top" className="text-sm tracking-[0.14em] uppercase">
            {site.shortName}
          </a>
          <nav aria-label="Page" className="flex flex-wrap justify-end gap-x-5 gap-y-1 text-sm text-[var(--ink-soft)]">
            <a href="#work">Work</a>
            <a href="#internal">Internal</a>
            <a href="#more">More</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20">
          <p className="text-xs tracking-[0.22em] uppercase text-[var(--forest)]">
            {site.location}
          </p>
          <h1 className="serif mt-4 max-w-4xl text-[2.7rem] leading-[1.05] tracking-tight md:text-7xl">
            {site.name}
          </h1>
          <p className="serif mt-5 max-w-3xl text-xl italic text-[var(--ink-soft)] md:text-2xl">
            {site.headline}
          </p>
          <p className="mt-6 max-w-2xl text-lg text-[var(--ink)]">
            {site.role} · {site.roleDates}
          </p>
          <p className="mt-8 max-w-2xl text-[1.15rem] leading-relaxed text-[var(--ink)]">
            {site.summary}
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <li>
              <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
            </li>
            <li>
              <ExternalLink href={site.github}>GitHub</ExternalLink>
            </li>
            <li>
              <a className="project-link underline decoration-[0.06em] underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
        </section>

        <section
          id="work"
          className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-8 md:px-8"
          aria-labelledby="work-heading"
        >
          <div className="max-w-2xl">
            <h2 id="work-heading" className="serif text-4xl tracking-tight md:text-5xl">
              Selected public work
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-[var(--ink-soft)]">
              Live products a recruiter can open. Each card is limited to what the
              public repo or site actually shows.
            </p>
          </div>
          <div className="mt-6">
            {featured.map((project) => (
              <ProjectBlock key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section
          id="internal"
          className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 md:px-8 md:py-20"
          aria-labelledby="internal-heading"
        >
          <div className="rounded-sm bg-[var(--forest-ink)] px-6 py-10 text-[var(--paper)] md:px-12 md:py-14">
            <p className="text-xs tracking-[0.2em] uppercase text-[#d7c7a8]">
              InvoiceCloud · not public demos
            </p>
            <h2 id="internal-heading" className="serif mt-4 text-4xl tracking-tight md:text-5xl">
              Selected internal work
            </h2>
            <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-[#e8e0d2]">
              Facts from the resume only. These are internal — there is no public
              demo for this section.
            </p>
            <ol className="mt-10 grid gap-6 md:grid-cols-2">
              {internalWork.map((item, index) => (
                <li key={item.title} className="border-t border-[#3d5a4f] pt-4">
                  <p className="text-xs tracking-[0.16em] uppercase text-[#d7c7a8]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="serif mt-2 text-2xl leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#d8cfc0]">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="more"
          className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-8 md:px-8"
          aria-labelledby="more-heading"
        >
          <div className="max-w-2xl">
            <h2 id="more-heading" className="serif text-4xl tracking-tight md:text-5xl">
              More work
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-[var(--ink-soft)]">
              Personal, earlier, or internal. Included so the GitHub story is
              complete — not so it competes with the leadership + AI work above.
            </p>
          </div>
          <div className="mt-6">
            {moreWork.map((project) => (
              <ProjectBlock key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 md:px-8 md:py-24"
          aria-labelledby="about-heading"
        >
          <div className="grid gap-10 border-t hairline pt-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
            <h2 id="about-heading" className="serif text-4xl tracking-tight md:text-5xl">
              About
            </h2>
            <div>
              <p className="text-[1.1rem] leading-relaxed">
                {site.name} is based in {site.location}. Current role: {site.role} (
                {site.roleDates}). Focus is helping organizations accelerate
                delivery, reduce operational friction, and create measurable
                business outcomes through AI and modern architecture practices.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {site.focus.map((item) => (
                  <li key={item} className="chip normal-case tracking-normal">
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="mt-10 text-xs tracking-[0.18em] uppercase text-[var(--forest)]">
                Leadership
              </h3>
              <ul className="mt-3 space-y-1 text-[1.05rem]">
                {leadership.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="mt-10 text-xs tracking-[0.18em] uppercase text-[var(--forest)]">
                Contact
              </h3>
              <ul className="mt-3 space-y-2 text-[1.05rem]">
                <li>
                  <a className="project-link underline underline-offset-4" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <ExternalLink href={site.linkedin}>linkedin.com/in/johndavidmitchell</ExternalLink>
                </li>
                <li>
                  <ExternalLink href={site.github}>github.com/jmizzo29</ExternalLink>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t hairline">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-[var(--ink-soft)] md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            {site.shortName}. No invented metrics. Internal InvoiceCloud work is
            marked as such.
          </p>
          <p>
            Source:{" "}
            <ExternalLink href={site.repo}>john-mitchell-portfolio</ExternalLink>
          </p>
        </div>
      </footer>
    </>
  );
}
