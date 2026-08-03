import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { services } from "@/lib/site-data";

export function ServicesListSection() {
  return (
    <section className="section services inner-services">
      <div className="container">
        <SectionHeading eyebrow="WHAT WE DO" title={<>Comprehensive Car <em>Solutions</em></>} center />
        <div className="service-list">
          {services.map(({ title, slug, image }, i) => (
            <article className="service-row" key={slug}>
              <span className="service-row__number">{String(i + 1).padStart(2, "0")} /</span>
              <div className="service-row__image">
                <Image src={image} alt={title} fill sizes="260px" />
              </div>
              <h3>{title}</h3>
              <p>Reliable automotive solutions delivered by skilled technicians using modern workshop equipment.</p>
              <Link href={`/${slug}`} aria-label={`View details for ${title}`}>
                <span>View Details</span><ChevronsRight />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
