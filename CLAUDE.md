# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server (Vite) at localhost:5173
npm run build      # Production build → /dist
npm run preview    # Preview production build locally
npm test           # Vitest test runner
```

Deployment is handled by Netlify (see `netlify.toml`). Push to the tracked branch to trigger a deploy.

## Architecture

React 19 single-page application built with Vite, deployed to Netlify.

**Data layer** — content is driven by two utility files:
- `src/utilities/projectsDev.js` — object map keyed by project ID (name, headline, period, icon, links, images, bullets)
- `src/utilities/contactInfo.js` — social/contact links (GitHub, LinkedIn, Medium, email, resume)
- `src/services/projects.js` — `ProjectDataService` class for looking up projects by ID

**Components** live in `src/components/dev/`, each paired with a CSS file in `src/css/`:
- `Nav.jsx` — sticky nav bar with theme toggle (dark/light); restores theme from localStorage on load, falling back to `prefers-color-scheme`
- `Hero.jsx` — landing section with avatar fireworks animation on hover
- `Work.jsx` — renders two sections ("Work" and "Projects") from manually curated arrays at the top of the file; controls display order
- `ProjectCard.jsx` — individual row card; shows name, headline, optional period (for work entries), and icon/GitHub links
- `About.jsx` — "Let's get in touch" section with text contact links
- `SkillsTech.jsx` — skills grid rendered on the `/about` page via `AboutPage.jsx`

**Routing** — React Router v7 with `BrowserRouter`; three routes: `/`, `/about`, `/blog`.

**To add a project:** add an entry to `src/utilities/projectsDev.js`, then add the new key to the `projectItems` array in `src/components/dev/Work.jsx` in the desired display position. For a work entry (no GitHub link), add it to `workItems` instead and include a `period` field.
