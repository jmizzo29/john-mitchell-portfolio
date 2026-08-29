import Link from "next/link";
import { site } from "@/lib/content";
import { ContactLinks } from "@/components/contact";

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-20 border-b hairline">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-3.5 md:flex-row md:items-center md:justify-between md:px-8">
        <Link href="/" className="text-sm tracking-[0.14em] uppercase">
          {site.shortName}
        </Link>
        <ContactLinks className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium" />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto max-w-5xl px-5 py-8 md:px-8">
        <p className="text-xs tracking-[0.18em] uppercase text-[var(--forest)]">
          Contact
        </p>
        <ContactLinks className="mt-3 flex flex-col gap-2 text-[1.05rem] font-medium sm:flex-row sm:flex-wrap sm:gap-x-6" />
        <p className="mt-6 text-sm text-[var(--ink-soft)]">
          {site.shortName} · {site.location} ·{" "}
          <Link href="/other" className="project-link underline underline-offset-4">
            Other work
          </Link>
        </p>
      </div>
    </footer>
  );
}
