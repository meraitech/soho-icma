---
version: alpha
name: Cpaaustralia
description: |
  CPA Australia's design system embodies professional authority and
  institutional trust through a bold, high-contrast colour strategy anchored in
  deep maroon and striking premium red accents. The visual language combines corporate
  formality with moments of vibrant confidence—particularly through the use of
  premium red—creating a sense of progressive financial
  expertise. The system leverages generous whitespace, clean typography in
  Avenir, and sharp, unrounded edges (except for pill-shaped call-to-action
  buttons) to convey precision and clarity. Dark hero sections with full-bleed
  imagery establish hierarchy, while alternating light bands and strategic use
  of the brand's maroon canvas create rhythm across long pages. The overall mood
  is confident, accessible, and forward-thinking—designed to inspire members and
  position CPA Australia as a leader in accounting and finance.
source:
  url: "https://cpaaustralia.com.au"
  pagesAnalyzed: 6
  extractedAt: 2026-10-13
  tokensMeasured: true
colors:
  primary: "#C8102E"
  accent: "#9E1B32"
  canvas: "#4C0519"
  surface-alt: "#F7F7F7"
  on-primary: "#222222"
  ink: "#FFFFFF"
  body: "#FFE4E6"
  muted: "#767676"
  faint: "#303030"
  error: "#B00020"
  accent-1: "#E11D48"
  accent-2: "#7F1D1D"
  accent-3: "#C8102E"
  accent-4: "#7B868C"
  accent-5: "#F43F5E"
  neutral-1: "#444444"
typography:
  display:
    fontFamily: Avenir
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.13
    letterSpacing: 0px
  heading-lg:
    fontFamily: Avenir
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: 0px
  heading-lg-strong:
    fontFamily: Avenir
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: 0px
  heading-md:
    fontFamily: Avenir
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: 0px
  heading-sm:
    fontFamily: Avenir
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: 0px
  heading-xs:
    fontFamily: Avenir
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0px
  body-xl:
    fontFamily: Avenir
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.33
    letterSpacing: 0px
  body-lg:
    fontFamily: Avenir
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.33
    letterSpacing: 0px
  body-md:
    fontFamily: Avenir
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0px
  body-md-strong:
    fontFamily: Avenir
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0px
  body-sm:
    fontFamily: Avenir
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0px
  body-sm-strong:
    fontFamily: Avenir
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.71
    letterSpacing: 0px
  button-md:
    fontFamily: Avenir
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0px
  button-md-strong:
    fontFamily: Avenir
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.75
    letterSpacing: 0px
  label:
    fontFamily: Avenir
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.71
    letterSpacing: 0px
  caption-xs:
    fontFamily: Avenir
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0px
  caption-xs-strong:
    fontFamily: Avenir
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0px
    textTransform: uppercase
rounded:
  none: 0px
  xs: 3px
  full: 9999px
spacing:
  xxs: 8px
  xs: 16px
  sm: 20px
  md: 24px
  lg: 36px
  xl: 40px
  xxl: 48px
  xxxl: 64px
  section: 136px
borderWidths:
  thin: 1px
  medium: 2px
elevationStrategy: color-blocking
themes:
  derived: light   # the other theme is the site's measured palette
  light:
    bg: "#F9FCFD"
    surface: "#EFF2F3"
    surfaceRaised: "#E8EAEB"
    text: "#101418"
    textMuted: "#686B6E"
    border: "#D6D9DA"
    accent: "#9E1B32"
    accentFg: "#FFFFFF"
    focusRing: "#9E1B32"
    elevation: shadow
  dark:
    bg: "#4C0519"
    surface: "#F7F7F7"
    surfaceRaised: "#F8F8F8"
    text: "#FFFFFF"
    textMuted: "#FFE4E6"
    border: "#7F1D22"
    accent: "#C8102E"
    accentFg: "#FFFFFF"
    focusRing: "#9E1B32"
    elevation: "border+surface"
  contrastFailures:
    - "dark: text on surface = 1.07:1 (needs 4.5:1)"
