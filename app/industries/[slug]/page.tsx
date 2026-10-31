import { notFound } from "next/navigation";
import { INDUSTRIES } from "@/lib/industries";
import { DELIVERY_PROCESS } from "@/lib/services";
import { ServiceLanding } from "@/components/ServiceLanding";
import { pageMetadata, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";
import { region, isUAE } from "@/lib/region";

const CONTEXT: Record<string, { risk: string; pilot: string; acceptance: string; regional: string }> = {
  "industrial-energy": {
    risk: "Engineering documents and operational standards change over time. Recommendations need source versions, access controls and qualified review before any safety-critical decision.",
    pilot: "Start with a bounded collection of approved engineering documents and a defined set of questions from operational users.",
    acceptance: "Measure source accuracy, retrieval coverage, permission enforcement and engineer review effort. Operational or safety decisions remain with authorized personnel.",
    regional: "For UAE and GCC energy and EPC organizations, establish document residency, contractor access and customer-specific infrastructure requirements before selecting providers.",
  },
  "retail-hospitality": {
    risk: "Fragmented POS, inventory and ordering systems create inconsistent operational data. Recommendations must reflect source freshness, location permissions and exceptions.",
    pilot: "Choose one operational workflow at a defined set of locations, with historical data and a human decision owner.",
    acceptance: "Measure reconciliation accuracy, exception rates and time spent on manual handoffs. Compare against the existing workflow before expanding.",
    regional: "For UAE and GCC multi-location operators, evaluate location-level access, regional business calendars and the languages used by staff and customers during discovery.",
  },
  enterprise: {
    risk: "Contracts and internal knowledge span teams with different access rights. AI must preserve those permissions and make the source behind each recommendation reviewable.",
    pilot: "Select one document or approval workflow with an accountable business owner and representative inputs, including exceptions.",
    acceptance: "Evaluate grounded answers, permission isolation, approval traceability and review effort. Confirm authorized sign-off for consequential actions.",
    regional: "For UAE and GCC professional services teams, scope client confidentiality, cross-border access and any bilingual document evaluation with approved reviewers.",
  },
  technology: {
    risk: "AI features add provider dependencies, variable cost and probabilistic behavior to an existing product. Quality and operational ownership need to be designed alongside the feature.",
    pilot: "Choose a bounded product capability and representative tasks. Establish a baseline before comparing models, prompts and retrieval approaches.",
    acceptance: "Measure task success, latency, cost per task and failure recovery. Validate tenant isolation and rollback before increasing usage.",
    regional: "For UAE and GCC platform teams, assess regional serving options, tenant data boundaries and provider dependencies before promising residency to customers.",
  },
};
export const dynamicParams = false;
export function generateStaticParams() { return INDUSTRIES.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = INDUSTRIES.find(i => i.slug === params.slug);
  if (!industry) notFound();
  return pageMetadata({ title: `Enterprise AI for ${industry.title}`, description: industry.description, path: `/industries/${industry.slug}` });
}
export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = INDUSTRIES.find(i => i.slug === params.slug);
  if (!industry) notFound();
  const context = CONTEXT[industry.slug];
  const path = `/industries/${industry.slug}`;
  const data = [serviceJsonLd({ name: `AI for ${industry.title}`, description: industry.description, path }), breadcrumbJsonLd([{ name: "Industries", path: "/industries" }, { name: industry.short, path }])];
  return <>{data.map((item, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />)}<ServiceLanding source={path} content={{
    eyebrow: `Industries / ${region.label}`, title: `Enterprise AI for ${industry.title}`,
    intro: `${industry.description} ${isUAE ? context.regional : region.delivery}`,
    problemTitle: "Start with one operational problem.", problem: context.pilot,
    useCases: industry.useCases.map(title => ({ title, body: `Assess ${title.toLowerCase()} against your source data, workflow exceptions and operational acceptance criteria.` })),
    deliverables: [{ title: "Workflow assessment", body: context.pilot }, { title: "Integrated implementation", body: "Connect approved data sources, business systems and identity with traceable actions and human review." }, { title: "Acceptance evidence", body: context.acceptance }],
    deployment: [{ title: "Data and residency", body: "Map storage, processing, telemetry and backup locations for customer approval." }, { title: "Integration", body: "Establish API access, data quality and system owners before implementation." }, { title: "Adoption", body: "Train the people accountable for daily use, review and operational support." }],
    operations: context.risk,
    requirements: ["A business owner and representative workflow", "Approved examples and data access", "Security and procurement requirements", "A baseline for quality, cost and review effort"], process: DELIVERY_PROCESS,
    related: [{ label: "AI readiness assessment", href: "/services/ai-readiness" }, { label: "Forward Deployed Engineering", href: "/services/forward-deployed-engineering" }, { label: "Selected work", href: "/work" }],
  }} /></>;
}
