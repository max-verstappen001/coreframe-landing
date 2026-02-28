import { Metadata } from "next";
import MarginXClient from "./MarginXClient";

export const metadata: Metadata = {
  title: "MarginX — Case Study",
  description:
    "How CoreFrame helped a restaurant group improve margins through holistic digital transformation, POS integration, and margin intelligence dashboards.",
};

export default function MarginXPage() {
  return <MarginXClient />;
}
