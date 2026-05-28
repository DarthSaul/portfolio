// Client entry. Mounts (or hydrates, after the prerender pass) the app into
// #root. Head tags (<title>, <meta>) emitted by <Seo> are hoisted to <head>
// automatically by React 19 on the client; the prerender script does the same
// for the SSR'd HTML.

import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './App';

const rootEl = document.getElementById('root');

const tree = (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

// dist/<route>/index.html ships prerendered markup, so we hydrate; the dev
// server serves an empty <div id="root">, so we create a fresh root.
if (rootEl.hasChildNodes()) {
	hydrateRoot(rootEl, tree);
} else {
	createRoot(rootEl).render(tree);
}
