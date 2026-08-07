import type { LucideIcon } from "lucide-react";

export interface LocationCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string | null;
  className?: string;
}

export function LocationCard({
  icon: Icon,
  label,
  value,
  href,
  className = "location-info-card location-info-card--link",
}: LocationCardProps) {
  const content = (
    <>
      <div className="location-info-card__icon">
        <Icon />
      </div>
      <div className="location-info-card__body">
        <small>{label}</small>
        <b>{value}</b>
      </div>
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {content}
      </a>
    );
  }

  return <article className="location-info-card">{content}</article>;
}

export const LocationInfoCard = LocationCard;
