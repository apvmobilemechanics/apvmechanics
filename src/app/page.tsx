import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Phone,
  Star,
  Wrench,
} from "lucide-react";
import { FaqList } from "@/components/home/interactive";
import { ThemeButton } from "@/components/common/button";
import { SectionHeading } from "@/components/common/section-heading";
import { AboutCompanySection, InnerVideo } from "@/components/inner/about-sections";
import { HomeShop, HomeTeam } from "@/components/home/showcase-carousels";
import { GalleryLightbox } from "@/components/home/gallery-lightbox";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { LocalContactForm } from "@/components/inner/local-form";

const A = "/assets/images";

const services = [
  ["Tire Care & Balance", "services-1-1.jpg"],
  ["Brake Inspection & Repair", "services-1-2.jpg"],
  ["Quick Oil Change Service", "services-1-3.jpg"],
  ["Suspension & Steering Care", "services-1-4.jpg"],
  ["Brake Experts Care", "services-1-5.jpg"],
];

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeading eyebrow="WHAT WE DO" title={<>Comprehensive Car <em>Solutions</em></>} center />
        <div className="service-list">
          {services.map(([title, image], i) => (
            <article className="service-row" key={title}>
              <span className="service-row__number">{String(i + 1).padStart(2, "0")}</span>
              <div className="service-row__image"><Image src={`${A}/services/${image}`} alt={title} fill sizes="260px" /></div>
              <h3>{title}</h3>
              <p>We provide dependable automotive care with skilled technicians, modern tools and honest service.</p>
              <Link href="/services" aria-label={`Learn more about ${title}`}><ArrowRight /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section choose">
      <div className="container split">
        <div className="choose__content">
          <SectionHeading light eyebrow="WHY CHOOSE US" title={<>The Smarter Choice for <em>Car Care</em></>} />
          <p>Quality repairs, clear communication and customer-first service—every time you visit.</p>
          <div className="choose__features">
            <div><i><Check /></i><span><b>Innovative Car Solutions</b><small>Advanced tools and proven methods.</small></span></div>
            <div><i><Phone /></i><span><b>24/7 Hour Support</b><small>Help whenever your vehicle needs it.</small></span></div>
          </div>
          <ThemeButton href="/contact">Contact Us</ThemeButton>
        </div>
        <div className="choose__visual">
          <div className="choose__ring" />
          <Image src={`${A}/resources/choose-v1-2.png`} alt="Professional car mechanic" width={482} height={604} />
          <div className="choose__quote"><Image src={`${A}/resources/choose-v1-1.jpg`} alt="" width={60} height={60}/><p>“Fast service, expert work and a team we trust.”</p></div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return <div className="marquee" aria-label="Our services"><div>{["Auto Glow","Full Car Analysis","Engine Service","Trusted Repairs","Auto Glow","Full Car Analysis"].map((x,i)=><span key={i}>{x}<Image src={`${A}/icon/icon-1.png`} alt="" width={36} height={40}/></span>)}</div></div>;
}

function Process() {
  const items = [
    ["01", "Quick & Trusted Repairs"],
    ["02", "Performance Perfected"],
    ["03", "Premium Care Experience"],
    ["04", "Luxury Auto Care"],
  ];
  return (
    <section className="section process" id="pages">
      <div className="container">
        <SectionHeading eyebrow="WORK PROCESS" title={<>Step-by-Step Car <em>Repair Process</em></>} center />
        <div className="process-grid">
          {items.map(([num,title])=><article key={num}><strong>{num}</strong><i><Wrench /></i><h3>{title}</h3><p>We inspect, explain and repair with precision, keeping you informed at every step.</p></article>)}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const cards = [
    ["Laura Brown","New York, USA",1],
    ["William Foster","Chicago, USA",2],
  ];
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHeading eyebrow="OUR TESTIMONIALS" title={<>About Our Customers <em>Feedback Says</em></>} center />
        <div className="testimonial-grid">
          {cards.map(([name,place,n])=><article key={name as string}><div className="stars">{[1,2,3,4,5].map(x=><Star key={x} fill="currentColor" />)}</div><p>“Professional, honest and impressively fast. My car feels brand new and the whole experience was easy from start to finish.”</p><div><Image src={`${A}/testimonial/testimonial-1-${n}.jpg`} alt={name as string} width={70} height={70}/><span><b>{name}</b><small>{place}</small></span></div></article>)}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="section faq">
      <div className="container split">
        <div className="faq__image"><Image src={`${A}/resources/faq-one-img-1.jpg`} alt="Car maintenance service" fill sizes="560px"/><div><Phone/><span>Call for emergency service<b>+ 88 (9800) 6802</b></span></div></div>
        <div><SectionHeading eyebrow="FAQ" title={<>Common Car Repair <em>Asked Questions!</em></>} /><FaqList /></div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section className="section locations">
      <div className="container">
        <SectionHeading eyebrow="OUR LOCATIONS" title={<>Connect With <em>Our Team</em></>} center />
        <div className="location-grid">
          {["Washington","Los Angeles"].map((city,i)=><article key={city}><span>0{i+1}</span><div><MapPin/><h3>{city}</h3><p>4517 Washington Ave. Manchester, Kentucky 39495</p></div><Link href="/contact"><ArrowRight/></Link></article>)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container split">
        <div className="contact__info"><SectionHeading eyebrow="CONTACT US" title={<>Connect With <em>Our Team</em></>} /><p>Book your repair or maintenance visit today. Our friendly specialists are ready to help.</p><div><i><Phone/></i><span><small>Call Anytime</small><b>+ 88 (9800) 6802</b></span></div><div><i><Mail/></i><span><small>Email Address</small><b>scriptfusionscar@gmail.com</b></span></div><div><i><MapPin/></i><span><small>Our Location</small><b>4517 Washington Ave, Kentucky</b></span></div></div>
        <LocalContactForm/>
      </div>
    </section>
  );
}

function Blog() {
  const posts = [
    ["How Regular Maintenance Saves You Money","May 10, 2026",1],
    ["Five Signs Your Brakes Need Attention","May 18, 2026",2],
    ["Simple Ways to Extend Engine Life","May 26, 2026",3],
  ];
  return (
    <section className="section blog" id="blog">
      <div className="container"><SectionHeading eyebrow="LATEST NEWS" title={<>Professional Car Repair <em>Articles &amp; Updates</em></>} center /><div className="blog-grid">{posts.map(([title,date,n])=><article key={title as string}><div><Image src={`${A}/blog/blog-1-${n}.jpg`} alt={title as string} fill sizes="390px"/><span>{date}</span></div><p>CAR REPAIR&nbsp;&nbsp; / &nbsp;&nbsp;BY ADMIN</p><h3>{title}</h3><Link href="/blog-details">Read More <ArrowRight/></Link></article>)}</div></div>
    </section>
  );
}

export default function Home() {
  return <main><HeroCarousel/><Services/><AboutCompanySection/><HomeShop/><WhyChoose/><Marquee/><Process/><HomeTeam/><InnerVideo/><Testimonials/><Faq/><Locations/><GalleryLightbox/><Contact/><Blog/></main>;
}
