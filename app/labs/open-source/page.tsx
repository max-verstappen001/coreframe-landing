import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { CUSTOS } from "@/lib/labs";
import LabsSubClient from "../LabsSubClient";

const PATH = "/labs/open-source";

export const metadata = pageMetadata({
  title: "Open Source — CoreFrame Labs",
  description:
    "Explore the public Custos repository: MCP tool-call policy enforcement, Python and Node implementations, and engineering documentation.",
  path: PATH,
});

export default function OpenSourcePage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Labs", path: "/labs" },
    { name: "Open Source", path: PATH },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LabsSubClient
        eyebrow="CoreFrame Labs / Open Source"
        title="Open source."
        body="A public engineering reference for tool-call governance. Review the repository, documentation and limitations before evaluating it for your environment."
        repos={[{ ...CUSTOS }]}
      />
    </>
  );
}
