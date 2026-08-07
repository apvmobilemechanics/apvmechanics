"use client";

import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/common/section-heading";
import { PHONE } from "@/constants";

const faqs = [
  ["What types of vehicles do you service?", "We service most makes and models, including petrol, diesel and hybrid vehicles, for everyday drivers and small businesses across Hobart."],
  ["How often should I get my car serviced?", "Most vehicles benefit from a service every six to twelve months, depending on how much you drive and what the manufacturer recommends."],
  ["Do you provide a warranty on repairs?", "Yes. Every repair and every part we fit is covered by a clear service warranty, so you can drive away with confidence."],
  ["Can I book an appointment online?", "Yes. Send us your details through our contact form or call us directly and our team will confirm a time that works for you."],
  ["Do you really come to my location?", "Yes. Our service vehicle carries the tools and common parts needed to complete most jobs at your home, workplace or roadside, anywhere within our Hobart service area."],
];

export function FaqList() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {faqs.map(([q, a], i) => (
        <div className={open === i ? "open" : ""} key={q}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{q}</span>
            <ChevronDown />
          </button>
          <div className="faq-answer">
            <p>{a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="section faq">
      <div className="container split">
        <div className="faq__image">
          <Image
            src="/assets/images/generated/apv-emergency-mechanic.webp"
            alt="APV emergency mobile mechanic"
            fill
            sizes="(max-width: 768px) 100vw, 560px"
          />
          <div>
            <Phone />
            <span>
              Call for emergency service<b>{PHONE}</b>
            </span>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="FAQ" title={<>Common Car Repair <em>Asked Questions!</em></>} />
          <FaqList />
        </div>
      </div>
    </section>
  );
}

export const Faq = FaqSection;
