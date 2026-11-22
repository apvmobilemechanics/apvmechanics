import { createClient, type QueryParams } from "next-sanity";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01",
};

/** False until the project id is set; the blog then behaves exactly as before (404). */
export const isSanityConfigured = Boolean(sanityConfig.projectId);

/** Seconds. Also the granularity of scheduled publishing (publishedAt <= now()). */
export const REVALIDATE_SECONDS = 900;

/** Cache tags. The webhook route invalidates these when content changes. */
export const sanityTags = {
  post: "sanity:post",
  redirect: "sanity:redirect",
} as const;

const publishedClient = isSanityConfigured
  ? createClient({ ...sanityConfig, useCdn: false, perspective: "published" })
  : null;

type FetchOptions = {
  query: string;
  params?: QueryParams;
  tags: string[];
  /** Draft mode (editor preview): bypass the cache and read unpublished drafts. */
  draft?: boolean;
};

/**
 * Single entry point for Sanity reads.
 * - Errors are deliberately NOT swallowed: if a background ISR regeneration fails
 *   during a Sanity outage, Next keeps serving the last good page instead of
 *   caching an empty/error page.
 */
export async function sanityFetch<T>({ query, params = {}, tags, draft = false }: FetchOptions): Promise<T> {
  if (!publishedClient) throw new Error("Sanity is not configured (NEXT_PUBLIC_SANITY_PROJECT_ID missing).");

  if (draft) {
    const token = process.env.SANITY_API_READ_TOKEN;
    if (!token) throw new Error("SANITY_API_READ_TOKEN is required for draft preview.");
    return publishedClient
      .withConfig({ token, perspective: "drafts", useCdn: false })
      .fetch<T>(query, params, { cache: "no-store" });
  }

  return publishedClient.fetch<T>(query, params, { next: { revalidate: REVALIDATE_SECONDS, tags } });
}
