"use client";

interface PageLoaderProps {
  phase: "show" | "hide" | "done";
}

export function PageLoader({ phase }: PageLoaderProps) {
  if (phase === "done") return null;

  return (
    <div className={`page-loader ${phase}`} aria-hidden="true">
      <div className="loader-dots">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
