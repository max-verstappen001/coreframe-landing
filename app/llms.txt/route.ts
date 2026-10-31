import { SERVICES } from "@/lib/services";
import { INDUSTRIES } from "@/lib/industries";
import { region } from "@/lib/region";
export const dynamic = "force-static";
export function GET() {
  const url = region.origin;
  const content = `# Coreframe Technologies\n\n> ${region.intro}\n\n${region.delivery}\n\nContact: info@coreframetech.in\n\n## Services\n\n${SERVICES.map(s => `- [${s.title}](${url}/services/${s.slug}): ${s.summary}`).join("\n")}\n\n## Industries\n\n${INDUSTRIES.map(i => `- [${i.title}](${url}/industries/${i.slug})`).join("\n")}\n\n## Company and delivery\n\n- [Team](${url}/about)\n- [Selected work](${url}/work): Existing anonymized engagement summaries; public results are not published.\n- [Coreframe Labs](${url}/labs): A distinct applied research initiative.\n- [Contact](${url}/contact): Request a discovery call or assessment.\n- [Security](${url}/security)\n- [Responsible AI](${url}/responsible-ai)\n- [Privacy](${url}/privacy)\n- [Machine-readable interface](${url}/api/agent)\n\nDelivery: Discover → Design → Deploy → Operate.\n`;
  return new Response(content, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
