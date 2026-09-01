import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import LabsClient from "./LabsClient";

const PATH = "/labs";

export const metadata = pageMetadata({
  title: "Coreframe Labs — Applied AI Research",
  description:
    "Applied research in private AI, small language models and agent infrastructure. Experiments, technical reports and open-source from Coreframe Labs.",
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
