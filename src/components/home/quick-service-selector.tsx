"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Car, Zap, Wrench, ArrowRight, Phone } from "lucide-react";

export function QuickServiceSelector() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("qss-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll(".qss-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="qss-section">
      <div className="container">
        {/* Eyebrow */}
        <div className="qss-eyebrow">
          <span className="qss-eyebrow__line" />
          <span className="qss-eyebrow__text">HOW CAN WE HELP YOU TODAY?</span>
          <span className="qss-eyebrow__line" />
        </div>

        {/* Grid */}
        <div className="qss-grid">

          {/* Card 1 — Rent A Car: Photo BG */}
          <a
            href="https://wa.me/61424411375?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20rental%20vehicle%20availability."
            target="_blank"
            rel="noopener noreferrer"
            className="qss-card qss-card--photo"
            style={{ transitionDelay: "0ms" }}
          >
            <div className="qss-card__overlay" />
            <div className="qss-card__content">
              <div className="qss-card__icon-wrap">
                <Car strokeWidth={1.5} />
              </div>
              <div className="qss-card__body">
                <h3 className="qss-card__title">Rent A Car</h3>
                <p className="qss-card__desc">Need a rental vehicle? Send an enquiry and our team will assist with available vehicles.</p>
              </div>
              <div className="qss-card__cta">
                <span>Enquire Now</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </a>

          {/* Card 2 — Roadside Assistance: RED FEATURED (urgency) */}
          <a
            href="tel:0424411375"
            className="qss-card qss-card--featured"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="qss-card__content">
              <div className="qss-card__badge">URGENT</div>
              <div className="qss-card__icon-wrap qss-card__icon-wrap--white">
                <Zap strokeWidth={1.5} />
              </div>
              <div className="qss-card__body">
                <h3 className="qss-card__title">Roadside Assistance</h3>
                <p className="qss-card__desc">Need urgent roadside help? Contact our mobile team for immediate assistance.</p>
              </div>
              <div className="qss-card__cta qss-card__cta--outline">
                <Phone size={16} />
                <span>Call Now</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </a>

          {/* Card 3 — General Repairs: Dark Textured */}
          <Link
            href="/contact"
            className="qss-card qss-card--dark"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="qss-card__content">
              <div className="qss-card__icon-wrap">
                <Wrench strokeWidth={1.5} />
              </div>
              <div className="qss-card__body">
                <h3 className="qss-card__title">General Repairs &amp; Servicing</h3>
                <p className="qss-card__desc">Book inspections, servicing, diagnostics and repairs at your location.</p>
              </div>
              <div className="qss-card__cta qss-card__cta--red">
                <span>Book Service</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
