import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected engagements where CoreFrame partnered with operators to deliver measurable digital transformation.",
};

export default function CaseStudiesPage() {
  return (
    <Section>
      <div className="max-w-2xl">
        <h1 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground">
          Case Studies
        </h1>
        <p className="mt-4 font-sans text-base text-muted leading-relaxed">
          Selected engagements where we partnered with operators to solve real
          business problems through digital transformation and applied
          technology.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-8">
        <Card href="/case-studies/marginx" className="flex flex-col">
          <p className="font-sans text-xs uppercase tracking-widest text-muted">
            Digital Transformation
          </p>
          <h2 className="mt-3 font-serif text-xl font-bold text-foreground">
            MarginX
          </h2>
          <p className="mt-1 font-sans text-sm text-accent">
            Restaurant margin improvement
          </p>
          <p className="mt-4 font-sans text-sm text-muted leading-relaxed flex-1">
            Holistic digital transformation for a restaurant group — integrating
            POS systems, building margin intelligence, and reducing operational
            leakage to improve visibility and profitability.
          </p>
          <div className="mt-6 pt-4 border-t border-border">
            <p className="font-sans text-xs text-muted">
              Outcomes: Improved visibility · Reduced operational friction ·
              Enabled data-backed decisions
            </p>
          </div>
          <p className="mt-4 font-sans text-sm font-medium text-accent-dark">
            Read full case study →
          </p>
        </Card>

        <Card href="/case-studies/wiral" className="flex flex-col">
          <p className="font-sans text-xs uppercase tracking-widest text-muted">
            Product Engineering
          </p>
          <h2 className="mt-3 font-serif text-xl font-bold text-foreground">
            Wiral.ai
          </h2>
          <p className="mt-1 font-sans text-sm text-accent">
            Implementation partnership
          </p>
          <p className="mt-4 font-sans text-sm text-muted leading-relaxed flex-1">
            End-to-end product engineering and deployment as Wiral.ai&rsquo;s
            implementation partner — building core workflows, integrations, and
            delivering a stable production system.
          </p>
          <div className="mt-6 pt-4 border-t border-border">
            <p className="font-sans text-xs text-muted">
              Outcomes: Production-ready delivery · Stable core workflows · On-timeline
              deployment
            </p>
          </div>
          <p className="mt-4 font-sans text-sm font-medium text-accent-dark">
            Read full case study →
          </p>
        </Card>
      </div>
    </Section>
  );
}
