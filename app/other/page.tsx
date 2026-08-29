import type { Metadata } from "next";
import Link from "next/link";
import { ContactBlock } from "@/components/contact";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { archive, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Other work",
  description: `Archive of additional public work by ${site.shortName}. The homepage is the hiring brief.`,
};

export default function OtherWorkPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-16">
        <p className="text-sm">
          <Link href="/" className="project-link underline underline-offset-4">
            ← Homepage
          </Link>
        </p>
        <h1 className="serif mt-6 text-4xl tracking-tight md:text-5xl">Other work</h1>
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-[var(--ink-soft)]">
          Side projects and earlier public repos. Not the hiring brief. InvoiceCloud
          proof and the AutoFleeto demo are on the homepage.
        </p>
        <ul className="mt-10 space-y-8">
          {archive.map((item) => (
            <li key={item.name} className="border-t hairline pt-6">
              <h2 className="serif text-2xl">{item.name}</h2>
              <p className="mt-2 max-w-2xl leading-relaxed">{item.blurb}</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                {item.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="project-link underline underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="mt-14">
          <ContactBlock />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
