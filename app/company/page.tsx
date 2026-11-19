import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import CompanyClient from "./CompanyClient";

const PATH = "/company";

export const metadata = pageMetadata({
  title: "Company — AI Products & Enterprise Engineering",
  description:
    "Founded in 2026, CoreFrame develops AI products and delivers enterprise engineering. Meet founder Sanjay Nanda N J and explore our product and delivery approach.",
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
