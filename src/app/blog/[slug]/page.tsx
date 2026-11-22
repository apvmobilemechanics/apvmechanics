import type { Metadata } from "next";
import Link from "next/link";
import { draftMode } from "next/headers";
import { notFound, permanentRedirect } from "next/navigation";
import { VisualEditing } from "next-sanity/visual-editing";
import { JsonLd } from "@/components/blog/json-ld";
import { PostBody } from "@/components/blog/post-body";
import { PostCard, formatDate } from "@/components/blog/post-card";
import { SanityImage } from "@/components/blog/sanity-image";
import { postJsonLd, postMetadata, postPath } from "@/lib/blog/seo";
import type { Post } from "@/lib/blog/types";
import { isSanityConfigured, sanityFetch, sanityTags } from "@/lib/sanity/client";
import { postQuery, postSlugsQuery, redirectQuery } from "@/lib/sanity/queries";

type Props = { params: Promise<{ slug: string }> };

const loadPost = (slug: string, draft: boolean) =>
  sanityFetch<Post | null>({ query: postQuery, params: { slug }, tags: [sanityTags.post], draft });

export async function generateStaticParams() {
  if (!isSanityConfigured) return [];
  try {
    const slugs = await sanityFetch<string[]>({ query: postSlugsQuery, tags: [sanityTags.post] });
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    // A CMS outage must not break `next build`; unbuilt posts render on first request instead.
    console.error("[blog] generateStaticParams failed:", error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isSanityConfigured) return {};
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const post = await loadPost(slug, isEnabled);
  // 404/redirect responses are produced by the page; keep them out of the index.
  if (!post) return { robots: { index: false, follow: false } };
  return postMetadata(post);
}

export default async function PostPage({ params }: Props) {
  if (!isSanityConfigured) notFound();
  const { slug } = await params;
  const { isEnabled: draft } = await draftMode();
  const post = await loadPost(slug, draft);

  if (!post) {
    // A renamed post keeps its old URL alive through a "Blog redirect" document.
    const redirect = await sanityFetch<{ destination: string } | null>({
      query: redirectQuery,
      params: { source: postPath(slug) },
      tags: [sanityTags.redirect],
    });
    if (redirect?.destination && redirect.destination !== postPath(slug)) permanentRedirect(redirect.destination);
    notFound();
  }

  return (
    <main>
      <JsonLd data={postJsonLd(post)} />
      {draft && (
        <div className="draft-banner" role="status">
          Draft preview —{" "}
          {/* Plain anchor on purpose: this is an API route that must not be prefetched. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/api/draft-mode/disable">exit preview</a>
        </div>
      )}
      <header className="post-hero">
        <div className="container post-hero__inner">
          <nav aria-label="Breadcrumb" className="post-breadcrumb">
            <Link href="/">Home</Link>
            <span>{"//"}</span>
            <Link href="/blog">Blog</Link>
            <span>{"//"}</span>
            <b aria-current="page">{post.title}</b>
          </nav>
          <h1>{post.title}</h1>
          <p className="post-meta">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {post.author && <> · By {post.author.name}</>}
            {post.categories?.map((c) => (
              <span key={c.slug}>
                {" · "}
                <Link href={`/blog/category/${c.slug}`}>{c.title}</Link>
              </span>
            ))}
          </p>
        </div>
      </header>

      <section className="section blog-detail">
        <article className="container blog-detail__article post-article">
          {post.mainImage?.asset && (
            <figure className="post-featured">
              <SanityImage image={post.mainImage} sizes="(max-width: 1100px) 100vw, 1100px" width={1600} priority />
              {post.mainImage.caption && <figcaption>{post.mainImage.caption}</figcaption>}
            </figure>
          )}

          <PostBody value={post.body} />

          {post.faq && post.faq.length > 0 && (
            <section className="post-faq" aria-labelledby="faq-heading">
              <h2 id="faq-heading">Frequently asked questions</h2>
              {post.faq.map((item) => (
                <details key={item._key}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </section>
          )}

          {post.tags && post.tags.length > 0 && (
            <ul className="post-tags" aria-label="Tags">
              {post.tags.map((t) => (
                <li key={t.slug}>{t.title}</li>
              ))}
            </ul>
          )}

          {post.author && (
            <aside className="blog-author" aria-label="About the author">
              {post.author.image?.asset && (
                <SanityImage image={post.author.image} sizes="84px" width={168} className="post-author-img" />
              )}
              <span>
                <small>WRITTEN BY</small>
                <b>{post.author.name}</b>
                {post.author.role && <small>{post.author.role}</small>}
                {post.author.bio && <p>{post.author.bio}</p>}
              </span>
            </aside>
          )}
        </article>

        {post.related && post.related.length > 0 && (
          <div className="container post-related">
            <h2>Related articles</h2>
            <div className="blog-grid">
              {post.related.map((p) => (
                <PostCard key={p._id} post={p} />
              ))}
            </div>
          </div>
        )}
      </section>

      {draft && <VisualEditing />}
    </main>
  );
}
