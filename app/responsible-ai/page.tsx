import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import ResponsibleAIClient from "./ResponsibleAIClient";
import { FAQ_ITEMS } from "./faq";

const PATH = "/responsible-ai";

export const metadata = pageMetadata({
  title: "Responsible AI — Our Approach",
  description:
    "How CoreFrame handles AI limitations — governance, human oversight, evidence-backed outputs and clear responsibility allocation, stated honestly.",
  path: PATH,
});

export default function ResponsibleAIPage() {
  const jsonLd = [
    breadcrumbJsonLd([{ name: "Responsible AI", path: PATH }]),
    faqJsonLd(FAQ_ITEMS),
  ];
  return (
    <>
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <ResponsibleAIClient />
    </>
  );
}
