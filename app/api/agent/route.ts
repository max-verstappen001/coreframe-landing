import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/seo";
import { SERVICES } from "@/lib/services";
import { region } from "@/lib/region";
import { CAPABILITIES, capabilityHref } from "@/lib/capabilities";

export const dynamic = "force-static";
export const revalidate = 3600;

/**
 * Machine-readable interface for AI agents and answer engines. A structured
 * alternative to scraping the rendered site — mirrors the content in
 * public/llms.txt but as typed JSON, versioned so consumers can rely on the
 * shape. Discoverable via <link rel="alternate" type="application/json">
 * in the document head and referenced from /robots.txt and /llms.txt.
 */
export async function GET() {
  const body = {
    $schema: `${siteConfig.url}/api/agent`,
    version: "1.0",
    type: "organization-interface",
    organization: {
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      description: siteConfig.description,
      url: siteConfig.url,
      email: siteConfig.email,
      sameAs: siteConfig.sameAs,
    },
    region: region.id,
    services: SERVICES.map(s => ({ name: s.title, description: s.summary, url: `${region.origin}/services/${s.slug}` })),
    capabilities: CAPABILITIES.map((c) => ({
      slug: c.slug,
      title: c.title,
      summary: c.oneLiner,
      idealFor: c.forYouIf,
      url: `${siteConfig.url}${capabilityHref(c)}`,
      pageAvailable: Boolean(c.live),
    })),
    engagementModel: {
      steps: ["Discover", "Design", "Deploy", "Operate"],
      canEngagePerCapability: true,
      typicalResponseTime: "1-2 business days",
    },
    links: {
      home: siteConfig.url,
      capabilities: `${siteConfig.url}/capabilities`,
      work: `${siteConfig.url}/work`,
      industries: `${siteConfig.url}/industries`,
      insights: `${siteConfig.url}/insights`,
      labs: `${siteConfig.url}/labs`,
      about: `${siteConfig.url}/about`,
      contact: `${siteConfig.url}/contact`,
      llmsTxt: `${siteConfig.url}/llms.txt`,
      sitemap: `${siteConfig.url}/sitemap.xml`,
    },
    contact: {
      email: siteConfig.email,
      contactFormUrl: `${siteConfig.url}/contact`,
      contactApi: {
        method: "POST",
        url: `${siteConfig.url}/api/contact`,
        body: { name: "string", email: "string", message: "string", company: "string (optional)" },
      },
    },
  };

  return NextResponse.json(body, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
