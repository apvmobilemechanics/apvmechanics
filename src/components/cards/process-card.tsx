import type { LucideIcon } from "lucide-react";

interface ProcessCardProps {
  num: string;
  title: string;
  desc: string;
  icon?: LucideIcon;
  isReverse?: boolean;
  revealDelay?: number;
}

export function ProcessCard({
  num,
  title,
  desc,
  icon: Icon,
  isReverse = false,
  revealDelay,
}: ProcessCardProps) {
  return (
    <article
      className={`process-step ${isReverse ? "process-step--reverse" : ""}`}
      key={num}
      data-num={num}
      data-reveal
      data-reveal-delay={revealDelay}
    >
      <strong>Step - {num}</strong>
      {Icon && (
        <i>
          <Icon />
        </i>
      )}
      <div className="process-step__copy">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </article>
  );
}
