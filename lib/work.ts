export interface WorkItem {
  slug: string;
  category: string;
  industry: string;
  challenge: string;
  tags: string[];
}

/**
 * Anonymized until clients approve public attribution — no fabricated
 * names or metrics. Update `slug`/detail pages once each is written up.
 */
export const WORK_ITEMS: WorkItem[] = [
  {
    slug: "private-enterprise-knowledge-system",
    category: "Private Enterprise Knowledge System",
    industry: "Energy & Industrial",
    challenge:
      "Decades of contracts, standards and engineering documents, searchable only by people who remembered where things were filed.",
    tags: ["Private AI", "Enterprise AI"],
  },
  {
    slug: "ai-native-restaurant-operations-platform",
    category: "AI-Native Restaurant Operations Platform",
    industry: "Hospitality Technology",
    challenge:
      "Multi-location operations running on disconnected systems, with no single view of demand or performance.",
    tags: ["AI Agents", "Software Engineering"],
  },
  {
    slug: "enterprise-workflow-automation",
    category: "Enterprise Workflow Automation",
    industry: "Business Operations",
    challenge:
      "Approval and reporting workflows spanning multiple systems, held together by manual handoffs.",
    tags: ["AI Agents", "AI Infrastructure"],
  },
];
