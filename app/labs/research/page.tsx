import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import LabsSubClient from "../LabsSubClient";

const PATH = "/labs/research";

export const metadata = pageMetadata({
  title: "Research — Coreframe Labs",
  description:
    "Technical reports, architecture studies and model evaluations from Coreframe Labs on private AI and agent infrastructure, published as results mature.",
  path: PATH,
});

export default function ResearchPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Labs", path: "/labs" },
    { name: "Research", path: PATH },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LabsSubClient
        eyebrow="Coreframe Labs / Research"
        title="Research."
        body="Technical reports, architecture studies and model evaluations — published as results mature, not on a schedule."
      />
    </>
  );
}
