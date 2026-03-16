import type { Metadata } from "next";
import { heading, sans, display } from "@/lib/fonts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AIChatWidget } from "@/components/AIChatWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CoreFrame Technologies — Strategic Digital Transformation",
    template: "%s — CoreFrame Technologies",
  },
  description:
    "CoreFrame bridges business strategy and technical execution — delivering AI agents, automation, and full-stack systems for businesses that need innovative technology that actually serves the business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeInitScript = `(() => {
    try {
      const stored = localStorage.getItem("coreframe-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = stored === "light" || stored === "dark" ? stored : (prefersDark ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", theme);
    } catch {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  })();`;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${heading.variable} ${sans.variable} ${display.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased bg-bg text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AIChatWidget />
      </body>
    </html>
  );
}
