"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { Button, ArrowRight } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionQuery } from "@/components/SectionQuery";
import { TechLogosBackground } from "@/components/TechLogosBackground";
import { LogoMarquee } from "@/components/LogoMarquee";
import {
  Reveal,
  Stagger,
  StaggerItem,
  TextReveal,
  Magnetic,
} from "@/lib/animations";
import { useState } from "react";

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

      {/* Floating tech logos */}
      <TechLogosBackground />

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
          <StaggerItem key={service.number} className="h-full">
            <div className="group relative rounded-2xl border border-border bg-bg-card p-8 md:p-10 transition-all duration-500 hover:border-border-hover hover:bg-surface h-full flex flex-col">
              {/* Number */}
              <span className="font-display text-caption text-accent tracking-widest">
                {service.number}
              </span>

              <h3 className="mt-6 font-heading text-display-sm text-foreground">
                {service.title}
              </h3>

              <ul className="mt-6 space-y-3 flex-1">
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

      <SectionQuery
        section="Services"
        prompt="Have a question about our capabilities?"
        placeholder="e.g. What does a strategic retainer include?"
      />
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
          <Reveal key={c.title} delay={i * 0.15} className="h-full">
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

      <SectionQuery
        section="Selected Work"
        prompt="Curious about one of these projects?"
        placeholder="e.g. How did you approach the MarginX transformation?"
      />
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

      <SectionQuery
        section="Fit Assessment"
        prompt="Not sure if you're a good fit? Ask us."
        placeholder="e.g. We're a 20-person ops team — are we the right profile?"
      />
    </Section>
  );
}

