import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import WorkClient from "./WorkClient";

const PATH = "/work";

export const metadata = pageMetadata({
  title: "Work — Selected Engagements",
  description:
    "Selected engagements in private AI, enterprise knowledge systems and workflow automation. Problem, constraints, architecture, outcome.",
  path: PATH,
});

export default function WorkPage() {
  const jsonLd = breadcrumbJsonLd([{ name: "Work", path: PATH }]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkClient />
    </>
  );
}
