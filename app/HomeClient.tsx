"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/Section";
import { Button, ArrowRight } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import {
  Reveal,
  Stagger,
  StaggerItem,
  TextReveal,
  Magnetic,
} from "@/lib/animations";

/* ────────────────────────── Hero ────────────────────────── */
function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid mask-fade-b" />
      <div className="absolute inset-0 bg-radial-fade" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px]"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        className="relative z-10 w-full"
      >
        <Container>
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-hover bg-bg-card/50 font-display text-caption uppercase text-muted">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Strategic Digital Partners
              </span>
            </motion.div>

            {/* Headline */}
            <TextReveal
              text="Strategic Digital Transformation, Delivered."
              tag="h1"
              className="font-heading text-display-xl text-foreground"
              delay={0.4}
            />

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl font-sans text-body-lg text-muted leading-relaxed"
            >
              CoreFrame partners with founders and operators to improve margins,
              modernize operations, and build scalable digital
              systems—leveraging technology and applied AI where it creates
              measurable value.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Magnetic strength={0.12}>
                <Button
                  href="/contact"
                  variant="primary"
                  icon={<ArrowRight />}
                >
                  Request a Consultation
                </Button>
              </Magnetic>
              <Button href="/case-studies" variant="secondary">
                View Case Studies
              </Button>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="font-display text-[10px] uppercase tracking-[0.2em] text-subtle">
              Scroll
            </span>
            <motion.div
              className="w-[1px] h-8 bg-gradient-to-b from-accent to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}

