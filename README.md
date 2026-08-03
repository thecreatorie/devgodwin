# DEVGODWIN — Personal Resume Site

Cinematic, background-video style personal resume for a full-stack developer,
designer, and creative director. Zero dependencies — pure HTML/CSS/JS. Deploys
as-is to Vercel, Netlify, or GitHub Pages.

## Structure

- `index.html` — all content (hero, experience, expertise, about, contact)
- `styles.css` — dark cinematic theme, responsive, reduced-motion friendly
- `script.js` — canvas aurora background, scroll reveals, nav, progress bar

## Background video

The site ships with an animated canvas "aurora" background that always works.
To use a real video loop instead, drop a file at:

```
assets/bg-video.mp4
```

It will fade in over the canvas automatically (muted, looped, mobile-safe).
If the file is missing, the canvas background carries the scene — nothing breaks.

## Customizing

- Name/brand: search for `DEVGODWIN` in `index.html`
- Accent color: `--accent` in `styles.css`
- Contact email: `info@thecreatorie.com` in `index.html`

## Local preview

```
npx serve .
```

or open `index.html` directly in a browser.
