"use client";

import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ArrowRight } from "@/components/Button";
import { Reveal, TextReveal } from "@/lib/animations";

const cases = [
  {

    href: "/case-studies/wiral",
    tag: "Implementation Partnership",
    title: "Implementation Partnership",
    subtitle: "Product engineering & delivery",
    industry: "SaaS / Technology",
    engagement: "Implementation partnership",
    problem: "Needed to go from concept to production-grade software with reliable core workflows — on a tight timeline.",
    systems: "System Architecture \u2022 Core Workflows \u2022 Deployment \u2022 Production Infrastructure",
    outcomes: [
      "Production-ready on timeline",
      "Reliable core workflows",
      "Reduced time-to-market",
    ],
  },
];

export default function CaseStudiesClient() {
  return (
    <Section padding="hero">
      <Reveal>
        <div className="max-w-2xl mb-16">
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            Engagements
          </span>
          <TextReveal
            text="Case Studies"
            tag="h1"
            className="mt-4 font-heading text-display-lg text-foreground"
            delay={0.2}
          />
          <p className="mt-6 font-sans text-body-lg text-muted leading-relaxed">
            Selected engagements where we partnered with founders and operators
            to solve real business problems through strategic transformation and
            applied technology.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.15}>
            <Card href={c.href} className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-[1px] bg-accent" />
                <span className="font-display text-caption uppercase tracking-[0.15em] text-accent">
                  {c.tag}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-[11px] text-subtle">{c.industry}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="font-display text-[11px] text-subtle">{c.engagement}</span>
              </div>

              <h2 className="font-heading text-display-sm text-foreground group-hover:text-accent transition-colors duration-300">
                {c.title}
              </h2>
              <p className="mt-1 font-display text-body-sm text-muted">
                {c.subtitle}
              </p>

              <p className="mt-5 font-sans text-body-sm text-muted leading-relaxed">
                {c.problem}
              </p>

              <p className="mt-4 font-display text-[11px] text-subtle">
                {c.systems}
              </p>

              <div className="mt-8 pt-6 border-t border-border flex-1 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2">
                  {c.outcomes.map((outcome) => (
                    <span
                      key={outcome}
                      className="px-3 py-1 rounded-full bg-bg-elevated border border-border font-display text-[11px] text-muted"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 font-display text-sm text-accent group-hover:gap-3 transition-all duration-300">
                Read full case study
                <ArrowRight />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
