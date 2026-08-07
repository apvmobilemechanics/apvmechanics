import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ASSET_PREFIX } from "@/constants/site.constants";

interface ServiceRowProps {
  index: number;
  title: string;
  description: string;
  image: string;
  icon?: LucideIcon;
  slug?: string;
  revealDelay?: number;
}

export function ServiceRow({
  index,
  title,
  description,
  image,
  icon: Icon,
  slug,
  revealDelay,
}: ServiceRowProps) {
  const isCompact = title.length > 25;
  const href = slug ? `/${slug}` : "/services";
  const imageSrc = image.startsWith("/") ? image : `${ASSET_PREFIX}/services/${image}`;

  return (
    <article
      className="service-row"
      key={title}
      data-reveal-delay={revealDelay ?? index * 110}
    >
      <div className={`service-row__main ${isCompact ? "service-row__main--compact" : ""}`}>
        {Icon && (
          <i className="service-row__icon">
            <Icon />
          </i>
        )}
        <div className={`service-row__title ${isCompact ? "service-row__title--compact" : ""}`}>
          <span className="service-row__number">{String(index + 1).padStart(2, "0")} /</span>
          <h3>{title}</h3>
        </div>
      </div>
      <p>{description}</p>
      <Link href={href} aria-label={`View details for ${title}`}>
        <span>View Details</span>
        <ChevronsRight />
      </Link>
      <div className="service-row__image">
        <Image src={imageSrc} alt="" fill sizes="240px" />
      </div>
    </article>
  );
}
