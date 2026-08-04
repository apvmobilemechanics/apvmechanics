// ─── Site-wide constants & business data ───
// Single source of truth for all hardcoded contact info, asset paths, and navigation.

export const SITE_NAME = "APV Mobile Mechanics";
export const SITE_URL = "https://apvmechanics.com.au";
export const PHONE = "0424 411 375";
export const PHONE_HREF = "tel:0424411375";
export const EMAIL = "apvmobilemechanics@gmail.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;
export const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/dvreoSEMYhGPaky5A?g_st=aw";
export const WHATSAPP_URL =
  "https://wa.me/61424411375?text=Hi%20APV%20Mobile%20Mechanics%2C%20I%20would%20like%20to%20inquire%20about%20a%20service.";
export const GOOGLE_MAPS_EMBED =
  "https://maps.google.com/maps?q=APV%20Mobile%20Mechanics%20Australia&t=&z=14&ie=UTF8&iwloc=&output=embed";

export const ASSET_PREFIX = "/assets/images";

export const OPENING_HOURS = "8:00 AM to 8:00 PM (Saturday to Thursday)";

/** Navigation items shared between desktop nav, mobile menu, and footer */
export type NavItem = {
  label: string;
  href: string;
  items?: readonly [string, string][];
};

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
