import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { CUSTOS, LAB_REFERENCES } from "@/lib/labs";
import LabsSubClient from "../LabsSubClient";

const PATH = "/labs/research";

export const metadata = pageMetadata({
  title: "Research — CoreFrame Labs",
  description:
    "Research directions and public engineering references from CoreFrame Labs, starting with agent governance and permission boundaries.",
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
        eyebrow="CoreFrame Labs / Research"
        title="Research questions and engineering references."
        body="Current public material centers on agent governance. Retrieval evaluation, multilingual AI and model deployment are research directions; no benchmark results are claimed here."
        repos={LAB_REFERENCES.map(item => ({ name: item.title, description: item.body, href: item.href, tags: CUSTOS.tags }))}
      />
    </>
  );
}
