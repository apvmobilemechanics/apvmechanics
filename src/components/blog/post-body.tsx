import Link from "next/link";
import { PortableText, type PortableTextBlock, type PortableTextComponents } from "next-sanity";
import { postPath } from "@/lib/blog/seo";
import { SanityImage } from "./sanity-image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="post-figure">
        <SanityImage image={value} sizes="(max-width: 900px) 100vw, 800px" width={1200} />
        {value.caption && <figcaption>{value.caption}</figcaption>}
      </figure>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href: string = value?.href ?? "#";
      const external = /^https?:\/\//.test(href);
      const rel = [value?.nofollow && "nofollow", value?.newTab && "noopener noreferrer"].filter(Boolean).join(" ") || undefined;
      return (
        <a href={href} target={value?.newTab ? "_blank" : undefined} rel={rel} data-external={external || undefined}>
          {children}
        </a>
      );
    },
    internalLink: ({ value, children }) =>
      value?.slug ? <Link href={postPath(value.slug)}>{children}</Link> : <>{children}</>,
  },
};

export function PostBody({ value }: { value: PortableTextBlock[] | null }) {
  if (!value?.length) return null;
  return (
    <div className="post-body">
      <PortableText value={value} components={components} />
    </div>
  );
}
