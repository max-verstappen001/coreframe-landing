"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal, BlurReveal } from "@/lib/animations";

const PROVIDES = [
  {
    title: "Agent systems",
    items: ["AI agents", "Multi-agent systems", "Agentic workflows", "Tool-using agents", "MCP integrations"],
  },
  {
    title: "Human oversight",
    items: ["Human-in-the-loop workflows", "Approval workflows", "Enterprise workflow agents"],
  },
  {
    title: "Automation",
    items: ["Business process automation", "Automated research", "Automated reporting", "Workflow orchestration"],
  },
  {
    title: "Operations",
    items: ["Internal operations agents", "AI customer support", "Systems integration"],
  },
];

const USE_CASES = [
  {
    title: "Approval-routing agent",
    body: "Reads a request, gathers context across your systems, drafts a recommendation, and routes it to the right person to approve.",
  },
  {
    title: "Automated reporting",
    body: "Pulls from multiple systems on a schedule and produces a report a human reviews before it goes out — not one that emails itself.",
  },
  {
    title: "Operations agent",
    body: "Handles a defined operational task end to end, escalating to a human whenever it hits something outside its authority.",
  },
  {
    title: "Internal tool-using agent",
    body: "Connects to your existing systems via API or MCP to answer questions and take limited actions, without a separate integration project per tool.",
  },
];

const OVERSIGHT_LEVELS = [
  {
    level: "Human-in-the-loop",
    body: "The agent proposes; a human approves before anything happens. Default for consequential or hard-to-reverse actions.",
  },
  {
    level: "Human-on-the-loop",
    body: "The agent acts within pre-approved limits; a human monitors and can intervene. Used once a workflow has a track record.",
  },
  {
    level: "Human-out-of-the-loop",
    body: "Reserved for low-stakes, easily reversible, well-evaluated tasks — and always with logging that lets a human review after the fact.",
  },
];

const ARCHITECTURE_STEPS = [
  { step: "Planner", body: "Breaks the request into steps and decides which tools to use." },
  { step: "Tools & integrations", body: "APIs, databases and MCP servers the agent is allowed to call." },
  { step: "Memory & state", body: "Tracks context across a multi-step task." },
  { step: "Guardrails", body: "Constrains what the agent can do — scope, rate limits, allowed actions." },
  { step: "Human checkpoints", body: "Approval gates on anything consequential, sized to the oversight level." },
  { step: "Observability", body: "Every decision and action is logged for debugging, audit and evaluation." },
];

function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-radial-fade">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <BlurReveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">
              Capabilities / AI Agents &amp; Autonomous Workflows
            </p>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="font-display font-medium text-[clamp(2.1rem,5vw,3.75rem)] leading-[1.08] tracking-[-0.02em] text-foreground">
              Agents that do the work, not just chat about it.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.16}>
            <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted leading-relaxed">
              Tool-using AI agents and multi-agent systems that execute
              real operational workflows — with human oversight and
              approval where it matters.
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
            Rules-based automation breaks on judgment.
          </h2>
          <p className="mt-5 font-sans text-body text-muted leading-relaxed">
            Traditional automation handles the predictable path well and
            falls over the moment a request doesn&apos;t fit the template
            — unstructured input, a missing field, a judgment call. Agents
            can handle that variability, but only if they&apos;re built
            with the same discipline you&apos;d expect from any system
            that touches real operations.
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

function HITL() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Human-in-the-loop systems ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-2xl">
          Oversight isn&apos;t a checkbox — it's a level you choose per
          task.
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-body text-muted leading-relaxed">
          Not every action needs the same amount of human review. We size
          oversight to the consequence and reversibility of the action,
          and make the level explicit rather than implicit in how the
          agent happens to behave.
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
        <div className="mt-6 rounded-2xl border border-border bg-bg-card p-7 max-w-3xl">
          <p className="font-sans text-body-sm text-muted leading-relaxed">
            In practice: agents default to human-in-the-loop for anything
            that touches money, customer-facing communication, or data
            outside their original scope. Escalation paths and every
            approval decision are logged, so the record of who approved
            what is auditable after the fact — not reconstructed from
            memory.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function Architecture() {
  return (
    <Section padding="large">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Architecture ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl">
          Planner, tools, guardrails, checkpoints.
        </h2>
      </Reveal>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ARCHITECTURE_STEPS.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.05}>
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
            We start by mapping one real workflow end to end — not a
            generic agent platform. Once the guardrails and oversight
            level are right for that workflow, we shadow-run it against
            live data before enabling it, then expand scope deliberately
            rather than all at once.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Do agents act without a human?",
      a: "Only where you explicitly allow it. Consequential or hard-to-reverse actions default to human-in-the-loop approval — see the oversight levels above.",
    },
    {
      q: "How do you stop it from doing something wrong?",
      a: "Least-privilege tool access, explicit guardrails on scope, approval gates sized to consequence, and full logging of every decision and action.",
    },
    {
      q: "Can it use our existing tools?",
      a: "Yes — via direct API integration or MCP, depending on what you already have and what's exposed.",
    },
  ];
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
            Have a workflow that keeps breaking automation?
          </h2>
          <p className="mt-4 mx-auto max-w-lg font-sans text-body text-muted">
            That&apos;s usually the right place to start.
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

export default function AIAgentsClient() {
  return (
    <>
      <Hero />
      <Problem />
      <Provides />
      <UseCases />
      <HITL />
      <Architecture />
      <EngagementModel />
      <FAQ />
      <ClosingCTA />
    </>
  );
}
