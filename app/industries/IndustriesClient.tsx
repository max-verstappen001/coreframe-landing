"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal, BlurReveal } from "@/lib/animations";
import { INDUSTRIES } from "@/lib/industries";
import { CAPABILITIES } from "@/lib/capabilities";

const LEAD_CAPABILITIES: Record<string, string[]> = {
  "industrial-energy": ["Private AI", "Enterprise AI", "AI Agents"],
  "retail-hospitality": ["AI Agents", "Software Engineering", "Enterprise AI"],
  enterprise: ["Enterprise AI", "AI Agents", "Software Engineering"],
  technology: ["AI Infrastructure", "Software Engineering", "AI Agents"],
};

function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-radial-fade">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <BlurReveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">
              Industries
            </p>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="font-display font-medium text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
              We work across industries — depth comes from the problem, not the sector.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.16}>
            <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted leading-relaxed">
              Wherever confidential data, complex workflows, or high-stakes
              operations make private, enterprise-grade AI genuinely
              valuable — that&apos;s where we go deep.
            </p>
          </BlurReveal>
        </div>
      </Container>
    </section>
  );
}

function IndustriesList() {
  return (
    <Section padding="large">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Where we've gone deepest ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl mb-10">
          A few examples, not the whole list.
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-4">
        {INDUSTRIES.map((ind, i) => (
          <Reveal key={ind.slug} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-8">
              <h3 className="font-display font-medium text-2xl text-foreground leading-snug">
                {ind.title}
              </h3>
              <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">
                {ind.description}
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-subtle mb-2">
                Where AI helps
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                {ind.useCases.map((u) => (
                  <span key={u} className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                    {u}
                  </span>
                ))}
              </div>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-subtle mb-2">
                Lead capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {LEAD_CAPABILITIES[ind.slug]?.map((c) => (
                  <Link
                    key={c}
                    href="/capabilities"
                    className="inline-flex items-center rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted hover:border-accent hover:text-accent transition-colors duration-300"
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CapabilityMap() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Capabilities ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl">
          How our capabilities map to your operations.
        </h2>
      </Reveal>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {CAPABILITIES.map((c) => (
          <Link
            key={c.slug}
            href="/capabilities"
            className="rounded-xl border border-border bg-bg-card px-5 py-4 hover:border-border-hover transition-colors duration-300"
          >
            <span className="font-display text-sm text-foreground">{c.short}</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function ClosingCTA() {
  return (
    <Section padding="large">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-60 pointer-events-none" />
        <div className="relative px-8 py-14 md:px-16 md:py-18 text-center">
          <h2 className="font-display font-medium text-[clamp(1.9rem,4vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Don&apos;t see your industry?
          </h2>
          <p className="mt-4 mx-auto max-w-lg font-sans text-body text-muted">
            We evaluate every engagement on the problem, not the sector.
            Tell us what you&apos;re working with.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:text-on-accent transition-colors duration-300"
            >
              Discuss a Project
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function IndustriesClient() {
  return (
    <>
      <Hero />
      <IndustriesList />
      <CapabilityMap />
      <ClosingCTA />
    </>
  );
}
