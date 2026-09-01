import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import ContactClient from "./ContactClient";

const PATH = "/contact";

export const metadata = pageMetadata({
  title: "Contact — Start a Project",
  description:
    "Start a project with Coreframe. Tell us what you're building — private AI, agents or a full engineering engagement — we'll respond within 1–2 business days.",
  path: PATH,
});

export default function ContactPage() {
  const jsonLd = breadcrumbJsonLd([{ name: "Contact", path: PATH }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
