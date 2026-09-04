import { pageMetadata, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import GovernanceClient from "./GovernanceClient";
import { FAQ_ITEMS } from "./faq";

const TITLE = "AI Strategy, Governance & Evaluation";
const DESCRIPTION =
  "AI readiness assessments, roadmaps, model evaluation, red-teaming, governance and EU AI Act compliance assessment — advisory that de-risks enterprise AI before and after deployment.";
const PATH = "/capabilities/ai-strategy-governance";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function AIStrategyGovernancePage() {
  const jsonLd = [
    serviceJsonLd({ name: TITLE, description: DESCRIPTION, path: PATH }),
    faqJsonLd(FAQ_ITEMS),
    breadcrumbJsonLd([
      { name: "Capabilities", path: "/capabilities" },
      { name: "AI Strategy, Governance & Evaluation", path: PATH },
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
      <GovernanceClient />
    </>
  );
}
