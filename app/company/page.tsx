import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import CompanyClient from "./CompanyClient";

const PATH = "/company";

export const metadata = pageMetadata({
  title: "Company — Enterprise AI Engineering",
  description:
    "CoreFrame Technologies is an enterprise AI engineering and implementation company. Meet founder Sanjay Nanda N J and explore our engineering approach, product development and startup program participation.",
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
