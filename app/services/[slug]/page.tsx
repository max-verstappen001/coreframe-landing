import { notFound } from "next/navigation";
import { ServiceLanding } from "@/components/ServiceLanding";
import { SERVICES, serviceContent } from "@/lib/services";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { region } from "@/lib/region";

export const dynamicParams = false;
export function generateStaticParams() { return SERVICES.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) notFound();
  return pageMetadata({ title: service.title, description: service.summary, path: `/services/${service.slug}` });
}
export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) notFound();
  const path = `/services/${service.slug}`;
  const data = [serviceJsonLd({ name: service.title, description: service.summary, path }), breadcrumbJsonLd([{ name: "Services", path: "/services" }, { name: service.short, path }])];
  const content = serviceContent(service);
  content.intro += ` ${region.delivery}`;
  return <>{data.map((item, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />)}<ServiceLanding content={content} source={path} /></>;
}
