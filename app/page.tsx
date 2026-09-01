import { pageMetadata } from "@/lib/seo";
import HomeClient from "./HomeClient";

export const metadata = pageMetadata({
  title: "Coreframe Technologies — Enterprise & Private AI Engineering",
  description:
    "Coreframe is an AI research and engineering company. We design, deploy and operate private AI, enterprise knowledge systems and autonomous workflows for enterprises.",
  path: "/",
});

export default function HomePage() {
  return <HomeClient />;
}
