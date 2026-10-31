import type { ServiceLandingContent } from "@/components/ServiceLanding";
import { SERVICES as CATALOG } from "./service-catalog";
import { DELIVERY_PROCESS } from "./delivery";
export { DELIVERY_PROCESS } from "./delivery";

type ServiceSummary = (typeof CATALOG)[number];
export interface Service extends ServiceSummary {
  buyer: string;
  problem: string;
  uses: [string, string][];
  outputs: [string, string][];
  boundary: string;
}

const DETAILS: Record<string, Omit<Service, keyof ServiceSummary>> = {
  "enterprise-claude": {
    "buyer": "You need Claude to work inside your business systems.",
    "problem": "A model subscription does not connect business data, authorize tool actions or prove workflow quality. We scope the application, provider and integration boundaries around your users and acceptance criteria.",
    "uses": [
      [
        "Knowledge and document workflows",
        "Retrieve approved content with source references, permissions and review for consequential decisions."
      ],
      [
        "Tool-connected assistants",
        "Connect internal APIs with scoped credentials, explicit approvals and traceable actions."
      ],
      [
        "Engineering enablement",
        "Establish practical Claude adoption patterns for engineering teams, repository access and review."
      ],
      [
        "Provider selection",
        "Evaluate approved Claude access options against account access, regional availability, contractual requirements and workloads."
      ]
    ],
    "outputs": [
      [
        "Integration architecture",
        "Document data flows, identity boundaries, provider choices and required systems."
      ],
      [
        "Evaluated implementation",
        "Build workflow integrations and test representative tasks, failure paths and tool permissions."
      ],
      [
        "Rollout and handover",
        "Provide release controls, usage guidance, monitoring and an operating runbook."
      ]
    ],
    "boundary": "Claude access uses supported provider services; model and region availability must be verified during scoping. Customer-hosted applications do not imply locally hosted Claude model weights. For disconnected inference, we assess suitable open-weight models separately. Coreframe offers independent implementation services; no Anthropic partnership or certification is implied."
  },
  "forward-deployed-engineering": {
    "buyer": "Your hardest delivery gaps sit between users, data and engineering.",
    "problem": "Requirements change as teams encounter real data and operational exceptions. An embedded delivery model keeps discovery, architecture and implementation close to the people using the system.",
    "uses": [
      [
        "Workflow discovery",
        "Work with operational owners to observe handoffs, exceptions and the cost of current processes."
      ],
      [
        "Integration delivery",
        "Build across existing identity, APIs, databases and approval systems."
      ],
      [
        "Pilot to production",
        "Resolve data, evaluation and operational gaps before expanding usage."
      ],
      [
        "Team transfer",
        "Pair with internal engineers, review code and document decisions as the system evolves."
      ]
    ],
    "outputs": [
      [
        "Scoped delivery backlog",
        "Prioritize a bounded business workflow, dependencies and measurable acceptance criteria."
      ],
      [
        "Integrated software",
        "Deliver reviewed code, deployment configuration and tests in agreed repositories."
      ],
      [
        "Ownership transfer",
        "Provide architecture decisions, runbooks and a clear responsibility map."
      ]
    ],
    "boundary": "Engagement cadence, on-site or remote working, staffing, travel and support are agreed in the statement of work. Access is scoped to the systems needed for delivery."
  },
  "private-sovereign-ai": {
    "buyer": "Your deployment has to satisfy explicit control and residency requirements.",
    "problem": "Data residency is only one part of sovereignty. Model access, telemetry, backups, administrative access and operational dependencies all need to be mapped before an architecture can be accepted.",
    "uses": [
      [
        "Private knowledge systems",
        "Search sensitive documents with permission-aware retrieval and source attribution."
      ],
      [
        "On-premise inference",
        "Assess open-weight models against quality, hardware, licensing and throughput requirements."
      ],
      [
        "Restricted environments",
        "Plan offline updates, artifact provenance and operating procedures where disconnected deployment is required."
      ],
      [
        "Residency-led architecture",
        "Map storage, inference, logs, backup locations and cross-border access for customer review."
      ]
    ],
    "outputs": [
      [
        "Control and data-flow map",
        "Document data classification, locations, access paths and provider dependencies."
      ],
      [
        "Validated deployment",
        "Benchmark the selected model and serving stack against representative tasks."
      ],
      [
        "Operational controls",
        "Define retention, secrets, backup, patching and recovery procedures."
      ]
    ],
    "boundary": "Sovereignty requirements are defined with the customer. A regional endpoint alone does not establish compliance or guarantee all processing remains in a country. Legal and regulatory requirements require customer review."
  },
  "enterprise-ai-agents": {
    "buyer": "Manual handoffs slow down your operations.",
    "problem": "Useful automation must handle exceptions and respect the authority of each user. We define what an agent can observe, recommend and execute before connecting it to operational systems.",
    "uses": [
      [
        "Approval workflows",
        "Prepare requests and recommendations with human approval before consequential actions."
      ],
      [
        "Document processing",
        "Extract, reconcile and route information with source evidence and exception handling."
      ],
      [
        "Operations coordination",
        "Connect CRM, ERP and internal tools through authenticated interfaces."
      ],
      [
        "Reporting workflows",
        "Assemble evidence and draft reports for review against approved data sources."
      ]
    ],
    "outputs": [
      [
        "Workflow and tool specification",
        "Define allowed actions, approval boundaries, retries and recovery."
      ],
      [
        "Integrated agent system",
        "Build connectors, orchestration and task-level evaluation."
      ],
      [
        "Audit and oversight",
        "Expose execution traces, review queues and operational controls."
      ]
    ],
    "boundary": "High-impact actions need explicit authorization and suitable review. Failure handling, duplicate actions and prompt injection are tested as part of workflow acceptance."
  },
  "ai-readiness": {
    "buyer": "You need a defensible starting point for AI investment.",
    "problem": "An AI roadmap is useful when it connects operational value to delivery constraints. We assess workflow feasibility, data access, ownership and risk before recommending a pilot.",
    "uses": [
      [
        "Use-case prioritization",
        "Compare business value, effort, dependencies and operational risk."
      ],
      [
        "Data readiness",
        "Review source quality, ownership, permissions and representative examples."
      ],
      [
        "Architecture assessment",
        "Examine integration, hosting and procurement constraints."
      ],
      [
        "Pilot planning",
        "Define a bounded first release and the criteria for continuing investment."
      ]
    ],
    "outputs": [
      [
        "Readiness report",
        "Document the current state, gaps, risks and unresolved decisions."
      ],
      [
        "Prioritized roadmap",
        "Sequence candidate workflows by feasibility and expected value, with stated assumptions."
      ],
      [
        "Pilot brief",
        "Define scope, acceptance tests, responsibilities and indicative delivery options."
      ]
    ],
    "boundary": "Recommendations depend on the systems and evidence made available. Cost and benefit estimates are planning assumptions to validate, not promised returns."
  },
  "enterprise-ai-training": {
    "buyer": "Your team needs repeatable skills and safe operating habits.",
    "problem": "Tool access alone does not create reliable adoption. Training needs to reflect the team's actual work, approved data, review responsibilities and technical environment.",
    "uses": [
      [
        "Leadership workshops",
        "Build a common understanding of AI opportunities, limitations and investment decisions."
      ],
      [
        "Operator enablement",
        "Practice task framing, verification and escalation using approved examples."
      ],
      [
        "Engineering workshops",
        "Work through retrieval, tool use, evaluation and production integration patterns."
      ],
      [
        "Internal champions",
        "Prepare team leads to support adoption and maintain shared guidance."
      ]
    ],
    "outputs": [
      [
        "Role-specific curriculum",
        "Agree learning goals, baseline skills and exercises before delivery."
      ],
      [
        "Practical sessions",
        "Use customer-approved data and tools in guided hands-on work."
      ],
      [
        "Adoption playbook",
        "Provide reusable workflows, review checklists and a follow-up learning plan."
      ]
    ],
    "boundary": "Training uses the tools and accounts approved for the engagement. This is practical enablement; no vendor certification or accreditation is implied."
  },
  "ai-governance-security": {
    "buyer": "You need evidence to decide whether an AI system is ready.",
    "problem": "AI quality and risk change with models, prompts, data and tools. A reviewable control framework needs representative test sets, release thresholds and accountable owners.",
    "uses": [
      [
        "Evaluation design",
        "Measure task success, grounding and failure behavior against representative datasets."
      ],
      [
        "Adversarial testing",
        "Assess prompt injection, data exposure and unauthorized tool actions within agreed scope."
      ],
      [
        "Governance controls",
        "Define system inventories, owners, review points and change approval."
      ],
      [
        "Vendor assessment",
        "Map provider terms, data handling and operational dependencies for procurement review."
      ]
    ],
    "outputs": [
      [
        "Risk and control register",
        "Record intended use, failure modes, safeguards and responsible owners."
      ],
      [
        "Evaluation suite",
        "Version test cases and define acceptance thresholds with the customer."
      ],
      [
        "Release evidence",
        "Report findings, unresolved risks and recommended remediation."
      ]
    ],
    "boundary": "Assessments are scoped engineering work and do not constitute legal advice, certification or a guarantee of compliance or security."
  },
  "managed-ai-operations": {
    "buyer": "Your AI system needs an accountable operating model after launch.",
    "problem": "Production behavior shifts as usage, source data and provider services change. We establish measurable operating signals and a change process around the system's business role.",
    "uses": [
      [
        "Quality monitoring",
        "Track representative task outcomes and retrieval quality with privacy-aware signals."
      ],
      [
        "Reliability and cost",
        "Review latency, errors, capacity and consumption against agreed targets."
      ],
      [
        "Controlled releases",
        "Evaluate model, prompt and connector changes before promotion."
      ],
      [
        "Incident response",
        "Define triage, escalation, rollback and post-incident reviews."
      ]
    ],
    "outputs": [
      [
        "Operating baseline",
        "Document service inventory, dependencies, owners and initial performance."
      ],
      [
        "Monitoring and runbooks",
        "Configure signals, alerts, response steps and escalation routes."
      ],
      [
        "Service reviews",
        "Review quality, cost, incidents and an agreed improvement backlog."
      ]
    ],
    "boundary": "Support hours, service levels, response commitments and coverage are contractual. Continuous monitoring does not imply round-the-clock staffed support unless explicitly agreed."
  }
};
export const SERVICES: Service[] = CATALOG.map(s => ({ ...s, ...DETAILS[s.slug] }));

export function serviceContent(service: Service): ServiceLandingContent {
  return {
    eyebrow: `Services / ${service.short}`, title: service.title, intro: service.summary,
    problemTitle: service.buyer, problem: service.problem,
    useCases: service.uses.map(([title, body]) => ({ title, body })),
    deliverables: service.outputs.map(([title, body]) => ({ title, body })),
    deployment: [
      { title: "Your systems", body: "Integrate with approved identity, data sources and business applications. Access is scoped and reviewed." },
      { title: "Your constraints", body: "Choose provider services or customer-controlled infrastructure according to workload, security and residency needs." },
      { title: "Your acceptance criteria", body: "Agree quality, latency, cost and human review requirements before release. Document unresolved risks." },
    ],
    operations: service.boundary,
    requirements: ["A workflow owner and representative tasks", "Approved data sources and access requirements", "Infrastructure, procurement and security constraints", "Success criteria and internal operational owners"],
    process: DELIVERY_PROCESS,
    related: SERVICES.filter(s => s.slug !== service.slug).slice(0, 3).map(s => ({ label: s.short, href: `/services/${s.slug}` })),
  };
}
