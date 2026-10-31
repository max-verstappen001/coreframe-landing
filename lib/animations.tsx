"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
  useAnimation,
  useScroll,
  useTransform,
  type Variant,
  type Variants,
} from "framer-motion";

/* ───────── Reveal on scroll ───────── */
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  amount?: number;
}

const directionOffset = {
  up: { y: 60 },
  down: { y: -60 },
  left: { x: 60 },
  right: { x: -60 },
  none: {},
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, ...directionOffset[direction] }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ───────── Stagger children ───────── */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
  once?: boolean;
}

export function Stagger({
  children,
  className = "",
  staggerDelay = 0.1,
  delay = 0,
  once = true,
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      transition={{ delayChildren: delay, staggerChildren: staggerDelay }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ───────── Text reveal line by line ───────── */
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  tag = "h1",
}: TextRevealProps) {
  const words = text.split(" ");
  const Tag = tag;

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.04, delayChildren: delay }}
        className="inline"
        variants={{ hidden: {}, visible: {} }}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.15em] mb-[-0.15em]">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {word}
              {i < words.length - 1 && "\u00A0"}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* ───────── Counter animation ───────── */
interface CounterProps {
  from?: number;
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function Counter({
  from = 0,
  to,
  suffix = "",
  prefix = "",
  className = "",
  duration = 2,
}: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(from + (to - from) * eased);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

/* ───────── Parallax wrapper ───────── */
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({
  children,
  className = "",
  speed = 0.5,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -60, speed * 60]);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

/* ───────── Scroll indicator (animated chevron) ───────── */
interface ScrollIndicatorProps {
  label?: string;
  className?: string;
}

export function ScrollIndicator({
  label = "Scroll to explore",
  className = "",
}: ScrollIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-center gap-3 font-display text-caption uppercase tracking-[0.2em] text-muted ${className}`}
    >
      <span>{label}</span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block"
        aria-hidden
      >
        ↓
      </motion.span>
    </motion.div>
  );
}

/* ───────── Blur reveal on scroll ───────── */
interface BlurRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function BlurReveal({
  children,
  className = "",
  delay = 0,
  duration = 1.0,
}: BlurRevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ───────── Horizontal line that draws in on scroll ───────── */
interface LineMaskProps {
  className?: string;
  delay?: number;
  duration?: number;
}

export function LineMask({
  className = "",
  delay = 0,
  duration = 1.2,
}: LineMaskProps) {
  return (
    <motion.div
      className={`origin-left h-[1px] bg-border ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

/* ───────── Cursor spotlight (radial follow) ───────── */
interface CursorSpotlightProps {
  className?: string;
  color?: string;
  size?: number;
}

export function CursorSpotlight({
  className = "",
  color = "rgba(200, 255, 0, 0.10)",
  size = 500,
}: CursorSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--spot-x", `${x}px`);
      el.style.setProperty("--spot-y", `${y}px`);
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        background: `radial-gradient(${size}px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${color}, transparent 60%)`,
        transition: "background 80ms linear",
      }}
    />
  );
}

/* ───────── Horizontal marquee band (full-width text strip) ───────── */
interface MarqueeBandProps {
  items: string[];
  speed?: number;
  className?: string;
  separator?: string;
}

export function MarqueeBand({
  items,
  speed = 40,
  className = "",
  separator = "✦",
}: MarqueeBandProps) {
  const loop = [...items, ...items, ...items];
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      aria-hidden
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center font-heading text-display-md md:text-display-lg text-foreground/90 px-8"
          >
            {item}
            <span className="mx-8 text-accent text-2xl">{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ───────── Vertical rolodex ticker (cycles through items) ───────── */
interface TickerStripProps {
  items: string[];
  interval?: number;
  className?: string;
}

export function TickerStrip({
  items,
  interval = 2400,
  className = "",
}: TickerStripProps) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <motion.span
      layout
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`relative inline-block overflow-hidden align-baseline text-accent ${className}`}
      style={{ lineHeight: 1.2 }}
    >
      {/* Spacer sized to the current item — width animates as items change */}
      <span className="invisible inline-block whitespace-nowrap">{items[i]}</span>
      {/* Absolute-positioned cycling label */}
      <span className="absolute inset-0 flex items-center justify-start whitespace-nowrap">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={i}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            {items[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.span>
  );
}

/* ───────── Animated gradient shine on text ───────── */
interface GradientShineProps {
  children: ReactNode;
  className?: string;
}

export function GradientShine({ children, className = "" }: GradientShineProps) {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(110deg, var(--color-foreground) 30%, var(--color-accent) 50%, var(--color-foreground) 70%)",
        backgroundSize: "200% 100%",
        animation: "shine 3.5s ease-in-out infinite",
      }}
    >
      {children}
    </span>
  );
}

/* ───────── Noise overlay (film grain via SVG) ───────── */
export function NoiseOverlay({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-[1] mix-blend-overlay opacity-[0.06] ${className}`}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
      }}
    />
  );
}

/* ───────── Magnetic hover effect ───────── */
interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({
  children,
  className = "",
  strength = 0.3,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out-expo ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
