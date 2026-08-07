"use client";

import { useEffect, useState } from "react";

export function useCursor() {
  const [cursor, setCursor] = useState({ x: -100, y: -100, active: false });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const isTargetInteractive = Boolean(
        (event.target as HTMLElement | null)?.closest("a,button,input,select,textarea")
      );
      setCursor({
        x: event.clientX,
        y: event.clientY,
        active: isTargetInteractive,
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return cursor;
}
