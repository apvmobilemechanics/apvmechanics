export const services = [
  {
    slug: "rim-wheel-repair",
    title: "Rim & Wheel Repair",
    image: "/assets/images/services/services-1-1.jpg",
    iconLabel: "Wheel",
  },
  {
    slug: "lights-accessories",
    title: "Lights & Accessories",
    image: "/assets/images/services/services-1-2.jpg",
    iconLabel: "Lights",
  },
  {
    slug: "brake-repair",
    title: "Brake Repair",
    image: "/assets/images/services/services-1-3.jpg",
    iconLabel: "Brakes",
  },
  {
    slug: "engine-diagnosis",
    title: "Engine Diagnosis",
    image: "/assets/images/services/services-1-4.jpg",
    iconLabel: "Engine",
  },
  {
    slug: "battery-solution",
    title: "Battery Solution",
    image: "/assets/images/services/services-1-5.jpg",
    iconLabel: "Battery",
  },
  {
    slug: "emergency-service",
    title: "Emergency Service",
    image: "/assets/images/resources/cta-v1-1.jpg",
    iconLabel: "Emergency",
  },
] as const;

export const products = [
  { id: "cordless-drill", name: "Cordless Drill", price: 143.2, oldPrice: 179, image: "/assets/images/shop/shop-product-1-1.jpg" },
  { id: "combination-pliers", name: "Combination Pliers", price: 83.5, oldPrice: 109, image: "/assets/images/shop/shop-product-1-2.jpg" },
  { id: "hydraulic-jack", name: "Hydraulic Jack", price: 189, oldPrice: 229, image: "/assets/images/shop/shop-product-1-3.jpg" },
  { id: "socket-wrench", name: "Socket Wrench", price: 64.8, oldPrice: 89, image: "/assets/images/shop/shop-product-1-4.jpg" },
  { id: "air-filter", name: "Air Filter", price: 49.2, oldPrice: 69, image: "/assets/images/shop/shop-product-1-5.jpg" },
  { id: "spark-plugs", name: "Spark Plugs", price: 103.2, oldPrice: 139, image: "/assets/images/shop/shop-product-1-6.jpg" },
  { id: "brake-disc", name: "Brake Disc", price: 154.5, oldPrice: 199, image: "/assets/images/shop/shop-product-1-7.jpg" },
  { id: "car-battery", name: "Car Battery", price: 172, oldPrice: 219, image: "/assets/images/shop/shop-product-1-8.jpg" },
  { id: "tool-set", name: "Tool Set", price: 119.9, oldPrice: 159, image: "/assets/images/shop/shop-product-1-9.jpg" },
  { id: "steering-wheel", name: "Steering Wheel", price: 132.4, oldPrice: 169, image: "/assets/images/shop/shop-product-1-10.jpg" },
  { id: "engine-oil", name: "Engine Oil", price: 58.6, oldPrice: 79, image: "/assets/images/shop/shop-product-1-11.jpg" },
  { id: "performance-tire", name: "Performance Tire", price: 198, oldPrice: 249, image: "/assets/images/shop/shop-product-1-12.jpg" },
] as const;

export type Product = (typeof products)[number];

export const team = [
  { slug: "william-henry", name: "William Henry", role: "Load Carrier Engine", image: "/assets/images/team/team-v1-1.jpg" },
  { slug: "henry-joseph", name: "Henry Joseph", role: "Brake Repairer", image: "/assets/images/team/team-v1-2.jpg" },
  { slug: "daniel-robert", name: "Daniel Robert", role: "Trolley Engine", image: "/assets/images/team/team-v1-3.jpg" },
] as const;

export const posts = [
  {
    slug: "regular-maintenance-saves-money",
    title: "How Regular Maintenance Saves You Money",
    date: "May 10, 2026",
    image: "/assets/images/blog/blog-1-1.jpg",
  },
  {
    slug: "brakes-need-attention",
    title: "Five Signs Your Brakes Need Attention",
    date: "May 18, 2026",
    image: "/assets/images/blog/blog-1-2.jpg",
  },
  {
    slug: "extend-engine-life",
    title: "Simple Ways to Extend Engine Life",
    date: "May 26, 2026",
    image: "/assets/images/blog/blog-1-3.jpg",
  },
] as const;

export const automartSlugs = [
  "home-two",
  "home-three",
  "home-one-onepage",
  "home-two-onepage",
  "home-three-onepage",
  "team",
  "team-details",
  "projects",
  "project-details",
  "testimonials",
  "faq",
  "404",
  "services-v-1",
  "services-v-2",
  "services-v-3",
  ...services.map((service) => service.slug),
  "products",
  "product-details",
  "cart",
  "checkout",
  "wishlist",
  "sign-up",
  "login",
  "blog-standard",
  "blog-details",
] as const;
