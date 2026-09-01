"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal, BlurReveal } from "@/lib/animations";

const RESEARCH_AREAS = [
  "Applied AI Research",
  "Private AI",
  "Small Language Models",
  "Agent Infrastructure",
  "AI Evaluation & Safety",
  "Edge Intelligence",
  "Human-AI Systems",
  "Enterprise AI Infrastructure",
];

function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-radial-fade">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <BlurReveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">
              Coreframe Labs
            </p>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="font-display font-medium text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
              Applied research that ships.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.16}>
            <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted leading-relaxed">
              Coreframe Labs is our applied research practice. We
              investigate the hard problems in private and enterprise AI,
              and the results feed directly into what we build for
              customers. No innovation theatre — experiments, reports,
              benchmarks and code.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/labs/research"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:text-on-accent transition-colors duration-300"
              >
                Read our research
              </Link>
              <Link
                href="/labs/open-source"
                className="inline-flex items-center rounded-lg border border-border-hover px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
              >
                See open-source
              </Link>
            </div>
          </BlurReveal>
        </div>
      </Container>
    </section>
  );
}

function ResearchAreas() {
  return (
    <Section padding="large">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Research areas ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl">
          Where we're focused.
        </h2>
      </Reveal>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {RESEARCH_AREAS.map((area, i) => (
          <Reveal key={area} delay={i * 0.04}>
            <div className="h-full rounded-xl border border-border bg-bg-card px-5 py-5">
              <span className="font-display text-[15px] text-foreground leading-snug">
                {area}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function LatestFromLabs() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Latest ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl mb-10">
          Latest from the Labs.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="rounded-2xl border border-border bg-bg-card p-8 text-center">
          <p className="font-sans text-body text-muted">
            Early work is underway; reports are published as results
            mature.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function LabsSections() {
  const items = [
    {
      title: "Research",
      body: "Technical reports, architecture studies and model evaluations as they're published.",
      href: "/labs/research",
    },
    {
      title: "Open Source",
      body: "Reusable tooling and libraries we release publicly.",
      href: "/labs/open-source",
    },
    {
      title: "Publications",
      body: "Formal write-ups and preprints, with honest status labels.",
      href: "/labs/publications",
    },
  ];
  return (
    <Section padding="large">
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <Link
              href={item.href}
              className="group block h-full rounded-2xl border border-border bg-bg-card p-7 transition-all duration-500 hover:border-border-hover hover:shadow-card"
            >
              <h3 className="font-display font-medium text-xl text-foreground transition-colors duration-300 group-hover:text-accent">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">
                {item.body}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CareersCTA() {
  return (
    <Section padding="large" background="elevated">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-card">
        <div className="relative px-8 py-14 md:px-16 md:py-18 text-center">
          <h2 className="font-display font-medium text-[clamp(1.9rem,4vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Interested in the research?
          </h2>
          <p className="mt-4 mx-auto max-w-lg font-sans text-body text-muted">
            We collaborate with researchers and engineers who care about AI
            that holds up outside a demo.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/company/careers"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:text-on-accent transition-colors duration-300"
            >
              See open roles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-border-hover px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function LabsClient() {
  return (
    <>
      <Hero />
      <ResearchAreas />
      <LatestFromLabs />
      <LabsSections />
      <CareersCTA />
    </>
  );
}
