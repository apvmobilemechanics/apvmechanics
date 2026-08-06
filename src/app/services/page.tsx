import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { ServicesListSection } from "@/components/inner/services-list";

export const metadata: Metadata = {
  title: "Car Repair Services Hobart | APV Mobile Mechanics",
  description: "Explore our full range of mobile car repair services in Hobart, including diagnostics, brakes, batteries, oil changes and roadside assistance.",
};

export default function ServicesPage() {
  return <main><PageBanner title="Our Mobile Car Repair Services In Hobart" /><ServicesListSection/></main>;
}
