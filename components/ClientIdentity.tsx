import Image from "next/image";
import type { PublicEngagement } from "@/lib/engagements";

/** Official artwork stays intact; a neutral backing preserves the supplied colors. */
export function ClientIdentity({ entry }: { entry: Pick<PublicEngagement, "name" | "logo"> }) {
  if (!entry.logo) return <span className="client-brand-text">{entry.name}</span>;
  return (
    <span className={`client-brand-logo ${entry.logo.backing === "dark" ? "client-brand-logo-dark" : "client-brand-logo-light"}`}>
      <Image src={entry.logo.src} alt="" width={entry.logo.width} height={entry.logo.height} sizes="180px" className="client-brand-image" />
      <span className="sr-only">{entry.name}</span>
    </span>
  );
}
