import Image from "next/image";
import { Headphones, SearchCheck } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { ThemeButton } from "@/components/common/button";

export function WhyChooseSection() {
  return (
    <section className="section choose choose-reference">
      <div className="container choose-reference__grid">
        <div className="choose__content" data-reveal="left">
          <SectionHeading
            eyebrow="WHY CHOOSE US"
            title={<>Why Choose APV<br />Mobile Mechanics</>}
            animatedText="Why Choose APV Mobile Mechanics"
          />
          <p>Choosing a mechanic is about trust as much as it is about tools. Local mechanics who understand Hobart roads, hills and weather.</p>
          <div className="choose-reference__middle">
            <div className="choose-reference__solution">
              <i><SearchCheck /></i>
              <b>Innovative Car<br />Solutions</b>
            </div>
            <p>Clear, upfront pricing with no surprise call out fees and a warranty on every repair for genuine peace of mind.</p>
          </div>
          <div className="choose-reference__bottom">
            <ThemeButton href="/about">Read More</ThemeButton>
          </div>
        </div>
        <div className="choose__visual" data-reveal="right">
          <Image
            src="/assets/images/resources/choose-male-mechanic.jpg"
            alt="APV Mobile Mechanics Male Specialist"
            width={482}
            height={604}
            style={{ borderRadius: "20px", objectFit: "cover", width: "100%", height: "100%" }}
          />
          <div className="choose-reference__support">
            <i><Headphones /></i>
            <span><b>24/7 Hour Support</b><small>Offering premium service</small></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export const WhyChoose = WhyChooseSection;
