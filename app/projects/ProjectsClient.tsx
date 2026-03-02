"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button, ArrowRight } from "@/components/Button";
import { Reveal, Stagger, StaggerItem, TextReveal, Magnetic } from "@/lib/animations";

/* ────────────────────────── Data ────────────────────────── */

type Category = "all" | "ai-apps" | "ai-agents" | "ai-projects" | "digital-transformation";

interface Project {
  title: string;
  category: Category;
  categoryLabel: string;
  description: string;
  features: string[];
  stack: string[];
  status: "Completed" | "In Progress" | "Ongoing";
  href?: string;
}

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "ai-apps", label: "AI Apps" },
  { key: "ai-agents", label: "AI Agents" },
  { key: "ai-projects", label: "AI Projects" },
  { key: "digital-transformation", label: "Digital Transformation" },
];

const PROJECTS: Project[] = [
  {
    title: "MarginX",
    category: "digital-transformation",
    categoryLabel: "Digital Transformation",
    description:
      "Complete digital transformation for a multi-location restaurant group. Built POS integration, net-sales logic engine, and margin intelligence dashboards to restore operational visibility and reduce margin leakage.",
    features: [
      "POS data integration & normalization",
      "Net sales calculation engine",
      "Real-time margin dashboards",
      "Automated variance detection",
    ],
    stack: ["Next.js", "TypeScript", "Firebase", "Cloud Functions", "POS APIs"],
    status: "Completed",
    href: "/case-studies/marginx",
  },
  {
    title: "Wiral.ai",
    category: "ai-projects",
    categoryLabel: "AI Project",
    description:
      "End-to-end product engineering partnership. Handled core workflow development, AI integration, deployment pipeline, and delivered a production-ready platform on timeline.",
    features: [
      "Full product engineering",
      "AI workflow integration",
      "CI/CD pipeline setup",
      "Production deployment & monitoring",
    ],
    stack: ["Next.js", "TypeScript", "Cloud Infrastructure", "AI/ML", "CI/CD"],
    status: "Completed",
    href: "/case-studies/wiral",
  },
  {
    title: "CoreFrame AI Assistant",
    category: "ai-agents",
    categoryLabel: "AI Agent",
    description:
      "Our own customer-facing AI agent that handles initial client consultations, scopes project requirements, generates preliminary plans, and instantly forwards qualified leads to the team. Live on this website.",
    features: [
      "Natural language consultation",
      "Project requirement gathering",
      "Instant plan generation",
      "Real-time team notification",
    ],
    stack: ["OpenAI GPT-4", "Next.js API Routes", "Webhooks", "TypeScript"],
    status: "Completed",
  },
  {
    title: "Smart Inventory AI",
    category: "ai-apps",
    categoryLabel: "AI App",
    description:
      "AI-powered inventory management system for retail businesses. Uses predictive analytics to forecast demand, automate reordering, and reduce stockouts by analyzing historical sales patterns.",
    features: [
      "Demand forecasting with ML",
      "Automated reorder triggers",
      "Stockout prediction alerts",
      "Supplier performance analytics",
    ],
    stack: ["Python", "TensorFlow", "Next.js", "PostgreSQL", "Cloud Functions"],
    status: "In Progress",
  },
  {
    title: "Document Intelligence Agent",
    category: "ai-agents",
    categoryLabel: "AI Agent",
    description:
      "An autonomous agent that processes, categorizes, and extracts structured data from business documents — invoices, contracts, reports — reducing manual data entry by 90%.",
    features: [
      "Multi-format document parsing",
      "Intelligent data extraction",
      "Auto-categorization & filing",
      "Verification & flagging system",
    ],
    stack: ["OpenAI", "LangChain", "Python", "Firebase", "OCR APIs"],
    status: "In Progress",
  },
  {
    title: "AI Content Pipeline",
    category: "ai-apps",
    categoryLabel: "AI App",
    description:
      "End-to-end content generation and management platform using LLMs. Handles ideation, drafting, editing, SEO optimization, and multi-channel publishing — all with human-in-the-loop review.",
    features: [
      "AI-powered content ideation",
      "Automated drafting & editing",
      "SEO optimization engine",
      "Multi-channel publishing",
    ],
    stack: ["OpenAI GPT-4", "Next.js", "Vercel", "PostgreSQL", "Custom APIs"],
    status: "In Progress",
  },
  {
    title: "Operations Command Center",
    category: "digital-transformation",
    categoryLabel: "Digital Transformation",
    description:
      "Centralized operations dashboard connecting all business systems — CRM, accounting, HR, and operations — into a single real-time view with AI-powered insights and anomaly detection.",
    features: [
      "Multi-system integration hub",
      "Real-time operational dashboards",
      "AI anomaly detection",
      "Automated reporting & alerts",
    ],
    stack: ["Next.js", "TypeScript", "Firebase", "REST APIs", "Cloud Infrastructure"],
    status: "Ongoing",
  },
  {
    title: "AI Customer Support Agent",
    category: "ai-agents",
    categoryLabel: "AI Agent",
    description:
      "Intelligent support agent that resolves 70%+ of customer queries autonomously. Handles FAQs, troubleshooting, escalation routing, and learns from every interaction to improve over time.",
    features: [
      "Autonomous query resolution",
      "Context-aware escalation",
      "Knowledge base auto-learning",
      "Sentiment analysis & routing",
    ],
    stack: ["OpenAI", "RAG Pipeline", "Next.js", "Vector DB", "Webhooks"],
    status: "In Progress",
  },
];

