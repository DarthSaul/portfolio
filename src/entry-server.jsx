// SSR entry — used by scripts/prerender.mjs to render each route to a string
// during the build. Mirrors src/index.jsx but uses StaticRouter so we can
// drive the route from the URL the prerender script is currently rendering.
//
// Head tags emitted by <Seo> show up inline in the rendered HTML; the
// prerender script extracts them and hoists them into <head>.

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import App from './App';

export { STATIC_ROUTES } from './App';
export { listPosts, listTags } from './utilities/posts';

export function render(url) {
	return renderToString(
		<StaticRouter location={url}>
			<App />
		</StaticRouter>,
	);
}
