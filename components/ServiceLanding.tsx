"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { BlurReveal, Reveal } from "@/lib/animations";

export interface ServiceLandingContent {
  eyebrow: string;
  title: string;
  intro: string;
  problemTitle: string;
  problem: string;
  useCases: { title: string; body: string }[];
  deliverables: { title: string; body: string }[];
  deployment: { title: string; body: string }[];
  operations: string;
  requirements: string[];
  process: { title: string; body: string }[];
  related: { label: string; href: string }[];
}

export function ServiceLanding({ content }: { content: ServiceLandingContent }) {
  return (
    <>
      <section className="relative overflow-hidden bg-radial-fade pb-16 pt-32 md:pb-20 md:pt-40">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-50" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <BlurReveal>
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-accent">{content.eyebrow}</p>
            </BlurReveal>
            <BlurReveal delay={0.08}>
              <h1 className="font-display text-[clamp(2.1rem,5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.02em] text-foreground">{content.title}</h1>
            </BlurReveal>
            <BlurReveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-2xl font-sans text-body-lg leading-relaxed text-muted">{content.intro}</p>
            </BlurReveal>
            <BlurReveal delay={0.24}>
              <Link href="/contact" className="mt-9 inline-flex h-12 items-center rounded-lg bg-foreground px-7 font-mono text-[13px] uppercase tracking-[0.1em] text-bg transition-colors hover:bg-accent hover:text-on-accent">Discuss a Project</Link>
            </BlurReveal>
          </div>
        </Container>
      </section>

      <Section padding="large">
        <Reveal><div className="max-w-3xl"><p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-accent">[ The buyer problem ]</p><h2 className="font-display text-display-md font-medium leading-[1.05] text-foreground">{content.problemTitle}</h2><p className="mt-5 font-sans text-body leading-relaxed text-muted">{content.problem}</p></div></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {content.useCases.map((item, i) => <Reveal key={item.title} delay={i * 0.05}><InfoCard {...item} /></Reveal>)}
        </div>
      </Section>

      <Section padding="large" background="elevated">
        <Reveal><SectionHeading eyebrow="Scope & deliverables" title="What an engagement can include." /></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {content.deliverables.map((item, i) => <Reveal key={item.title} delay={i * 0.05}><InfoCard {...item} /></Reveal>)}
        </div>
      </Section>

      <Section padding="large">
        <Reveal><SectionHeading eyebrow="Deployment & integration" title="Designed around the environment you operate." /></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {content.deployment.map((item, i) => <Reveal key={item.title} delay={i * 0.05}><InfoCard {...item} /></Reveal>)}
        </div>
        <div className="mt-10 grid gap-6 rounded-2xl border border-border bg-bg-card p-7 md:grid-cols-2 md:p-9">
          <div><h3 className="font-display text-xl font-medium text-foreground">Security and operations</h3><p className="mt-3 font-sans text-body-sm leading-relaxed text-muted">{content.operations}</p></div>
          <div><h3 className="font-display text-xl font-medium text-foreground">What we need to integrate</h3><ul className="mt-3 space-y-2">{content.requirements.map((item) => <li key={item} className="font-sans text-body-sm leading-relaxed text-muted">• {item}</li>)}</ul></div>
        </div>
      </Section>

      <Section padding="large" background="elevated">
        <Reveal><SectionHeading eyebrow="Implementation process" title="From constraints to an operable system." /></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {content.process.map((item, i) => <Reveal key={item.title} delay={i * 0.05}><div className="h-full rounded-2xl border border-border bg-bg-card p-6"><span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span><h3 className="mt-3 font-display text-lg font-medium text-foreground">{item.title}</h3><p className="mt-2 font-sans text-body-sm leading-relaxed text-muted">{item.body}</p></div></Reveal>)}
        </div>
      </Section>

      <Section padding="large">
        <div className="rounded-3xl border border-border bg-bg-elevated px-8 py-14 text-center md:px-16">
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] font-medium leading-[1.05] text-foreground">Scope the right deployment.</h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-body text-muted">Tell us about the workload, data, environment and operational constraints. We’ll propose a practical first step.</p>
          <Link href="/contact" className="mt-8 inline-flex h-12 items-center rounded-lg bg-foreground px-7 font-mono text-[13px] uppercase tracking-[0.1em] text-bg transition-colors hover:bg-accent hover:text-on-accent">Start a Project Enquiry</Link>
          <nav aria-label="Related capabilities" className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">{content.related.map((item) => <Link key={item.href} href={item.href} className="font-mono text-xs uppercase tracking-[0.1em] text-accent hover:text-foreground">{item.label}</Link>)}</nav>
        </div>
      </Section>
    </>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <><p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-accent">[ {eyebrow} ]</p><h2 className="max-w-2xl font-display text-display-md font-medium leading-[1.05] text-foreground">{title}</h2></>;
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return <article className="h-full rounded-2xl border border-border bg-bg-card p-7"><h3 className="font-display text-xl font-medium leading-snug text-foreground">{title}</h3><p className="mt-3 font-sans text-body-sm leading-relaxed text-muted">{body}</p></article>;
}
