import type { Metadata } from "next";
import { heading, sans, display } from "@/lib/fonts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AIChatWidget } from "@/components/AIChatWidget";
import { SmoothScroll } from "@/lib/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CoreFrame Technologies — Strategic Digital Transformation",
    template: "%s — CoreFrame Technologies",
  },
  description:
    "CoreFrame partners with founders and operators to improve margins, modernize operations, and build scalable digital systems.",
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
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AIChatWidget />
      </body>
    </html>
  );
}
