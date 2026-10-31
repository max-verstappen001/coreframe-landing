import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { INDUSTRIES } from "@/lib/industries";
import { siteConfig } from "@/lib/seo";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

// Static route inventory. /case-studies, /case-studies/wiral and /showcase
// are intentionally excluded — the first two redirect permanently (superseded by
// /work) and /showcase is an internal component gallery, not public content.
const ROUTES: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/capabilities", changeFrequency: "weekly", priority: 0.9 },
  { path: "/capabilities/private-ai", changeFrequency: "monthly", priority: 0.9 },
  { path: "/capabilities/edge-ai", changeFrequency: "monthly", priority: 0.9 },
  { path: "/capabilities/ai-infrastructure", changeFrequency: "monthly", priority: 0.9 },
  { path: "/capabilities/ai-agents", changeFrequency: "monthly", priority: 0.9 },
  { path: "/capabilities/ai-strategy-governance", changeFrequency: "monthly", priority: 0.9 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.8 },
  { path: "/work", changeFrequency: "weekly", priority: 0.8 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.7 },
  { path: "/insights", changeFrequency: "weekly", priority: 0.7 },
  { path: "/labs", changeFrequency: "weekly", priority: 0.6 },
  { path: "/labs/research", changeFrequency: "monthly", priority: 0.5 },
  { path: "/labs/open-source", changeFrequency: "monthly", priority: 0.5 },
  { path: "/labs/publications", changeFrequency: "monthly", priority: 0.5 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/company", changeFrequency: "monthly", priority: 0.6 },
  { path: "/company/careers", changeFrequency: "weekly", priority: 0.5 },
  { path: "/responsible-ai", changeFrequency: "yearly", priority: 0.4 },
  { path: "/security", changeFrequency: "yearly", priority: 0.4 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const expanded: Entry[] = [...ROUTES, { path: "/services", changeFrequency: "monthly", priority: 0.9 }, ...SERVICES.map(s => ({ path: `/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })), ...INDUSTRIES.map(i => ({ path: `/industries/${i.slug}`, changeFrequency: "monthly" as const, priority: 0.8 }))];
  return expanded.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
