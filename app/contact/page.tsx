import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import ContactClient from "./ContactClient";

const PATH = "/contact";

export const metadata = pageMetadata({
  title: "Contact — Start a Project",
  description:
    "Discuss your AI initiative with CoreFrame. Share your business challenge to scope private AI, knowledge systems, workflow agents or a future product pilot.",
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
