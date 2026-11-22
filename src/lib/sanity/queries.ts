import { groq } from "next-sanity";

/** A post is public when it has a slug, a publish date in the past and is not noindex. */
const PUBLIC = `_type == "post" && defined(slug.current) && publishedAt <= now()`;
const LISTED = `${PUBLIC} && seo.noIndex != true`;

const IMAGE = `{ alt, caption, asset, "dimensions": asset->metadata.dimensions }`;

const CARD = `{
  _id, title, "slug": slug.current, excerpt, publishedAt,
  mainImage${IMAGE},
  author->{ name },
  "categories": categories[]->{ title, "slug": slug.current }
}`;

export const postsPageQuery = groq`{
  "posts": *[${LISTED}] | order(publishedAt desc) [$start...$end] ${CARD},
  "total": count(*[${LISTED}])
}`;

export const categoryPostsQuery = groq`{
  "category": *[_type == "category" && slug.current == $slug][0]{ title, "slug": slug.current, description },
  "posts": *[${LISTED} && $slug in categories[]->slug.current] | order(publishedAt desc) [0...50] ${CARD}
}`;

export const categorySlugsQuery = groq`array::unique(*[${LISTED}].categories[]->slug.current)`;

export const postSlugsQuery = groq`*[${LISTED}].slug.current`;

export const postQuery = groq`*[${PUBLIC} && slug.current == $slug][0]{
  _id, title, "slug": slug.current, excerpt, publishedAt,
  "updatedAt": coalesce(updatedAt, _updatedAt),
  mainImage${IMAGE},
  author->{ name, "slug": slug.current, role, bio, sameAs, image${IMAGE} },
  "categories": categories[]->{ title, "slug": slug.current },
  "tags": tags[]->{ title, "slug": slug.current },
  seo{ metaTitle, metaDescription, canonicalUrl, noIndex, ogTitle, ogDescription, ogImage{ alt, asset } },
  faq[]{ _key, question, answer },
  body[]{
    ...,
    _type == "image" => ${IMAGE},
    markDefs[]{ ..., _type == "internalLink" => { "slug": reference->slug.current } }
  },
  "related": *[${LISTED} && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0]
    | order(publishedAt desc) [0...3] ${CARD}
}`;

export const redirectQuery = groq`*[_type == "redirect" && source == $source][0]{ destination }`;

export const sitemapPostsQuery = groq`*[${LISTED}] | order(publishedAt desc){
  "slug": slug.current,
  "lastModified": coalesce(updatedAt, _updatedAt)
}`;
