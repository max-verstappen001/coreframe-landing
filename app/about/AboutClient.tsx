"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Button, ArrowRight } from "@/components/Button";
import { Card } from "@/components/Card";
import { Reveal, Stagger, StaggerItem, TextReveal, Counter, Magnetic } from "@/lib/animations";

/* ────────────────────────── Team Data ────────────────────────── */
const TEAM = [
  {
    name: "Sanjay Nanda",
    role: "Founder & CEO",
    description:
      "Sanjay leads CoreFrame's strategy and delivery. He has designed and shipped production-grade systems across restaurant operations, SaaS, and service businesses — with deep hands-on experience in systems architecture, product engineering, and applied AI. He works directly with every client.",
    linkedin: "#",
  },
  {
    name: "Nandakumar",
    role: "Director, Commercial Strategy",
    description:
      "With 25+ years building and scaling businesses across industries, Nandakumar brings rare commercial depth to every engagement. He shapes go-to-market direction, manages client relationships, and ensures every engagement delivers measurable business value — not just technical output.",
    linkedin: "#",
  },
];

const EXPERIENCE_STATS = [
  { label: "Industries Served", value: 3, suffix: "+" },
  { label: "Production Deployments", value: 5, suffix: "+" },
  { label: "Client Retention", value: 100, suffix: "%" },
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
    year: "2024",
    title: "CoreFrame Founded",
    description: "Started with a clear premise: businesses need strategic transformation partners who can think and build — not agencies that execute tickets.",
  },
  {
    year: "2024",
    title: "First Client Engagements",
    description: "Delivered MarginX digital transformation and Wiral.ai product engineering — defining our operating model around deep, senior-led partnerships.",
  },
  {
    year: "2025",
    title: "Expanded Capabilities",
    description: "Added applied AI and automation to our practice — always tied to measurable business outcomes, never as a standalone service.",
  },
  {
    year: "2025–26",
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

function Stats() {
  return (
    <div className="border-y border-border bg-bg-elevated">
      <div className="max-w-content mx-auto px-6 md:px-8 py-12">
        <Stagger className="grid grid-cols-3 gap-8" staggerDelay={0.1}>
          {EXPERIENCE_STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                <div className="font-heading text-display-md text-accent">
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 font-display text-caption text-muted uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}

function Team() {
  return (
    <Section padding="large">
      <Reveal>
        <div className="text-center mb-16">
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            Our Team
          </span>
          <h2 className="mt-4 font-heading text-display-md text-foreground">
            The People Behind CoreFrame
          </h2>
          <p className="mt-4 font-sans text-body-sm text-muted max-w-lg mx-auto">
            A small, senior team — by design. The people doing the strategic thinking are the same people building the systems.
          </p>
        </div>
      </Reveal>

      <Stagger className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto" staggerDelay={0.15}>
        {TEAM.map((member) => (
          <StaggerItem key={member.name}>
            <Card tilt={false}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                  <span className="font-heading text-2xl text-accent">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 font-display text-caption uppercase tracking-wide text-accent">
                  {member.role}
                </p>
                <p className="mt-4 font-sans text-body-sm text-muted leading-relaxed">
                  {member.description}
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <a
                    href="mailto:info@coreframetech.in"
                    className="font-display text-[12px] text-muted hover:text-accent transition-colors duration-300"
                  >
                    Email
                  </a>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-[12px] text-muted hover:text-accent transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
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
            <Button href="/case-studies" variant="secondary">
              View Case Studies
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
      <Stats />
      <OperatingPrinciples />
      <Team />
      <Expertise />
      <AboutCTA />
    </>
  );
}
