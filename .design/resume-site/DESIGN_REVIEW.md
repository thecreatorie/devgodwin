# Design Review: Caroline — Personal Resume Site

Reviewed against: no `DESIGN_BRIEF.md` exists — reviewed against the stated design intent (replicate the Isak `bg-video-v2` theme as a personal resume site) and the theme's own aesthetic.
Philosophy: **Cinematic dark editorial** — near-black canvas, oversized Apfel Grotezk display type, signal-green (`#00DE51`) accent, sticky profile card, GSAP scroll reveals over a live video backdrop.
Date: 2026-08-07
Reviewed at: `http://localhost:3000` (production build of `main` @ `258a8a0`)

## Screenshots Captured

| Screenshot | Breakpoint | Description |
| ---------- | ---------- | ----------- |
| `screenshots/review-homepage-desktop-1280.png` | Desktop (1280×800) | Full page, dark mode, all sections |
| `screenshots/review-homepage-tablet-768.png` | Tablet (768×1024) | Full page, stacked layout |
| `screenshots/review-homepage-mobile-375.png` | Mobile (375×812) | Full page, hamburger nav + stacked card |
| `screenshots/review-homepage-light-desktop-1280.png` | Desktop (1280×800) | Light-mode toggle state |
| `screenshots/review-contact-focus-desktop-1280.png` | Desktop | Email field focused (focus-ring check) |
| `screenshots/review-cta-hover-desktop-1280.png` | Desktop | "Let's talk" CTA hover state |

> All screenshots are in `.design/resume-site/screenshots/`.

## Summary

The theme itself is executing well — the sticky card, scroll-driven work cards, timeline, and green-on-black type system all render as intended at every breakpoint, with no layout overflow and no broken images. The problem is **content authenticity**: roughly a third of what a visitor sees is still Envato placeholder material — blank service images, mismatched tech icons, invented statistics, and an About list that both duplicates the new timeline and cites work that was never done. The second theme is **accessibility**: keyboard focus is completely invisible, form fields have no labels, and the page has no semantic landmarks.

## Must Fix

1. **Placeholder images across three sections.** `service-1.jpg` through `service-6.jpg`, `tes-1.jpg`–`tes-3.jpg`, and `avatar-boy.png` are the Envato stripped placeholders (~9KB each, near-white or solid blue blocks). They render as blank white/navy rectangles inside Services, Testimonials, and the author byline. See `screenshots/review-homepage-desktop-1280.png` (Services ≈ 8,900px down; Testimonials ≈ 9,800px down) and `screenshots/review-homepage-mobile-375.png`. *Fix: supply real imagery, or remove the image slots from those components — a blank box reads as broken, an absent box reads as intentional.*

2. **Keyboard focus is invisible.** Tabbing through the page sets `outline: none` with no `box-shadow` replacement on `.item-link`, nav rail links, buttons, and form fields — a keyboard user cannot see where they are. See `screenshots/review-contact-focus-desktop-1280.png`. *Fix: add a global `:focus-visible` rule using the brand accent, e.g. `outline: 2px solid #00DE51; outline-offset: 2px;`.*

3. **Form fields have no accessible labels.** All three contact inputs (`#name`, `#email`, `#message`) rely on placeholder text only — no `<label for>`, no `aria-label`. Screen readers announce them as unlabeled, and the placeholder disappears on typing. *Fix: add visually-hidden `<label>` elements or `aria-label` attributes in `Contact.tsx`.*

4. **Fabricated statistics presented as fact.** The Testimonials header shows "**26+** Finalized projects" and "**98%** Client satisfaction" — both are template defaults nobody verified. The three testimonial quotes are also placeholders I wrote, attributed to "SaaS Client," "Studio Client," "Regulated-Industry Client." On a résumé site, unverifiable numbers and invented quotes are a credibility risk. *Fix: replace with real figures and real client quotes, or remove the counters and the Testimonials section until they exist.*

5. **About's "awards" list invents credentials and duplicates the timeline.** It lists "Claude Refactoring Systems — The Creatorie, 2025," "Digital Book Launch — Evergreen Money, 2024," "Full Brand Ownership — MDM Design Studio, 2022," "National Brand Creative — Meredith · Allergan, 2018," "Growth-Stage Platform — PatientPop, 2017." These are styled exactly like the theme's original awards list (Awwwards, CSSDA) but they are not awards — they're restatements of jobs already listed in the timeline directly below. See `screenshots/review-homepage-desktop-1280.png` at ≈ 1,700px. *Fix: replace with the four real university awards from the résumé (UA Scholar, Alumni Scholar, Alumni Heritage, Engineering Leadership) plus the ISSA certifications, or drop the list entirely since the timeline now covers this ground.*

