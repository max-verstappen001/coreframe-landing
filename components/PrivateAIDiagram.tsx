"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated architecture diagram for the Private AI story: enterprise data
 * flows through ingestion, a private vector store and local inference to
 * the customer's own applications — entirely inside their infrastructure
 * boundary — while the path out to public AI APIs is blocked.
 *
 * Pure SVG on design tokens, so it re-themes with the rest of the site.
 */

const NODE_W = 84;
const NODE_H = 68;
const NODE_Y = 96;
const NODE_CY = NODE_Y + NODE_H / 2;
const GAP = 19;
const FIRST_X = 32;

const NODES = [
  { id: "data", label: ["Enterprise", "data"] },
  { id: "ingest", label: ["Ingestion", "& indexing"] },
  { id: "store", label: ["Private", "vector store"] },
  { id: "infer", label: ["Local", "inference"] },
  { id: "apps", label: ["Your", "applications"] },
] as const;

type NodeId = (typeof NODES)[number]["id"];

const ICONS: Record<NodeId, JSX.Element> = {
  data: (
    <>
      <path d="M-5 -7h7l3 3v11h-10z" />
      <path d="M2 -7v3h3" />
      <path d="M-3 0h6M-3 3h6" />
    </>
  ),
  ingest: (
    <>
      <path d="M0 -7v9" />
      <path d="M-3 -1l3 3 3-3" />
      <path d="M-6 4v3h12v-3" />
    </>
  ),
  store: (
    <>
      <ellipse cx="0" cy="-5" rx="6" ry="2.5" />
      <path d="M-6 -5v10c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-10" />
      <path d="M-6 0c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5" />
    </>
  ),
  infer: (
    <>
      <rect x="-5" y="-5" width="10" height="10" rx="1.5" />
      <rect x="-2" y="-2" width="4" height="4" />
      <path d="M-2 -8v3M2 -8v3M-2 5v3M2 5v3M-8 -2h3M-8 2h3M5 -2h3M5 2h3" />
    </>
  ),
  apps: (
    <>
      <rect x="-7" y="-6" width="14" height="12" rx="1.5" />
      <path d="M-7 -2h14" />
      <path d="M-4 2h5" />
    </>
  ),
};

const nodeX = (i: number) => FIRST_X + i * (NODE_W + GAP);

// The blocked egress path drops from the inference node, crosses the
// boundary, and lands on the public-API node below.
const INFER_CX = nodeX(3) + NODE_W / 2;
const BOUNDARY_BOTTOM = 194;
const EGRESS_NODE_Y = 232;

export function PrivateAIDiagram({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  const draw = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          whileInView: { pathLength: 1, opacity: 1 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 0.5, delay, ease: "easeOut" as const },
        };

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 8 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 0.45, delay, ease: "easeOut" as const },
        };

  return (
    <svg
      viewBox="0 36 560 246"
      role="img"
      aria-label="Private AI architecture: enterprise data flows through ingestion, a private vector store and local inference to your applications, all inside your infrastructure. The path to public AI APIs is blocked."
      className={`w-full h-auto ${className}`}
    >
      <defs>
        <marker
          id="pai-arrow"
          viewBox="0 0 8 8"
          refX="7"
          refY="4"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0.5L7 4L0 7.5" className="fill-none stroke-accent" strokeWidth="1.25" />
        </marker>
      </defs>

      {/* Infrastructure boundary */}
      <motion.rect
        x="16"
        y="44"
        width="528"
        height="150"
        rx="14"
        className="fill-accent-muted stroke-accent"
        strokeWidth="1"
        strokeDasharray="4 4"
        {...draw(0)}
      />
      <motion.g {...rise(0.1)}>
        <g transform="translate(32 60)" className="fill-none stroke-accent" strokeWidth="1.25" strokeLinecap="round">
          <rect x="0" y="4" width="9" height="7" rx="1.2" />
          <path d="M2 4V2.5a2.5 2.5 0 0 1 5 0V4" />
        </g>
        <text
          x="48"
          y="70"
          fontSize="9.5"
          letterSpacing="0.14em"
          className="font-mono fill-accent uppercase"
        >
          YOUR INFRASTRUCTURE
        </text>
      </motion.g>

      {/* Flow nodes */}
      {NODES.map((n, i) => {
        const x = nodeX(i);
        const cx = x + NODE_W / 2;
        return (
          <motion.g key={n.id} {...rise(0.2 + i * 0.1)}>
            <rect
              x={x}
              y={NODE_Y}
              width={NODE_W}
              height={NODE_H}
              rx="8"
              className="fill-bg-card stroke-border"
              strokeWidth="1"
            />
            <g
              transform={`translate(${cx} ${NODE_Y + 21})`}
              className="fill-none stroke-accent"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {ICONS[n.id]}
            </g>
            <text
              x={cx}
              y={NODE_Y + 44}
              textAnchor="middle"
              fontSize="9.5"
              className="font-mono fill-foreground"
            >
              {n.label[0]}
            </text>
            <text
              x={cx}
              y={NODE_Y + 56}
              textAnchor="middle"
              fontSize="9.5"
              className="font-mono fill-muted"
            >
              {n.label[1]}
            </text>
          </motion.g>
        );
      })}

      {/* Connecting arrows + travelling packets */}
      {NODES.slice(0, -1).map((n, i) => {
        const x1 = nodeX(i) + NODE_W;
        const x2 = nodeX(i + 1);
        const d = `M${x1} ${NODE_CY}H${x2}`;
        return (
          <g key={`arrow-${n.id}`}>
            <motion.path
              d={d}
              className="fill-none stroke-accent"
              strokeWidth="1.25"
              markerEnd="url(#pai-arrow)"
              {...draw(0.3 + i * 0.1)}
            />
            <circle r="2" className="fill-accent motion-reduce:hidden">
              <animateMotion
                dur="1.6s"
                begin={`${1 + i * 0.35}s`}
                repeatCount="indefinite"
                path={d}
              />
            </circle>
          </g>
        );
      })}

      {/* Blocked egress to public APIs */}
      <motion.path
        d={`M${INFER_CX} ${NODE_Y + NODE_H}V${EGRESS_NODE_Y}`}
        className="fill-none stroke-subtle"
        strokeWidth="1"
        strokeDasharray="3 4"
        {...draw(0.8)}
      />
      <motion.g {...rise(0.9)}>
        <circle
          cx={INFER_CX}
          cy={BOUNDARY_BOTTOM}
          r="8"
          className="fill-bg"
          style={{ stroke: "var(--color-gradient-3)" }}
          strokeWidth="1.5"
        />
        <path
          d={`M${INFER_CX - 4} ${BOUNDARY_BOTTOM + 4}L${INFER_CX + 4} ${BOUNDARY_BOTTOM - 4}`}
          style={{ stroke: "var(--color-gradient-3)" }}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <text
          x={INFER_CX + 16}
          y={BOUNDARY_BOTTOM + 17}
          fontSize="9.5"
          letterSpacing="0.08em"
          className="font-mono fill-muted uppercase"
        >
          No data egress
        </text>
      </motion.g>
      <motion.g {...rise(1)}>
        <rect
          x={INFER_CX - 56}
          y={EGRESS_NODE_Y}
          width="112"
          height="40"
          rx="8"
          className="fill-none stroke-border"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <text
          x={INFER_CX}
          y={EGRESS_NODE_Y + 24}
          textAnchor="middle"
          fontSize="9.5"
          letterSpacing="0.1em"
          className="font-mono fill-subtle uppercase"
        >
          Public AI APIs
        </text>
      </motion.g>
    </svg>
  );
}
