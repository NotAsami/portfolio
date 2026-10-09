---
name: Sam (NotAsami)
description: The ring binder Sam brings to the table; each project is a tabbed sheet, newest work clipped in front.
colors:
  ground: "#14111e"
  paper: "#f5f0ff"
  ink: "#14111e"
  ink-soft: "#5a5272"
  on-ground: "#f5f0ff"
  on-ground-soft: "#b7aecb"
  tape-on-cover: "#2a2440"
  pink: "#ff5d8f"
  lilac: "#b98bff"
  peri: "#7c8bff"
  cyan: "#46d3ff"
  orange: "#ff9f43"
  sleeve: "rgba(255,255,255,.55)"
  grid: "rgba(124,139,255,.16)"
  rule: "rgba(20,17,30,.16)"
  wordmark-plate: "#1d1d1d"
  wordmark-gold: "#d4bf7d"
  wordmark-amber: "#e2b021"
  wordmark-cyan: "#00a6d6"
  wordmark-grey: "#8a8a8a"
typography:
  display:
    fontFamily: "Recursive, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 4.6vw, 4rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'CASL' 0, 'MONO' 0"
  title:
    fontFamily: "Recursive, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 800
    lineHeight: 1.6
    letterSpacing: "0.08em"
    fontVariation: "'CASL' 0, 'MONO' 0"
  body:
    fontFamily: "Recursive, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
    fontVariation: "'CASL' 0, 'MONO' 0"
  note:
    fontFamily: "Recursive, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'CASL' 1, 'MONO' 0"
  mono:
    fontFamily: "Recursive, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.3
    fontVariation: "'MONO' 1, 'CASL' 0"
    fontFeature: "tnum"
  label:
    fontFamily: "Recursive, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
    fontVariation: "'MONO' 1"
  wordmark:
    fontFamily: "Cinzel, serif"
    fontWeight: 700
  wordmark-sub:
    fontFamily: "JetBrains Mono, monospace"
    fontWeight: 400
    letterSpacing: "3px"
rounded:
  media: "2px"
  sm: "3px"
  md: "4px"
  lg: "6px"
  tab: "9px"
  cover: "14px"
spacing:
  xs: "8px"
  sm: "10px"
  md: "18px"
  grid: "24px"
  gutter: "28px"
  page-fore: "clamp(20px, 4vw, 52px)"
  page-spine: "clamp(56px, 6vw, 84px)"
components:
  sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "0 clamp(20px,4vw,52px) clamp(32px,4vw,52px) clamp(56px,6vw,84px)"
  strip-head-lead:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    padding: "12px clamp(20px,4vw,52px) 12px clamp(56px,6vw,84px)"
  dymo-tape:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: ".45em .7em .4em"
  dymo-tape-cover:
    backgroundColor: "{colors.tape-on-cover}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: ".45em .7em .4em"
  dymo-tape-new:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: ".45em .7em .4em"
  protector:
    backgroundColor: "{colors.sleeve}"
    rounded: "{rounded.sm}"
    padding: "10px"
  status-cell:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  rail-tab:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tab}"
    width: "56px"
    height: "96px"
  rail-tab-guide:
    backgroundColor: "{colors.pink}"
  rail-tab-projects:
    backgroundColor: "{colors.cyan}"
  rail-tab-toolkit:
    backgroundColor: "{colors.orange}"
  rail-tab-about:
    backgroundColor: "{colors.lilac}"
  rail-tab-hi:
    backgroundColor: "{colors.peri}"
  wordmark-plate:
    backgroundColor: "{colors.wordmark-plate}"
    textColor: "{colors.wordmark-gold}"
    rounded: "{rounded.md}"
    padding: "8px 20px 8px 12px"
  mail-link:
    textColor: "{colors.ink}"
    typography: "{typography.display}"
---

# Design System: Sam (NotAsami)

## Overview

**Creative North Star: "The DM's Binder"**

The site is the ring binder Sam brings to the table. A dark violet vinyl cover holds lilac-white grid-paper sheets, one per section, each marked by a flat Berry tab on the right edge. The work is clipped in like table material: screenshots and the demo video sit in clear sheet protectors, short labels are punched on Dymo tape, and progress is written as struck-through "before" next to bold "after". It is personal and handmade, not corporate. Rank comes from weight, case and reversal, not from a ladder of font sizes.

Density is that of a working document. Sheets are full of real artifacts, separated by heavy ink rules, with the faint grid always showing through. Objects have physical presence: sheets, protectors and the clipped avatar cast soft shadows onto the cover, and a few hand-placed items sit slightly crooked. Motion is limited to the binder itself. Tabs slide proud of the page edge, and a sheet settles into place when you flip to it.

