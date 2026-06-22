# palak-portfolio

## Who I am
Palak Gupta — AI Systems Engineer at Symbolic Systems, NYU MS CS '26, 
based in NYC. Originally from India (VIT '24). This portfolio is itself 
one of my showcase projects — it should demonstrate creativity, technical 
depth, taste, and clarity, not just list my work.

## Design system
- Background: #0A0A0A (near black)
- Text: #E8E6E1 (off-white)
- Accent: #EF9F27 (warm amber) — use sparingly, for CTAs/highlights only
- Font: Space Grotesk (Google Fonts, via next/font)
- Border radius: 12px default, 20px for pills/buttons
- Dark mode only — no light mode toggle needed
- Motion should feel premium and intentional, never bouncy/cartoonish

## Architecture rules
- All components go in src/components/
- Page sections go in src/components/sections/ (one file per section: Hero.tsx, About.tsx, etc.)
- Reusable small pieces (buttons, cards) go in src/components/ui/
- Use Tailwind for layout/spacing/color
- Use GSAP (with ScrollTrigger) for scroll-driven animations
- Use Framer Motion for component-level transitions (hover, mount/unmount, drag)
- Keep components small and single-purpose — split if a file exceeds ~150 lines
- API routes go in src/app/api/

## Sections (build in this order)
1. Hero — 3D Spline character + name + tagline
2. Marquee — infinite scroll ticker, personality pills
3. About — sticky image + scrolling text + work timeline
4. Projects — large hover-preview cards
5. Stack — interactive tech visualization
6. Agent demo — "Watch It Think" agentic AI showcase
7. Feedback — "Roast or Toast" swipe feedback game
8. Contact — bold CTA + social links

## Content rules
- NEVER use lorem ipsum or generic placeholder text
- If real copy isn't provided yet, ask me for it or use clearly-marked 
  placeholder in MY voice (casual, confident, a little witty) — not generic filler
- Don't invent project details, metrics, or claims about my background

## Package management
- Free to install any npm package needed to implement a feature
- Just tell me what you installed and why, after the fact
- Avoid paid APIs/services unless I've explicitly approved one

## DO NOT
- Add sections not listed above without asking me first
- Change the color palette or font without asking
- Use light mode anywhere
- Add a CMS, database, or backend auth — keep this static/serverless 
  unless I ask for it specifically

## Commands
- `npm run dev` — start local dev server (localhost:3000)
- `npm run build` — production build (run this before pushing major changes)
- `npm run lint` — check for lint errors