components:
  button-primary:
    textColor: "{colors.ink}"
    border: "2px solid {colors.primary}"
    height: 48px
    padding: "0px 5px 0px 0px"
    fontSize: 16px
    fontFamily: Avenir
    fontWeight: 700
    lineHeight: 1.5
    backgroundColor: "{colors.primary}"
  button-filled:
    typography: "{typography.button-md-strong}"
    textColor: "{colors.canvas}"
    height: 52px
    padding: "12px 24px 12px 24px"
    rounded: "{rounded.full}"
    backgroundColor: "#C8102E"
  button-filled-2:
    typography: "{typography.button-md-strong}"
    textColor: "{colors.ink}"
    height: 52px
    padding: "12px 24px 12px 24px"
    rounded: "{rounded.full}"
    backgroundColor: "{colors.canvas}"
  card:
    textColor: "{colors.ink}"
    padding: "64px 0px 64px 0px"
    fontSize: 16px
    fontFamily: Avenir
    fontWeight: 400
    lineHeight: 1.75
    backgroundColor: "{colors.canvas}"
  card-sm:
    textColor: "{colors.faint}"
    fontSize: 16px
    fontFamily: Avenir
    fontWeight: 400
    lineHeight: 1.75
  link:
    textColor: "{colors.canvas}"
    padding: "24px 24px 24px 24px"
    fontSize: 16px
    fontFamily: Avenir
    fontWeight: 400
    lineHeight: 1.75
    backgroundColor: "#C8102E"
  link-2:
    textColor: "{colors.ink}"
    padding: "24px 24px 24px 24px"
    fontSize: 16px
    fontFamily: Avenir
    fontWeight: 400
    lineHeight: 1.75
    backgroundColor: "{colors.accent-2}"
states:
  button-hover:
    target: button
    state: hover
    borderColor: "{colors.ink}"
    backgroundColor: "rgba(200, 16, 46, 0.12)"
  nav-hover:
    target: nav
    state: hover
    backgroundColor: "rgba(200, 16, 46, 0.12)"
  other-focus:
    target: other
    state: focus
    boxShadow: "{colors.ink} 0px 0px 1em"
  card-active:
    target: card
    state: active
    opacity: 1
  button-active:
    target: button
    state: active
    outlineWidth: medium
  other-hover:
    target: other
    state: hover
    opacity: 1
  other-active:
    target: other
    state: active
    borderColor: "{colors.neutral-1}"
    backgroundColor: "{colors.neutral-1}"
  other-disabled:
    target: other
    state: disabled
    opacity: 0
  link-focus:
    target: link
    state: focus
    textColor: "{colors.ink}"
    outline: "{colors.accent-2} solid 1px"
    outlineColor: "{colors.accent-2}"
    outlineWidth: 1px
  link-hover:
    target: link
    state: hover
    textDecoration: none
  button-focus:
    target: button
    state: focus
    textDecoration: none
    backgroundColor: "#8F0B1E"
  link-active:
    target: link
    state: active
    borderColor: "rgb(17, 17, 17)"
    backgroundColor: "rgba(0, 0, 0, 0)"
breakpoints:
  - width: 375
    containerWidth: 375
    gridColumns: 1
    navLinksVisible: 14
    menuToggleVisible: true
    headingPx: 32
    bodyPx: 16
    sectionPaddingX: 0
  - width: 768
    containerWidth: 768
    gridColumns: 4
    navLinksVisible: 14
    menuToggleVisible: true
    headingPx: 40
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1024
    containerWidth: 1024
    gridColumns: 4
    navLinksVisible: 14
    menuToggleVisible: true
    headingPx: 48
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1280
    containerWidth: 1024
    gridColumns: 4
    navLinksVisible: 14
    menuToggleVisible: true
    headingPx: 48
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1440
    containerWidth: 1024
    gridColumns: 5
    navLinksVisible: 14
    menuToggleVisible: true
    headingPx: 48
    bodyPx: 16
    sectionPaddingX: 0
coverage:
  statesFound: 104
  gradientsFound: 0
  rolesUnassigned: 6
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: true
  semanticRampDeclared: true
---

# Design System Inspired by CPA Australia

## 1. Visual Theme & Atmosphere

CPA Australia's design system embodies professional authority and institutional trust through a bold, high-contrast colour strategy anchored in deep maroon and striking premium red accents. The visual language combines corporate formality with moments of vibrant confidence—particularly through the use of premium red—creating a sense of progressive financial expertise. The system leverages generous whitespace, clean typography in Avenir, and sharp, unrounded edges (except for pill-shaped call-to-action buttons) to convey precision and clarity. Dark hero sections with full-bleed imagery establish hierarchy, while alternating light bands and strategic use of the brand's maroon canvas create rhythm across long pages. The overall mood is confident, accessible, and forward-thinking—designed to inspire members and position CPA Australia as a leader in accounting and finance.

**Key Characteristics**

- **Deep maroon canvas** with high-contrast white text for primary content
- **Premium red accent** (`#C8102E`) used sparingly for high-priority CTAs and visual highlights
- **Deep red accent** (`#7F1D1D`) for secondary interactive states and feature highlights
- **Sharp, unrounded edges** for cards and containers; pill-shaped (9999px) primary buttons
- **Avenir sans-serif** throughout, with generous weight variation (300–700) and clean hierarchy
- **Full-bleed hero sections** with photography and text overlay
- **Colour-blocking elevation strategy**—depth comes from surface colour changes, not shadows
- **Generous section spacing** (up to 136px) creating breathing room between content zones
- **High-contrast interactive states** with clear hover, focus, and active feedback

