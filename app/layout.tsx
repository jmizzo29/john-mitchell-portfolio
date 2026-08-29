import type { Metadata, Viewport } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.homepage),
  title: {
    default: `${site.shortName} — ${site.headline}`,
    template: `%s — ${site.shortName}`,
  },
  description: site.summary,
  applicationName: site.shortName,
  authors: [{ name: site.name, url: site.homepage }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.homepage,
    title: `${site.shortName} — ${site.headline}`,
    description: site.summary,
    locale: "en_US",
    siteName: site.shortName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} — ${site.headline}`,
    description: site.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4efe6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
