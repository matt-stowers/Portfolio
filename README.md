# Matt Stowers Portfolio

Personal portfolio for Matt Stowers, a self-taught full-stack developer and U.S. Army veteran. Built with Next.js, React, JavaScript, Tailwind CSS, and Framer Motion.

## Features

- **Interactive timeline:** a draggable, clickable timeline from self-taught beginnings in 2020 through military service to formal training.
- **Color palettes:** four accent palettes (Space, Ember, Aurora, Rose) that work in both light and dark mode. The choice is saved in the browser.
- **Light and dark themes:** toggled from the header and restored on load without a flash.
- **Scroll progress bar:** a thin bar at the top of the page that fills as you scroll.
- **Certification viewer:** certificates open in a popup PDF viewer.
- **Resume viewer:** the resume opens in a dialog, with a download link.
- **Scroll animations:** reveal effects on sections, with reduced-motion support.
- **Spam-resistant email link:** the address is assembled on click, so it never appears in the page source.

## Tech stack

- Next.js (App Router) and React
- Tailwind CSS and custom CSS (CSS variables drive the themes and palettes)
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build

```bash
npm run build
npm run start
```

The site is deployable to Vercel.

## Project structure

- `src/app/` has the page, layout, and `portfolio.css` (the main stylesheet).
- `src/components/Header/` has the theme toggle, palette toggle, and scroll progress bar.
- `src/components/Common/` has shared pieces such as the timeline, certification viewer, resume viewer, email link, and scroll reveal.
- `src/styles/` has global and third-party stylesheets.
- `public/certs/` has the certification PDFs shown in the popup.

## Color palettes

Palettes are CSS variable overrides at the end of `portfolio.css`, selected by a `data-palette` attribute on `<html>`. To add one, copy an existing `html[data-palette='...']` block and its light-mode counterpart, change the colors, and add an entry to the list in `PaletteToggle.jsx`.

## Portfolio assets

- `src/assets/image_a0b48ef7.jpg` is the professional headshot used on the homepage.
- `public/matt-stowers-resume.pdf` is the downloadable resume.

Portfolio details and palette guidance are in `spec.md`; notable design decisions are recorded in `decision.md`.