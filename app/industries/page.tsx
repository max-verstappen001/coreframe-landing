import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import IndustriesClient from "./IndustriesClient";

const PATH = "/industries";

export const metadata = pageMetadata({
  title: "Industries — Where Coreframe Works",
  description:
    "Industrial, energy & engineering; retail & hospitality; enterprise services; technology & digital platforms — where Coreframe focuses its AI and engineering work.",
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
