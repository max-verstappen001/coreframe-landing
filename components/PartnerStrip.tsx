import { Reveal } from "@/lib/animations";
import { Section } from "./Section";

export interface Partner {
  name: string;
  /** optional logo file under /public (e.g. "/logos/blackrock.svg").
   *  When present it renders as a grayscale <img>; otherwise a clean
   *  typographic wordmark is shown as a placeholder. */
  logo?: string;
  href?: string;
}

/**
 * "People from & associated with" strip — 360Labs-style desaturated logo row.
 * Drop official assets into /public/logos and set each partner's `logo` path
 * to replace the typographic placeholders with real marks.
 */
export function PartnerStrip({
  label = "People from & associated with",
  partners,
}: {
  label?: string;
  partners: Partner[];
}) {
  return (
    <Section padding="default" className="border-b border-border">
      <Reveal>
        <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-muted mb-10">
          {label}
        </p>
      </Reveal>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
        {partners.map((p) => {
          const inner = p.logo ? (
            <img
              src={p.logo}
              alt={p.name}
              className="h-7 md:h-8 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
          ) : (
            <span className="font-display text-xl md:text-2xl font-semibold tracking-tight text-subtle/70 transition-colors duration-300 hover:text-foreground">
              {p.name}
            </span>
          );
          return p.href ? (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              {inner}
            </a>
          ) : (
            <div key={p.name} className="inline-flex items-center">
              {inner}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
