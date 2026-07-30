import type { MetadataRoute } from "next";
import { automartSlugs } from "@/lib/site-data";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/shop", "/blog", "/contact", ...automartSlugs.filter((slug) => slug !== "404").map((slug) => `/${slug}`)];
  return routes.map((route, index) => ({
    url: `https://apvmechanics.com.au${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
