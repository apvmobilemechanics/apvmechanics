"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [loaderPhase, setLoaderPhase] = useState<"show" | "hide" | "done">("show");
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

  if (loaderPhase === "done") return null;

  return (
    <div className={`page-loader ${loaderPhase}`} aria-hidden="true">
      <div className="loader-dots">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
