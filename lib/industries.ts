export interface Industry {
  slug: string;
  title: string;
  short: string;
  description: string;
  useCases: string[];
}

/** Enterprise segments and candidate applications; not a claim of client delivery in every sector. */
export const INDUSTRIES: Industry[] = [
  {
    slug: "industrial-energy",
    title: "Industrial, Energy & Engineering",
    short: "Industrial & Energy",
    description:
      "Oil & gas, EPC, manufacturing and industrial operations — where contracts, standards, certifications and engineering documents accumulate faster than anyone can search them.",
    useCases: [
      "Contract intelligence",
      "Standards & certification search",
      "Engineering knowledge systems",
      "Technical document intelligence",
      "Compliance workflows",
      "Maintenance intelligence",
    ],
  },
  {
    slug: "retail-hospitality",
    title: "Retail & Hospitality",
    short: "Retail & Hospitality",
    description:
      "Multi-location operators need operational intelligence, not another dashboard nobody opens.",
    useCases: [
      "Restaurant & operations intelligence",
      "Intelligent ordering",
      "POS integrations",
      "Demand intelligence",
      "AI customer service",
      "Multi-location systems",
    ],
  },
  {
    slug: "enterprise",
    title: "Enterprise & Professional Services",
    short: "Enterprise",
    description:
      "Internal knowledge, contracts and reporting workflows that scale poorly with headcount alone.",
    useCases: [
      "Internal knowledge copilots",
      "Enterprise search",
      "Contract intelligence",
      "Reporting automation",
      "Operations agents",
      "Internal business platforms",
    ],
  },
  {
    slug: "technology",
    title: "Technology & Digital Platforms",
    short: "Technology",
    description:
      "Teams building AI-native products need infrastructure and platform engineering, not another integration.",
    useCases: [
      "SaaS development",
      "AI-native software products",
      "AI infrastructure",
      "Platform engineering",
      "Agent infrastructure",
      "Enterprise software modernization",
    ],
  },
];
