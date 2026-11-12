import Link from "next/link";
import { Section } from "@/components/Section";
import { LAB_REFERENCES } from "@/lib/labs";

const QUESTIONS = [
  { title: "Define the operational baseline", body: "Choose a workflow, identify its owner and record the current handoffs, review effort and failure cases. Agree what would make a pilot useful before selecting a model.", href: "/services/ai-readiness", label: "AI readiness and consulting" },
  { title: "Test answers against real tasks", body: "For knowledge assistance, assemble representative questions and expected sources. Review retrieval, source grounding, missing information and permission boundaries separately, including cases where the system should decline to answer.", href: "/capabilities/private-ai", label: "Private AI engineering" },
  { title: "Make agent actions reviewable", body: "Define allowed tools, approval points and failure handling. Evaluate routine tasks and rejected actions, then agree monitoring, incident ownership and rollback before production access.", href: "/capabilities/ai-agents", label: "AI agents and oversight" },
];
export default function InsightsClient() {
  return (
    <>
      <Section padding="hero">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Engineering notes</p>
        <h1 className="mt-6 max-w-3xl font-display text-display-lg leading-[1.05]">What to establish<br />before an AI pilot.</h1>
        <p className="mt-8 max-w-2xl text-body-lg text-muted leading-relaxed">A practical starting point for a discovery conversation: define the operational problem, the evidence you need and the responsibilities that continue after release.</p>
      </Section>
      <Section padding="large" background="elevated">
        <h2 className="font-display text-display-md">Three questions for the project team.</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8">{QUESTIONS.map((item, i) => <article key={item.title} className="border-t border-border pt-6"><p className="font-mono text-xs text-accent">0{i + 1}</p><h3 className="mt-4 font-display text-2xl leading-tight">{item.title}</h3><p className="mt-4 text-sm text-muted leading-relaxed">{item.body}</p><Link href={item.href} className="mt-6 inline-block text-sm text-accent underline">{item.label} →</Link></article>)}</div>
      </Section>
      <Section padding="large">
        <h2 className="font-display text-display-md">Read alongside public code.</h2>
        <p className="mt-5 max-w-2xl text-muted">For a concrete agent-governance reference, inspect the Custos project linked from Labs. These links lead to engineering material, not client case studies.</p>
        <div className="mt-8 space-y-4">{LAB_REFERENCES.map(item => <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="block w-fit text-accent underline">{item.title} ↗</a>)}</div>
      </Section>
    </>
  );
}
