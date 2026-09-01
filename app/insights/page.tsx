import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import InsightsClient from "./InsightsClient";

const PATH = "/insights";

export const metadata = pageMetadata({
  title: "Insights — Private & Enterprise AI",
  description:
    "Technical writing on private AI, on-premise LLMs, enterprise RAG, AI infrastructure and governance — from Coreframe's engineers and researchers.",
  path: PATH,
});

export default function InsightsPage() {
  const jsonLd = breadcrumbJsonLd([{ name: "Insights", path: PATH }]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InsightsClient />
    </>
  );
}
