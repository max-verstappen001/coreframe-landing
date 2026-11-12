"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal, BlurReveal } from "@/lib/animations";
import { FAQ_ITEMS } from "./faq";

const DEPLOYMENT_BADGES = ["On-Premise", "Private Cloud", "Hybrid", "Edge"];

const PROVIDES = [
  {
    title: "Deployment",
    items: [
      "On-premise LLM deployment",
      "Private-cloud AI",
      "Hybrid infrastructure",
      "Air-gapped environments",
      "Local inference",
      "Enterprise AI appliances",
      "Offline AI",
    ],
  },
  {
    title: "Models",
    items: ["Small language models (SLMs)", "Model selection & optimization", "Quantization"],
  },
  {
    title: "Infrastructure",
    items: ["GPU / inference infrastructure", "Dedicated AI infrastructure"],
  },
  {
    title: "Applications",
    items: ["Private enterprise copilots", "Secure document intelligence"],
  },
  {
    title: "Governance",
    items: ["Data-sovereignty architecture"],
  },
];

const USE_CASES = [
  {
    title: "Private copilot over confidential documents",
    body: "An assistant grounded in engineering documents, contracts or specifications that never leave your environment.",
  },
  {
    title: "Air-gapped assistant for a secure facility",
    body: "Fully offline deployment for environments where no external network connection is permitted.",
  },
  {
    title: "On-prem contract intelligence",
    body: "Search and analysis over legal and commercial documents, running entirely inside your infrastructure.",
  },
  {
    title: "A small model on modest hardware",
    body: "A right-sized SLM for one specific task, instead of a large general-purpose model you can't justify running locally.",
  },
];

const DEPLOYMENT_MODELS = [
  {
    title: "On-Premise",
    body: "Inference and data stay entirely within your own data center or facility. The highest degree of control, for the most sensitive workloads.",
  },
  {
    title: "Private Cloud",
    body: "A dedicated, isolated cloud environment under your control or your provider agreement — infrastructure you control without owning hardware.",
  },
  {
    title: "Hybrid",
    body: "Sensitive workloads stay in-environment; less sensitive workloads use shared or public infrastructure where that trade-off makes sense.",
  },
  {
    title: "Edge",
    body: "Inference runs on-device or on-site, including offline and low-connectivity settings.",
  },
];

const ARCHITECTURE_STEPS = [
  { step: "Ingestion", body: "Documents and data enter the pipeline inside your environment." },
  { step: "Private vector store", body: "Retrieval infrastructure runs in-environment, not on a third-party service." },
  { step: "In-environment inference", body: "The model runs on-prem, in your private cloud, or at the edge — never a public API call." },
  { step: "Application", body: "Your copilot, search tool or agent sits on top, with no data egress in the loop." },
];

const TECH_AREAS = [
  "Open-weight model families",
  "Quantization & serving runtimes",
  "Private vector stores",
  "GPU orchestration",
];

function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-radial-fade">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <BlurReveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">
              Capabilities / Private AI &amp; On-Premise LLMs
            </p>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="font-display font-medium text-[clamp(2.1rem,5vw,3.75rem)] leading-[1.08] tracking-[-0.02em] text-foreground">
              Private AI. Your data. Your infrastructure. Your intelligence.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.16}>
            <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted leading-relaxed">
              Deploy production language models inside your own
              environment — on-premise, private cloud, hybrid or
              air-gapped — so confidential data never has to leave
              infrastructure you control.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.22}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
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
          <BlurReveal delay={0.28}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:text-on-accent transition-colors duration-300"
              >
                Discuss a Project
              </Link>
              <Link
                href="/security"
                className="inline-flex items-center rounded-lg border border-border-hover px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Security
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
            Confidential data can&apos;t go to a public AI API.
          </h2>
          <p className="mt-5 font-sans text-body text-muted leading-relaxed">
            Contracts, engineering documents, certifications and
            operational data are often exactly the kind of information an
            organization is contractually, legally or reputationally
            required to keep inside its own environment — which rules out
            most consumer and public-cloud AI services by default.
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
          [ What CoreFrame provides ]
        </p>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
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

function Architecture() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Architecture ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl">
          The data plane stays in your environment.
        </h2>
      </Reveal>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ARCHITECTURE_STEPS.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-6">
              <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display font-medium text-lg text-foreground">
                {s.step}
              </h3>
              <p className="mt-2 font-sans text-body-sm text-muted leading-relaxed">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <p className="mt-6 font-mono text-[11px] text-subtle leading-relaxed max-w-2xl">
          No data egress to third-party model APIs in a private deployment
          pattern.
        </p>
      </Reveal>
    </Section>
  );
}

function DeploymentModels() {
  return (
    <Section padding="large">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Deployment models ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl">
          Run it wherever your data has to live.
        </h2>
      </Reveal>
      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        {DEPLOYMENT_MODELS.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-7">
              <h3 className="font-display font-medium text-lg text-foreground">
                {d.title}
              </h3>
              <p className="mt-2 font-sans text-body-sm text-muted leading-relaxed">
                {d.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Security() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <div className="rounded-2xl border border-border bg-bg-card p-8 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
            [ Security considerations ]
          </p>
          <p className="font-sans text-body text-muted leading-relaxed">
            In private and air-gapped deployments, inference and data
            remain within infrastructure you control. Specific controls —
            encryption, network isolation, access management, retention —
            are defined by your requirements and threat model per
            engagement. See{" "}
            <Link href="/security" className="text-accent hover:text-foreground transition-colors">
              Security
            </Link>{" "}
            for the practices we work from.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function Technologies() {
  return (
    <Section padding="default">
      <Reveal>
        <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-subtle mb-8">
          Technologies
        </p>
      </Reveal>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {TECH_AREAS.map((t) => (
          <span key={t} className="font-mono text-[11px] uppercase tracking-[0.08em] text-subtle/70">
            {t}
          </span>
        ))}
      </div>
    </Section>
  );
}

function EngagementModel() {
  const steps = ["Feasibility & sizing", "Hardware / model selection", "Deployment", "Evaluation", "Operate"];
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Engagement model ]
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-border bg-bg-card px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-foreground">
                {step}
              </span>
              {i < steps.length - 1 && <span className="text-subtle font-mono text-xs">→</span>}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

function FAQ() {
  const items = FAQ_ITEMS;
  return (
    <Section padding="large">
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
    <Section padding="large" background="elevated">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-card">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-60 pointer-events-none" />
        <div className="relative px-8 py-14 md:px-16 md:py-18 text-center">
          <h2 className="font-display font-medium text-[clamp(1.9rem,4vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Confidential data, real AI, no compromise.
          </h2>
          <p className="mt-4 mx-auto max-w-lg font-sans text-body text-muted">
            Tell us what has to stay in your environment — we&apos;ll tell
            you what&apos;s realistic to build around it.
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

export default function PrivateAIClient() {
  return (
    <>
      <Hero />
      <Problem />
      <Provides />
      <UseCases />
      <Architecture />
      <DeploymentModels />
      <Security />
      <Technologies />
      <EngagementModel />
      <FAQ />
      <ClosingCTA />
    </>
  );
}
