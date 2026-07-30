import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { AboutCompanySection, InnerMarquee, InnerVideo, LocationsSection, ProcessSection, TeamSection, TestimonialsSection } from "@/components/inner/about-sections";

export const metadata: Metadata = { title: "About | Automart" };

export default function AboutPage() {
  return <main className="about-page"><PageBanner title="About Us" /><InnerMarquee/><AboutCompanySection/><ProcessSection/><InnerVideo/><TeamSection/><LocationsSection/><TestimonialsSection/></main>;
}
