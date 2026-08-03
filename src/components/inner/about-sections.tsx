import Image from "next/image";
import { ArrowRight, BatteryCharging, Car, Check, Disc3, Gauge, MapPin, Phone, ShieldCheck, Star, Wrench } from "lucide-react";
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
          <div className="about-clone-experience"><strong><span data-counter="10">10</span>+</strong><b>Years Experience</b></div>
        </div>
        <div className="about-clone-content" data-reveal>
          <SectionHeading eyebrow="ABOUT APV MOBILE MECHANICS" title={<>Melbourne's Trusted<br/>Mobile Car Repair</>}/>
          <p>APV Mobile Mechanics is Melbourne's trusted mobile car repair specialist. We come to you — at home, at work, or roadside — with full workshop capability in our fully-equipped service vehicle.</p>
          <p>Founded on the belief that quality automotive care shouldn't require a trip to a workshop, we've built a reputation for fast response, honest advice and lasting repairs.</p>
          <div className="about-clone-features">
            <div><i><Wrench/></i><span><b>500+ Vehicles Serviced</b><small>Trusted by hundreds of<br/>Melbourne drivers.</small></span></div>
            <div><i><Check/></i><span><b>Fully Certified Mechanics</b><small>Expert care and<br/>lasting repairs.</small></span></div>
          </div>
          <div className="about-clone-checks">
            {["10+ Years Experience","500+ Vehicles Serviced","Fully Certified Mechanics","Honest advice & fast response"].map(item=><span key={item}><Check/>{item}</span>)}
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
  return (
    <section className="process-reference">
      <div className="container">
        <SectionHeading eyebrow="WORK PROCESS" title={<>Step-by-Step Car <em>Repair Process</em></>} center />
        <div className="process-grid">
          <div className="process-step">
            <strong>STEP - 01</strong>
            <div className="process-step__copy">
              <h3>Quick &amp; Trusted Repairs</h3>
              <p>We diagnose fast and accurately, getting you back on the road with confidence.</p>
            </div>
            <i><Check /></i>
          </div>
          <div className="process-step process-step--reverse">
            <i><Gauge /></i>
            <strong>STEP - 02</strong>
            <div className="process-step__copy">
              <h3>Performance Perfected</h3>
              <p>Every system is tuned and tested to manufacturer spec for peak performance.</p>
            </div>
          </div>
          <div className="process-step">
            <strong>STEP - 03</strong>
            <div className="process-step__copy">
              <h3>Premium Care Experience</h3>
              <p>Professional workmanship with clear communication at every stage of the repair.</p>
            </div>
            <i><Wrench /></i>
          </div>
          <div className="process-step process-step--reverse">
            <i><Check /></i>
            <strong>STEP - 04</strong>
            <div className="process-step__copy">
              <h3>Luxury Auto Care</h3>
              <p>Meticulous attention to detail ensuring your vehicle receives the best treatment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InnerVideo() {
  return null;
}

export function TeamSection() {
  return <HomeTeam inner/>;
}

export function LocationsSection() {
  return (
    <section className="section locations-light">
      <div className="container">
        <SectionHeading eyebrow="OUR LOCATION" title={<>Connect With <em>APV Mobile Mechanics</em></>} center />
        <div className="location-light-wrapper">
          <div className="location-light-card">
            <div className="location-light-card__badge">01</div>
            <div className="location-light-card__info">
              <div className="location-light-card__icon">
                <MapPin />
              </div>
              <div>
                <h3>APV Mobile Mechanics</h3>
                <p>Mobile Service Delivered Direct To Your Location</p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/dvreoSEMYhGPaky5A?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="location-light-card__btn"
              aria-label="Open Google Maps Location"
            >
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const cards=[["Laura Brown","New York, USA",1],["William Foster","Chicago, USA",2]];
  return <section className="section testimonials inner-testimonials"><div className="container"><SectionHeading eyebrow="OUR TESTIMONIALS" title={<>About Our Customers <em>Feedback Says</em></>} center/><div className="testimonial-grid">{cards.map(([name,place,n])=><article key={name as string}><div className="stars">{[1,2,3,4,5].map(x=><Star key={x} fill="currentColor"/>)}</div><p>“Excellent automotive care, clear communication and fast professional service. The whole team made the repair process simple.”</p><div><Image src={`${A}/testimonial/testimonial-1-${n}.jpg`} alt={name as string} width={70} height={70}/><span><b>{name}</b><small>{place}</small></span></div></article>)}</div></div></section>;
}
