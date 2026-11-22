import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityConfig } from "./client";

const builder = createImageUrlBuilder({ projectId: sanityConfig.projectId, dataset: sanityConfig.dataset });

export type SanityImageSource = {
  asset?: { _ref?: string; _id?: string } | null;
  alt?: string | null;
  caption?: string | null;
  dimensions?: { width: number; height: number } | null;
};

/** Optimised Sanity CDN URL (auto format) at the given width, optional fixed height crop. */
export function sanityImageUrl(source: SanityImageSource, width: number, height?: number) {
  let img = builder.image(source as never).width(width).auto("format").quality(75);
  if (height) img = img.height(height).fit("crop");
  return img.url();
}
