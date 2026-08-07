import Image from "next/image";
import { StarRating } from "@/components/ui/star-rating";
import { ASSET_PREFIX } from "@/constants/site.constants";

export interface TestimonialCardProps {
  name: string;
  place: string;
  avatarIndex?: number;
  imageIndex?: number;
  text?: string;
}

export function TestimonialCard({
  name,
  place,
  avatarIndex,
  imageIndex,
  text = "Professional, honest and impressively fast. My car feels brand new and the whole experience was easy from start to finish.",
}: TestimonialCardProps) {
  const index = avatarIndex ?? imageIndex ?? 1;

  return (
    <article key={name}>
      <StarRating count={5} />
      <p>“{text}”</p>
      <div>
        <Image
          src={`${ASSET_PREFIX}/testimonial/testimonial-1-${index}.jpg`}
          alt={name}
          width={70}
          height={70}
        />
        <span>
          <b>{name}</b>
          <small>{place}</small>
        </span>
      </div>
    </article>
  );
}
