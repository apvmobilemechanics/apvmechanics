import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Rich text for post bodies. H1 is intentionally NOT offered: the post title
 * is the page's only H1, so editors can only create H2–H4.
 */
export const blockContent = defineType({
  name: "blockContent",
  title: "Body",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Paragraph", value: "normal" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullets", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            title: "External link",
            type: "object",
            fields: [
              defineField({ name: "href", title: "URL", type: "url", validation: (r) => r.required().uri({ scheme: ["http", "https", "mailto", "tel"] }) }),
              defineField({ name: "newTab", title: "Open in new tab", type: "boolean", initialValue: false }),
              defineField({ name: "nofollow", title: "Add rel=nofollow", type: "boolean", initialValue: false }),
            ],
          },
          {
            name: "internalLink",
            title: "Link to another post",
            type: "object",
            fields: [
              defineField({ name: "reference", title: "Post", type: "reference", to: [{ type: "post" }], validation: (r) => r.required() }),
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: false },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string", description: "Describe the image for people who cannot see it.", validation: (r) => r.required() }),
        defineField({ name: "caption", title: "Caption", type: "string" }),
      ],
    }),
  ],
});
