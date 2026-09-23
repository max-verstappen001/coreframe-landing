import type { Metadata } from "next";
import { heading, sans, display, mono } from "@/lib/fonts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { NoiseOverlay } from "@/lib/animations";
import { siteConfig, organizationJsonLd, siteNavigationJsonLd } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Coreframe Technologies | Private AI & Edge AI",
    template: "%s — Coreframe Technologies",
  },
  description: siteConfig.description,
  keywords: [
    "private AI",
    "on-premise LLM",
    "enterprise AI",
    "edge AI",
    "LLMOps",
    "AI infrastructure",
    "AI governance",
    "EU AI Act compliance",
    "AI engineering company",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: "Coreframe Technologies | Private AI & Edge AI",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Coreframe Technologies | Private AI & Edge AI",
    description: siteConfig.description,
  },
  icons: {
    icon: "/icon.png",
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "text/plain": `${siteConfig.url}/llms.txt`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeInitScript = `(() => {
    try {
      const stored = localStorage.getItem("coreframe-theme");
      const theme = stored === "light" || stored === "dark" ? stored : "light";
      document.documentElement.setAttribute("data-theme", theme);
    } catch {
      document.documentElement.setAttribute("data-theme", "light");
    }
  })();`;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${heading.variable} ${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Machine-readable discovery hints for AI agents and answer engines */}
        <link rel="llms-txt" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link
          rel="alternate"
          type="application/json"
          href="/api/agent"
          title="Coreframe Agent Interface"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd()) }}
        />
      </head>
      <body className="font-sans antialiased bg-bg text-foreground">
        <NoiseOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
