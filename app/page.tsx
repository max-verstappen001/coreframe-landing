import { pageMetadata, websiteJsonLd } from "@/lib/seo";
import { region } from "@/lib/region";
import { publishedEngagements } from "@/lib/engagements";
import { SelectedClients } from "@/components/SelectedClients";
import HomeClient from "./HomeClient";

export const metadata = pageMetadata({
  title: "CoreFrame Technologies | Enterprise AI Engineering",
  description:
    region.intro,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  const entries = publishedEngagements();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
      <HomeClient clientShowcase={<SelectedClients entries={entries} />} />
    </>
  );
}
