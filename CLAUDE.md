# palak-portfolio

## Who I am
Palak Gupta — Software Engineer & AI Systems Engineer at Symbolic Systems, 
NYU MS CS '26, based in NYC. Originally from India (VIT '24). This portfolio 
is a showcase project itself — it should demonstrate creativity, technical 
depth, taste, and clarity.

## Design inspiration
Dash Creative (dashcreative.co) — dark, editorial, serif italic accents, 
split hero with scrollable side panel, premium feel. NOT a copy — same 
energy, different content.

## Design system
- Background: #0A0A0A (true black — makes 3D object and accent color pop)
- Surface: #1C1A1C (cards, containers, side panel items)
- Accent: #CE8CF8 (lilac) — italic text, CTAs, hover states, highlighted 
  pills, active nav, section labels, card labels, tags
- Text: #F5EFEC (one color only — use opacity for hierarchy, NOT a 
  second color. 1.0 for headlines, 0.65 for body, 0.45 for muted)
- Borders: rgba(255, 255, 255, 0.06) (very subtle dividers)
- Status dot: #4ade80 (green — semantic "available" signal, not brand)
- Headline font: Fraunces (Google Fonts, variable) — all headlines, 
  page titles, display text
- Accent font: Cormorant Garamond italic (Google Fonts) — ONLY for 
  italic accent words in headlines, styled in #CE8CF8
- Body font: Space Grotesk (Google Fonts) — everything else: nav, body, 
  cards, pills, labels, sub-copy
- All fonts loaded via next/font with font-display: swap
- Card border-radius: 14px. Pill border-radius: 20px
- Dark mode only
- Motion: premium, smooth, intentional — never bouncy or cartoonish
- Tone: understated confidence, dry wit, specific over dramatic

## Architecture
- Multi-page app using Next.js 14 App Router
- Pages: / (landing), /about, /work, /lab, /connect
- All components in src/components/
- Page sections in src/components/sections/
- Reusable UI in src/components/ui/
- Shared Navbar component across all pages (sticky, backdrop blur)
- Page transitions using Framer Motion AnimatePresence
- GSAP ScrollTrigger for scroll-driven animations
- Framer Motion for component transitions, hover, mount/unmount

## Landing page (/) structure
- Sticky navbar: "Palak Gupta" left, About/Work/Lab/Connect right, 
  backdrop-blur on scroll
- Split layout, full viewport height (100dvh):
  - LEFT (~58%): headline, sub-copy, status line
  - RIGHT (~42%): 4 stacked cards with image thumbnails
- Spline 3D object (cube-and-balls) positioned behind hero text, 
  z-index 0, rotating, mouse-reactive
- Marquee ticker pinned at bottom, two rows, opposite scroll directions

## Landing headline
"Ideas are cheap. Products aren't."
- "Ideas are cheap." in Fraunces regular, #F5EFEC
- "Products aren't." in Cormorant Garamond italic, #CE8CF8

Sub-copy: "I build products that solve real problems, from backend 
infrastructure to intelligent systems. Currently at Symbolic Systems, 
based in New York."

Status: "● Open to opportunities · NYC · NYU '26"

## Landing cards (4 only, with image thumbnails, each links out)
1. FEATURED PROJECT — Disinfo Tracker — "Kafka, Spark, Sentence-BERT — 
   real-time narrative detection" → /work
2. LIFESTYLE — NYU × NYC — "Grad school, city life, and too much 
   coffee" → /about
3. INTERACTIVE — Watch It Think — "Live AI agent demo — see reasoning 
   in real time" → /lab
4. LET'S PLAY — Roast or Toast — "Rate this portfolio. Be honest. I 
   can take it." → /lab

## Spline 3D
- Component wraps: @splinetool/react-spline/next
- Scene URL: https://prod.spline.design/wGAbBWL3mx4lFz87/scene.splinecode
- Wrapper div with class "spline-wrapper"
- CSS filter: hue-rotate(-15deg) saturate(0.9) to match lilac accent
- Hidden or minimized on mobile for performance

## About page (/about)
- Headline: "More than what fits on a resume." ("resume." italic lilac)
- Bio: personality-first, mentions travel, sports, hosting, curiosity
- Masonry photo gallery (9 cards, staggered heights, captions + tags)
- "Right now" strip: Reading / Listening / Watching / Eating
- "Beyond the code": 4 leadership cards (2x2 grid)
- "The arc": horizontal mini timeline (High school → VIT → NYC → NYU → Now)
- Instagram footer with logo: @apaneerproblem

## Work page (/work)
- Career timeline strip at top (horizontal)
- Headline: "Selected work." ("work." italic lilac)
- Filter tabs: All | AI/ML | Full-stack | Data
- 2x2 project grid with image placeholders, tech pills, hover effects
- Projects: Disinfo Tracker, Agentic AI System, Enterprise Ticketing, PlateRisk NYC

## Lab page (/lab)
- Headline: "The lab." ("lab." italic lilac)
- Two-column layout: main content left, sidebar right
- Watch It Think: pipeline visualization (Planner → Retriever → Synthesizer)
- Roast or Toast: 💅 Slay / 📉 -ve aura / 💀 Cooked
- Sidebar "What's brewing": 3 mystery in-progress cards + 1 animated 
  loading card ("something's always next")

## Connect page (/connect)
- Single screen, centered vertically
- Headline: "Good ideas deserve great execution. Let's build, together."
- Sub: "Some of the best opportunities begin as conversations..."
- Email: pg2820@nyu.edu (styled as button, mailto: link)
- Social: GitHub, LinkedIn, Instagram (with icons)
- Footer: "Built with Next.js, GSAP, and questionable amounts of coffee"

## Marquee pills (LOCKED — do not change content)
Row 1: "AI Systems Engineer", "Python since day 1", "SQL", 
"ships to prod, not just Jupyter", "NYU '26", "VIT → NYC pipeline", 
"6 agents, 1 orchestrator"
Row 2: "coffee ftw", "24h Screen Time", "gym before git push", 
"skincare routine > deployment pipeline", "reads CS papers for fun 
(don't judge)", "watches sunsets and dogs", "bookmarked 47 recipes, 
made 3", "has opinions about TV finales", "wrote poetry once, chose 
Python instead"

## Content rules
- NEVER use lorem ipsum or generic placeholder text
- Use gradient placeholder divs for images, NOT broken img tags
- Headlines use Fraunces with Cormorant Garamond italic on accent words
- Copy voice: casual, confident, a little witty — not corporate
- No AI-sounding headlines ("From X to Y", "Empowering", "Leveraging")

## Package management
- Free to install any npm package needed
- Tell me what you installed and why, after the fact

## DO NOT
- Change the color palette without asking (#0A0A0A, #1C1A1C, #CE8CF8, #F5EFEC)
- Use the old colors (#181618, #282528, #C9828A, #E8D5D0) anywhere
- Use light backgrounds anywhere
- Use electric/neon colors
- Use lorem ipsum anywhere
- Add a CMS, database, or auth unless asked
- Add any attribution or credit lines
- Change marquee pill content

## Commands
- npm run dev — local dev server (localhost:3000)
- npm run build — production build
- npm run lint — lint check