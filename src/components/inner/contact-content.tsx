import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { LocalContactForm } from "@/components/inner/local-form";

export function ContactInfo() {
  const items = [
    { Icon: Phone, label: "Phone Number", value: "0424 411 375", href: "tel:0424411375" },
    { Icon: Mail, label: "Email Address", value: "apvmobilemechanics@gmail.com", href: "mailto:apvmobilemechanics@gmail.com" },
    { Icon: Clock3, label: "Opening Hours", value: "8:00 AM – 8:00 PM (Sat–Thu)", href: null },
    { Icon: MapPin, label: "Our Location", value: "APV Mobile Mechanics", href: "https://maps.app.goo.gl/dvreoSEMYhGPaky5A?g_st=aw" },
  ];
  return (
    <section className="contact-info-section">
      <div className="container contact-info-grid">
        {items.map(({ Icon, label, value, href }) => (
          <article className="contact-info-card" key={label}>
            <div className="contact-info-card__icon">
              <Icon />
            </div>
            <div className="contact-info-card__body">
              <small>{label}</small>
              {href ? (
                <b><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ color: "inherit" }}>{value}</a></b>
              ) : (
                <b>{value}</b>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ContactMapForm() {
  return (
    <section className="contact-page-section">
      <div className="container contact-page-grid">
        <div className="contact-map-wrapper">
          <iframe
            title="APV Mobile Mechanics location"
            src="https://maps.google.com/maps?q=APV%20Mobile%20Mechanics%20Australia&t=&z=14&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <LocalContactForm />
      </div>
    </section>
  );
}

