import { Section } from "@/components/Section";
import Link from "next/link";
import type { PublicEngagement } from "@/lib/engagements";

export function ClientEngagements({ entries }: { entries: PublicEngagement[] }) {
  if (!entries.length) return null;
  return (
    <Section id="selected-engagements" padding="large" background="elevated">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Selected clients &amp; engagements</p>
        <h2 className="mt-5 font-display text-display-md leading-tight">Organizations and products we&apos;ve supported.</h2>
        <p className="mt-6 text-muted leading-relaxed">A selection of software engineering, AI development and technology delivery engagements. Confirmed CoreFrame client relationships across hospitality, software and industrial services.</p>
      </div>
      <div className="mt-12 grid gap-x-10 md:grid-cols-2">
        {entries.map(entry => (
          <article key={entry.id} id={`engagement-${entry.id}`} aria-labelledby={`engagement-${entry.id}-title`} className="flex flex-col border-t border-border py-9 md:py-10">
            <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-3">
              <h3 id={`engagement-${entry.id}-title`} className="font-display text-3xl font-medium tracking-tight">{entry.name}</h3>
              {entry.website && <a href={entry.website} target="_blank" rel="noopener noreferrer" aria-label={`${new URL(entry.website).hostname.replace(/^www\./, "")} — ${entry.name} website (opens in a new tab)`} className="inline-flex min-h-11 items-center text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground">{new URL(entry.website).hostname.replace(/^www\./, "")} <span aria-hidden="true" className="ml-2">↗</span></a>}
            </div>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              <div><dt className="font-mono text-[11px] uppercase tracking-widest text-muted">Industry</dt><dd className="mt-2 text-sm leading-relaxed">{entry.industry}</dd></div>
              {entry.market && <div><dt className="font-mono text-[11px] uppercase tracking-widest text-muted">Market</dt><dd className="mt-2 text-sm">{entry.market}</dd></div>}
              <div className="sm:col-span-2"><dt className="font-mono text-[11px] uppercase tracking-widest text-muted">Relationship</dt><dd className="mt-2 text-sm">{entry.relationship}</dd></div>
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-muted">{entry.description}</p>
            {entry.capabilities.length > 0 && <div className="mt-auto pt-6"><h4 className="font-mono text-[11px] uppercase tracking-widest text-muted">Related CoreFrame capabilities</h4><ul className="mt-3 flex flex-wrap gap-x-5 gap-y-3">{entry.capabilities.map(capability => <li key={capability.href}><Link href={capability.href} className="text-sm text-accent underline underline-offset-4">{capability.label}</Link></li>)}</ul></div>}
          </article>
        ))}
      </div>
    </Section>
  );
}
