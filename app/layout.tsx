import type { Metadata } from "next";
import Script from "next/script";
import { heading, sans, display, mono } from "@/lib/fonts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { NoiseOverlay } from "@/lib/animations";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Coreframe Technologies — Enterprise & Private AI Engineering",
    template: "%s — Coreframe Technologies",
  },
  description:
    "Coreframe is an AI research and engineering company helping enterprises deploy private AI, intelligent software and autonomous systems across their operations — on-premise, private cloud, hybrid or edge.",
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
