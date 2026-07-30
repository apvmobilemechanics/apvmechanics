import { Wrench } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${center ? "section-heading--center" : ""} ${light ? "section-heading--light" : ""}`}>
      <div className="eyebrow"><span /><Wrench size={16} />{eyebrow}<span /></div>
      <h2>{title}</h2>
    </div>
  );
}
