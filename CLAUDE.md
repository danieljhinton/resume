# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal resume/portfolio site styled after the "macrodata refinement" terminal from
*Severance* (dark, glowing-green CRT terminal aesthetic). Built with React + Vite,
deployed to GitHub Pages at https://danieljhinton.github.io/resume/.

## Commands

```
npm install       # install deps
npm run dev       # start Vite dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # oxlint (see .oxlintrc.json)
```

There is no test suite/framework configured in this repo.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci` +
`npm run build` and publishes `dist/` to GitHub Pages via `actions/deploy-pages`.
There's no separate staging step — a push to `main` is a production deploy.

Always commit and push changes to GitHub after making them (this is how the
site gets deployed — see above) rather than leaving them uncommitted locally.

## Architecture

- **Routing**: `HashRouter` (`src/App.jsx`) with one route per page under
  `src/pages/`. Vite's `base: '/resume/'` (`vite.config.js`) matters for
  GitHub Pages asset paths; HashRouter avoids needing server-side rewrite
  rules for deep links on Pages.
- **Layout shell**: every route renders inside `CRTScreen` (scanline/vignette
  overlay, mounted once) → `app-shell` div with `NavTerminal` and `Footer`
  around the routed page. Individual pages then wrap their content in
  `TerminalFrame`, the bordered "window chrome" panel with a fake file-path
  header — this is the repeated visual unit of the whole site.
- **Content/component separation (important)**: real copy is deliberately
  kept out of JSX and centralized in `src/data/`:
  - `content.js` — Home boot lines, About paragraphs, Ethos statement/principles
  - `resumeData.js` — name, title, summary, experience, education, skills, certifications
  - `photosData.js` — photo gallery slots (`src`, `caption`, `status`)
  - `videosData.js` — video slots (`embedUrl`, `title`, `status`)

  Pages branch on empty/`'placeholder'` values to render an in-universe
  "PENDING REFINEMENT" notice (`PlaceholderNotice` / inline text) instead of
  a blank section, so the site is always demoable with or without real
  content filled in. When adding content, edit these data files rather than
  the page components. Photos go in `public/assets/photos/` referenced as
  `/assets/photos/filename.jpg`.
- **Mini-game**: `src/game/` implements "Refine Macrodata" (select numbers
  from a grid, assign selections to a bin, fill a quota to win) as a
  self-contained reducer app: `gameConfig.js` (grid size, quota, bin
  labels/ids) → `gameReducer.js` (`initialGameState`/`gameReducer`, cell
  status is `idle | selected | exiting`) → `RefineMacrodataGame.jsx` (wires
  `useReducer` to `NumberGrid`, `Bin`, `ProgressBar`, `WinScreen`). Exiting
  cells are removed from state on a timer (`REMOVE_EXITED`) after their CSS
  exit animation plays, decoupling animation timing from game logic.
- **Styling**: plain CSS in `src/styles/` (`terminal.css`, `layout.css`,
  `game.css`) plus `src/index.css`, no CSS-in-JS or utility framework.
