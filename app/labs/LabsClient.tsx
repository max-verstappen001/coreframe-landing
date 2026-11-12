import Link from "next/link";
import { Section } from "@/components/Section";
import { CUSTOS, LAB_REFERENCES } from "@/lib/labs";
import { contactHref } from "@/lib/region";

export default function LabsClient() {
  return (
    <>
      <Section padding="hero">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">CoreFrame Labs</p>
        <h1 className="mt-6 max-w-3xl font-display text-display-lg leading-[1.05]">Applied engineering.<br />Open for inspection.</h1>
        <p className="mt-8 max-w-2xl text-body-lg text-muted leading-relaxed">Labs connects our enterprise AI engineering interests with inspectable code and technical documentation. Start with the public Custos project, then review the implementation and its limits.</p>
      </Section>
      <Section id="custos" padding="large" background="elevated">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Public engineering reference</p>
            <h2 className="mt-5 font-display text-display-md">{CUSTOS.name}</h2>
            <p className="mt-6 text-muted leading-relaxed">{CUSTOS.description}</p>
            <a href={CUSTOS.href} target="_blank" rel="noopener noreferrer" className="mt-7 inline-block text-accent underline">Inspect Custos on GitHub ↗</a>
          </div>
          <div className="space-y-7">
            {LAB_REFERENCES.map(item => <article key={item.title} className="border-t border-border pt-6"><h3 className="font-display text-xl">{item.title}</h3><p className="mt-3 text-sm text-muted leading-relaxed">{item.body}</p><a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-accent underline">View public source ↗</a></article>)}
          </div>
        </div>
      </Section>
      <Section padding="large">
        <h2 className="font-display text-display-md">Research questions that guide the work.</h2>
        <p className="mt-6 max-w-2xl text-muted leading-relaxed">Beyond agent governance, our interests include enterprise retrieval evaluation, multilingual processing and model deployment. These are research directions. We are not publishing benchmark results or claiming released tooling in these areas here.</p>
        <div className="mt-8 flex flex-wrap gap-6"><Link href="/labs/open-source" className="text-accent underline">Open-source reference →</Link><Link href="/labs/research" className="text-accent underline">Research scope →</Link><Link href="/labs/publications" className="text-accent underline">Technical reading →</Link></div>
      </Section>
      <Section padding="large" background="elevated">
        <h2 className="font-display text-display-md">Bring an engineering question.</h2>
        <p className="mt-5 max-w-2xl text-muted">For an evaluation or implementation engagement, tell us about the workflow and the evidence you need before release.</p>
        <Link href={contactHref("discovery", "/labs")} className="mt-7 inline-block text-accent underline">Discuss Your AI Initiative →</Link>
      </Section>
    </>
  );
}
