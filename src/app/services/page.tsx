import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { ServicesListSection } from "@/components/inner/services-list";

export const metadata: Metadata = { title: "Services | Automart" };

export default function ServicesPage() {
  return <main><PageBanner title="Services V-1" /><ServicesListSection/></main>;
}
