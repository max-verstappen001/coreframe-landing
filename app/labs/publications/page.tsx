import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { CUSTOS } from "@/lib/labs";
import LabsSubClient from "../LabsSubClient";

const PATH = "/labs/publications";

export const metadata = pageMetadata({
  title: "Publications — CoreFrame Labs",
  description:
    "Public technical reading from the Custos project. Design documentation is distinguished from formal research publications.",
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
        eyebrow="CoreFrame Labs / Publications"
        title="Technical reading."
        body="No formal research papers or preprints are listed. Explore the public project documentation for an inspectable engineering reference."
        repos={[{ name: "Custos design documentation", description: "Implementation notes, design documents and security considerations in the public project repository.", href: `${CUSTOS.href}/tree/main/docs`, tags: ["Engineering documentation"] }]}
      />
    </>
  );
}
