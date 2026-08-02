import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { ServicesListSection } from "@/components/inner/services-list";

export const metadata: Metadata = {
  title: "Services | APV Mobile Mechanics",
  description: "Explore our professional mobile car repair, engine diagnostics, brake repair, battery replacement, and emergency roadside assistance services.",
};

export default function ServicesPage() {
  return <main><PageBanner title="Services" /><ServicesListSection/></main>;
}
