"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal, BlurReveal } from "@/lib/animations";
import { CAPABILITIES, capabilityHref } from "@/lib/capabilities";
import { DELIVERY_PROCESS } from "@/lib/delivery";
import { FAQ_ITEMS } from "./faq";

const DEPLOYMENT_MODELS = [
  {
    title: "On-Premise",
    body: "Inference and data stay entirely within your own data center or facility.",
  },
  {
    title: "Private Cloud",
    body: "A dedicated, isolated cloud environment under your control or your provider agreement.",
  },
  {
    title: "Hybrid",
    body: "Sensitive workloads stay in-environment; less sensitive workloads use public infrastructure.",
  },
  {
    title: "Edge",
    body: "Inference runs on-device or on-site, including offline and low-connectivity settings.",
  },
];

const ENGAGEMENT_STEPS = DELIVERY_PROCESS.map(s => ({ step: s.title, body: s.body }));

function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-radial-fade">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <BlurReveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">
              Capabilities
            </p>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="font-display font-medium text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
              Capabilities across the AI engineering lifecycle.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.16}>
            <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted leading-relaxed">
              From strategy and architecture through private deployment and
              long-term operation — CoreFrame covers the full path from AI
              opportunity to production system. Engage us for a single
              capability or an end-to-end program.
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
              <a
                href="#capabilities-list"
                className="inline-flex items-center rounded-lg border border-border-hover px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Explore technical capabilities
              </a>
            </div>
          </BlurReveal>
        </div>
      </Container>
    </section>
  );
}

function CapabilitiesList() {
  return (
    <Section id="capabilities-list" padding="large">
      <p className="mb-8 text-muted">Explore implementation engagements in our <Link href="/services" className="text-accent underline">enterprise AI services</Link>, or review the technical capabilities below.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CAPABILITIES.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.05}>
            <Link
              href={capabilityHref(c)}
              className="group block h-full rounded-2xl border border-border bg-bg-card p-7 transition-all duration-500 hover:border-border-hover hover:shadow-card"
            >
              <h3 className="font-display font-medium text-xl text-foreground leading-snug transition-colors duration-300 group-hover:text-accent">
                {c.title}
              </h3>
              <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">
                {c.oneLiner}
              </p>
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

function HowWeEngage() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
          [ How we engage ]
        </p>
        <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05] max-w-xl">
          Discover. Design. Deploy. Operate.
        </h2>
      </Reveal>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ENGAGEMENT_STEPS.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-6">
              <span className="font-mono text-xs text-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>
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
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DEPLOYMENT_MODELS.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-6">
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

function FAQ() {
  const items = FAQ_ITEMS;
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
            Not sure which capability fits?
          </h2>
          <p className="mt-4 mx-auto max-w-lg font-sans text-body text-muted">
            Start with a conversation. We&apos;ll point you at the right
            starting point, even if that&apos;s a smaller engagement than
            you expected.
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

export default function CapabilitiesClient() {
  return (
    <>
      <Hero />
      <CapabilitiesList />
      <HowWeEngage />
      <DeploymentModels />
      <FAQ />
      <ClosingCTA />
    </>
  );
}
