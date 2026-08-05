"use client";

import { ArrowUp, ChevronDown, Menu, MessageCircle, Play, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const faqs = [
  ["What types of vehicles do you service?", "We service most major makes and models, including petrol, diesel and hybrid vehicles."],
  ["How often should I get my car serviced?", "Most vehicles benefit from a service every six to twelve months, depending on usage and manufacturer guidance."],
  ["Do you provide a warranty on repairs?", "Yes. Our workmanship and fitted parts are covered by a clear service warranty."],
  ["Can I book an appointment online?", "Yes. Use the appointment form below and our team will confirm your preferred time."],
];

export function FaqList() {
  const [open, setOpen] = useState(0);
  return <div className="faq-list">{faqs.map(([q,a],i)=><div className={open===i?"open":""} key={q}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>{q}</span><ChevronDown/></button><div className="faq-answer"><p>{a}</p></div></div>)}</div>;
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const links = [
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
  ];
  const close = () => { setOpen(false); setSubmenu(null); };
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const panel = (
    <>
      <div className={`mobile-panel-backdrop ${open ? "open" : ""}`} onClick={close} />
      <aside className={`mobile-panel ${open ? "open" : ""}`} aria-hidden={!open}>
        <button className="mobile-close" onClick={close} aria-label="Close navigation"><X /></button>
        {links.map((item) => (
          <div className="mobile-nav-item" key={item.label}>
            {item.items ? (
              <>
                <button onClick={() => setSubmenu(submenu === item.label ? null : item.label)} aria-expanded={submenu === item.label}>
                  <span>{item.label}</span><ChevronDown />
                </button>
                <div className={`mobile-submenu ${submenu === item.label ? "open" : ""}`}>
                  {item.items.map(([label, href]) => <Link key={label} href={href} onClick={close}>{label}</Link>)}
                </div>
              </>
            ) : (
              <Link href={item.href!} onClick={close}>{item.label}</Link>
            )}
          </div>
        ))}
      </aside>
    </>
  );

  return (
    <>
      <button className="mobile-toggle" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu /></button>
      {mounted && createPortal(panel, document.body)}
    </>
  );
}

export function SiteEffects() {
  const [showTop, setShowTop] = useState(false);
  const [loaderPhase, setLoaderPhase] = useState<"show" | "hide" | "done">("show");
  const [cursor, setCursor] = useState({ x: -100, y: -100, active: false });
  const pathname = usePathname();

  useEffect(() => {
    const showTimer = window.setTimeout(() => setLoaderPhase("show"), 0);
    const hideTimer = window.setTimeout(() => setLoaderPhase("hide"), 720);
    const doneTimer = window.setTimeout(() => setLoaderPhase("done"), 1050);
    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
      window.clearTimeout(doneTimer);
    };
  }, [pathname]);

  useEffect(() => {
    type RevealDirection = "up" | "left" | "right" | "zoom";
    const revealNodes = new Map<HTMLElement, { direction: RevealDirection; index: number }>();
    const register = (selector: string, direction: RevealDirection | ((index: number) => RevealDirection)) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((node, index) => {
        if (revealNodes.has(node)) return;
        const hasAnimatedParent = Array.from(revealNodes.keys()).some((parent) => parent.contains(node));
        if (hasAnimatedParent) return;
        revealNodes.set(node, {
          direction: typeof direction === "function" ? direction(index) : direction,
          index,
        });
      });
    };

    register("[data-reveal='left']", "left");
    register("[data-reveal='right']", "right");
    register("[data-reveal='zoom']", "zoom");
    register(".about-clone-grid>div:first-child,.about__images,.faq .split>div:first-child,.choose__content,.contact__info,.team-detail-image,.project-detail__hero,.service-detail__image,.product-detail-image,.video-one-clone__titles", "left");
    register(".about-clone-grid>div:last-child,.about__content,.faq .split>div:last-child,.choose__visual,.contact__form,.contact-page-grid>form,.team-detail-grid>div:last-child,.service-detail__copy,.product-detail-copy,.video-one-clone__play", "right");
    register("main section .service-row", "up");
    register("main section .process-grid article,main section .testimonial-grid article,main section .location-grid article,main section .blog-grid article,main section .contact-info-grid article,main section .shop-product-card,main section .clone-product,main section .clone-team-card,main section .service-card-grid article,main section .gallery-grid>button", "up");
    register("main section .section-heading,[data-reveal]:not([data-reveal='left']):not([data-reveal='right']):not([data-reveal='zoom'])", "up");

    revealNodes.forEach(({ direction, index }, node) => {
      node.classList.add("reveal-ready", `reveal-${direction}`);
      if (!node.style.getPropertyValue("--reveal-delay")) {
        const suppliedDelay = Number(node.dataset.revealDelay);
        const delay = Number.isFinite(suppliedDelay) && suppliedDelay > 0 ? suppliedDelay : (index % 5) * 100;
        node.style.setProperty("--reveal-delay", `${delay}ms`);
      }
    });

    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -7% 0px" });
    revealNodes.forEach((_, node) => reveal.observe(node));

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const node = entry.target as HTMLElement;
        const target = Number(node.dataset.counter ?? 0);
        const started = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - started) / 1500, 1);
          node.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        counterObserver.unobserve(node);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll<HTMLElement>("[data-counter]").forEach((node) => counterObserver.observe(node));

    const onScroll = () => setShowTop(window.scrollY > 700);
    const onPointerMove = (event: PointerEvent) => setCursor({
      x: event.clientX,
      y: event.clientY,
      active: Boolean((event.target as HTMLElement | null)?.closest("a,button,input,select,textarea")),
    });
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      reveal.disconnect();
      counterObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [pathname]);

  return <>
    {loaderPhase !== "done" && (
      <div className={`page-loader ${loaderPhase}`} aria-hidden="true">
        <div className="loader-dots"><i /><i /><i /></div>
      </div>
    )}
    <span
      className={`custom-cursor ${cursor.active ? "active" : ""}`}
      style={{
        transform: `translate3d(${cursor.x}px,${cursor.y}px,0)`,
        opacity: cursor.x < 0 ? 0 : 1,
      }}
      aria-hidden="true"
    />

    <a
      href="https://wa.me/61424411375?text=Hi%20APV%20Mobile%20Mechanics%2C%20I%20would%20like%20to%20inquire%20about%20a%20service."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with APV Mobile Mechanics on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
        <path d="M16 2a13 13 0 0 0-11 20L3 29l7.2-1.9A13 13 0 1 0 16 2zm0 23.8a10.8 10.8 0 0 1-5.5-1.5l-.4-.2-4.3 1.1 1.1-4.2-.3-.4A10.8 10.8 0 1 1 16 25.8zm5.9-8.1c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6 0a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5a.4.4 0 0 0 0-.4c0-.2-.7-1.7-.9-2.3s-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4A3.7 3.7 0 0 0 9 12.3a6.4 6.4 0 0 0 1.3 3.4 14.6 14.6 0 0 0 5.6 4.9c2.3 1 2.8.8 3.3.7a2.8 2.8 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z" />
      </svg>
      <span className="whatsapp-float__tooltip">Chat on WhatsApp</span>
    </a>

    <button className={`scroll-top ${showTop?"show":""}`} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Go back to top"><ArrowUp/><span>Go Back Top</span></button>
  </>;
}

export function VideoModalButton({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);
  return <>
    <button className={className} type="button" aria-label="Play repair video" onClick={() => setOpen(true)}><Play fill="currentColor" /></button>
    {open && createPortal(
      <div className="video-modal" role="dialog" aria-modal="true" aria-label="Automart repair video" onClick={() => setOpen(false)}>
        <button type="button" className="video-modal__close" onClick={() => setOpen(false)} aria-label="Close video"><X /></button>
        <div className="video-modal__frame" onClick={(event) => event.stopPropagation()}>
          <iframe
            src="https://www.youtube.com/embed/Get7rqXYrbQ?autoplay=1"
            title="Automart repair video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>,
      document.body,
    )}
  </>;
}
