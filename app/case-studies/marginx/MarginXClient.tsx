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
            Restaurant margin improvement via holistic digital transformation
          </motion.p>
        </div>
      </Section>

      {/* Content */}
      <Section background="elevated" padding="large" containerSize="narrow">
        <div className="space-y-16">
          <CaseSection number="01" title="Context">
            <p className="font-sans text-body-sm text-muted leading-relaxed">
              A multi-location restaurant group was experiencing persistent
              margin erosion. Revenue appeared stable, but profitability was
              declining — and the operator lacked the systems to understand why.
              Data lived in disconnected tools, discounts and refunds were
              tracked inconsistently, and there was no unified view of net sales
              or true unit economics.
            </p>
          </CaseSection>

          <CaseSection number="02" title="Problem">
            <p className="font-sans text-body-sm text-muted leading-relaxed">
              Margin leakage was happening across multiple dimensions — from
              unreconciled POS transactions to inconsistent discount application
              — but the business had no system to surface these issues. Decision
              making was based on gut feel rather than data, and scaling further
              would only compound the problem.
            </p>
          </CaseSection>

          <CaseSection number="03" title="Approach">
            <BulletList
              items={[
                "Conducted a diagnostic sprint to map existing systems, data flows, and operational gaps",
                "Designed a unified data architecture to consolidate POS, payments, and operational data",
                "Built incrementally — starting with the most impactful leakage areas, then expanding scope",
                "Embedded with the operator\u2019s team to ensure adoption and practical usability",
              ]}
            />
          </CaseSection>

          <CaseSection number="04" title="System Design & Deliverables">
            <BulletList
              items={[
                "POS integration foundations — connecting transaction-level data to a centralized system",
                "Net sales logic — accurate post-discount, post-refund revenue calculations",
                "Multi-tenant architecture foundations — designed to support scaling across locations",
                "Billing and onboarding foundations for operational consistency",
                "Margin intelligence dashboards — real-time visibility into unit economics and leakage patterns",
              ]}
            />
          </CaseSection>

          <CaseSection number="05" title="Outcomes">
            <BulletList
              items={[
                "Improved visibility into true unit economics across locations",
                "Reduced operational friction in billing and onboarding",
                "Enabled data-backed decisions on pricing, discounts, and operational spend",
                "Established a scalable foundation for ongoing margin optimization",
              ]}
            />
          </CaseSection>

          <CaseSection number="06" title="Stack">
            <div className="flex flex-wrap gap-2">
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
                  className="px-4 py-2 rounded-full bg-bg-card border border-border font-display text-body-sm text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
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
