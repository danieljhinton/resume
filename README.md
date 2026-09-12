# Lumon Terminal Resume Site

A personal resume/portfolio site styled after the "macrodata refinement" terminal
from *Severance* — dark, glowing-green CRT terminal aesthetic, built with React
+ Vite and deployed to GitHub Pages.

## Pages

Home, About, Skills, Photos, Videos, Customer Success Ethos, Resume, and a
playable **Refine Macrodata** mini-game.

## Local development

```
npm install
npm run dev
```

## Editing content

Real content is intentionally kept out of the JSX so it's a pure data edit:

- `src/data/content.js` — Home boot lines, About paragraphs, Ethos statement/principles
- `src/data/resumeData.js` — name, title, summary, experience, education, skills, certifications
- `src/data/photosData.js` — photo gallery slots (`src`, `caption`, `status: 'ready'`)
- `src/data/videosData.js` — video slots (`embedUrl`, `title`, `status: 'ready'`)

Any array/field left empty renders an in-universe "PENDING REFINEMENT" placeholder
instead of a blank section, so the site is fully demoable before real content is added.

For Photos, drop image files in `public/assets/photos/` and reference them as
`/assets/photos/filename.jpg`.

## Build & preview

```
npm run build
npm run preview
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages via `actions/deploy-pages`. The repo's
Settings → Pages → Build and deployment source must be set to "GitHub Actions"
(one-time setup).

Live at: https://danieljhinton.github.io/resume/
