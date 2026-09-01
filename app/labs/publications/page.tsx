import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import LabsSubClient from "../LabsSubClient";

const PATH = "/labs/publications";

export const metadata = pageMetadata({
  title: "Publications — Coreframe Labs",
  description:
    "Formal write-ups and preprints from Coreframe Labs on private AI, small language models and agent infrastructure, with honest status labels.",
  path: PATH,
});

export default function PublicationsPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Labs", path: "/labs" },
    { name: "Publications", path: PATH },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LabsSubClient
        eyebrow="Coreframe Labs / Publications"
        title="Publications."
        body="Formal write-ups and preprints, published as results warrant."
      />
    </>
  );
}
