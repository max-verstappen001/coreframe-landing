"use client";

import Link from "next/link";
import { Container } from "./Container";
import { Reveal } from "@/lib/animations";
import { CoreframeWordmark } from "./CoreframeWordmark";
import { CAPABILITIES, capabilityHref } from "@/lib/capabilities";
import { INDUSTRIES } from "@/lib/industries";

const CAPABILITY_LINKS = CAPABILITIES.slice(0, 6).map((c) => ({
  label: c.short,
  href: capabilityHref(c),
}));

const INDUSTRY_LINKS = INDUSTRIES.map((i) => ({
  label: i.short,
  href: "/industries",
}));

const COMPANY_LINKS = [
  { label: "Company", href: "/company" },
  { label: "Coreframe Labs", href: "/labs" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/company/careers" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Security", href: "/security" },
  { label: "Responsible AI", href: "/responsible-ai" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-caption uppercase tracking-[0.15em] text-subtle mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
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
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-elevated">
      <Container className="py-16 md:py-20">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-1.5 font-mono text-xl font-bold tracking-tight text-foreground"
              >
                <span className="text-subtle transition-colors group-hover:text-accent">[</span>
                <img
                  src="/logos/coreframe-mark.png"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] object-contain"
                />
                <CoreframeWordmark height={17} />
                <span className="text-subtle transition-colors group-hover:text-accent">]</span>
              </Link>
              <p className="mt-4 font-sans text-body-sm text-muted leading-relaxed max-w-sm">
                Engineering intelligent systems for the real world. Private
                AI, enterprise knowledge systems and autonomous workflows —
                designed, deployed and operated on infrastructure you
                control.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Private AI", "Enterprise AI", "Digital Transformation"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-3 py-1 font-display text-[11px] uppercase tracking-[0.12em] text-muted"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {tag}
                    </span>
                  )
                )}
              </div>
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

            <div className="md:col-span-2">
              <FooterColumn title="Capabilities" links={CAPABILITY_LINKS} />
            </div>
            <div className="md:col-span-2">
              <FooterColumn title="Industries" links={INDUSTRY_LINKS} />
            </div>
            <div className="md:col-span-2">
              <FooterColumn title="Company" links={COMPANY_LINKS} />
            </div>
            <div className="md:col-span-2">
              <FooterColumn title="Legal" links={LEGAL_LINKS} />
            </div>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-sans text-caption text-subtle">
            &copy; {new Date().getFullYear()} Coreframe Technologies Private
            Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/coreframe-technologies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Coreframe on LinkedIn"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border text-subtle hover:border-accent hover:text-accent transition-colors duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-display text-body-sm text-accent hover:text-foreground transition-colors duration-300 group"
            >
              Discuss a Project
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
      </Container>
    </footer>
  );
}
