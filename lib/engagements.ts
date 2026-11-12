/** Server-side editorial records; only approved public fields are projected below. */
export type EngagementRelationship =
  | "Direct CoreFrame engagement"
  | "Founder’s prior work"
  | "Subcontracted engagement"
  | "Technology partnership"
  | "CoreFrame product initiative"
  | "Independent product development";

export interface ClientLogo {
  src: string;
  width: number;
  height: number;
  backing: "light" | "dark";
}

export interface PublicEngagement {
  id: string;
  name: string;
  website?: string;
  industry: string;
  market?: string;
  relationship: EngagementRelationship;
  description: string;
  context?: string;
  focus?: string[];
  logo?: ClientLogo;
  capabilities: { label: string; href: string }[];
}

export interface EngagementRecord extends Omit<PublicEngagement, "relationship" | "description" | "logo"> {
  publicNameUseAuthorized: boolean;
  logoUseAuthorized?: boolean;
  logo?: ClientLogo;
  relationship?: EngagementRelationship;
  description?: string;
}

/** Founder confirmed client relationships, work scope and official-logo permission.
 * The restaurant software client stays anonymous across content, artwork and links.
 * Public context describes each client's business; scope lists CoreFrame's work.
 */
export const ENGAGEMENT_RECORDS: EngagementRecord[] = [
  {
    id: "sultanahmet", name: "Sultanahmet", website: "https://sultanahmet.ca/",
    industry: "Restaurants & hospitality", market: "Ontario, Canada",
    publicNameUseAuthorized: true, relationship: "Direct CoreFrame engagement",
    description: "Website design and engineering for Sultanahmet’s multi-location restaurant brand, bringing its locations and customer-facing information into a cohesive digital presence.",
    context: "Sultanahmet is a Turkish restaurant brand with locations across Ontario. Its website helps customers explore the brand, find a restaurant and access location-specific information.",
    focus: ["Restaurant website design and development", "Multi-location web presence", "Customer-facing brand and location information"],
    logoUseAuthorized: true,
    logo: { src: "/logos/clients/sultanahmet.png", width: 500, height: 150, backing: "light" },
    capabilities: [{ label: "Website engineering", href: "/services/forward-deployed-engineering" }],
  },
  {
    id: "wiral", name: "Wiral", website: "https://wiral.ai/",
    industry: "AI software & customer engagement", market: "GCC",
    publicNameUseAuthorized: true, relationship: "Direct CoreFrame engagement",
    description: "Designed and engineered Wiral’s website, with delivery across AI agents, retrieval-augmented generation (RAG) and human-in-the-loop workflows.",
    context: "Wiral is an AI-powered customer engagement platform for inbound conversations, lead qualification, follow-ups and appointment booking across messaging and web channels.",
    focus: ["End-to-end website design and development", "AI agent development", "Retrieval-augmented generation (RAG)", "Human-in-the-loop review workflows"],
    logoUseAuthorized: true,
    logo: { src: "/logos/clients/wiral.png", width: 188, height: 78, backing: "dark" },
    capabilities: [{ label: "Website engineering", href: "/services/forward-deployed-engineering" }, { label: "AI agents & human oversight", href: "/capabilities/ai-agents" }, { label: "RAG & knowledge systems", href: "/products#knowledge-intelligence" }],
  },
  {
    id: "restaurant-os", name: "AI-Native Restaurant OS",
    industry: "Restaurant operations & margin optimization",
    publicNameUseAuthorized: true, relationship: "Direct CoreFrame engagement",
    description: "Engineering across hardware, IoT, websites and web applications, alongside AI agents and AI governance for an AI-native restaurant operating system and margin optimization platform.",
    context: "An anonymized restaurant technology engagement focused on operations and margin optimization. The scope connects physical devices, business applications and governed AI capabilities.",
    focus: ["Hardware and IoT engineering", "Website and web application development", "AI agents", "AI governance"],
    capabilities: [{ label: "Software engineering", href: "/services/forward-deployed-engineering" }, { label: "AI agents & automation", href: "/services/enterprise-ai-agents" }, { label: "AI governance", href: "/services/ai-governance-security" }],
  },
  {
    id: "setcco", name: "SETCCO", website: "https://www.setcco.com/en",
    industry: "Industrial engineering & manufacturing", market: "Saudi Arabia",
    publicNameUseAuthorized: true, relationship: "Direct CoreFrame engagement",
    description: "Engineering delivery spanning STAAD work, reverse engineering and applied AI for SETCCO’s industrial business.",
    context: "SETCCO is a Saudi engineering and manufacturing business serving the oil and gas sector, with work across industrial equipment, fabrication and maintenance.",
    focus: ["STAAD engineering work", "Reverse engineering", "Applied AI"],
    logoUseAuthorized: true,
    logo: { src: "/logos/clients/setcco.png", width: 1750, height: 450, backing: "light" },
    capabilities: [{ label: "Engineering & reverse engineering", href: "/contact?intent=discovery&source=work-setcco-engineering" }, { label: "Applied AI", href: "/services" }],
  },
];

/** Fail closed for unapproved relationships and logo usage; no editorial flags reach visitors. */
export function publishedEngagements(records: readonly EngagementRecord[] = ENGAGEMENT_RECORDS): PublicEngagement[] {
  return records.flatMap(record => {
    if (!record.publicNameUseAuthorized || !record.relationship || !record.description?.trim() || !record.capabilities.length) return [];
    return [{
      id: record.id,
      name: record.name,
      website: record.website,
      industry: record.industry,
      market: record.market,
      relationship: record.relationship,
      description: record.description,
      context: record.context,
      focus: record.focus,
      logo: record.logoUseAuthorized ? record.logo : undefined,
      capabilities: record.capabilities,
    }];
  });
}
