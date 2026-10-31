"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal, BlurReveal } from "@/lib/animations";
import { WORK_ITEMS } from "@/lib/work";
import { contactHref, region } from "@/lib/region";

function Hero() {
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
              Selected work.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.16}>
            <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted leading-relaxed">
              A selection of engagements, anonymized where clients have not
              yet approved public attribution. We don&apos;t publish metrics
              we can&apos;t substantiate.
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
      <div className="grid md:grid-cols-3 gap-4">
        {WORK_ITEMS.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                {item.industry}
              </span>
              <h3 className="mt-3 font-display font-medium text-xl text-foreground leading-snug">
                {item.category}
              </h3>
              <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">
                {item.challenge}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-[0.08em] text-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <p className="mt-10 font-sans text-body-sm text-muted max-w-xl">
          Why are clients anonymized? Until they approve attribution, we
          protect confidentiality. References are available on request,
          subject to client approval.
        </p>
      </Reveal>
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

export default function WorkClient() {
  return (
    <>
      <Hero />
      <WorkGrid />
      <Section padding="large" background="elevated">
        <h2 className="font-display text-display-md leading-tight">Review the engineering behind an engagement.</h2>
        <p className="mt-5 max-w-2xl text-muted">The summaries above describe existing engagements. Public architecture details, client attribution and measured results are not published for these summaries. In a technical discovery call, ask us to establish the relevant delivery scope and what evidence can be shared with permission.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Architecture and integration", body: "Review system boundaries, data flows, identity, retrieval and application integrations relevant to your workflow." },
            { title: "Evaluation and release", body: "Discuss representative tasks, acceptance criteria, failure handling and the evidence needed before production release." },
            { title: "People and ownership", body: "Meet the proposed delivery engineers. Review responsibilities, handover, monitoring and support expectations." },
          ].map(item => <article key={item.title} className="rounded-2xl border border-border bg-bg-card p-7"><h3 className="font-display text-xl">{item.title}</h3><p className="mt-3 text-sm text-muted leading-relaxed">{item.body}</p></article>)}
        </div>
        <Link href="/about" className="mt-8 inline-block text-accent underline">Meet Coreframe’s team →</Link>
      </Section>
      <ClosingCTA />
    </>
  );
}
