"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** First-touch attribution stays in this tab and is submitted only with an enquiry. */
export function LeadAttribution() {
  const pathname = usePathname();
  useEffect(() => {
    try {
      if (sessionStorage.getItem("coreframe-entry")) return;
      const params = new URLSearchParams(window.location.search);
      const campaign = Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].map(key => [key, (params.get(key) || "").slice(0, 200)]));
      sessionStorage.setItem("coreframe-entry", JSON.stringify({ landingPath: pathname, ...campaign }));
    } catch { /* Attribution is optional when browser storage is unavailable. */ }
  }, [pathname]);
  return null;
}
