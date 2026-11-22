import { notFound } from "next/navigation";
import { postsPageQuery } from "@/lib/sanity/queries";
import { isSanityConfigured, sanityFetch, sanityTags } from "@/lib/sanity/client";
import type { PostCard } from "./types";

export const PAGE_SIZE = 9;

export type PostsPage = { posts: PostCard[]; page: number; totalPages: number };

/** Loads one page of the blog index. 404s if the blog is not configured or the page is out of range. */
export async function getPostsPage(page: number): Promise<PostsPage> {
  if (!isSanityConfigured) notFound();
  const start = (page - 1) * PAGE_SIZE;
  const { posts, total } = await sanityFetch<{ posts: PostCard[]; total: number }>({
    query: postsPageQuery,
    params: { start, end: start + PAGE_SIZE },
    tags: [sanityTags.post],
  });
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  // Page 1 always renders (empty state); later pages beyond the range are 404s.
  if (page > totalPages) notFound();
  return { posts, page, totalPages };
}
