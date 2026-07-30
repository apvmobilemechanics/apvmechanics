import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { ShopContent } from "@/components/inner/shop-content";

export const metadata: Metadata = { title: "Shop | Automart" };

export default async function ShopPage({ searchParams }: PageProps<"/shop">) {
  const { q } = await searchParams;
  return <main><PageBanner title="Products" /><ShopContent initialQuery={typeof q === "string" ? q : ""}/></main>;
}
