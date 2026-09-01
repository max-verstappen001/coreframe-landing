"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal, BlurReveal } from "@/lib/animations";
import { CAPABILITIES, capabilityHref } from "@/lib/capabilities";
import { INDUSTRIES } from "@/lib/industries";
import { WORK_ITEMS } from "@/lib/work";

/* ═════════════════════════ Hero ═════════════════════════ */
const DEPLOYMENT_BADGES = ["On-Premise", "Private Cloud", "Hybrid", "Edge"];

function Hero() {
  return (
    <section className="relative min-h-[92svh] flex items-center overflow-hidden bg-radial-fade">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <Container className="relative pt-28 pb-16 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <BlurReveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-8">
              Private AI · Enterprise AI · Digital Transformation
            </p>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="font-display font-medium text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.03] tracking-[-0.025em] text-foreground">
              Engineering intelligent systems for the real world.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.18}>
            <p className="mt-8 mx-auto max-w-2xl font-sans text-body-lg text-muted leading-relaxed">
              Coreframe is an AI research and engineering company helping
              enterprises deploy private AI, intelligent software and
              autonomous systems across their operations — on their own
              infrastructure, inside their real workflows.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.26}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:text-on-accent transition-colors duration-300"
              >
                Discuss a Project
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link
                href="/capabilities"
                className="inline-flex items-center rounded-lg border border-border-hover px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Explore Capabilities
              </Link>
            </div>
          </BlurReveal>
          <BlurReveal delay={0.34}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              {DEPLOYMENT_BADGES.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {b}
                </span>
              ))}
            </div>
          </BlurReveal>
        </div>
      </Container>
    </section>
  );
}

/* ═════════════════════════ Design. Deploy. Operate. ═════════════════════════ */
const PILLARS = [
  {
    n: "01",
    title: "We design serious AI systems.",
    body: "We architect AI systems around your data, constraints and threat model — not around a demo. Retrieval, agents, evaluation and infrastructure engineered to hold up in production.",
  },
  {
    n: "02",
    title: "We deploy into real environments.",
    body: "We integrate intelligence into the systems, documents and operational workflows your business already runs on, with human oversight where it matters.",
  },
  {
    n: "03",
    title: "We can run AI privately.",
    body: "On-premise, private cloud, hybrid or edge. Your data stays on infrastructure you control.",
  },
] as const;

function Pillars() {
  return (
    <Section padding="large">
      <Reveal>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] text-center max-w-2xl mx-auto">
          Design. Deploy. Operate.
        </h2>
      </Reveal>
      <div className="mt-14 grid md:grid-cols-3 gap-4">
        {PILLARS.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-7 md:p-8">
              <span className="font-mono text-xs text-subtle">{p.n}</span>
              <h3 className="mt-4 font-display font-medium text-xl text-foreground leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ═════════════════════════ Capabilities grid ═════════════════════════ */
function CapabilitiesGrid() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
              [ Capabilities ]
            </p>
            <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05]">
              One partner across the AI
              <br className="hidden md:block" /> engineering lifecycle.
            </h2>
          </div>
          <Link
            href="/capabilities"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-muted hover:text-foreground transition-colors"
          >
            All capabilities
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CAPABILITIES.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.05}>
            <Link
              href={capabilityHref(c)}
              className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-bg-card p-6 transition-all duration-500 hover:border-border-hover hover:shadow-card"
            >
              <div>
                <h3 className="font-display font-medium text-lg text-foreground leading-snug transition-colors duration-300 group-hover:text-accent">
                  {c.title}
                </h3>
                <p className="mt-2.5 font-sans text-body-sm text-muted leading-relaxed">
                  {c.oneLiner}
                </p>
              </div>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-subtle">
                For you if {c.forYouIf.toLowerCase()}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ═════════════════════════ Private AI flagship band ═════════════════════════ */
function PrivateAIBand() {
  return (
    <Section padding="large">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated">
          <div aria-hidden className="absolute inset-0 bg-dots opacity-60 pointer-events-none" />
          <div className="relative px-8 py-16 md:px-16 md:py-20 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-5">
                [ Private AI — flagship ]
              </p>
              <h2 className="font-display font-medium text-[clamp(1.9rem,3.6vw,2.75rem)] leading-[1.08] tracking-[-0.02em] text-foreground">
                Your data. Your infrastructure. Your intelligence.
              </h2>
              <p className="mt-5 max-w-xl font-sans text-body text-muted leading-relaxed">
                Many enterprises can&apos;t send confidential contracts,
                engineering documents or operational data to public AI
                services. Coreframe builds private AI systems — including
                on-premise and air-gapped deployments — so your models run
                where your data lives.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {DEPLOYMENT_BADGES.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {b}
                  </span>
                ))}
              </div>
              <Link
                href="/capabilities/private-ai"
                className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-accent hover:text-foreground transition-colors"
              >
                Explore Private AI
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-xl border border-border bg-bg-card p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-subtle mb-3">
                  Deployment
                </p>
                <div className="space-y-2">
                  {["Ingestion", "Private vector store", "In-environment inference", "Application"].map(
                    (step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-subtle w-4">{i + 1}</span>
                        <span className="flex-1 rounded-md border border-border bg-bg px-3 py-2 font-mono text-[11px] text-muted">
                          {step}
                        </span>
                      </div>
                    )
                  )}
                </div>
                <p className="mt-4 font-mono text-[10px] text-subtle leading-relaxed">
                  No data egress to third-party model APIs in a private
                  deployment pattern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ═════════════════════════ Industries ═════════════════════════ */
