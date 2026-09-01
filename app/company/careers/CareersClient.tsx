"use client";

import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { BlurReveal, Reveal } from "@/lib/animations";

function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-radial-fade">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <BlurReveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">
              Careers
            </p>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="font-display font-medium text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
              We&apos;re growing — introduce yourself.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.16}>
            <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted leading-relaxed">
              We don&apos;t have open roles listed right now. If you work on
              private AI, enterprise systems, or applied research and want
              to be first in line when we do, reach out.
            </p>
          </BlurReveal>
        </div>
      </Container>
    </section>
  );
}

function WhatWeLookFor() {
  const items = [
    "Judgment over process — we're small enough that decisions are made by the people doing the work.",
    "Comfort with ambiguity — enterprise engagements rarely arrive with a clean spec.",
    "Depth over breadth — we'd rather someone go deep on one hard problem than shallow on ten.",
  ];
  return (
    <Section padding="large">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ What we look for ]
        </p>
      </Reveal>
      <div className="mt-6 space-y-4 max-w-2xl">
        {items.map((item, i) => (
          <Reveal key={item} delay={i * 0.06}>
            <p className="font-sans text-body text-muted leading-relaxed">{item}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ApplyCTA() {
  return (
    <Section padding="large" background="elevated">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-card">
        <div className="relative px-8 py-14 md:px-16 md:py-18 text-center">
          <h2 className="font-display font-medium text-[clamp(1.9rem,4vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Get in touch.
          </h2>
          <p className="mt-4 mx-auto max-w-lg font-sans text-body text-muted">
            Send a note and a bit about what you work on.
          </p>
          <div className="mt-8">
            <a
              href="mailto:info@coreframetech.in"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:text-on-accent transition-colors duration-300"
            >
              info@coreframetech.in
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function CareersClient() {
  return (
    <>
      <Hero />
      <WhatWeLookFor />
      <ApplyCTA />
    </>
  );
}
