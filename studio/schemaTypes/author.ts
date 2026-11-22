import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "name", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "role", title: "Job title", type: "string", description: "e.g. Licensed Mobile Mechanic" }),
    defineField({ name: "bio", type: "text", rows: 4 }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: false },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "sameAs",
      title: "Profile links",
      type: "array",
      of: [{ type: "url" }],
      description: "LinkedIn, Facebook etc. Used as author identity in structured data.",
    }),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "image" } },
});
