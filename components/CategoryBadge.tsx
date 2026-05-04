import clsx from "clsx";

type Status = "live" | "development" | "prototype" | "ongoing" | "completed";

interface CategoryBadgeProps {
  category: string;
  status?: Status;
  className?: string;
}

const STATUS_COLOR: Record<Status, string> = {
  live: "text-accent",
  ongoing: "text-accent",
  development: "text-amber-300",
  prototype: "text-blue-300",
  completed: "text-muted",
};

export function CategoryBadge({
  category,
  status,
  className = "",
}: CategoryBadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center font-display text-caption uppercase tracking-[0.12em] text-muted",
        className
      )}
    >
      <span className="text-subtle">{"{ "}</span>
      <span className="text-foreground">{category}</span>
      {status && (
        <>
          <span className="text-subtle mx-1.5">/</span>
          <span className={STATUS_COLOR[status]}>{status}</span>
        </>
      )}
      <span className="text-subtle">{" }"}</span>
    </span>
  );
}
