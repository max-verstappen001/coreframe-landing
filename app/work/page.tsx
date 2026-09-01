import { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description:
    "Selected engagements in private AI, enterprise knowledge systems and workflow automation — anonymized where attribution is pending. Problem, constraints, architecture, outcome.",
};

export default function WorkPage() {
  return <WorkClient />;
}
