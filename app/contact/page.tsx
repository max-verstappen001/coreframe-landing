import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import ContactClient from "./ContactClient";

const PATH = "/contact";

export const metadata = pageMetadata({
  title: "Contact — Product Demos, Pilots & Enterprise Projects",
  description:
    "Request a product demo, discuss a future Call Intelligence pilot, scope an enterprise AI project or explore a partnership with CoreFrame.",
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
