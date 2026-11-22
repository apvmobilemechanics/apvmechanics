import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { postPath } from "@/lib/blog/seo";
import type { PostCard as PostCardData } from "@/lib/blog/types";
import { SanityImage } from "./sanity-image";

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-AU", { day: "numeric", month: "short", year: "numeric", timeZone: "Australia/Hobart" }).format(new Date(iso));

/** Markup reuses the site's existing `.blog-grid` card styles. */
export function PostCard({ post, priority = false }: { post: PostCardData; priority?: boolean }) {
  const href = postPath(post.slug);
  return (
    <article>
      <div>
        <Link href={href} aria-label={post.title} tabIndex={-1}>
          <SanityImage image={post.mainImage} fill sizes="(max-width: 768px) 100vw, 390px" width={800} priority={priority} />
        </Link>
        <span>{formatDate(post.publishedAt)}</span>
      </div>
      <p>
        {(post.categories?.[0]?.title ?? "Blog").toUpperCase()}
        {post.author ? ` / BY ${post.author.name.toUpperCase()}` : ""}
      </p>
      <h3>{post.title}</h3>
      <Link href={href} aria-label={`Read more: ${post.title}`}>
        Read More <ArrowRight />
      </Link>
    </article>
  );
}
