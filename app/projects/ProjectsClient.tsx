"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { Button, ArrowRight } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionMarker } from "@/components/SectionMarker";
import { NumberedItem } from "@/components/NumberedItem";
import { CategoryBadge } from "@/components/CategoryBadge";
import {
  Reveal,
  TextReveal,
  Magnetic,
  ScrollIndicator,
  BlurReveal,
  CursorSpotlight,
  MarqueeBand,
} from "@/lib/animations";
import {
  CodeNodesGraphic,
  NeuralGraphGraphic,
  InterlockGraphic,
  DotGrid,
} from "@/components/Graphics";
import { CATEGORIES, PROJECTS, type Category, type Project } from "@/lib/projects";

/* ────────────────────────── Hero ────────────────────────── */

function ProjectsHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-fade-b" />
      <div className="absolute inset-0 bg-radial-fade" />
      <CursorSpotlight color="rgba(200, 255, 0, 0.08)" size={600} />
      <span
        aria-hidden
        className="ghost-numeral absolute -right-12 top-20 opacity-20 select-none"
      >
        07
      </span>

      <Container>
        <div className="flex items-center justify-between font-display text-caption uppercase tracking-[0.2em] text-muted mb-12">
          <span>You are now viewing</span>
          <span className="hidden md:inline text-subtle">
            CRFRM / PORTFOLIO / 2026
          </span>
        </div>

        <div className="max-w-5xl">
          <SectionMarker active="B" className="mb-8" />
          <TextReveal
            text="What we ship — in production."
            tag="h1"
            className="font-heading text-display-xl text-foreground"
            delay={0.2}
          />
          <BlurReveal delay={0.8} className="mt-10 max-w-2xl">
            <p className="font-sans text-body-lg text-muted leading-relaxed">
              From AI-powered applications to intelligent agent systems and
              digital transformation — selected work, with the metrics that
              actually matter.
            </p>
          </BlurReveal>
        </div>

        <div className="mt-20">
          <ScrollIndicator />
        </div>
      </Container>
    </section>
  );
}

/* ────────────────────────── Project Stack ────────────────────────── */

function ProjectStack() {
  const [active, setActive] = useState<Category>("all");
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const filtered =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <Section background="elevated" padding="large">
      {/* Filter bar */}
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-border">
          <div className="font-display text-caption uppercase tracking-[0.2em] text-muted">
            <NumberedItem
              index={filtered.length}
              total={PROJECTS.length}
              label="projects"
            />
          </div>
          <div className="flex flex-wrap gap-1 relative">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`relative px-4 py-2 rounded-full font-display text-caption uppercase tracking-[0.12em] transition-colors duration-300 ${
                  active === cat.key
                    ? "text-on-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {active === cat.key && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span className="relative">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Editorial table */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Column headers */}
          <div className="hidden md:grid grid-cols-12 gap-6 pb-4 mb-2 font-display text-caption uppercase tracking-[0.18em] text-subtle">
            <div className="col-span-1">No.</div>
            <div className="col-span-5">Project</div>
            <div className="col-span-3">Category</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1 text-right">Link</div>
          </div>

          <div onMouseLeave={() => setHoverIndex(null)}>
            {filtered.map((project, i) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={i}
                isHovered={hoverIndex === i}
                onHover={() => setHoverIndex(i)}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-20 font-sans text-muted">
          No projects in this category yet.
        </div>
      )}
    </Section>
  );
}

function ProjectRow({
  project,
  index,
  isHovered,
  onHover,
}: {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
}) {
  const isExternal = project.href?.startsWith("http");
  const Wrapper = project.href ? "a" : "div";
  const wrapperProps = project.href
    ? {
        href: project.href,
        ...(isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        }),
      }
    : ({} as Record<string, never>);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={onHover}
      className="border-t border-border last:border-b"
    >
      <Wrapper
        {...wrapperProps}
        className="group block relative py-7 md:py-8 transition-colors duration-500"
      >
        {/* Accent rail on hover */}
        <motion.span
          aria-hidden
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="grid grid-cols-12 gap-4 md:gap-6 items-center">
          {/* Number */}
          <div className="col-span-2 md:col-span-1">
            <span
              className={`font-display text-caption uppercase tracking-[0.18em] tabular-nums transition-colors duration-300 ${
                isHovered ? "text-accent" : "text-subtle"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Title + (hover) description */}
          <div className="col-span-10 md:col-span-5">
            <h3
              className={`font-heading text-2xl md:text-3xl leading-tight transition-colors duration-300 ${
                isHovered ? "text-accent" : "text-foreground"
              }`}
            >
              {project.title}
            </h3>
            <AnimatePresence initial={false}>
              {isHovered && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden font-sans text-body-sm text-muted leading-relaxed max-w-xl"
                >
                  <span className="block pt-3">{project.description}</span>
                  <span className="block pt-3 font-display text-caption uppercase tracking-[0.12em] text-subtle">
                    {project.client} · {project.stack.slice(0, 3).join(" · ")}
                    {project.stack.length > 3 && ` +${project.stack.length - 3}`}
                  </span>
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Category */}
          <div className="hidden md:block col-span-3">
            <span className="font-display text-caption uppercase tracking-[0.12em] text-muted">
              {project.categoryLabel}
            </span>
          </div>

          {/* Status */}
          <div className="hidden md:block col-span-2">
            <span className="inline-flex items-center gap-2 font-display text-caption uppercase tracking-[0.12em]">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  project.status === "live"
                    ? "bg-accent"
                    : project.status === "development"
                    ? "bg-amber-300"
                    : "bg-blue-300"
                }`}
              />
              <span className="text-muted">{project.status}</span>
            </span>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex col-span-1 justify-end">
            <motion.span
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-flex items-center transition-colors duration-300 ${
                isHovered ? "text-accent" : "text-subtle"
              }`}
              aria-hidden
            >
              <ArrowRight />
            </motion.span>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}

/* ────────────────────────── CTA ────────────────────────── */

function ProjectsCTA() {
  return (
    <Section padding="large" className="overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade opacity-30" />
      <div className="relative text-center max-w-3xl mx-auto">
        <Reveal>
          <NumberedItem
            index={0}
            label="YOUR PROJECT NEXT"
            className="justify-center mb-8"
          />
          <TextReveal
            text="Have an idea? Let's bring it to life."
            tag="h2"
            className="font-heading text-display-lg text-foreground"
          />
          <p className="mt-6 font-sans text-body text-muted max-w-lg mx-auto">
            AI app, intelligent agent, or full digital transformation — we&rsquo;re
            ready to build.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic strength={0.12}>
              <Button href="/contact" variant="primary" icon={<ArrowRight />}>
                Start Your Project
              </Button>
            </Magnetic>
            <Button href="/about" variant="secondary">
              About us
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function ProjectsMarquee() {
  return (
    <div className="relative border-y border-border bg-bg overflow-hidden py-8 md:py-10">
      <MarqueeBand
        speed={50}
        items={[
          "Shipped",
          "In Production",
          "Maintained",
          "Iterating",
          "Built with care",
          "Senior-led",
        ]}
        separator="•"
      />
    </div>
  );
}

/* ────────────────────────── Page Composition ────────────────────────── */
export default function ProjectsClient() {
  return (
    <>
      <ProjectsHero />
      <ProjectsMarquee />
      <ProjectStack />
      <ProjectsCTA />
    </>
  );
}
