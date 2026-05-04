"use client";

import { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button, ArrowRight } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionMarker } from "@/components/SectionMarker";
import { NumberedItem } from "@/components/NumberedItem";
import { CategoryBadge } from "@/components/CategoryBadge";
import { Accordion } from "@/components/Accordion";
import {
  Reveal,
  Stagger,
  StaggerItem,
  TextReveal,
  BlurReveal,
  LineMask,
  ScrollIndicator,
  CursorSpotlight,
  MarqueeBand,
  TickerStrip,
  GradientShine,
  Counter,
  Magnetic,
  Parallax,
} from "@/lib/animations";
import {
  HeroMark,
  DotGrid,
  WaveDivider,
  AsciiBlock,
  CodeNodesGraphic,
  NeuralGraphGraphic,
  InterlockGraphic,
} from "@/components/Graphics";

/* ────────────────────────── Demo Frame ────────────────────────── */
function Demo({
  id,
  title,
  description,
  code,
  children,
  fullBleed = false,
}: {
  id: string;
  title: string;
  description?: string;
  code?: string;
  children: ReactNode;
  fullBleed?: boolean;
}) {
  return (
    <div id={id} className="border-t border-border py-16 md:py-20 first:border-t-0">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-8">
        <div className="md:col-span-3">
          <NumberedItem index={0} label={title} />
        </div>
        <div className="md:col-span-9">
          {description && (
            <p className="font-sans text-body-sm text-muted leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          {code && (
            <pre className="mt-4 inline-block rounded-md border border-border bg-bg-card px-3 py-2 font-mono text-[12px] text-muted">
              {code}
            </pre>
          )}
        </div>
      </div>
      <div
        className={
          fullBleed
            ? "relative -mx-6 md:-mx-10 border border-border rounded-2xl bg-bg-card overflow-hidden"
            : "relative rounded-2xl border border-border bg-bg-card p-8 md:p-10"
        }
      >
        {children}
      </div>
    </div>
  );
}

const TOC = [
  { id: "section-marker", label: "SectionMarker" },
  { id: "numbered-item", label: "NumberedItem" },
  { id: "category-badge", label: "CategoryBadge" },
  { id: "accordion", label: "Accordion" },
  { id: "buttons", label: "Buttons" },
  { id: "ticker", label: "TickerStrip" },
  { id: "marquee", label: "MarqueeBand" },
  { id: "scroll-indicator", label: "ScrollIndicator" },
  { id: "blur-reveal", label: "BlurReveal" },
  { id: "text-reveal", label: "TextReveal" },
  { id: "counter", label: "Counter" },
  { id: "gradient-shine", label: "GradientShine" },
  { id: "line-mask", label: "LineMask" },
  { id: "cursor-spotlight", label: "CursorSpotlight" },
  { id: "magnetic", label: "Magnetic" },
  { id: "parallax", label: "Parallax" },
  { id: "stagger", label: "Stagger" },
  { id: "hero-mark", label: "HeroMark" },
  { id: "graphics", label: "Statement Graphics" },
  { id: "ascii-block", label: "AsciiBlock" },
  { id: "wave-divider", label: "WaveDivider" },
  { id: "dot-grid", label: "DotGrid" },
  { id: "ghost-numeral", label: "ghost-numeral / scanline" },
];

