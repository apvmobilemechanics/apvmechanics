import Image from "next/image";
import { sanityImageUrl, type SanityImageSource } from "@/lib/sanity/image";

type Props = {
  image: SanityImageSource | null | undefined;
  /** Display widths in CSS px, used for `sizes` and to size the source request. */
  sizes: string;
  width?: number;
  priority?: boolean;
  /** Fill the (relatively positioned) parent instead of using intrinsic dimensions. */
  fill?: boolean;
  className?: string;
};

/**
 * Server component. Alt text is taken from the CMS (required field in Studio).
 * Delivered through the Next.js image optimiser (cdn.sanity.io is whitelisted in next.config.ts).
 */
export function SanityImage({ image, sizes, width = 1600, priority, fill, className }: Props) {
  if (!image?.asset) return null;
  const alt = image.alt ?? "";
  const src = sanityImageUrl(image, width);

  if (fill || !image.dimensions) {
    return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={className} />;
  }
  const { width: w, height: h } = image.dimensions;
  const outW = Math.min(width, w);
  return (
    <Image
      src={sanityImageUrl(image, outW)}
      alt={alt}
      width={outW}
      height={Math.round((outW * h) / w)}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
