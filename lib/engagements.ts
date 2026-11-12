/**
 * Server-side editorial records. Keep authorization notes out of public props.
 * A website or an old portfolio entry does not establish publication permission.
 */
export type EngagementRelationship =
  | "Direct CoreFrame engagement"
  | "Founder’s prior work"
  | "Subcontracted engagement"
  | "Technology partnership"
  | "CoreFrame product initiative"
  | "Independent product development";

export interface PublicEngagement {
  id: string;
  name: string;
  website?: string;
  industry: string;
  market?: string;
  relationship: EngagementRelationship;
  description: string;
  capabilities: { label: string; href: string }[];
}

export interface EngagementRecord {
  id: string;
  name: string;
  website?: string;
  industry: string;
  market?: string;
  publicNameUseAuthorized: boolean;
  relationship?: EngagementRelationship;
  description?: string;
  capabilities: { label: string; href: string }[];
}

/** Client relationships and public naming confirmed by the founder on 13 November 2026.
 * Descriptions intentionally stay at engagement/industry level; no detailed delivery claims.
 * The restaurant software client is anonymized across names, identifiers and links.
 */
export const ENGAGEMENT_RECORDS: EngagementRecord[] = [
  {
    id: "sultanahmet", name: "Sultanahmet", website: "https://sultanahmet.ca/",
    industry: "Restaurant and hospitality technology", market: "Ontario, Canada",
    publicNameUseAuthorized: true, relationship: "Direct CoreFrame engagement",
    description: "CoreFrame client engagement supporting restaurant and hospitality technology.",
    capabilities: [{ label: "Software engineering", href: "/services/forward-deployed-engineering" }],
  },
  {
    id: "wiral", name: "Wiral", website: "https://wiral.ai/",
    industry: "AI-powered software and automation",
    publicNameUseAuthorized: true, relationship: "Direct CoreFrame engagement",
    description: "CoreFrame client engagement supporting AI-powered software and automation.",
    capabilities: [{ label: "Software engineering", href: "/services/forward-deployed-engineering" }, { label: "AI agents & automation", href: "/services/enterprise-ai-agents" }],
  },
  {
    id: "restaurant-os", name: "AI-Native Restaurant OS",
    industry: "Restaurant operations and margin optimization software",
    publicNameUseAuthorized: true, relationship: "Direct CoreFrame engagement",
    description: "CoreFrame client engagement supporting an AI-native restaurant operating system and margin optimization software.",
    capabilities: [{ label: "Software engineering", href: "/services/forward-deployed-engineering" }],
  },
  {
    id: "setcco", name: "SETCCO", website: "https://www.setcco.com/en",
    industry: "Engineering and construction services", market: "Saudi Arabia",
    publicNameUseAuthorized: true, relationship: "Direct CoreFrame engagement",
    description: "CoreFrame technology delivery engagement for an engineering and construction business in Saudi Arabia.",
    capabilities: [{ label: "Software engineering", href: "/services/forward-deployed-engineering" }],
  },
];

/** Fail closed when any public relationship or contribution claim lacks approval. */
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
      capabilities: record.capabilities,
    }];
  });
}
