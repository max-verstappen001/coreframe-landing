"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal, BlurReveal } from "@/lib/animations";
import { FAQ_ITEMS } from "./faq";

const PRINCIPLES = [
  {
    title: "Human oversight",
    body: "Consequential decisions and actions keep a human in the loop, by default — especially where an agent can touch data, money, or customers.",
  },
  {
    title: "Evidence & citations",
    body: "Where an AI system makes a claim from source documents, we design it to show its sources, not just an answer.",
  },
  {
    title: "Evaluation before trust",
    body: "Systems are tested against representative cases before they're relied on for real decisions — not assumed to work because a demo went well.",
  },
  {
    title: "Least privilege for agents",
    body: "Agents get the narrowest set of tools and data access the task requires, with approval gates on anything consequential.",
  },
  {
    title: "Transparency about limits",
    body: "We tell customers what a system is and isn't validated for, rather than letting confidence in the demo substitute for evaluation.",
  },
];

const LIMITATIONS = [
  "Generate inaccurate or outdated information",
  "Omit information that matters to the decision at hand",
  "Misinterpret documents, especially unusual formats or scanned content",
  "Produce probabilistic outputs that vary between runs",
  "Produce hallucinations — confident-sounding output that isn't grounded in fact",
  "Require human review before being used for consequential decisions",
];

const GOVERNANCE_AREAS = [
  {
    title: "Model risk management",
    body: "Before a model or system goes into production, we document what it's for, how it was evaluated, and what its known failure modes are.",
  },
  {
    title: "Data governance",
    body: "What data an AI system can access, how it's sourced, and who's authorized to provide it are defined explicitly — not left implicit in a prompt.",
  },
  {
    title: "AI risk assessment",
    body: "We assess engagements for where AI error would matter most — safety, compliance, financial, reputational — and weight oversight accordingly.",
  },
  {
    title: "Deployment governance",
    body: "Moving a system from pilot to production is a defined step, not an accident of usage growing. Approval gates apply to expanding an agent's scope or autonomy.",
  },
  {
    title: "Monitoring & audit trails",
    body: "Production AI systems log their inputs, outputs and actions to a level that supports audit, debugging and incident review.",
  },
  {
    title: "Incident response",
    body: "If an AI system produces a materially wrong or harmful output in production, we treat it as an incident — with a defined process, not an ad hoc scramble.",
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
              Responsible AI
            </p>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="font-display font-medium text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
              Responsible AI, stated honestly.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.16}>
            <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted leading-relaxed">
              AI systems are probabilistic. They can be wrong, incomplete or
              misleading. We design for human oversight, evidence-backed
              outputs and clear allocation of responsibility.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.24}>
            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:text-on-accent transition-colors duration-300"
              >
                Discuss Governance Requirements
              </Link>
            </div>
          </BlurReveal>
        </div>
      </Container>
    </section>
  );
}