## 2. Color Palette & Roles

### Primary

- **Primary / Brand** (`{colors.primary}` — `#C8102E`): Primary CTA fills, brand accent, active state indicators, and secondary button backgrounds
- **Brand Accent** (`{colors.accent}` — `#9E1B32`): Core premium red used in hero bands, navigation accents, and link states

### Accent Colors

- **Deep Red** (`{colors.accent-2}` — `#7F1D1D`): Secondary interactive and feature highlight backgrounds; used in card overlays and button hover states
- **Premium Red** (`{colors.accent-3}` — `#C8102E`): High-priority call-to-action fills, visual highlights, and emphasis elements
- **Rose** (`{colors.accent-5}` — `#F43F5E`): Decorative accent, no measured role
- **Slate Grey** (`{colors.accent-4}` — `#7B868C`): Decorative accent, no measured role
- **Crimson (Decorative)** (`{colors.accent-1}` — `#E11D48`): Decorative accent, no measured role

### Neutral Scale

- **Canvas** (`{colors.canvas}` — `#4C0519`): Default page background; primary dark surface
- **Surface Alt** (`{colors.surface-alt}` — `#F7F7F7`): Alternating section band; light background for contrast
- **Ink** (`{colors.ink}` — `#FFFFFF`): Headings and primary text on dark backgrounds
- **Body** (`{colors.body}` — `#FFE4E6`): Body copy on dark surfaces; light rose-tinted text
- **On Primary** (`{colors.on-primary}` — `#222222`): Label colour on brand/light surfaces
- **Muted** (`{colors.muted}` — `#767676`): Captions, secondary text, and de-emphasized content
- **Faint** (`{colors.faint}` — `#303030`): Tertiary text and placeholder text
- **Neutral** (`{colors.neutral-1}` — `#444444`): Neutral fill, no specific measured role

### Semantic / Status

- **Error** (`{colors.error}` — `#B00020`): Error states and destructive actions

## 3. Typography Rules

### Font Family

**Primary:** Avenir (sans-serif)
Fallback stack: `Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

**Secondary:** Helvetica Neue (fallback system)
Fallback stack: `'Helvetica Neue', Helvetica, Arial, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Display | Avenir | 48px | 700 | 1.13 | 0px | H1 / hero headlines |
| Heading Large | Avenir | 36px | 700 | 1.22 | 0px | H2 / section titles (primary) |
| Heading Large Alt | Avenir | 36px | 600 | 1.22 | 0px | H2 / alternative heading weight |
| Heading Medium | Avenir | 28px | 700 | 1.14 | 0px | H3 / subsection titles |
| Heading Small | Avenir | 22px | 700 | 1.18 | 0px | H4 / card titles |
| Heading Extra Small | Avenir | 18px | 700 | 1.33 | 0px | H5 / compact headings |
| Body Large | Avenir | 18px | 300 | 1.33 | 0px | Large body text, light weight |
| Body Extra Large | Avenir | 24px | 300 | 1.33 | 0px | Large introductory copy |
| Body Medium | Avenir | 16px | 400 | 1 | 0px | Standard body and link text |
| Body Medium Strong | Avenir | 16px | 700 | 1.25 | 0px | Emphasis within body, labels (H4/H5) |
| Body Small | Avenir | 14px | 400 | 1.43 | 0px | Secondary body, fine print |
| Body Small Strong | Avenir | 14px | 700 | 1.71 | 0px | Label text (strong) |
| Button Medium | Avenir | 16px | 400 | 1.15 | 0px | Standard button text |
| Button Medium Strong | Avenir | 16px | 700 | 1.75 | 0px | Emphasis button text |
| Label | Avenir | 14px | 400 | 1.71 | 0px | Form input labels |
| Caption Extra Small | Avenir | 12px | 400 | 1.33 | 0px | Captions and metadata |
| Caption Extra Small Strong | Avenir | 12px | 700 | 1 | 0px | Uppercase caption (all-caps decoration) |

### Principles

- **Weight contrast** is primary—display and heading sizes use 700, while body and intro copy employ 300–400 for visual breathing room
- **Line height** scales loosely with size, from 1 (compact button text) to 1.43 (small body)—tighter for interactive elements, generous for reading
- **Letter spacing** is uniformly 0px—no tracking adjustments across any size
- **Hierarchy relies on size, weight, and colour**, not letterforms—Avenir's neutrality ensures focus remains on content
- **Avenir is the only declared font family**—Helvetica Neue appears in fallback stacks only; always use Avenir when available

## 4. Component Stylings

### Buttons

