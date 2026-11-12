import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import CareersClient from "./CareersClient";

const PATH = "/company/careers";

export const metadata = pageMetadata({
  title: "Careers — Open Roles",
  description:
    "CoreFrame is growing. See open roles across engineering, AI and strategy, or introduce yourself if there isn't a listed fit yet.",
  path: PATH,
});

export default function CareersPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Company", path: "/company" },
    { name: "Careers", path: PATH },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CareersClient />
    </>
  );
}
