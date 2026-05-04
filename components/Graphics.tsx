"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";

/* ────────────────────────── Hero Mark (rotating concentric polygons) ────────────────────────── */
export function HeroMark({ className = "" }: { className?: string }) {
  return (
    <div
      className={clsx(
        "pointer-events-none relative aspect-square w-full",
        className
      )}
      aria-hidden
    >
      {/* outer ring */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="98"
            fill="none"
            stroke="var(--color-border-hover)"
            strokeWidth="0.5"
            strokeDasharray="2 6"
          />
        </svg>
      </motion.div>

      {/* mid square */}
      <motion.div
        className="absolute inset-[10%]"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect
            x="20"
            y="20"
            width="160"
            height="160"
            fill="none"
            stroke="var(--color-border-hover)"
            strokeWidth="0.6"
          />
          <rect
            x="40"
            y="40"
            width="120"
            height="120"
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="0.6"
            transform="rotate(45 100 100)"
          />
        </svg>
      </motion.div>

      {/* inner core */}
      <motion.div
        className="absolute inset-[35%]"
        animate={{ rotate: 360, scale: [1, 1.06, 1] }}
        transition={{
          rotate: { duration: 24, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,4 95,75 5,75"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1.2"
          />
          <circle cx="50" cy="50" r="3" fill="var(--color-accent)" />
        </svg>
      </motion.div>

      {/* corner ticks */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full text-subtle"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        {[
          [0, 0],
          [200, 0],
          [0, 200],
          [200, 200],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <line x1="0" y1="0" x2={x === 0 ? 12 : -12} y2="0" />
            <line x1="0" y1="0" x2="0" y2={y === 0 ? 12 : -12} />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ────────────────────────── Dot Grid (decorative background) ────────────────────────── */
export function DotGrid({
  className = "",
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      aria-hidden
      className={clsx("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "radial-gradient(var(--color-border-hover) 1px, transparent 1px)",
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}

/* ────────────────────────── Wave Divider (animated SVG line) ────────────────────────── */
export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <div className={clsx("relative w-full overflow-hidden", className)} aria-hidden>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-12"
      >
        <motion.path
          d="M0,30 C200,5 400,55 600,30 C800,5 1000,55 1200,30"
          fill="none"
          stroke="var(--color-border-hover)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M0,30 C200,5 400,55 600,30 C800,5 1000,55 1200,30"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1"
          strokeDasharray="4 8"
          animate={{ strokeDashoffset: [0, -24] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

/* ────────────────────────── ASCII Terminal Block ────────────────────────── */
export function AsciiBlock({ className = "" }: { className?: string }) {
  const lines = [
    "$ coreframe init --mode=production",
    "→ scoping engagement........... ok",
    "→ matching senior team......... ok",
    "→ shipping schedule............ locked",
    "→ status....................... building",
  ];

  return (
    <div
      className={clsx(
        "relative rounded-lg border border-border bg-bg-card font-mono text-xs md:text-sm overflow-hidden",
        className
      )}
    >
      {/* terminal chrome */}
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-subtle/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-subtle/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-subtle/30" />
        <span className="ml-3 font-display text-caption uppercase tracking-[0.2em] text-subtle">
          coreframe — bash
        </span>
      </div>
      {/* lines */}
      <div className="p-5 md:p-6 space-y-1.5">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.18 }}
            className={clsx(
              i === lines.length - 1 ? "text-accent" : "text-muted",
              "whitespace-pre"
            )}
          >
            {line}
            {i === lines.length - 1 && (
              <motion.span
                aria-hidden
                className="inline-block w-2 h-4 ml-1 align-middle bg-accent"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────── Statement Visuals ────────────────────────── */

// (A) Code nodes — Brief → Build → Ship loop
type CnPhase = "brief" | "to-build" | "build" | "to-ship" | "ship" | "to-brief";
const CN_PHASES: CnPhase[] = ["brief", "to-build", "build", "to-ship", "ship", "to-brief"];
const CN_DURATIONS: Record<CnPhase, number> = {
  brief: 2000,
  "to-build": 850,
  build: 2200,
  "to-ship": 850,
  ship: 2000,
  "to-brief": 950,
};
const CN_POS = {
  brief: { x: 37, y: 38 },
  build: { x: 163, y: 38 },
  ship: { x: 100, y: 104 },
};

export function CodeNodesGraphic({ className = "" }: { className?: string }) {
  const [phase, setPhase] = useState<CnPhase>("brief");

  useEffect(() => {
    const idx = CN_PHASES.indexOf(phase);
    const next = CN_PHASES[(idx + 1) % CN_PHASES.length];
    const id = window.setTimeout(() => setPhase(next), CN_DURATIONS[phase]);
    return () => window.clearTimeout(id);
  }, [phase]);

  const target =
    phase === "to-build" || phase === "build"
      ? CN_POS.build
      : phase === "to-ship" || phase === "ship"
      ? CN_POS.ship
      : CN_POS.brief;

  const traveling =
    phase === "to-build" || phase === "to-ship" || phase === "to-brief";
  const moveDuration = traveling ? CN_DURATIONS[phase] / 1000 : 0.4;

  return (
    <svg
      viewBox="0 0 200 140"
      className={clsx("w-full h-auto", className)}
      fill="none"
      aria-hidden
    >
      <defs>
        <filter id="cn-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
      </defs>

      {/* Connecting lines (triangle) */}
      <line
        x1="64" y1="38" x2="136" y2="38"
        stroke="var(--color-border-hover)" strokeWidth="0.6" strokeDasharray="2 2.5"
      />
      <line
        x1="151.9" y1="54" x2="120.4" y2="88"
        stroke="var(--color-border-hover)" strokeWidth="0.6" strokeDasharray="2 2.5"
      />
      <line
        x1="79.6" y1="88" x2="48.1" y2="54"
        stroke="var(--color-border-hover)" strokeWidth="0.6" strokeDasharray="2 2.5"
      />

      {/* Boxes + labels */}
      <CnBox x={10} y={22} w={54} h={32} active={phase === "brief"} />
      <CnBox x={136} y={22} w={54} h={32} active={phase === "build"} />
      <CnBox x={73} y={88} w={54} h={32} active={phase === "ship"} />

      <CnLabel x={37} y={28} text="BRIEF" active={phase === "brief"} />
      <CnLabel x={163} y={28} text="BUILD" active={phase === "build"} />
      <CnLabel x={100} y={94} text="SHIP" active={phase === "ship"} />

      {/* Trailing glow during travel */}
      <AnimatePresence>
        {traveling && (
          <motion.circle
            key="trail"
            r="4"
            fill="var(--color-accent)"
            initial={{ opacity: 0, cx: target.x, cy: target.y }}
            animate={{ opacity: 0.18, cx: target.x, cy: target.y }}
            exit={{ opacity: 0 }}
            transition={{ duration: moveDuration, ease: [0.4, 0, 0.2, 1] }}
            style={{ filter: "url(#cn-glow)" }}
          />
        )}
      </AnimatePresence>

      {/* Moving product */}
      <motion.g
        animate={{ x: target.x, y: target.y }}
        transition={{ duration: moveDuration, ease: [0.4, 0, 0.2, 1] }}
      >
        <CnProduct phase={phase} />
      </motion.g>
    </svg>
  );
}

function CnBox({
  x, y, w, h, active,
}: { x: number; y: number; w: number; h: number; active: boolean }) {
  return (
    <motion.rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={4}
      fill="var(--color-bg-elevated)"
      animate={{
        stroke: active ? "var(--color-accent)" : "var(--color-border-hover)",
        strokeWidth: active ? 1 : 0.7,
        opacity: active ? 1 : 0.55,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={active ? { filter: "drop-shadow(0 0 3px var(--color-accent))" } : undefined}
    />
  );
}

function CnLabel({
  x, y, text, active,
}: { x: number; y: number; text: string; active: boolean }) {
  return (
    <motion.text
      x={x}
      y={y}
      textAnchor="middle"
      style={{ font: "6.5px var(--font-display)", letterSpacing: "0.22em", fontWeight: 700 }}
      animate={{
        fill: active ? "var(--color-accent)" : "var(--color-muted)",
        opacity: active ? 1 : 0.6,
      }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.text>
  );
}

function CnProduct({ phase }: { phase: CnPhase }) {
  const isDot = phase === "brief" || phase === "to-build" || phase === "to-brief";
  const isShape = phase === "build" || phase === "to-ship";
  const isPolished = phase === "ship";

  return (
    <AnimatePresence>
      {isDot && <CnDotForm key="dot" typing={phase === "brief"} />}
      {isShape && <CnShapeForm key="shape" />}
      {isPolished && <CnPolishedForm key="polish" />}
    </AnimatePresence>
  );
}

function CnDotForm({ typing }: { typing: boolean }) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.4 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <motion.circle
        r={2.2}
        fill="var(--color-accent)"
        animate={{ r: [2.2, 2.9, 2.2], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "url(#cn-glow)" }}
      />
      <AnimatePresence>
        {typing && (
          <motion.g
            key="typing"
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={i}
                cx={(i - 1) * 3.6}
                cy={9.5}
                r={0.85}
                fill="var(--color-accent)"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.g>
        )}
      </AnimatePresence>
    </motion.g>
  );
}

function CnShapeForm() {
  const cubes = [
    { x: -3.2, y: -3.2, fill: "var(--color-accent)", delay: 0 },
    { x: 0.8, y: -3.2, fill: "var(--color-foreground)", delay: 0.1 },
    { x: -3.2, y: 0.8, fill: "var(--color-foreground)", delay: 0.2 },
    { x: 0.8, y: 0.8, fill: "var(--color-accent)", delay: 0.3 },
  ];
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {cubes.map((c, i) => (
          <motion.rect
            key={i}
            x={c.x}
            y={c.y}
            width={2.4}
            height={2.4}
            fill={c.fill}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: i % 2 === 0 ? 1 : 0.7 }}
            transition={{ duration: 0.35, delay: c.delay, ease: "easeOut" }}
          />
        ))}
      </motion.g>
    </motion.g>
  );
}

function CnPolishedForm() {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.circle
        r={3}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth={0.7}
        animate={{ r: [3, 7], opacity: [0.55, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
      />
      <circle r={2.8} fill="var(--color-accent)" style={{ filter: "url(#cn-glow)" }} />
      <motion.path
        d="M -1.4 0.1 L -0.3 1.2 L 1.6 -1.0"
        stroke="var(--color-bg)"
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      />
    </motion.g>
  );
}

// (B) Neural graph — nodes pulsing in a network
export function NeuralGraphGraphic({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 20, y: 30 },
    { x: 20, y: 70 },
    { x: 20, y: 110 },
    { x: 100, y: 20 },
    { x: 100, y: 70 },
    { x: 100, y: 120 },
    { x: 180, y: 50 },
    { x: 180, y: 90 },
  ];
  const edges: [number, number][] = [
    [0, 3], [0, 4], [1, 3], [1, 4], [1, 5],
    [2, 4], [2, 5], [3, 6], [4, 6], [4, 7], [5, 7],
  ];

  return (
    <svg
      viewBox="0 0 200 140"
      className={clsx("w-full h-auto text-muted", className)}
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          strokeWidth="0.5"
          stroke="var(--color-border-hover)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.06 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.x === 100 ? 4 : 3}
          fill={n.x === 100 ? "var(--color-accent)" : "var(--color-foreground)"}
          stroke="none"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        />
      ))}
      {/* pulsing rings on hidden layer */}
      {nodes
        .filter((n) => n.x === 100)
        .map((n, i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx={n.x}
            cy={n.y}
            r="4"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="0.6"
            animate={{ r: [4, 14], opacity: [0.6, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut",
            }}
          />
        ))}
    </svg>
  );
}

// (C) Interlocking frames — two squares overlapping
export function InterlockGraphic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 140"
      className={clsx("w-full h-auto text-muted", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      aria-hidden
    >
      <motion.rect
        x="30"
        y="30"
        width="80"
        height="80"
        initial={{ x: 5, opacity: 0 }}
        whileInView={{ x: 30, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.rect
        x="90"
        y="30"
        width="80"
        height="80"
        stroke="var(--color-accent)"
        initial={{ x: 115, opacity: 0 }}
        whileInView={{ x: 90, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* overlap diagonal hatching */}
      <defs>
        <pattern
          id="hatch"
          patternUnits="userSpaceOnUse"
          width="6"
          height="6"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="6"
            stroke="var(--color-accent)"
            strokeWidth="0.6"
          />
        </pattern>
      </defs>
      <motion.rect
        x="90"
        y="30"
        width="20"
        height="80"
        fill="url(#hatch)"
        stroke="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      {/* labels */}
      <text
        x="70"
        y="125"
        textAnchor="middle"
        className="fill-subtle"
        style={{ font: "8px var(--font-display)", letterSpacing: "0.1em" }}
      >
        YOU
      </text>
      <text
        x="130"
        y="125"
        textAnchor="middle"
        className="fill-accent"
        style={{ font: "8px var(--font-display)", letterSpacing: "0.1em" }}
      >
        US
      </text>
    </svg>
  );
}
