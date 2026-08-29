import { site } from "@/lib/content";

export const contactItems = [
  { label: site.email, href: `mailto:${site.email}` },
  { label: site.phone, href: site.phoneHref },
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
] as const;

function isExternal(href: string) {
  return href.startsWith("http");
}

export function ContactLinks({
  className = "",
  linkClassName = "project-link underline decoration-[0.06em] underline-offset-4",
}: {
  className?: string;
  linkClassName?: string;
}) {
  return (
    <ul className={className}>
      {contactItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className={linkClassName}
            {...(isExternal(item.href)
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ContactBlock({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="border hairline bg-[var(--paper-2)] px-5 py-5 md:px-6"
    >
      <p className="text-xs tracking-[0.18em] uppercase text-[var(--forest)]">
        Contact
      </p>
      <ContactLinks className="mt-3 flex flex-col gap-2 text-[1.05rem] font-medium sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2" />
    </div>
  );
}
