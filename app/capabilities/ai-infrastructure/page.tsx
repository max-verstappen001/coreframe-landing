import { ServiceLanding, type ServiceLandingContent } from "@/components/ServiceLanding";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

const PATH = "/capabilities/ai-infrastructure";
const TITLE = "AI Infrastructure & LLMOps";
const DESCRIPTION = "Production AI infrastructure and LLMOps for private and enterprise AI—model serving, evaluation, observability, release workflows and capacity planning.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const content: ServiceLandingContent = {
  eyebrow: "Capabilities / AI Infrastructure & LLMOps",
  title: "AI infrastructure built to be operated, not just demonstrated.",
  intro: "We design the serving, evaluation and operational layer behind private LLM and enterprise AI systems, from capacity planning through monitored releases.",
  problemTitle: "A working model endpoint is only the beginning.",
  problem: "Production AI introduces variable workloads, costly compute, probabilistic behavior and fast-moving dependencies. Teams need repeatable releases, evidence-based evaluation and clear operational ownership—not a collection of scripts around an API.",
  useCases: [
    { title: "Private model serving", body: "Operate open-weight or approved models inside on-premise, private-cloud or hybrid environments." },
    { title: "LLM evaluation pipelines", body: "Compare prompts, models and retrieval changes against versioned test sets before release." },
    { title: "Inference capacity planning", body: "Estimate throughput, latency, concurrency and hardware needs against expected workloads." },
    { title: "RAG and agent operations", body: "Monitor the retrieval, tool and application layers that determine whether an AI workflow is useful." },
  ],
  deliverables: [
    { title: "Reference architecture", body: "A deployment design covering model serving, data flows, environment boundaries and integration points." },
    { title: "Release and evaluation workflows", body: "Versioned configuration, automated checks, acceptance thresholds and rollback procedures." },
    { title: "Observability and runbooks", body: "Workload, latency, error and quality signals with practical incident and maintenance guidance." },
  ],
  deployment: [
    { title: "On-premise", body: "Customer-controlled infrastructure for workloads that require local data handling or direct hardware control." },
    { title: "Private cloud", body: "Dedicated environments integrated with enterprise identity, networks, data platforms and delivery workflows." },
    { title: "Hybrid", body: "Route workloads by sensitivity, cost and capability across controlled environments with explicit boundaries." },
  ],
  operations: "Security controls are selected for the environment and risk model. Typical concerns include network segmentation, secrets, identity and access, artifact provenance, encryption, logging, data retention and tested recovery procedures.",
  requirements: ["Expected workloads, latency goals and concurrency patterns", "Available infrastructure, network boundaries and identity systems", "Data sources, model choices and application integrations", "Evaluation criteria, retention requirements and operational owners"],
  process: [
    { title: "Baseline", body: "Profile workloads, dependencies, quality needs and current operating constraints." },
    { title: "Architect", body: "Choose serving, storage, evaluation and delivery patterns for the environment." },
    { title: "Implement", body: "Build infrastructure, integrations, automated checks and operational visibility." },
    { title: "Handover or operate", body: "Document ownership, train teams and agree how the system will be maintained." },
  ],
  related: [{ label: "Private AI", href: "/capabilities/private-ai" }, { label: "Edge AI", href: "/capabilities/edge-ai" }, { label: "AI Governance", href: "/capabilities/ai-strategy-governance" }],
};

export default function AIInfrastructurePage() {
  const jsonLd = [serviceJsonLd({ name: TITLE, description: DESCRIPTION, path: PATH }), breadcrumbJsonLd([{ name: "Capabilities", path: "/capabilities" }, { name: "AI Infrastructure & LLMOps", path: PATH }])];
  return <>{jsonLd.map((data, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />)}<ServiceLanding content={content} /></>;
}
