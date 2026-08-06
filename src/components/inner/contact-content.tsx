import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { LocalContactForm } from "@/components/inner/local-form";

export function ContactInfo() {
  const items = [
    { Icon: Phone, label: "Phone Number", value: "0424 411 375", href: "tel:0424411375" },
    { Icon: Mail, label: "Email Address", value: "apvmobilemechanics@gmail.com", href: "mailto:apvmobilemechanics@gmail.com" },
    { Icon: Clock3, label: "Opening Hours", value: "8:00 AM – 8:00 PM (Sat–Thu)", href: null },
    { Icon: MapPin, label: "Our Location", value: "APV Mobile Mechanics", href: "https://www.google.com/maps/place/APV+mobile+Mechanics/@-42.7871385,147.2448997,17z/data=!3m1!4b1!4m6!3m5!1s0xaa6e0d2733b06751:0xe9d97dff7c553e69!8m2!3d-42.7871425!4d147.24748!16s%2Fg%2F11z96__8np!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D" },
  ];
  return (
    <section className="contact-info-section">
      <div className="container contact-info-grid">
        {items.map(({ Icon, label, value, href }) => {
          const CardContent = (
            <>
              <div className="contact-info-card__icon">
                <Icon />
              </div>
              <div className="contact-info-card__body">
                <small>{label}</small>
                <b>{value}</b>
              </div>
            </>
          );
          return href ? (
            <a
              className="contact-info-card contact-info-card--link"
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {CardContent}
            </a>
          ) : (
            <article className="contact-info-card" key={label}>
              {CardContent}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function ContactMapForm() {
  return (
    <>
      <section className="section contact-content-section">
        <div className="container">
          <p className="contact-intro">Whether you need a routine service, an urgent repair or just some honest advice about your car, APV Mobile Mechanics is ready to help. Reach us using the details below and we will arrange a visit that fits your schedule.</p>
          <div className="contact-details-grid">
            <div>
              <h2>How To Book</h2>
              <ol>
                <li>Call us or fill in the contact form with your details</li>
                <li>Tell us what is wrong with your car and where you are located</li>
                <li>Let us know your preferred day and time</li>
                <li>We confirm the booking and arrive ready to help</li>
              </ol>
              <h3>What To Tell Us When Booking</h3>
              <p>To help us prepare properly for your visit, let us know the make, model and year of your vehicle, a description of the issue you are experiencing and your preferred location, whether that is your home, workplace or another convenient spot.</p>
            </div>
            <div>
              <h2>Our Service Area</h2>
              <p>We service Hobart CBD and the surrounding suburbs, including Sandy Bay, Battery Point, West Hobart, South Hobart, New Town, Lenah Valley, Glenorchy, Moonah, Claremont, Rosny Park, Bellerive, Howrah, Lindisfarne, Kingston, Blackmans Bay and Mount Nelson.</p>
              <p className="contact-cta-text">Do not wait for a small issue to become a bigger one. Call APV Mobile Mechanics on <a href="tel:0424411375">0424 411 375</a> or send us your details today.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-page-section">
        <div className="container contact-page-grid">
          <div className="contact-map-wrapper">
            <iframe
              title="APV Mobile Mechanics location"
              src="https://maps.google.com/maps?q=-42.7871425,147.24748(APV%20Mobile%20Mechanics)&t=&z=16&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <LocalContactForm />
        </div>
      </section>
    </>
  );
}

