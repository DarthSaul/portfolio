// Writes dist/rss.xml and dist/sitemap.xml from src/posts/*.mdx after the
// build. Runs as a plain Node script (no Vite) so it stays decoupled from
// the SSR pipeline — we just parse frontmatter with gray-matter.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const postsDir = path.join(projectRoot, 'src', 'posts');
const distDir = path.join(projectRoot, 'dist');

const SITE_URL = 'https://saulgraves.com';
const SITE_TITLE = 'Saul Graves';
const SITE_DESC = 'Essays and notes on building software, by Saul Graves.';
const AUTHOR_EMAIL = process.env.VITE_REPLY_EMAIL || 'graves.saul@gmail.com';

function readPosts() {
	if (!fs.existsSync(postsDir)) return [];
	return fs
		.readdirSync(postsDir)
		.filter((f) => f.endsWith('.mdx'))
		.map((file) => {
			const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
			const { data } = matter(raw);
			const slug = data.slug || file.replace(/\.mdx$/, '');
			return {
				slug,
				title: data.title || slug,
				date: data.date || '1970-01-01',
				description: data.description || '',
				tags: Array.isArray(data.tags) ? data.tags : [],
				draft: Boolean(data.draft),
				canonical: data.canonical || null,
			};
		})
		.filter((p) => !p.draft)
		.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

function escape(str = '') {
	return String(str)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function rfc822(iso) {
	return new Date(iso).toUTCString();
}

function isoDate(iso) {
	return new Date(iso).toISOString();
}

function postUrl(post) {
	return `${SITE_URL}/blog/${post.slug}`;
}

function buildRss(posts) {
	const items = posts
		.map(
			(p) => `    <item>
      <title>${escape(p.title)}</title>
      <link>${postUrl(p)}</link>
      <guid isPermaLink="true">${postUrl(p)}</guid>
      <pubDate>${rfc822(p.date)}</pubDate>
      <description>${escape(p.description)}</description>${p.tags.map((t) => `\n      <category>${escape(t)}</category>`).join('')}
    </item>`,
		)
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(SITE_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escape(SITE_DESC)}</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <managingEditor>${escape(AUTHOR_EMAIL)} (${escape(SITE_TITLE)})</managingEditor>
${items}
  </channel>
</rss>
`;
}

function buildSitemap(posts) {
	const staticUrls = ['/', '/about', '/blog'];
	const tagUrls = [...new Set(posts.flatMap((p) => p.tags))].map(
		(t) => `/blog/tag/${encodeURIComponent(t)}`,
	);
	const postUrls = posts.map((p) => `/blog/${p.slug}`);
	const dateBySlug = Object.fromEntries(posts.map((p) => [p.slug, p.date]));
	const all = [...staticUrls, ...postUrls, ...tagUrls];

	const lines = all
		.map((url) => {
			const lastmodSrc =
				url.startsWith('/blog/') && !url.startsWith('/blog/tag/')
					? dateBySlug[url.replace('/blog/', '')]
					: null;
			const lastmod = lastmodSrc
				? `\n    <lastmod>${isoDate(lastmodSrc)}</lastmod>`
				: '';
			return `  <url>\n    <loc>${SITE_URL}${url}</loc>${lastmod}\n  </url>`;
		})
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${lines}
</urlset>
`;
}

const posts = readPosts();
fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, 'rss.xml'), buildRss(posts));
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), buildSitemap(posts));

console.log(`✓ Wrote rss.xml and sitemap.xml (${posts.length} post${posts.length === 1 ? '' : 's'}).`);
