import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { services } from "@/lib/site-data";

const serviceDescriptions: Record<string, string> = {
  "mobile-car-repair": "General mechanical repairs and scheduled servicing carried out at your home, workplace or a convenient roadside location.",
  "engine-diagnosis": "Accurate fault finding using professional scan tools, giving you a clear explanation of what is wrong before any work begins.",
  "brake-repair": "Pads, discs, fluid and full brake system checks, because reliable brakes matter even more on Hobart's hills and in wet weather.",
  "battery-solution": "Fast testing, charging and same visit replacement for batteries that struggle in the cold Hobart mornings.",
  "oil-change": "Premium oil and filter changes carried out to the correct specification for your vehicle, along with a quick fluid check.",
  "emergency-service": "A fast response when your car will not start or breaks down unexpectedly, wherever you are within our Hobart service area.",
  "vehicle-inspection": "Honest pre purchase and roadworthy inspections that give you the full picture of a vehicle's condition before you buy or sell.",
  "lights-accessories": "Diagnosis and repair of lights, indicators, wiring and accessory faults, using proper testing equipment rather than guesswork.",
};

export function ServicesListSection() {
  return (
    <section className="section services inner-services">
      <div className="container">
        <SectionHeading eyebrow="WHAT WE DO" title={<>Our Mobile Car Repair <em>Services In Hobart</em></>} center />
        <div className="service-list">
          {services.map(({ title, slug, image }, i) => (
            <article className="service-row" key={slug}>
              <span className="service-row__number">{String(i + 1).padStart(2, "0")} /</span>
              <div className="service-row__image">
                <Image src={image} alt={title} fill sizes="260px" />
              </div>
              <h3>{title}</h3>
              <p>{serviceDescriptions[slug] ?? "Reliable automotive solutions delivered by skilled technicians."}</p>
              <Link href={`/${slug}`} aria-label={`View details for ${title}`}>
                <span>View Details</span><ChevronsRight />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
