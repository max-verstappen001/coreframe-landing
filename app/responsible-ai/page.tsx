import { Metadata } from "next";
import ResponsibleAIClient from "./ResponsibleAIClient";

export const metadata: Metadata = {
  title: "Responsible AI",
  description:
    "How Coreframe handles AI limitations — governance, human oversight, evidence-backed outputs, evaluation and clear responsibility allocation. Honest about what AI can and cannot do.",
};

export default function ResponsibleAIPage() {
  return <ResponsibleAIClient />;
}
