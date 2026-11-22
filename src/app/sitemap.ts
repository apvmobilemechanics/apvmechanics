import type { MetadataRoute } from "next";
import { services } from "@/lib/site-data";
import { isSanityConfigured, sanityFetch, sanityTags } from "@/lib/sanity/client";
import { categorySlugsQuery, sitemapPostsQuery } from "@/lib/sanity/queries";

const BASE_URL = "https://apvmechanics.com.au";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static core pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/shop`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic service detail pages (served via /[slug] route)
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Blog URLs come from Sanity: only published, past-dated, indexable posts.
  const blogRoutes = await getBlogRoutes();

  // /blog is a 404 until Sanity is configured, so it must not be advertised before then.
  const core = isSanityConfigured ? staticRoutes : staticRoutes.filter((r) => r.url !== `${BASE_URL}/blog`);

  return [...core, ...serviceRoutes, ...blogRoutes];
}

async function getBlogRoutes(): Promise<MetadataRoute.Sitemap> {
  if (!isSanityConfigured) return [];
  try {
    const [posts, categories] = await Promise.all([
      sanityFetch<{ slug: string; lastModified: string }[]>({ query: sitemapPostsQuery, tags: [sanityTags.post] }),
      sanityFetch<string[]>({ query: categorySlugsQuery, tags: [sanityTags.post] }),
    ]);
    return [
      ...posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.lastModified),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
      ...categories.map((slug) => ({
        url: `${BASE_URL}/blog/category/${slug}`,
        changeFrequency: "weekly" as const,
        priority: 0.5,
      })),
    ];
  } catch (error) {
    // During `next build` a CMS outage degrades to the static sitemap. At runtime we
    // rethrow so Next keeps serving the last good sitemap instead of caching a partial one.
    if (process.env.NEXT_PHASE === "phase-production-build") {
      console.error("[sitemap] Sanity unavailable at build time:", error);
      return [];
    }
    throw error;
  }
}
