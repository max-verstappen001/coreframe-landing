"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Button, ArrowRight } from "@/components/Button";
import { CaseSection, BulletList } from "@/components/CaseSection";
import { Reveal, TextReveal, Magnetic } from "@/lib/animations";

export default function WiralClient() {
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
              Case Study — Implementation Partnership
            </span>
          </motion.div>

          <TextReveal
            text="Implementation Partnership"
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
            From concept to production-grade software — on timeline, with reliable core workflows
          </motion.p>
        </div>
      </Section>

      {/* Content */}
      <Section background="elevated" padding="large" containerSize="narrow">
        <div className="space-y-16">
          <CaseSection number="01" title="Client Context">
            <p className="font-sans text-body-sm text-muted leading-relaxed">
              The client is a product company building software for a specific
              market need. The founding team had strong domain expertise and
              product vision, but needed a technical partner who could take
              ownership of engineering — architecture, build, and deployment
              — and deliver a system that would hold up in production from
              day one.
            </p>
          </CaseSection>

          <CaseSection number="02" title="Business Problem">
            <p className="font-sans text-body-sm text-muted leading-relaxed">
              The team needed to go from concept to shipped, production-grade
              software on a tight timeline. Building an internal engineering
              team from scratch would have been too slow and too expensive.
              They needed a partner who could own the technical execution
              end-to-end, move fast without cutting corners, and deliver a
              system reliable enough to go to market with confidence.
            </p>
          </CaseSection>

          <CaseSection number="03" title="Operational Diagnosis">
            <BulletList
              items={[
                "No existing technical infrastructure — everything needed to be built from architectural foundations",
                "Timeline pressure required focused execution without the luxury of iteration cycles",
                "Core workflows needed to be production-reliable from initial deployment",
                "The product’s credibility in market depended on system stability and performance",
              ]}
            />
          </CaseSection>

          <CaseSection number="04" title="What We Changed">
            <BulletList
              items={[
                "Embedded as the core engineering partner with direct ownership of the entire product build",
                "Defined system architecture and technical foundations collaboratively with the client team",
                "Built the primary user-facing workflows — the features that define the product experience",
                "Set up deployment pipeline and production infrastructure for reliable, repeatable releases",
                "Implemented integrations and automation to reduce manual overhead from launch",
              ]}
            />
          </CaseSection>

          <CaseSection number="05" title="Delivery Model">
            <p className="font-sans text-body-sm text-muted leading-relaxed">
              This was a scoped implementation partnership. We worked in
              structured delivery cycles with clear milestones and deployable
              increments. The client team had full visibility into progress
              at every stage. We prioritized stability, maintainability, and
              production readiness — not feature count — because the
              product’s market entry depended on reliability.
            </p>
          </CaseSection>

          <CaseSection number="06" title="Outcomes">
            <BulletList
              items={[
                "Production-ready system delivered on timeline — enabling the team to go to market on schedule",
                "Reliable core workflows — the primary user-facing features work as expected in production",
                "Reduced time-to-market through focused, senior-led execution with no handoff delays",
                "Solid technical foundation the client team can operate and iterate on independently",
              ]}
            />
          </CaseSection>

          <CaseSection number="07" title="Technology">
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Cloud Infrastructure",
                "Integrations",
                "CI/CD",
                "Production Deployment",
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
              For a product company entering a market, the difference between
              shipping on time and shipping late can define the business.
              The client needed more than engineering hours — they needed a
              partner who would own the outcome. By embedding directly and
              taking full accountability for architecture, build, and
              deployment, we removed the execution risk and gave the team
              the confidence to launch on their terms.
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
              Need a partner who owns the outcome?
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
