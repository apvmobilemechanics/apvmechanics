"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/common/section-heading";
import { GalleryModal } from "@/components/modals/gallery-modal";

const projects = [1, 2, 3, 4, 5];

export function GalleryLightbox() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  const change = (direction: number) =>
    setActive((current) =>
      current === null ? 0 : (current + direction + projects.length) % projects.length
    );

  return (
    <section className="section gallery" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="OUR PROJECTS"
          title={<>Gallery of Trusted Repairs <em>Real Cars, Real Results</em></>}
          center
        />
      </div>
      <div className="gallery-grid">
        {projects.map((n, index) => (
          <button
            key={n}
            onClick={() => setActive(index)}
            aria-label={`Open automotive project ${n}`}
          >
            <Image
              src={`/assets/images/project/v2-gallery-${n}.jpg`}
              alt={`Completed automotive project ${n}`}
              fill
              sizes="25vw"
            />
            <span>
              <Search />
            </span>
          </button>
        ))}
      </div>
      {active !== null && (
        <GalleryModal
          activeProject={projects[active]}
          onClose={() => setActive(null)}
          onChange={change}
        />
      )}
    </section>
  );
}
