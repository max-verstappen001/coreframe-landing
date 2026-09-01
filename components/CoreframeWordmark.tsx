interface CoreframeWordmarkProps {
  /** display height in px; width follows the glyph's native ~9.7:1 aspect ratio */
  height?: number;
  className?: string;
}

/**
 * The "COREFRAME" wordmark, extracted from the brand logo and used as a CSS
 * mask so it renders in the current theme color (var(--color-foreground))
 * instead of a fixed raster color. Source: public/logos/coreframe-wordmark.png
 */
export function CoreframeWordmark({ height = 14, className = "" }: CoreframeWordmarkProps) {
  const width = Math.round(height * 9.7);
  return (
    <span
      role="img"
      aria-label="Coreframe"
      className={`inline-block shrink-0 ${className}`}
      style={{
        height,
        width,
        backgroundColor: "var(--color-foreground)",
        WebkitMaskImage: "url(/logos/coreframe-wordmark.png)",
        maskImage: "url(/logos/coreframe-wordmark.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "left center",
        maskPosition: "left center",
      }}
    />
  );
}