#### Primary (Premium Red Fill)
- **Background:** `{colors.primary}` (`#C8102E`)
- **Text Colour:** `#FFFFFF`
- **Padding:** `12px 24px`
- **Font:** `{typography.button-md-strong}` (16px, weight 700)
- **Border Radius:** `{rounded.full}` (9999px / pill-shaped)
- **Border:** `2px solid {colors.primary}` (`#C8102E`)
- **Box Shadow:** `{colors.accent}` (`#9E1B32`) `0px 0px 0px 0px` (inset accent layer)
- **Hover:** Background transitions to `#8F0B1E` with text `#FFFFFF`; shadow expands
- **Active:** Border and background both `#7F1D1D` (`{colors.accent-2}`); medium outline width
- **Focus:** Outline `rgba(200, 16, 46, 0.6) solid 2px`; border radius `3px`

#### Secondary (Deep Red)
- **Background:** `{colors.accent-2}` (`#7F1D1D`)
- **Text Colour:** `#FFFFFF`
- **Padding:** `12px 24px`
- **Font:** `{typography.button-md-strong}` (16px, weight 700)
- **Border Radius:** `{rounded.full}` (9999px / pill-shaped)
- **Border:** `0px none`
- **Box Shadow:** `{colors.accent}` (`#9E1B32`) `0px 0px 0px 0px` (flat)
- **Hover:** Background becomes `#8F0B1E` with white text
- **Active:** Border and background become `#7F1D1D` (`{colors.accent-2}`)
- **Focus:** Outline `rgba(200, 16, 46, 0.6) solid 2px`; border radius `3px`

#### Ghost / Tertiary (Premium Red)
- **Background:** `{colors.accent-3}` (`#C8102E`)
- **Text Colour:** `#FFFFFF` (white on premium red)
- **Padding:** `12px 24px`
- **Font:** `{typography.button-md-strong}` (16px, weight 700)
- **Border Radius:** `{rounded.full}` (9999px / pill-shaped)
- **Border:** `0px none`
- **Box Shadow:** `rgb(76, 5, 25) 0px 0px 0px 0px` (flat)
- **Hover:** Background becomes `rgb(255, 255, 255)` with text `#4C0519`
- **Active:** Background becomes `#8F0B1E` (deep red)
- **Focus:** Outline `rgba(200, 16, 46, 0.6) solid 2px`; border radius `3px`

### Cards & Containers

#### Full-Bleed Hero Card
- **Background:** `{colors.canvas}` (`#4C0519`) — deep maroon
- **Text Colour:** `{colors.ink}` (`#FFFFFF`)
- **Padding:** `{spacing.xxl}` (`64px`) top and bottom; `0px` sides (full-bleed)
- **Border Radius:** `{rounded.none}` (0px / sharp)
- **Border:** `0px none`
- **Box Shadow:** none (flat / colour-blocked depth)
- **Height:** ~736px (measured); typically contains background image overlay, headline, and CTA

#### Default Small Card
- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Colour:** `rgb(48, 48, 48)` (dark grey)
- **Padding:** `0px` (content-dependent)
- **Border Radius:** `{rounded.none}` (0px / sharp)
- **Border:** `0px none`
- **Box Shadow:** none (flat)
- **Height:** ~376px (measured); used for secondary content blocks

#### Light Section Band (Alternating Surface)
- **Background:** `{colors.surface-alt}` (`#F7F7F7`)
- **Text Colour:** `{colors.faint}` (`#303030`)
- **Padding:** `{spacing.lg}` to `{spacing.xxl}` (36–64px vertical, context-dependent)
- **Border Radius:** `{rounded.none}` (0px / sharp)
- **Border:** `0px none`
- **Box Shadow:** none (flat)
- **Usage:** Alternating section backgrounds to break visual monotony

### Inputs & Forms

#### Text Input / Form Field
- **Background:** `#FFFFFF`
- **Text Colour:** `{colors.on-primary}` (`#222222`)
- **Padding:** `12px 16px` (standard form padding)
- **Font:** `{typography.label}` (14px, weight 400)
- **Border Radius:** `{rounded.xs}` (3px / subtle round)
- **Border:** `{border.thin}` (1px) solid `rgb(200, 200, 200)` (light grey)
- **Focus:** Outline `#7F1D1D solid 1px`; border radius `3px`; label becomes red
- **Placeholder:** `{colors.faint}` (`#303030`)

### Navigation

#### Primary Navigation Link
- **Text Colour:** `{colors.ink}` (`#FFFFFF`) on dark; `{colors.on-primary}` (`#222222`) on light
- **Font:** `{typography.body-md}` (16px, weight 400)
- **Padding:** `{spacing.xs}` (`16px`) horizontal
- **Border Radius:** `{rounded.none}` (0px / no rounding)
- **Background:** Transparent by default
- **Hover:** Background becomes `rgba(200, 16, 46, 0.12)` (red wash) or `rgba(0, 0, 0, 0.5)` (dark) depending on context
- **Focus:** Background reset to initial (transparent)
- **Active:** Underline or background highlight (measured as red accent bar on "Members" tab)

