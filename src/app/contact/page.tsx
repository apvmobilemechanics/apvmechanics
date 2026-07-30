import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { ContactInfo, ContactMapForm } from "@/components/inner/contact-content";

export const metadata: Metadata = { title: "Contact | Automart" };

export default function ContactPage() {
  return <main><PageBanner title="Contact" /><ContactInfo/><ContactMapForm/></main>;
}
