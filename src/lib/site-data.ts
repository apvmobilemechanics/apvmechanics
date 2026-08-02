export const services = [
  {
    slug: "mobile-car-repair",
    title: "Mobile Car Repair",
    image: "/assets/images/services/services-1-1.jpg",
    iconLabel: "Mobile Repair",
  },
  {
    slug: "engine-diagnosis",
    title: "Engine Diagnostics",
    image: "/assets/images/services/services-1-4.jpg",
    iconLabel: "Engine",
  },
  {
    slug: "brake-repair",
    title: "Brake Repair",
    image: "/assets/images/services/services-1-3.jpg",
    iconLabel: "Brakes",
  },
  {
    slug: "battery-solution",
    title: "Battery Replacement",
    image: "/assets/images/services/services-1-5.jpg",
    iconLabel: "Battery",
  },
  {
    slug: "oil-change",
    title: "Oil Change",
    image: "/assets/images/services/services-1-3.jpg",
    iconLabel: "Oil",
  },
  {
    slug: "emergency-service",
    title: "Emergency Roadside Assistance",
    image: "/assets/images/resources/cta-v1-1.jpg",
    iconLabel: "Emergency",
  },
  {
    slug: "vehicle-inspection",
    title: "Vehicle Inspection",
    image: "/assets/images/services/services-1-2.jpg",
    iconLabel: "Inspection",
  },
  {
    slug: "lights-accessories",
    title: "Electrical Repairs",
    image: "/assets/images/services/services-1-2.jpg",
    iconLabel: "Electrical",
  },
  {
    slug: "rim-wheel-repair",
    title: "Rim & Wheel Repair",
    image: "/assets/images/services/services-1-1.jpg",
    iconLabel: "Wheel",
  },
] as const;

export const products = [] as const;
export type Product = (typeof products)[number];
export const team = [] as const;
export const posts = [] as const;

export const automartSlugs = services.map((service) => service.slug);

