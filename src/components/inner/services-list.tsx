import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";

const services=[["Tire Care & Balance","services-1-1.jpg"],["Brake Inspection & Repair","services-1-2.jpg"],["Quick Oil Change Service","services-1-3.jpg"],["Suspension & Steering Care","services-1-4.jpg"],["Brake Experts Care","services-1-5.jpg"]];

export function ServicesListSection() {
  return <section className="section services inner-services"><div className="container"><SectionHeading eyebrow="WHAT WE DO" title={<>Comprehensive Car <em>Solutions</em></>} center/><div className="service-list">{services.map(([title,image],i)=><article className="service-row" key={title}><span className="service-row__number">{String(i+1).padStart(2,"0")}</span><div className="service-row__image"><Image src={`/assets/images/services/${image}`} alt={title} fill sizes="260px"/></div><h3>{title}</h3><p>Reliable automotive solutions delivered by skilled technicians using modern workshop equipment.</p><Link href="/contact" aria-label={`Book ${title}`}><ArrowRight/></Link></article>)}</div></div></section>;
}
