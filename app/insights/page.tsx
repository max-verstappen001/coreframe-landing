import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import InsightsClient from "./InsightsClient";

const PATH = "/insights";

export const metadata = pageMetadata({
  title: "Insights — Private & Enterprise AI",
  description:
    "Practical engineering notes on scoping an AI pilot: operational baselines, retrieval evaluation, agent permissions and ownership before release.",
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
