import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import IndustriesClient from "./IndustriesClient";

const PATH = "/industries";

export const metadata = pageMetadata({
  title: "Industries — Where Coreframe Works",
  description:
    "Coreframe works across industries — deepest so far in industrial & energy, retail & hospitality, enterprise services, and technology, wherever confidential data or complex workflows make private AI worth doing right.",
  path: PATH,
});

export default function IndustriesPage() {
  const jsonLd = breadcrumbJsonLd([{ name: "Industries", path: PATH }]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustriesClient />
    </>
  );
}
