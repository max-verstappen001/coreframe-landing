"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Button, ArrowRight } from "@/components/Button";
import { Reveal, Stagger, StaggerItem, TextReveal, Magnetic } from "@/lib/animations";

/* ────────────────────────── Team Data ────────────────────────── */
const TEAM = [
  {
    name: "Sanjay Nanda N J",
    role: "Co-founder & CEO",
    description:
      "Sanjay leads CoreFrame's strategy and delivery, working directly with every client. He has shipped production-grade systems across restaurant operations, SaaS, fintech, and services — with deep hands-on experience spanning systems architecture, product engineering, applied AI, digital transformation, and private market investments.",
    email: "work@sanjaynanda.dev",
    linkedin: "https://www.linkedin.com/in/sanjaynandanj/",
  },
  {
    name: "Nandakumar K",
    role: "Director, Commercial Strategy",
    description:
      "With 25+ years building and scaling businesses across industries, Nandakumar brings rare commercial depth to every engagement. He shapes go-to-market direction, manages client relationships, and makes sure everything we deliver translates into measurable business value — margin, efficiency, and outcomes — not just technical output.",
    email: "info@coreframetech.in",
    linkedin: "https://www.linkedin.com/in/nandakumar-kathirvel-55613056/",
  },
  {
    name: "Amudhan Panneerselvam",
    role: "Co-founder & CTO",
    description:
      "Amudhan leads CoreFrame's technology vision — pairing full-stack engineering with applied AI and systems architecture. He has shipped production-grade platforms including AI-driven learning systems with advanced RAG and automation workflows, spanning intelligent software through to real-world connected devices. World, Asian, and Indian Book of Records holder for the world's smallest and lightest satellite.",
    email: "aamudhan2000@gmail.com",
    linkedin: "https://www.linkedin.com/in/amudhan-panneerselvam/",
  },
];

const EXPERTISE = [
  {
    area: "Strategic Technology Partnership",
    description: "We act as a senior technical partner — not a vendor. We help clients define what to build, why it matters, and how to execute. Then we own the delivery.",
    tools: ["Transformation Roadmapping", "Architecture Decisions", "Vendor Selection", "Technical Oversight"],
  },
  {
    area: "Systems Modernization & Integration",
    description: "We unify fragmented tools and disconnected data into clean, connected operating systems — POS, payments, CRM, reporting, and internal workflows brought into one coherent layer.",
    tools: ["Systems Integration", "Operational Dashboards", "Workflow Automation", "Data Unification"],
  },
  {
    area: "Applied AI & Automation",
    description: "AI is the biggest productivity multiplier available to businesses right now. We build AI agents, automation systems, and intelligent tooling that reduce operating costs and give your team the leverage to do more with less.",
    tools: ["AI Agents", "Workflow Automation", "Process Intelligence", "Cost Reduction"],
  },
  {
    area: "Product Engineering & Delivery",
    description: "From architecture to deployment, we build production-grade software systems. Everything we ship is designed to run reliably at scale, not impress in a demo.",
    tools: ["Full-Stack Development", "Production Deployment", "System Architecture", "Performance & Reliability"],
  },
];

const TIMELINE = [
  {
    year: "2026",
    title: "CoreFrame Founded",
    description: "Started with a clear premise: businesses need strategic transformation partners who can think and build — not agencies that execute tickets.",
  },
  {
    year: "2026",
    title: "First Client Engagements",
    description: "Delivered flagship product engineering engagements — defining our operating model around deep, senior-led partnerships.",
  },
  {
    year: "2026",
    title: "Expanded Capabilities",
    description: "Added applied AI and automation to our practice — always tied to measurable business outcomes, never as a standalone service.",
  },
  {
    year: "2026+",
    title: "Scaling Selectively",
    description: "Growing our client base deliberately, maintaining senior-led attention for every engagement, and deepening our expertise across industries.",
  },
];

const PRINCIPLES = [
  {
    title: "Senior-led, always",
    description: "The people doing the strategic thinking are the same people building the systems. We do not hand off to junior teams.",
  },
  {
    title: "Outcomes over output",
    description: "We measure success in business terms — margin improvement, operational efficiency, time-to-market — not lines of code or feature count.",
  },
  {
    title: "Selective by design",
    description: "We keep our client roster small. This is a deliberate choice — taking too many engagements is the fastest way to deliver mediocre work.",
  },
  {
    title: "AI where it matters",
    description: "We apply AI where there is clear ROI. If a simpler solution works, we will recommend that instead. No technology for its own sake.",
  },
  {
    title: "Ownership, not outsourcing",
    description: "We embed with your team and own the outcome. We are accountable for results, not just deliverables.",
  },
  {
    title: "Honest counsel",
    description: "We tell you what you need to hear, not what you want to hear. If something is not the right approach, we will say so directly.",
  },
];

/* ────────────────────────── Components ────────────────────────── */

function AboutHero() {
  return (
    <Section padding="hero">
      <div className="max-w-4xl">
        <Reveal>
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            About CoreFrame
          </span>
          <TextReveal
            text="We Think Like Operators. We Build Like Engineers."
            tag="h1"
            className="mt-4 font-heading text-display-lg text-foreground"
            delay={0.2}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl font-sans text-body-lg text-muted leading-relaxed"
          >
            CoreFrame was built around a gap we kept seeing: businesses either
            had tech partners who couldn&rsquo;t understand the commercial
            problem, or advisors who couldn&rsquo;t build the solution. We do
            both. Deep business understanding drives every technical decision we
            make &mdash; so the systems we ship don&rsquo;t just work, they
            work for the business.
          </motion.p>
        </Reveal>
      </div>
    </Section>
  );
}

