import { pageMetadata, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import PrivateAIClient from "./PrivateAIClient";
import { FAQ_ITEMS } from "./faq";

const TITLE = "Private AI & On-Premise LLM Deployment";
const DESCRIPTION =
  "On-premise, private-cloud, hybrid and air-gapped LLM deployment. Small language models and local inference — AI that runs where your data lives.";
const PATH = "/capabilities/private-ai";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function PrivateAIPage() {
  const jsonLd = [
    serviceJsonLd({ name: TITLE, description: DESCRIPTION, path: PATH }),
    faqJsonLd(FAQ_ITEMS),
    breadcrumbJsonLd([
      { name: "Capabilities", path: "/capabilities" },
      { name: "Private AI & On-Premise LLMs", path: PATH },
    ]),
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
      <PrivateAIClient />
    </>
  );
}