The newest work is the most saturated. Only the lead sheet (G.U.I.D.E.) gets a full colour header strip. Older sheets carry their tab colour as a 10px band along the top edge.

**Key Characteristics:**
- Dark violet cover (ground) with lilac-white paper sheets on a 24px periwinkle grid.
- Five flat Berry tab colours, one per section, no tints or gradients on the colour blocks.
- One family, Recursive, in three voices: Sans for text, Mono for stacks, status and tape, Casual for margin notes.
- Two text sizes (17px, 13px) plus one display size; hierarchy through weight 400–900, uppercase tracking and reversal.
- Material devices: Dymo tape, sheet protectors, punched holes, a vinyl stitch line, a paper clip.
- Before → after change lines as the house way to show progress.

## Colors

A near-black violet cover and lilac-white paper carry everything, with five saturated Berry colours used as flat section markers and sparing accents.

### Primary
- **Berry Pink** (pink): The tab for G.U.I.D.E., the newest and lead sheet. It fills that sheet's whole header strip and the "New" Dymo tape. It is also the text selection colour.

### Secondary
- **Berry Cyan** (cyan): The Projects tab. Off the paper it is the focus ring on the cover and the hover colour for cover links.
- **Berry Orange** (orange): The Toolkit tab.
- **Berry Lilac** (lilac): The About tab. On the cover it also colours the "if found" margin note, the vinyl stitch line and the page scrollbar.
- **Berry Periwinkle** (peri): The Say hi tab. It also supplies the underline on the contact email and the scrollbar on screenshot strips. The paper grid and the punched-hole rims share its hue.

### Neutral
- **Vinyl Cover Violet** (ground): The page background behind everything, and the tape colour for Dymo labels on paper.
- **Cover Tape Violet** (tape-on-cover): Dymo tape on the cover and the top border of the mobile tab strip. It sits one step lighter than the cover, so tape stays visible on it.
- **Lilac Paper** (paper): The sheet surface, and text on the cover (on-ground) and on Dymo tape.
- **Ink** (ink): Text, heavy 2px rules, status dots and the outlined status cells on paper. It is also the focus ring inside sheets, and the text colour on every Berry fill.
- **Faded Ink** (ink-soft): Struck "before" values, captions, stack lines in entry heads, change arrows and list separators.
- **Cover Grey-Lilac** (on-ground-soft): Secondary text on the cover, the paper clip and the colophon.
- **Sleeve** (sleeve): The 55% white wash of a sheet protector over the paper.
- **Grid Line** (grid): The 24px paper grid, at 16% periwinkle.
- **Hairline Rule** (rule): The 1px dividers between change lines, table rows and handout headings, at 16% ink.

### Wordmark (G.U.I.D.E. only)
- **Plate, Gold, Amber, Cyan, Grey** (wordmark-*): The G.U.I.D.E. logotype's own colours: dark plate, gold lettering, amber system-truth accent, cyan player chevron and grey subline. They are declared so the asset is accounted for, and exist for that asset only. They are not binder palette.

### Named Rules
**The One Tab, One Colour Rule.** Each section owns exactly one Berry colour. Its rail tab, header strip or band, and link hover underline (`text-decoration-color: var(--tab)`) all use that colour. A Berry colour may appear elsewhere only as a small accent (selection, focus, underline, scrollbar), never as a second section's marker.

**The Flat Berry Rule.** Berry fills are solid blocks with ink text: no tints, no gradients, no opacity ramps. Gradients in this system only draw paper (the grid and the punched holes).

**The Ink-On-Berry Rule.** Text on any Berry fill is ink, never white.

## Typography

**Display Font:** Recursive (with system-ui, sans-serif)
**Body Font:** Recursive Sans (`'CASL' 0, 'MONO' 0`)
**Label/Mono Font:** Recursive Mono (`'MONO' 1`, tabular numerals)

**Character:** One variable family plays three roles. Sans is the typed page, Mono is the label maker and spec line, and Casual is Sam's handwriting in the margin. Because they share a skeleton, the voices change without the page fragmenting.

### Hierarchy
- **Display** (900, clamp(2.4rem, 4.6vw, 4rem), 1.02, −0.03em): The cover name, sheet titles and the contact email. Use one per sheet.
- **Title** (800, 17px, uppercase, 0.08em): Sub-headings within a sheet ("Now talking to Foundry", "Player side"). Project names in entry heads use weight 900.
- **Body** (400, 17px, 1.6): Running prose, 60–66ch maximum. The lede paragraph steps up to weight 600 instead of growing.
- **Note** (Casual, body size): Margin notes, captions on the lead video and the pull quote. Weight 600–700 when it acts as an aside.
- **Mono** (500, 13px): Stack lines ("React · TypeScript · Supabase"), with middots as separators.
- **Label** (700–800, 13px, uppercase, 0.06–0.16em): Dymo tape, rail tabs, table row heads and status cells.

