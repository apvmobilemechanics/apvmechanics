import type { NavItem } from "@/types/site.types";

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    items: [
      ["Mobile Car Repair", "/mobile-car-repair"],
      ["Engine Diagnostics", "/engine-diagnosis"],
      ["Brake Repair", "/brake-repair"],
      ["Battery Replacement", "/battery-solution"],
      ["Oil Change", "/oil-change"],
      ["Emergency Roadside Assistance", "/emergency-service"],
      ["Vehicle Inspection", "/vehicle-inspection"],
      ["Electrical Repairs", "/lights-accessories"],
      ["All Services", "/services"],
    ],
  },
  { label: "Contact Us", href: "/contact" },
] as const;

export const MARQUEE_ITEMS = [
  "Auto Glow",
  "Full Car Analysis",
  "Engine Service",
  "Trusted Repairs",
  "Auto Glow",
  "Full Car Analysis",
] as const;
