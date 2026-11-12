import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { publishedEngagements } from "@/lib/engagements";
import { ClientEngagements } from "@/components/ClientEngagements";
import WorkClient from "./WorkClient";

const PATH = "/work";

const hasPublishedEngagements = publishedEngagements().length > 0;

export const metadata = pageMetadata({
  title: hasPublishedEngagements ? "Work — Selected Clients & Engagements" : "Work — Engineering Use Cases",
  description: hasPublishedEngagements
    ? "Selected clients and engagements supported through software engineering, AI development and technology delivery, with clear relationship and contribution descriptions."
    : "Illustrative enterprise AI use cases covering private knowledge systems, connected operations and governed workflow automation, with proposed approaches and expected value.",
  path: PATH,
});

export default function WorkPage() {
  const entries = publishedEngagements();
  const jsonLd = breadcrumbJsonLd([{ name: "Work", path: PATH }]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkClient hasEngagements={entries.length > 0} clientEngagements={<ClientEngagements entries={entries} />} />
    </>
  );
}