## Should Fix

1. **No semantic landmarks.** The page renders `main=1` but `nav=0`, `header=0`, `footer=0` — the section nav rail, top bar, and footer are all `<div>`s. Assistive tech gets no page structure to navigate by. *Fix: change the wrappers in `DesktopSidebar.tsx`, `MobileMenu.tsx`, and `Footer.tsx` to `<nav>`, `<header>`, `<footer>`.*

2. **22 dead `href="#"` links.** Social icons, the footer logo, "Download CV," and the work-card arrows all point nowhere. Clicking any of them jumps the page to the top. *Fix: wire real destinations, or render non-navigational ones as `<button>`/`<span>`. At minimum, point LinkedIn and Download CV at real targets.*

3. **Tech-stack icons don't match their labels.** The rows now read "AI Integration," "Full-Stack Development," "GitHub & Agile/Scrum," but the icons are still the theme's Figma / Framer / Photoshop glyphs — and they render as flat gray squares against the dark background. See `screenshots/review-homepage-desktop-1280.png` at ≈ 10,300px. *Fix: swap in matching icons (or an Anthropic/GitHub mark) and give them a light fill for dark mode, the way the brand logos were handled.*

4. **Nav rail touch targets are 32×32px.** The right-hand section rail, theme toggle, and color-settings button are all under the 44×44px minimum, and they're the primary navigation on tablet. *Fix: increase the hit area with padding, keeping the icon visually 32px.*

5. **Progress bars encode confidence as precision.** "95% / 90% / 90%" on the tech rows implies a measured skill level that doesn't mean anything to a visitor. *Fix: either drop the percentages and keep the labels, or reframe as years of use.*

6. **Voice inconsistency between hero and About.** The hero says "I'm building **websites** & brands," while About says "Building brands and **products**." Small, but they're the two largest headlines on the page. *Fix: align both to "websites & brands."*

7. **Stock quote in the footer.** The Steve Jobs "Design is not just what it looks like" pull-quote is the theme's default and renders in EB Garamond serif — the only serif on the entire site, so it visually reads as foreign. *Fix: replace with a line in your own voice, or remove the block.*

## Could Improve

1. **The Send Message button is the quietest element in the Contact section.** It uses the theme's dark-on-dark `animate-dark` style while the sidebar CTA is full green — the actual conversion button has less visual weight than a decorative one. *Suggestion: promote it to the green accent treatment.*

2. **The site is built max-width-first.** 74 `max-width` queries vs 63 `min-width` in `styles.css` — that's the theme's inheritance, not new code, but it means mobile inherits desktop rules and overrides down. *Suggestion: leave as-is unless you fork the stylesheet; noted for future work.*

3. **Nine work cards is a long scroll.** The sticky work section runs ~4,000px on desktop before Services begins. *Suggestion: consider a "show more" after six, or let the strongest three lead.*

4. **The timeline's left column sits empty on desktop** now that item icons were removed — dates float alone in a wide gutter. *Suggestion: tighten the grid so dates sit closer to the rail.*

## What Works Well

- **The aesthetic reads as intended.** Someone landing on this immediately gets the cinematic-dark-editorial direction: the video backdrop, the near-black `#0f0f0f` canvas, the oversized display type, and the single signal-green accent are consistent everywhere, and the accent is never used for anything but emphasis and interaction.
- **The card photo carries the whole design.** The black-and-white treatment of the portrait against the smoke backdrop is the strongest single element on the page, and it happens to match the green-accent palette better than the theme's original ever did.
- **Responsive behavior is genuinely adaptive, not just fluid.** At 375px the sidebar card stacks above the hero, the nav collapses to a hamburger, and the work cards reflow — no horizontal scroll at any breakpoint (`scrollWidth == innerWidth == 1280`), and no clipped text.
- **Body-copy contrast passes AA comfortably.** `rgba(255,255,255,0.56)` on `#0f0f0f` computes to ≈ 6.2:1, and the green accent to ≈ 10.6:1 — both above the 4.5:1 threshold.
- **`prefers-reduced-motion` is respected** by the stylesheet, which matters on a page this animation-heavy.
- **Typography loads cleanly.** Apfel Grotezk for display and Inter for body both resolve with no FOIT/FOUT, and the type scale creates unambiguous hierarchy from the 8+/11+ counters down to the caption chips.
- **The real content that has landed is strong.** The timeline now tells an accurate eight-year story, and the nine work cards with live site screenshots are far more persuasive than the placeholder projects they replaced.
