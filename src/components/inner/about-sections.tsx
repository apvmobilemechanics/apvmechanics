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
          <SectionHeading eyebrow="ABOUT APV MOBILE MECHANICS" title={<>Hobart's Trusted<br/>Mobile Car Repair</>}/>
          <p>APV Mobile Mechanics started with a simple idea. Car owners should not have to take time off work, arrange transport or wait days for a workshop booking just to get a basic repair done. We built our business around bringing full workshop capability directly to driveways, offices and roadsides across Hobart.</p>
          <p>Over the past ten years we have grown from a single mobile unit into a name that Hobart drivers recognise and recommend, having serviced more than five hundred vehicles for families, tradespeople and small businesses who value straightforward advice and lasting repairs.</p>
          <div className="about-clone-features">
            <div><i><Wrench/></i><span><b>500+ Vehicles Serviced</b><small>Trusted by hundreds of<br/>Hobart drivers.</small></span></div>
            <div><i><Check/></i><span><b>Fully Certified Mechanics</b><small>Expert care and<br/>lasting repairs.</small></span></div>
          </div>
          <div className="about-clone-checks">
            {["Honesty first — we tell you what your car actually needs", "Fair pricing with no hidden call out charges", "Quality parts and workmanship backed by a clear warranty", "Respect for your time — we arrive when we say we will"].map(item=><span key={item}><Check/>{item}</span>)}
          </div>
          <div className="about__bottom">
            <ThemeButton href="/contact">Contact Us</ThemeButton>
            <a className="about-clone-contact" href="tel:0424411375">
              <div className="about-clone-contact__icon">
                <Phone />
              </div>
              <span><small>Call Any Time</small><b>0424 411 375</b></span>
            </a>
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
              <p>Fast and accurate diagnosis from the start — getting you back on the road with confidence.</p>
            </div>
            <i><Check /></i>
          </div>
          <div className="process-step process-step--reverse">
            <i><Gauge /></i>
            <strong>STEP - 02</strong>
            <div className="process-step__copy">
              <h3>Performance Perfected</h3>
              <p>Every system tuned and tested to manufacturer specification for peak performance.</p>
            </div>
          </div>
          <div className="process-step">
            <strong>STEP - 03</strong>
            <div className="process-step__copy">
              <h3>Premium Care Experience</h3>
              <p>Clear communication at every stage of the job and professional workmanship throughout.</p>
            </div>
            <i><Wrench /></i>
          </div>
          <div className="process-step process-step--reverse">
            <i><Check /></i>
            <strong>STEP - 04</strong>
            <div className="process-step__copy">
              <h3>Attention To Detail</h3>
              <p>A thorough finish on every vehicle we touch, because the details matter.</p>
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
