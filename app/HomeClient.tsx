"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { Button, ArrowRight } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionQuery } from "@/components/SectionQuery";
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
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid mask-fade-b" />
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px]" />

      <div
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
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Business Intelligence. Technical Execution.
              </span>
            </motion.div>

            <TextReveal
              text="Technology That Understands Your Business."
              tag="h1"
              className="font-heading text-display-lg text-foreground"
              delay={0.4}
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl font-sans text-body-lg text-muted leading-relaxed"
            >
              Most agencies build what you spec without understanding why. Most
              consultants advise without building. CoreFrame does both &mdash;
              combining deep commercial thinking with hands-on technical
              delivery to build AI-powered systems that actually move the
              needle.
            </motion.p>

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
                  Start a Conversation
                </Button>
              </Magnetic>
              <Button href="/case-studies" variant="secondary">
                See Our Work
              </Button>
            </motion.div>
          </div>


        </Container>
      </div>
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
              "Business-first engineering",
              "AI-native delivery",
              "Senior-led, always",
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
      title: "Strategy + Delivery",
      items: [
        "We diagnose the business problem before designing the solution",
        "Architecture, vendor decisions, and technical roadmapping",
        "The same senior minds that plan it are the ones who build it",
      ],
    },
    {
      number: "02",
      title: "Systems & Digital Transformation",
      items: [
        "Unify fragmented tools \u2014 POS, payments, CRM, ops \u2014 into one layer",
        "Real-time dashboards and business intelligence that drive decisions",
        "Workflow redesign and automation for teams ready to scale",
      ],
    },
    {
      number: "03",
      title: "AI Agents & Automation",
      items: [
        "Custom AI agents for support, operations, and internal workflows",
        "Automation that cuts headcount cost and eliminates repetitive work",
        "Intelligent tooling that gives small teams the leverage of large ones",
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
            We speak business and we build technology. Most can&rsquo;t do both well.
          </p>
        </div>
      </Reveal>

      <Stagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
        {services.map((service) => (
          <StaggerItem key={service.number} className="h-full">
            <div className="group relative rounded-2xl border border-border bg-bg-card p-8 md:p-10 transition-colors duration-500 hover:border-border-hover hover:bg-surface h-full flex flex-col">
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

              <div className="mt-8 h-[1px] bg-border group-hover:bg-accent/30 transition-colors duration-500" />
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

      href: "/case-studies/wiral",
      tag: "Implementation Partnership",
      title: "Wiral.ai",
      description:
        "A product company that needed to move from concept to shipped, production-grade software \u2014 fast. We embedded as the core engineering partner, owned architecture and delivery, and shipped a stable system with reliable workflows on timeline \u2014 enabling the team to go to market with confidence.",
      outcomes: [
        "Production-ready on timeline",
        "Reliable core workflows",
        "Reduced time-to-market",
      ],
    },
  ];

  return (
    <Section padding="large">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
              Engagements
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

              <div className="mt-6 flex items-center gap-2 font-display text-sm text-accent group-hover:gap-3 transition-colors duration-300">
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
        placeholder="e.g. How did you approach the Wiral.ai engagement?"
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
            Built for Ambitious Businesses
          </h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
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
                "Businesses that want technology to give them a real competitive edge",
                "Founders and operators who need a partner that understands both sides \u2014 the business and the build",
                "Teams ready to adopt AI and automation to reduce costs and move faster",
                "Companies that have outgrown their systems and need someone to own the transformation",
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
                "One-off brochure websites or landing pages",
                "Short-term feature-only contracts with no strategic context",
                "Engagements where the cheapest bid wins \u2014 we compete on depth, not price",
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
      title: "Discovery sprint",
      description:
        "A focused 2\u20134 week diagnostic. We map your operations, systems, and data flows, identify the highest-leverage opportunities, and deliver a clear transformation roadmap with prioritized recommendations. Most engagements start here.",
      iconPath: "M21 21l-4.35-4.35",
      iconCircle: true,
    },
    {
      title: "Strategic advisory",
      description:
        "Ongoing strategic counsel on architecture decisions, vendor selection, technology roadmap, and operational priorities. Ideal for founders who need a senior technical perspective without a full implementation engagement.",
      iconPath: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
    },
    {
      title: "Implementation partnership",
      description:
        "We own the build. From architecture to deployment, we take full responsibility for delivering production-grade systems \u2014 working in structured cycles with defined milestones and measurable outcomes at every stage.",
      iconPath: "M22 11.08V12a10 10 0 11-5.93-9.14",
      iconPolyline: "22 4 12 14.01 9 11.01",
    },
    {
      title: "Retained transformation partner",
      description:
        "Our deepest model. We embed with your team as a long-term strategic and technical partner \u2014 owning systems modernization, operational improvement, and ongoing iteration. Typically spans 6\u201318 months.",
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
            Engagement Models
          </span>
          <h2 className="mt-4 font-heading text-display-md text-foreground">How We Engage</h2>
        </div>
      </Reveal>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-16">
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
                      Model {String(activeStep + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-xl text-foreground">
                      {models[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-body text-muted leading-relaxed">
                  {models[activeStep].description}
                </p>

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
    q: "What makes CoreFrame different from other tech agencies?",
    a: "Most agencies are great at building what you tell them to build. The problem is, most clients don't know exactly what to build — they know the business problem. CoreFrame starts from the commercial context: what does the business actually need to grow, operate efficiently, or outcompete? Then we design and build the technical solution. That combination of business understanding and engineering execution is rare, and it's what makes the difference between software that gets shelved and systems that drive real outcomes.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Founder-led and operator-run businesses that are serious about using technology to grow. Restaurants, SaaS companies, service businesses, and operators managing operational complexity. The common thread: they need a partner who understands what they're trying to achieve commercially, not just a team that executes tickets.",
  },
  {
    q: "How quickly can you move?",
    a: "Fast when it matters. AI agents and automations: 1–3 weeks. Full product builds: 4–10 weeks depending on scope. We begin with a short discovery sprint to map the problem, align on direction, and hit the ground running. No multi-month warm-ups or bloated procurement phases.",
  },
  {
    q: "How do you help businesses with AI?",
    a: "AI is now table stakes for competitive businesses. We build AI agents that handle customer support, internal ops, and complex workflows — giving small teams the leverage of a much larger operation. We also integrate AI into existing systems: CRMs, ERPs, dashboards, and custom workflows. We move from brief to working system fast, and we measure success in operational impact, not model metrics.",
  },
  {
    q: "Do I need to know what to build before I reach out?",
    a: "No — and you shouldn't have to. That's partly why CoreFrame exists. If you have a business problem, a growth blocker, or a process you know is costing you money, that's enough to start. We'll help you figure out the right technical approach. Most clients come to us with a problem statement, not a spec sheet.",
  },
  {
    q: "What does an engagement look like in practice?",
    a: "We start with a discovery sprint — 2–4 weeks to map your operations, identify where technology can create the most leverage, and produce a clear roadmap. From there we move into delivery: building, shipping, and iterating with measurable milestones. Senior engineers own the work end-to-end. No junior handoffs.",
  },
  {
    q: "Can you work alongside our internal team?",
    a: "Yes. We embed with your team, not around it. Whether you have existing developers, a product manager, or just a vision and no technical staff — we adapt. We've led engagements from scratch and we've augmented internal teams as a senior strategic layer.",
  },
  {
    q: "How do I get started?",
    a: "Use the contact form. Tell us about your business, what you're trying to solve, and where things stand today. We'll respond within 1–2 business days and set up a call to see if there's a fit.",
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
      <div className="absolute inset-0 bg-radial-fade opacity-50" />

      <div className="relative text-center">
        <Reveal>
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            Ready?
          </span>
          <h2 className="mt-6 font-heading text-display-lg text-foreground max-w-3xl mx-auto">
            Ready to build technology that actually serves your business?
          </h2>
          <p className="mt-6 font-sans text-body text-muted max-w-lg mx-auto">
            Get a partner who speaks both languages &mdash; business strategy and
            technical execution. Limited engagements open.
          </p>
          <div className="mt-10">
            <Magnetic strength={0.12}>
              <Button
                href="/contact"
                variant="primary"
                icon={<ArrowRight />}
              >
                Start a Conversation
              </Button>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ────────────────────────── In Practice ────────────────────────── */
function InPractice() {
  const examples = [
    "AI agents for customer support, ops, and internal workflows \u2014 live in weeks, not months",
    "POS + payments + CRM unified into a single operating layer",
    "Margin visibility dashboards with real-time data from every location",
    "End-to-end automation that replaces repetitive manual work",
    "Full-stack product builds \u2014 from zero to production-grade software",
    "Systems modernization for businesses that have outgrown their current stack",
  ];

  return (
    <Section padding="large">
      <Reveal>
        <div className="max-w-3xl mx-auto">
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            What We Ship
          </span>
          <h2 className="mt-4 font-heading text-display-md text-foreground">
            Real Work. Real Outcomes.
          </h2>
          <p className="mt-4 font-sans text-body-sm text-muted max-w-xl">
            We build things that run in production and show up in your numbers.
            Here&rsquo;s the kind of work we deliver:
          </p>
          <ul className="mt-10 space-y-5">
            {examples.map((item, i) => (
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
    </Section>
  );
}



/* ────────────────────────── Built With ────────────────────────── */
function BuiltWith() {
  return (
    <div className="relative border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-bg-elevated" />
      <Container className="relative py-6">
        <Reveal>
          <p className="text-center font-display text-caption uppercase tracking-[0.2em] text-subtle mb-4">
            Built with modern infrastructure
          </p>
        </Reveal>
      </Container>
      <LogoMarquee />
    </div>
  );
}

/* ────────────────────────── Page Composition ────────────────────────── */
export default function HomeClient() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <BuiltWith />
      <Services />
      <InPractice />
      <SelectedWork />
      <Audience />
      <Engagement />
      <FAQ />
      <FinalCTA />
    </>
  );
}
