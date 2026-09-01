import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import AboutClient from "./AboutClient";

const PATH = "/about";

export const metadata = pageMetadata({
  title: "About Us — Team & Company",
  description:
    "The team behind Coreframe Technologies — an AI research and engineering company building private AI, enterprise knowledge systems and autonomous workflows.",
  path: PATH,
});

export default function AboutPage() {
  const jsonLd = breadcrumbJsonLd([{ name: "About", path: PATH }]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
