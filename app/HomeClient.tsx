"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/Section";
import { Button, ArrowRight } from "@/components/Button";
import { Container } from "@/components/Container";
import { LogoMarquee } from "@/components/LogoMarquee";
import { NumberedItem } from "@/components/NumberedItem";
import { CategoryBadge } from "@/components/CategoryBadge";
import { Accordion } from "@/components/Accordion";
import {
  HeroMark,
  DotGrid,
  WaveDivider,
  AsciiBlock,
  CodeNodesGraphic,
  NeuralGraphGraphic,
  InterlockGraphic,
} from "@/components/Graphics";
import {
  Reveal,
  TextReveal,
  Magnetic,
  ScrollIndicator,
  BlurReveal,
  LineMask,
  CursorSpotlight,
  MarqueeBand,
  TickerStrip,
} from "@/lib/animations";
import { PROJECTS, type Project } from "@/lib/projects";

/* ────────────────────────── Hero ────────────────────────── */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-32 pb-12"
    >
      <div className="absolute inset-0 bg-grid mask-fade-b" />
      <CursorSpotlight color="rgba(200, 255, 0, 0.08)" size={600} />
      <motion.div
        style={{ y }}
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-[140px]"
      />

      {/* Big animated mark — right side, faint */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="hidden md:block absolute top-1/2 -translate-y-1/2 right-[-8%] w-[55vh] max-w-[640px] opacity-50"
      >
        <HeroMark />
      </motion.div>

      {/* Top label */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-between font-display text-caption uppercase tracking-[0.2em] text-muted"
        >
          <span>You are now entering</span>
          <span className="hidden md:inline text-subtle">
            CRFRM / 01 / 2026
          </span>
        </motion.div>
      </Container>

      {/* Main headline */}
      <motion.div style={{ opacity }} className="relative z-10 w-full">
        <Container>
          <div className="max-w-5xl">
            <TextReveal
              text="A studio for software that ships."
              tag="h1"
              className="font-heading text-display-xl text-foreground"
              delay={0.3}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-baseline gap-x-3 font-heading text-2xl md:text-3xl text-foreground"
            >
              <span className="text-muted">We build</span>
              <TickerStrip
                items={[
                  "AI agents",
                  "automation systems",
                  "production platforms",
                  "intelligent tooling",
                ]}
              />
              <span className="text-muted">that ship.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16"
            >
              <Magnetic strength={0.12}>
                <Button href="/contact" variant="primary" icon={<ArrowRight />}>
                  Talk to us
                </Button>
              </Magnetic>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Bottom row */}
      <Container>
        <ScrollIndicator />
      </Container>
    </section>
  );
}

/* ────────────────────────── Branded Divider ────────────────────────── */
function BrandedDivider() {
  return (
    <>
      <div className="border-y border-border bg-bg-elevated/40">
        <Container>
          <div className="py-4 flex items-center justify-between font-display text-caption uppercase tracking-[0.2em] text-subtle">
            <span>© 2026 — CoreFrame</span>
            <span className="hidden md:inline">Built in production. Shipped on time.</span>
            <span>v.01</span>
          </div>
        </Container>
      </div>
      <div className="relative border-b border-border bg-bg overflow-hidden py-8 md:py-12">
        <MarqueeBand
          speed={45}
          items={[
            "AI Agents",
            "Automation",
            "Engineering",
            "Production",
            "On-device",
            "Shipped",
          ]}
        />
      </div>
    </>
  );
}

/* ────────────────────────── Statement Modules ────────────────────────── */
const STATEMENTS: {
  marker: "A" | "B" | "C";
  index: number;
  headline: string;
  Visual: React.ComponentType<{ className?: string }>;
}[] = [
  {
    marker: "A",
    index: 1,
    headline: "Software that actually solves problems.",
    Visual: CodeNodesGraphic,
  },
  {
    marker: "B",
    index: 2,
    headline: "Engineers who grew up building with AI.",
    Visual: NeuralGraphGraphic,
  },
  {
    marker: "C",
    index: 3,
    headline: "Not a vendor — your technical co-founder.",
    Visual: InterlockGraphic,
  },
];

function Statements() {
  return (
    <Section id="capabilities" padding="large">
      <div className="space-y-px">
        {STATEMENTS.map((s, i) => (
          <StatementBlock key={s.marker} statement={s} index={i} />
        ))}
      </div>
    </Section>
  );
}

