import type { Metadata } from "next";

/**
 * Single source of truth for site-wide identity — used by metadata,
 * JSON-LD, the sitemap, llms.txt and the /api/agent interface, so all
 * four stay in sync with one edit.
 */
export const siteConfig = {
  name: "Coreframe Technologies",
  legalName: "CoreFrame Technologies Private Limited",
  shortName: "Coreframe",
  url: "https://coreframetech.in",
  description:
    "Coreframe is an AI research and engineering company helping enterprises deploy private AI, intelligent software and autonomous systems across their operations — on-premise, private cloud, hybrid or edge.",
  tagline: "Enterprise & Private AI Engineering",
  email: "info@coreframetech.in",
  logo: "/logos/coreframe-mark.png",
  wordmark: "/logos/coreframe-wordmark.png",
  sameAs: ["https://www.linkedin.com/company/coreframe-technologies"],
  locale: "en_US",
};

interface PageMetadataInput {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/capabilities/private-ai". Defaults to "/". */
  path?: string;
  /** Set false for internal/dev pages that shouldn't be indexed. */
  index?: boolean;
}

/**
 * Builds a page's Metadata object with consistent canonical URL, OpenGraph
 * and Twitter card data layered on top of title/description. Next.js does
 * not deep-merge nested metadata fields (openGraph, twitter) from the root
 * layout into page-level metadata, so every indexable page should use this
 * helper rather than exporting a bare `{ title, description }` object.
 */
export function pageMetadata({
  title,
  description,
  path = "/",
  index = true,
}: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  // Next's opengraph-image file convention only cascades to segments that
  // don't declare their own `openGraph` metadata — since every page here
  // sets title/description, it must also reference the shared OG image
  // explicitly, or every non-root page silently loses its social image.
  const ogImage = { url: `${siteConfig.url}/opengraph-image`, width: 1200, height: 630 };

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

/** Sitewide Organization JSON-LD, injected once in the root layout. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: siteConfig.sameAs,
    knowsAbout: [
      "Private AI",
      "On-premise LLM deployment",
      "Enterprise AI",
      "AI agents",
      "AI infrastructure",
      "AI governance",
      "Software engineering",
    ],
  };
}

/** JSON-LD for a specific capability/service page. */
export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${path}`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: "Worldwide",
  };
}

/** JSON-LD for a FAQ section — improves eligibility for AI answer engines and rich results. */
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/** JSON-LD breadcrumb trail for a page nested under one or more sections. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
