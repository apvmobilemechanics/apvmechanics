import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { ContactInfo, ContactMapForm } from "@/components/inner/contact-content";

export const metadata: Metadata = {
  title: "Contact APV Mobile Mechanics | Book A Mechanic In Hobart",
  description: "Book your mobile mechanic in Hobart today. Call 0424 411 375 or send us your details and we will confirm a time that suits you.",
};

export default function ContactPage() {
  return <main><PageBanner title="Contact APV Mobile Mechanics" /><ContactInfo/><ContactMapForm/></main>;
}
