# Blog CMS (Sanity) — architecture and runbook

**Sanity owns content. Next.js owns presentation and technical SEO. Supabase owns application data (untouched).**

## Architecture

```
Editors ──> Sanity Studio (hosted, sanity.studio) ──> Sanity Content Lake
                                                          │ webhook (HMAC-signed)
                                                          ▼
Visitors ──> Next.js (ISR, server components) <── /api/revalidate  ──> revalidateTag("sanity:post")
                │  GROQ via next-sanity client (cached, tagged, 15 min safety revalidate)
                └─ Supabase: unchanged (contact, newsletter, admin, settings)
```

- Studio is a **separate deployment** (`pnpm studio:deploy`). Editors never touch this repo.
- Public routes: `/blog`, `/blog/page/N` (N≥2), `/blog/[slug]`, `/blog/category/[slug]`.
- `/blog/page/1` → 308 to `/blog` (no duplicate content).
- Until `NEXT_PUBLIC_SANITY_PROJECT_ID` is set, all blog routes 404 exactly as before and `/blog` is left out of the sitemap.

## Files

Created: `sanity.config.ts`, `sanity.cli.ts`, `studio/schemaTypes/*`, `src/lib/sanity/{client,image,queries}.ts`,
`src/lib/blog/{data,seo,types}.ts`, `src/components/blog/*`, `src/app/blog/{layout.tsx,blog.css,[slug],page/[page],category/[slug]}`,
`src/app/api/{revalidate,draft-mode/enable,draft-mode/disable}/route.ts`, `.env.example`, this file.

Modified: `src/app/blog/page.tsx` (was `notFound()`), `src/app/sitemap.ts` (blog URLs now from Sanity), `next.config.ts`
(`cdn.sanity.io` image host), `package.json` (+deps, +`studio:*` scripts), `.gitignore` (allow `.env.example`).

Not touched: Supabase code/schema, root layout, existing pages, `src/features/blog/data/blog.data.ts` (dummy posts are simply no longer in the sitemap).

## Schema

| Type | Key fields |
|---|---|
| `post` | title (H1), slug (`/blog/<slug>`, reserved: `page`, `category`), excerpt, featured image (+required alt, caption), body (H2–H4, lists, quote, links, internal post links, images with required alt), FAQ, author, categories (≥1), tags, publishedAt (schedulable), updatedAt (optional), `seo` |
| `seo` | metaTitle (≤60 recommended), metaDescription (≤160), canonicalUrl override, noIndex, ogTitle, ogDescription, ogImage |
| `author` | name, slug, role, bio, image, sameAs links |
| `category` / `tag` | title, slug (+description for categories) |
| `redirect` | source `/blog/old-slug`, destination `/blog/new-slug` or `https://…` |

Rules baked in: no H1 in the body editor; alt text required; slug format validated; FAQ is displayed but **FAQPage JSON-LD is deliberately never emitted** (Google restricts FAQ rich results to well-known government/health sites).

## Environment variables

See `.env.example`. Server-only: `SANITY_API_READ_TOKEN` (Viewer role), `SANITY_REVALIDATE_SECRET`. Public: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`. Studio: `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`, `SANITY_STUDIO_PREVIEW_ORIGIN`. No write token exists anywhere in the app. Use separate datasets (`development`, `production`) and set the matching values per Vercel environment.

## One-time setup (developer)

1. Copy `.env.example` → `.env.local`; fill project id/dataset (sanity.io/manage → project).
2. Sanity **manage → API → CORS origins**: add `http://localhost:3333` and the deployed Studio URL (credentials allowed); add the site origin too.
3. **API → Tokens**: create a *Viewer* token → `SANITY_API_READ_TOKEN` (Vercel env, server only).
4. `pnpm studio:dev` (local, :3333) and `pnpm studio:deploy` (pick a hostname, e.g. `apv-blog`).
5. **API → Webhooks → Create**: URL `https://apvmechanics.com.au/api/revalidate`, dataset `production`, trigger Create+Update+Delete, filter `_type in ["post","author","category","tag","redirect"]`, projection `{_type}`, HTTP POST, **secret** = `SANITY_REVALIDATE_SECRET`.
6. **Members**: invite SEO staff as **Editor** (can publish), writers as **Contributor**, developers as **Developer/Administrator**. (Custom roles require an Enterprise plan.)
7. Create first Author + Category, then publish a post. Submit `https://apvmechanics.com.au/sitemap.xml` in Search Console once.

## SEO publishing workflow (no developer needed)

1. Studio → *Blog post* → New. Fill title, slug, excerpt, featured image + alt, body, author, category.
2. *SEO & Social* tab: SEO title, meta description, optional canonical/OG overrides.
3. *Preview*: open the **Presentation** tool to see the draft on the real site (draft mode).
4. **Publish.** The webhook refreshes the site within seconds. To schedule, set *Publish date* in the future and publish — the post goes live at that time (≤15 min granularity).
5. Never edit a live slug without first creating a *Blog redirect* (old → new).

## Developer workflow

Templates/design: `src/app/blog/**`, `src/components/blog/**`, `blog.css`. Metadata + JSON-LD: `src/lib/blog/seo.ts`. Queries: `src/lib/sanity/queries.ts`. Schema changes: edit `studio/schemaTypes`, `pnpm studio:deploy`. Content never carries code.

## Caching, revalidation, outages

- All reads go through `sanityFetch`: tagged `sanity:post` / `sanity:redirect`, `revalidate: 900`.
- Webhook → `revalidateTag(tag, {expire: 0})`. Author/category/tag edits also refresh posts.
- Outage: errors are **not swallowed**, so a failed background regeneration keeps serving the last good static page. Never-yet-built pages return 500 until Sanity is back. `next build` tolerates an outage (static params/sitemap degrade).
- Sitemap: only published, dated-in-the-past, non-`noindex` posts and non-empty categories.

## Verification performed (against a mocked Sanity API; real project not yet connected)

`tsc --noEmit` clean; `next build` OK both with and without Sanity env (blog routes ISR, 15 min); eslint clean on new code; rendered HTML checked: unique title/description, canonical, OG/Twitter, single H1, BlogPosting + BreadcrumbList (no FAQPage, no duplicate Organization), alt text, internal links, sitemap URLs, 404 for unknown slug/page, `/blog/page/1` 308, CMS redirect 308, webhook 401 (no/invalid signature) and 200 (valid), unconfigured mode = previous behaviour. **Still to verify with the live project:** real content render, webhook delivery from Sanity, Presentation preview, Lighthouse on a real post.
