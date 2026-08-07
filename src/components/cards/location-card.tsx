import type { LucideIcon } from "lucide-react";

export interface LocationCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string | null;
  className?: string;
  variant?: "light" | "dark";
}

export function LocationCard({
  icon: Icon,
  label,
  value,
  href,
  className,
  variant = "light",
}: LocationCardProps) {
  const baseClass = className || (variant === "dark" ? "location-info-card" : "contact-info-card");
  const cardClassName = href ? `${baseClass} ${baseClass}--link` : baseClass;
  
  const iconClass = variant === "dark" ? "location-info-card__icon" : "contact-info-card__icon";
  const bodyClass = variant === "dark" ? "location-info-card__body" : "contact-info-card__body";

  const content = (
    <>
      <div className={iconClass}>
        <Icon />
      </div>
      <div className={bodyClass}>
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
        className={cardClassName}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {content}
      </a>
    );
  }

  return <article className={cardClassName}>{content}</article>;
}

export const LocationInfoCard = LocationCard;
