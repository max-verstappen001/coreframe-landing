"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ICON_PATHS, type IconName } from "./Icons";

/**
 * Hero visual: a CoreFrame "core" (the hex mark) wired into the six surfaces
 * an enterprise actually runs on — documents, workflows, data systems,
 * infrastructure, agents and human oversight. Edges draw on reveal and
 * carry packets in both directions; the outer ring rotates slowly.
 *
 * Token-driven SVG so it follows the theme. Labels hide below `md` where
 * the graphic renders too small for 10px type.
 */

const CX = 240;
const CY = 240;
const ORBIT_R = 150;
const NODE_R = 24;
const HEX_R = 40;

const SATELLITES: { label: string; icon: IconName }[] = [
  { label: "Documents", icon: "documents" },
  { label: "Workflows", icon: "flow" },
  { label: "Data systems", icon: "database" },
  { label: "Infrastructure", icon: "server" },
  { label: "Agents", icon: "agents" },
  { label: "Oversight", icon: "users" },
];

const angleOf = (i: number) => (Math.PI / 3) * i - Math.PI / 2;
// Rounded so server and client render byte-identical attributes — raw
// trig output differs in the last ulp between Node and V8-in-browser and
// trips React's hydration check.
const round2 = (v: number) => Math.round(v * 100) / 100;
const polar = (r: number, a: number) => ({
  x: round2(CX + r * Math.cos(a)),
  y: round2(CY + r * Math.sin(a)),
});
const hexPoints = (r: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const p = polar(r, angleOf(i));
    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  }).join(" ");

export function HeroSystemVisual({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  const draw = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 0.7, delay, ease: "easeOut" as const },
        };

  const pop = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, scale: 0.85 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, delay, ease: "easeOut" as const },
        };

  return (
    <svg
      viewBox="0 0 480 480"
      role="img"
      aria-label="CoreFrame core connected to documents, workflows, data systems, infrastructure, agents and human oversight."
      className={`w-full h-auto ${className}`}
    >
      {/* Ambient glow behind the core */}
      <circle cx={CX} cy={CY} r="70" style={{ fill: "var(--color-glow-soft)" }}>
        {!reduce && (
          <animate attributeName="r" values="64;78;64" dur="5s" repeatCount="indefinite" />
        )}
      </circle>

      {/* Concentric guide rings */}
      <circle cx={CX} cy={CY} r="92" className="fill-none stroke-border" strokeWidth="1" />
      <circle
        cx={CX}
        cy={CY}
        r={ORBIT_R}
        className="fill-none stroke-border"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      {/* Slow-rotating outer ring with three tick markers */}
      <g className="fill-none stroke-border-hover" strokeWidth="1">
        <circle cx={CX} cy={CY} r="212" strokeDasharray="1 10" />
        {[0, 120, 240].map((deg) => {
          const p = polar(212, (deg * Math.PI) / 180);
          return <circle key={deg} cx={p.x} cy={p.y} r="2.5" className="fill-accent stroke-none" />;
        })}
        {!reduce && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${CX} ${CY}`}
            to={`360 ${CX} ${CY}`}
            dur="90s"
            repeatCount="indefinite"
          />
        )}
      </g>

      {/* Edges core → satellites (with travelling packets) */}
      {SATELLITES.map((s, i) => {
        const a = angleOf(i);
        const from = polar(HEX_R + 2, a);
        const to = polar(ORBIT_R - NODE_R - 2, a);
        const d = `M${from.x.toFixed(1)} ${from.y.toFixed(1)}L${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
        const inbound = i % 2 === 1;
        return (
          <g key={s.icon}>
            <motion.path
              d={d}
              className="fill-none stroke-accent"
              strokeWidth="1.25"
              strokeOpacity="0.6"
              {...draw(0.3 + i * 0.08)}
            />
            <circle r="2.5" className="fill-accent motion-reduce:hidden">
              <animateMotion
                dur="2.6s"
                begin={`${1.2 + i * 0.35}s`}
                repeatCount="indefinite"
                path={d}
                keyPoints={inbound ? "1;0" : "0;1"}
                keyTimes="0;1"
                calcMode="linear"
              />
            </circle>
          </g>
        );
      })}

      {/* Satellite nodes */}
      {SATELLITES.map((s, i) => {
        const p = polar(ORBIT_R, angleOf(i));
        return (
          <motion.g key={s.label} style={{ originX: `${p.x}px`, originY: `${p.y}px` }} {...pop(0.5 + i * 0.08)}>
            <circle
              cx={p.x}
              cy={p.y}
              r={NODE_R}
              className="fill-bg-card stroke-border-hover"
              strokeWidth="1"
            />
            <g
              transform={`translate(${(p.x - 10).toFixed(1)} ${(p.y - 10).toFixed(1)}) scale(1.25)`}
              className="fill-none stroke-accent"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {ICON_PATHS[s.icon]}
            </g>
            <text
              x={p.x}
              y={p.y + NODE_R + 16}
              textAnchor="middle"
              fontSize="10"
              letterSpacing="0.12em"
              className="font-mono fill-muted uppercase hidden md:block"
            >
              {s.label}
            </text>
          </motion.g>
        );
      })}

      {/* Core: the CoreFrame hex mark */}
      <motion.g style={{ originX: `${CX}px`, originY: `${CY}px` }} {...pop(0.1)}>
        <polygon
          points={hexPoints(HEX_R)}
          className="fill-bg-card stroke-accent"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <polygon
          points={hexPoints(HEX_R * 0.58)}
          className="fill-accent-muted stroke-accent"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <polygon points={hexPoints(HEX_R * 0.2)} className="fill-accent stroke-none" />
      </motion.g>
    </svg>
  );
}
