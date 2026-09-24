import { pageMetadata, websiteJsonLd } from "@/lib/seo";
import HomeClient from "./HomeClient";

export const metadata = pageMetadata({
  title: "Coreframe Technologies | Private AI & Edge AI",
  description:
    "Coreframe Technologies builds private LLMs, on-premise AI and edge AI systems for enterprises—from deployment and integration to ongoing operations.",
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
