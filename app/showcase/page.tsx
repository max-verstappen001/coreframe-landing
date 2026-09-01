import { pageMetadata } from "@/lib/seo";
import ShowcaseClient from "./ShowcaseClient";

export const metadata = pageMetadata({
  title: "Showcase",
  description: "Component and graphic primitives — sample usage.",
  path: "/showcase",
  index: false,
});

export default function ShowcasePage() {
  return <ShowcaseClient />;
}
