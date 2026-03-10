"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Reveal } from "@/lib/animations";

const FOOTER_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/case-studies" },
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
                Strategic digital transformation for founders and operators.
                Boutique by design. Senior-led delivery.
              </p>
              <a
                href="mailto:info@coreframetech.in"
                className="inline-block mt-4 font-display text-body-sm text-accent hover:text-foreground transition-colors duration-300"
              >
                info@coreframetech.in
              </a>
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
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
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
            &copy; {new Date().getFullYear()} CoreFrame Technologies. All
            rights reserved.
          </p>
          <p className="font-sans text-caption text-subtle">
            Built with precision.
          </p>
        </div>
      </Container>
    </footer>
  );
}
