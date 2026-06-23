# palak-portfolio

## Who I am
Palak Gupta — AI Systems Engineer at Symbolic Systems, NYU MS CS '26, 
based in NYC. Originally from India (VIT '24). This portfolio is a 
showcase project itself — it should demonstrate creativity, technical 
depth, taste, and clarity.

## Design inspiration
Dash Creative (dashcreative.co) — dark, warm, editorial, serif italic 
accents, split hero with scrollable side panel, premium feel. NOT a 
copy — same energy, different content.

## Design system
- Background: #181618 (warm noir)
- Surface: #282528 (cards, containers, side panel items)
- Accent: #C9828A (dusty rose) — italic text, CTAs, hover states, 
  highlighted pills, active nav
- Text primary: #F5EFEC (off-white)
- Text secondary: #E8D5D0 (warm cream, for body text, descriptions)
- Text muted: rgba(245,239,236,0.35) (subtle labels)
- Borders: rgba(245,239,236,0.06) (very subtle dividers)
- Serif font: Cormorant Garamond (Google Fonts, via next/font) — 
  ONLY for italic accent words in headlines
- Sans font: Space Grotesk (Google Fonts, via next/font) — everything else
- Border radius: 8px for cards, 20px for pills
- Dark mode only
- Motion: premium, smooth, intentional — never bouncy or cartoonish
- Tone: understated confidence, dry wit, specific over dramatic

## Architecture
- Multi-page app using Next.js App Router
- Pages: / (landing), /work, /about, /lab, /connect
- All components in src/components/
- Page sections in src/components/sections/
- Reusable UI in src/components/ui/
- Page transitions using Framer Motion AnimatePresence
- GSAP ScrollTrigger for scroll-driven animations
- Framer Motion for component transitions, hover, mount/unmount

## Landing page (/) structure
- Top nav: "Palak Gupta" on left, "Work · About · Lab · Connect" on right
- Split layout, full viewport height:
  - LEFT (flex ~1.3): serif italic headline, subtitle, status line
  - CENTER: 3D morphing element (CSS for now, Spline later)
  - RIGHT (fixed ~280px): scrollable side panel with image cards
- Side panel items each have: small thumbnail image, type label, title, 
  description, tech tags, arrow. Like Dash Creative's project list.
- Marquee ticker at the very bottom (reuse existing component, update colors)

## Side panel items (landing page)
1. Agentic AI System (Featured project) — 6 agents, production deployment
2. Disinfo Tracker (Featured project) — Kafka, Spark, Sentence-BERT
3. Watch It Think (Interactive) — live AI agent demo
4. NYU Tandon MS CS (Education) — graduating 2026
5. Symbolic Systems (Experience) — current role
6. Roast or Toast (Fun) — feedback game

## Content rules
- NEVER use lorem ipsum or generic placeholder text
- Use placeholder images as colored rectangles with border-radius, 
  NOT broken img tags
- Headlines use serif italic on key words: 
  "Building *intelligent* systems that actually *work*"
- Copy voice: casual, confident, a little witty — not corporate

## Package management
- Free to install any npm package needed
- Tell me what you installed and why, after the fact

## DO NOT
- Add sections or pages not listed above without asking
- Change the color palette or fonts without asking
- Use light backgrounds anywhere
- Use electric/neon colors — the palette is muted and warm
- Use lorem ipsum anywhere
- Add a CMS, database, or auth unless asked

## Commands
- npm run dev — local dev server (localhost:3000)
- npm run build — production build
- npm run lint — lint check