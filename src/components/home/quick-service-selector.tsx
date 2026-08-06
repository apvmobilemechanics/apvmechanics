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

    const cards = sectionRef.current?.querySelectorAll(".qss-compact-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="qss-compact-section">
      <div className="container">
        {/* Eyebrow */}
        <div className="qss-compact-eyebrow">
          <span>HOW CAN WE HELP YOU TODAY?</span>
        </div>

        {/* 3 in 1 Row Grid (Mobile + Desktop) */}
        <div className="qss-compact-grid">
          {/* Item 1 — Rent A Car */}
          <a
            href="https://wa.me/61424411375?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20rental%20vehicle%20availability."
            target="_blank"
            rel="noopener noreferrer"
            className="qss-compact-card qss-compact-card--rent"
          >
            <div className="qss-compact-card__icon">
              <Car size={22} />
            </div>
            <div className="qss-compact-card__text">
              <h3>Rent A Car</h3>
              <p>Vehicle Rentals</p>
            </div>
            <div className="qss-compact-card__btn">
              <span>Enquire</span>
              <ArrowRight size={14} />
            </div>
          </a>

          {/* Item 2 — Roadside Assistance (Urgent) */}
          <a
            href="tel:0424411375"
            className="qss-compact-card qss-compact-card--roadside"
          >
            <div className="qss-compact-card__badge">URGENT</div>
            <div className="qss-compact-card__icon">
              <Zap size={22} />
            </div>
            <div className="qss-compact-card__text">
              <h3>Roadside Help</h3>
              <p>Immediate 24/7</p>
            </div>
            <div className="qss-compact-card__btn">
              <Phone size={13} />
              <span>Call Now</span>
            </div>
          </a>

          {/* Item 3 — General Repairs */}
          <Link
            href="/contact"
            className="qss-compact-card qss-compact-card--service"
          >
            <div className="qss-compact-card__icon">
              <Wrench size={22} />
            </div>
            <div className="qss-compact-card__text">
              <h3>Repairs &amp; Service</h3>
              <p>Book Mobile Check</p>
            </div>
            <div className="qss-compact-card__btn">
              <span>Book</span>
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