#### Menu Toggle (Mobile)
- **Visible at:** 375px viewport and below (always shown on this extraction)
- **Icon:** Three-line hamburger menu
- **Trigger:** Toggles navigation drawer or menu overlay

### Links (Standalone / Inline)

#### Default Link (Dark Background)
- **Text Colour:** `#FFFFFF` (white) on red background; `{colors.body}` (`#FFE4E6`) on maroon background
- **Background:** `{colors.accent-3}` (`#C8102E`) or `{colors.accent-2}` (`#7F1D1D`)
- **Padding:** `{spacing.md}` (`24px`)
- **Font:** `{typography.body-md}` (16px, weight 400)
- **Border Radius:** `{rounded.none}` (0px / sharp)
- **Text Decoration:** None by default; underline on hover
- **Hover:** Background and text may invert or brighten; box-shadow adds emphasis (`0px 0px 0px 3px` outline in white or contrast colour)
- **Focus:** Outline `#7F1D1D solid 1px`; box-shadow `rgb(254, 205, 211) 0px 0px 0px 3px`
- **Active:** Border and background become `#7F1D1D` (`{colors.accent-2}`)

## 5. Layout Principles

### Spacing System

**Base Unit:** `8px` (`{spacing.xxs}`)

**Scale:**
- `{spacing.xxs}` = `8px` — micro spacing, hairlines, minimal gaps
- `{spacing.xs}` = `16px` — small gaps between elements
- `{spacing.sm}` = `20px` — component padding, small section margins
- `{spacing.md}` = `24px` — standard card padding, medium gaps
- `{spacing.lg}` = `36px` — section padding, prominent vertical rhythm
- `{spacing.xl}` = `40px` — large section padding
- `{spacing.xxl}` = `48px` — hero section padding, major visual breaks
- `{spacing.xxxl}` = `64px` — full hero card padding (top/bottom)
- `{spacing.section}` = `136px` — maximum breathing room between major sections (rarely used)

**Usage Context:**
- Buttons and inline elements: `8–16px` (`xxs`–`xs`)
- Card interiors and form fields: `16–24px` (`xs`–`md`)
- Section margins (vertical): `36–48px` (`lg`–`xxl`)
- Alternating band spacing: `48–64px` (`xxl`–`xxxl`)
- Hero sections: `64px` minimum (`xxxl`)

### Grid & Container

- **Max Width (Desktop):** `1024px` — content remains centered at 1280px and wider viewports; columns stay consistent
- **Grid Columns:** `4–5 columns` (measured at 1024px+; mobile uses single column)
- **Section Padding Horizontal:** `0px` on all breakpoints — full-bleed sections are standard; internal content uses card padding
- **Content Centering:** Automatic margin (center alignment) on fixed-width containers beyond max-width breakpoint

### Whitespace Philosophy

The system embraces **generous negative space** as a core design principle. Hero sections use `64px` top/bottom padding to isolate imagery and bold text. Alternating light and dark bands (via `{colors.canvas}` and `{colors.surface-alt}`) create visual rhythm without relying on decorative elements. Section-to-section gaps range from `36–48px`, providing clear content separation. Form fields and buttons receive `24px` padding to ensure touch targets feel spacious. The result is an open, confident layout that prioritizes readability and hierarchy over density.

### Border Radius Scale

- `{rounded.none}` = `0px` — **Cards, containers, buttons (secondary), images** — sharp edges reinforce corporate formality
- `{rounded.xs}` = `3px` — **Form inputs, focus outlines** — subtle softness for interactive elements
- `{rounded.full}` = `9999px` — **Primary buttons, pill-shaped CTAs** — distinctive round treatment signals primary action

### Border Widths

- `{border.thin}` = `1px` — Form input borders, focus outlines on links and secondary elements
- `{border.medium}` = `2px` — Button borders (primary), bold focus states, active indicators

## 6. Depth & Elevation

The system employs a **colour-blocking elevation strategy** rather than layered shadows. Depth is created through contrasting surface colours (deep maroon vs. light grey vs. premium red) and shifts in visual plane, not multi-tier shadow systems.

| Level | Treatment | Use |
|---|---|---|
| Flat (Base) | No shadow; `box-shadow: none` | Default cards, sections, hero bands |
| Accent Underlay | `box-shadow: {colors.accent} 0px 0px 0px 0px` (appears as inset or flat) | Primary buttons, feature highlights |
| Red Accent Shadow | `box-shadow: {colors.accent-3} 0px -4px 0px 0px inset` (inset, bottom edge) | Button emphasis, visual punctuation |
| Focus Ring | `outline: rgba(200, 16, 46, 0.6) solid 2px; border-radius: 3px` | Interactive focus states |
| Hover Lift (Soft Shadow) | `box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px, rgba(0, 0, 0, 0.12) 0px 6px 16px` | Card hover states (rarely used; measured on one card) |

