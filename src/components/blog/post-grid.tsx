import Link from "next/link";
import type { PostCard as PostCardData } from "@/lib/blog/types";
import { PostCard } from "./post-card";

type Props = {
  posts: PostCardData[];
  page?: number;
  totalPages?: number;
  emptyMessage?: string;
};

const pageHref = (n: number) => (n === 1 ? "/blog" : `/blog/page/${n}`);

/** Crawlable server-rendered pagination: plain links, no client JS. */
export function PostGrid({ posts, page = 1, totalPages = 1, emptyMessage = "New articles are on the way. Check back soon." }: Props) {
  return (
    <section className="section blog blog-page-content">
      <div className="container">
        {posts.length === 0 ? (
          <p className="blog-empty">{emptyMessage}</p>
        ) : (
          <div className="blog-grid blog-grid--six">
            {posts.map((post, i) => (
              <PostCard key={post._id} post={post} priority={i === 0 && page === 1} />
            ))}
          </div>
        )}
        {totalPages > 1 && (
          <nav className="pagination" aria-label="Blog pages">
            {page > 1 && (
              <Link href={pageHref(page - 1)} rel="prev" aria-label="Previous page">
                ‹
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <Link key={n} href={pageHref(n)} className={n === page ? "active" : undefined} aria-current={n === page ? "page" : undefined}>
                {n}
              </Link>
            ))}
            {page < totalPages && (
              <Link href={pageHref(page + 1)} rel="next" aria-label="Next page">
                ›
              </Link>
            )}
          </nav>
        )}
      </div>
    </section>
  );
}
