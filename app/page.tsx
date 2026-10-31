import { pageMetadata, websiteJsonLd } from "@/lib/seo";
import { region } from "@/lib/region";
import HomeClient from "./HomeClient";

export const metadata = pageMetadata({
  title: "Coreframe Technologies | Enterprise AI Engineering",
  description:
    region.intro,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
      <HomeClient />
    </>
  );
}