### Named Rules
**The Two Sizes Rule.** Text is 17px or 13px. Display is the only other size. Below 960px the display role steps down for two elements only, the cover name (2.2rem) and the contact email (1.4rem); these are phone overrides on those elements, not ramp steps. To create rank, change weight, case, tracking or reversal, never the size.

**The Wordmark Exception Rule.** Cinzel and JetBrains Mono (the wordmark and wordmark-sub roles) exist only inside the G.U.I.D.E. wordmark and are subset to its glyphs. They never set page text.

## Layout

On desktop the binder is a three-column grid, max 1440px wide: a sticky inside cover (260–320px), the stacked sheets (fluid), and a 56px tab rail, with 28px gutters and a 28px outer margin. A dashed 1px stitch line runs 10px inside the viewport edge. Sheets stack with 28px between them. Each sheet has a wide spine margin (clamp(56px, 6vw, 84px)) for the punched holes and a narrower fore-edge (clamp(20px, 4vw, 52px)). The grid behind everything is 24px.

Inside sheets, two-column splits are asymmetric (about 1.55fr/1fr for the lead video and its change log, and 1.15fr/1fr or 1.6fr/1fr elsewhere). They collapse to one column below 1100px. Screenshot runs are horizontal scroll-snap strips with columns at minmax(250px, 46%).

Below 960px the cover dissolves into the flow. A compact identity row (64px avatar, name, one-liner) comes first, then the lead sheet, then the rest of the cover, then the other sheets. The rail becomes a fixed bottom strip that respects the safe area. Sheets tighten to an 18px fore-edge and a 44px spine, and change lines and table rows stack.

## Elevation & Depth

Depth is physical, not interface-flat. Objects that would cast a shadow on a real binder do: the sheets lift off the cover, the protectors lift off the paper, and the clipped avatar lifts off the cover. Shadows are soft and directional, with a tight contact shadow plus a long, negatively-spread ambient one. No shadow is a hard offset block.

### Shadow Vocabulary
- **Sheet on cover** (`box-shadow: 0 1px 0 rgba(255,255,255,.5) inset, 0 2px 4px rgba(0,0,0,.35), 0 24px 48px -24px rgba(0,0,0,.8)`): Every paper sheet.
- **Protector on paper** (`box-shadow: 0 1px 2px rgba(20,17,30,.12), 0 10px 24px -14px rgba(20,17,30,.45)`): Sheet protectors around media.
- **Photo clipped on** (`box-shadow: 0 2px 3px rgba(0,0,0,.4), 0 14px 30px -12px rgba(0,0,0,.7)`): The avatar on the cover.
- **Sheet lifted** (`box-shadow: 0 2px 4px rgba(0,0,0,.35), 0 40px 70px -24px rgba(0,0,0,.9)`): The first frame of the settle animation, as a sheet drops back onto the cover. Transient only.
- **Wordmark plate** (`box-shadow: 0 2px 4px rgba(20,17,30,.25)`): The G.U.I.D.E. wordmark's dark plate on paper.

### Named Rules
**The Real Objects Rule.** Only things that exist as physical objects in the binder cast shadows: sheets, protectors, photos and the wordmark plate. Text, tape, tabs and rules stay flat.

## Shapes

Corners are barely rounded, like paper. Sheets are 3px at the spine and 6px at the fore-edge, Dymo tape and protectors 3px, media inside a protector 2px, and photos 4px. Tabs are the softest shape at 9px, rounded only on their outer edge (right side on desktop, top on mobile). The vinyl stitch line rounds at 14px. Heavy 2px ink rules divide major blocks, 1px hairlines divide rows, and protectors carry a 4px top edge for the open lip of the sleeve. Punched holes are three radial cut-outs down the spine, showing the cover colour through.

A few hand-placed items sit slightly off-square: the avatar −2°, its tape +3°, a margin aside −0.6°, the pull quote −1.2°. At rest, tilts stay within about 3° and apply only to placed objects and margin notes. Sheets and text blocks sit square; the settle animation's transient −0.35° on arrival is the only sheet tilt.

## Components