**Elevation Philosophy:**

The system eschews traditional drop-shadow hierarchies in favour of **colour-driven depth**. Surface changes (deep maroon to light grey, solid fills to transparent overlays) convey layering more effectively than subtle shadow scales. When shadows do appear (e.g., on card hover), they use low-opacity black (`0.08–0.12`) for restraint. Focus states employ a crisp `2px` outline in red, not shadow, to signal keyboard navigation. This approach maintains clarity and ensures the design remains accessible at all sizes.

### Opacity Levels

- `0.85` (85%) — Semi-opaque overlays, reduced visual weight
- `0.70` (70%) — Lighter overlays, background tints
- `0.5` (50%) — Navigation hover states, semi-transparent menu backgrounds
- `0.45` (45%) — Deep overlay effects
- `0` (0% / fully transparent) — Disabled button variant (`opacity: 0`)

### Z-index / Layering

The stacking order supports sticky navigation, modals, and toast notifications:

- **Base:** `z-index: 1–4` — Content, cards, default elements
- **Sticky / Header:** `z-index: 100–898` — Navigation stays accessible; 898 is sticky menu header
- **Modal / Overlay:** `z-index: 899` — Topmost interactive layer (measured value for modals)

## 7. Do's and Don'ts

### Do

- **Use the pill-shaped (9999px) border radius exclusively for primary call-to-action buttons** — they are the visual signature of high-priority actions
- **Leverage colour-blocking for depth** — shift background colours between sections (maroon to light grey to premium red) to create hierarchy without shadows
- **Maintain full-bleed hero sections** with `64px` padding (top/bottom), bold typography, and background imagery
- **Apply `16px` body text** (`{typography.body-md}`) as the default for all standard content; scale up to `18px` (`{typography.body-lg}`) only for introductory or feature copy
- **Use weight contrast (300–700)** to build typographic hierarchy — avoid relying solely on size
- **Set form inputs to 3px border-radius** (`{rounded.xs}`) and 1px border stroke (`{border.thin}`) for subtle softness against sharp container edges
- **Pair premium red (`#C8102E`) accents with maroon (`#4C0519`) backgrounds** for maximum contrast and visual pop
- **Apply focus outlines** (red `rgba(200, 16, 46, 0.6) solid 2px`) to all interactive elements for keyboard accessibility
- **Stick to the spacing scale** (8px increments) — use `24px` for standard padding, `36–48px` for section gaps
- **Use white text (`#FFFFFF`)** on deep maroon canvas; use dark grey (`#222222` or `#303030`) on light surfaces

### Don't

- **Don't use rounded corners** (beyond 3px) on cards, containers, or secondary buttons — the system is determinedly sharp except for primary CTAs
- **Don't invent new shadow layers** — the system uses flat colour-blocking; if depth is needed, change background colour instead
- **Don't mix button border-radius** — primary buttons are `9999px` (pills), all others are `0px` (sharp)
- **Don't exceed `1024px` content width** on desktop — allow margins to expand beyond that, but keep readable text within the 1024px max-width
- **Don't use body text smaller than 14px** — caption size is the minimum, and only for metadata or tertiary content
- **Don't apply drop shadows to multiple nested elements** — the system relies on colour shifts, not shadow stacking
- **Don't mix Avenir with other display fonts** — Helvetica Neue is fallback only; Avenir is the sole declared typeface
- **Don't omit focus indicators** — every button, link, and input must show a visible focus state for keyboard users
- **Don't place text directly on photographs without a dark overlay or solid background band** — maintain contrast for readability
- **Don't use the `#C8102E` premium red** for body text — it is reserved for accent highlights and CTAs; use white or light rose (`#FFE4E6`) for readable text on dark backgrounds

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Grid Columns | Content Column | Display Heading | Body Font | Section Padding-X | Key Changes |
|---|---|---|---|---|---|---|---|
| Mobile | 375px | 1 | 375px | 32px | 16px | 0px | Single column, full-bleed sections, hamburger menu active |
| Tablet | 768px | 4 | 768px | 40px | 16px | 0px | Four-column grid, menu may remain visible (site measures always show menu toggle) |
| Desktop | 1024px | 4 | 1024px | 48px | 16px | 0px | Standard desktop layout, 1024px max-width for content |
| Wide | 1280px+ | 4–5 | 1024px (fixed) | 48px | 16px | 0px | Max-width fixed; columns expand in margins; heading stays 48px |

