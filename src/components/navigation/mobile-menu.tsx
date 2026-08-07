"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/constants";
import { useModal } from "@/hooks/use-modal";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const close = () => {
    setOpen(false);
    setSubmenu(null);
  };

  useEffect(() => setMounted(true), []);
  useModal(open, close);

  const panel = (
    <>
      <div className={`mobile-panel-backdrop ${open ? "open" : ""}`} onClick={close} />
      <aside className={`mobile-panel ${open ? "open" : ""}`} aria-hidden={!open}>
        <button className="mobile-close" onClick={close} aria-label="Close navigation">
          <X />
        </button>
        {NAV_ITEMS.map((item) => (
          <div className="mobile-nav-item" key={item.label}>
            {item.items ? (
              <>
                <button
                  onClick={() => setSubmenu(submenu === item.label ? null : item.label)}
                  aria-expanded={submenu === item.label}
                >
                  <span>{item.label}</span>
                  <ChevronDown />
                </button>
                <div className={`mobile-submenu ${submenu === item.label ? "open" : ""}`}>
                  {item.items.map(([label, href]) => (
                    <Link key={label} href={href} onClick={close}>
                      {label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link href={item.href} onClick={close}>
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </aside>
    </>
  );

  return (
    <>
      <button className="mobile-toggle" onClick={() => setOpen(true)} aria-label="Open navigation">
        <Menu />
      </button>
      {mounted && createPortal(panel, document.body)}
    </>
  );
}