function Principles() {
  return (
    <Section padding="large">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Principles ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl">
          What we design around.
        </h2>
      </Reveal>
      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-6">
              <h3 className="font-display font-medium text-lg text-foreground">
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

const OVERSIGHT_LEVELS = [
  {
    level: "Human-in-the-loop",
    body: "A person approves before the action happens. Default for anything consequential or hard to reverse.",
  },
  {
    level: "Human-on-the-loop",
    body: "The system acts within pre-approved limits while a person monitors and can intervene — used once a workflow has an evaluated track record.",
  },
  {
    level: "Human-out-of-the-loop",
    body: "Reserved for low-stakes, easily reversible, well-evaluated tasks — always with logging that supports after-the-fact review.",
  },
];

function HumanInTheLoop() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Human-in-the-loop systems ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-2xl">
          Oversight is a level we choose per task, not a blanket policy.
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-body text-muted leading-relaxed">
          "Human in the loop" means different things depending on the
          stakes. We size the level of human involvement to the
          consequence and reversibility of what the system is doing, and
          make that level explicit in the design rather than leaving it
          to how the system happens to behave.
        </p>
      </Reveal>
      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        {OVERSIGHT_LEVELS.map((o, i) => (
          <Reveal key={o.level} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-6">
              <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display font-medium text-lg text-foreground">
                {o.level}
              </h3>
              <p className="mt-2 font-sans text-body-sm text-muted leading-relaxed">
                {o.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <p className="mt-6 max-w-2xl font-sans text-body-sm text-muted leading-relaxed">
          By default, systems that touch money, customer-facing
          communication, or data outside their original scope run
          human-in-the-loop. Escalation paths and approval decisions are
          logged, so the record of who approved what is auditable — not
          reconstructed from memory after something goes wrong. See{" "}
          <Link href="/capabilities/ai-agents" className="text-accent hover:text-foreground transition-colors">
            AI Agents &amp; Autonomous Workflows
          </Link>{" "}
          for how this is implemented architecturally.
        </p>
      </Reveal>
    </Section>
  );
}

function Limitations() {
  return (
    <Section padding="large">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ AI output limitations ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl">
          What AI systems can get wrong.
        </h2>
        <p className="mt-4 max-w-xl font-sans text-body-sm text-muted leading-relaxed">
          Any AI system we build or deploy — ours or a third party's — can:
        </p>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-3xl">
        {LIMITATIONS.map((l, i) => (
          <Reveal key={l} delay={i * 0.04}>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-bg-card px-5 py-4">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <span className="font-sans text-body-sm text-muted leading-relaxed">{l}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.3}>
        <p className="mt-8 max-w-2xl font-sans text-body-sm text-foreground leading-relaxed">
          Users and customers remain responsible for verifying outputs
          before relying on them for critical decisions.
        </p>
      </Reveal>
    </Section>
  );
}

function Governance() {
  return (
    <Section padding="large">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Governance, policy & standards ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-2xl">
          Governance is a set of decisions we can show you, not a poster on
          the wall.
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-body text-muted leading-relaxed">
          For engagements that need a formal AI governance program, we
          structure one around the areas below. The specific policies,
          approval thresholds and documentation requirements are scoped to
          your risk profile and regulatory environment — a customer
          support assistant and a system that touches financial approvals
          don&apos;t need the same level of process.
        </p>
      </Reveal>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {GOVERNANCE_AREAS.map((g, i) => (
          <Reveal key={g.title} delay={(i % 6) * 0.04}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-6">
              <h3 className="font-display font-medium text-lg text-foreground">
                {g.title}
              </h3>
              <p className="mt-2 font-sans text-body-sm text-muted leading-relaxed">
                {g.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <div className="mt-10 rounded-2xl border border-border bg-bg-elevated p-7 max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-subtle mb-2">
            On standards
          </p>
          <p className="font-sans text-body-sm text-muted leading-relaxed">
            Our governance practices are informed by established
            approaches to AI risk management, including risk-based
            frameworks such as the NIST AI Risk Management Framework and
            management-system standards such as ISO/IEC 42001. Coreframe
            is not currently certified against ISO/IEC 42001 or any other
            AI management standard — where we reference a framework, we
            mean our practices draw on it, not that we hold formal
            certification. For engagements that require certified
            compliance, we scope that explicitly as part of the
            engagement.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function ResponsibilitySplit() {
  const coreframe = [
    "Designing systems for human oversight where consequential decisions are involved",
    "Evaluating systems before they're relied on for production use",
    "Being transparent about a system's known limitations",
    "Logging and monitoring to support audit and incident review",
  ];
  const customer = [
    "Decisions made using AI outputs",
    "Human review where required by policy or regulation",
    "Industry-specific regulatory compliance",
    "Accuracy of customer-provided data",
    "Authorization and rights to provide data used by the system",
    "End-user usage and access credentials they provide",
  ];
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Responsibility ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl">
          Who's responsible for what.
        </h2>
      </Reveal>
      <div className="mt-10 grid md:grid-cols-2 gap-4">
        <Reveal delay={0.05}>
          <div className="h-full rounded-2xl border border-border bg-bg-card p-7">
            <h3 className="font-display font-medium text-lg text-foreground mb-4">
              Coreframe
            </h3>
            <ul className="space-y-3">
              {coreframe.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span className="font-sans text-body-sm text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-border bg-bg-card p-7">
            <h3 className="font-display font-medium text-lg text-foreground mb-4">
              Customer
            </h3>
            <ul className="space-y-3">
              {customer.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-subtle shrink-0" />
                  <span className="font-sans text-body-sm text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
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
        <div className="relative px-8 py-14 md:px-16 md:py-18 text-center">
          <h2 className="font-display font-medium text-[clamp(1.9rem,4vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Need a governance framework, not just a system?
          </h2>
          <p className="mt-4 mx-auto max-w-lg font-sans text-body text-muted">
            We scope AI governance work independently of implementation —
            useful if you need the policy before you need the build.
          </p>
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
        </div>
      </div>
    </Section>
  );
}

export default function ResponsibleAIClient() {
  return (
    <>
      <Hero />
      <Principles />
      <HumanInTheLoop />
      <Limitations />
      <Governance />
      <ResponsibilitySplit />
      <FAQ />
      <ClosingCTA />
    </>
  );
}
