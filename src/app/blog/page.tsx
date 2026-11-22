import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { PostGrid } from "@/components/blog/post-grid";
import { getPostsPage } from "@/lib/blog/data";
import { absoluteUrl } from "@/lib/blog/seo";

export const metadata: Metadata = {
  title: { absolute: "Car Maintenance & Repair Blog | APV Mobile Mechanics" },
  description: "Practical car maintenance, repair and diagnostic advice from the mobile mechanics at APV Mobile Mechanics, Hobart.",
  alternates: { canonical: absoluteUrl("/blog") },
};

export default async function BlogPage() {
  const { posts, page, totalPages } = await getPostsPage(1);
  return (
    <main>
      <PageBanner title="Blog" />
      <PostGrid posts={posts} page={page} totalPages={totalPages} />
    </main>
  );
}
