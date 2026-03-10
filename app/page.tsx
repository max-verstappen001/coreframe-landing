import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Strategic Digital Transformation, Delivered",
  description:
    "CoreFrame partners with founders and operators to improve margins, modernize operations, and build scalable digital systems—leveraging technology and applied AI where it creates measurable value.",
};

export default function HomePage() {
  return <HomeClient />;
}
