import type { SanityImageSource } from "@/lib/sanity/image";
import type { PortableTextBlock } from "next-sanity";

export type CategoryRef = { title: string; slug: string };

export type PostCard = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  mainImage: SanityImageSource | null;
  author: { name: string } | null;
  categories: CategoryRef[] | null;
};

export type Post = PostCard & {
  updatedAt: string;
  author: {
    name: string;
    slug: string;
    role?: string;
    bio?: string;
    sameAs?: string[];
    image?: SanityImageSource | null;
  } | null;
  tags: CategoryRef[] | null;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
    noIndex?: boolean;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: SanityImageSource | null;
  } | null;
  faq: { _key: string; question: string; answer: string }[] | null;
  body: PortableTextBlock[] | null;
  related: PostCard[] | null;
};
