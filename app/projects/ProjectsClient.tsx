"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { MetaHeader } from "@/components/MetaHeader";
import { Reveal } from "@/lib/animations";
import { CATEGORIES, PROJECTS, type Category, type Project } from "@/lib/projects";

/* Category sections in display order (skip "all"; skip empty groups) */
const SECTIONS = CATEGORIES.filter((c) => c.key !== "all")
  .map((c) => ({
    key: c.key as Exclude<Category, "all">,
    label: c.label,
    items: PROJECTS.filter((p) => p.category === c.key),
  }))
  .filter((s) => s.items.length > 0);

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.href?.startsWith("http");
  const href = project.href ?? "/contact";
  const linkProps = isExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
    : {};
  return (
    <a
      href={href}
      {...linkProps}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-bg-card p-7 transition-all duration-500 hover:border-border-hover hover:shadow-card"
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
            {project.categoryLabel}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {project.status}
          </span>
        </div>
        <h3 className="font-display font-medium text-2xl md:text-[1.7rem] text-foreground leading-tight transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-subtle">
          {project.client}
        </p>
        <p className="mt-5 font-sans text-body-sm text-muted leading-relaxed">
          {project.description}
        </p>
        {project.metrics.length > 0 && (
          <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-bg-card px-3 py-3 text-center">
                <p className="font-display text-lg text-foreground leading-none">
                  {m.value}
                </p>
                <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.08em] text-subtle leading-tight">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-7 pt-5 border-t border-border flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="font-mono text-[10px] uppercase tracking-[0.1em] text-subtle">
              {tech}
            </span>
          ))}
        </div>
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-foreground transition-all duration-300 group-hover:gap-3 group-hover:text-accent whitespace-nowrap">
          {isExternal ? "Visit" : "Enquire"}
          <ArrowIcon />
        </span>
      </div>
    </a>
  );
}

function PortfolioBody() {
  return (
    <Section padding="large">
      <div className="space-y-20 md:space-y-28">
        {SECTIONS.map((section, i) => (
          <div key={section.key}>
            <Reveal>
              <div className="flex items-baseline gap-5 border-b border-border pb-5 mb-8">
                <span className="font-mono text-sm text-subtle tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display font-medium text-[clamp(1.6rem,3.4vw,2.5rem)] leading-none tracking-[-0.02em] text-foreground">
                  <span className="text-subtle">/ </span>
                  {section.label}
                </h2>
                <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">
                  {section.items.length}{" "}
                  {section.items.length === 1 ? "project" : "projects"}
                </span>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-4">
              {section.items.map((project, j) => (
                <Reveal key={project.title} delay={j * 0.06}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* End-of-listing marker */}
      <div className="mt-20 pt-6 border-t border-border flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
        <span>// End of portfolio</span>
        <span>
          {PROJECTS.length} {PROJECTS.length === 1 ? "project" : "projects"}
        </span>
      </div>
    </Section>
  );
}

function PortfolioCTA() {
  return (
    <Section padding="large">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-60 pointer-events-none" />
        <div aria-hidden className="absolute inset-0 bg-radial-fade pointer-events-none" />
        <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-6">
            [ Your project next ]
          </p>
          <h2 className="font-display font-medium text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.04] tracking-[-0.02em] text-foreground">
            Have an idea? Let&apos;s bring it to life.
          </h2>
          <p className="mt-6 mx-auto max-w-xl font-sans text-body-lg text-muted">
            AI app, intelligent agent, or full digital transformation —
            we&apos;re ready to build.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:text-on-accent transition-colors duration-300"
            >
              Start a project
              <ArrowIcon />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-lg border border-border-hover px-7 h-12 font-mono text-[13px] uppercase tracking-[0.1em] text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function ProjectsClient() {
  return (
    <>
      <MetaHeader
        word="Portfolio"
        tagline={["Selected work", "In production", "Across industries"]}
        srTitle="CoreFrame portfolio — selected work in production"
      />
      <PortfolioBody />
      <PortfolioCTA />
    </>
  );
}