/* ────────────────────────── Trust Strip ────────────────────────── */
function TrustStrip() {
  return (
    <div className="relative border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-bg-elevated" />
      <Container className="relative py-8">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {[
              "Boutique by design",
              "Senior-led delivery",
              "Systems that stand up in production",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-display text-sm tracking-wide text-muted">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}

/* ────────────────────────── Services ────────────────────────── */
function Services() {
  const services = [
    {
      number: "01",
      title: "Strategic Partnership",
      items: [
        "Operating model and roadmap design",
        "Architecture and vendor decisions",
        "Execution oversight and accountability",
      ],
    },
    {
      number: "02",
      title: "Digital Transformation",
      items: [
        "Systems consolidation",
        "Integrations — POS, payments, CRM, ops",
        "Dashboards and operational visibility",
      ],
    },
    {
      number: "03",
      title: "Applied AI Implementation",
      items: [
        "Automation for cost and time reduction",
        "Decision-support and forecasting",
        "Agent workflows — only where ROI is clear",
      ],
    },
  ];

  return (
    <Section id="services" background="elevated" padding="large">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
              Capabilities
            </span>
            <h2 className="mt-4 font-heading text-display-md text-foreground">
              What We Do
            </h2>
          </div>
          <p className="max-w-md font-sans text-body-sm text-muted">
            We partner across three core disciplines — each tailored to your
            business context and stage.
          </p>
        </div>
      </Reveal>

      <Stagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
        {services.map((service) => (
          <StaggerItem key={service.number}>
            <div className="group relative rounded-2xl border border-border bg-bg-card p-8 md:p-10 transition-all duration-500 hover:border-border-hover hover:bg-surface">
              {/* Number */}
              <span className="font-display text-caption text-accent tracking-widest">
                {service.number}
              </span>

              <h3 className="mt-6 font-heading text-display-sm text-foreground">
                {service.title}
              </h3>

              <ul className="mt-6 space-y-3">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-2 block h-[5px] w-[5px] rounded-full bg-accent/60 shrink-0" />
                    <span className="font-sans text-body-sm text-muted leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Decorative line */}
              <div className="mt-8 h-[1px] w-12 bg-border group-hover:w-full group-hover:bg-accent/30 transition-all duration-700 ease-out-expo" />
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* ────────────────────────── Selected Work ────────────────────────── */
function SelectedWork() {
  const cases = [
    {
      href: "/case-studies/marginx",
      tag: "Digital Transformation",
      title: "MarginX",
      description:
        "A restaurant group facing margin erosion from operational blind spots. We implemented a holistic digital transformation — integrating POS data, building net-sales logic, and delivering margin intelligence dashboards — to restore visibility and reduce leakage.",
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
      description:
        "Engaged as the implementation partner for Wiral.ai. We handled product engineering, core workflow development, and deployment — delivering a stable, production-ready system on timeline.",
      outcomes: [
        "Production-ready delivery",
        "Stable core workflows",
        "On-timeline deployment",
      ],
    },
  ];

  return (
    <Section padding="large">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
              Portfolio
            </span>
            <h2 className="mt-4 font-heading text-display-md text-foreground">
              Selected Work
            </h2>
          </div>
          <Button href="/case-studies" variant="ghost" icon={<ArrowRight />}>
            All case studies
          </Button>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.15}>
            <Card href={c.href} className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-[1px] bg-accent" />
                <span className="font-display text-caption uppercase tracking-[0.15em] text-accent">
                  {c.tag}
                </span>
              </div>

              <h3 className="font-heading text-display-sm text-foreground group-hover:text-accent transition-colors duration-300">
                {c.title}
              </h3>

              <p className="mt-4 font-sans text-body-sm text-muted leading-relaxed flex-1">
                {c.description}
              </p>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-3">
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
                Read case study
                <ArrowRight />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ────────────────────────── Who We Work With ────────────────────────── */
function Audience() {
  return (
    <Section background="elevated" padding="large">
      <Reveal>
        <div className="text-center mb-16">
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            Fit Assessment
          </span>
          <h2 className="mt-4 font-heading text-display-md text-foreground">
            Who We Work With
          </h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Good fit */}
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-bg-card p-8 md:p-10 h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-accent"
                >
                  <path
                    d="M3 8l3.5 3.5L13 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-foreground">
                A good fit
              </h3>
            </div>
            <ul className="space-y-5">
              {[
                "Founder-led, revenue-generating businesses",
                "Operators with complexity and urgency",
                "Teams that want a long-term partner, not a vendor",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 h-[5px] w-[5px] rounded-full bg-accent shrink-0" />
                  <span className="font-sans text-body-sm text-muted leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Not a fit */}
        <Reveal delay={0.25}>
          <div className="rounded-2xl border border-border bg-bg-card p-8 md:p-10 h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-subtle"
                >
                  <path
                    d="M4 4l8 8M12 4l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-foreground">
                Not a fit
              </h3>
            </div>
            <ul className="space-y-5">
              {[
                "One-off website builds",
                "Short-term feature-only contracts",
                "\u201CJust add AI\u201D projects without a business case",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 h-[5px] w-[5px] rounded-full bg-subtle shrink-0" />
                  <span className="font-sans text-body-sm text-muted leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ────────────────────────── How We Engage ────────────────────────── */
function Engagement() {
  const models = [
    {
      title: "Long-term strategic retainer",
      description:
        "Our default model. We embed with your team as an ongoing strategic and technical partner, owning systems architecture, delivery, and iteration.",
    },
    {
      title: "Discovery sprint",
      description:
        "A focused diagnostic engagement — typically 2–4 weeks — to map your operations, identify leverage points, and define a transformation roadmap before committing to a longer engagement.",
    },
    {
      title: "Delivery cadence",
      description:
        "We work in structured cycles with clear deliverables, regular check-ins, and measurable outcomes. No scope ambiguity. No status meetings without substance.",
    },
    {
      title: "Selective capacity",
      description:
        "We take on a limited number of engagements at any given time to ensure each client receives senior-level attention and meaningful progress.",
    },
  ];

  return (
    <Section id="engagement" padding="large">
      <Reveal>
        <div className="text-center mb-16">
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            Process
          </span>
          <h2 className="mt-4 font-heading text-display-md text-foreground">
            How We Engage
          </h2>
        </div>
      </Reveal>

      <Stagger
        className="grid md:grid-cols-2 gap-6"
        staggerDelay={0.12}
      >
        {models.map((model, i) => (
          <StaggerItem key={i}>
            <div className="group relative rounded-2xl border border-border bg-bg-card p-8 md:p-10 transition-all duration-500 hover:border-border-hover">
              {/* Step number */}
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-accent/30 font-display text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 h-[1px] bg-border group-hover:bg-accent/20 transition-colors duration-500" />
              </div>

              <h3 className="font-heading text-xl text-foreground">
                {model.title}
              </h3>
              <p className="mt-4 font-sans text-body-sm text-muted leading-relaxed">
                {model.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* ────────────────────────── Final CTA ────────────────────────── */
function FinalCTA() {
  return (
    <Section background="elevated" padding="large" className="overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-radial-fade opacity-50" />

      <div className="relative text-center">
        <Reveal>
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            Ready?
          </span>
          <h2 className="mt-6 font-heading text-display-lg text-foreground max-w-3xl mx-auto">
            Let&rsquo;s assess leverage points in your business.
          </h2>
          <p className="mt-6 font-sans text-body text-muted max-w-lg mx-auto">
            We take on a limited number of engagements. Start with a
            conversation.
          </p>
          <div className="mt-10">
            <Magnetic strength={0.12}>
              <Button
                href="/contact"
                variant="primary"
                icon={<ArrowRight />}
              >
                Request a Consultation
              </Button>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ────────────────────────── Page Composition ────────────────────────── */
export default function HomeClient() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <SelectedWork />
      <Audience />
      <Engagement />
      <FinalCTA />
    </>
  );
}
