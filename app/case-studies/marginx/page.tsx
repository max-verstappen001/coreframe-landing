import { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MarginX — Case Study",
  description:
    "How CoreFrame helped a restaurant group improve margins through holistic digital transformation, POS integration, and margin intelligence dashboards.",
};

export default function MarginXPage() {
  return (
    <>
      <Section>
        <Link
          href="/case-studies"
          className="font-sans text-sm text-muted hover:text-foreground transition-colors duration-200"
        >
          ← Back to Case Studies
        </Link>

        <div className="mt-8 max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-widest text-muted">
            Case Study
          </p>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl tracking-tight text-foreground">
            MarginX
          </h1>
          <p className="mt-2 font-sans text-base text-accent">
            Restaurant margin improvement via holistic digital transformation
          </p>
        </div>
      </Section>

      <Section background="surface">
        <div className="max-w-2xl space-y-14">
          {/* Context */}
          <div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              Context
            </h2>
            <p className="mt-3 font-sans text-sm text-muted leading-relaxed">
              A multi-location restaurant group was experiencing persistent
              margin erosion. Revenue appeared stable, but profitability was
              declining — and the operator lacked the systems to understand why.
              Data lived in disconnected tools, discounts and refunds were
              tracked inconsistently, and there was no unified view of net sales
              or true unit economics.
            </p>
          </div>

          {/* Problem */}
          <div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              Problem
            </h2>
            <p className="mt-3 font-sans text-sm text-muted leading-relaxed">
              Margin leakage was happening across multiple dimensions — from
              unreconciled POS transactions to inconsistent discount application
              — but the business had no system to surface these issues. Decision
              making was based on gut feel rather than data, and scaling further
              would only compound the problem.
            </p>
          </div>

          {/* Approach */}
          <div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              Approach
            </h2>
            <ul className="mt-3 space-y-2 font-sans text-sm text-muted leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Conducted a diagnostic sprint to map existing systems, data
                flows, and operational gaps
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Designed a unified data architecture to consolidate POS,
                payments, and operational data
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Built incrementally — starting with the most impactful leakage
                areas, then expanding scope
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Embedded with the operator&rsquo;s team to ensure adoption and
                practical usability
              </li>
            </ul>
          </div>

          {/* Deliverables */}
          <div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              System Design &amp; Deliverables
            </h2>
            <ul className="mt-3 space-y-2 font-sans text-sm text-muted leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                POS integration foundations — connecting transaction-level data
                to a centralized system
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Net sales logic — accurate post-discount, post-refund revenue
                calculations
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Multi-tenant architecture foundations — designed to support
                scaling across locations
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Billing and onboarding foundations for operational consistency
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Margin intelligence dashboards — real-time visibility into unit
                economics and leakage patterns
              </li>
            </ul>
          </div>

          {/* Outcomes */}
          <div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              Outcomes
            </h2>
            <ul className="mt-3 space-y-2 font-sans text-sm text-muted leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Improved visibility into true unit economics across locations
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Reduced operational friction in billing and onboarding
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Enabled data-backed decisions on pricing, discounts, and
                operational spend
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                Established a scalable foundation for ongoing margin
                optimization
              </li>
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h2 className="font-serif text-xl font-bold text-foreground">
              Stack
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Firebase",
                "Cloud Functions",
                "POS Integrations",
                "Dashboarding",
              ].map((tech) => (
                <span
                  key={tech}
                  className="font-sans text-xs px-3 py-1.5 rounded border border-border text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="font-serif text-2xl tracking-tight text-foreground">
            Facing similar challenges?
          </h2>
          <div className="mt-6">
            <Button href="/contact" variant="primary">
              Request a Consultation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
