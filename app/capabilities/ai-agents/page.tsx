import { pageMetadata, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import AIAgentsClient from "./AIAgentsClient";
import { FAQ_ITEMS } from "./faq";

const TITLE = "AI Agents & Autonomous Workflows";
const DESCRIPTION =
  "Tool-using AI agents, multi-agent systems and agentic workflow automation with human-in-the-loop oversight, MCP integrations and full auditability.";
const PATH = "/capabilities/ai-agents";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function AIAgentsPage() {
  const jsonLd = [
    serviceJsonLd({ name: TITLE, description: DESCRIPTION, path: PATH }),
    faqJsonLd(FAQ_ITEMS),
    breadcrumbJsonLd([
      { name: "Capabilities", path: "/capabilities" },
      { name: "AI Agents & Autonomous Workflows", path: PATH },
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
      <AIAgentsClient />
    </>
  );
}
