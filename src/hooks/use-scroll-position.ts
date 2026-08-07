"use client";

import { useEffect, useState } from "react";

export function useScrollPosition(threshold = 100) {
  const [isPassedThreshold, setIsPassedThreshold] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsPassedThreshold(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isPassedThreshold;
}
