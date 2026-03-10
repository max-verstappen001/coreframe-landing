import { Metadata } from "next";
import WiralClient from "./WiralClient";

export const metadata: Metadata = {
  title: "Wiral.ai — Case Study",
  description:
    "How CoreFrame served as the implementation partner for Wiral.ai — handling product engineering, core workflows, and production-ready deployment.",
};

export default function WiralPage() {
  return <WiralClient />;
}
