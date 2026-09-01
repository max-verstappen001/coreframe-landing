import { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Coreframe is growing. See open roles, or introduce yourself if there isn't a listed fit yet.",
};

export default function CareersPage() {
  return <CareersClient />;
}
