"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { PremiumFooterCta } from "@/components/motion/premium-media-sections";

const A = "/assets/images";

/* Minimal social SVGs */
function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <PremiumFooterCta />

      <div className="footer-main">
        {/* Gear/Cog watermark pattern */}
        <div className="footer-bg-overlay" />

        <div className="container footer-grid">
          {/* Column 1: Brand & Newsletter */}
          <div className="footer-col footer-col--brand">
            <Link className="footer-logo-lockup" href="/" aria-label="APV Mobile Mechanics home">
              <div className="footer-logo-icon">
                <Image
                  src={`${A}/resources/apv-mobile-mechanics-logo.jpeg`}
                  alt="APV Mobile Mechanics Logo"
                  width={38}
                  height={38}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              </div>
              <span className="footer-logo-text">
                <em className="logo-red">APV Mobile</em>
                <span className="logo-white"> Mechanics</span>
              </span>
            </Link>

            <p className="footer-tagline">
              Quality washes, reliable service every time. Your car deserves the shine we deliver.
            </p>

            <div className="footer-newsletter-box">
              <h4>Newsletter</h4>
              <form onSubmit={(e) => e.preventDefault()} className="footer-newsletter-form-alt">
                <input type="email" placeholder="Email Address" required />
                <button type="submit" aria-label="Subscribe to newsletter">
                  <Mail size={18} />
                </button>
              </form>
            </div>

            <div className="footer-social-row">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <PinterestIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="footer-col">
            <h3 className="footer-heading">
              Our Services
              <span className="footer-heading-line" />
            </h3>
            <ul className="footer-links-list">
              <li><Link href="/mobile-car-repair">Mobile Car Repair</Link></li>
              <li><Link href="/engine-diagnosis">Engine Diagnostics</Link></li>
              <li><Link href="/brake-repair">Brake Repair</Link></li>
              <li><Link href="/battery-solution">Battery Replacement</Link></li>
              <li><Link href="/oil-change">Oil Change</Link></li>
              <li><Link href="/emergency-service">Emergency Roadside Assistance</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">
              Quick Links
              <span className="footer-heading-line" />
            </h3>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="footer-col">
            <h3 className="footer-heading">
              Location &amp; Contact
              <span className="footer-heading-line" />
            </h3>
            <div className="footer-offices-block">
              <div className="office-item">
                <span className="office-label">APV Mobile Mechanics</span>
                <p className="office-address">
                  Email: <a href="mailto:apvmobilemechanics@gmail.com" style={{ color: "inherit" }}>apvmobilemechanics@gmail.com</a>
                </p>
                <p className="office-address">
                  <a href="https://maps.app.goo.gl/dvreoSEMYhGPaky5A?g_st=aw" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary, #e31b23)" }}>View Google Maps Location</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom-bar">
          <div className="container footer-bottom-inner">
            <div className="footer-bottom-left">
              <p className="copyright-text">
                © 2026 APV Mobile Mechanics, All Rights Reserved.
              </p>
            </div>

            <div className="footer-bottom-right">
              <nav className="footer-legal-nav" aria-label="Legal navigation">
                <Link href="/about">Terms of Service</Link>
                <Link href="/about">Privacy policy</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
