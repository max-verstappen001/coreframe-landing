"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal, BlurReveal } from "@/lib/animations";

const PROVIDES = [
  {
    title: "Strategy & discovery",
    items: [
      "AI readiness assessments",
      "AI opportunity discovery",
      "Enterprise AI roadmap",
      "Build vs buy analysis",
      "AI transformation strategy",
    ],
  },
  {
    title: "Architecture & adoption",
    items: [
      "AI architecture consulting",
      "Deployment strategy",
      "ROI modelling",
      "Enterprise AI adoption consulting",
    ],
  },
  {
    title: "Evaluation & assurance",
    items: [
      "Model evaluation",
      "LLM benchmarking",
      "Hallucination testing",
      "AI red-teaming",
      "Security testing",
    ],
  },
  {
    title: "Governance",
    items: [
      "AI governance",
      "Data governance",
      "AI risk assessment",
      "Responsible AI",
    ],
  },
];

const USE_CASES = [
  {
    title: "Readiness assessment",
    body: "Before committing budget, understand which of your AI ideas are actually worth building — and which aren't.",
  },
  {
    title: "Independent model evaluation",
    body: "A vendor claims their model works for your use case. We test that claim against your data, not their benchmark.",
  },
  {
    title: "Governance framework",
    body: "Define the policies, approval thresholds and evaluation practices your organization needs before AI reaches production scale.",
  },
  {
    title: "Red-teaming a deployed system",
    body: "Adversarial testing of a system already in production — including one we didn't build — to find failure modes before your users do.",
  },
];

const PROCESS = [
  { step: "Discovery", body: "Understand the business problem, the data, and what \"working\" would mean." },
  { step: "Prioritization", body: "Rank candidate use cases by value and feasibility, not by novelty." },
  { step: "Architecture options", body: "Lay out the realistic ways to build it, with trade-offs made explicit." },
  { step: "Evaluation plan", body: "Define how you'll know if the system actually works before it's trusted." },
  { step: "Governance framework", body: "Set the policies and approval gates the system will operate under." },
  { step: "Roadmap", body: "Sequence the work — what to build first, what to defer, what not to build." },
];

function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-radial-fade">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <BlurReveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">
              Capabilities / AI Strategy, Governance &amp; Evaluation
            </p>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="font-display font-medium text-[clamp(2.1rem,5vw,3.75rem)] leading-[1.08] tracking-[-0.02em] text-foreground">
              Decide where AI is worth it — and where it isn&apos;t.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.16}>
            <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted leading-relaxed">
              Readiness assessments, roadmaps, evaluation, red-teaming and
              governance that de-risk enterprise AI before and after you
              build.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:text-on-accent transition-colors duration-300"
              >
                Discuss a Project
              </Link>
              <Link
                href="/responsible-ai"
                className="inline-flex items-center rounded-lg border border-border-hover px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Responsible AI
              </Link>
            </div>
          </BlurReveal>
        </div>
      </Container>
    </section>
  );
}

function Problem() {
  return (
    <Section padding="large">
      <Reveal>
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
            [ The problem ]
          </p>
          <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05]">
            Most enterprises struggle to choose, evaluate and govern AI
            honestly.
          </h2>
          <p className="mt-5 font-sans text-body text-muted leading-relaxed">
            Too many AI initiatives are chosen for novelty, evaluated on a
            vendor&apos;s benchmark instead of your data, and deployed
            without a governance framework that can survive an audit.
            That&apos;s expensive to unwind after the fact.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function Provides() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ What Coreframe provides ]
        </p>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROVIDES.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-6">
              <h3 className="font-display font-medium text-base text-foreground mb-3">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="font-sans text-body-sm text-muted leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function UseCases() {
  return (
    <Section padding="large">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Use cases ]
        </p>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {USE_CASES.map((u, i) => (
          <Reveal key={u.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-7">
              <h3 className="font-display font-medium text-lg text-foreground">
                {u.title}
              </h3>
              <p className="mt-2 font-sans text-body-sm text-muted leading-relaxed">
                {u.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Process ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl">
          Discovery to roadmap.
        </h2>
      </Reveal>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROCESS.map((p, i) => (
          <Reveal key={p.step} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-6">
              <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display font-medium text-lg text-foreground">
                {p.step}
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

function EngagementModel() {
  return (
    <Section padding="large">
      <Reveal>
        <div className="rounded-2xl border border-border bg-bg-card p-8 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
            [ Engagement model ]
          </p>
          <p className="font-sans text-body text-muted leading-relaxed">
            Most governance and strategy engagements start as a
            fixed-scope assessment — typically weeks, not months — that
            ends in a concrete roadmap or governance framework. Whether
            implementation follows is a separate decision, made with the
            findings in hand, not assumed up front.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Can you evaluate a system you didn't build?",
      a: "Yes — independent evaluation and red-teaming are offered for systems built by other vendors or in-house teams.",
    },
    {
      q: "Do you push us toward building something?",
      a: "No. Build-vs-buy analysis is part of the work, and \"don't build this\" is a valid, common outcome.",
    },
    {
      q: "How long does a readiness assessment take?",
      a: "It depends on scope, but most run a few weeks — enough to be grounded in your actual data and constraints, not a generic framework.",
    },
  ];
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] mb-10">
          FAQs
        </h2>
      </Reveal>
      <div className="max-w-2xl space-y-8">
        {items.map((item) => (
          <Reveal key={item.q}>
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

function ClosingCTA() {
  return (
    <Section padding="large">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-60 pointer-events-none" />
        <div className="relative px-8 py-14 md:px-16 md:py-18 text-center">
          <h2 className="font-display font-medium text-[clamp(1.9rem,4vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Not sure where to start?
          </h2>
          <p className="mt-4 mx-auto max-w-lg font-sans text-body text-muted">
            A short conversation is usually enough to tell whether you
            need a readiness assessment, a governance framework, or
            neither yet.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:text-on-accent transition-colors duration-300"
            >
              Discuss a Project
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center rounded-lg border border-border-hover px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
            >
              All capabilities
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function GovernanceClient() {
  return (
    <>
      <Hero />
      <Problem />
      <Provides />
      <UseCases />
      <Process />
      <EngagementModel />
      <FAQ />
      <ClosingCTA />
    </>
  );
}
