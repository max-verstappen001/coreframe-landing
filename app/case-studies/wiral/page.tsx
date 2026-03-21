import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Implementation Partnership — Case Study",
  description:
    "How CoreFrame served as an implementation partner — handling product engineering, core workflows, and production-ready deployment.",
};

export default function WiralPage() {
  notFound();
}
