import type { Metadata } from "next";
import ShowcaseClient from "./ShowcaseClient";

export const metadata: Metadata = {
  title: "Showcase",
  description: "Component and graphic primitives — sample usage.",
};

export default function ShowcasePage() {
  return <ShowcaseClient />;
}
