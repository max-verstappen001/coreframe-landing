export interface Capability {
  slug: string;
  title: string;
  short: string;
  oneLiner: string;
  forYouIf: string;
  /** true once /capabilities/[slug] exists as a real landing page */
  live?: boolean;
}

/** Cards route to the individual page once live, otherwise to the /capabilities overview. */
export function capabilityHref(c: Capability): string {
  return c.live ? `/capabilities/${c.slug}` : "/capabilities";
}

/**
 * The seven capability areas — the site's single commercial umbrella.
 * Most individual landing pages at /capabilities/[slug] are not yet built;
 * cards route to the /capabilities overview until each is marked `live`.
 */
export const CAPABILITIES: Capability[] = [
  {
    slug: "private-ai",
    title: "Private AI & On-Premise LLMs",
    short: "Private AI",
    oneLiner: "Run production AI on infrastructure you control.",
    forYouIf: "Your data can't leave your environment.",
    live: true,
  },
  {
    slug: "enterprise-ai",
    title: "Enterprise AI & Knowledge Systems",
    short: "Enterprise AI",
    oneLiner:
      "Turn millions of pages of documents into evidence-backed enterprise intelligence.",
    forYouIf: "Your knowledge is trapped in files.",
  },
  {
    slug: "ai-agents",
    title: "AI Agents & Autonomous Workflows",
    short: "AI Agents",
    oneLiner:
      "Tool-using agents that execute real operational workflows with human oversight.",
    forYouIf: "Automation has hit the limits of rules.",
    live: true,
  },
  {
    slug: "ai-infrastructure",
    title: "AI Infrastructure & Engineering",
    short: "AI Infrastructure",
    oneLiner: "Model serving, GPU clusters, LLMOps and evaluation built for production.",
    forYouIf: "You need infrastructure, not API glue.",
  },
  {
    slug: "software-engineering",
    title: "Software Engineering & Digital Transformation",
    short: "Software Engineering",
    oneLiner: "Enterprise platforms, cloud-native software and legacy modernization.",
    forYouIf: "AI has to plug into real systems.",
  },
  {
    slug: "ai-strategy-governance",
    title: "AI Strategy, Governance & Evaluation",
    short: "AI Strategy",
    oneLiner:
      "Readiness, roadmap, evaluation, red-teaming, governance and AI Act compliance assessment.",
    forYouIf: "You're deciding where to start.",
    live: true,
  },
  {
    slug: "edge-ai",
    title: "Edge AI & Intelligent Systems",
    short: "Edge AI",
    oneLiner: "Inference at the edge, computer vision and embedded intelligence.",
    forYouIf: "Intelligence has to run on-device or offline.",
  },
];
