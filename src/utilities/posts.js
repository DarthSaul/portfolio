// Discover blog posts at build time via Vite's import.meta.glob.
//
// Posts live at src/posts/*.mdx. Each module exposes:
//   - default export: the MDX component (React)
//   - frontmatter:    parsed YAML (via remark-mdx-frontmatter)
//   - readingTime:    minutes-to-read, injected by the remark plugin in vite.config.js
//
// Drop a new .mdx file into src/posts/ and it shows up automatically — no
// manual registration. Drafts (`draft: true` in frontmatter) are hidden on the
// index, the tag pages, and the RSS feed, but the route still resolves so you
// can preview a draft by visiting its slug directly.

const modules = import.meta.glob('../posts/*.mdx', { eager: true });

function slugFromPath(filePath) {
	return filePath.split('/').pop().replace(/\.mdx$/, '');
}

function buildPost(filePath, mod) {
	const fm = mod.frontmatter || {};
	const slug = fm.slug || slugFromPath(filePath);
	return {
		slug,
		title: fm.title || slug,
		date: fm.date || '1970-01-01',
		description: fm.description || '',
		tags: Array.isArray(fm.tags) ? fm.tags : [],
		draft: Boolean(fm.draft),
		canonical: fm.canonical || null,
		replies: fm.replies !== false,
		readingTime: mod.readingTime || 1,
		Component: mod.default,
		// Keep raw frontmatter around for anything the page wants that we
		// didn't normalize above (e.g. an `image` field added later).
		frontmatter: fm,
	};
}

const allPosts = Object.entries(modules)
	.map(([filePath, mod]) => buildPost(filePath, mod))
	.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function listPosts({ includeDrafts = false } = {}) {
	return includeDrafts ? allPosts : allPosts.filter((p) => !p.draft);
}

export function getPost(slug) {
	return allPosts.find((p) => p.slug === slug) || null;
}

export function listTags() {
	const counts = new Map();
	for (const post of allPosts) {
		if (post.draft) continue;
		for (const tag of post.tags) {
			counts.set(tag, (counts.get(tag) || 0) + 1);
		}
	}
	return [...counts.entries()]
		.map(([tag, count]) => ({ tag, count }))
		.sort((a, b) => a.tag.localeCompare(b.tag));
}

export function postsByTag(tag) {
	return listPosts().filter((p) => p.tags.includes(tag));
}

// Returns { prev, next } for the post that comes before / after `slug` in
// reverse-chronological order. Drafts are excluded so previews don't leak.
export function adjacentPosts(slug) {
	const posts = listPosts();
	const i = posts.findIndex((p) => p.slug === slug);
	if (i === -1) return { prev: null, next: null };
	return {
		// `next` is the older post, `prev` the newer one — this matches how
		// most blog UIs read ("← newer / older →").
		prev: i > 0 ? posts[i - 1] : null,
		next: i < posts.length - 1 ? posts[i + 1] : null,
	};
}

export function formatDate(iso) {
	if (!iso) return '';
	// Treat a bare `YYYY-MM-DD` as a local date — `new Date('YYYY-MM-DD')`
	// would parse as midnight UTC and shift a day west in negative timezones.
	const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
	const d = match
		? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
		: new Date(iso);
	if (Number.isNaN(d.getTime())) return iso;
	return d.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}
