import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/common/page-banner";
import { PostGrid } from "@/components/blog/post-grid";
import { absoluteUrl } from "@/lib/blog/seo";
import type { PostCard } from "@/lib/blog/types";
import { isSanityConfigured, sanityFetch, sanityTags } from "@/lib/sanity/client";
import { categoryPostsQuery, categorySlugsQuery } from "@/lib/sanity/queries";

type Props = { params: Promise<{ slug: string }> };
type CategoryData = { category: { title: string; slug: string; description?: string } | null; posts: PostCard[] };

const load = (slug: string) =>
  sanityFetch<CategoryData>({ query: categoryPostsQuery, params: { slug }, tags: [sanityTags.post] });

export async function generateStaticParams() {
  if (!isSanityConfigured) return [];
  try {
    const slugs = await sanityFetch<string[]>({ query: categorySlugsQuery, tags: [sanityTags.post] });
    return slugs.map((slug) => ({ slug }));
  } catch {
    return []; // build must not fail on a CMS outage; pages render on demand
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isSanityConfigured) return {};
  const { category, posts } = await load((await params).slug);
  if (!category || posts.length === 0) return {};
  return {
    title: { absolute: `${category.title} Articles | APV Mobile Mechanics` },
    description: category.description || `${category.title} articles from APV Mobile Mechanics, Hobart.`,
    alternates: { canonical: absoluteUrl(`/blog/category/${category.slug}`) },
  };
}

export default async function CategoryPage({ params }: Props) {
  if (!isSanityConfigured) notFound();
  const { category, posts } = await load((await params).slug);
  // An empty category is a thin page: 404 rather than index it.
  if (!category || posts.length === 0) notFound();
  return (
    <main>
      <PageBanner title={category.title} />
      <PostGrid posts={posts} />
    </main>
  );
}
