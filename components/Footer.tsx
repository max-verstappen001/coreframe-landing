"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Reveal } from "@/lib/animations";

const FOOTER_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-elevated">
      <Container className="py-16 md:py-20">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-5">
              <Link
                href="/"
                className="font-display text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors duration-300"
              >
                CoreFrame
              </Link>
              <p className="mt-4 font-sans text-body-sm text-muted leading-relaxed max-w-sm">
                Strategic transformation partner for founder-led and
                operator-led businesses. Boutique by design. Senior-led always.
              </p>
              <a
                href="mailto:info@coreframetech.in"
                className="inline-block mt-4 font-display text-body-sm text-accent hover:text-foreground transition-colors duration-300"
              >
                info@coreframetech.in
              </a>
              <div className="mt-3 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+918072870268"
                    className="font-display text-body-sm text-muted hover:text-foreground transition-colors duration-300"
                  >
                    +91 80728 70268
                  </a>
                  <a
                    href="https://wa.me/918072870268"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/30 transition-colors duration-300"
                    aria-label="WhatsApp +91 80728 70268"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+916383831327"
                    className="font-display text-body-sm text-muted hover:text-foreground transition-colors duration-300"
                  >
                    +91 6383831327
                  </a>
                  <a
                    href="https://wa.me/916383831327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/30 transition-colors duration-300"
                    aria-label="WhatsApp +91 6383831327"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3 md:col-start-7">
              <h3 className="font-display text-caption uppercase tracking-[0.15em] text-subtle mb-4">
                Navigation
              </h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-body-sm text-muted hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Status */}
            <div className="md:col-span-4">
              <h3 className="font-display text-caption uppercase tracking-[0.15em] text-subtle mb-4">
                Status
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-sans text-body-sm text-muted">
                  Selective engagements. Limited capacity.
                </span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-display text-body-sm text-accent hover:text-foreground transition-colors duration-300 group"
              >
                Start a conversation
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-sans text-caption text-subtle">
            &copy; {new Date().getFullYear()} CoreFrame Technologies Private Limited. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="font-sans text-caption text-subtle hover:text-foreground transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="font-sans text-caption text-subtle hover:text-foreground transition-colors duration-300"
            >
              Privacy
            </Link>
            <p className="font-sans text-caption text-subtle">
              Built with precision.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