function StatementBlock({
  statement: s,
  index,
}: {
  statement: (typeof STATEMENTS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid md:grid-cols-12 gap-8 md:gap-12 py-20 md:py-28 border-t border-border first:border-t-0 -mx-6 px-6 md:-mx-10 md:px-10 overflow-hidden"
    >
      {/* Ghost background numeral */}
      <span
        aria-hidden
        className="ghost-numeral absolute -right-8 top-1/2 -translate-y-1/2 opacity-30 transition-opacity duration-700 group-hover:opacity-60"
      >
        {`0${s.index}`}
      </span>

      <div className="relative md:col-span-8">
        <h3 className="font-heading text-display-md md:text-display-lg text-foreground leading-[1.0]">
          {s.headline}
        </h3>
      </div>

      <div className="relative md:col-span-4 self-center">
        <s.Visual className="max-w-[280px] md:max-w-none" />
      </div>
    </motion.div>
  );
}

/* ────────────────────────── Selected Work ────────────────────────── */
function SelectedWork() {
  return (
    <Section padding="large" background="elevated">
      <Reveal>
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-heading text-display-md text-foreground leading-[1.0]">
              Selected work.
            </h2>
          </div>
          <Button href="/projects" variant="ghost" icon={<ArrowRight />}>
            All work
          </Button>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={0.05 + i * 0.05}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isExternal = project.href?.startsWith("http");
  const href = project.href ?? "/projects";
  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" as const }
    : {};

  return (
    <a
      href={href}
      {...linkProps}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-bg-card p-7 md:p-9 transition-all duration-500 hover:border-border-hover hover:bg-surface"
    >
      <span
        aria-hidden
        className="ghost-numeral absolute -right-4 -bottom-12 opacity-15 transition-opacity duration-700 group-hover:opacity-30"
        style={{ fontSize: "10rem" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative">
        <div className="flex items-center gap-3 mb-5">
          <CategoryBadge category={project.categoryLabel} status={project.status} />
        </div>
        <h3 className="font-heading text-2xl md:text-3xl text-foreground leading-tight transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 font-display text-caption uppercase tracking-[0.12em] text-subtle">
          {project.client}
        </p>
        <p className="mt-5 font-sans text-body-sm text-muted leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="relative mt-7 pt-5 border-t border-border flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="font-display text-caption uppercase tracking-[0.12em] text-subtle"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="flex items-center gap-2 font-display text-sm text-accent transition-all duration-300 group-hover:gap-3 whitespace-nowrap">
          {isExternal ? "Visit" : "View"}
          <ArrowRight />
        </span>
      </div>
    </a>
  );
}

/* ────────────────────────── FAQ ────────────────────────── */
const FAQ_ITEMS = [
  {
    question: "What kinds of work do you take on?",
    answer:
      "AI agents, automation systems, and production-grade software. We work with founders and operators who need real engineering — not a long deck and a roadmap.",
  },
  {
    question: "How quickly can you move?",
    answer:
      "AI agents and automations: 1–3 weeks. Full product builds: 4–10 weeks depending on scope. We start with a short discovery to align on direction, then ship.",
  },
  {
    question: "Do I need a spec before reaching out?",
    answer:
      "No. A problem statement is enough. Most people come to us with the business problem, not a feature list — we help shape the rest.",
  },
  {
    question: "Can you work alongside our team?",
    answer:
      "Yes. We embed with internal teams or own the build end-to-end. Senior engineers throughout — no junior handoffs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send a note via the contact page or chat. We'll respond in 1–2 business days and set up a call.",
  },
];

function FAQ() {
  return (
    <Section id="faq" padding="large" className="overflow-hidden">
      <DotGrid className="opacity-30" size={24} />
      <span
        aria-hidden
        className="ghost-numeral absolute -left-4 -top-12 opacity-20 select-none"
      >
        ?
      </span>
      <Reveal>
        <div className="relative grid md:grid-cols-12 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-4">
            <h2 className="font-heading text-display-md text-foreground leading-[1.0]">
              Common questions.
            </h2>
            <LineMask className="mt-8 max-w-[120px]" delay={0.4} />
          </div>
          <div className="md:col-span-8">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ────────────────────────── Final CTA ────────────────────────── */
function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.02]);

  return (
    <Section background="elevated" padding="large" className="overflow-hidden">
      <CursorSpotlight color="rgba(200, 255, 0, 0.06)" size={700} />
      <motion.div ref={ref} style={{ scale }} className="relative">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
            <NumberedItem
              index={0}
              label="START"
              className="justify-center mb-10"
            />
          </Reveal>
          <TextReveal
            text="Got something to build?"
            tag="h2"
            className="font-heading text-display-xl text-foreground"
          />
          <BlurReveal delay={0.5} className="mt-12">
            <Magnetic strength={0.12}>
              <Button href="/contact" variant="primary" icon={<ArrowRight />}>
                Talk to us
              </Button>
            </Magnetic>
          </BlurReveal>
        </div>
      </motion.div>
    </Section>
  );
}

/* ────────────────────────── Process / Terminal ────────────────────────── */
function ProcessBlock() {
  return (
    <Section padding="large" className="overflow-hidden">
      <DotGrid className="opacity-50" size={20} />
      <div className="relative grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <Reveal className="md:col-span-5">
          <h2 className="font-heading text-display-md text-foreground leading-[1.0]">
            One command. One team. Shipped.
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="md:col-span-7">
          <AsciiBlock />
        </Reveal>
      </div>
    </Section>
  );
}

/* ────────────────────────── Built With Marquee ────────────────────────── */
function BuiltWith() {
  return (
    <div className="relative border-y border-border overflow-hidden bg-bg-elevated bg-scanline">
      <LogoMarquee />
    </div>
  );
}

/* ────────────────────────── Page Composition ────────────────────────── */
export default function HomeClient() {
  return (
    <>
      <Hero />
      <BrandedDivider />
      <Statements />
      <WaveDivider className="border-y border-border bg-bg-elevated/30" />
      <SelectedWork />
      <ProcessBlock />
      <BuiltWith />
      <FAQ />
      <FinalCTA />
    </>
  );
}
