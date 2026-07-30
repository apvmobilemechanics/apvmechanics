"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/common/section-heading";

const projects = [1, 2, 3, 4, 5];

export function GalleryLightbox() {
  const [active, setActive] = useState<number | null>(null);
  const change = (direction: number) => setActive((current) => current === null ? 0 : (current + direction + projects.length) % projects.length);
  return (
    <section className="section gallery" id="projects">
      <div className="container"><SectionHeading light eyebrow="OUR PROJECTS" title={<>Gallery of Trusted Repairs <em>Real Cars, Real Results</em></>} center /></div>
      <div className="gallery-grid">{projects.map((n,index)=><button key={n} onClick={()=>setActive(index)} aria-label={`Open automotive project ${n}`}><Image src={`/assets/images/project/project-1-${n}.jpg`} alt={`Completed automotive project ${n}`} fill sizes="25vw"/><span><Search/></span></button>)}</div>
      {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Automotive project gallery"><button className="lightbox__close" onClick={()=>setActive(null)} aria-label="Close gallery"><X/></button><button className="lightbox__prev" onClick={()=>change(-1)} aria-label="Previous project"><ChevronLeft/></button><div className="lightbox__image"><Image src={`/assets/images/project/project-1-${projects[active]}.jpg`} alt={`Completed automotive project ${projects[active]}`} fill sizes="90vw" priority/></div><button className="lightbox__next" onClick={()=>change(1)} aria-label="Next project"><ChevronRight/></button></div>}
    </section>
  );
}
