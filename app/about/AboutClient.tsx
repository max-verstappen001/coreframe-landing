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
      "A builder at core — Sanjay brings deep expertise in engineering, AI systems, and software architecture. He has designed and shipped production-grade systems across industries, with hands-on experience in LLMs, agent workflows, and full-stack development.",
    linkedin: "#",
  },
  {
    name: "Nandakumar",
    role: "Director",
    description:
      "With 25+ years of experience across sales, marketing, and business strategy, Nandakumar brings a rare depth of commercial judgment. He has built and scaled businesses across sectors — and brings that same clarity to every client engagement.",
    linkedin: "#",
  },
];

const EXPERIENCE_STATS = [
  { label: "AI Projects Delivered", value: 5, suffix: "+" },
  { label: "Industries Served", value: 3, suffix: "+" },
  { label: "Lines of Production Code", value: 150, suffix: "K+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
];

const AI_EXPERTISE = [
  {
    area: "Large Language Models",
    description: "Custom GPT integrations, fine-tuning, prompt engineering, and LLM-powered workflows for business automation.",
    tools: ["OpenAI GPT-4", "Anthropic Claude", "LangChain", "Custom Agents"],
  },
  {
    area: "AI Agent Development",
    description: "Autonomous agents that handle customer support, data analysis, content generation, and operational decision-making.",
    tools: ["Agent Frameworks", "Tool Calling", "RAG Systems", "Multi-Agent Orchestration"],
  },
  {
    area: "Computer Vision & ML",
    description: "Image recognition, document processing, and custom ML models for industry-specific applications.",
    tools: ["TensorFlow", "PyTorch", "Hugging Face", "Custom Models"],
  },
  {
    area: "Data & Analytics",
    description: "Real-time dashboards, predictive analytics, and data pipelines that transform raw data into actionable insights.",
    tools: ["Firebase", "BigQuery", "Custom Pipelines", "Real-time Analytics"],
  },
];

const TIMELINE = [
  {
    year: "2024",
    title: "CoreFrame Founded",
    description: "Started with a clear mission: bring senior-level AI and engineering expertise to founder-led businesses.",
  },
  {
    year: "2024",
    title: "First Client Engagements",
    description: "Delivered MarginX digital transformation and Wiral.ai product engineering — establishing our delivery methodology.",
  },
  {
    year: "2025",
    title: "AI Agent Specialization",
    description: "Expanded into custom AI agent development, building intelligent automation systems for diverse industries.",
  },
  {
    year: "2025–26",
    title: "Scaling & Partnerships",
    description: "Growing our client base, forming strategic partnerships, and investing in proprietary AI tools and frameworks.",
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
            text="We Build the Future with AI."
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
            CoreFrame Technologies is an AI-first digital transformation company.
            We partner with founders and operators to build intelligent systems
            that drive real business results — not technology for its own sake.
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
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
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
            Two founders, two disciplines — technology and business, working as one to deliver outcomes that matter.
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

function AIExpertise() {
  return (
    <Section background="elevated" padding="large">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
              Our Expertise
            </span>
            <h2 className="mt-4 font-heading text-display-md text-foreground">
              Deep AI Experience
            </h2>
          </div>
          <p className="max-w-md font-sans text-body-sm text-muted">
            We bring hands-on experience across the full AI stack —
            from research to production deployment.
          </p>
        </div>
      </Reveal>

      <Stagger className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
        {AI_EXPERTISE.map((item, i) => (
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

function AboutCTA() {
  return (
    <Section background="elevated" padding="large" className="overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />
      <div className="relative text-center">
        <Reveal>
          <h2 className="font-heading text-display-lg text-foreground max-w-3xl mx-auto">
            Ready to build something extraordinary?
          </h2>
          <p className="mt-6 font-sans text-body text-muted max-w-lg mx-auto">
            Let&rsquo;s discuss how CoreFrame can transform your business with AI.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic strength={0.12}>
              <Button href="/contact" variant="primary" icon={<ArrowRight />}>
                Get in Touch
              </Button>
            </Magnetic>
            <Button href="/projects" variant="secondary">
              See Our Projects
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
      <Team />
      <AIExpertise />
      <AboutCTA />
    </>
  );
}
