import { Droplets, Fan, Gauge, Headphones, Wrench } from "lucide-react";
import { ServiceRow } from "@/components/cards/service-card";
import { SectionHeading } from "@/components/common/section-heading";

const services = [
  {
    title: "Engine Diagnostics & Fault Finding",
    description: "Accurate fault finding with modern diagnostic tools.",
    image: "services-1-4.jpg",
    icon: Gauge,
    slug: "engine-diagnosis",
  },
  {
    title: "Oil Change & Lubrication",
    description: "Premium oil and lubrication for smoother performance.",
    image: "services-oil-change-fresh.jpg",
    icon: Droplets,
    slug: "oil-change",
  },
  {
    title: "General Repairs & Servicing",
    description: "Dependable repairs and scheduled vehicle servicing.",
    image: "services-1-2.jpg",
    icon: Wrench,
    slug: "mobile-car-repair",
  },
  {
    title: "Cooling System Repairs",
    description: "Cooling-system checks, leak repairs and maintenance.",
    image: "services-1-5.jpg",
    icon: Fan,
    slug: "emergency-service",
  },
  {
    title: "24/7 Mobile Service",
    description: "Fast mechanical support delivered to your location.",
    image: "services-1-1.jpg",
    icon: Headphones,
    slug: "emergency-service",
  },
];

export function HomeServicesSection() {
  return (
    <section className="section services services-reference" id="services">
      <div className="container">
        <SectionHeading eyebrow="WHAT WE OFFER" title={<>Comprehensive Car Solutions</>} center />
        <div className="service-list">
          {services.map((item, i) => (
            <ServiceRow
              key={item.title}
              index={i}
              title={item.title}
              description={item.description}
              image={item.image}
              icon={item.icon}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
