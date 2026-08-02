import Image from "next/image";
import { ArrowRight, BatteryCharging, Check, Disc3, MapPin, Phone, Star, Wrench } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/common/section-heading";
import { ThemeButton } from "@/components/common/button";
import { HomeTeam } from "@/components/home/showcase-carousels";
import { PremiumVideoGallery } from "@/components/motion/premium-media-sections";

const A = "/assets/images";

export function InnerMarquee() {
  const items = ["Auto Glow", "Full Car Analysis", "Engine Service", "Trusted Repairs", "Auto Glow", "Full Car Analysis"];
  return <div className="marquee"><div>{items.map((item,index)=><span key={`${item}-${index}`}>{item}<Image src={`${A}/icon/icon-1.png`} alt="" width={36} height={40}/></span>)}</div></div>;
}

export function AboutCompanySection() {
  return (
    <section className="about-one-clone inner-about" id="about">
      <div className="container about-clone-grid">
        <div className="about-clone-images" data-reveal>
          <span className="about-clone-vertical">ABOUT<br/>COMPANY</span>
          <div className="about-clone-main">
            <Image
              src={`${A}/generated/apv-about-workshop.webp`}
              alt="APV mobile mechanic repairing a vehicle"
              fill
              sizes="(max-width: 768px) 80vw, 488px"
            />
          </div>
          <div className="about-clone-small">
            <Image
              src={`${A}/generated/apv-about-mechanic.webp`}
              alt="Professional APV mobile mechanic"
              fill
              sizes="(max-width: 768px) 48vw, 250px"
            />
          </div>
          <div className="about-clone-experience"><strong><span data-counter="50">50</span>+</strong><b>Years of experience</b></div>
        </div>
        <div className="about-clone-content" data-reveal>
          <SectionHeading eyebrow="ABOUT OUR COMPANY" title={<>Car Deserves the Best &amp;<br/>Professional Car Repair</>}/>
          <p>With years of experience in auto repair, we know what it takes to get your car back in top shape. Our team blends technical expertise with attention to detail, ensuring lasting results and customer satisfaction.</p>
          <div className="about-clone-features">
            <div><i><Disc3/></i><span><b>Brake Experts Care</b><small>At Brake Experts Care, your<br/>safety comes first skilled.</small></span></div>
            <div><i><BatteryCharging/></i><span><b>Full Engine Evaluation</b><small>Our Full Engine Evaluation<br/>delivers a complete check.</small></span></div>
          </div>
          <div className="about-clone-checks">
            {["Top Quality Care for Every Drive","Expert care for every vehicle","Superior Care, Safer Journeys","Your car, our priority"].map(item=><span key={item}><Check/>{item}</span>)}
          </div>
          <div className="about__bottom">
            <ThemeButton href="/contact">Contact Us</ThemeButton>
            <div className="about-clone-contact">
              <div className="about-clone-contact__avatar">
                <Image src={`${A}/resources/about-v1__phn-img.jpg`} alt="Automart support specialist" width={60} height={60}/>
                <i><Phone/></i>
              </div>
              <span><small>Call Any Time</small><b>0424 411 375</b></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const items=[["01","Quick & Trusted Repairs"],["02","Performance Perfected"],["03","Premium Care Experience"],["04","Luxury Auto Care"]];
  return <section className="section process"><div className="container"><SectionHeading eyebrow="WORK PROCESS" title={<>Step-by-Step Car <em>Repair Process</em></>} center/><div className="process-grid">{items.map(([n,t])=><article key={n}><strong>{n}</strong><i><Wrench/></i><h3>{t}</h3><p>Careful inspection, clear advice and precision workmanship at every stage.</p></article>)}</div></div></section>;
}

export function InnerVideo() {
  return <PremiumVideoGallery />;
}

export function TeamSection() {
  return <HomeTeam inner/>;
}

export function LocationsSection() {
  return (
    <section className="section locations inner-locations">
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

export function TestimonialsSection() {
  const cards=[["Laura Brown","New York, USA",1],["William Foster","Chicago, USA",2]];
  return <section className="section testimonials inner-testimonials"><div className="container"><SectionHeading eyebrow="OUR TESTIMONIALS" title={<>About Our Customers <em>Feedback Says</em></>} center/><div className="testimonial-grid">{cards.map(([name,place,n])=><article key={name as string}><div className="stars">{[1,2,3,4,5].map(x=><Star key={x} fill="currentColor"/>)}</div><p>“Excellent automotive care, clear communication and fast professional service. The whole team made the repair process simple.”</p><div><Image src={`${A}/testimonial/testimonial-1-${n}.jpg`} alt={name as string} width={70} height={70}/><span><b>{name}</b><small>{place}</small></span></div></article>)}</div></div></section>;
}
