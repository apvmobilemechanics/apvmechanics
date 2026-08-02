import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { LocalContactForm } from "@/components/inner/local-form";

export function ContactInfo() {
  return (
    <section className="contact-info-section">
      <div className="container contact-info-grid">
        <article>
          <i><Phone /></i>
          <span>
            <small>Phone Number</small>
            <b><a href="tel:0424411375" style={{ color: "inherit" }}>0424 411 375</a></b>
          </span>
        </article>
        <article>
          <i><Mail /></i>
          <span>
            <small>Email Address</small>
            <b><a href="mailto:apvmobilemechanics@gmail.com" style={{ color: "inherit" }}>apvmobilemechanics@gmail.com</a></b>
          </span>
        </article>
        <article>
          <i><Clock3 /></i>
          <span>
            <small>Opening Hours</small>
            <b>8:00 AM - 8:00 PM (Sat - Thu)</b>
          </span>
        </article>
        <article>
          <i><MapPin /></i>
          <span>
            <small>Our Location</small>
            <b>
              <a
                href="https://maps.app.goo.gl/dvreoSEMYhGPaky5A?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                APV Mobile Mechanics
              </a>
            </b>
          </span>
        </article>
      </div>
    </section>
  );
}

export function ContactMapForm() {
  return (
    <section className="contact-page-section">
      <div className="container contact-page-grid">
        <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "380px", borderRadius: "8px", overflow: "hidden" }}>
          <iframe
            title="APV Mobile Mechanics location"
            src="https://maps.google.com/maps?q=APV%20Mobile%20Mechanics&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            style={{ width: "100%", height: "100%", minHeight: "380px", border: 0 }}
            allowFullScreen
          />
        </div>
        <LocalContactForm />
      </div>
    </section>
  );
}

