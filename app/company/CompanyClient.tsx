"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal, BlurReveal } from "@/lib/animations";

const PRINCIPLES = [
  {
    title: "AI belongs in production, not demos.",
    body: "A working prototype is a starting point, not a deliverable. We build for the version that has to run every day.",
  },
  {
    title: "Private by design where it matters.",
    body: "When data is confidential, the architecture starts from that constraint — not as an afterthought.",
  },
  {
    title: "Honest about limits.",
    body: "AI systems are probabilistic. We say so, and we design human oversight in from the start.",
  },
  {
    title: "Evidence over hype.",
    body: "We don't publish metrics we can't substantiate, or claim certifications we don't hold.",
  },
];

function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-radial-fade">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <BlurReveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">
              Company
            </p>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="font-display font-medium text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
              A research, engineering and transformation company.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.16}>
            <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted leading-relaxed">
              Coreframe Technologies is an AI research and engineering
              company. Research generates technical capability. Engineering
              turns it into production systems. Transformation integrates
              it into how businesses actually operate.
            </p>
          </BlurReveal>
        </div>
      </Container>
    </section>
  );
}

function OperatingModel() {
  const steps = [
    { title: "Research", body: "Generates technical capability." },
    { title: "Engineering", body: "Turns capability into production systems." },
    { title: "Transformation", body: "Integrates systems into how the business operates." },
  ];
  return (
    <Section padding="large">
      <div className="grid md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-7">
              <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display font-medium text-xl text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 font-sans text-body-sm text-muted leading-relaxed">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function WhatWeBelieve() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ What we believe ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl">
          Principles, not slogans.
        </h2>
      </Reveal>
      <div className="mt-12 grid sm:grid-cols-2 gap-4">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-7">
              <h3 className="font-display font-medium text-lg text-foreground leading-snug">
                {p.title}
              </h3>
              <p className="mt-2 font-sans text-body-sm text-muted leading-relaxed">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Philosophy() {
  return (
    <Section padding="large">
      <div className="grid md:grid-cols-2 gap-4">
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-bg-card p-8">
            <h3 className="font-display font-medium text-xl text-foreground">
              Engineering philosophy
            </h3>
            <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">
              Production systems, not prototypes. We design for the
              constraints that actually exist — your data, your
              infrastructure, your regulatory environment — rather than the
              easiest path to a demo.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="h-full rounded-2xl border border-border bg-bg-card p-8">
            <h3 className="font-display font-medium text-xl text-foreground">
              Research philosophy
            </h3>
            <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">
              Applied, not theoretical. Coreframe Labs investigates problems
              we encounter in real engagements, and what we learn feeds
              back into how we build.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function CompanyInfo() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Company information ]
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mt-8 max-w-2xl">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-subtle mb-1">
              Legal entity
            </p>
            <p className="font-sans text-body-sm text-foreground">
              Coreframe Technologies Private Limited
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-subtle mb-1">
              Based in
            </p>
            <p className="font-sans text-body-sm text-foreground">
              India — serving customers internationally
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Leadership() {
  return (
    <Section padding="large">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Leadership ]
        </p>
        <div className="rounded-2xl border border-border bg-bg-card p-8 max-w-2xl">
          <p className="font-sans text-body-sm text-muted leading-relaxed">
            Leadership profiles are being finalized for publication.
            In the meantime,{" "}
            <Link href="/contact" className="text-accent hover:text-foreground transition-colors">
              get in touch
            </Link>{" "}
            and we&apos;ll connect you with the right person directly.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function CareersCTA() {
  return (
    <Section padding="large" background="elevated">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-card">
        <div className="relative px-8 py-14 md:px-16 md:py-18 text-center">
          <h2 className="font-display font-medium text-[clamp(1.9rem,4vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Building something you&apos;d want to work on?
          </h2>
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
              Discuss a Project
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

const FAQ_ITEMS = [
  {
    q: "How is Coreframe different from a typical AI agency or IT consultancy?",
    a: "Most agencies retrofit AI onto existing products or outsource execution to whoever's available. We're built around private AI and enterprise infrastructure specifically — the same engineers who scope an engagement build and operate it.",
  },
  {
    q: "What's a typical engagement timeline?",
    a: "Strategy and readiness work is usually a few weeks. Implementation timelines depend on scope — a focused capability can ship in weeks, a full private AI deployment or platform build runs longer. We size timelines to the engagement during scoping, not before.",
  },
  {
    q: "How does pricing work?",
    a: "Engagements are scoped individually — there's no published rate card, because a readiness assessment and a production private AI deployment aren't priced the same way. Tell us what you're building and we'll come back with a structure that fits.",
  },
  {
    q: "Do we need a fully scoped project before reaching out?",
    a: "No. Many engagements start as a readiness assessment or architecture conversation precisely because the scope isn't clear yet. That's a legitimate starting point, not a prerequisite you need to solve first.",
  },
  {
    q: "Can we start with something small?",
    a: "Yes. Most relationships start with a single capability — often Private AI, Enterprise AI or AI Strategy — and expand once the first piece is working. We don't require a platform-scale commitment up front.",
  },
  {
    q: "Do you only work with large enterprises?",
    a: "Our focus is industrial, energy, enterprise and technology organizations with real operational complexity — company size matters less than whether the problem involves confidential data, complex workflows, or infrastructure that needs to be taken seriously.",
  },
];

function FAQ() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ FAQs ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl">
          Working with Coreframe.
        </h2>
      </Reveal>
      <div className="mt-10 max-w-2xl space-y-8">
        {FAQ_ITEMS.map((item, i) => (
          <Reveal key={item.q} delay={(i % 4) * 0.04}>
            <h3 className="font-display font-medium text-lg text-foreground">
              {item.q}
            </h3>
            <p className="mt-2 font-sans text-body-sm text-muted leading-relaxed">
              {item.a}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default function CompanyClient() {
  return (
    <>
      <Hero />
      <OperatingModel />
      <WhatWeBelieve />
      <Philosophy />
      <CompanyInfo />
      <Leadership />
      <FAQ />
      <CareersCTA />
    </>
  );
}
