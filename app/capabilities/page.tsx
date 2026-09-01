import { pageMetadata, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import CapabilitiesClient from "./CapabilitiesClient";
import { FAQ_ITEMS } from "./faq";

const PATH = "/capabilities";

export const metadata = pageMetadata({
  title: "Capabilities — AI Engineering Lifecycle",
  description:
    "Private AI, enterprise knowledge systems, AI agents, infrastructure, software engineering and governance — capabilities across the full AI engineering lifecycle.",
  path: PATH,
});

export default function CapabilitiesPage() {
  const jsonLd = [
    faqJsonLd(FAQ_ITEMS),
    breadcrumbJsonLd([{ name: "Capabilities", path: PATH }]),
  ];

  return (
    <>
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <CapabilitiesClient />
    </>
  );
}
