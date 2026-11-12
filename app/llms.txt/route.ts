import { publishedEngagements } from "@/lib/engagements";
import { PRODUCTS } from "@/lib/products";
import { SERVICES } from "@/lib/services";
import { INDUSTRIES } from "@/lib/industries";
import { region } from "@/lib/region";
export const dynamic = "force-static";
export function GET() {
  const url = region.origin;
  const content = `# CoreFrame Technologies\n\n> ${region.intro}\n\n${region.delivery}\n\nContact: info@coreframetech.in\n\n## Services\n\n${SERVICES.map(s => `- [${s.title}](${url}/services/${s.slug}): ${s.summary}`).join("\n")}\n\n## Products and innovation\n\n${PRODUCTS.map(p => `- [${p.name}](${url}/products#${p.id}): ${p.kind}. ${p.status}. ${p.boundary}`).join("\n")}\n\n## Industries\n\n${INDUSTRIES.map(i => `- [${i.title}](${url}/industries/${i.slug})`).join("\n")}\n\n## Selected clients and engagements\n\n${publishedEngagements().map(entry => `- [${entry.name}](${url}/work#engagement-${entry.id}): ${entry.description}`).join("\n")}\n\n## Company and delivery\n\n- [Company](${url}/company)\n- [Selected work](${url}/work): Confirmed client engagements, followed by clearly labeled illustrative use cases.\n- [CoreFrame Labs](${url}/labs): Public Custos engineering reference and research directions.\n- [Contact](${url}/contact): Request a discovery call or assessment.\n- [Security](${url}/security)\n- [Responsible AI](${url}/responsible-ai)\n- [Privacy](${url}/privacy)\n- [Machine-readable interface](${url}/api/agent)\n\nDelivery: Discover → Design → Deploy → Operate.\n`;
  return new Response(content, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
