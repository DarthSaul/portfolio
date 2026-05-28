# Blog

The blog is git-as-CMS: `.mdx` files in `src/posts/` are the source of truth. No
database, no admin UI. Commit a file → push → Netlify deploys → it's live.

## Authoring a post

1. Create `src/posts/<slug>.mdx`. The filename slug is used when there's no
   `slug` field in the frontmatter.
2. Add the frontmatter (see schema below) and the body.
3. (Optional) drop images under `src/posts/images/` and `import` them at the
   top of the file — Vite handles hashing and bundling.
4. `npm start` to preview, commit, and push.

A new file is picked up automatically by `import.meta.glob` in
`src/utilities/posts.js`. There is no manual registration step.

## Frontmatter schema

```yaml
---
title: Hello, world             # required — appears in <title>, OG tags, RSS
slug: hello-world               # optional — defaults to the filename
date: 2026-05-25                # required — ISO YYYY-MM-DD, drives sort + RSS pubDate
description: One-line summary.  # required — index card, meta description, OG description
tags:                           # optional — drives /blog/tag/:tag and RSS <category>
  - meta
  - mdx
draft: false                    # optional — hides from index, tag pages, RSS, sitemap
replies: true                   # optional — set false to hide "Reply via email" on this post
canonical: https://...          # optional — overrides the auto-generated canonical URL
---
```

### `draft`

Drafts are excluded from `/blog`, `/blog/tag/:tag`, the RSS feed, and the
sitemap. The route at `/blog/<slug>` still resolves, so you can preview a draft
by visiting its URL directly — useful for sharing a private review link.

### `canonical`

Set this when cross-posting to Medium / dev.to / etc. and you want search
engines to credit the canonical home. Defaults to the post's own URL on
`saulgraves.com`.

### `replies`

Each post ends with a small "Reply via email" link. Set `replies: false` for
posts where that prompt feels off (link roundups, personal notes, etc.).

## File layout

```text
src/
  posts/
    hello-world.mdx
    images/
      hello-world.svg
  components/
    blog/         ← Seo, ReplyByEmail, PostMeta, PrevNext
    mdx/          ← MDXComponents map, Callout, Aside
  pages/
    BlogPage.jsx        ← /blog index
    BlogPostPage.jsx    ← /blog/:slug
    TagPage.jsx         ← /blog/tag/:tag
  utilities/
    posts.js      ← discovery, sort, reading time, prev/next
  css/
    Blog.css      ← page chrome
    Mdx.css       ← MDX body, callouts, Shiki
```

## Custom MDX components

These are available inside any post without an import:

| Tag | Notes |
| --- | --- |
| `<Callout type="info\|warn\|tip" title="...">` | Highlighted aside. `type` and `title` are optional. |
| `<Aside>` | Smaller, quieter aside — for parentheticals. |

Add more by editing `src/components/mdx/MDXComponents.jsx`. The map also
overrides `h1`/`h2`/`h3`, `a`, `img`, `pre`, `code`, and `blockquote` —
override more HTML tags there as needed.

`<a>` automatically routes through React Router for internal links and opens
external links in a new tab with `rel="noopener noreferrer"`.

## Syntax highlighting

Fenced code blocks are highlighted by Shiki **at build time** via
`@shikijs/rehype` — no client-side highlighter ships in the bundle. Themes
are `github-light` / `github-dark`, switched by `[data-theme='light']` on
`<html>`. Configured in `vite.config.js`.

## Reading time, tags, prev/next

- Reading time is estimated in `src/utilities/posts.js` (220 wpm, code blocks
  stripped) and shown on the index and on each post.
- Tag pages live at `/blog/tag/:tag` — see `src/pages/TagPage.jsx`.
- Prev/next is computed by sorting all non-draft posts reverse-chronologically.

## Reply via email

Recipient is configured by the `VITE_REPLY_EMAIL` env var. Without it, the
fallback `graves.saul@gmail.com` is used. Override it in Netlify under
**Site settings → Environment variables**, or in a local `.env.local` for
development:

```env
VITE_REPLY_EMAIL=you@example.com
```

The link is `mailto:` with the subject prefilled as `Re: <post title>` and the
body prefilled with the post URL.

## Prerendering, SEO, feeds

Every route is statically prerendered after the Vite build.
`scripts/prerender.mjs` imports the SSR bundle (built via `vite build --ssr
src/entry-server.jsx`), renders each route to a string, then runs
`extractHeadTags` on the rendered HTML — a small helper that lifts any
`<title>`, `<meta>`, and `<link>` tags emitted inside the React tree (via
`src/components/blog/Seo.jsx`) into `<head>`. The final HTML is written to
`dist/<route>/index.html`. Social scrapers (LinkedIn, Twitter, Facebook,
Slack) see real `<title>` / `<meta>` / OG tags without executing JS.

- **RSS:** `dist/rss.xml` — generated from `src/posts/` by
  `scripts/generate-feed.mjs`.
- **Sitemap:** `dist/sitemap.xml` — same script. Includes the static pages,
  every non-draft post, and every tag page.

The full build command is:

```bash
vite build \
  && vite build --ssr src/entry-server.jsx --outDir dist/server \
  && node scripts/prerender.mjs \
  && node scripts/generate-feed.mjs
```

## Publish flow

1. `git checkout -b post/<slug>`
2. Write the post.
3. `git commit && git push`.
4. Open a PR (or push direct to the deploy branch if that's your habit).
5. Merge → Netlify builds → live on `saulgraves.com`.

## Local development

```bash
npm start                       # Vite dev server at localhost:5173
npm run build                   # Production build incl. prerender + feeds
npm run preview                 # Serve dist/ locally to test the built output
```
