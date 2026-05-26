// Postbuild prerender. Steps:
//   1. Read the client-built dist/index.html as a template.
//   2. Import the SSR bundle (built via `vite build --ssr`).
//   3. For each route — both static and every blog post / tag — render React
//      to a string, hoist any <title>/<meta>/<link> tags from the body into
//      <head>, and write the resulting HTML to dist/<route>/index.html.
//
// Result: every URL has real <title>, <meta>, and OG tags in the source HTML,
// so social scrapers (LinkedIn / Twitter / Facebook / Slack) see them without
// executing JS.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const ssrEntry = path.join(distDir, 'server', 'entry-server.mjs');

if (!fs.existsSync(ssrEntry)) {
	console.error(`✗ SSR bundle not found at ${ssrEntry}.`);
	console.error('  Did the SSR build step run? Expected build sequence:');
	console.error('    vite build && vite build --ssr src/entry-server.jsx --outDir dist/server');
	process.exit(1);
}

const { render, STATIC_ROUTES, listPosts, listTags } = await import(pathToFileURL(ssrEntry).href);

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const dynamicRoutes = [
	...listPosts().map((p) => `/blog/${p.slug}`),
	...listTags().map(({ tag }) => `/blog/tag/${tag}`),
];

const routes = [...new Set([...STATIC_ROUTES, ...dynamicRoutes])];

// Pulls <title>, <meta>, and <link> tags out of `body` so they can be hoisted
// into <head>. React 19's renderToString emits them inline; on the client
// React hoists them automatically, but for SEO we need them in the static
// HTML head before JS runs.
function extractHeadTags(body) {
	const tagPattern = /<(title|meta|link)\b[^>]*?(?:\/>|>(?:[^<]*<\/\1>)?)/gi;
	const tags = [];
	const cleaned = body.replace(tagPattern, (match) => {
		tags.push(match);
		return '';
	});
	return { headTags: tags.join('\n    '), cleanedBody: cleaned };
}

function renderPage(url) {
	const rawHtml = render(url);
	const { headTags, cleanedBody } = extractHeadTags(rawHtml);

	// The template ships with a static <title>Saul Graves</title>. The route's
	// own <title> supersedes it, so strip the original to avoid duplicates.
	let page = template;
	if (headTags.includes('<title')) {
		page = page.replace(/<title>[^<]*<\/title>\s*/i, '');
	}
	page = page.replace('</head>', `    ${headTags}\n  </head>`);
	page = page.replace('<div id="root"></div>', `<div id="root">${cleanedBody}</div>`);
	return page;
}

function outputPathFor(url) {
	if (url === '/') return path.join(distDir, 'index.html');
	const rel = url.replace(/^\//, '').replace(/\/$/, '');
	return path.join(distDir, rel, 'index.html');
}

let count = 0;
for (const url of routes) {
	const out = outputPathFor(url);
	fs.mkdirSync(path.dirname(out), { recursive: true });
	fs.writeFileSync(out, renderPage(url));
	count += 1;
}

// SSR bundle is build-time-only; remove it so it doesn't ship to Netlify.
fs.rmSync(path.join(distDir, 'server'), { recursive: true, force: true });

console.log(`✓ Prerendered ${count} route${count === 1 ? '' : 's'}.`);
