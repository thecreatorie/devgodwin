# Godwin — Personal Resume Site

Cinematic portfolio built on the Isak Next.js theme (bg-video-v2 variant): full-screen background video, sticky profile card, GSAP scroll animations, and a floating section-nav rail.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Customize

All resume content lives in `src/data/`:

- `profile.ts` — name, bio, email, rotating titles, socials
- `education.ts` — experience timeline (periods are approximate — adjust)
- `works.ts` — work highlights
- `services.ts`, `tech.ts` — services and stack
- `awards.ts` — career highlights list in the About section
- `testimonials.ts` — **placeholder quotes, swap in real ones before launch**

Other things to swap:

- Avatar: `public/assets/images/avatar/avatar.png` (the card photo)
- Background video: `public/assets/images/overlay-3.mp4`
- "Download CV" button in `src/components/UserSidebar.tsx` — point it at your CV file
- Social links in `profile.ts` are `#` placeholders

## Theme variants

The template's other demos remain available at `/v2`, `/v3`, `/light`, `/bg-video`, `/bg-item`, etc. The homepage is the `bg-video-v2` configuration.

Deploys as a standard Next.js app on Vercel with zero config.
