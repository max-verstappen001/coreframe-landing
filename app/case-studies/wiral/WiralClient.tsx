"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Button, ArrowRight } from "@/components/Button";
import { Reveal, TextReveal, Magnetic } from "@/lib/animations";

/* ────── Reusable case study section block ────── */
function CaseSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="group">
        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-accent/30 font-display text-xs text-accent">
            {number}
          </span>
          <h2 className="font-heading text-display-sm text-foreground">
            {title}
          </h2>
          <div className="flex-1 h-[1px] bg-border" />
        </div>
        {children}
      </div>
    </Reveal>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4">
          <span className="mt-2 h-[5px] w-[5px] rounded-full bg-accent/60 shrink-0" />
          <span className="font-sans text-body-sm text-muted leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

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
              Case Study — Product Engineering
            </span>
          </motion.div>

          <TextReveal
            text="Wiral.ai"
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
            Implementation partnership — product engineering and deployment
          </motion.p>
        </div>
      </Section>

      {/* Content */}
      <Section background="elevated" padding="large" containerSize="narrow">
        <div className="space-y-16">
          <CaseSection number="01" title="Context">
            <p className="font-sans text-body-sm text-muted leading-relaxed">
              Wiral.ai needed an implementation partner who could take ownership
              of product engineering and deliver a production-ready system. The
              engagement required moving from concept to shipped product with
              reliability, speed, and technical rigor.
            </p>
          </CaseSection>

          <CaseSection number="02" title="Problem">
            <p className="font-sans text-body-sm text-muted leading-relaxed">
              The team needed to go from early-stage architecture to a deployed,
              stable product — without the overhead of building a full
              engineering team internally. They required a partner who could own
              the technical execution end-to-end and deliver production-grade
              quality.
            </p>
          </CaseSection>

          <CaseSection number="03" title="Approach">
            <BulletList
              items={[
                "Embedded as the core engineering partner with direct ownership of the product build",
                "Defined system architecture and technical foundations collaboratively with the Wiral.ai team",
                "Worked in structured delivery cycles with clear milestones and deployable increments",
                "Prioritized stability, maintainability, and production readiness at every stage",
              ]}
            />
          </CaseSection>

          <CaseSection number="04" title="System Design & Deliverables">
            <BulletList
              items={[
                "Core product engineering — end-to-end feature development and system architecture",
                "Primary workflow implementation — the key user-facing flows that define the product",
                "Automation and integration work where relevant to reduce manual overhead",
                "Deployment pipeline and production infrastructure setup",
              ]}
            />
          </CaseSection>

          <CaseSection number="05" title="Outcomes">
            <BulletList
              items={[
                "Delivered a stable, production-ready product on timeline",
                "Established reliable core workflows that support the product\u2019s primary use cases",
                "Enabled the Wiral.ai team to operate and iterate on a solid technical foundation",
                "Reduced time-to-market through focused, senior-led execution",
              ]}
            />
          </CaseSection>

          <CaseSection number="06" title="Stack">
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Cloud Infrastructure",
                "Integrations",
                "CI/CD",
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
              Need an implementation partner?
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
