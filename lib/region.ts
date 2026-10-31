/** Build-time regional identity. Build each domain separately from the same commit. */
const configuredRegion = process.env.NEXT_PUBLIC_SITE_REGION;
if (configuredRegion && !["global", "uae"].includes(configuredRegion)) {
  throw new Error("NEXT_PUBLIC_SITE_REGION must be global or uae");
}
export const isUAE = configuredRegion === "uae";
export const region = {
  id: isUAE ? "uae" : "global",
  origin: isUAE ? "https://coreframe.ae" : "https://coreframetech.in",
  label: isUAE ? "UAE & GCC" : "India & Global",
  locale: isUAE ? "en_AE" : "en_IN",
  cta: isUAE ? "Discuss your UAE AI roadmap" : "Book a discovery call",
  intro: isUAE
    ? "Enterprise AI engineering for UAE and GCC organizations. Connect fragmented knowledge, automate complex workflows and deploy with explicit data residency, access and operational controls."
    : "Enterprise AI engineering from India for organizations worldwide. Turn fragmented knowledge and manual workflows into production systems built around your data, security and infrastructure.",
  delivery: isUAE
    ? "For UAE and GCC engagements, we establish data location, approved providers, cross-border access and operational ownership during discovery. Regional deployment depends on the selected service and your requirements."
    : "Work with an engineering team based in India, serving organizations internationally. We scope deployment, access, delivery responsibilities and support around your operating environment.",
};
export function contactHref(intent = "discovery", source = "website") {
  return `/contact?intent=${encodeURIComponent(intent)}&source=${encodeURIComponent(source)}`;
}
