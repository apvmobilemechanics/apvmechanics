"use client";

import { useCursor } from "@/hooks/use-cursor";

export function CustomCursor() {
  const cursor = useCursor();

  return (
    <span
      className={`custom-cursor ${cursor.active ? "active" : ""}`}
      style={{
        transform: `translate3d(${cursor.x}px,${cursor.y}px,0)`,
        opacity: cursor.x < 0 ? 0 : 1,
      }}
      aria-hidden="true"
    />
  );
}
