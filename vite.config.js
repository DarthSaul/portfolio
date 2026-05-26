import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkGfm from 'remark-gfm';
import rehypeShiki from '@shikijs/rehype';
import { Parser } from 'acorn';

const WORDS_PER_MINUTE = 220;

// Estimates reading time and emits `export const readingTime = N` into the
// compiled MDX module. Lets src/utilities/posts.js read it without a separate
// raw-text glob (which collides with @mdx-js/rollup's handling of `?raw`).
function remarkReadingTime() {
	return (tree) => {
		let words = 0;
		const walk = (node) => {
			if (!node) return;
			if (
				node.type === 'text' ||
				node.type === 'code' ||
				node.type === 'inlineCode'
			) {
				words += (node.value || '').split(/\s+/).filter(Boolean).length;
			}
			if (node.children) node.children.forEach(walk);
		};
		walk(tree);
		const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
		const code = `export const readingTime = ${minutes};`;
		const estree = Parser.parse(code, {
			sourceType: 'module',
			ecmaVersion: 'latest',
		});
		tree.children.push({
			type: 'mdxjsEsm',
			value: code,
			data: { estree },
		});
	};
}

// MDX has to run before @vitejs/plugin-react so the JSX it emits gets transformed.
const mdxPlugin = mdx({
	jsxImportSource: 'react',
	providerImportSource: '@mdx-js/react',
	remarkPlugins: [
		remarkGfm,
		remarkFrontmatter,
		// Exposes parsed YAML frontmatter as `export const frontmatter = {...}`.
		[remarkMdxFrontmatter, { name: 'frontmatter' }],
		remarkReadingTime,
	],
	rehypePlugins: [
		[
			rehypeShiki,
			{
				themes: { light: 'github-light', dark: 'github-dark' },
				defaultColor: false,
			},
		],
	],
});

export default defineConfig({
	plugins: [{ enforce: 'pre', ...mdxPlugin }, react()],
});
