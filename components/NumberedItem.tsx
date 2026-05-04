import { ReactNode } from "react";
import clsx from "clsx";

interface NumberedItemProps {
  index: number;
  total?: number;
  label?: string;
  children?: ReactNode;
  className?: string;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function NumberedItem({
  index,
  total,
  label,
  children,
  className = "",
}: NumberedItemProps) {
  return (
    <div className={clsx("flex items-baseline gap-3", className)}>
      <span className="font-display text-caption uppercase text-muted tabular-nums">
        {pad(index)}
        {total ? ` / ${pad(total)}` : label ? ` /` : ""}
      </span>
      {label && (
        <span className="font-display text-caption uppercase text-foreground">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
