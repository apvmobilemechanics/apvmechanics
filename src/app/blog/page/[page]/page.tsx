import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { PageBanner } from "@/components/common/page-banner";
import { PostGrid } from "@/components/blog/post-grid";
import { getPostsPage } from "@/lib/blog/data";
import { absoluteUrl } from "@/lib/blog/seo";

type Props = { params: Promise<{ page: string }> };

// Empty list enables ISR: pages are generated on first request, then cached and revalidated.
export function generateStaticParams() {
  return [];
}

function parsePage(raw: string) {
  const n = Number(raw);
  return /^\d+$/.test(raw) && Number.isSafeInteger(n) && n >= 1 ? n : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const n = parsePage(page);
  if (!n || n === 1) return {};
  return {
    title: { absolute: `Car Maintenance & Repair Blog – Page ${n} | APV Mobile Mechanics` },
    description: `Page ${n} of car maintenance, repair and diagnostic advice from APV Mobile Mechanics, Hobart.`,
    alternates: { canonical: absoluteUrl(`/blog/page/${n}`) },
  };
}

export default async function BlogPaginatedPage({ params }: Props) {
  const n = parsePage((await params).page);
  if (!n) notFound();
  // /blog is the canonical first page; avoid duplicate content at /blog/page/1.
  if (n === 1) permanentRedirect("/blog");
  const { posts, page, totalPages } = await getPostsPage(n);
  return (
    <main>
      <PageBanner title="Blog" />
      <PostGrid posts={posts} page={page} totalPages={totalPages} />
    </main>
  );
}
