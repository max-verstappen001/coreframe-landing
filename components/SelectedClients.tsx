import Link from "next/link";
import type { PublicEngagement } from "@/lib/engagements";
import { ClientIdentity } from "@/components/ClientIdentity";

export function SelectedClients({ entries }: { entries: PublicEngagement[] }) {
  if (!entries.length) return null;
  return (
    <section id="selected-clients" className="client-showcase" aria-labelledby="selected-clients-title">
      <div className="wrap">
        <div className="client-showcase-heading">
          <div>
            <p className="eyebrow">SELECTED CLIENTS &amp; ENGAGEMENTS</p>
            <h2 id="selected-clients-title">Organizations We&apos;ve Worked With</h2>
          </div>
          <p className="client-showcase-intro">Selected organizations and products supported through engineering, AI development and technology delivery engagements.</p>
        </div>
        <ul className="client-wordmarks" aria-label="Selected organizations and products">
          {entries.map(entry => (
            <li key={entry.id}>
              <div className="client-wordmark" data-client-name={entry.name}>
                <Link href={`/work#engagement-${entry.id}`} className="client-identity-link">
                  <ClientIdentity entry={entry} />
                  <span className="client-wordmark-link">View engagement <span aria-hidden="true">↗</span></span>
                </Link>
                {entry.website ? <a href={entry.website} target="_blank" rel="noopener noreferrer" className="client-website-link" aria-label={`${new URL(entry.website).hostname.replace(/^www\./, "")} — ${entry.name} website (opens in a new tab)`}>{new URL(entry.website).hostname.replace(/^www\./, "")} <span aria-hidden="true">↗</span></a> : <span className="client-private-label">Client name withheld</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
