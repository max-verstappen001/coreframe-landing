import { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries — Where Coreframe Works",
  description:
    "Industrial, energy & engineering; retail & hospitality; enterprise & professional services; technology & digital platforms — focused enterprise AI and software engineering.",
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
