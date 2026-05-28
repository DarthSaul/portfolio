# Portfolio

My personal dev portfolio, built with React 19 + Vite and deployed on Netlify.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen.svg)](https://nodejs.org/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9d0884ec-19cb-4173-bfd8-632dd9497f44/deploy-status)](https://app.netlify.com/sites/saulgraves/deploys)

[saulgraves.com](https://saulgraves.com)

The site serves as a hub for project highlights, a brief bio, my blog, and contact information, with a mobile-first design.

## Tech stack

- **React 19** + **React Router v7**
- **Vite** — dev server and production build
- **MDX** (`@mdx-js/rollup`) + **Shiki** — git-as-CMS blog with build-time syntax highlighting (see [`docs/blog.md`](./docs/blog.md))
- **React 19 native head** via [`Seo`](./src/components/blog/Seo.jsx) + custom SSR prerender ([`scripts/prerender.mjs`](./scripts/prerender.mjs)) — every route ships static HTML with hoisted `<title>` / `<meta>` so social scrapers pick up tags without running JS
- **Font Awesome** — icons
- Custom **mobile-first CSS**
- **Netlify** — hosting and continuous deploy

## Getting started

**Prerequisites:** Node.js `>=22`.

```bash
git clone https://github.com/DarthSaul/portfolio.git
cd portfolio
npm install
```

### Commands

| Command           | Description                                   |
| ----------------- | --------------------------------------------- |
| `npm start`       | Start the Vite dev server at `localhost:5173` |
| `npm run build`   | Build for production into `/dist`             |
| `npm run preview` | Preview the production build locally          |

## Deployment

Hosted on Netlify. Pushes to the tracked branch trigger an automatic deploy; build configuration lives in [`netlify.toml`](./netlify.toml).

## License

Released under the [MIT License](./LICENSE).
