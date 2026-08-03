import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronsRight,
  CircleGauge,
  Droplets,
  Fan,
  Gauge,
  Headphones,
  Mail,
  MapPin,
  Phone,
  SearchCheck,
  Star,
  Wrench,
} from "lucide-react";
import { FaqList } from "@/components/home/interactive";
import { ThemeButton } from "@/components/common/button";
import { SectionHeading } from "@/components/common/section-heading";
import { AboutCompanySection, InnerVideo } from "@/components/inner/about-sections";
import { GalleryLightbox } from "@/components/home/gallery-lightbox";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { LocalContactForm } from "@/components/inner/local-form";

const A = "/assets/images";

const services = [
  {
    title: "Engine Diagnostics & Fault Finding",
    description: "Accurate fault finding with modern diagnostic tools.",
    image: "services-1-4.jpg",
    icon: Gauge,
  },
  {
    title: "Oil Change & Lubrication",
    description: "Premium oil and lubrication for smoother performance.",
    image: "services-1-3.jpg",
    icon: Droplets,
  },
  {
    title: "General Repairs & Servicing",
    description: "Dependable repairs and scheduled vehicle servicing.",
    image: "services-1-2.jpg",
    icon: Wrench,
  },
  {
    title: "Cooling System Repairs",
    description: "Cooling-system checks, leak repairs and maintenance.",
    image: "services-1-5.jpg",
    icon: Fan,
  },
  {
    title: "24/7 Mobile Service",
    description: "Fast mechanical support delivered to your location.",
    image: "services-1-1.jpg",
    icon: Headphones,
  },
];

