import type { Metadata } from "next";
import { sanityImageUrl } from "@/lib/sanity/image";
import type { Post } from "./types";

export const SITE_URL = "https://apvmechanics.com.au";
export const SITE_NAME = "APV Mobile Mechanics";
// Matches the Organization node already emitted by src/app/layout.tsx.
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const postPath = (slug: string) => `/blog/${slug}`;
export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

/** Fits a title with the brand suffix only when there is room (<= 60 chars). */
function withBrand(title: string) {
  const branded = `${title} | ${SITE_NAME}`;
  return branded.length <= 60 ? branded : title;
}

export function postMetadata(post: Post): Metadata {
  const seo = post.seo ?? {};
  const title = seo.metaTitle?.trim() || withBrand(post.title);
  const description = seo.metaDescription?.trim() || post.excerpt;
  const canonical = seo.canonicalUrl?.trim() || absoluteUrl(postPath(post.slug));
  const ogImageSource = seo.ogImage?.asset ? seo.ogImage : post.mainImage;
  const ogImages = ogImageSource?.asset
    ? [{ url: sanityImageUrl(ogImageSource, 1200, 630), width: 1200, height: 630, alt: seo.ogImage?.alt || post.mainImage?.alt || post.title }]
    : undefined;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots: seo.noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "article",
      url: absoluteUrl(postPath(post.slug)),
      siteName: SITE_NAME,
      title: seo.ogTitle?.trim() || title,
      description: seo.ogDescription?.trim() || description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: post.author ? [post.author.name] : undefined,
      tags: post.tags?.map((t) => t.title),
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle?.trim() || title,
      description: seo.ogDescription?.trim() || description,
      images: ogImages?.map((i) => i.url),
    },
  };
}

/**
 * One @graph per post: BlogPosting + BreadcrumbList. Publisher references the
 * Organization already defined site-wide (by @id) to avoid duplicate entities.
 * FAQPage is intentionally never emitted.
 */
export function postJsonLd(post: Post) {
  const url = absoluteUrl(postPath(post.slug));
  const image = post.mainImage?.asset ? [sanityImageUrl(post.mainImage, 1200, 630)] : undefined;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: post.title.slice(0, 110),
        description: post.seo?.metaDescription?.trim() || post.excerpt,
        image,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        inLanguage: "en-AU",
        author: post.author
          ? {
              "@type": "Person",
              name: post.author.name,
              jobTitle: post.author.role || undefined,
              sameAs: post.author.sameAs?.length ? post.author.sameAs : undefined,
            }
          : { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        articleSection: post.categories?.[0]?.title,
        keywords: post.tags?.length ? post.tags.map((t) => t.title).join(", ") : undefined,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}
