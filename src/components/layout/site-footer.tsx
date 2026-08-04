"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { PremiumFooterCta } from "@/components/motion/premium-media-sections";

const A = "/assets/images";

/* Minimal social SVGs with authentic brand styling */
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M16 2a13 13 0 0 0-11 20L3 29l7.2-1.9A13 13 0 1 0 16 2zm0 23.8a10.8 10.8 0 0 1-5.5-1.5l-.4-.2-4.3 1.1 1.1-4.2-.3-.4A10.8 10.8 0 1 1 16 25.8zm5.9-8.1c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6 0a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5a.4.4 0 0 0 0-.4c0-.2-.7-1.7-.9-2.3s-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4A3.7 3.7 0 0 0 9 12.3a6.4 6.4 0 0 0 1.3 3.4 14.6 14.6 0 0 0 5.6 4.9c2.3 1 2.8.8 3.3.7a2.8 2.8 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z" />
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
              <Image
                src={`${A}/resources/apv-mobile-mechanics-logo.jpeg`}
                alt="APV Mobile Mechanics Logo"
                width={175}
                height={175}
                style={{ borderRadius: "50%", objectFit: "cover", display: "block" }}
                priority
              />
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon social-icon--fb">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/apvmechanics/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon social-icon--ig">
                <InstagramIcon />
              </a>
              <a href="https://wa.me/61424411375" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon social-icon--wa">
                <WhatsAppIcon />
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