/* ────────────────────────── Page ────────────────────────── */
export default function ShowcaseClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 overflow-hidden">
        <DotGrid className="opacity-40" />
        <Container>
          <div className="flex items-center justify-between font-display text-caption uppercase tracking-[0.2em] text-muted mb-12">
            <span>You are now viewing</span>
            <span className="hidden md:inline text-subtle">
              CRFRM / SHOWCASE / 2026
            </span>
          </div>
          <SectionMarker active="A" className="mb-6" />
          <TextReveal
            text="Component & graphic showcase."
            tag="h1"
            className="font-heading text-display-xl text-foreground"
          />
          <BlurReveal delay={0.6} className="mt-8 max-w-2xl">
            <p className="font-sans text-body-lg text-muted leading-relaxed">
              Every primitive, animation, and graphic — with sample usage. Use
              this page to pick pieces and drop them into the rest of the site.
            </p>
          </BlurReveal>
        </Container>
      </section>

      {/* Table of contents */}
      <Section padding="default" background="elevated">
        <Reveal>
          <h2 className="font-display text-caption uppercase tracking-[0.2em] text-muted mb-6">
            Index — {TOC.length} items
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
            {TOC.map((item, i) => (
              <li key={item.id} className="font-display text-sm">
                <a
                  href={`#${item.id}`}
                  className="text-muted hover:text-accent transition-colors duration-300 tabular-nums"
                >
                  <span className="text-subtle mr-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section padding="large">
        {/* SectionMarker */}
        <Demo
          id="section-marker"
          title="SectionMarker"
          description="Bracketed letter index — shows the active section against its siblings."
          code='<SectionMarker active="A" />'
        >
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <SectionMarker active="A" />
            <SectionMarker active="B" />
            <SectionMarker active="C" />
            <SectionMarker active="D" />
          </div>
        </Demo>

        {/* NumberedItem */}
        <Demo
          id="numbered-item"
          title="NumberedItem"
          description="Padded numeric index with optional label / total — used for lists, headers, micro-labels."
          code='<NumberedItem index={1} total={4} label="EMAIL" />'
        >
          <div className="space-y-3">
            <NumberedItem index={1} label="EMAIL" />
            <NumberedItem index={2} label="WHATSAPP" />
            <NumberedItem index={3} total={5} label="DISCOVERY" />
            <NumberedItem index={0} label="START" />
          </div>
        </Demo>

        {/* CategoryBadge */}
        <Demo
          id="category-badge"
          title="CategoryBadge"
          description="Curly-brace pill for project categories with status."
          code='<CategoryBadge category="AI Agents" status="live" />'
        >
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            <CategoryBadge category="AI Apps" status="live" />
            <CategoryBadge category="AI Agents" status="development" />
            <CategoryBadge category="Research" status="prototype" />
            <CategoryBadge category="Implementation" status="ongoing" />
            <CategoryBadge category="Internal" status="completed" />
            <CategoryBadge category="Misc" />
          </div>
        </Demo>

        {/* Accordion */}
        <Demo
          id="accordion"
          title="Accordion"
          description="Collapsible Q&A list with + → × rotate."
          code='<Accordion items={[{question, answer}]} />'
        >
          <Accordion
            items={[
              {
                question: "What is the showcase page?",
                answer:
                  "A single page demonstrating every reusable primitive and graphic with sample usage and a code snippet.",
              },
              {
                question: "Can I use these in other pages?",
                answer:
                  "Yes — every component is exported. Import from @/components/* or @/lib/animations and drop in.",
              },
              {
                question: "Are these themed?",
                answer:
                  "All graphics use CSS variables (--color-foreground, --color-accent, --color-border-hover) so light / dark themes both work.",
              },
            ]}
          />
        </Demo>

        {/* Buttons */}
        <Demo
          id="buttons"
          title="Buttons"
          description="Primary, secondary, ghost variants — wrap in Magnetic for cursor pull."
          code='<Button variant="primary" icon={<ArrowRight />}>...</Button>'
        >
          <div className="flex flex-wrap gap-4">
            <Magnetic strength={0.12}>
              <Button variant="primary" icon={<ArrowRight />}>
                Primary
              </Button>
            </Magnetic>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost" icon={<ArrowRight />}>
              Ghost
            </Button>
          </div>
        </Demo>

        {/* TickerStrip */}
        <Demo
          id="ticker"
          title="TickerStrip"
          description="Vertical rolodex that cycles through phrases. Width is held by the longest item."
          code='<TickerStrip items={[...]} interval={2400} />'
        >
          <div className="flex flex-wrap items-baseline gap-x-3 font-heading text-2xl md:text-3xl text-foreground">
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
          </div>
        </Demo>

        {/* MarqueeBand */}
        <Demo
          id="marquee"
          title="MarqueeBand"
          description="Full-width display-size text strip scrolling horizontally."
          code='<MarqueeBand items={[...]} speed={45} separator="✦" />'
          fullBleed
        >
          <div className="py-6">
            <MarqueeBand
              items={["Strategy", "Engineering", "Production", "Shipped", "Iterating"]}
              speed={50}
            />
          </div>
        </Demo>

        {/* ScrollIndicator */}
        <Demo
          id="scroll-indicator"
          title="ScrollIndicator"
          description="Animated chevron + label — pin to bottom of hero sections."
          code='<ScrollIndicator label="Scroll to explore" />'
        >
          <ScrollIndicator />
        </Demo>

        {/* BlurReveal */}
        <Demo
          id="blur-reveal"
          title="BlurReveal"
          description="Blur(10px) → blur(0) on scroll-in. Calmer than translate-up."
          code='<BlurReveal delay={0.3}>...</BlurReveal>'
        >
          <BlurReveal>
            <p className="font-heading text-2xl text-foreground">
              Whatever you wrap will fade in from a blur on scroll.
            </p>
          </BlurReveal>
        </Demo>

        {/* TextReveal */}
        <Demo
          id="text-reveal"
          title="TextReveal"
          description="Word-by-word reveal — each word translates up from a clipped mask."
          code='<TextReveal text="Hello world" tag="h2" />'
        >
          <TextReveal
            text="Each word reveals on its own."
            tag="h3"
            className="font-heading text-display-sm text-foreground"
          />
        </Demo>

        {/* Counter */}
        <Demo
          id="counter"
          title="Counter"
          description="Eased number count-up on scroll into view. Pair with metric labels."
          code='<Counter to={99} suffix="%" duration={1.6} />'
        >
          <div className="grid grid-cols-3 gap-6 max-w-xl">
            {[
              { to: 100, suffix: "%", label: "On time" },
              { to: 12, suffix: "wk", label: "Concept to ship" },
              { to: 99, suffix: "%", label: "Reliability" },
            ].map((m) => (
              <div key={m.label}>
                <div className="font-heading text-3xl md:text-4xl text-foreground tabular-nums">
                  <Counter to={m.to} suffix={m.suffix} />
                </div>
                <div className="mt-2 font-display text-caption uppercase text-subtle">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Demo>

        {/* GradientShine */}
        <Demo
          id="gradient-shine"
          title="GradientShine"
          description="Animated linear-gradient sweep across text. Use sparingly on a single hero word."
          code='<GradientShine>Headline</GradientShine>'
        >
          <p className="font-heading text-3xl">
            <GradientShine>Built with care.</GradientShine>
          </p>
        </Demo>

        {/* LineMask */}
        <Demo
          id="line-mask"
          title="LineMask"
          description="Horizontal divider that draws in left → right on scroll."
          code='<LineMask delay={0.3} />'
        >
          <div className="space-y-6">
            <LineMask />
            <LineMask delay={0.2} className="max-w-[200px]" />
            <LineMask delay={0.4} className="max-w-[80px] bg-accent" />
          </div>
        </Demo>

        {/* CursorSpotlight */}
        <Demo
          id="cursor-spotlight"
          title="CursorSpotlight"
          description="Radial light follows the cursor. Hover the panel to see it."
          code='<CursorSpotlight color="rgba(200,255,0,0.1)" size={500} />'
          fullBleed
        >
          <div className="relative h-64 flex items-center justify-center">
            <CursorSpotlight color="rgba(200, 255, 0, 0.18)" size={400} />
            <span className="relative font-heading text-2xl text-foreground">
              Move your cursor here.
            </span>
          </div>
        </Demo>

        {/* Magnetic */}
        <Demo
          id="magnetic"
          title="Magnetic"
          description="Element follows the cursor toward its center on hover. Best on buttons / icons."
          code='<Magnetic strength={0.2}>...</Magnetic>'
        >
          <div className="flex gap-8 items-center">
            <Magnetic strength={0.25}>
              <Button variant="primary" icon={<ArrowRight />}>
                Pull me
              </Button>
            </Magnetic>
            <Magnetic strength={0.4}>
              <span className="font-heading text-2xl text-foreground">
                ✦ magnetic
              </span>
            </Magnetic>
          </div>
        </Demo>

        {/* Parallax */}
        <Demo
          id="parallax"
          title="Parallax"
          description="Scroll-driven Y translation — wrap any block to drift it as you scroll."
          code='<Parallax speed={0.5}>...</Parallax>'
        >
          <div className="grid grid-cols-3 gap-6">
            <Parallax speed={-0.4}>
              <div className="aspect-[3/4] rounded-xl border border-border bg-bg flex items-center justify-center font-display text-caption text-muted">
                drift up
              </div>
            </Parallax>
            <Parallax speed={0.2}>
              <div className="aspect-[3/4] rounded-xl border border-border bg-bg flex items-center justify-center font-display text-caption text-muted">
                slow drift
              </div>
            </Parallax>
            <Parallax speed={0.6}>
              <div className="aspect-[3/4] rounded-xl border border-border bg-bg flex items-center justify-center font-display text-caption text-muted">
                fast drift
              </div>
            </Parallax>
          </div>
        </Demo>

        {/* Stagger */}
        <Demo
          id="stagger"
          title="Stagger / StaggerItem"
          description="Children reveal one after the other on scroll."
          code='<Stagger><StaggerItem>...</StaggerItem></Stagger>'
        >
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
            {["alpha", "beta", "gamma", "delta"].map((w) => (
              <StaggerItem key={w}>
                <div className="rounded-xl border border-border bg-bg p-6 font-heading text-xl text-foreground">
                  {w}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Demo>

        {/* HeroMark */}
        <Demo
          id="hero-mark"
          title="HeroMark"
          description="Big animated SVG mark — rotating outer ring, mid square, pulsing accent triangle, corner ticks."
          code='<HeroMark />'
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square max-w-[320px] mx-auto md:mx-0">
              <HeroMark />
            </div>
            <p className="font-sans text-body-sm text-muted">
              Place full-size in the hero (right side or background, fade
              opacity to ~0.5). Pair with parallax for depth.
            </p>
          </div>
        </Demo>

        {/* Statement Graphics */}
        <Demo
          id="graphics"
          title="Statement Graphics"
          description="Three abstract diagrams — one per statement block."
          code='<CodeNodesGraphic /> <NeuralGraphGraphic /> <InterlockGraphic />'
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <p className="font-display text-caption uppercase text-subtle mb-3">
                CodeNodesGraphic
              </p>
              <CodeNodesGraphic />
            </div>
            <div>
              <p className="font-display text-caption uppercase text-subtle mb-3">
                NeuralGraphGraphic
              </p>
              <NeuralGraphGraphic />
            </div>
            <div>
              <p className="font-display text-caption uppercase text-subtle mb-3">
                InterlockGraphic
              </p>
              <InterlockGraphic />
            </div>
          </div>
        </Demo>

        {/* AsciiBlock */}
        <Demo
          id="ascii-block"
          title="AsciiBlock"
          description="Mac-chrome terminal — lines stagger-type in, blinking accent cursor on the last line."
          code='<AsciiBlock />'
        >
          <AsciiBlock />
        </Demo>

        {/* WaveDivider */}
        <Demo
          id="wave-divider"
          title="WaveDivider"
          description="Animated SVG wave — draws on scroll, accent dashes march continuously."
          code='<WaveDivider />'
          fullBleed
        >
          <div className="bg-bg-elevated/30 py-4">
            <WaveDivider />
          </div>
        </Demo>

        {/* DotGrid */}
        <Demo
          id="dot-grid"
          title="DotGrid"
          description="Decorative radial-dot pattern — drop as an absolute background."
          code='<DotGrid size={20} />'
          fullBleed
        >
          <div className="relative h-48">
            <DotGrid size={18} />
            <div className="relative h-full flex items-center justify-center font-heading text-2xl text-foreground">
              Section background.
            </div>
          </div>
        </Demo>

        {/* ghost-numeral / scanline */}
        <Demo
          id="ghost-numeral"
          title=".ghost-numeral &amp; .bg-scanline"
          description="CSS utilities — giant outlined numerals and a sweeping scanline."
          code='<span className="ghost-numeral">01</span>'
          fullBleed
        >
          <div className="relative h-72 overflow-hidden">
            <span
              aria-hidden
              className="ghost-numeral absolute -right-6 top-1/2 -translate-y-1/2 opacity-40"
            >
              01
            </span>
            <div className="bg-scanline absolute inset-0 bg-bg-elevated" />
            <div className="relative h-full flex items-center justify-center font-heading text-2xl text-foreground">
              Background numeral + scanline overlay.
            </div>
          </div>
        </Demo>
      </Section>

      {/* Footer note */}
      <Section padding="default" background="elevated">
        <div className="text-center">
          <NumberedItem
            index={0}
            label="END OF SHOWCASE"
            className="justify-center mb-4"
          />
          <p className="font-sans text-body-sm text-muted">
            All primitives live in <code className="font-mono text-foreground">@/lib/animations</code>,{" "}
            <code className="font-mono text-foreground">@/components</code>, and{" "}
            <code className="font-mono text-foreground">@/components/Graphics</code>.
          </p>
        </div>
      </Section>
    </>
  );
}