function Services() {
  return (
    <section className="section services services-reference" id="services">
      <div className="container">
        <SectionHeading eyebrow="WHAT WE OFFER" title={<>Comprehensive Car Solutions</>} animatedText="Comprehensive Car Solutions" center />
        <div className="service-list">
          {services.map(({ title, description, image, icon: Icon }, i) => (
            <article className="service-row" key={title} data-reveal-delay={i * 110}>
              <div className={`service-row__main ${title.length > 25 ? "service-row__main--compact" : ""}`}>
                <i className="service-row__icon"><Icon /></i>
                <div className={`service-row__title ${title.length > 25 ? "service-row__title--compact" : ""}`}>
                  <span className="service-row__number">{String(i + 1).padStart(2, "0")} /</span>
                  <h3>{title}</h3>
                </div>
              </div>
              <p>{description}</p>
              <Link href="/services" aria-label={`View details for ${title}`}>
                <span>View Details</span><ChevronsRight />
              </Link>
              <div className="service-row__image">
                <Image src={`${A}/services/${image}`} alt="" fill sizes="240px" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section choose choose-reference">
      <div className="choose-reference__shape choose-reference__shape--one" aria-hidden="true" />
      <div className="choose-reference__shape choose-reference__shape--two" aria-hidden="true" />
      <div className="container choose-reference__grid">
        <div className="choose__content" data-reveal="left">
          <SectionHeading light eyebrow="WHY CHOOSE US" title={<>The Smarter Choice for Car Care</>} animatedText="The Smarter Choice for Car Care" />
          <p>We&apos;ve built our reputation on honesty, expertise, &amp; consistent quality service. Every repair is handled with care.</p>
          <div className="choose-reference__middle">
            <div className="choose-reference__solution">
              <i><SearchCheck /></i>
              <b>Innovative Car<br />Solutions</b>
            </div>
            <p>At Brake Experts Care, your safety comes first. Our skilled team is ready to help.</p>
          </div>
          <div className="choose-reference__bottom">
            <ThemeButton href="/about">Read More</ThemeButton>
            <div className="choose-reference__author">
              <Image src={`${A}/resources/choose-v1-1.jpg`} alt="Robert Wilson" width={60} height={60} />
              <span><b>Robert Wilson</b><small>Electrical Technician</small></span>
            </div>
          </div>
        </div>
        <div className="choose__visual" data-reveal="right">
          <Image
            src={`${A}/resources/choose-v1-2.png`}
            alt="Professional car mechanic"
            width={482}
            height={604}
            style={{ width: "auto" }}
          />
          <div className="choose-reference__support">
            <i><Headphones /></i>
            <span><b>24/7 Hour Support</b><small>Offering premium service</small></span>
          </div>
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
    { num: "01", title: "Quick & Trusted Repairs", icon: SearchCheck },
    { num: "02", title: "Performance Perfected", icon: Gauge },
    { num: "03", title: "Premium Care Experience", icon: Wrench },
    { num: "04", title: "Luxury Auto Care", icon: CircleGauge },
  ];
  return (
    <section className="section process process-reference" id="pages">
      <div className="container">
        <SectionHeading eyebrow="OUR WORK PROCESS" title={<>Step-by-Step Car Repair Process</>} animatedText="Step-by-Step Car Repair Process" center />
        <div className="process-grid">
          {items.map(({ num, title, icon: Icon }, index) => (
            <article className={`process-step ${index % 2 ? "process-step--reverse" : ""}`} key={num} data-reveal data-reveal-delay={index * 130}>
              <strong>Step - {num}</strong>
              <div className="process-step__copy">
                <h3>{title}</h3>
                <p>We deliver quick, dependable repairs<br />to keep you moving safely.</p>
              </div>
              <i><Icon /></i>
            </article>
          ))}
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
        <div className="faq__image">
          <Image
            src={`${A}/generated/apv-emergency-mechanic.webp`}
            alt="APV emergency mobile mechanic"
            fill
            sizes="(max-width: 768px) 100vw, 560px"
          />
          <div><Phone/><span>Call for emergency service<b>0424 411 375</b></span></div>
        </div>
        <div><SectionHeading eyebrow="FAQ" title={<>Common Car Repair <em>Asked Questions!</em></>} /><FaqList /></div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section className="section locations">
      <div className="container">
        <SectionHeading eyebrow="OUR LOCATION" title={<>Connect With <em>APV Mobile Mechanics</em></>} center />
        <div className="location-grid" style={{ display: "flex", justifyContent: "center" }}>
          <article style={{ maxWidth: "500px", width: "100%" }}>
            <span>01</span>
            <div>
              <MapPin />
              <h3>APV Mobile Mechanics</h3>
              <p>Mobile Service Delivered Direct To Your Location</p>
            </div>
            <a href="https://maps.app.goo.gl/dvreoSEMYhGPaky5A?g_st=aw" target="_blank" rel="noopener noreferrer" aria-label="Open Google Maps Location">
              <ArrowRight />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container split">
        <div className="contact__info">
          <SectionHeading eyebrow="CONTACT US" title={<>Connect With <em>Our Team</em></>} />
          <p>Book your repair visit today. Our friendly specialists are ready to help.</p>
          <div><i><Phone/></i><span><small>Call Anytime</small><b><a href="tel:0424411375" style={{ color: "inherit" }}>0424 411 375</a></b></span></div>
          <div><i><Mail/></i><span><small>Email Address</small><b><a href="mailto:apvmobilemechanics@gmail.com" style={{ color: "inherit" }}>apvmobilemechanics@gmail.com</a></b></span></div>
          <div><i><MapPin/></i><span><small>Our Location</small><b><a href="https://maps.app.goo.gl/dvreoSEMYhGPaky5A?g_st=aw" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>APV Mobile Mechanics</a></b></span></div>
        </div>
        <LocalContactForm/>
      </div>
    </section>
  );
}

export default function Home() {
  return <main><HeroCarousel/><Services/><AboutCompanySection/><WhyChoose/><Marquee/><Process/><InnerVideo/><Faq/><Locations/><GalleryLightbox/><Contact/></main>;
}
