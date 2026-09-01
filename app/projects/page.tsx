import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import ProjectsClient from "./ProjectsClient";

const PATH = "/projects";

export const metadata = pageMetadata({
  title: "Projects — Selected Work",
  description:
    "A portfolio of systems Coreframe has designed and built — private AI, enterprise knowledge systems and production software engineering.",
  path: PATH,
});

export default function ProjectsPage() {
  const jsonLd = breadcrumbJsonLd([{ name: "Projects", path: PATH }]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsClient />
    </>
  );
}
