import { ContactBlock } from "@/components/contact";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { demo, invoiceCloud, leadership, site } from "@/lib/content";

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

export default function HomePage() {
  return (
    <>
      <a href="#contact" className="skip-link">
        Skip to contact
      </a>
      <SiteHeader />

      <main id="top">
        <section className="mx-auto max-w-5xl px-5 pb-10 pt-12 md:px-8 md:pb-12 md:pt-16">
          <p className="text-xs tracking-[0.22em] uppercase text-[var(--forest)]">
            {site.location}
          </p>
          <h1 className="serif mt-4 max-w-4xl text-[2.6rem] leading-[1.05] tracking-tight md:text-6xl">
            {site.name}
          </h1>
          <p className="serif mt-4 max-w-3xl text-xl italic text-[var(--ink-soft)] md:text-2xl">
            {site.headline}
          </p>
          <p className="mt-4 text-lg text-[var(--ink)]">
            {site.role} · {site.roleDates}
          </p>
          <p className="mt-6 max-w-2xl text-[1.2rem] leading-snug font-medium text-[var(--ink)]">
            {site.seeking}
          </p>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-[var(--ink-soft)]">
            {site.summary}
          </p>
          <div className="mt-8">
            <ContactBlock id="contact" />
          </div>
        </section>

        <section
          id="invoicecloud"
          className="mx-auto max-w-5xl scroll-mt-24 px-5 pb-6 md:px-8"
          aria-labelledby="invoicecloud-heading"
        >
          <div className="bg-[var(--forest-ink)] px-6 py-10 text-[var(--paper)] md:px-10 md:py-12">
            <p className="text-xs tracking-[0.2em] uppercase text-[#d7c7a8]">
              {invoiceCloud.kicker}
            </p>
            <h2
              id="invoicecloud-heading"
              className="serif mt-3 text-3xl tracking-tight md:text-4xl"
            >
              {invoiceCloud.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[1.02rem] leading-relaxed text-[#e8e0d2]">
              {invoiceCloud.intro}
            </p>
            <ul className="mt-8 space-y-3 text-[1.05rem] leading-snug">
              {invoiceCloud.points.map((point) => (
                <li
                  key={point}
                  className="border-t border-[#3d5a4f] pt-3 first:border-t-0 first:pt-0"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="leadership"
          className="mx-auto max-w-5xl scroll-mt-24 px-5 py-14 md:px-8"
          aria-labelledby="leadership-heading"
        >
          <h2
            id="leadership-heading"
            className="serif text-3xl tracking-tight md:text-4xl"
          >
            Before InvoiceCloud
          </h2>
          <ol className="mt-8 space-y-6">
            {leadership.map((item) => (
              <li
                key={item.role}
                className="grid gap-1 border-t hairline pt-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] md:gap-8"
              >
                <div>
                  <h3 className="serif text-xl leading-snug">{item.role}</h3>
                  <p className="mt-1 text-sm text-[var(--ink-soft)]">{item.dates}</p>
                </div>
                <p className="text-[1.02rem] leading-relaxed text-[var(--ink)]">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="demo"
          className="mx-auto max-w-5xl scroll-mt-24 px-5 pb-16 md:px-8 md:pb-20"
          aria-labelledby="demo-heading"
        >
          <p className="text-xs tracking-[0.18em] uppercase text-[var(--forest)]">
            {demo.kicker}
          </p>
          <h2
            id="demo-heading"
            className="serif mt-2 text-3xl tracking-tight md:text-4xl"
          >
            {demo.name}
          </h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed">{demo.blurb}</p>
          <p className="mt-2 text-sm text-[var(--ink-soft)]">{demo.stack}</p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            {demo.links.map((link) => (
              <li key={link.href}>
                <ExternalLink href={link.href}>{link.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
