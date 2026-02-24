import type { Metadata } from "next";
import { serif, sans } from "@/lib/fonts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
