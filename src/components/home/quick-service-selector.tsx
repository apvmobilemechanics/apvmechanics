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
      { threshold: 0.1 }
    );
    const cards = sectionRef.current?.querySelectorAll(".qss-card");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="qss-section">
      <div className="container">
        <div className="qss-grid">

          {/* Card 1 — Rent A Car */}
          <a
            href="https://wa.me/61424411375?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20rental%20vehicle%20availability."
            target="_blank"
            rel="noopener noreferrer"
            className="qss-card qss-card--default"
          >
            <div className="qss-card__head">
              <div className="qss-card__icon">
                <Car size={22} strokeWidth={1.8} />
              </div>
              <div className="qss-card__text">
                <h3>Rent A Car</h3>
                <span>Vehicle Rentals</span>
              </div>
            </div>
            <div className="qss-card__btn">
              Enquire <ArrowRight size={14} />
            </div>
          </a>

          {/* Card 2 — Roadside Assistance (featured red) */}
          <a href="tel:0424411375" className="qss-card qss-card--urgent">
            <div className="qss-card__head">
              <div className="qss-card__icon">
                <Zap size={22} strokeWidth={1.8} />
              </div>
              <div className="qss-card__text">
                <h3>Roadside Help</h3>
                <span>24/7 Emergency</span>
              </div>
            </div>
            <div className="qss-card__btn">
              <Phone size={13} /> Call Now
            </div>
          </a>

          {/* Card 3 — Repairs & Servicing */}
          <Link href="/contact" className="qss-card qss-card--default">
            <div className="qss-card__head">
              <div className="qss-card__icon">
                <Wrench size={22} strokeWidth={1.8} />
              </div>
              <div className="qss-card__text">
                <h3>Repairs &amp; Servicing</h3>
                <span>Book Mobile Mechanic</span>
              </div>
            </div>
            <div className="qss-card__btn">
              Book <ArrowRight size={14} />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
