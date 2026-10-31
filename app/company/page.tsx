import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import CompanyClient from "./CompanyClient";

const PATH = "/company";

export const metadata = pageMetadata({
  title: "Company — Enterprise AI Engineering",
  description:
    "Coreframe Technologies is an enterprise AI engineering and implementation company. Meet our team and explore how we design, deploy and operate production AI.",
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