**Derivation note:** Heading size jumps from 32px (375px) → 40px (768px) → 48px (1024px), then plateaus. Grid columns remain 4 across all measured desktop widths; a potential 5th column may activate beyond 1440px but was not observable in extraction. Section padding-x stays `0px` on all breakpoints, indicating full-bleed design from mobile to desktop.

### Touch Targets

- **Minimum button height:** `48px` (measured on primary buttons)
- **Minimum button width:** `56px` (measured on pill-button variant)
- **Minimum link/icon target:** `40px` × `40px` (industry standard; not explicitly measured, but inferred from button sizing)
- **Form input height:** `40–52px` (padding-dependent; 12px top/bottom + ~16–28px line-height)
- **Navigation link padding:** `{spacing.xs}` (`16px`) horizontal; sufficient for thumb-tap on mobile

### Collapsing Strategy

- **Hero sections:** Maintain full-bleed, `64px` padding at all breakpoints; background image scales responsively
- **Typography:** Display heading shrinks from 48px (desktop) → 40px (tablet) → 32px (mobile); body remains `16px` throughout
- **Grid:** Collapses from 4 columns (1024px+) → single column (mobile); cards stack vertically
- **Navigation:** Menu toggle (hamburger) is visible at all measured breakpoints; nav links collapse into drawer/overlay on mobile
- **Section spacing:** Margins remain generous (`36–48px`) at all sizes; never compress below `24px` vertical
- **Max-width:** Content stays centred at `1024px` max-width on desktop; no horizontal scroll; margins grow on wider screens

## 9. Agent Prompt Guide

### Quick Color Reference

When implementing layouts, prioritize these semantic mappings:

- **Primary CTA / Brand Accent:** `{colors.primary}` (`#C8102E`) — pill-shaped button fills, brand highlights
- **Secondary / Feature Background:** `{colors.accent-2}` (`#7F1D1D`) — card overlays, secondary CTAs
- **Highlight / Call-Out:** `{colors.accent-3}` (`#C8102E`) — warning, important links, accent bands
- **Page Canvas / Hero:** `{colors.canvas}` (`#4C0519`) — deep maroon default background, full-bleed sections
- **Light Section Alternate:** `{colors.surface-alt}` (`#F7F7F7`) — contrast band, off-white sections
- **Primary Text / Headings:** `{colors.ink}` (`#FFFFFF`) — on dark backgrounds (maroon canvas)
- **Body Copy (Dark Background):** `{colors.body}` (`#FFE4E6`) — light rose-tinted readable text
- **Secondary / Muted Text:** `{colors.muted}` (`#767676`) — captions, metadata, de-emphasised copy
- **Tertiary / Placeholder:** `{colors.faint}` (`#303030`) — inputs, placeholders, fine print
- **Text on Light Surfaces:** `{colors.on-primary}` (`#222222`) — labels, form text on white/light grey

### Iteration Guide

1. **Start with full-bleed hero:** Set background to `{colors.canvas}` (`#4C0519`), padding `64px` top/bottom, headline in `{typography.display}` (48px, weight 700), text in `{colors.ink}` (`#FFFFFF`).

2. **Primary buttons are pills (9999px radius):** Always apply `border-radius: 9999px` to main CTAs; use `{colors.primary}` (`#C8102E`) fill or `{colors.accent-3}` (`#C8102E`) for high-priority actions.

3. **Secondary buttons stay sharp (0px radius):** All other buttons, cards, containers use `border-radius: 0px`; no middle ground.

4. **Colour-block depth, don't shadow:** When layering elements, shift background colours (maroon → light grey → premium red) instead of adding box-shadows. Reserve shadows for hover states only.

5. **Form inputs:** `border-radius: 3px`, `border: 1px solid light-grey`, padding `12px 16px`, font `14px weight 400`, focus state `outline: 2px solid rgba(200, 16, 46, 0.6)`.

6. **Typography ladder:** Display (48px, 700) → Heading Large (36px, 700) → Heading Medium (28px, 700) → Body Large (18px, 300) → Body (16px, 400) → Body Small (14px, 400). All in Avenir; letter-spacing always 0px.

7. **Spacing increments:** Use `24px` (`{spacing.md}`) for default padding; jump to `36px` (`{spacing.lg}`) for section breaks; reserve `64px` (`{spacing.xxxl}`) for hero padding. Never go below `16px` (`{spacing.xs}`) for content margins.

8. **Focus indicators are mandatory:** Every button, link, input must show `outline: 2px solid rgba(200, 16, 46, 0.6)` or equivalent red ring on keyboard focus; test with Tab key.

9. **Hover states use colour shifts:** Buttons shift background to `#8F0B1E` or `#7F1D1D`; links underline or invert; never rely on shadow alone.

