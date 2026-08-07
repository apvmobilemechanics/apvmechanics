import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Gauge,
  Mail,
  MapPin,
  Phone,
  Quote,
  Wrench,
} from "lucide-react";
import { PageBanner } from "@/components/common/page-banner";
import { SectionHeading } from "@/components/common/section-heading";
import { GalleryLightbox } from "@/components/home/gallery-lightbox";
import { FaqList } from "@/components/home/interactive";
import { HomeTeam } from "@/components/home/showcase-carousels";
import { TestimonialsSection } from "@/components/inner/about-sections";
import { LocalContactForm } from "@/components/inner/local-form";
import { posts, services, team } from "@/lib/site-data";

export function TeamPageContent() {
  return <main><PageBanner title="Our Team"/><section className="section route-team"><HomeTeam inner/></section></main>;
}

export function TeamDetailsContent() {
  const member = team[0];
  return (
    <main>
      <PageBanner title="Team Details"/>
      <section className="section detail-section">
        <div className="container team-detail-grid">
          <div className="team-detail-image"><Image src={member.image} alt={member.name} fill priority sizes="520px"/></div>
          <div>
            <span className="detail-eyebrow">AUTOMART SPECIALIST</span>
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>William combines careful diagnostics with practical workshop experience. His methodical approach helps customers understand every repair before work begins.</p>
            <p>From scheduled servicing to urgent mechanical work, he focuses on safe, durable results and clear communication.</p>
            <div className="skill-list">
              {["Engine Diagnostics", "Brake Systems", "Preventive Maintenance"].map((skill, index) => <div key={skill}><span><b>{skill}</b><strong>{96 - index * 4}%</strong></span><i><em style={{ width: `${96 - index * 4}%` }}/></i></div>)}
            </div>
            <div className="team-contact"><a href="tel:0424411375"><Phone/> 0424 411 375</a><a href="mailto:apvmobilemechanics@gmail.com"><Mail/> apvmobilemechanics@gmail.com</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function ProjectsContent() {
  return <main><PageBanner title="Projects"/><GalleryLightbox/></main>;
}

export function ProjectDetailsContent() {
  return (
    <main>
      <PageBanner title="Project Details"/>
      <section className="section detail-section">
        <div className="container project-detail">
          <div className="project-detail__hero"><Image src="/assets/images/project/project-1-3.jpg" alt="Completed luxury car restoration" fill priority sizes="1200px"/></div>
          <div className="project-detail__grid">
            <article>
              <span className="detail-eyebrow">COMPLETE VEHICLE RESTORATION</span>
              <h2>Precision Repair for a Confident Drive</h2>
              <p>This project included a full mechanical inspection, brake system restoration, suspension correction and exterior finishing. Every stage was documented and verified through a final road test.</p>
              <div className="detail-checks">{["Complete diagnostic scan","Brake and suspension rebuild","Cooling system service","Final alignment and road test"].map((item) => <span key={item}><Check/>{item}</span>)}</div>
            </article>
            <aside><h3>Project Information</h3><dl><div><dt>Client</dt><dd>Automart Customer</dd></div><div><dt>Category</dt><dd>Repair & Restoration</dd></div><div><dt>Date</dt><dd>26 May 2026</dd></div><div><dt>Location</dt><dd>Washington Workshop</dd></div></dl><Link className="primary-action" href="/contact">Start Your Project <ArrowRight/></Link></aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export function TestimonialsPageContent() {
  return <main><PageBanner title="Testimonials"/><TestimonialsSection/><section className="testimonial-band"><div className="container"><Quote/><p>Trusted by drivers for clear advice, skilled workmanship and dependable service.</p></div></section></main>;
}

export function FaqPageContent() {
  return (
    <main>
      <PageBanner title="FAQ"/>
      <section className="section faq-route">
        <div className="container faq-route-grid">
          <div><SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" title={<>Everything You Need to Know About <em>Car Care</em></>}/><p>Clear answers help you make confident repair and maintenance decisions.</p><div className="faq-route-contact"><Phone/><span>Still need help?<b>0424 411 375</b></span></div></div>
          <FaqList/>
        </div>
      </section>
    </main>
  );
}

export function ServicesVariantContent({ version }: { version: 2 | 3 }) {
  return (
    <main>
      <PageBanner title={`Services V-${version}`}/>
      <section className={`section service-variant service-variant--${version}`}>
        <div className="container">
          <SectionHeading eyebrow="WHAT WE DO" title={<>Complete Automotive <em>Solutions</em></>} center/>
          <div className="service-card-grid">
            {services.map((service, index) => <article key={service.slug}>
              <div><Image src={service.image} alt={service.title} fill sizes="400px"/></div>
              <span>0{index + 1}</span>
              <i><Wrench/></i>
              <h3>{service.title}</h3>
              <p>Accurate inspection, skilled repair and a clear explanation from our experienced team.</p>
              <Link href={`/${service.slug}`}>Read More <ArrowRight/></Link>
            </article>)}
          </div>
        </div>
      </section>
    </main>
  );
}

export function ServiceDetailsContent({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug) ?? services[0];
  const s = service as any; // access extended fields
  
  return (
    <main>
      <PageBanner title={s.h1 ?? service.title}/>
      <section className="section detail-section service-detail">
        <div className="container service-detail-grid">
          <article>
            <div className="service-detail-image"><Image src={service.image} alt={service.title} fill priority sizes="820px"/></div>
            <span className="detail-eyebrow">PROFESSIONAL AUTOMOTIVE SERVICE</span>
            <h2>{s.h1 ?? service.title + ' You Can Depend On'}</h2>
            <p>{s.intro ?? 'Our technicians combine accurate diagnostics, workshop-grade equipment and proven repair methods to restore safety and performance.'}</p>
            
            {s.features && s.features.length > 0 && (
              <div className="detail-checks">
                {(s.features as string[]).map((item: string) => <span key={item}><Check/>{item}</span>)}
              </div>
            )}
            
            {s.localNote && <p className="service-local-note"><strong>Local Note:</strong> {s.localNote}</p>}
            
            {s.process && s.process.length > 0 && (
              <div className="service-benefits">
                <div><Gauge/><span><b>Our Process</b><small>Step by step how we work.</small></span></div>
                <div><Wrench/><span><b>Expert Workmanship</b><small>Repairs follow a careful, repeatable process.</small></span></div>
              </div>
            )}
            
            {s.faqs && s.faqs.length > 0 && (
              <div className="service-faqs">
                <h3>Frequently Asked Questions</h3>
                {(s.faqs as Array<{q: string; a: string}>).map((faq) => (
                  <details key={faq.q} className="service-faq-item">
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            )}
            
            {s.cta && (
              <div className="service-cta-box">
                <p>{s.cta}</p>
                <a href="tel:0424411375" className="primary-action">Call 0424 411 375 <ArrowRight/></a>
              </div>
            )}
          </article>
          <aside>
            <h3>Our Services</h3>
            {services.map((item) => <Link className={item.slug === service.slug ? "active" : ""} href={`/${item.slug}`} key={item.slug}>{item.title}<ArrowRight/></Link>)}
            <div className="service-help"><Phone/><h3>Need Emergency Help?</h3><p>Speak directly with our service team.</p><a href="tel:0424411375">0424 411 375</a></div>
          </aside>
        </div>
      </section>
      <section className="section quote-section"><div className="container"><SectionHeading eyebrow="BOOK A SERVICE" title={<>Let&apos;s Get Your Car <em>Back on the Road</em></>}/><LocalContactForm compact/></div></section>
    </main>
  );
}

export function BlogStandardContent() {
  return (
    <main>
      <PageBanner title="Blog Standard"/>
      <section className="section blog-standard">
        <div className="container blog-standard-grid">
          <div>{posts.map((post) => <article key={post.slug}><div><Image src={post.image} alt={post.title} fill sizes="800px"/></div><span>{post.date} / BY ADMIN</span><h2>{post.title}</h2><p>Practical maintenance guidance from experienced automotive professionals, written to help you protect performance and reliability.</p><Link href={`/blog-details?post=${post.slug}`}>Read More <ArrowRight/></Link></article>)}</div>
          <aside><h3>Categories</h3>{["Car Repair","Maintenance","Engine Care","Safety Checks","Workshop News"].map((item) => <Link href="/blog" key={item}>{item}<span>›</span></Link>)}<h3>Recent Posts</h3>{posts.map((post) => <Link className="recent-blog" href={`/blog-details?post=${post.slug}`} key={post.slug}><Image src={post.image} alt="" width={75} height={70}/><span><small>{post.date}</small><b>{post.title}</b></span></Link>)}</aside>
        </div>
      </section>
    </main>
  );
}

export function BlogDetailsContent() {
  const post = posts[0];
  return (
    <main>
      <PageBanner title="Blog Details"/>
      <section className="section blog-detail">
        <article className="container blog-detail__article">
          <div className="blog-detail__image"><Image src={post.image} alt={post.title} fill priority sizes="1100px"/></div>
          <span>{post.date} &nbsp; / &nbsp; CAR REPAIR &nbsp; / &nbsp; BY ADMIN</span>
          <h2>{post.title}</h2>
          <p>Regular maintenance is one of the simplest ways to reduce long-term repair costs. A consistent service schedule helps technicians find small issues before they affect other components.</p>
          <blockquote><Quote/>A well-maintained vehicle is safer, more efficient and easier to own.</blockquote>
          <h3>Start With the Essentials</h3>
          <p>Check fluid levels, tyre condition, brakes and warning lights at sensible intervals. Follow the manufacturer schedule and keep a clear service record so future inspections have useful context.</p>
          <div className="detail-checks">{["Inspect tyres and pressures","Check fluids and visible leaks","Listen for unfamiliar sounds","Respond to warning lights early"].map((item) => <span key={item}><Check/>{item}</span>)}</div>
          <div className="blog-author"><Image src="/assets/images/testimonial/testimonial-1-1.jpg" alt="Automart author" width={84} height={84}/><span><small>WRITTEN BY</small><b>Automart Service Team</b><p>Practical guidance from experienced automotive specialists.</p></span></div>
        </article>
      </section>
    </main>
  );
}

export function NotFoundContent() {
  return (
    <main className="error-page">
      <div className="error-page__background"><Image src="/assets/images/backgrounds/slider-1-1.jpg" alt="" fill priority sizes="100vw"/></div>
      <div className="error-page__content"><strong>404</strong><h1>Page Not Found</h1><p>The page you requested is unavailable, but our workshop is ready to help.</p><Link className="primary-action" href="/">Back To Home <ArrowRight/></Link></div>
    </main>
  );
}

export function ContactStrip() {
  return <section className="contact-strip"><div className="container"><div><MapPin/><span><small>Our Location</small><b><a href="https://maps.app.goo.gl/dvreoSEMYhGPaky5A?g_st=aw" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>1-3 Leighland Rd, Claremont TAS 7011</a></b></span></div><div><Phone/><span><small>Call Any Time</small><b>0424 411 375</b></span></div></div></section>;
}
