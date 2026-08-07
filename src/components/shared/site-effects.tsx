"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { PageLoader } from "@/components/ui/page-loader";
import { WhatsAppFloat } from "@/components/buttons/whatsapp-float";

export function SiteEffects() {
  const pathname = usePathname();

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

    return () => {
      reveal.disconnect();
      counterObserver.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <PageLoader />
      <CustomCursor />
      <WhatsAppFloat />
    </>
  );
}
