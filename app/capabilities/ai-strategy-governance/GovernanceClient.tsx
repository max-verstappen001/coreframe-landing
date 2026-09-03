"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal, BlurReveal } from "@/lib/animations";
import { FAQ_ITEMS } from "./faq";

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
    title: "Governance & compliance",
    items: [
      "AI governance frameworks",
      "Data governance",
      "EU AI Act compliance assessment",
      "AI risk, bias & impact assessment",
      "Conformity & technical documentation",
      "Human-in-the-loop review protocols",
      "Responsible AI training",
    ],
  },
];

/**
 * Assessment themes for the compliance assessment. Aligned with the EU's
 * requirements for trustworthy AI and the obligations the AI Act places on
 * providers and deployers of high-risk systems.
 */
const ASSESSMENT_THEMES = [
  {
    title: "Human agency & oversight",
    body: "Who can intervene, override or halt the system — and whether they actually can in practice, not just on paper.",
  },
  {
    title: "Technical robustness & safety",
    body: "Accuracy, resilience to adversarial input, fallback behaviour and how failure is detected and contained.",
  },
  {
    title: "Privacy & data governance",
    body: "Lawful basis, data minimisation, retention, and whether training and inference data stay where they're supposed to.",
  },
  {
    title: "Transparency",
    body: "Whether users know they're interacting with AI, whether outputs are explainable, and whether documentation matches the system.",
  },
  {
    title: "Fairness & non-discrimination",
    body: "Measured performance across the populations the system serves, and where outcomes diverge.",
  },
  {
    title: "Accountability",
    body: "Ownership, logging, audit trails and incident handling — who answers for the system when something goes wrong.",
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
  {
    title: "EU AI Act compliance assessment",
    body: "Classify your AI systems against the Act's risk tiers, find the gaps in documentation, oversight and transparency, and leave with an audit-ready remediation plan.",
  },
  {
    title: "Bias & fairness audit",
    body: "Test a model's outputs across the groups it actually serves, document where they diverge, and decide what's acceptable before a regulator or customer asks.",
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
              Readiness assessments, roadmaps, evaluation, red-teaming,
              governance and EU AI Act compliance assessment that de-risk
              enterprise AI before and after you build.
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

function ComplianceAssessment() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
            [ AI Act compliance assessment ]
          </p>
          <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05]">
            Prove your AI systems are safe, compliant and trustworthy.
          </h2>
          <p className="mt-5 font-sans text-body text-muted leading-relaxed">
            The EU AI Act (Regulation 2024/1689) puts concrete obligations
            on anyone who builds or deploys AI in or for the EU — risk
            classification, technical documentation, human oversight,
            transparency and post-market monitoring. We run a
            human-supervised assessment of each system against those
            obligations and against the requirements for trustworthy AI,
            and hand back a gap register, a remediation plan and the
            documentation a regulator or auditor will ask for.
          </p>
        </div>
      </Reveal>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ASSESSMENT_THEMES.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-6">
              <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display font-medium text-lg text-foreground">
                {t.title}
              </h3>
              <p className="mt-2 font-sans text-body-sm text-muted leading-relaxed">
                {t.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <div className="mt-8 rounded-2xl border border-border bg-bg-elevated p-7 max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-subtle mb-2">
            What you get
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {[
              "Risk classification per system under the AI Act",
              "Gap register mapped to specific obligations",
              "Prioritised remediation plan with owners",
              "Technical documentation and conformity evidence",
              "Human-in-the-loop review protocols for high-stakes decisions",
              "Responsible AI workshops for the teams who operate the systems",
            ].map((item) => (
              <li key={item} className="font-sans text-body-sm text-muted leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 font-sans text-[13px] text-subtle leading-relaxed">
            An assessment is an engineering and governance review, not
            legal advice, and it does not by itself constitute
            certification. Where formal conformity assessment or
            certification is required, we scope that explicitly and work
            alongside your legal counsel.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function Process() {
  return (
    <Section padding="large">
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
    <Section padding="large" background="elevated">
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
      <ComplianceAssessment />
      <Process />
      <EngagementModel />
      <FAQ />
      <ClosingCTA />
    </>
  );
}
