"use client";

import { Play, X } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useModal } from "@/hooks/use-modal";

export function VideoModalButton({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);

  useModal(open, () => setOpen(false));

  return (
    <>
      <button
        className={className}
        type="button"
        aria-label="Play repair video"
        onClick={() => setOpen(true)}
      >
        <Play fill="currentColor" />
      </button>

      {open &&
        createPortal(
          <div
            className="video-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Automart repair video"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              className="video-modal__close"
              onClick={() => setOpen(false)}
              aria-label="Close video"
            >
              <X />
            </button>
            <div
              className="video-modal__frame"
              onClick={(event) => event.stopPropagation()}
            >
              <iframe
                src="https://www.youtube.com/embed/Get7rqXYrbQ?autoplay=1"
                title="Automart repair video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
