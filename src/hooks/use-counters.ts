"use client";

import { useEffect } from "react";

export function useCounters(pathname: string) {
  useEffect(() => {
    const counterObserver = new IntersectionObserver(
      (entries) => {
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
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll<HTMLElement>("[data-counter]").forEach((node) => counterObserver.observe(node));

    return () => {
      counterObserver.disconnect();
    };
  }, [pathname]);
}
