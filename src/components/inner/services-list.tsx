import { SectionHeading } from "@/components/common/section-heading";
import { ServiceRowCard } from "@/components/cards/service-row-card";
import { services } from "@/features/services/data/services.data";

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
    <section className="section services inner-services services-reference">
      <div className="container">
        <SectionHeading eyebrow="WHAT WE DO" title={<>All Mobile Car Repair <em>Services</em></>} center />
        <div className="service-list">
          {services.map(({ title, slug, image }, i) => (
            <ServiceRowCard
              key={slug}
              title={title}
              description={serviceDescriptions[slug] ?? "Reliable automotive solutions delivered by skilled technicians."}
              image={image}
              index={i}
              slug={slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
