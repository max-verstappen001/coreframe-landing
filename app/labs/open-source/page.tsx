import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import LabsSubClient from "../LabsSubClient";

const PATH = "/labs/open-source";

export const metadata = pageMetadata({
  title: "Open Source — Coreframe Labs",
  description:
    "Reusable tooling and libraries released publicly by Coreframe Labs, as they're ready for others to use.",
  path: PATH,
});

export default function OpenSourcePage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Labs", path: "/labs" },
    { name: "Open Source", path: PATH },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LabsSubClient
        eyebrow="Coreframe Labs / Open Source"
        title="Open source."
        body="Reusable tooling and libraries we release publicly, as they're ready."
        repos={[
          {
            name: "Custos",
            description:
              "Runtime governance and policy enforcement for AI agent tool calls in MCP systems. Intercepts every tool invocation, evaluates it against a deny-by-default YAML policy, and records the decision in a tamper-evident, Ed25519-signed audit ledger — with identical wire format across Python and Node.",
            href: "https://github.com/sanjaynandanj/custos",
            tags: ["Policy Engine", "MCP", "Ed25519 Audit Ledger", "Python & Node"],
          },
        ]}
      />
    </>
  );
}
