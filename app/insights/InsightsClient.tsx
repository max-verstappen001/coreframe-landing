"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal, BlurReveal } from "@/lib/animations";

const CATEGORIES = [
  "Private AI",
  "Enterprise AI & Knowledge",
  "AI Agents & Automation",
  "AI Infrastructure",
  "AI Strategy & Governance",
  "Edge AI",
];

const PLANNED_TOPICS = [
  { title: "On-Premise LLM vs Private Cloud LLM", category: "Private AI" },
  { title: "When Should Enterprises Use SLMs?", category: "Private AI" },
  { title: "Building RAG for Industrial Knowledge", category: "Enterprise AI & Knowledge" },
  { title: "Running LLMs on Enterprise Hardware", category: "AI Infrastructure" },
  { title: "Cost of Deploying a Private LLM", category: "Private AI" },
  { title: "AI Agents vs Traditional Automation", category: "AI Agents & Automation" },
  { title: "Enterprise AI Security Architecture", category: "AI Strategy & Governance" },
  { title: "Choosing GPUs for Local AI", category: "AI Infrastructure" },
  { title: "Contract Intelligence With LLMs", category: "Enterprise AI & Knowledge" },
  { title: "Enterprise LLM Evaluation", category: "AI Strategy & Governance" },
  { title: "AI Governance for Enterprises", category: "AI Strategy & Governance" },
  { title: "Private AI Architecture", category: "Private AI" },
  { title: "AI Data Sovereignty", category: "Private AI" },
];

function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-radial-fade">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <BlurReveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">
              Insights
            </p>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="font-display font-medium text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
              Insights on building AI that holds up in production.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.16}>
            <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted leading-relaxed">
              Practical, technical writing on private AI, enterprise
              knowledge systems, infrastructure and governance — written by
              the people who build them.
            </p>
          </BlurReveal>
        </div>
      </Container>
    </section>
  );
}

function CategoryNav() {
  return (
    <Section padding="default">
      <Reveal>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="inline-flex items-center rounded-full border border-border bg-bg-elevated px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted"
            >
              {c}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

function PlannedTopics() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ In progress ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl mb-4">
          What we&apos;re writing next.
        </h2>
        <p className="font-sans text-body-sm text-muted max-w-xl mb-10">
          Articles are published as they&apos;re written — no filler, no
          padding. Here&apos;s what&apos;s on the list.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {PLANNED_TOPICS.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.03}>
            <div className="h-full rounded-xl border border-border bg-bg-card px-5 py-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-subtle">
                {t.category}
              </span>
              <h3 className="mt-2 font-display text-[15px] text-foreground leading-snug">
                {t.title}
              </h3>
            </div>
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
        <div className="relative px-8 py-14 md:px-16 md:py-18 text-center">
          <h2 className="font-display font-medium text-[clamp(1.9rem,4vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Have a question we should write about?
          </h2>
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

export default function InsightsClient() {
  return (
    <>
      <Hero />
      <CategoryNav />
      <PlannedTopics />
      <ClosingCTA />
    </>
  );
}