function IndustriesGrid() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Industries ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-2xl">
          Built for document-heavy, high-stakes operations.
        </h2>
      </Reveal>
      <div className="mt-12 grid sm:grid-cols-2 gap-4">
        {INDUSTRIES.map((ind, i) => (
          <Reveal key={ind.slug} delay={i * 0.06}>
            <Link
              href="/industries"
              className="group block h-full rounded-2xl border border-border bg-bg-card p-7 transition-all duration-500 hover:border-border-hover hover:shadow-card"
            >
              <h3 className="font-display font-medium text-xl text-foreground leading-snug transition-colors duration-300 group-hover:text-accent">
                {ind.title}
              </h3>
              <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">
                {ind.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
                {ind.useCases.slice(0, 3).map((u) => (
                  <span key={u} className="font-mono text-[10px] uppercase tracking-[0.08em] text-subtle">
                    {u}
                  </span>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ═════════════════════════ Operating model ═════════════════════════ */
const ENGAGEMENT_STEPS = ["Assess", "Architect", "Build", "Deploy", "Operate"];

function OperatingModel() {
  return (
    <Section padding="large">
      <div className="grid md:grid-cols-12 gap-10 md:gap-8">
        <Reveal className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
            [ How we work ]
          </p>
          <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05]">
            Research → Engineering → Transformation.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-7 flex flex-col justify-center">
          <p className="font-sans text-body text-muted leading-relaxed max-w-lg">
            Research generates technical capability. Engineering turns it
            into production systems. Transformation integrates it into how
            your business actually operates.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {ENGAGEMENT_STEPS.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-border bg-bg-elevated px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-foreground">
                  {step}
                </span>
                {i < ENGAGEMENT_STEPS.length - 1 && (
                  <span className="text-subtle font-mono text-xs">→</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ═════════════════════════ Labs teaser ═════════════════════════ */
function LabsTeaser() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <div className="rounded-3xl border border-border bg-bg-card px-8 py-12 md:px-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
              [ Coreframe Labs ]
            </p>
            <h2 className="font-display font-medium text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.08] tracking-[-0.02em] text-foreground max-w-xl">
              Applied research, not innovation theatre.
            </h2>
            <p className="mt-4 max-w-xl font-sans text-body-sm text-muted leading-relaxed">
              Coreframe Labs is our applied research practice — private AI,
              small language models, agent infrastructure, evaluation and
              safety. Research feeds directly into what we deploy.
            </p>
          </div>
          <Link
            href="/labs"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-border-hover px-6 h-11 font-mono text-[12.5px] uppercase tracking-[0.1em] text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Visit Coreframe Labs
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}

/* ═════════════════════════ Selected work ═════════════════════════ */
function SelectedWork() {
  return (
    <Section padding="large">
      <Reveal>
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
              [ Selected work ]
            </p>
            <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05]">
              Selected work.
            </h2>
            <p className="mt-3 font-sans text-body-sm text-muted max-w-md">
              Anonymized where attribution is pending. We don&apos;t publish
              metrics we can&apos;t substantiate.
            </p>
          </div>
          <Link
            href="/work"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-muted hover:text-foreground transition-colors"
          >
            All work
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-4">
        {WORK_ITEMS.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.06}>
            <Link
              href="/work"
              className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-bg-card p-7 transition-all duration-500 hover:border-border-hover hover:shadow-card"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                  {item.industry}
                </span>
                <h3 className="mt-3 font-display font-medium text-xl text-foreground leading-snug transition-colors duration-300 group-hover:text-accent">
                  {item.category}
                </h3>
                <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">
                  {item.challenge}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] uppercase tracking-[0.08em] text-subtle">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ═════════════════════════ Security & responsibility ═════════════════════════ */
function SecurityResponsibility() {
  return (
    <Section padding="large" background="elevated">
      <div className="grid md:grid-cols-2 gap-4">
        <Reveal>
          <Link
            href="/security"
            className="group block h-full rounded-2xl border border-border bg-bg-card p-8 transition-all duration-500 hover:border-border-hover hover:shadow-card"
          >
            <h3 className="font-display font-medium text-xl text-foreground leading-snug transition-colors duration-300 group-hover:text-accent">
              Security architecture, matched to your requirements.
            </h3>
            <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">
              Security architecture is determined by the requirements,
              deployment environment and threat model of each engagement.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-accent">
              Security
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
          </Link>
        </Reveal>
        <Reveal delay={0.06}>
          <Link
            href="/responsible-ai"
            className="group block h-full rounded-2xl border border-border bg-bg-card p-8 transition-all duration-500 hover:border-border-hover hover:shadow-card"
          >
            <h3 className="font-display font-medium text-xl text-foreground leading-snug transition-colors duration-300 group-hover:text-accent">
              Responsible AI, stated honestly.
            </h3>
            <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">
              AI systems are probabilistic and can be wrong. We design for
              human oversight, evidence-backed outputs and honest handling
              of AI limitations.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-accent">
              Responsible AI
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}

/* ═════════════════════════ Technology ecosystem (muted, low on page) ═════════════════════════ */
const TECH_AREAS = [
  "Open-weight LLMs",
  "Small Language Models",
  "Vector Databases",
  "Kubernetes & GPU Orchestration",
  "Agent Orchestration (MCP)",
  "Cloud & Private Infrastructure",
  "Observability & Evaluation",
];

function TechEcosystem() {
  return (
    <Section padding="default">
      <Reveal>
        <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-subtle mb-8">
          Technology ecosystem
        </p>
        <p className="text-center mx-auto max-w-xl font-sans text-body-sm text-muted mb-8">
          We work across the modern AI and cloud stack, and select tools per
          engagement rather than by default.
        </p>
      </Reveal>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {TECH_AREAS.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] uppercase tracking-[0.08em] text-subtle/70"
          >
            {t}
          </span>
        ))}
      </div>
    </Section>
  );
}

/* ═════════════════════════ FAQ ═════════════════════════ */
const FAQ_ITEMS = [
  {
    question: "How is Coreframe different from a typical AI agency?",
    answer:
      "Most agencies retrofit AI onto existing products or outsource execution to whoever's available. We're built around private AI and enterprise infrastructure specifically — the same engineers who scope an engagement build and operate it.",
  },
  {
    question: "Can you deploy AI without our data leaving our environment?",
    answer:
      "Yes — that's Private AI. On-premise, private cloud, hybrid or air-gapped deployment, so inference happens where your data already lives.",
  },
  {
    question: "What's a typical engagement timeline?",
    answer:
      "Strategy and readiness work is usually a few weeks. Implementation depends on scope — we size timelines during scoping, not before, rather than quoting a number that doesn't reflect the actual work.",
  },
  {
    question: "Do we need a fully scoped project before reaching out?",
    answer:
      "No. Many engagements start as a readiness assessment or architecture conversation precisely because the scope isn't clear yet.",
  },
  {
    question: "Do you only work with large enterprises?",
    answer:
      "Our focus is industrial, energy, enterprise and technology organizations with real operational complexity — company size matters less than whether the problem involves confidential data, complex workflows, or infrastructure worth taking seriously.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section padding="large">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ FAQs ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl">
          Working with Coreframe.
        </h2>
      </Reveal>
      <div className="mt-10 border-t border-border">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.question} className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center gap-6 py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-mono text-xs text-subtle tabular-nums pt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 font-display font-medium text-lg md:text-xl leading-snug transition-colors ${
                    isOpen ? "text-accent" : "text-foreground group-hover:text-accent"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`shrink-0 font-display text-2xl leading-none text-muted transition-transform duration-500 ease-out-expo ${
                    isOpen ? "rotate-45 text-accent" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.3, ease: "easeOut" },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-[calc(0.75rem+1.5rem)] pr-12 font-sans text-body-sm text-muted leading-relaxed max-w-2xl">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ═════════════════════════ Closing CTA ═════════════════════════ */
function ClosingCTA() {
  return (
    <Section padding="large">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-60 pointer-events-none" />
        <div aria-hidden className="absolute inset-0 bg-radial-fade pointer-events-none" />
        <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">
            [ Start ]
          </p>
          <h2 className="font-display font-medium text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] tracking-[-0.02em] text-foreground">
            Let&apos;s discuss what you&apos;re trying to build.
          </h2>
          <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted">
            Tell us about your data, your constraints and your environment.
            We&apos;ll tell you what&apos;s realistic.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:text-on-accent transition-colors duration-300"
            >
              Discuss a Project
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <a
              href="mailto:info@coreframetech.in"
              className="inline-flex items-center rounded-lg border border-border-hover px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
            >
              info@coreframetech.in
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ═════════════════════════ Page ═════════════════════════ */
export default function HomeClient() {
  return (
    <>
      <Hero />
      <Pillars />
      <CapabilitiesGrid />
      <PrivateAIBand />
      <IndustriesGrid />
      <OperatingModel />
      <LabsTeaser />
      <SelectedWork />
      <SecurityResponsibility />
      <TechEcosystem />
      <FAQ />
      <ClosingCTA />
    </>
  );
}