function Team() {
  return (
    <Section padding="large">
      <Reveal>
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-4">
            [ The team ]
          </p>
          <h2 className="font-display font-medium text-display-md text-foreground leading-[1.05]">
            A senior team of operators, engineers, and builders.
          </h2>
          <p className="mt-5 font-sans text-body text-muted leading-relaxed">
            Small by design. The people doing the strategic thinking are the
            same people building the systems — no junior handoffs.
          </p>
        </div>
      </Reveal>

      <div className="border-t border-border grid md:grid-cols-2 gap-x-5">
        {TEAM.map((member, i) => (
          <Reveal key={member.name} delay={(i % 2) * 0.08}>
            <div className="group h-full border-b border-border py-8 md:py-10 md:[&:nth-child(odd)]:pr-8 md:[&:nth-child(even)]:pl-8 md:[&:nth-child(even)]:border-l">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle tabular-nums">
                  {String(i + 1).padStart(2, "0")} / Team
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent text-right">
                  {member.role}
                </span>
              </div>
              <h3 className="font-display font-medium text-2xl md:text-[1.9rem] leading-tight text-foreground">
                {member.name}
              </h3>
              <p className="mt-4 font-sans text-body-sm text-muted leading-relaxed">
                {member.description}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href={`mailto:${member.email}`}
                  className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted hover:text-accent transition-colors duration-300"
                >
                  Email
                </a>
                <span className="w-1 h-1 rounded-full bg-border" />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted hover:text-accent transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
        <span>// Team</span>
        <span>{TEAM.length} people</span>
      </div>
    </Section>
  );
}

function Expertise() {
  return (
    <Section background="elevated" padding="large">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
              Capabilities
            </span>
            <h2 className="mt-4 font-heading text-display-md text-foreground">
              What We Bring to the Table
            </h2>
          </div>
          <p className="max-w-md font-sans text-body-sm text-muted">
            We work across strategy, systems, and implementation — helping
            clients define the right direction, then building the infrastructure
            to support it.
          </p>
        </div>
      </Reveal>

      <Stagger className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
        {EXPERTISE.map((item, i) => (
          <StaggerItem key={i}>
            <div className="group rounded-2xl border border-border bg-bg-card p-8 md:p-10 transition-all duration-500 hover:border-border-hover">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-accent/30 font-display text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 h-[1px] bg-border group-hover:bg-accent/20 transition-colors duration-500" />
              </div>
              <h3 className="font-heading text-xl text-foreground">{item.area}</h3>
              <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-bg-elevated border border-border font-display text-[11px] text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function Timeline() {
  return (
    <Section padding="large">
      <Reveal>
        <div className="text-center mb-16">
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            Our Journey
          </span>
          <h2 className="mt-4 font-heading text-display-md text-foreground">
            Building Since Day One
          </h2>
        </div>
      </Reveal>

      <div className="max-w-2xl mx-auto">
        {TIMELINE.map((event, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="relative pl-12 pb-12 last:pb-0">
              {/* Timeline line */}
              {i < TIMELINE.length - 1 && (
                <div className="absolute left-[14px] top-8 w-[1px] h-full bg-border" />
              )}
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full border border-accent/30 bg-bg flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-accent" />
              </div>
              <span className="font-display text-caption text-accent tracking-widest">{event.year}</span>
              <h3 className="mt-2 font-heading text-lg text-foreground">{event.title}</h3>
              <p className="mt-2 font-sans text-body-sm text-muted leading-relaxed">{event.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function OperatingPrinciples() {
  return (
    <Section padding="large">
      <Reveal>
        <div className="text-center mb-16">
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            How We Work
          </span>
          <h2 className="mt-4 font-heading text-display-md text-foreground">
            How We Work
          </h2>
          <p className="mt-4 font-sans text-body-sm text-muted max-w-lg mx-auto">
            Six things that define every engagement we take on.
          </p>
        </div>
      </Reveal>

      <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
        {PRINCIPLES.map((item, i) => (
          <StaggerItem key={i}>
            <div className="rounded-2xl border border-border bg-bg-card p-8 transition-all duration-500 hover:border-border-hover h-full">
              <h3 className="font-heading text-lg text-foreground">{item.title}</h3>
              <p className="mt-3 font-sans text-body-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function AboutCTA() {
  return (
    <Section background="elevated" padding="large" className="overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />
      <div className="relative text-center">
        <Reveal>
          <h2 className="font-heading text-display-lg text-foreground max-w-3xl mx-auto">
            Ready to work with a team that thinks like owners?
          </h2>
          <p className="mt-6 font-sans text-body text-muted max-w-lg mx-auto">
            We take on a limited number of engagements. Start with a conversation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic strength={0.12}>
              <Button href="/contact" variant="primary" icon={<ArrowRight />}>
                Request a Consultation
              </Button>
            </Magnetic>
            <Button href="/contact" variant="secondary">
              Get Started
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ────────────────────────── Page Composition ────────────────────────── */
export default function AboutClient() {
  return (
    <>
      <AboutHero />
      <OperatingPrinciples />
      <Team />
      <Expertise />
      <AboutCTA />
    </>
  );
}
