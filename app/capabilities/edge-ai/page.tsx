import { ServiceLanding, type ServiceLandingContent } from "@/components/ServiceLanding";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

const PATH = "/capabilities/edge-ai";
const TITLE = "Edge AI Engineering & Deployment";
const DESCRIPTION = "Edge AI engineering for on-device and on-site inference, computer vision and offline systems—from hardware sizing and optimization to integration and operations.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const content: ServiceLandingContent = {
  eyebrow: "Capabilities / Edge AI",
  title: "Edge AI for systems that cannot depend on the cloud.",
  intro: "We engineer inference for devices, facilities and low-connectivity environments, balancing model quality with latency, power, privacy and hardware constraints.",
  problemTitle: "Cloud inference is not always fast, connected or appropriate.",
  problem: "Factories, field operations and embedded products may need local decisions even when connectivity is limited, response time is tight or sensitive inputs should remain on-site. The hard part is making the full system dependable within real compute, thermal and operational limits.",
  useCases: [
    { title: "On-site computer vision", body: "Inspect, classify or detect events close to the camera while keeping bandwidth and response time predictable." },
    { title: "Offline field intelligence", body: "Run task-specific models where network access is intermittent, expensive or unavailable." },
    { title: "Embedded product features", body: "Add local inference to a device or appliance with an interface appropriate to its operators." },
    { title: "Facility-side processing", body: "Aggregate device inputs through an on-site gateway before selected events or summaries reach central systems." },
  ],
  deliverables: [
    { title: "Feasibility and hardware sizing", body: "Workload profiling, device options, latency targets and an explicit accuracy–cost–power trade-off." },
    { title: "Model optimization", body: "Selection, quantization, conversion and runtime tuning against representative inputs." },
    { title: "Application integration", body: "Inference pipelines, device or gateway software, APIs, operator workflows and observability." },
  ],
  deployment: [
    { title: "On-device", body: "Inference runs on the endpoint when responsiveness, privacy or offline operation is the priority." },
    { title: "Edge gateway", body: "One local compute layer serves multiple sensors or endpoints and coordinates with existing systems." },
    { title: "Hybrid edge and cloud", body: "Local decisions remain at the edge while approved telemetry, updates and heavier processing use central infrastructure." },
  ],
  operations: "Controls depend on the deployment and threat model. We plan device identity, signed artifacts where supported, least-privilege access, telemetry boundaries, update paths and fallback behavior without claiming that any system is risk-free.",
  requirements: ["Representative sensor or input data and expected operating conditions", "Target latency, availability and accuracy thresholds", "Candidate hardware, power, thermal and connectivity constraints", "Interfaces to devices, gateways, applications and monitoring systems"],
  process: [
    { title: "Assess", body: "Define the decision, environment and measurable acceptance criteria." },
    { title: "Prototype", body: "Benchmark candidate models and hardware with representative data." },
    { title: "Integrate", body: "Build the inference pipeline and connect it to the real workflow." },
    { title: "Operate", body: "Plan monitoring, updates, failure modes and model improvement." },
  ],
  related: [{ label: "Private AI", href: "/capabilities/private-ai" }, { label: "AI Infrastructure & LLMOps", href: "/capabilities/ai-infrastructure" }, { label: "Security", href: "/security" }],
};

export default function EdgeAIPage() {
  const jsonLd = [serviceJsonLd({ name: TITLE, description: DESCRIPTION, path: PATH }), breadcrumbJsonLd([{ name: "Capabilities", path: "/capabilities" }, { name: "Edge AI", path: PATH }])];
  return <>{jsonLd.map((data, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />)}<ServiceLanding content={content} /></>;
}
