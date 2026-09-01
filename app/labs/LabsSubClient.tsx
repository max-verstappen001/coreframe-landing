"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { BlurReveal, Reveal } from "@/lib/animations";

interface LabsSubClientProps {
  eyebrow: string;
  title: string;
  body: string;
}

export default function LabsSubClient({ eyebrow, title, body }: LabsSubClientProps) {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-radial-fade">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <BlurReveal>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">
                {eyebrow}
              </p>
            </BlurReveal>
            <BlurReveal delay={0.08}>
              <h1 className="font-display font-medium text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
                {title}
              </h1>
            </BlurReveal>
            <BlurReveal delay={0.16}>
              <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted leading-relaxed">
                {body}
              </p>
            </BlurReveal>
          </div>
        </Container>
      </section>
      <Section padding="large">
        <Reveal>
          <div className="rounded-2xl border border-border bg-bg-card p-10 text-center max-w-2xl mx-auto">
            <p className="font-sans text-body text-muted">
              Early work is underway; nothing is published here yet.
            </p>
            <Link
              href="/labs"
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-accent hover:text-foreground transition-colors"
            >
              Back to Coreframe Labs
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
