"use client";

import { Reveal } from "@/lib/animations";

/* ────── Shared case study section block ────── */
export function CaseSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="group">
        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-accent/30 font-display text-xs text-accent">
            {number}
          </span>
          <h2 className="font-heading text-display-sm text-foreground">
            {title}
          </h2>
          <div className="flex-1 h-[1px] bg-border" />
        </div>
        {children}
      </div>
    </Reveal>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4">
          <span className="mt-2 h-[5px] w-[5px] rounded-full bg-accent/60 shrink-0" />
          <span className="font-sans text-body-sm text-muted leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
