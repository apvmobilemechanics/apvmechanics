"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, PHONE } from "@/constants";
import { useScrollHeader } from "@/hooks/use-scroll-header";
import { Topbar } from "@/components/navigation/topbar";
import { MobileMenu } from "@/components/navigation/mobile-menu";
import { InfoDrawer } from "@/components/navigation/info-drawer";

export function SiteHeader() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const stuck = useScrollHeader(100);

  return (
    <>
      <Topbar onOpenDrawer={() => setDrawerOpen(true)} />

      <header className={`header ${stuck ? "header--stuck" : ""}`}>
        <div className="header__inner">
          <Link className="logo" href="/" aria-label="APV Mobile Mechanics home">
            <Image
              className="brand-logo-image"
              src="/assets/images/resources/apv-mobile-mechanics-logo.jpeg"
              alt="APV Mobile Mechanics"
              width={88}
              height={88}
              unoptimized
              priority
            />
            <span className="logo__text">
              <strong className="logo__brand">APV</strong>
              <small className="logo__sub">MOBILE MECHANICS</small>
            </span>
          </Link>
          <nav aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const items = "items" in item ? item.items : undefined;
              const active = item.href ? pathname === item.href : false;
              return (
                <div className={`nav-item ${items ? "has-dropdown" : ""}`} key={item.label}>
                  <Link className={active ? "active" : ""} href={item.href}>
                    {item.label}
                    {items && <ChevronDown aria-hidden="true" />}
                  </Link>
                  {items && (
                    <ul className="nav-dropdown">
                      {items.map(([label, itemHref]) => (
                        <li key={label}>
                          <Link href={itemHref}>{label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
          <div className="header__tools">
            <a className="header__call" href={`tel:${PHONE.replace(/\s+/g, "")}`}>
              <i><Phone /></i>
              <span><small>Call Any Time</small><b>{PHONE}</b></span>
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>

      <InfoDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
