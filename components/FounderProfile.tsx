import { founder } from "@/lib/company";

export function FounderProfile() {
  return (
    <article className="rounded-2xl border border-border bg-bg-card p-7 md:p-10">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{founder.role}</p>
      <h3 className="mt-4 font-display text-3xl leading-tight">{founder.name}</h3>
      <p className="mt-5 max-w-2xl text-muted leading-relaxed">{founder.background}</p>
      <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm text-accent underline">View professional profile on LinkedIn ↗</a>
    </article>
  );
}
