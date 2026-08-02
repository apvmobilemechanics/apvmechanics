"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  ChevronDown,
  ChevronsRight,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MobileMenu } from "@/components/home/interactive";

const A = "/assets/images";
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    items: [
      ["Mobile Car Repair", "/mobile-car-repair"],
      ["Engine Diagnostics", "/engine-diagnosis"],
      ["Brake Repair", "/brake-repair"],
      ["Battery Replacement", "/battery-solution"],
      ["Oil Change", "/oil-change"],
      ["Emergency Roadside Assistance", "/emergency-service"],
      ["Vehicle Inspection", "/vehicle-inspection"],
      ["Electrical Repairs", "/lights-accessories"],
      ["All Services", "/services"],
    ],
  },
  { label: "Contact Us", href: "/contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeLayers = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar__inner">
          <div className="topbar__item">
            <Mail />
            <span>
              <b>Email Address:</b>
              <small>apvmobilemechanics@gmail.com</small>
            </span>
          </div>
          <div className="topbar__item">
            <Clock3 />
            <span>
              <b>Opening Hours :</b>
              <small>8:00 AM to 8:00 PM (Saturday to Thursday)</small>
            </span>
          </div>
          <div className="topbar__actions">
            <Link className="pill-button" href="/contact">
              <span>Book Now</span>
              <i><ChevronsRight /></i>
            </Link>
            <button type="button" aria-label="Open information panel" className="topbar__menu-btn" onClick={() => setDrawerOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>
      </div>
      <header className={`header ${stuck ? "header--stuck" : ""}`}>
        <div className="header__inner">
          <Link className="logo" href="/" aria-label="APV Mobile Mechanics home">
            <Image
              className="brand-logo-image"
              src={`${A}/resources/apv-mobile-mechanics-logo.jpeg`}
              alt="APV Mobile Mechanics"
              width={58}
              height={58}
              priority
            />
            <span className="logo__text">
              <strong className="logo__brand">APV</strong>
              <small className="logo__sub">MOBILE MECHANICS</small>
            </span>
          </Link>
          <nav aria-label="Main navigation">
            {navItems.map((item) => {
              const hasItems = "items" in item;
              const href = "href" in item ? item.href : undefined;
              const active = href ? pathname === href : hasItems && item.items.some((entry) => entry[1] === pathname);
              return (
                <div className={`nav-item ${hasItems ? "has-dropdown" : ""}`} key={item.label}>
                  {href ? (
                    <Link className={active ? "active" : ""} href={href}>
                      {item.label}
                      {hasItems && <ChevronDown aria-hidden="true" />}
                    </Link>
                  ) : (
                    <button className={active ? "active" : ""} type="button">
                      {item.label}
                      <ChevronDown aria-hidden="true" />
                    </button>
                  )}
                  {hasItems && (
                    <ul className="nav-dropdown">
                      {item.items.map(([label, itemHref]) => (
                        <li key={label}><Link href={itemHref}>{label}</Link></li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
          <div className="header__tools">
            <a className="header__call" href="tel:0424411375">
              <i><Phone /></i>
              <span><small>Call Any Time</small><b>0424 411 375</b></span>
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>

      <button className={`panel-overlay ${drawerOpen ? "open" : ""}`} type="button" onClick={closeLayers} aria-label="Close information panel" />
      <aside className={`info-drawer ${drawerOpen ? "open" : ""}`} aria-hidden={!drawerOpen}>
        <button type="button" className="info-drawer__close" onClick={closeLayers} aria-label="Close information panel"><X /></button>
        <Image src={`${A}/resources/apv-mobile-mechanics-logo.jpeg`} alt="APV Mobile Mechanics" width={112} height={112} />
        <p>Professional automotive repair, diagnostics and mobile support delivered with dependable workmanship.</p>
        <h3>Contact Info</h3>
        <a href="tel:0424411375"><Phone /><span>Call Any Time<b>0424 411 375</b></span></a>
        <a href="mailto:apvmobilemechanics@gmail.com"><Mail /><span>Email Address<b>apvmobilemechanics@gmail.com</b></span></a>
        <a href="https://maps.app.goo.gl/dvreoSEMYhGPaky5A?g_st=aw" target="_blank" rel="noopener noreferrer"><MapPin /><span>Our Location<b>APV Mobile Mechanics</b></span></a>
        <div className="info-drawer__socials">
          <a href="https://www.facebook.com/" aria-label="Facebook"><b>f</b></a>
          <a href="https://www.instagram.com/" aria-label="Instagram"><Camera /></a>
        </div>
      </aside>
    </>
  );
}

