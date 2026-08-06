"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Car, AlertTriangle, Wrench } from "lucide-react";

export function QuickServiceSelector() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll(".qs-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="quick-service">
      <div className="container">
        <div className="quick-service__eyebrow">
          <span></span>
          HOW CAN WE HELP YOU TODAY?
          <span></span>
        </div>
        
        <div className="quick-service__grid" ref={containerRef}>
          {/* Card 1 */}
          <div className="qs-card" data-delay="0ms" style={{ transitionDelay: "0ms" }}>
            <div className="qs-card__num">01</div>
            <div className="qs-card__icon">
              <Car />
            </div>
            <h3>Rent A Car</h3>
            <p>Need a rental vehicle? Send an enquiry and our team will assist with available vehicles.</p>
            <a 
              href="https://wa.me/61424411375?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20rental%20vehicle%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="qs-card__btn"
            >
              Enquire Now &rarr;
            </a>
          </div>

          {/* Card 2 */}
          <div className="qs-card" data-delay="100ms" style={{ transitionDelay: "100ms" }}>
            <div className="qs-card__num">02</div>
            <div className="qs-card__icon">
              <AlertTriangle />
            </div>
            <h3>Roadside Assistance</h3>
            <p>Need urgent roadside help? Contact our mobile team for immediate assistance.</p>
            <a 
              href="tel:0424411375"
              className="qs-card__btn"
            >
              Request Assistance &rarr;
            </a>
          </div>

          {/* Card 3 */}
          <div className="qs-card" data-delay="200ms" style={{ transitionDelay: "200ms" }}>
            <div className="qs-card__num">03</div>
            <div className="qs-card__icon">
              <Wrench />
            </div>
            <h3>General Repairs &amp; Servicing</h3>
            <p>Book inspections, servicing, diagnostics and repairs.</p>
            <Link 
              href="/contact"
              className="qs-card__btn"
            >
              Book Service &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
