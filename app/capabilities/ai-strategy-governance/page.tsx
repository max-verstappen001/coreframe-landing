import { Metadata } from "next";
import GovernanceClient from "./GovernanceClient";

export const metadata: Metadata = {
  title: "AI Strategy, Governance & Evaluation",
  description:
    "AI readiness assessments, roadmaps, model evaluation, red-teaming and governance — advisory that de-risks enterprise AI before and after deployment.",
};

export default function AIStrategyGovernancePage() {
  return <GovernanceClient />;
}
