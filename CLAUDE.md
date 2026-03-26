# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server (Vite) at localhost:5173
npm run build      # Production build → /dist
npm run preview    # Preview production build locally
npm test           # Vitest test runner
npm run deploy     # Build + deploy to GitHub Pages (saulgraves.com)
```

Deployment runs `npm run build` automatically via the `predeploy` script before pushing to gh-pages.

## Architecture

React 19 single-page application built with Vite, deployed to GitHub Pages.

**Data layer** — content is driven by two utility files:
- `src/utilities/projectsDev.js` — object map keyed by project ID (title, description, tech stack, links, image)
- `src/utilities/contactInfo.js` — social/contact links (GitHub, LinkedIn, Medium, email, resume)
- `src/services/projects.js` — `ProjectDataService` class for looking up projects by ID

**Components** live in `src/components/dev/`, each paired with a CSS file in `src/css/`:
- `Nav.jsx` — sticky nav bar; transitions from transparent to solid background on scroll using a `window` scroll event listener
- `Hero.jsx` — landing section with intro text and contact links
- `Work.jsx` — renders project rows from a manually curated `orderedProjects` array (defined at the top of the file); controls display order
- `ProjectCard.jsx` — individual project display card
- `About.jsx` / `SkillsTech.jsx` — bio and skills/technologies sections
- `Contact.jsx` — contact section

**Animations:**
- AOS (Animate On Scroll) — initialized in each component via `useEffect`, used via `data-aos` attributes for fade-in effects
- GSAP — installed but minimally used
- react-scroll — powers smooth anchor navigation between the `#home`, `#work`, and `#about` sections

**To add a project:** add an entry to `src/utilities/projectsDev.js`, then also add the new key to the `orderedProjects` array in `src/components/dev/Work.jsx` in the desired display position.
