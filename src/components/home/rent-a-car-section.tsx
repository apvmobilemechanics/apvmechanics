"use client";

import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

export function RentACarSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <section className="rent-car">
      <div className="container rent-car__grid">
        <div className="rent-car__content">
          <div className="eyebrow" style={{ marginBottom: "16px" }}>
            <span></span>
            RENT A CAR
          </div>
          <h2 style={{ font: "700 clamp(38px,4vw,52px)/1.12 var(--font-rubik)", letterSpacing: "-2px", color: "white", margin: "16px 0 20px" }}>
            Need A Car For <em style={{ color: "var(--red)", fontStyle: "normal" }}>Rent?</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", lineHeight: 1.75, marginBottom: "36px" }}>
            Looking for a rental vehicle? Contact us and our team will help you find available options.
          </p>

          <div className="rent-car__actions">
            <a href="tel:0424411375" className="rent-car__btn rent-car__btn--red">
              <Phone size={18} style={{ marginRight: "8px" }} /> Call Now
            </a>
            <a 
              href="https://wa.me/61424411375?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20rental%20vehicle%20availability."
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
            {status === "success" ? (
              <div className="rent-car__success">
                <strong>Thanks!</strong> We will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>Send An Enquiry</h3>
                
                <div className="rent-car__field">
                  <label htmlFor="rent-name">Name</label>
                  <input
                    id="rent-name"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                
                <div className="rent-car__field">
                  <label htmlFor="rent-phone">Phone</label>
                  <input
                    id="rent-phone"
                    type="tel"
                    placeholder="Your phone number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                
                <div className="rent-car__field">
                  <label htmlFor="rent-message">Message</label>
                  <textarea
                    id="rent-message"
                    rows={4}
                    placeholder="Tell us what vehicle you need and for how long..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="rent-car__submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
