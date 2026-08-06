import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { AboutCompanySection, InnerMarquee, InnerVideo, LocationsSection, ProcessSection, TeamSection, TestimonialsSection } from "@/components/inner/about-sections";

export const metadata: Metadata = {
  title: "About APV Mobile Mechanics | Hobart Car Repairs",
  description: "Learn about APV Mobile Mechanics, Hobart's trusted mobile car repair team. Ten years of honest advice, fair pricing and reliable workmanship.",
};

export default function AboutPage() {
  return <main className="about-page"><PageBanner title="About APV Mobile Mechanics" /><InnerMarquee/><AboutCompanySection/><ProcessSection/><InnerVideo/><LocationsSection/></main>;
}
