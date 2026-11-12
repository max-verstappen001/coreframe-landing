export interface WorkItem {
  slug: string;
  category: string;
  industry: string;
  challenge: string;
  context: string;
  contribution: string;
  approach: string;
  value: string;
  tags: string[];
}

/** Illustrative scenarios only. No client attribution or delivery outcomes are asserted. */
export const WORK_ITEMS: WorkItem[] = [
  {
    slug: "private-enterprise-knowledge-system",
    category: "Private Enterprise Knowledge System",
    industry: "Energy & Industrial",
    challenge: "Teams need to find relevant contracts, standards and engineering information across disconnected document collections.",
    context: "An illustrative environment with confidential documents, different access permissions and a need to check the source behind an answer.",
    contribution: "Proposed scope: document ingestion, permission-aware retrieval and a knowledge-assistance interface with source references.",
    approach: "Establish access rules and representative questions, evaluate retrieval and answer grounding, then integrate a limited workflow before broader rollout.",
    value: "Expected value: less time searching and more consistent access to relevant information. Search usefulness and source coverage would be evaluated during a pilot.",
    tags: ["Private AI", "Enterprise search", "RAG"],
  },
  {
    slug: "restaurant-operations-platform",
    category: "Connected Restaurant Operations",
    industry: "Hospitality Technology",
    challenge: "Multi-location teams need a coherent view of demand and operating performance across existing systems.",
    context: "An illustrative hospitality workflow in which managers reconcile information from several applications before making daily decisions.",
    contribution: "Proposed scope: application integrations, a shared operational view and a narrowly defined forecasting or reporting workflow.",
    approach: "Map data ownership and quality, connect a small set of approved sources, reconcile outputs and validate usefulness with operators.",
    value: "Expected value: fewer manual reporting steps and a clearer operating picture. Time saved and forecast usefulness would need measurement against a baseline.",
    tags: ["Systems integration", "Operational analytics", "Product engineering"],
  },
  {
    slug: "enterprise-workflow-automation",
    category: "Governed Workflow Automation",
    industry: "Business Operations",
    challenge: "Approval and reporting tasks cross multiple systems and depend on repeated manual handoffs.",
    context: "An illustrative workflow with different user roles, review checkpoints and consequential actions that need explicit approval.",
    contribution: "Proposed scope: agent orchestration, enterprise integrations, permission boundaries and operator-visible execution records.",
    approach: "Define allowed actions and approval points, test failure paths, evaluate representative tasks and release in stages with operational ownership.",
    value: "Expected value: reduce routine handoffs while keeping decisions reviewable. Completion quality and intervention rates would be assessed before expanding scope.",
    tags: ["AI agents", "Human approval", "Evaluation"],
  },
];
