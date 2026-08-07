import { Star } from "lucide-react";

interface StarRatingProps {
  count?: number;
  size?: number;
  rating?: number;
  className?: string;
}

export function StarRating({
  count = 5,
  size,
  rating = 5,
  className = "stars",
}: StarRatingProps) {
  return (
    <div className={className}>
      {Array.from({ length: count }, (_, i) => (
        <Star
          key={i + 1}
          size={size}
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}