/* ────────────────────────── Components ────────────────────────── */

function ProjectsHero() {
  return (
    <Section padding="hero">
      <div className="max-w-4xl">
        <Reveal>
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            Our Projects
          </span>
          <TextReveal
            text="What We're Building."
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
            From AI-powered applications to intelligent agent systems and digital
            transformation — explore the projects that define our craft.
          </motion.p>
        </Reveal>
      </div>
    </Section>
  );
}

function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <Section background="elevated" padding="large">
      {/* Category filter */}
      <Reveal>
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full font-display text-sm transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-accent text-black"
                  : "border border-border text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {cat.label}
              {cat.key !== "all" && (
                <span className="ml-2 text-[11px] opacity-60">
                  {PROJECTS.filter((p) => p.category === cat.key).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Project cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <Card href={project.href} tilt={!!project.href} className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-[1px] bg-accent" />
                    <span className="font-display text-caption uppercase tracking-[0.15em] text-accent">
                      {project.categoryLabel}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full font-display text-[10px] uppercase tracking-wider ${
                      project.status === "Completed"
                        ? "bg-accent/10 text-accent border border-accent/20"
                        : project.status === "In Progress"
                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        : "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading text-display-sm text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-4 font-sans text-body-sm text-muted leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mt-6">
                  <ul className="space-y-2">
                    {project.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-2 h-[4px] w-[4px] rounded-full bg-accent/60 shrink-0" />
                        <span className="font-sans text-[13px] text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-bg-elevated border border-border font-display text-[10px] text-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link indicator */}
                {project.href && (
                  <div className="mt-5 flex items-center gap-2 font-display text-sm text-accent group-hover:gap-3 transition-all duration-300">
                    View case study
                    <ArrowRight />
                  </div>
                )}
              </Card>
            </Reveal>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="font-sans text-body text-muted">No projects in this category yet.</p>
        </div>
      )}
    </Section>
  );
}

function ProjectsCTA() {
  return (
    <Section padding="large" className="overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade opacity-30" />
      <div className="relative text-center">
        <Reveal>
          <span className="font-display text-caption uppercase tracking-[0.2em] text-accent">
            Your Project Next?
          </span>
          <h2 className="mt-6 font-heading text-display-lg text-foreground max-w-3xl mx-auto">
            Have an idea? Let&rsquo;s bring it to life.
          </h2>
          <p className="mt-6 font-sans text-body text-muted max-w-lg mx-auto">
            Whether it&rsquo;s an AI app, an intelligent agent, or a full digital
            transformation — we&rsquo;re ready to build.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic strength={0.12}>
              <Button href="/contact" variant="primary" icon={<ArrowRight />}>
                Start Your Project
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
export default function ProjectsClient() {
  return (
    <>
      <ProjectsHero />
      <ProjectGrid />
      <ProjectsCTA />
    </>
  );
}
