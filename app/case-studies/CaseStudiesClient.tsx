"use client";

import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ArrowRight } from "@/components/Button";
import { Reveal, TextReveal } from "@/lib/animations";

const cases = [
  {
    href: "/case-studies/marginx",
    tag: "Digital Transformation",
    title: "MarginX",
    subtitle: "Restaurant margin improvement",
    description:
      "Holistic digital transformation for a restaurant group — integrating POS systems, building margin intelligence, and reducing operational leakage to improve visibility and profitability.",
    outcomes: [
      "Improved visibility",
      "Reduced operational friction",
      "Enabled data-backed decisions",
    ],
  },
  {
    href: "/case-studies/wiral",
    tag: "Product Engineering",
    title: "Wiral.ai",
    subtitle: "Implementation partnership",
    description:
      "End-to-end product engineering and deployment as Wiral.ai\u2019s implementation partner — building core workflows, integrations, and delivering a stable production system.",
    outcomes: [
      "Production-ready delivery",
      "Stable core workflows",
      "On-timeline deployment",
    ],
  },
];

export default function CaseStudiesClient() {
  return (
    <Section padding="hero">
      <Reveal>
        <div className="max-w-2xl mb-16">
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            Portfolio
          </span>
          <TextReveal
            text="Case Studies"
            tag="h1"
            className="mt-4 font-heading text-display-lg text-foreground"
            delay={0.2}
          />
          <p className="mt-6 font-sans text-body-lg text-muted leading-relaxed">
            Selected engagements where we partnered with operators to solve real
            business problems through digital transformation and applied
            technology.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.15}>
            <Card href={c.href} className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-[1px] bg-accent" />
                <span className="font-display text-caption uppercase tracking-[0.15em] text-accent">
                  {c.tag}
                </span>
              </div>

              <h2 className="font-heading text-display-sm text-foreground group-hover:text-accent transition-colors duration-300">
                {c.title}
              </h2>
              <p className="mt-1 font-display text-body-sm text-muted">
                {c.subtitle}
              </p>

              <p className="mt-5 font-sans text-body-sm text-muted leading-relaxed flex-1">
                {c.description}
              </p>

              <div className="mt-8 pt-6 border-t border-border">
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
