export const site = {
  name: "John David Mitchell",
  shortName: "John Mitchell",
  headline:
    "AI Transformation Leader | Solutions Architect | Solutions Engineering Leader",
  seeking:
    "Seeking Director of Solutions Engineering or Principal AI Solution Architect roles where I lead teams and ship applied AI.",
  role: "Lead AI Solution Architect, InvoiceCloud",
  roleDates: "2025–present",
  location: "Lake Alfred, Florida",
  summary:
    "I lead Solutions Engineering work and applied AI — the people, the architecture, and the delivery. Current title is Lead AI Solution Architect.",
  email: "webbywiz@gmail.com",
  phone: "863-602-1732",
  phoneHref: "tel:+18636021732",
  linkedin: "https://www.linkedin.com/in/johndavidmitchell",
  github: "https://github.com/jmizzo29",
  repo: "https://github.com/jmizzo29/john-mitchell-portfolio",
  homepage: "https://john-mitchell-portfolio.vercel.app",
};

export const invoiceCloud = {
  kicker: "InvoiceCloud · 2025–present · internal, no public demo",
  title: "Lead AI Solution Architect",
  intro:
    "Company-wide AI work for Solutions Engineering and Sales Engineering. Not a public product.",
  points: [
    "Won the 2026 company-wide Automathon (70 participants)",
    "Designed and deployed 15+ AI applications used by Solutions Engineering and Sales Engineering",
    "600+ hours/year of manual work removed",
    "ACH-return risk prototype advanced for pilot review",
    "Strategic proposal for scaling enterprise AI (delivery model, governance, prioritization, org structure)",
    "Mentors SEs and Solution Architects; architecture reviews, executive workshops, payment integrations (insurance, utilities, tax)",
  ],
};

export const leadership = [
  {
    role: "CGI Federal Technical Lead",
    dates: "2021–2025",
    detail:
      "5B+ records data modernization, exec presentations, Employee of the Quarter Q3 2023, Leadership Development Program",
  },
  {
    role: "Bullhorn Snowflake Engineer",
    dates: "2019–2021",
    detail: "Snowflake Engineer.",
  },
  {
    role: "Satuit CSM / TAM",
    dates: "2010–2019",
    detail:
      "250+ enterprise customers, $4M+ ARR, managed and mentored CS staff",
  },
  {
    role: "ShareNPay co-founder",
    dates: "2009–2017",
    detail: "Co-founded ShareNPay.",
  },
];

export const demo = {
  name: "AutoFleeto / ROBOAGENT",
  kicker: "Live demo · I ship",
  blurb:
    "Fleet OS for autonomous and robotaxi operations. Public operator console; Tesla sign-in is on the app.",
  stack: "React, Vite, Tailwind, Mapbox, Clerk",
  links: [
    { label: "autofleeto.com", href: "https://www.autofleeto.com" },
    { label: "robotaxi-fleetos.vercel.app", href: "https://robotaxi-fleetos.vercel.app" },
    { label: "GitHub", href: "https://github.com/jmizzo29/robotaxi-fleetos" },
  ],
};

export type ArchiveItem = {
  name: string;
  blurb: string;
  links: { label: string; href: string }[];
};

export const archive: ArchiveItem[] = [
  {
    name: "Access 4 All",
    blurb:
      "Accessible travel finder for wheelchair users. Spark hackathon. TypeScript, Vite, Supabase.",
    links: [
      { label: "Live", href: "https://access4all.vercel.app" },
      { label: "accesslink", href: "https://github.com/jmizzo29/accesslink" },
    ],
  },
  {
    name: "GroupPix",
    blurb:
      "Private event albums. Guests scan a QR and add a photo. Repo name is crowdsnap.",
    links: [
      { label: "Live", href: "https://grouppix.vercel.app" },
      { label: "GitHub", href: "https://github.com/jmizzo29/crowdsnap" },
    ],
  },
  {
    name: "ShareNPay / Zeroed",
    blurb:
      "Current public app for the ShareNPay line: bill split, settle outside the app. Co-founder years are on the homepage.",
    links: [
      { label: "Live", href: "https://sharenpay-web.vercel.app" },
      { label: "GitHub", href: "https://github.com/jmizzo29/sharenpay" },
    ],
  },
  {
    name: "Restarto AI",
    blurb:
      "Public Django + HTML snapshot (May 2025) for restarto.ai. Repo is a fork.",
    links: [{ label: "GitHub", href: "https://github.com/jmizzo29/restartoai" }],
  },
  {
    name: "FamilyTreeApp",
    blurb: "Personal family directory. React. GitHub Pages hosts a FamilyConnect build.",
    links: [
      { label: "Pages", href: "https://jmizzo29.github.io/FamilyTreeApp/" },
      { label: "GitHub", href: "https://github.com/jmizzo29/FamilyTreeApp" },
    ],
  },
  {
    name: "MICHAEL",
    blurb:
      "Rust research: sparse-graph guardrail lattice and analog inference engines.",
    links: [{ label: "GitHub", href: "https://github.com/jmizzo29/michael" }],
  },
];
