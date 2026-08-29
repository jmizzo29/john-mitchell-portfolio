export const site = {
  name: "John David Mitchell",
  shortName: "John Mitchell",
  headline:
    "AI Transformation Leader | Solutions Architect | Solutions Engineering Leader",
  role: "Lead AI Solution Architect, InvoiceCloud",
  roleDates: "2025–present",
  location: "Lake Alfred, Florida",
  summary:
    "I help organizations modernize customer implementations, integrations, and business operations using AI, automation, and enterprise architecture. I lead people and I ship applied AI — not one or the other.",
  focus: [
    "AI-powered workflow transformation",
    "Enterprise SaaS integrations",
    "Solutions architecture",
    "Applied AI for customer delivery teams",
    "Autonomous fleet operations platforms",
  ],
  email: "webbywiz@gmail.com",
  linkedin: "https://www.linkedin.com/in/johndavidmitchell/",
  github: "https://github.com/jmizzo29",
  repo: "https://github.com/jmizzo29/john-mitchell-portfolio",
  homepage: "https://john-mitchell-portfolio.vercel.app",
};

export type Link = { label: string; href: string };

export type Project = {
  name: string;
  kicker?: string;
  blurb: string;
  outcome?: string;
  stack?: string;
  notes?: string;
  links: Link[];
};

export const featured: Project[] = [
  {
    name: "ROBOAGENT / AutoFleeto",
    kicker: "Fleet operating system",
    blurb:
      "Fleet OS for autonomous vehicle and future Cybercab owners — command center, vehicle operations, and Tesla Fleet API connection.",
    outcome:
      "Live operator console at AutoFleeto and on Vercel. Tesla sign-in is on the public app.",
    stack: "React, Vite, Tailwind, Mapbox, Clerk",
    links: [
      { label: "Live · AutoFleeto", href: "https://www.autofleeto.com" },
      {
        label: "Live · Vercel",
        href: "https://robotaxi-fleetos.vercel.app",
      },
      {
        label: "GitHub",
        href: "https://github.com/jmizzo29/robotaxi-fleetos",
      },
    ],
  },
  {
    name: "Access 4 All",
    kicker: "Spark hackathon",
    blurb:
      "Accessible travel finder for wheelchair users. Search listings with community accessibility data — zero-step entry, roll-in showers, wide doors, WAV, elevator access.",
    outcome:
      "Shipped for BuildAnything Spark. Public app is live; TypeScript source is in accesslink.",
    stack: "TypeScript, Vite, Tailwind, Supabase, Monad",
    links: [
      { label: "Live", href: "https://access4all.vercel.app" },
      { label: "GitHub · accesslink", href: "https://github.com/jmizzo29/accesslink" },
      { label: "GitHub · access4all", href: "https://github.com/jmizzo29/access4all" },
    ],
  },
  {
    name: "GroupPix",
    kicker: "Private event albums",
    blurb:
      "Guests scan a QR, add a photo or a short video, and it hits the wall. No accounts. No public feed. The group code is the invite.",
    outcome:
      "Public product for private gatherings, with youth-group events as the first market. Repo name is still crowdsnap.",
    stack: "React, Vite, Supabase, PWA",
    links: [
      { label: "Live", href: "https://grouppix.vercel.app" },
      { label: "GitHub", href: "https://github.com/jmizzo29/crowdsnap" },
    ],
  },
  {
    name: "ShareNPay / Zeroed",
    kicker: "Co-founder, 2009–2017",
    blurb:
      "Social / P2P payments. The current public app is Zeroed: add a bill, see who owes whom, settle on Venmo, Zelle, Cash App, or PayPal. The app never takes the money.",
    outcome:
      "Co-founded ShareNPay. Current public surface is the Zeroed web app plus a Swift iOS project in the same repo.",
    stack: "Swift / SwiftUI, Firebase, web",
    links: [
      { label: "Live", href: "https://sharenpay-web.vercel.app" },
      { label: "GitHub", href: "https://github.com/jmizzo29/sharenpay" },
    ],
  },
];

export const internalWork = [
  {
    title: "Winner, InvoiceCloud 2026 company-wide Automathon",
    detail: "70 participants. Internal.",
  },
  {
    title: "15+ AI applications",
    detail: "Used by Solutions Engineering and Sales Engineering. Internal — not public demos.",
  },
  {
    title: "600+ hours/year of manual effort removed",
    detail: "Internal delivery work. Not a public product metric.",
  },
  {
    title: "ACH return-risk ML prototype",
    detail: "Advanced for pilot review. Internal. Not the public Loan Shield repo.",
  },
  {
    title: "Strategic proposal for scaling enterprise AI",
    detail:
      "Delivery model, governance, prioritization, and org structure. Internal.",
  },
];

export const moreWork: Project[] = [
  {
    name: "Restarto AI",
    kicker: "Public snapshot, May 2025",
    blurb:
      "Public GitHub repo is a Django + HTML site for restarto.ai. On-page copy: help people separated from employment get hired, and support wellbeing during the transition.",
    stack: "Django, HTML, Bootstrap",
    notes:
      "Last public push May 2025. The repo is a fork. No public live URL is published on the repo.",
    links: [{ label: "GitHub", href: "https://github.com/jmizzo29/restartoai" }],
  },
  {
    name: "FamilyTreeApp / FamilyConnect",
    kicker: "Personal",
    blurb:
      "Family directory: member profiles, photo sharing, family events, and authentication.",
    stack: "React, Vite, Supabase",
    notes:
      "Kept here as personal work so it does not lead the AI + leadership story. GitHub Pages hosts a FamilyConnect build.",
    links: [
      {
        label: "GitHub Pages",
        href: "https://jmizzo29.github.io/FamilyTreeApp/",
      },
      { label: "GitHub", href: "https://github.com/jmizzo29/FamilyTreeApp" },
    ],
  },
  {
    name: "ModernAPI",
    kicker: "Internal / not public",
    blurb:
      "API modernization and architecture review: FastAPI auditing, OpenAPI quality scoring, and modernization reporting.",
    stack: "Python, FastAPI, OpenAI",
    notes:
      "Listed on the prior portfolio README. No public repo under jmizzo29 and no live URL.",
    links: [],
  },
  {
    name: "Loan Shield",
    kicker: "Public repo",
    blurb:
      "Public repository named loan-shield, with a Vercel project attached. The repo README is a title only. The Vercel URL did not serve a public page when this site was written.",
    notes:
      "Not described as the ACH return-risk ML prototype. That prototype is internal InvoiceCloud work.",
    links: [
      { label: "Intended live URL", href: "https://loan-shield.vercel.app" },
      { label: "GitHub", href: "https://github.com/jmizzo29/loan-shield" },
    ],
  },
  {
    name: "MICHAEL",
    kicker: "Research, Rust",
    blurb:
      "Sparse-graph plus unified guardrail lattice and analog (CA / BZ / DNA / acousto-hydro) inference engines in Rust.",
    stack: "Rust",
    links: [{ label: "GitHub", href: "https://github.com/jmizzo29/michael" }],
  },
];

export const leadership = [
  "AI leader",
  "Enterprise solutions architect",
  "AI innovation leader",
  "Co-founder, ShareNPay (2009–2017)",
];
