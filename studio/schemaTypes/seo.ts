import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO & Social",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "SEO title",
      type: "string",
      description: "Shown in Google results. Aim for 50–60 characters. Leave empty to use the post title.",
      validation: (r) => r.max(65).warning("Titles over ~60 characters may be truncated in search results."),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 3,
      description: "Aim for 120–160 characters. Leave empty to use the excerpt.",
      validation: (r) => r.max(170).warning("Descriptions over ~160 characters may be truncated."),
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL override",
      type: "url",
      description: "Only set this if the content was originally published elsewhere. Leave empty to use this post's own URL.",
      validation: (r) => r.uri({ scheme: ["https"] }),
    }),
    defineField({
      name: "noIndex",
      title: "Hide from search engines (noindex)",
      type: "boolean",
      initialValue: false,
      description: "The post stays reachable by URL but is removed from the blog list and the sitemap.",
    }),
    defineField({ name: "ogTitle", title: "Social share title", type: "string", description: "Open Graph / X title. Defaults to the SEO title." }),
    defineField({ name: "ogDescription", title: "Social share description", type: "text", rows: 2, description: "Defaults to the meta description." }),
    defineField({
      name: "ogImage",
      title: "Social share image",
      type: "image",
      description: "Recommended 1200×630. Defaults to the featured image.",
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
  ],
});
