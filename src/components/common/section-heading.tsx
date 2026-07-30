import { Wrench } from "lucide-react";
import type { CSSProperties } from "react";

export function SectionHeading({
  eyebrow,
  title,
  animatedText,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  animatedText?: string;
  center?: boolean;
  light?: boolean;
}) {
  let characterIndex = 0;

  return (
    <div className={`section-heading ${center ? "section-heading--center" : ""} ${light ? "section-heading--light" : ""}`}>
      <div className="eyebrow"><span /><Wrench size={16} />{eyebrow}<span /></div>
      <h2 aria-label={animatedText}>
        {animatedText ? (
          <span className="section-heading__animated" aria-hidden="true">
            {animatedText.split(" ").map((word, wordIndex, words) => (
              <span className="section-heading__word" key={`${word}-${wordIndex}`}>
                {Array.from(word).map((character) => {
                  const index = characterIndex++;
                  return (
                    <span
                      className="section-heading__char"
                      style={{ "--char-index": index } as CSSProperties}
                      key={`${character}-${index}`}
                    >
                      {character}
                    </span>
                  );
                })}
                {wordIndex < words.length - 1 ? "\u00a0" : null}
              </span>
            ))}
          </span>
        ) : title}
      </h2>
    </div>
  );
}
