"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal, BlurReveal } from "@/lib/animations";
import { WORK_ITEMS } from "@/lib/work";
import { contactHref, region } from "@/lib/region";

function Hero({ hasEngagements }: { hasEngagements: boolean }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-radial-fade">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <BlurReveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">
              Work
            </p>
          </BlurReveal>
          <BlurReveal delay={0.08}>
            <h1 className="font-display font-medium text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
              Engineering for real operational challenges.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.16}>
            <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted leading-relaxed">
              {hasEngagements ? "Selected clients and engagements, followed by illustrative approaches to enterprise engineering challenges." : "These illustrative use cases explain how we would approach common enterprise problems. They are not client case studies or claims of completed deployments."}
            </p>
          </BlurReveal>
        </div>
      </Container>
    </section>
  );
}

function WorkGrid() {
  return (
    <Section padding="large">
      <h2 className="font-display text-display-md mb-10">Illustrative use cases.</h2>
      <div className="space-y-8">
        {WORK_ITEMS.map((item, i) => (
          <article key={item.slug} id={item.slug} className="rounded-2xl border border-border bg-bg-card p-7 md:p-10">
            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-14">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">0{i + 1} / Illustrative use case</p>
                <h3 className="mt-4 font-display text-2xl md:text-3xl leading-tight">{item.category}</h3>
                <p className="mt-4 text-sm text-muted">{item.industry}</p>
                <ul aria-label="Technology categories" className="mt-6 flex flex-wrap gap-2">{item.tags.map(tag => <li key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">{tag}</li>)}</ul>
              </div>
              <dl className="space-y-5">
                {[['Business challenge', item.challenge], ['Operational context', item.context], ['Potential CoreFrame contribution', item.contribution], ['Implementation approach', item.approach], ['Expected business value', item.value]].map(([label, body]) => <div key={label}><dt className="font-display text-lg">{label}</dt><dd className="mt-2 text-sm text-muted leading-relaxed">{body}</dd></div>)}
              </dl>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-10 max-w-2xl text-sm text-muted leading-relaxed">The scenarios in this section are illustrative and separate from the client entries above. Private implementation details and unverified results are excluded. For public code and documentation, explore <Link href="/labs" className="text-accent underline">CoreFrame Labs</Link>.</p>
    </Section>
  );
}

function ClosingCTA() {
  return (
    <Section padding="large" background="elevated">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-card">
        <div className="relative px-8 py-14 md:px-16 md:py-18 text-center">
          <h2 className="font-display font-medium text-[clamp(1.9rem,4vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Working on something similar?
          </h2>
          <div className="mt-8">
            <Link
              href={contactHref("discovery", "/work")}
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:text-on-accent transition-colors duration-300"
            >
              {region.cta}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function WorkClient({ clientEngagements, hasEngagements = false }: { clientEngagements?: ReactNode; hasEngagements?: boolean }) {
  return (
    <>
      <Hero hasEngagements={hasEngagements} />
      {clientEngagements}
      <WorkGrid />
      <Section padding="large" background="elevated">
        <h2 className="font-display text-display-md leading-tight">What to review before an engagement.</h2>
        <p className="mt-5 max-w-2xl text-muted">Use discovery to establish the delivery scope, evaluation criteria and evidence required for your project. We can discuss architecture and responsibilities without disclosing another organization’s confidential information.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Architecture and integration", body: "Review system boundaries, data flows, identity, retrieval and application integrations relevant to your workflow." },
            { title: "Evaluation and release", body: "Discuss representative tasks, acceptance criteria, failure handling and the evidence needed before production release." },
            { title: "People and ownership", body: "Meet the proposed delivery engineers. Review responsibilities, handover, monitoring and support expectations." },
          ].map(item => <article key={item.title} className="rounded-2xl border border-border bg-bg-card p-7"><h3 className="font-display text-xl">{item.title}</h3><p className="mt-3 text-sm text-muted leading-relaxed">{item.body}</p></article>)}
        </div>
        <Link href="/company" className="mt-8 inline-block text-accent underline">Meet CoreFrame’s founder →</Link>
      </Section>
      <ClosingCTA />
    </>
  );
}
