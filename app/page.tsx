import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Strategic Digital Transformation, Delivered",
  description:
    "CoreFrame partners with founders and operators to improve margins, modernize operations, and build scalable digital systems—leveraging technology and applied AI where it creates measurable value.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-28 md:pt-36 pb-20 md:pb-24">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-foreground">
            Strategic Digital Transformation, Delivered.
          </h1>
          <p className="mt-6 font-sans text-lg text-muted leading-relaxed">
            CoreFrame partners with founders and operators to improve margins,
            modernize operations, and build scalable digital systems—leveraging
            technology and applied AI where it creates measurable value.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Request a Consultation
            </Button>
            <Button href="/case-studies" variant="secondary">
              View Case Studies
            </Button>
          </div>
        </div>
      </Section>

      {/* Trust strip */}
      <div className="border-y border-border">
        <div className="mx-auto max-w-content px-6 py-6">
          <p className="font-sans text-sm text-muted tracking-wide text-center">
            Boutique by design. Senior-led delivery. Systems that stand up in
            production.
          </p>
        </div>
      </div>

      {/* What we do */}
      <Section id="services" background="surface">
        <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground">
          What We Do
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground">
              Strategic Partnership
            </h3>
            <ul className="mt-4 space-y-2 font-sans text-sm text-muted leading-relaxed">
              <li>Operating model and roadmap design</li>
              <li>Architecture and vendor decisions</li>
              <li>Execution oversight and accountability</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground">
              Digital Transformation
            </h3>
            <ul className="mt-4 space-y-2 font-sans text-sm text-muted leading-relaxed">
              <li>Systems consolidation</li>
              <li>Integrations — POS, payments, CRM, ops</li>
              <li>Dashboards and operational visibility</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground">
              Applied AI Implementation
            </h3>
            <ul className="mt-4 space-y-2 font-sans text-sm text-muted leading-relaxed">
              <li>Automation for cost and time reduction</li>
              <li>Decision-support and forecasting</li>
              <li>Agent workflows — only where ROI is clear</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Case studies preview */}
      <Section>
        <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground">
          Selected Work
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card href="/case-studies/marginx">
            <p className="font-sans text-xs uppercase tracking-widest text-muted">
              Case Study
            </p>
            <h3 className="mt-3 font-serif text-xl font-bold text-foreground">
              MarginX
            </h3>
            <p className="mt-3 font-sans text-sm text-muted leading-relaxed">
              A restaurant group facing margin erosion from operational blind
              spots. We implemented a holistic digital transformation —
              integrating POS data, building net-sales logic, and delivering
              margin intelligence dashboards — to restore visibility and reduce
              leakage.
            </p>
            <p className="mt-4 font-sans text-sm font-medium text-accent-dark">
              Read case study →
            </p>
          </Card>
          <Card href="/case-studies/wiral">
            <p className="font-sans text-xs uppercase tracking-widest text-muted">
              Case Study
            </p>
            <h3 className="mt-3 font-serif text-xl font-bold text-foreground">
              Wiral.ai
            </h3>
            <p className="mt-3 font-sans text-sm text-muted leading-relaxed">
              Engaged as the implementation partner for Wiral.ai. We handled
              product engineering, core workflow development, and deployment —
              delivering a stable, production-ready system on timeline.
            </p>
            <p className="mt-4 font-sans text-sm font-medium text-accent-dark">
              Read case study →
            </p>
          </Card>
        </div>
      </Section>

      {/* Who we work with */}
      <Section background="surface">
        <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground">
          Who We Work With
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground">
              A good fit
            </h3>
            <ul className="mt-4 space-y-3 font-sans text-sm text-muted leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Founder-led, revenue-generating businesses
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Operators with complexity and urgency
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Teams that want a long-term partner, not a vendor
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground">
              Not a fit
            </h3>
            <ul className="mt-4 space-y-3 font-sans text-sm text-muted leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-border shrink-0" />
                One-off website builds
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-border shrink-0" />
                Short-term feature-only contracts
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-border shrink-0" />
                &ldquo;Just add AI&rdquo; projects without a business case
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Engagement model */}
      <Section id="engagement">
        <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground">
          How We Engage
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-lg font-bold text-foreground">
                Long-term strategic retainer
              </h3>
              <p className="mt-2 font-sans text-sm text-muted leading-relaxed">
                Our default model. We embed with your team as an ongoing
                strategic and technical partner, owning systems architecture,
                delivery, and iteration.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-foreground">
                Discovery sprint
              </h3>
              <p className="mt-2 font-sans text-sm text-muted leading-relaxed">
                A focused diagnostic engagement — typically 2–4 weeks — to map
                your operations, identify leverage points, and define a
                transformation roadmap before committing to a longer engagement.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-lg font-bold text-foreground">
                Delivery cadence
              </h3>
              <p className="mt-2 font-sans text-sm text-muted leading-relaxed">
                We work in structured cycles with clear deliverables, regular
                check-ins, and measurable outcomes. No scope ambiguity. No
                status meetings without substance.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-foreground">
                Selective capacity
              </h3>
              <p className="mt-2 font-sans text-sm text-muted leading-relaxed">
                We take on a limited number of engagements at any given time to
                ensure each client receives senior-level attention and
                meaningful progress.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="surface">
        <div className="text-center">
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground">
            Let&rsquo;s assess leverage points in your business.
          </h2>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Request a Consultation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
