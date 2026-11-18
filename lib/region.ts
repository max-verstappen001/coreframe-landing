/** Build-time regional identity. Build each domain separately from the same commit. */
const configuredRegion = process.env.NEXT_PUBLIC_SITE_REGION;
if (configuredRegion && !["global", "uae"].includes(configuredRegion)) {
  throw new Error("NEXT_PUBLIC_SITE_REGION must be global or uae");
}
export const isUAE = configuredRegion === "uae";
export const region = {
  id: isUAE ? "uae" : "global",
  origin: isUAE ? "https://coreframe.ae" : "https://coreframetech.in",
  location: isUAE ? "Dubai, UAE" : "Chennai, India",
  label: isUAE ? "UAE & GCC" : "India & Global",
  locale: isUAE ? "en_AE" : "en_IN",
  cta: "Discuss Your AI Initiative",
  intro: isUAE
    ? "CoreFrame develops AI products and engineers secure enterprise systems for UAE and GCC organizations, built around operational workflows, data and infrastructure requirements."
    : "CoreFrame develops AI products and engineers secure enterprise systems that connect operational workflows, business data and existing infrastructure.",
  delivery: isUAE
    ? "For UAE and GCC engagements, we establish data location, approved providers, cross-border access and operational ownership during discovery. Regional deployment depends on the selected service and your requirements."
    : "Work with an engineering team based in India, serving organizations internationally. We scope deployment, access, delivery responsibilities and support around your operating environment.",
};
export function contactHref(intent = "discovery", source = "website") {
  return `/contact?intent=${encodeURIComponent(intent)}&source=${encodeURIComponent(source)}`;
}
