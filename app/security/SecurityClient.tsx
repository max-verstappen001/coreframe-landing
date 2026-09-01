"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal, BlurReveal } from "@/lib/animations";

const PRINCIPLES = [
  {
    title: "Encryption",
    body: "Data is encrypted in transit by default. Encryption at rest is configured to match the sensitivity of the data and the deployment environment.",
  },
  {
    title: "Access controls",
    body: "Access to systems and data is role-based and scoped to what a given engagement requires, not granted by default.",
  },
  {
    title: "Environment isolation",
    body: "Client environments and data are kept separated from one another, with isolation enforced at the network and infrastructure level.",
  },
  {
    title: "Secrets management",
    body: "Credentials, API keys and connection strings are stored in dedicated secrets management tooling, not in source code or configuration files.",
  },
  {
    title: "Secure development practices",
    body: "Code review, dependency tracking and staged environments are standard practice across engagements.",
  },
  {
    title: "Vulnerability management",
    body: "Dependencies and infrastructure are monitored for known vulnerabilities, with remediation prioritized by severity and exposure.",
  },
  {
    title: "Logging & monitoring",
    body: "System activity is logged to support troubleshooting, audit and incident investigation, with retention matched to the engagement's requirements.",
  },
  {
    title: "Infrastructure security",
    body: "Infrastructure is configured following standard hardening practices for the deployment model in use — cloud, on-premise, or hybrid.",
  },
  {
    title: "Data retention principles",
    body: "Data is retained only for as long as the engagement requires, with retention and deletion terms defined in the applicable agreement.",
  },
  {
    title: "Customer-controlled deployments",
    body: "In private and on-premise deployments, infrastructure and data remain within environments you control.",
  },
  {
    title: "Incident response",
    body: "We maintain a process for identifying, containing and communicating security incidents, with severity and notification terms defined per engagement.",
  },
  {
    title: "Third-party infrastructure",
    body: "Where engagements rely on cloud, model or infrastructure providers, we select vendors with a track record of maintaining their own security practices — but we don't control, and can't guarantee, their uptime or security posture.",
  },
  {
    title: "Backup & recovery principles",
    body: "Backup and recovery approaches are defined per engagement, matched to the data's importance and the deployment environment.",
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
              Security
            </p>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="font-display font-medium text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
              Security architecture, matched to your requirements.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.16}>
            <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted leading-relaxed">
              Security architecture is determined by the requirements,
              deployment environment and threat model of each engagement.
              This page describes the practices and principles we work
              from — not a one-size guarantee.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.24}>
            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:text-on-accent transition-colors duration-300"
              >
                Discuss Security Requirements
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.title} delay={(i % 6) * 0.04}>
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

function DeploymentControl() {
  const rows = [
    { model: "On-Premise", control: "Highest — infrastructure and data stay in your facility." },
    { model: "Private Cloud", control: "High — dedicated, isolated environment under your control or your provider agreement." },
    { model: "Hybrid", control: "Configurable — sensitive workloads stay in-environment; the rest can use shared infrastructure." },
    { model: "Edge", control: "Local — inference runs on-device, including offline settings." },
  ];
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ Deployment & data control ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl">
          Where your data lives is a design decision, not a default.
        </h2>
      </Reveal>
      <div className="mt-10 rounded-2xl border border-border bg-bg-card overflow-hidden">
        {rows.map((r, i) => (
          <div
            key={r.model}
            className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-5 ${
              i !== rows.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="font-display font-medium text-base text-foreground sm:w-40 shrink-0">
              {r.model}
            </span>
            <span className="font-sans text-body-sm text-muted">{r.control}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function RelatedLinks() {
  const items = [
    { title: "Responsible AI", body: "How we handle AI limitations, oversight and responsibility.", href: "/responsible-ai" },
    { title: "Private AI", body: "On-premise, private cloud, hybrid and air-gapped deployment.", href: "/capabilities" },
    { title: "Privacy Policy", body: "What data we collect and how it's used.", href: "/privacy" },
  ];
  return (
    <Section padding="large">
      <div className="grid sm:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <Link
              href={item.href}
              className="group block h-full rounded-2xl border border-border bg-bg-card p-6 transition-all duration-500 hover:border-border-hover hover:shadow-card"
            >
              <h3 className="font-display font-medium text-lg text-foreground transition-colors duration-300 group-hover:text-accent">
                {item.title}
              </h3>
              <p className="mt-2 font-sans text-body-sm text-muted leading-relaxed">
                {item.body}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Are you SOC 2 or ISO 27001 certified?",
      a: "Not currently. We align our practices to recognized security principles, and we'll work through your specific compliance requirements as part of scoping.",
    },
    {
      q: "Where does our data live?",
      a: "In deployments you control — on-premise, private cloud, hybrid, or edge — data stays within the environment you choose. The specific architecture is defined per engagement.",
    },
    {
      q: "Do you use our data to train models?",
      a: "Not in private deployments. Data use is governed by the applicable engagement agreement, and we design private deployments so your data doesn't leave your environment.",
    },
    {
      q: "Can you work inside our existing security and compliance program?",
      a: "Yes. We adapt to the controls, review processes and audit requirements your organization already has in place.",
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
            Have a specific security or compliance requirement?
          </h2>
          <p className="mt-4 mx-auto max-w-lg font-sans text-body text-muted">
            Tell us about it early — it shapes the architecture, not just
            the paperwork.
          </p>
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

export default function SecurityClient() {
  return (
    <>
      <Hero />
      <Principles />
      <DeploymentControl />
      <RelatedLinks />
      <FAQ />
      <ClosingCTA />
    </>
  );
}
