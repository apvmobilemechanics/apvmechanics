"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ThemeButton } from "@/components/common/button";

const A = "/assets/images";
const slides = ["slider-1-2.jpg", "slider-1-3.jpg"];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  const move = useCallback((direction: number) => {
    setActive((current) => (current + direction + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!paused.current) move(1);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [move]);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="APV automotive services"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      onFocusCapture={() => { paused.current = true; }}
      onBlurCapture={() => { paused.current = false; }}
    >
      <div className="hero__backgrounds" aria-hidden="true">
        {slides.map((image, index) => (
          <Image
            className={index === active ? "is-active" : ""}
            src={`${A}/backgrounds/${image}`}
            alt=""
            fill
            priority={index === 0}
            loading="eager"
            sizes="100vw"
            key={image}
          />
        ))}
      </div>
      <div className="hero__overlay" />
      <div className="hero__ghost" />
      <Image className="hero__shape hero__shape--one" src={`${A}/shapes/main-slider-shape-1.png`} alt="" width={1000} height={600}/>
      <Image className="hero__shape hero__shape--two" src={`${A}/shapes/main-slider-shape-2.png`} alt="" width={730} height={500}/>
      <div className="container hero__inner">
        <div className="hero__content" key={`content-${active}`}>
          <p className="hero__eyebrow">CAR - REPAIR - CENTER</p>
          <h1>Drive Confident With<br />Expert Car <span className="hero__title-image"><Image src={`${A}/resources/main-slider-title-img.jpg`} alt="Mechanic servicing a vehicle" fill sizes="140px" /></span><br />Care Center</h1>
          <p className="hero__copy">Expert car repair services to keep your vehicle running smoothly.<br />Watch for seasonal offers &amp; discounts to save on maintenance.</p>
          <div className="hero__actions">
            <ThemeButton href="/about">Read More</ThemeButton>
            <a className="hero__phone" href="tel:0424411375"><i><Phone size={20} /></i><span>Call Anytime<b>0424 411 375</b></span></a>
          </div>
        </div>
        <div className="hero__visual" key={`visual-${active}`}>
          <div className="customer-badge">
            <strong>24k</strong>
            <div className="avatars">{[1,2,3].map(n=><Image key={n} src={`${A}/resources/main-slider-satisfied-customer-1-${n}.jpg`} alt="" width={50} height={50}/>)}</div>
            <span>Satisfied Customers</span>
          </div>
          <Image className="hero__person" src={`${A}/resources/main-slider-1-1.png`} alt="Automotive service specialist" width={600} height={600} priority />
        </div>
      </div>
      <div className="hero__arrows">
        <button type="button" aria-label="Previous slide" onClick={() => move(-1)}><ChevronLeft/></button>
        <button type="button" aria-label="Next slide" onClick={() => move(1)}><ChevronRight/></button>
      </div>
      <p className="sr-only" aria-live="polite">Slide {active + 1} of {slides.length}</p>
    </section>
  );
}