### Tab Rail (signature)
The rail is the navigation, and it is physical.
- **Shape:** Vertical tabs 56px wide and at least 96px tall, vertical-rl label, 9px radius on the exposed edge (`{rounded.tab}`).
- **Colour:** Each tab is its section's Berry colour with ink Mono label text, uppercase, tracked 0.16em.
- **States:** At rest a tab is tucked behind the sheets (−50px). Hover pulls it 6px out. The current section (`aria-current="true"`, set by scroll position) stands proud at −32px. Movement is 0.22s on `cubic-bezier(.2,.8,.2,1)`.
- **Mobile:** A fixed bottom strip of equal-width tabs, at least 48px tall, rounded on top. The current tab rises 6px.

### Sheet
- **Corner Style:** 3px spine / 6px fore-edge.
- **Background:** Paper with the 24px grid, punched holes in the spine margin.
- **Shadow Strategy:** Sheet on cover (see Elevation).
- **Header:** The lead sheet's header strip bleeds edge to edge in its tab colour and carries a status (8px ink dot plus text) and a Mono stack line, pushed right. Every other sheet shows its tab colour as a 10px band across the top edge (`inset 0 10px 0 var(--tab)`).
- **Settle:** When a sheet is reached from the rail, it settles from 14px down and −0.35° to rest over 0.45s on `cubic-bezier(.2,.8,.2,1)`. This is disabled under reduced motion.

### Dymo Tape
- **Style:** Uppercase Mono label, 700 weight, 13px, 0.14em tracking, paper-coloured text on tape, 3px radius, no wrapping.
- **Variants:** Ground tape on paper and on the clipped photo. Cover tape (tape-on-cover) laid directly on the cover. Pink tape with ink text for the single "New" item.
- **Use:** Tags, short status labels and a "property of" label on the clipped photo. Keep text to a few words.

### Sheet Protector
- **Style:** A 10px sleeve of 55% white over the paper, a 1px 20% ink border with a 4px top lip, and a 3px radius. The media inside rounds at 2px on a ground backdrop.
- **Caption:** 13px faded ink below, or Casual note voice for the lead video.
- **Hover (when linked):** The border goes full ink.

### Change Lines
- **Style:** A two-column row: the thing on the left (700), then the struck "before" in faded ink, an arrow icon, and the bold (800) "after". Rows are divided by hairlines and stack on mobile.
- **Use:** Any progress or fix: planned → shipped, hit → switched. A row may carry only an "after" when there was no meaningful before.

### Status Cell
- **Style:** A 13px uppercase label at 700 weight and 0.06em tracking, in a 1.5px ink outline with a 3px radius. It sits in a project entry head beside the name (900) and a Mono stack line in faded ink.

### Reference Table
- **Style:** A full-width DM-screen table. Row heads are 13px uppercase labels 15em wide, and values are inline lists separated by faded middots. The first row has a 2px ink top rule, and the rest have hairlines.

### Links
- **Inline:** Inherit colour, underline offset 0.22em at 1.5px. On paper, the underline takes the sheet's tab colour on hover.
- **Contact email:** Display size, 900 weight, with a 4px periwinkle underline that turns ink on hover.
- **Focus:** A 3px outline with 3px offset, cyan on the cover and ink on paper.
- **Icons:** Inline SVG symbols at 1em, stroked in currentColor.

### G.U.I.D.E. Wordmark (fixed asset)
This is the project's own logotype, an SVG on a dark plate (#1d1d1d, 4px radius) in its own cyan, amber and gold with Cinzel and JetBrains Mono. Its colours and faces are declared as the wordmark-* tokens for that asset only; they belong to G.U.I.D.E. and never colour or set anything else in the binder.

## Do's and Don'ts

### Do:
- **Do** give every section exactly one Berry tab colour and use it for that section's tab, strip or band, and link hover.
- **Do** set text on Berry fills in ink (#14111e).
- **Do** keep text at 17px or 13px and make rank with weight (400–900), uppercase tracking or reversal onto tape.
- **Do** put screenshots and video in a sheet protector, with a short caption.
- **Do** show progress as before → after change lines.
- **Do** keep the newest work most saturated: full colour strip on the lead sheet, a 10px band on the rest.
- **Do** park all motion under `prefers-reduced-motion`, including the settle animation and video autoplay.

### Don't:
- **Don't** tint, fade or gradient a Berry colour block. Gradients are for the paper grid and punched holes only.
- **Don't** use Cinzel, JetBrains Mono or the wordmark's gold, amber and cyan outside the G.U.I.D.E. wordmark.
- **Don't** lay ground-coloured tape directly on the ground-coloured cover. Tape sits one step off the surface it is stuck to: cover tape on the cover, ground tape on paper and photos.
- **Don't** add hard offset shadows or shadows on flat items (tape, tabs, text).
- **Don't** tilt more than about 3°, or leave sheets and body text tilted at rest.
