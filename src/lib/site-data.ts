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

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  author: string;
}

export const products: ProductItem[] = [
  {
    id: "engine-oil-filter",
    name: "Premium Synthetic Engine Oil Filter",
    price: 49.99,
    oldPrice: 65.00,
    rating: 5,
    image: "/assets/images/services/services-1-4.jpg",
    category: "Filters",
  },
  {
    id: "heavy-duty-brake-pads",
    name: "Heavy Duty Ceramic Brake Pads",
    price: 89.99,
    oldPrice: 110.00,
    rating: 5,
    image: "/assets/images/services/services-1-3.jpg",
    category: "Brakes",
  },
  {
    id: "car-battery-12v",
    name: "Ultra Power 12V Car Battery",
    price: 189.99,
    oldPrice: 220.00,
    rating: 5,
    image: "/assets/images/services/services-1-5.jpg",
    category: "Electrical",
  },
  {
    id: "all-weather-tires",
    name: "Performance All-Weather Tire",
    price: 159.99,
    oldPrice: 195.00,
    rating: 5,
    image: "/assets/images/services/services-1-1.jpg",
    category: "Tires",
  },
];

export type Product = ProductItem;

export const team: TeamMember[] = [
  {
    id: "william-steve",
    name: "William Steve",
    role: "Senior Mechanic & Founder",
    image: "/assets/images/resources/about-v1__img1.jpg",
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Diagnostic Specialist",
    image: "/assets/images/resources/about-v1__img2.jpg",
  },
  {
    id: "michael-brown",
    name: "Michael Brown",
    role: "Brake & Suspension Lead",
    image: "/assets/images/resources/choose-v1-1.jpg",
  },
];

export const posts: BlogPost[] = [
  {
    slug: "essential-car-maintenance-tips",
    title: "Essential Mobile Mechanics Car Maintenance Tips",
    date: "26 MAY 2026",
    image: "/assets/images/services/services-1-1.jpg",
    excerpt: "Keep your vehicle performing reliably with these essential inspection and maintenance steps.",
    author: "Admin",
  },
  {
    slug: "how-to-check-brake-pads",
    title: "How to Spot Early Signs of Brake Pad Wear",
    date: "24 MAY 2026",
    image: "/assets/images/services/services-1-3.jpg",
    excerpt: "Learn how to detect brake pad wear early before it causes costly rotor damage.",
    author: "Admin",
  },
  {
    slug: "engine-diagnostics-guide",
    title: "Understanding Modern Computerized Engine Diagnostics",
    date: "20 MAY 2026",
    image: "/assets/images/services/services-1-4.jpg",
    excerpt: "Discover how advanced vehicle diagnostic scanners identify sensor and engine faults.",
    author: "Admin",
  },
];

export const automartSlugs = services.map((service) => service.slug);

