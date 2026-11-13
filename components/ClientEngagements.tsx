import { Section } from "@/components/Section";
import { ClientIdentity } from "@/components/ClientIdentity";
import Link from "next/link";
import type { PublicEngagement } from "@/lib/engagements";

export function ClientEngagements({ entries }: { entries: PublicEngagement[] }) {
  if (!entries.length) return null;
  return (
    <Section id="selected-engagements" padding="large" background="elevated">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Selected clients &amp; engagements</p>
        <h2 className="mt-5 font-display text-display-md leading-tight">The businesses.<br />The work behind them.</h2>
        <p className="mt-6 text-muted leading-relaxed">Website and product engineering, AI systems and industrial engineering. Explore the client context and CoreFrame&apos;s contribution to each engagement.</p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {entries.map((entry, i) => (
          <article key={entry.id} id={`engagement-${entry.id}`} aria-labelledby={`engagement-${entry.id}-title`} className="flex flex-col rounded-2xl border border-border bg-bg-card p-6 md:p-9">
            <div className="flex items-start justify-between gap-4">
              <h3 id={`engagement-${entry.id}-title`} className="font-display text-2xl md:text-3xl font-medium tracking-tight max-w-[260px]"><ClientIdentity entry={entry} /></h3>
              <span aria-hidden="true" className="font-mono text-xs text-muted">0{i + 1}</span>
            </div>
            <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-4 border-b border-border pb-6">
              <div><dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Industry</dt><dd className="mt-2 text-sm">{entry.industry}</dd></div>
              {entry.market && <div><dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Market</dt><dd className="mt-2 text-sm">{entry.market}</dd></div>}
            </dl>
            {entry.context && <div className="mt-6"><h4 className="font-display text-lg">The business</h4><p className="mt-3 text-sm leading-relaxed text-muted">{entry.context}</p></div>}
            <div className="mt-6"><h4 className="font-display text-lg">CoreFrame&apos;s contribution</h4><p className="mt-3 text-sm leading-relaxed text-muted">{entry.description}</p></div>
            {!!entry.focus?.length && <ul aria-label={`${entry.name} delivery scope`} className="mt-5 grid gap-2 text-sm text-muted">{entry.focus.map(item => <li key={item} className="flex gap-3 leading-relaxed"><span aria-hidden="true" className="text-accent">—</span><span>{item}</span></li>)}</ul>}
            <div className="mt-auto pt-7">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Related CoreFrame capabilities</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-3">{entry.capabilities.map(capability => <li key={capability.href}><Link href={capability.href} className="text-sm text-accent underline underline-offset-4">{capability.label}</Link></li>)}</ul>
              <div className="mt-7 flex flex-wrap items-end justify-between gap-x-5 gap-y-3 border-t border-border pt-5">
                <p className="text-xs text-muted">{entry.relationship}</p>
                {entry.website ? <a href={entry.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit website ${new URL(entry.website).hostname.replace(/^www\./, "")} — ${entry.name} (opens in a new tab)`} className="inline-flex min-h-11 flex-col justify-center text-sm text-accent underline underline-offset-4"><span>Visit website <span aria-hidden="true">↗</span></span><span className="mt-1 text-xs text-muted">{new URL(entry.website).hostname.replace(/^www\./, "")}</span></a> : <p className="text-xs text-muted">Client name withheld</p>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
