import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { ContactInfo, ContactMapForm } from "@/components/inner/contact-content";

export const metadata: Metadata = {
  title: "Contact Us | APV Mobile Mechanics",
  description: "Get in touch with APV Mobile Mechanics. Call 0424 411 375 or email apvmobilemechanics@gmail.com for expert mobile car repairs and vehicle servicing.",
};

export default function ContactPage() {
  return <main><PageBanner title="Contact Us" /><ContactInfo/><ContactMapForm/></main>;
}
