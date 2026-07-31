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
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCommerce } from "@/components/commerce/commerce-provider";
import { MobileMenu } from "@/components/home/interactive";

const A = "/assets/images";
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Pages",
    items: [
      ["Team", "/team"],
      ["Team Details", "/team-details"],
      ["Projects", "/projects"],
      ["Project Details", "/project-details"],
      ["Testimonial", "/testimonials"],
      ["FAQ", "/faq"],
      ["404 Error", "/404"],
    ],
  },
  {
    label: "Services",
    href: "/services",
    items: [
      ["Services V-1", "/services"],
      ["Services V-2", "/services-v-2"],
      ["Services V-3", "/services-v-3"],
      ["Rim & Wheel Repair", "/rim-wheel-repair"],
      ["Lights & Accessories", "/lights-accessories"],
      ["Brake Repair", "/brake-repair"],
      ["Engine Diagnosis", "/engine-diagnosis"],
      ["Battery Solution", "/battery-solution"],
      ["Emergency Service", "/emergency-service"],
    ],
  },
  {
    label: "Shop",
    href: "/shop",
    items: [
      ["Products", "/shop"],
      ["Product Details", "/product-details"],
      ["Cart", "/cart"],
      ["Checkout", "/checkout"],
      ["Wishlist", "/wishlist"],
      ["Sign Up", "/sign-up"],
      ["Login", "/login"],
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    items: [
      ["Blog", "/blog"],
      ["Blog Standard", "/blog-standard"],
      ["Blog Details", "/blog-details"],
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const { cartCount } = useCommerce();
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const open = searchOpen || drawerOpen;
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen, searchOpen]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeLayers = () => {
    setSearchOpen(false);
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
              <small>scriptfusionscar@gmail.com</small>
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
            <span className="logo__brand">Automart</span>
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
            <button className="header-tool-button" type="button" onClick={() => setSearchOpen(true)} aria-label="Open search"><Search /></button>
            <Link className="header-cart-link" href="/cart" aria-label={`Shopping cart with ${cartCount} items`}>
              <ShoppingCart />
              {cartCount > 0 && <span>{cartCount}</span>}
            </Link>
            <span className="header__tools-divider" aria-hidden="true" />
            <a className="header__call" href="tel:0424411375">
              <i><Phone /></i>
              <span><small>Call Any Time</small><b>0424 411 375</b></span>
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>

      <div className={`search-overlay ${searchOpen ? "open" : ""}`} aria-hidden={!searchOpen}>
        <button type="button" className="layer-close" onClick={closeLayers} aria-label="Close search"><X /></button>
        <form action="/shop" className="search-overlay__form">
          <label htmlFor="site-search">Search Automart</label>
          <div>
            <input id="site-search" name="q" placeholder="Type and press enter..." autoComplete="off" />
            <button type="submit" aria-label="Search"><Search /></button>
          </div>
        </form>
      </div>

      <button className={`panel-overlay ${drawerOpen ? "open" : ""}`} type="button" onClick={closeLayers} aria-label="Close information panel" />
      <aside className={`info-drawer ${drawerOpen ? "open" : ""}`} aria-hidden={!drawerOpen}>
        <button type="button" className="info-drawer__close" onClick={closeLayers} aria-label="Close information panel"><X /></button>
        <Image src={`${A}/resources/apv-mobile-mechanics-logo.jpeg`} alt="APV Mobile Mechanics" width={112} height={112} />
        <p>Professional automotive repair, diagnostics and mobile support delivered with dependable workmanship.</p>
        <h3>Contact Info</h3>
        <a href="tel:0424411375"><Phone /><span>Call Any Time<b>0424 411 375</b></span></a>
        <a href="mailto:scriptfusionscar@gmail.com"><Mail /><span>Email Address<b>scriptfusionscar@gmail.com</b></span></a>
        <Link href="/contact"><MapPin /><span>Our Location<b>4517 Washington Ave, Kentucky</b></span></Link>
        <div className="info-drawer__socials">
          <a href="https://www.facebook.com/" aria-label="Facebook"><b>f</b></a>
          <a href="https://www.instagram.com/" aria-label="Instagram"><Camera /></a>
        </div>
      </aside>
    </>
  );
}
