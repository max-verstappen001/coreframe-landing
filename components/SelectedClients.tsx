import Link from "next/link";
import type { PublicEngagement } from "@/lib/engagements";

export function SelectedClients({ entries }: { entries: Pick<PublicEngagement, "id" | "name">[] }) {
  if (!entries.length) return null;
  return (
    <section id="selected-clients" className="client-showcase" aria-labelledby="selected-clients-title">
      <div className="wrap">
        <div className="client-showcase-heading">
          <div>
            <p className="eyebrow">SELECTED CLIENTS &amp; ENGAGEMENTS</p>
            <h2 id="selected-clients-title">Organizations We&apos;ve Worked With</h2>
          </div>
          <p className="client-showcase-intro">Selected organizations and products supported through software engineering, AI development, and technology delivery engagements.</p>
        </div>
        <ul className="client-wordmarks" aria-label="Selected organizations and products">
          {entries.map(entry => (
            <li key={entry.id}>
              <Link href={`/work#engagement-${entry.id}`} className="client-wordmark">
                <span>{entry.name}</span>
                <span className="client-wordmark-link">View engagement <span aria-hidden="true">↗</span></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
