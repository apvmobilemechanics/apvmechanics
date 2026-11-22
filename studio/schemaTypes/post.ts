import { defineArrayMember, defineField, defineType } from "sanity";

// Slugs that would collide with fixed blog routes (/blog/page/2, /blog/category/x).
const RESERVED_SLUGS = ["page", "category"];

export const post = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO & Social" },
    { name: "settings", title: "Settings" },
  ],
  fields: [
    defineField({ name: "title", title: "Title (H1)", type: "string", group: "content", validation: (r) => r.required().max(110) }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      group: "content",
      description: "Becomes /blog/<slug>. DO NOT change after publishing — if you must, add a Blog redirect first.",
      options: { source: "title", maxLength: 96 },
      validation: (r) =>
        r.required().custom((v) => {
          const s = v?.current;
          if (!s) return true;
          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s)) return "Lowercase letters, numbers and hyphens only";
          if (RESERVED_SLUGS.includes(s)) return `"${s}" is reserved`;
          return true;
        }),
    }),
    defineField({ name: "excerpt", type: "text", rows: 3, group: "content", description: "Short summary used on the blog list and as the default meta description.", validation: (r) => r.required().max(300) }),
    defineField({
      name: "mainImage",
      title: "Featured image",
      type: "image",
      group: "content",
      options: { hotspot: false },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string", description: "Describe the image. Required for accessibility and image SEO.", validation: (r) => r.required() }),
        defineField({ name: "caption", title: "Caption", type: "string" }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({ name: "body", type: "blockContent", group: "content" }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      group: "content",
      description:
        "Shown on the page as an on-page FAQ. FAQ structured data is intentionally NOT generated (Google limits FAQ rich results to well-known government and health sites).",
      of: [
        defineArrayMember({
          type: "object",
          name: "faqItem",
          fields: [
            defineField({ name: "question", type: "string", validation: (r) => r.required() }),
            defineField({ name: "answer", type: "text", rows: 4, validation: (r) => r.required() }),
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),
    defineField({ name: "author", type: "reference", to: [{ type: "author" }], group: "settings", validation: (r) => r.required() }),
    defineField({ name: "categories", type: "array", of: [{ type: "reference", to: [{ type: "category" }] }], group: "settings", validation: (r) => r.required().min(1) }),
    defineField({ name: "tags", type: "array", of: [{ type: "reference", to: [{ type: "tag" }] }], group: "settings" }),
    defineField({
      name: "publishedAt",
      title: "Publish date",
      type: "datetime",
      group: "settings",
      initialValue: () => new Date().toISOString(),
      description:
        "Set a future date/time to schedule: once the post is Published in Studio it appears on the website at that time (within ~15 minutes). Also used as the article's publication date.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Last substantive update",
      type: "datetime",
      group: "settings",
      description: "Optional. Only set when content meaningfully changed; otherwise the last edit time is used as the modified date.",
    }),
    defineField({ name: "seo", type: "seo", group: "seo" }),
  ],
  orderings: [{ title: "Publish date, newest", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "mainImage" },
    prepare: ({ title, subtitle, media }) => ({ title, subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : "No date", media }),
  },
});
