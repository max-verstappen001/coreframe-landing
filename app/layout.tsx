import type { Metadata } from "next";
import Script from "next/script";
import { heading, sans, display, mono } from "@/lib/fonts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { NoiseOverlay } from "@/lib/animations";
import { siteConfig, organizationJsonLd } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Coreframe Technologies — Enterprise & Private AI Engineering",
    template: "%s — Coreframe Technologies",
  },
  description: siteConfig.description,
  keywords: [
    "private AI",
    "on-premise LLM",
    "enterprise AI",
    "AI agents",
    "AI infrastructure",
    "AI governance",
    "AI engineering company",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: "Coreframe Technologies — Enterprise & Private AI Engineering",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Coreframe Technologies — Enterprise & Private AI Engineering",
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
      </head>
      <body className="font-sans antialiased bg-bg text-foreground">
        <NoiseOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Script
          src="https://widget.owlish.bot/loader.js"
          data-agent-id="agt_2homy93hec1ioyex"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
