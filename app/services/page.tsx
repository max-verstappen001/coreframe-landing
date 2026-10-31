import { ServiceLanding } from "@/components/ServiceLanding";
import { SERVICES, DELIVERY_PROCESS } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";
import { region } from "@/lib/region";
export const metadata = pageMetadata({ title: "Enterprise AI Services", description: "Enterprise Claude, forward deployed engineering, private AI, agents, readiness, training, governance and managed AI operations.", path: "/services" });
export default function ServicesPage() {
  return <ServiceLanding source="/services" content={{
    eyebrow: `Enterprise AI Services / ${region.label}`,
    title: "From the right AI investment to a system your business can operate.",
    intro: region.intro, problemTitle: "Complex workflows need engineering ownership.",
    problem: "We connect architecture, integration, evaluation and operations. Start with an assessment, a focused implementation or an embedded delivery team, then expand against evidence from real usage.",
    useCases: SERVICES.map(s => ({ title: s.short, body: s.summary, href: `/services/${s.slug}` })),
    deliverables: [{ title: "A business baseline", body: "Agree workflow outcomes and acceptance criteria." }, { title: "An integrated implementation", body: "Build around your data, identity, infrastructure and review responsibilities." }, { title: "An operating model", body: "Document ownership, monitoring, change control and handover." }],
    deployment: [{ title: "Provider services", body: "Use approved model services where their access, data handling and regions fit." }, { title: "Private infrastructure", body: "Assess open-weight models for on-premise and private-cloud workloads." }, { title: "Hybrid systems", body: "Separate workloads by sensitivity and capabilities with explicit boundaries." }],
    operations: region.delivery,
    requirements: ["Workflow and business owner", "Data and integration landscape", "Security and residency constraints"],
    process: DELIVERY_PROCESS,
    related: SERVICES.map(s => ({ label: s.short, href: `/services/${s.slug}` })),
  }} />;
}
