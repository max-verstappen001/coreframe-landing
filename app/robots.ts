import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

// Crawlers used by AI answer engines and agent platforms (ChatGPT, Perplexity,
// Claude, Google AI Overviews, Bing Copilot, Common Crawl-fed models).
// Listed explicitly and allowed so the site is discoverable by the agents and
// answer engines this content is optimized for.
const AI_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "Bingbot",
  "CCBot",
  "Applebot-Extended",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/showcase"],
      },
      ...AI_AGENTS.map((userAgent) => ({
        userAgent,
        allow: ["/", "/api/agent", "/llms.txt"],
        disallow: ["/showcase"],
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
