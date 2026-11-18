import Link from "next/link";
import { Section } from "./Section";
import { ENTERPRISE_AREAS } from "@/lib/enterprise-areas";
import { contactHref } from "@/lib/region";

export function EnterpriseCapabilities({ source }: { source: string }) {
  return (
    <Section id="enterprise-engineering" padding="large" background="elevated">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">Enterprise engineering</p>
      <h2 className="mt-5 font-display text-display-md leading-tight">Start with what needs to work better.</h2>
      <p className="mt-5 max-w-3xl text-muted leading-relaxed">Six areas for customer-specific delivery. Examples illustrate possible engagements; scope, controls and acceptance criteria are agreed with your team. Consulting, training and managed operations remain available through our services.</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {ENTERPRISE_AREAS.map(area => <article key={area.id} id={`area-${area.id}`} className="rounded-2xl border border-border bg-bg-card p-7 md:p-9"><h3 className="font-display text-2xl">{area.title}</h3><p className="mt-4 text-sm text-muted leading-relaxed">{area.problem}</p><dl className="mt-5 space-y-4 text-sm leading-relaxed"><div><dt className="font-medium">Approach</dt><dd className="mt-2 text-muted">{area.approach}</dd></div><div><dt className="font-medium">Suitable use cases</dt><dd className="mt-2 text-muted">{area.uses}</dd></div><div><dt className="font-medium">Illustrative example</dt><dd className="mt-2 text-muted">{area.example}</dd></div></dl><div className="mt-6 flex flex-wrap gap-x-6 gap-y-3"><Link href={contactHref(area.intent, `${source}#area-${area.id}`)} className="inline-flex min-h-11 items-center text-sm text-accent underline">{area.cta} →</Link><Link href={area.href} className="inline-flex min-h-11 items-center text-sm text-muted underline">{area.id === "voice-ai" ? "Product in development" : "Explore the approach"} →</Link></div></article>)}
      </div>
    </Section>
  );
}
