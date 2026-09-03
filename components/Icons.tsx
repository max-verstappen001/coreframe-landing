/**
 * Shared line-icon set. 16×16 viewBox, stroke-only, inherits `currentColor`
 * so it takes whatever text colour token the parent sets. Keys are semantic
 * (what the glyph depicts) — map domain concepts to them at the call site.
 */

export const ICON_PATHS = {
  lock: (
    <>
      <rect x="3" y="7" width="10" height="7" rx="1.5" />
      <path d="M5 7V5a3 3 0 0 1 6 0v2" />
    </>
  ),
  documents: (
    <>
      <path d="M5.5 2.5h6a1 1 0 0 1 1 1V12a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z" />
      <path d="M3 5.5v8a1 1 0 0 0 1 1h6" />
      <path d="M7 6h3M7 8.5h3" />
    </>
  ),
  agents: (
    <>
      <circle cx="8" cy="3.5" r="1.75" />
      <circle cx="3.5" cy="12" r="1.75" />
      <circle cx="12.5" cy="12" r="1.75" />
      <path d="M7.1 5l-2.7 5.4M8.9 5l2.7 5.4M5.3 12h5.4" />
    </>
  ),
  server: (
    <>
      <rect x="2.5" y="2.5" width="11" height="4" rx="1" />
      <rect x="2.5" y="9.5" width="11" height="4" rx="1" />
      <path d="M5 4.5h.6M5 11.5h.6" />
    </>
  ),
  code: (
    <>
      <path d="M5.5 4.5L2 8l3.5 3.5M10.5 4.5L14 8l-3.5 3.5" />
      <path d="M9.3 2.5l-2.6 11" />
    </>
  ),
  compass: (
    <>
      <circle cx="8" cy="8" r="6" />
      <path d="M10.6 5.4l-1.5 4.2-4.2 1.5 1.5-4.2z" />
    </>
  ),
  chip: (
    <>
      <rect x="4" y="4" width="8" height="8" rx="1.5" />
      <rect x="6.5" y="6.5" width="3" height="3" />
      <path d="M6 1.5V4M10 1.5V4M6 12v2.5M10 12v2.5M1.5 6H4M1.5 10H4M12 6h2.5M12 10h2.5" />
    </>
  ),
  bolt: <path d="M9 1.5L3 9h4.5L7 14.5 13 7H8.5z" />,
  store: (
    <>
      <path d="M2.5 6.5L3.5 3h9l1 3.5" />
      <path d="M3.5 7.5V14h9V7.5" />
      <path d="M6.5 14v-3.5h3V14" />
    </>
  ),
  building: (
    <>
      <rect x="3" y="2.5" width="10" height="11.5" rx="1" />
      <path d="M6 5.5h1M9 5.5h1M6 8h1M9 8h1M6 10.5h1M9 10.5h1" />
      <path d="M6.5 14v-2.5h3V14" />
    </>
  ),
  circuit: (
    <>
      <path d="M4 3.5h3l2 2h4M3 8h10M4 12.5h3l2-2h4" />
      <circle cx="2.5" cy="3.5" r="1" />
      <circle cx="2.5" cy="12.5" r="1" />
    </>
  ),
  blueprint: (
    <>
      <rect x="2.5" y="2.5" width="11" height="11" rx="1" />
      <path d="M2.5 6h11M6 2.5v11" />
      <path d="M8.5 8.5h2.5V11H8.5z" />
    </>
  ),
  upload: (
    <>
      <path d="M8 12.5V4" />
      <path d="M4.5 7.5L8 4l3.5 3.5" />
      <path d="M2.5 13.5h11" />
    </>
  ),
  gauge: (
    <>
      <path d="M2.5 11.5a5.5 5.5 0 0 1 11 0" />
      <path d="M8 11.5l3-3.5" />
      <circle cx="8" cy="11.5" r="0.9" />
    </>
  ),
  shield: (
    <>
      <path d="M8 1.5l5.5 2v4c0 3.5-2.3 6-5.5 7-3.2-1-5.5-3.5-5.5-7v-4z" />
      <path d="M5.5 8l1.8 1.8L10.5 6.5" />
    </>
  ),
  scale: (
    <>
      <path d="M8 2.5v11M5 13.5h6M3.5 5h9" />
      <path d="M3.5 5L1.5 9.5h4z" />
      <path d="M12.5 5l-2 4.5h4z" />
    </>
  ),
  hexagon: <path d="M8 1.5l5.6 3.25v6.5L8 14.5l-5.6-3.25v-6.5z" />,
  flow: (
    <>
      <path d="M2.5 4h4l2 4h5M2.5 12h4l2-4" />
      <circle cx="13.5" cy="8" r="1" />
    </>
  ),
  database: (
    <>
      <ellipse cx="8" cy="4" rx="5.5" ry="2.2" />
      <path d="M2.5 4v8c0 1.2 2.5 2.2 5.5 2.2s5.5-1 5.5-2.2V4" />
      <path d="M2.5 8c0 1.2 2.5 2.2 5.5 2.2s5.5-1 5.5-2.2" />
    </>
  ),
  users: (
    <>
      <circle cx="6" cy="5.5" r="2.5" />
      <path d="M1.5 14a4.5 4.5 0 0 1 9 0" />
      <circle cx="11.5" cy="6" r="1.8" />
      <path d="M11.2 9.6a3.6 3.6 0 0 1 3.3 3.9" />
    </>
  ),
  signal: (
    <>
      <path d="M8 14.5v-3.5" />
      <circle cx="8" cy="10" r="1.2" />
      <path d="M4.5 6.5a5 5 0 0 1 7 0" />
      <path d="M2 4a8.5 8.5 0 0 1 12 0" />
    </>
  ),
} as const;

export type IconName = keyof typeof ICON_PATHS;

interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function Icon({ name, size = 16, strokeWidth = 1.5, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

/**
 * Small accent tile that frames an icon at the top of a card. Kept here so
 * every card on the site gets the identical treatment.
 */
export function IconTile({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-accent-muted text-accent ${className}`}
    >
      <Icon name={name} size={18} />
    </span>
  );
}
