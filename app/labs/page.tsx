import { Metadata } from "next";
import LabsClient from "./LabsClient";

export const metadata: Metadata = {
  title: "Coreframe Labs — Applied AI Research",
  description:
    "Applied research in private AI, small language models, agent infrastructure and AI evaluation. Experiments, technical reports, benchmarks and open-source from Coreframe Labs.",
};

export default function LabsPage() {
  return <LabsClient />;
}
