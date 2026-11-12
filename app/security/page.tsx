import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import SecurityClient from "./SecurityClient";
import { FAQ_ITEMS } from "./faq";

const PATH = "/security";

export const metadata = pageMetadata({
  title: "Security Practices & Architecture",
  description:
    "CoreFrame's security practices — encryption, access control, environment isolation, customer-controlled deployments and incident response matched to each engagement.",
  path: PATH,
});

export default function SecurityPage() {
  const jsonLd = [
    breadcrumbJsonLd([{ name: "Security", path: PATH }]),
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
      <SecurityClient />
    </>
  );
}
