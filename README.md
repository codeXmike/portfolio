# CodeXmike Portfolio

Premium glass portfolio built with React + Vite + Tailwind + Framer Motion.

## Tech

- React + Vite
- TailwindCSS (custom breakpoints: `w100`, `w250`, `w500`, `w750`, `w1000`)
- Framer Motion animations
- Lucide icons
- GitHub: contribution graph + latest repos

## Getting Started

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

## Customize

- Profile + links + accent color: `src/lib/config.js`
- Skills + projects (including filters + featured): `src/lib/data.js`
- GitHub username shown in the GitHub section: `src/components/GithubSection.jsx`

## Deploy (Vercel)

- Import the repo into Vercel
- Build command: `npm run build`
- Output directory: `dist`
