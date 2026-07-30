import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { BlogGrid } from "@/components/inner/blog-grid";

export const metadata: Metadata = { title: "Blog | Automart" };

export default function BlogPage() {
  return <main><PageBanner title="Blog" /><BlogGrid/></main>;
}
