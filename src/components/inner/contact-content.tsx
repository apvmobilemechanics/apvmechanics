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
  );
}

