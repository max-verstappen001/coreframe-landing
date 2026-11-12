import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import LabsClient from "./LabsClient";

const PATH = "/labs";

export const metadata = pageMetadata({
  title: "CoreFrame Labs — Applied AI Research",
  description:
    "Inspect the public Custos agent-governance project, code and technical documentation, and explore CoreFrame Labs research directions.",
  path: PATH,
});

export default function LabsPage() {
  const jsonLd = breadcrumbJsonLd([{ name: "Labs", path: PATH }]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LabsClient />
    </>
  );
}
