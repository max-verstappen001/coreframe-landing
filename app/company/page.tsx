import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import CompanyClient from "./CompanyClient";

const PATH = "/company";

export const metadata = pageMetadata({
  title: "Company — Research to Transformation",
  description:
    "Coreframe Technologies is an AI research and engineering company — research generates capability, engineering builds systems, transformation runs them in operations.",
  path: PATH,
});

export default function CompanyPage() {
  const jsonLd = breadcrumbJsonLd([{ name: "Company", path: PATH }]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CompanyClient />
    </>
  );
}
