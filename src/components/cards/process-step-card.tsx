import { LucideIcon } from "lucide-react";

export interface ProcessStepCardProps {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  index: number;
  reverse?: boolean;
}

export function ProcessStepCard({
  number,
  title,
  description,
  icon: Icon,
  index,
  reverse = false,
}: ProcessStepCardProps) {
  const isReverse = reverse || index % 2 === 1;

  return (
    <article
      className={`process-step ${isReverse ? "process-step--reverse" : ""}`}
      data-num={number}
      data-reveal
      data-reveal-delay={index * 130}
    >
      <strong>Step - {number}</strong>
      {Icon && (
        <i>
          <Icon />
        </i>
      )}
      <div className="process-step__copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
