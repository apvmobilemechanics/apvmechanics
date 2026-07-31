import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { LocalContactForm } from "@/components/inner/local-form";

export function ContactInfo() {
  const items=[[Phone,"Phone Number","0424 411 375"],[Mail,"Email Address","needhelp@company.com"],[Clock3,"Opening Hours","Mon - Sat: 8:00 - 8:00"],[MapPin,"Our Address","4517 Washington Ave, Kentucky"]] as const;
  return <section className="contact-info-section"><div className="container contact-info-grid">{items.map(([Icon,label,value])=><article key={label}><i><Icon/></i><span><small>{label}</small><b>{value}</b></span></article>)}</div></section>;
}

export function ContactMapForm() {
  return <section className="contact-page-section"><div className="container contact-page-grid"><iframe title="Automart location" src="https://www.openstreetmap.org/export/embed.html?bbox=-85.9%2C37.5%2C-84.7%2C38.4&amp;layer=mapnik" loading="lazy"/><LocalContactForm/></div></section>;
}
