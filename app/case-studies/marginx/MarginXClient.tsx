"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Button, ArrowRight } from "@/components/Button";
import { Container } from "@/components/Container";
import { CaseSection, BulletList } from "@/components/CaseSection";
import { Reveal, Stagger, StaggerItem, TextReveal, Magnetic } from "@/lib/animations";

export default function MarginXClient() {
  return (
    <>
      {/* Hero header */}
      <Section padding="hero">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-display text-sm text-muted hover:text-accent transition-colors duration-300 group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="M13 8H3M7 4l-4 4 4 4" />
            </svg>
            Back to Case Studies
          </Link>
        </motion.div>

        <div className="mt-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-[1px] bg-accent" />
            <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
              Case Study — Digital Transformation
            </span>
          </motion.div>

          <TextReveal
            text="MarginX"
            tag="h1"
            className="font-heading text-display-xl text-foreground"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 font-display text-body-lg text-muted"
          >
            Restoring margin visibility and operational control for a multi-location restaurant group
          </motion.p>
        </div>
      </Section>

      {/* Content */}
      <Section background="elevated" padding="large" containerSize="narrow">
        <div className="space-y-16">
          <CaseSection number="01" title="Client Context">
            <p className="font-sans text-body-sm text-muted leading-relaxed">
              A multi-location restaurant group generating meaningful revenue
              across several sites. The operator had built the business on
              instinct and relationships — but as the operation scaled, the
              systems hadn&rsquo;t kept up. Revenue appeared stable, but profitability
              was quietly declining, and the team had no single view of what
              was actually happening across locations.
            </p>
          </CaseSection>

          <CaseSection number="02" title="Business Problem">
            <p className="font-sans text-body-sm text-muted leading-relaxed">
              Margins were eroding, but no one could pinpoint where or why.
              POS data, payment records, and operational reporting lived in
              disconnected systems. Discounts and refunds were tracked
              inconsistently. There was no unified view of net sales, no
              reliable unit economics, and no way to compare performance
              across locations. Decisions were made on intuition — and
              scaling further would only amplify the leakage.
            </p>
          </CaseSection>

          <CaseSection number="03" title="Operational Diagnosis">
            <BulletList
              items={[
                "POS, payments, and accounting systems were fully disconnected — no single source of truth",
                "Discount and refund logic was applied inconsistently, making true revenue invisible",
                "Location-level performance comparison was impossible without manual spreadsheet work",
                "Operational decisions were based on gut feel rather than margin data",
                "The existing setup would compound problems at each new location opened",
              ]}
            />
          </CaseSection>

          <CaseSection number="04" title="What We Changed">
            <BulletList
              items={[
                "Conducted a diagnostic sprint to map every system, data flow, and operational gap across the business",
                "Designed a unified data architecture to consolidate POS, payments, and operational data into one layer",
                "Built a net-sales engine — accurate post-discount, post-refund revenue calculations for the first time",
                "Delivered margin intelligence dashboards with real-time visibility into unit economics and leakage patterns",
                "Created multi-tenant architecture foundations to support location scaling without system fragmentation",
                "Built billing and onboarding infrastructure for operational consistency across sites",
              ]}
            />
          </CaseSection>

          <CaseSection number="05" title="Delivery Model">
            <p className="font-sans text-body-sm text-muted leading-relaxed">
              This was a retained transformation partnership. We started with a
              focused diagnostic sprint, then moved into a structured
              implementation cadence — building incrementally, starting with the
              highest-leverage leakage areas and expanding scope as the
              foundation solidified. We embedded directly with the operator&rsquo;s
              team to ensure adoption and practical usability at every stage.
            </p>
          </CaseSection>

          <CaseSection number="06" title="Outcomes">
            <BulletList
              items={[
                "Margin visibility restored — the operator can now see true unit economics across every location",
                "Operational leakage identified and quantified for the first time",
                "Data-backed decisions on pricing, discounts, and operational spend replaced guesswork",
                "Scalable systems foundation in place to support expansion without compounding fragmentation",
              ]}
            />
          </CaseSection>

          <CaseSection number="07" title="Technology">
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Firebase",
                "Cloud Functions",
                "POS Integrations",
                "Real-Time Dashboards",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-bg-card border border-border font-display text-body-sm text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CaseSection>

          <CaseSection number="08" title="Why It Mattered Commercially">
            <p className="font-sans text-body-sm text-muted leading-relaxed">
              This engagement was not about building software — it was about
              solving a margin problem that was costing real money at every
              location, every month. Without visibility into true net sales and
              unit economics, the operator was making expansion decisions
              blind. The systems we built turned fragmented data into
              actionable intelligence — giving the operator the foundation to
              grow profitably rather than just grow.
            </p>
          </CaseSection>
        </div>
      </Section>

      {/* CTA */}
      <Section padding="large" className="overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade opacity-30" />
        <div className="relative text-center">
          <Reveal>
            <h2 className="font-heading text-display-md text-foreground">
              Facing similar challenges?
            </h2>
            <div className="mt-8">
              <Magnetic strength={0.12}>
                <Button href="/contact" variant="primary" icon={<ArrowRight />}>
                  Request a Consultation
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
