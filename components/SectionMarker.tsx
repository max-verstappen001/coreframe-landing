import clsx from "clsx";

interface SectionMarkerProps {
  active: "A" | "B" | "C" | "D";
  className?: string;
}

const LETTERS = ["A", "B", "C", "D"] as const;

export function SectionMarker({ active, className = "" }: SectionMarkerProps) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-1 font-display text-caption uppercase text-subtle",
        className
      )}
      aria-hidden
    >
      {LETTERS.map((letter) => {
        const isActive = letter === active;
        return (
          <span
            key={letter}
            className={clsx(
              "transition-colors duration-500",
              isActive
                ? "text-foreground font-medium"
                : "text-subtle"
            )}
          >
            {isActive ? `[${letter}]` : letter}
          </span>
        );
      })}
    </div>
  );
}
