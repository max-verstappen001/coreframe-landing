import type { Metadata } from "next";
import { isUAE, region } from "./region";

/**
 * Single source of truth for site-wide identity — used by metadata,
 * JSON-LD, the sitemap, llms.txt and the /api/agent interface, so all
 * four stay in sync with one edit.
 */
export const siteConfig = {
  name: "Coreframe Technologies",
  legalName: "Coreframe Technologies Private Limited",
  shortName: "Coreframe",
  url: region.origin,
  description:
    region.intro,
  tagline: "Enterprise AI Engineering & Implementation",
  email: "info@coreframetech.in",
  telephone: "+91 63838 31327",
  logo: "/logos/coreframe-mark.png",
  wordmark: "/logos/coreframe-wordmark.png",
  sameAs: ["https://www.linkedin.com/company/coreframe-technologies"],
  locale: region.locale,
};

interface PageMetadataInput {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/capabilities/private-ai". Defaults to "/". */
  path?: string;
  /** Set false for internal/dev pages that shouldn't be indexed. */
  index?: boolean;
  /** Prevent the root title template being appended (used for the homepage). */
  absoluteTitle?: boolean;
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
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const regionalTitle = isUAE ? `${title} | UAE & GCC` : title;
  const regionalDescription = isUAE ? `${description} For UAE and GCC organizations.` : description;
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  // Next's opengraph-image file convention only cascades to segments that
  // don't declare their own `openGraph` metadata — since every page here
  // sets title/description, it must also reference the shared OG image
  // explicitly, or every non-root page silently loses its social image.
  const ogImage = { url: `${siteConfig.url}/opengraph-image`, width: 1200, height: 630 };

  return {
    title: absoluteTitle ? { absolute: regionalTitle } : regionalTitle,
    description: regionalDescription,
    alternates: {
      canonical: url,
      languages: { "en-IN": `https://coreframetech.in${path === "/" ? "" : path}`, "en-AE": `https://coreframe.ae${path === "/" ? "" : path}`, "x-default": `https://coreframetech.in${path === "/" ? "" : path}` },
    },
    openGraph: {
      title: regionalTitle,
      description: regionalDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: regionalTitle,
      description: regionalDescription,
      images: [ogImage.url],
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

/** Homepage-only WebSite markup used by search engines to resolve the site name. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: `${siteConfig.url}/`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    publisher: { "@id": `${siteConfig.url}/#organization` },
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
    telephone: siteConfig.telephone,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      telephone: siteConfig.telephone,
      availableLanguage: "English",
    },
    sameAs: siteConfig.sameAs,
    knowsAbout: [
      "Private AI",
      "On-premise LLM deployment",
      "Enterprise AI",
      "AI infrastructure",
      "LLMOps",
      "Edge AI",
      "Software engineering",
    ],
  };
}

/**
 * Sitewide SiteNavigationElement JSON-LD — signals the site's primary
 * pages to search engines as a hint for sitelink selection on branded
 * queries. Kept in sync with the primary nav in components/Navbar.tsx.
 */
export function siteNavigationJsonLd() {
  const items: { name: string; path: string }[] = [
    { name: "Services", path: "/services" },
    { name: "Capabilities", path: "/capabilities" },
    { name: "Industries", path: "/industries" },
    { name: "Coreframe Labs", path: "/labs" },
    { name: "Work", path: "/work" },
    { name: "Insights", path: "/insights" },
    { name: "Company", path: "/company" },
    { name: "Careers", path: "/company/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: items.map((item) => item.name),
    url: items.map((item) => `${siteConfig.url}${item.path}`),
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
    areaServed: isUAE ? ["United Arab Emirates", "GCC"] : "Worldwide",
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
  const trail = [{ name: "Home", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
