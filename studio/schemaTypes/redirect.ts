import { defineField, defineType } from "sanity";

/**
 * Blog-only redirects. If a post URL ever has to change, add a redirect here
 * (source = old path, destination = new path). The blog route issues a 308
 * permanent redirect when the old URL is requested.
 */
export const redirect = defineType({
  name: "redirect",
  title: "Blog redirect",
  type: "document",
  fields: [
    defineField({
      name: "source",
      title: "Old path",
      type: "string",
      description: "Must start with /blog/ — e.g. /blog/old-post-slug (no domain, no trailing slash).",
      validation: (r) =>
        r.required().custom((v) => (typeof v === "string" && /^\/blog\/[a-z0-9-]+$/.test(v) ? true : "Use a lowercase path like /blog/old-post-slug")),
    }),
    defineField({
      name: "destination",
      title: "New path or URL",
      type: "string",
      description: "e.g. /blog/new-post-slug",
      validation: (r) =>
        r.required().custom((v, ctx) => {
          if (typeof v !== "string" || !(v.startsWith("/") || v.startsWith("https://"))) return "Start with / or https://";
          if (v.startsWith("//")) return "Use a single leading /";
          if (v === (ctx.document as { source?: string } | undefined)?.source) return "Destination cannot equal the old path";
          return true;
        }),
    }),
  ],
  preview: { select: { title: "source", subtitle: "destination" } },
});