10. **Mobile layout collapses to single column:** At 375px, switch grid to 1 column, keep full-bleed sections, show hamburger menu toggle; heading shrinks to 32px, body stays 16px.

## 10. Known Gaps

- **Cross-origin stylesheets:** Some CSS rules may be missing due to CORS restrictions; interaction details (e.g., modal animations, transition timing) were not fully captured.
- **No gradients or decorative mesh patterns** were detected in the extraction. The system uses solid colours and photography only.
- **Six colours (Accent 1–2, Accent 4–5) have no measured semantic role.** They appear in the palette but their function is undeclared; treat them as decorative or reserved for future feature use.
- **Interaction states were not exhaustively captured.** Only CSS-declared states from the extracted stylesheets are documented. Possible states that may exist but were not measured: `:disabled` (button), `:invalid` (form), scrollable section behaviours, drag-and-drop feedback.
- **Surfaces behind authentication were not visited.** Member-only pages, logged-in states, and account dashboards may use different components or colour roles.
- **Dark mode or theme variants** were not observed. The extraction represents a single visual theme (deep maroon canvas as default); no light-mode alternative was detected or measured.
- **Animated transitions and micro-interactions:** Timing functions, animation durations, and transition curves were not extracted. Use sensible defaults (e.g., `0.2–0.3s` easing for button hover state changes).
- **Icon specifications:** No icon font, SVG library, or sizing guide was extracted. Icons are used but not systematically documented.
- **Accessibility / ARIA patterns:** Focus management, live regions, and semantic HTML landmarks are inferred from button and input states only; a full WCAG audit was not performed.
- **Print styles:** No print media queries or print-specific colours were measured.

---

## Token Reference

```yaml
tokens:
  colors:
    primary: "#C8102E"
    accent: "#9E1B32"
    accent-1: "#E11D48"
    accent-2: "#7F1D1D"
    accent-3: "#C8102E"
    accent-4: "#7B868C"
    accent-5: "#F43F5E"
    canvas: "#4C0519"
    surface-alt: "#F7F7F7"
    ink: "#FFFFFF"
    body: "#FFE4E6"
    muted: "#767676"
    faint: "#303030"
    on-primary: "#222222"
    neutral-1: "#444444"
    error: "#B00020"
  typography:
    display:
      size: 48px
      weight: 700
      lineHeight: 1.13
      letterSpacing: 0px
    heading-lg-strong:
      size: 36px
      weight: 700
      lineHeight: 1.22
      letterSpacing: 0px
    heading-lg:
      size: 36px
      weight: 600
      lineHeight: 1.22
      letterSpacing: 0px
    heading-md:
      size: 28px
      weight: 700
      lineHeight: 1.14
      letterSpacing: 0px
    heading-sm:
      size: 22px
      weight: 700
      lineHeight: 1.18
      letterSpacing: 0px
    heading-xs:
      size: 18px
      weight: 700
      lineHeight: 1.33
      letterSpacing: 0px
    body-xl:
      size: 24px
      weight: 300
      lineHeight: 1.33
      letterSpacing: 0px
    body-lg:
      size: 18px
      weight: 300
      lineHeight: 1.33
      letterSpacing: 0px
    body-md:
      size: 16px
      weight: 400
      lineHeight: 1
      letterSpacing: 0px
    body-md-strong:
      size: 16px
      weight: 700
      lineHeight: 1.25
      letterSpacing: 0px
    button-md:
      size: 16px
      weight: 400
      lineHeight: 1.15
      letterSpacing: 0px
    button-md-strong:
      size: 16px
      weight: 700
      lineHeight: 1.75
      letterSpacing: 0px
    body-sm:
      size: 14px
      weight: 400
      lineHeight: 1.43
      letterSpacing: 0px
    body-sm-strong:
      size: 14px
      weight: 700
      lineHeight: 1.71
      letterSpacing: 0px
    label:
      size: 14px
      weight: 400
      lineHeight: 1.71
      letterSpacing: 0px
    caption-xs:
      size: 12px
      weight: 400
      lineHeight: 1.33
      letterSpacing: 0px
    caption-xs-strong:
      size: 12px
      weight: 700
      lineHeight: 1
      letterSpacing: 0px
      textTransform: uppercase
  spacing:
    xxs: 8px
    xs: 16px
    sm: 20px
    md: 24px
    lg: 36px
    xl: 40px
    xxl: 48px
    xxxl: 64px
    section: 136px
  rounded:
    none: 0px
    xs: 3px
    full: 9999px
  border:
    thin: 1px
    medium: 2px
  shadows:
    sm-button: "#7F1D1D 0px 0px 0px 0px"
    md-button-inset: "#C8102E 0px -4px 0px 0px inset"
  opacity:
    hover: 0.85
    muted: 0.70
  zindex:
    base: 1
    sticky: 100
    modal: 899
```
