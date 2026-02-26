# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Production build
npm run lint       # ESLint on all files
npm run preview    # Preview production build locally
```

## Architecture

React 19 single-page portfolio app using Vite 7, React Router DOM 7, and vanilla CSS with CSS custom properties for theming. No external UI libraries or state management.

**Routing** (defined in `src/App.jsx`): 9 routes — `/`, `/about`, `/projects`, `/competitions`, `/extracurricular`, `/cv`, `/posts`, `/personal`, `/contact`. Each route maps to a page component in `src/pages/`.

**Styling strategy**: Global theme variables in `src/index.css`. Shared page styles in `src/pages/PageStyles.css`. Component-specific styles in co-located CSS files (`Navbar.css`, `Home.css`). Responsive breakpoints at 1200px, 1024px, 768px, 600px, 480px.

**Data pattern**: Page components define their data as local arrays/objects at the top of the file, then render with `.map()`. Organization logos are imported as assets and mapped to names via `orgLogos` lookup objects in Projects and Extracurricular pages.

**Assets**: Images and PDF resume stored in `src/assets/`. Images are imported directly in components (not referenced by URL).

## Key Conventions

- Functional components with hooks only (no class components)
- Font: Inter via Google Fonts (loaded in `index.html`)
- Fixed navbar with z-index 1000; pages need `padding-top` to compensate
- Card components use flexbox with `margin-top: auto` on footers for consistent alignment
- Mobile menu breakpoint at 1200px with hamburger toggle
