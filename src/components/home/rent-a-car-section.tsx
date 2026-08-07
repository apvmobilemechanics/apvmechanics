"use client";

import { MessageCircle, Phone } from "lucide-react";
import { RentEnquiryForm } from "@/components/forms/rent-enquiry-form";
import { PHONE, WHATSAPP_URL } from "@/constants";

export function RentACarSection() {
  return (
    <section className="rent-car">
      <div className="container rent-car__grid">
        <div className="rent-car__content">
          <div className="eyebrow" style={{ marginBottom: "16px" }}>
            <span />
            RENT A CAR
          </div>
          <h2 style={{ font: "700 clamp(38px,4vw,52px)/1.12 var(--font-rubik)", letterSpacing: "-2px", color: "white", margin: "16px 0 20px" }}>
            Need A Car For <em style={{ color: "var(--red)", fontStyle: "normal" }}>Rent?</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", lineHeight: 1.75, marginBottom: "36px" }}>
            Looking for a rental vehicle? Contact us and our team will help you find available options.
          </p>

          <div className="rent-car__actions">
            <a href={`tel:${PHONE.replace(/\s+/g, "")}`} className="rent-car__btn rent-car__btn--red">
              <Phone size={18} style={{ marginRight: "8px" }} /> Call Now
            </a>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rent-car__btn rent-car__btn--wa"
            >
              <MessageCircle size={18} style={{ marginRight: "8px" }} /> WhatsApp
            </a>
            <a href="#rent-enquiry" className="rent-car__btn rent-car__btn--outline">
              Check Availability
            </a>
          </div>

          <div className="rent-car__stats">
            <div className="rent-car__stat">
              <strong>500+</strong>
              <span>Vehicles Serviced</span>
            </div>
            <div className="rent-car__stat">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
            <div className="rent-car__stat">
              <strong>18</strong>
              <span>Suburbs Covered</span>
            </div>
          </div>
        </div>

        <div className="rent-car__form-wrapper" id="rent-enquiry">
          <div className="rent-car__form">
            <RentEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
