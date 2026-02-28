import { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected engagements where CoreFrame partnered with operators to deliver measurable digital transformation.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
