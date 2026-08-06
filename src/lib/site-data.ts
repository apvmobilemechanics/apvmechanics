export interface ServiceContent {
  slug: string;
  title: string;
  image: string;
  iconLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  features: string[];
  process: string[];
  localNote?: string;
  faqs: Array<{ q: string; a: string }>;
  cta: string;
}

export const services: ServiceContent[] = [
  {
    slug: "mobile-car-repair",
    title: "Mobile Car Repair",
    image: "/assets/images/services/services-1-1.jpg",
    iconLabel: "Mobile Repair",
    metaTitle: "Mobile Car Repair Hobart | APV Mobile Mechanics",
    metaDescription: "Reliable mobile car repairs across Hobart. Our mechanics come to your home or workplace with the tools to fix most issues on the spot.",
    h1: "Mobile Car Repair In Hobart",
    intro: "APV Mobile Mechanics brings genuine workshop capability to your home, workplace or roadside location anywhere in Hobart. Instead of booking weeks ahead and arranging transport, you get a qualified mechanic on site, ready to diagnose and fix most mechanical issues in a single visit.",
    features: [
      "General mechanical repairs and fault finding",
      "Scheduled servicing to manufacturer requirements",
      "Belt, hose and filter replacement",
      "Suspension and steering checks",
      "Cooling system checks and leak repairs",
      "Minor to moderate mechanical faults"
    ],
    process: [
      "We confirm the issue and your location when you book",
      "Our mechanic arrives with the tools and likely parts on hand",
      "A proper inspection is carried out before any work begins",
      "You are given a clear explanation and cost before we proceed",
      "The repair is completed on site and covered by warranty"
    ],
    faqs: [
      { q: "How long does a mobile repair visit take?", a: "Most repairs are completed within one to two hours, depending on the job. We will give you a realistic timeframe when you book." },
      { q: "What if my car needs a part you do not have on hand?", a: "We will source the correct part as quickly as possible and let you know the earliest time we can return to finish the job." },
      { q: "Can you repair my car if it will not start at all?", a: "Yes. If your car cannot be moved, we come to you and diagnose the issue on site, whether that turns out to be electrical, mechanical or battery related." }
    ],
    cta: "Skip the workshop and get your car sorted where it sits. Call APV Mobile Mechanics on 0424 411 375 to arrange your mobile car repair in Hobart."
  },
  {
    slug: "engine-diagnosis",
    title: "Engine Diagnostics",
    image: "/assets/images/services/services-1-4.jpg",
    iconLabel: "Engine",
    metaTitle: "Engine Diagnostics Hobart | APV Mobile Mechanics",
    metaDescription: "Accurate mobile engine diagnostics in Hobart. We use professional scan tools to find the fault fast and explain your options clearly.",
    h1: "Engine Diagnostics In Hobart",
    intro: "A warning light or strange noise rarely tells the whole story on its own. APV Mobile Mechanics uses professional diagnostic scan tools to read your vehicle's onboard computer, identify the actual fault codes and explain what they mean in plain language, all carried out at your home or workplace across Hobart.",
    features: [
      "The check engine light or another warning light is on",
      "Rough idling or the engine hesitating under acceleration",
      "A noticeable loss of power or poor fuel economy",
      "Unusual noises from the engine bay",
      "The car struggles to start or stalls unexpectedly"
    ],
    process: [
      "We connect a professional scan tool to your vehicle's computer system",
      "Fault codes and live data are reviewed against your symptoms",
      "We carry out a visual and physical check to confirm the cause",
      "You receive a clear explanation of the issue and the options to fix it",
      "If you approve the repair, in many cases we can complete it in the same visit"
    ],
    faqs: [
      { q: "Can you clear the warning light without fixing the cause?", a: "We can clear a code, but we will always explain the underlying issue first. Clearing a light without addressing the cause usually means it returns." },
      { q: "How long does a diagnostic check take?", a: "Most diagnostic checks take around thirty to sixty minutes, depending on the complexity of the fault." },
      { q: "Do you diagnose hybrid vehicles?", a: "Yes, our scan tools and technicians support diagnostics across petrol, diesel and hybrid vehicles." }
    ],
    cta: "Do not ignore a warning light or an unusual noise. Call APV Mobile Mechanics on 0424 411 375 for an accurate engine diagnostic check anywhere in Hobart."
  },
  {
    slug: "brake-repair",
    title: "Brake Repair",
    image: "/assets/images/services/services-brake-repair.jpg",
    iconLabel: "Brakes",
    metaTitle: "Brake Repair Hobart | APV Mobile Mechanics",
    metaDescription: "Trusted mobile brake repairs in Hobart. Pads, discs, fluid and full brake system checks completed at your location for total peace of mind.",
    h1: "Brake Repair In Hobart",
    intro: "There is no part of your car more important to your safety than the brakes. APV Mobile Mechanics carries out full brake inspections, repairs and replacements at your home or workplace across Hobart, using quality parts fitted to manufacturer standards.",
    features: [
      "Squealing or squeaking when you brake",
      "Grinding noises, which often means the pads are worn through",
      "A soft or spongy brake pedal",
      "The car pulling to one side under braking",
      "Vibration or shuddering through the pedal or steering wheel"
    ],
    process: [
      "Full inspection of pads, discs, calipers and lines",
      "Brake pad and disc replacement where needed",
      "Brake fluid check and flush",
      "Handbrake adjustment and testing",
      "A road test to confirm everything is working correctly"
    ],
    localNote: "Between steep streets in areas like West Hobart and Mount Nelson and wet, sometimes icy conditions during the cooler months, Hobart drivers ask a lot of their brakes. Regular checks help make sure your car can stop safely no matter the road or the weather.",
    faqs: [
      { q: "How often should brake pads be replaced?", a: "This depends on your driving habits and vehicle, but many pads last between forty and eighty thousand kilometres. We will let you know the remaining life during an inspection." },
      { q: "Can you replace brakes on the roadside?", a: "In most cases, yes, provided it is safe to do so. If the location is not suitable, we will suggest a safer nearby spot to carry out the work." },
      { q: "Do you offer a warranty on brake repairs?", a: "Yes, all parts and workmanship on brake repairs are covered by our service warranty." }
    ],
    cta: "If your brakes are making noise or feel different, do not wait. Call APV Mobile Mechanics on 0424 411 375 for a brake inspection or repair anywhere in Hobart."
  },
  {
    slug: "battery-solution",
    title: "Battery Replacement",
    image: "/assets/images/services/services-1-5.jpg",
    iconLabel: "Battery",
    metaTitle: "Car Battery Replacement Hobart | APV Mobile Mechanics",
    metaDescription: "Flat battery? Our mobile battery testing and replacement service gets you back on the road fast, anywhere in Hobart.",
    h1: "Car Battery Replacement In Hobart",
    intro: "A flat or failing battery is one of the most common reasons Hobart drivers call us. APV Mobile Mechanics carries out battery testing, charging and replacement at your home, workplace or roadside, so you are not left waiting around for help.",
    features: [
      "Slow or struggling engine crank when starting",
      "Dashboard warning lights related to the battery or charging system",
      "Dimming headlights or interior lights",
      "A battery older than three to five years",
      "The car has needed a jump start recently"
    ],
    process: [
      "We test the battery and charging system to confirm the cause",
      "If the battery has failed, we fit a suitable replacement on site",
      "Terminals and connections are cleaned and checked",
      "A final test confirms the charging system is working correctly",
      "You leave with a warranty on the new battery"
    ],
    localNote: "Cold mornings across Hobart put extra strain on a battery that is already weakening, which is why so many failures happen in the cooler months. A quick test before winter sets in can save you from being caught out on a frosty morning.",
    faqs: [
      { q: "How long does a battery replacement take?", a: "Most replacements are completed within thirty minutes, including testing and disposal of the old battery." },
      { q: "Can you jump start my car if I just need to get moving?", a: "Yes, we can provide a jump start, though we always recommend a battery test afterwards to check whether replacement is needed soon." },
      { q: "Do you carry batteries for most vehicles?", a: "We stock common battery types and can source the correct battery quickly for less common vehicles." }
    ],
    cta: "Do not risk being stranded with a flat battery. Call APV Mobile Mechanics on 0424 411 375 for fast battery testing and replacement anywhere in Hobart."
  },
  {
    slug: "oil-change",
    title: "Oil Change",
    image: "/assets/images/services/services-oil-change-fresh.jpg",
    iconLabel: "Oil",
    metaTitle: "Mobile Oil Change Hobart | APV Mobile Mechanics",
    metaDescription: "Convenient mobile oil and filter changes across Hobart. Premium oils, correct specifications and a full check while we are there.",
    h1: "Mobile Oil Change In Hobart",
    intro: "Regular oil changes are one of the easiest ways to protect your engine and extend its life. APV Mobile Mechanics brings this essential service directly to your home or workplace across Hobart, using premium oil matched to your vehicle's specifications.",
    features: [
      "Draining and safe disposal of old engine oil",
      "Replacement with oil matched to your manufacturer's specification",
      "New oil filter fitted",
      "Check of other fluid levels, including coolant and brake fluid",
      "A quick visual check of belts, hoses and general engine condition"
    ],
    process: [
      "Most manufacturers recommend an oil change every six to twelve months, or somewhere between ten and fifteen thousand kilometres."
    ],
    faqs: [
      { q: "How long does a mobile oil change take?", a: "Most oil changes are completed within thirty to forty five minutes, including the additional checks we carry out." },
      { q: "Can you use the specific oil grade my car requires?", a: "Yes, we match the oil grade and specification to your vehicle's manufacturer requirements." },
      { q: "Will you dispose of my old oil safely?", a: "Yes, we handle the collection and correct disposal of old engine oil so you do not have to worry about it." }
    ],
    cta: "Keep your engine running smoothly without a workshop visit. Call APV Mobile Mechanics on 0424 411 375 to book a mobile oil change anywhere in Hobart."
  },
  {
    slug: "emergency-service",
    title: "Emergency Roadside Assistance",
    image: "/assets/images/services/services-emergency-fresh.jpg",
    iconLabel: "Emergency",
    metaTitle: "Emergency Roadside Assistance Hobart | APV Mobile Mechanics",
    metaDescription: "Broken down in Hobart? Our emergency mobile mechanics respond fast, day or night, to get you moving again safely.",
    h1: "Emergency Roadside Assistance In Hobart",
    intro: "A breakdown is stressful enough without a long wait for help. APV Mobile Mechanics provides fast emergency roadside assistance across Hobart, so you are not left stranded at the side of the road, in a car park or outside your home.",
    features: [
      "The car will not start",
      "A flat or failed battery",
      "Overheating or coolant leaks",
      "Sudden loss of power while driving",
      "Warning lights that appear without warning",
      "Getting your car safely moved out of a dangerous position"
    ],
    process: [
      "Call us and describe what is happening and where you are",
      "We give you an honest estimate of arrival time",
      "Our mechanic assesses the vehicle safely on arrival",
      "Many issues can be fixed on the spot",
      "If the car needs further work, we arrange the next step with you"
    ],
    faqs: [
      { q: "Are you available outside normal hours?", a: "We offer flexible hours to cover breakdowns outside the standard working day. Call us and we will let you know our current availability." },
      { q: "How quickly can you reach me?", a: "Response times depend on your location and how busy we are, but we always aim to reach you as quickly as possible and will give you a realistic estimate when you call." },
      { q: "What if my car cannot be fixed on the roadside?", a: "If the repair needs a workshop, we will explain your options clearly and help arrange the next step." }
    ],
    cta: "If you have broken down anywhere in Hobart, call APV Mobile Mechanics on 0424 411 375 now for fast emergency roadside assistance."
  },
  {
    slug: "vehicle-inspection",
    title: "Vehicle Inspection",
    image: "/assets/images/services/services-inspection.jpg",
    iconLabel: "Inspection",
    metaTitle: "Vehicle Inspection Hobart | APV Mobile Mechanics",
    metaDescription: "Pre purchase and roadworthy vehicle inspections in Hobart. A thorough, honest check before you buy, sell or register your car.",
    h1: "Vehicle Inspection In Hobart",
    intro: "Buying or selling a car without a proper inspection is a gamble. APV Mobile Mechanics offers thorough, independent vehicle inspections across Hobart, giving you an honest report on a vehicle's true condition before money changes hands.",
    features: [
      "Pre purchase inspection, for anyone about to buy a used car",
      "Pre sale inspection, to identify issues before listing your car",
      "General condition inspection, for peace of mind on a car you already own",
      "Roadworthy related checks, ahead of registration or transfer"
    ],
    process: [
      "Engine condition and performance",
      "Brakes, suspension and steering",
      "Tyres, wheels and general safety items",
      "Electrical systems, lights and accessories",
      "Signs of previous accident damage or poor repairs",
      "Fluid leaks and general wear and tear",
      "We arrange a time to inspect the vehicle at a location that suits you, carry out a full check using proper diagnostic and inspection tools, and provide a clear, honest summary of what we found, including anything that needs attention."
    ],
    faqs: [
      { q: "Can you inspect a car at the seller's location?", a: "Yes, we can attend most locations across Hobart to carry out the inspection wherever the vehicle currently is." },
      { q: "How long does an inspection take?", a: "A thorough inspection generally takes around forty five minutes to an hour, depending on the vehicle." },
      { q: "Will I get a written report?", a: "Yes, we provide a clear summary of our findings so you have something to refer back to when making your decision." }
    ],
    cta: "Before you buy, sell or register a vehicle, get it checked properly. Call APV Mobile Mechanics on 0424 411 375 to book a vehicle inspection anywhere in Hobart."
  },
  {
    slug: "lights-accessories",
    title: "Electrical Repairs",
    image: "/assets/images/services/services-electrical.jpg",
    iconLabel: "Electrical",
    metaTitle: "Car Electrical Repairs Hobart | APV Mobile Mechanics",
    metaDescription: "Mobile electrical repairs across Hobart, from faulty lights to wiring and accessory issues, diagnosed and fixed at your location.",
    h1: "Car Electrical Repairs In Hobart",
    intro: "Modern cars rely on complex electrical systems to run everything from headlights to safety sensors, which means electrical faults need proper diagnosis rather than guesswork. APV Mobile Mechanics diagnoses and repairs electrical issues at your home or workplace across Hobart, using the right testing equipment for the job.",
    features: [
      "Faulty headlights, tail lights and indicators",
      "Wiring faults and loose or corroded connections",
      "Dashboard warning lights that will not clear",
      "Power window, central locking and accessory faults",
      "Charging system and alternator related issues"
    ],
    process: [
      "We ask you to describe exactly what the car is doing",
      "A proper diagnostic check identifies the affected circuit or component",
      "We explain the cause and the repair options clearly",
      "Most electrical repairs are completed in the same visit",
      "A final test confirms everything is working as it should"
    ],
    faqs: [
      { q: "Can you fix a light that keeps blowing?", a: "Yes, a light that repeatedly fails often points to a wiring or voltage issue rather than the bulb itself, and we will trace the cause properly." },
      { q: "Do you repair wiring damaged by rodents or corrosion?", a: "Yes, we can repair damaged wiring, though the time required depends on how extensive the damage is." },
      { q: "Can electrical faults affect how my car starts or runs?", a: "Yes, many starting and running issues actually trace back to electrical faults, which is why a proper diagnostic check is important." }
    ],
    cta: "If something electrical is playing up, get it looked at properly. Call APV Mobile Mechanics on 0424 411 375 for electrical repairs anywhere in Hobart."
  }
];

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