/* ────────────────────────── How We Engage ────────────────────────── */
function Engagement() {
  const [activeStep, setActiveStep] = useState(0);

  const models = [
    {
      title: "Long-term strategic retainer",
      description:
        "Our default model. We embed with your team as an ongoing strategic and technical partner, owning systems architecture, delivery, and iteration.",
      iconPath: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
    },
    {
      title: "Discovery sprint",
      description:
        "A focused diagnostic engagement \u2014 typically 2\u20134 weeks \u2014 to map your operations, identify leverage points, and define a transformation roadmap.",
      iconPath: "M21 21l-4.35-4.35",
      iconCircle: true,
    },
    {
      title: "Delivery cadence",
      description:
        "Structured cycles with clear deliverables, regular check-ins, and measurable outcomes. No scope ambiguity. No status meetings without substance.",
      iconPath: "M22 11.08V12a10 10 0 11-5.93-9.14",
      iconPolyline: "22 4 12 14.01 9 11.01",
    },
    {
      title: "Selective capacity",
      description:
        "We take on a limited number of engagements to ensure each client receives senior-level attention and meaningful progress.",
      iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    },
  ];

  const renderIcon = (m: (typeof models)[number]) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent"
    >
      {m.iconCircle && <circle cx="11" cy="11" r="8" />}
      <path d={m.iconPath} />
      {m.iconPolyline && <polyline points={m.iconPolyline} />}
    </svg>
  );

  return (
    <Section id="engagement" padding="large">
      <Reveal>
        <div className="text-center mb-20">
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            Process
          </span>
          <h2 className="mt-4 font-heading text-display-md text-foreground">How We Engage</h2>
        </div>
      </Reveal>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-16">
          {/* Left -- step tabs with vertical line */}
          <Reveal>
            <div className="relative">
              <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-border" />
              <div className="space-y-2">
                {models.map((model, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className={`relative w-full flex items-center gap-4 text-left px-4 py-4 rounded-xl transition-all duration-300 ${
                      activeStep === i
                        ? "bg-bg-card border border-border-hover"
                        : "hover:bg-bg-card/50"
                    }`}
                  >
                    <div
                      className={`relative z-10 w-[30px] h-[30px] rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-500 ${
                        activeStep === i
                          ? "border-accent bg-accent/10"
                          : activeStep > i
                            ? "border-accent/40 bg-accent/5"
                            : "border-border bg-bg"
                      }`}
                    >
                      <span
                        className={`font-display text-[10px] transition-colors duration-300 ${
                          activeStep >= i ? "text-accent" : "text-subtle"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span
                      className={`font-display text-sm transition-colors duration-300 ${
                        activeStep === i ? "text-foreground" : "text-muted"
                      }`}
                    >
                      {model.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right -- active step detail */}
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-border bg-bg-card p-8 md:p-12"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    {renderIcon(models[activeStep])}
                  </div>
                  <div>
                    <span className="font-display text-caption uppercase tracking-[0.15em] text-accent">
                      Step {String(activeStep + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-xl text-foreground">
                      {models[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-body text-muted leading-relaxed">
                  {models[activeStep].description}
                </p>

                {/* Step navigation */}
                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="flex items-center gap-2 font-display text-sm text-muted hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 12L6 8l4-4" />
                    </svg>
                    Previous
                  </button>

                  <div className="flex items-center gap-2">
                    {models.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveStep(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === activeStep ? "bg-accent w-6" : "bg-border hover:bg-border-hover"
                        }`}
                      />
                    ))}
                  </div>

                  {activeStep < models.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="flex items-center gap-2 font-display text-sm text-accent hover:text-accent-dark transition-colors duration-300"
                    >
                      Next
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 4l4 4-4 4" />
                      </svg>
                    </button>
                  ) : (
                    <Button href="/contact" variant="ghost" icon={<ArrowRight />}>
                      Get started
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ────────────────────────── FAQ ────────────────────────── */
const FAQS = [
  {
    q: "What exactly does CoreFrame do?",
    a: "CoreFrame is a boutique digital transformation partner. We embed with founder-led and operator-run businesses to improve margins, modernize operations, and build the digital systems that underpin scalable growth. Our work spans strategic advisory, systems integration, product engineering, and applied AI — always tied to measurable business outcomes.",
  },
  {
    q: "Who is a typical CoreFrame client?",
    a: "Our clients are typically revenue-generating businesses — restaurants, operators, SaaS founders, and service companies — that have outgrown their current systems or are facing operational complexity they can't resolve internally. They want a senior technical partner who will own the problem, not just execute tasks.",
  },
  {
    q: "How does an engagement typically start?",
    a: "Most engagements begin with a discovery sprint — a focused 2–4 week diagnostic where we map your operations, identify leverage points, and produce a clear transformation roadmap. This gives you a concrete plan before committing to a longer retainer. Some clients move directly into a retainer if the scope is well-defined.",
  },
  {
    q: "How long does a typical engagement last?",
    a: "Our default model is a long-term strategic retainer, usually spanning 6–18 months. Transformation work rarely produces lasting results from short engagements — we embed deeply, which requires time. That said, we also take on scoped project work where the deliverable and timeline are clearly defined upfront.",
  },
  {
    q: "How do you approach AI — and when do you say no to it?",
    a: "We use applied AI where there is a clear, quantifiable ROI: task automation that reduces headcount cost, decision-support tools that improve margin or reduce error, and agent workflows that eliminate repetitive manual processes. We actively push back on AI for its own sake. If there is no business case, we will tell you — and recommend a simpler, cheaper solution instead.",
  },
  {
    q: "What makes CoreFrame different from a regular software agency?",
    a: "Agencies execute what you spec. We help you figure out what to build and why — then own the delivery. Every engagement is senior-led, meaning the people doing the strategic thinking are the same people building the systems. We keep our client roster small deliberately so each engagement gets the attention it deserves.",
  },
  {
    q: "Can you work with non-technical founders?",
    a: "Yes — and this is often where we add the most value. We translate business problems into technical solutions, handle vendor selection, architecture decisions, and delivery, and communicate progress in plain language. You do not need to understand the stack to work with us effectively.",
  },
  {
    q: "What does your delivery process look like?",
    a: "We work in structured cycles with clear deliverables, defined check-in cadences, and measurable outcomes at each stage. You will always know what is being built, why, and what it should produce. We avoid status meetings that lack substance and scope creep that doesn't serve the roadmap.",
  },
  {
    q: "How many clients do you work with at one time?",
    a: "We deliberately limit our active client base. Taking too many engagements simultaneously is the fastest way to deliver mediocre work — and that is not how we operate. We maintain selective capacity so every client receives senior-level attention and meaningful forward progress.",
  },
  {
    q: "How do I start a conversation with CoreFrame?",
    a: "Use the contact form on our Contact page or the query boxes throughout this site. Tell us briefly about your business, the problem you're trying to solve, and where you are today. We'll respond within 1–2 business days to assess fit and, if there's alignment, schedule an introductory call.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" padding="large">
      <Reveal>
        <div className="text-center mb-16">
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            FAQ
          </span>
          <h2 className="mt-4 font-heading text-display-md text-foreground">
            Common Questions
          </h2>
          <p className="mt-4 font-sans text-body-sm text-muted max-w-lg mx-auto">
            Answers to the questions we hear most often.
          </p>
        </div>
      </Reveal>

      <div className="max-w-3xl mx-auto divide-y divide-border">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={i} delay={i * 0.04}>
              <div>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-accent bg-accent/10 rotate-45"
                        : "border-border-hover group-hover:border-accent"
                    }`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className={`transition-colors duration-300 ${
                        isOpen ? "text-accent" : "text-muted group-hover:text-accent"
                      }`}
                    >
                      <path d="M6 1v10M1 6h10" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 font-sans text-body-sm text-muted leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
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

/* ────────────────────────── AI Experience ────────────────────────── */
function AIExperience() {
  const highlights = [
    {
      number: "10+",
      label: "AI Projects Delivered",
      description: "From LLM-powered agents to predictive analytics systems across multiple industries.",
    },
    {
      number: "5+",
      label: "Industries Served",
      description: "Restaurant, SaaS, E-commerce, Healthcare, and Professional Services.",
    },
    {
      number: "150K+",
      label: "Lines of Production Code",
      description: "Battle-tested systems running in production, handling real business operations.",
    },
  ];

  return (
    <Section background="elevated" padding="large">
      <Reveal>
        <div className="text-center mb-16">
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            Experience
          </span>
          <h2 className="mt-4 font-heading text-display-md text-foreground">
            Built on Real AI Expertise
          </h2>
          <p className="mt-4 font-sans text-body-sm text-muted max-w-lg mx-auto">
            We don&rsquo;t just talk about AI — we build, ship, and maintain AI systems in production every day.
          </p>
        </div>
      </Reveal>

      <Stagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
        {highlights.map((item) => (
          <StaggerItem key={item.label} className="h-full">
            <div className="text-center rounded-2xl border border-border bg-bg-card p-8 md:p-10 transition-all duration-500 hover:border-border-hover h-full">
              <span className="font-heading text-display-md text-accent">{item.number}</span>
              <h3 className="mt-3 font-display text-body-sm font-medium text-foreground">{item.label}</h3>
              <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-12 text-center">
        <Button href="/about" variant="ghost" icon={<ArrowRight />}>
          Learn more about our team
        </Button>
      </div>
    </Section>
  );
}

/* ────────────────────────── Project Showcase ────────────────────────── */
function ProjectShowcase() {
  const categories = [
    {
      tag: "AI Apps",
      title: "Intelligent Applications",
      description: "Full-stack AI applications that solve real problems — from smart inventory systems to content generation platforms.",
      count: "3 projects",
    },
    {
      tag: "AI Agents",
      title: "Autonomous Agent Systems",
      description: "Custom agents for customer support, document processing, and business automation that work 24/7.",
      count: "3 projects",
    },
    {
      tag: "AI Projects",
      title: "Applied AI Solutions",
      description: "LLM integrations, predictive analytics, and machine learning models deployed in production environments.",
      count: "2 projects",
    },
    {
      tag: "Digital Transformation",
      title: "Systems Modernization",
      description: "End-to-end operational overhauls connecting disparate systems into unified, intelligent platforms.",
      count: "2 projects",
    },
  ];

  return (
    <Section padding="large">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
              Our Work
            </span>
            <h2 className="mt-4 font-heading text-display-md text-foreground">
              Projects by Category
            </h2>
          </div>
          <Button href="/projects" variant="ghost" icon={<ArrowRight />}>
            View all projects
          </Button>
        </div>
      </Reveal>

      <Stagger className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
        {categories.map((cat, i) => (
          <StaggerItem key={i} className="h-full">
            <Card href="/projects" className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-caption uppercase tracking-[0.15em] text-accent">
                  {cat.tag}
                </span>
                <span className="font-display text-[11px] text-subtle">{cat.count}</span>
              </div>
              <h3 className="font-heading text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                {cat.title}
              </h3>
              <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">
                {cat.description}
              </p>
              <div className="mt-6 flex items-center gap-2 font-display text-sm text-accent group-hover:gap-3 transition-all duration-300">
                Explore
                <ArrowRight />
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* ────────────────────────── Investors & Partners ────────────────────────── */
function InvestorsPartners() {
  const partners = [
    {
      name: "OpenAI",
      type: "Technology Partner",
      description: "Powering our AI agent workflows and LLM integrations with GPT-4 and advanced API access.",
    },
    {
      name: "Google Cloud",
      type: "Infrastructure Partner",
      description: "Cloud computing, Firebase, and BigQuery for scalable, production-grade deployments.",
    },
    {
      name: "Vercel",
      type: "Deployment Partner",
      description: "Next.js hosting and edge deployments for lightning-fast, globally distributed applications.",
    },
    {
      name: "Anthropic",
      type: "AI Research Partner",
      description: "Claude AI integration for safety-focused, nuanced AI agent capabilities.",
    },
  ];

  const investors = [
    {
      name: "Self-Funded",
      type: "Bootstrap",
      description: "CoreFrame is proudly bootstrapped — every dollar of revenue is reinvested into building better AI solutions for our clients.",
    },
    {
      name: "Strategic Advisors",
      type: "Advisory Board",
      description: "Guided by experienced operators and technologists who help shape our strategy and connect us with the right opportunities.",
    },
  ];

  return (
    <Section background="elevated" padding="large">
      <Reveal>
        <div className="text-center mb-16">
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            Ecosystem
          </span>
          <h2 className="mt-4 font-heading text-display-md text-foreground">
            Partners & Investors
          </h2>
          <p className="mt-4 font-sans text-body-sm text-muted max-w-lg mx-auto">
            We work with the best technology partners and are backed by strategic
            advisors who share our vision.
          </p>
        </div>
      </Reveal>

      {/* Technology Partners */}
      <Reveal>
        <h3 className="font-display text-caption uppercase tracking-[0.15em] text-subtle mb-8">
          Technology Partners
        </h3>
      </Reveal>
      <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12" staggerDelay={0.1}>
        {partners.map((partner) => (
          <StaggerItem key={partner.name}>
            <div className="rounded-2xl border border-border bg-bg-card p-6 transition-all duration-500 hover:border-border-hover h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="font-display text-sm font-bold text-accent">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display text-sm font-medium text-foreground">{partner.name}</p>
                  <p className="font-display text-[10px] uppercase tracking-wider text-accent">{partner.type}</p>
                </div>
              </div>
              <p className="font-sans text-[13px] text-muted leading-relaxed">{partner.description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Investors */}
      <Reveal delay={0.2}>
        <h3 className="font-display text-caption uppercase tracking-[0.15em] text-subtle mb-8">
          Investors & Backing
        </h3>
      </Reveal>
      <Stagger className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
        {investors.map((inv) => (
          <StaggerItem key={inv.name} className="h-full">
            <div className="rounded-2xl border border-border bg-bg-card p-8 transition-all duration-500 hover:border-border-hover h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-accent/30 font-display text-xs text-accent">
                  ✦
                </span>
                <div>
                  <p className="font-display text-sm font-medium text-foreground">{inv.name}</p>
                  <p className="font-display text-[10px] uppercase tracking-wider text-accent">{inv.type}</p>
                </div>
              </div>
              <p className="font-sans text-body-sm text-muted leading-relaxed">{inv.description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* ────────────────────────── Page Composition ────────────────────────── */
export default function HomeClient() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <LogoMarquee />
      <Services />
      <AIExperience />
      <SelectedWork />
      <Audience />
      <Engagement />
      <FAQ />
      <FinalCTA />
    </>
  );
}
