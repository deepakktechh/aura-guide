# AURA GUIDE — Brand Guidelines & Design System

> **File:** `AURA_GUIDE_BRAND_GUIDELINES.md`  
> **Version:** 1.0 — proposed brand system  
> **Prepared:** 17 October 2026  
> **Product:** AURA GUIDE  
> **Project title:** Spatial Awareness Attachment for the Visually Impaired  
> **Tagline:** *Feel the space. Navigate with confidence.*  
> **Visual direction:** **Premium Hybrid** — futuristic dark mode + exceptionally clear, calm light mode  
> **Enforcement:** **Flexible within the brand system**; accessibility, factual accuracy, security and approval boundaries are mandatory.  
> **Status:** Design specification only. This document does **not** authorize building a website, running commands, adding dependencies, changing other files, deploying, or programming hardware.

## How the Antigravity agent must use this document

1. Read this file **together with** `AURA_GUIDE_ANTIGRAVITY_MASTER_PRD.md` before proposing design work. If that file is not available in the workspace, request it; do not pretend to have read it.
2. Treat the **master PRD as the source of truth for product features, technology, development phases and current hardware**. Use this document for visual identity, messaging, component behavior and accessibility conventions.
3. Follow the user's **most recent explicit instructions and approvals**. If this file conflicts with approved technical/safety requirements, surface the issue and ask rather than silently changing scope.
4. **Never interpret reading this file as permission to implement it.** First explain what you want to change, show the impacted files and commands, and ask for approval. Make only the specifically approved change; report results and stop.
5. Flexibility means you may choose among approved layout patterns and restrained visual treatments **within** the palette, hierarchy and accessibility constraints; it does not permit randomly changing the brand.
6. Do not assume the example logo, website screens, live maps, battery numbers, user testimony, field testing, or product certifications exist. Label placeholders and simulations clearly.

---

## 01. Brand Overview

### Identity

- **Brand name:** AURA GUIDE (public wordmark may render as `Aura Guide`; preserve spelling).
- **Descriptive project title:** Spatial Awareness Attachment for the Visually Impaired.
- **Core promise:** Extra **frontal spatial awareness** communicated through touch.
- **Original brand line:** *Feel the space. Navigate with confidence.*
- **Product category:** Assistive-technology **prototype**, with a proposed future IoT companion ecosystem.
- **Primary experience:** A responsive public website plus a **clearly simulated** Guardian Dashboard in the initial development phase.

### Mission

Explore an accessible, haptic-first wearable that supplements existing mobility tools with a simple forward-proximity cue while respecting independence, safety, privacy and user choice.

### Vision

Build a trustworthy, inclusive assistive-technology product through transparent testing, collaboration with people with visual impairments, and responsible iteration.

### Audience

| Audience | What the brand experience should provide |
|---|---|
| People with visual impairments | Dignified language, accessible information, understandable limitations, control and consent |
| Family members / prospective guardians | Clear device status concepts, consent boundaries, readable alerts and trustworthy information |
| Faculty / project judges | Evidence-grounded explanation of the concept, hardware and research |
| Potential partners / mentors | Credible roadmap, real progress and precise separation of available versus planned features |
| Developers / testers | Consistent UI patterns, understandable states and reproducible demonstrations |

**Positioning:** Innovative **and** dependable. Never imply the prototype replaces a white cane, professional orientation-and-mobility training, or emergency response services.

## 02. Brand Personality

Use these five traits to guide visual and verbal decisions:

| Trait | Express it through | Avoid |
|---|---|---|
| Human-centered | Practical examples, agency, respectful photography | Pity-based storytelling and exaggerated rescue narratives |
| Confident | Simple layouts, direct feature names, evidence-backed claims | Hype, fear and miracle claims |
| Forward-looking | Restrained luminous accents and clear future roadmap | Unreadable sci-fi clutter |
| Calm | Spacious screens, consistent hierarchy, predictable interactions | Flashing alerts, jitter and constant animation |
| Transparent | Honest demo labels, timestamps and limitations | Fake live metrics, inflated capabilities, fabricated data |

**Brand feeling:** *Clear technology that supports human confidence*, not *technology that controls a person's movement*.

## 03. Brand Identity & Logo Usage

### Current asset status

- **No final approved standalone logo asset is guaranteed by the existing PRD.** Until the user supplies/approves one, use an accessible text wordmark: **AURA GUIDE**.
- The logo must not be inferred from a slide, institution seal, or generated icon without explicit confirmation.
- The SRM institution logo is **not** the AURA GUIDE product logo; use it only in permitted academic contexts and do not imply institutional endorsement of a commercial product.

### Wordmark rules

- Set the wordmark in the approved heading typeface, bold or semibold, with strong contrast.
- Keep consistent capitalization and generous clear space (recommended minimum: height of one capital **A** on every side).
- On dark backgrounds, use the light wordmark with optional cyan accent; on light backgrounds, use deep navy/ink.
- Minimum digital presentation: large enough to remain readable in the navbar; avoid shrinking to a decorative mark with no accessible name.
- Always expose an accessible name such as **“Aura Guide home.”**

### Forbidden treatments

Do not stretch, skew, rotate, add harsh glow/drop shadow, place on busy imagery, use a low-contrast gradient wordmark, add ™/® without authorization, or silently create a new corporate logo.

### Brand asset change process

If a new mark is proposed, provide a preview, light/dark versions, a plain-text fallback, and accessibility notes; **ask for separate approval before making it the default**.

## 04. Color System

**Principle:** one recognizable brand identity across two modes. Dark mode feels advanced and cinematic; light mode feels clear and reassuring. They are equal-quality themes, **not** an inverted filter.

### Core palette

| Role | Dark theme | Light theme | Use |
|---|---|---|---|
| Page background | `#071321` | `#F5F9FC` | App/page canvas |
| Primary surface | `#102238` | `#FFFFFF` | Navbar, panels, dialogs |
| Secondary / bento surface | `#142B43` | `#EAF3F8` | Cards and sections |
| Primary text | `#F2F8FF` | `#11283A` | Body and headings |
| Secondary text | `#B9CBDC` | `#40576B` | Help text, explanations |
| Primary action | `#36D6E9` | `#087C91` | Main CTAs and interactive accents |
| Text on primary action | `#071321` | `#FFFFFF` | Primary button label |
| Brand companion accent | `#14B8A6` | `#087C91` | Subtle illustrations and secondary highlights |
| Border / divider | `#345069` | `#CEDFE9` | Hairlines and separators |
| Focus treatment | `#F9DF74` | `#1358A8` | Clear keyboard focus (adjust if needed for surroundings) |

**Contrast examples (calculated for the specified solid pairs):** dark primary text on dark page ≈ **17.5:1**; dark secondary text on dark page ≈ **11.2:1**; light primary text on light page ≈ **14.3:1**; light secondary text on light page ≈ **7.1:1**; white on light-theme primary action ≈ **4.9:1**. These examples do **not** verify overlays, hover states, transparent panels or every possible pairing. Audit the **rendered UI**.

### Semantic colors

| Semantic use | Recommended ink / fill starting point | Rule |
|---|---|---|
| Success / connected | `#117C60` (on light) or brighter accessible green on dark | Pair with text + icon; never green alone |
| Warning / nearing obstacle | `#B45309` (on light) or lighter amber on dark | Pair with `Approaching` label |
| Danger / high-priority or close | `#B91C1C` (on light) or appropriate accessible red on dark | Distinguish **close obstacle** from **real SOS** |
| Informational | Brand teal/cyan family | Use sparingly for neutral information |
| Disabled | Muted surface and text with clearly recognizable shape | Do not use as an excuse for illegible essential information |

- Keep cyan/teal as the brand's recognizable accent family; do not introduce unrelated neon purple/red into standard pages without a reason.
- Ensure states are communicated using **text + icon + color**, not color alone.
- Limit dominant accent colors: one primary and at most one supporting accent per view; charts may use a restrained accessible series palette.
- Never copy a dark-mode glow unchanged into light mode when it reduces clarity.

## 05. Typography & Readability

| Usage | Preferred family | Fallback |
|---|---|---|
| Hero and main headings | **Space Grotesk** | Arial / system sans-serif |
| Body, forms, tables, dashboards | **Inter** | Segoe UI / system sans-serif |
| Monospace telemetry snippets (rare) | A readable system monospace | Consolas / monospace |

These are **proposed** typefaces, not a claim that font files are already installed. Obtain third-party font assets only through an approved implementation step and respect licenses.

### Type scale (starting reference)

| Semantic style | Desktop | Mobile | Weight / line height |
|---|---:|---:|---|
| Hero heading | 56–64 px | 36–42 px | 650–700 / about 1.1 |
| Page heading | 36–44 px | 28–34 px | 650–700 / 1.15–1.2 |
| Section heading | 24–30 px | 21–26 px | 600–700 / 1.25 |
| Card title | 18–20 px | 18–20 px | 600–650 / 1.3 |
| Standard text | 16–18 px | 16 px | 400–500 / 1.5–1.65 |
| Supporting label | 14–16 px | 14–16 px | 500–600 / 1.4 |
| Dense table metadata | 13–14 px | 14 px preferred | 450–600 / 1.4 |

- Use sentence case for most headings, labels and controls. Avoid ALL CAPS blocks except small metadata labels and the wordmark.
- Restrict body paragraph width to roughly **60–75 characters** for readability.
- Support browser zoom and OS text scaling; text must not overlap or disappear at **200% text resize** and **400% zoom** in the appropriate viewport.
- Avoid very light-weight type and tiny text inside charts or illustrations.

## 06. Spacing, Layout & Composition

- Use an **8 px major spacing rhythm**, with a 4 px half-step for compact UI: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96.
- Default comfortable content width: approximately **1160–1280 px**, adaptable by page purpose.
- Use generous outer gutters: mobile **16–20 px**, tablet **24–32 px**, desktop **32–64 px**.
- Prefer a **12-column desktop grid**, **6–8 columns tablet**, and **4-column or single-column mobile** organization.
- Use bento grids for quick-scanning features and status summaries, not for long prose or safety-critical instructions.
- Maintain consistent vertical alignment and hierarchy across public pages and dashboard screens.
- Use negative space intentionally. Avoid filling every available area with decorative panels.
- Treat these as responsive starting points, not immovable numbers: component content should determine actual breakpoints.

### Corner radii

- Small controls: **8–10 px**.
- Standard cards/forms: **12–16 px**.
- Major marketing feature blocks: **20–24 px** where appropriate.
- Buttons may be rounded or pill-shaped but must remain consistent within a control family.

## 07. UI Component Rules

### Buttons

- **Primary:** filled brand action color; one clear main CTA per section/surface.
- **Secondary:** outlined or soft surface, visibly distinct from primary.
- **Tertiary:** text/ghost for low-emphasis actions.
- **Destructive:** separated from non-destructive actions; explicit confirmation when necessary.
- Every button has clear **default, hover, focus, pressed, loading and disabled** states.
- Minimum recommended pointer target: **44 × 44 CSS pixels**, especially on mobile; keyboard focus must be visible.
- Never create decorative buttons or “Coming soon” buttons that misleadingly appear functional.

### Cards and bento modules

- Clear heading, focused data, optional short description, and visible action if actionable.
- Each metric includes a **unit**, **source** (demo/live), and **timestamp** where relevant.
- Use no more than a small number of hierarchy levels inside one card.
- Entire card clickable only if clearly indicated, keyboard-operable, and logically one action.

### Forms / inputs

- Persistent labels; placeholders do not replace labels.
- Plain-language descriptions and error messages positioned close to their fields.
- Keyboard-usable sliders and switches; indicate numeric value and units.
- When settings are simulated, label the action as **“Apply in demo”**, not **“Update wearable.”**

### Modals, navigation and charts

- Modal dialogs need an accessible title, initial focus, focus containment, Escape/close behavior as appropriate and an obvious exit.
- Use visible active route state and avoid hiding key routes solely behind icon-only controls.
- Charts need descriptive headings, units, textual summaries and accessible tabular alternatives where appropriate.
- Provide **loading, no-data, offline, stale-data, error and success** states rather than placeholders that resemble real readings.

## 08. Dark Mode & Light Mode

**Hybrid identity:** Dark mode emphasizes innovative technology; light mode prioritizes bright, calm readability. Both should feel like the same product.

- Offer **Light / Dark / System** choices with labels (not only a sun/moon icon).
- Respect user system preference until the user selects a different mode.
- Persist preference locally **after approval for implementation**, without exposing sensitive content.
- All illustrations, graphs, icons and logos require a legible version on both themes.
- Colors are semantic roles, not one-off hard-coded hex values on every component.
- Avoid ultra-low-contrast glass borders, faded chart labels and grey-on-grey input fields.
- A user switching themes must never lose a filled form or currently selected simulated device state.

### Recommended mood per theme

| UI aspect | Dark | Light |
|---|---|---|
| Hero | Deep navy with restrained glow and focused message | Spacious white/soft-blue with crisp product visual |
| Cards | Tinted navy with subtle elevated distinction | White cards on pale canvas with thin dividers |
| CTA | Bright cyan with dark legible label | Deeper teal with white legible label |
| Data charts | Controlled bright series on dark | Deeper accessible series on pale |
| Decorative effects | Small cyan edge light, optional | Soft teal tint, very light shadow |

## 09. Visual Effects — Glass, Glow & Depth

Use premium restraint; **effects are supporting details, never content containers that reduce readability**.

- Glassmorphism: optional on marketing hero overlays and secondary navigation, **not** a required effect for everyday forms or critical alert panels.
- If glass is used, keep text on an opaque enough backing to meet contrast requirements across the actual image/background.
- Soft radial gradients may highlight the product silhouette or illustrate proximity, but do not replace factual diagrams.
- Shadows should indicate elevation, not create thick floating “gaming UI” outlines.
- Prefer hairline dividers and subtle surface contrast over glowing borders on every card.
- Avoid excessive blurs, lens flares, permanent particle backgrounds, rainbow gradients and distracting scroll effects.
- When unsure, choose the less decorative variant.

## 10. Animation, Micro-interactions & Motion

Motion should answer a user question: *What changed? What is interactive? What needs attention?*

| Interaction | Suggested treatment | Guidance |
|---|---|---|
| Button hover | Gentle color/elevation shift | ~120–180 ms |
| Card state transition | Subtle background or border change | ~150–250 ms |
| Route/content appearance | Small fade/translation | ~180–300 ms, optional |
| Demo proximity indicator | Smooth but restrained state change | Reflect discrete threshold changes truthfully |
| Urgent status | Static high-contrast label and icon | No flashing, strobing or looped shake |

- Honor `prefers-reduced-motion`: remove unnecessary movement, preserve all information and controls.
- Never signal proximity only by motion or glow: also show `Safe`, `Approaching`, `Close`, or `Offline` text.
- Avoid autoplay audio, vibration of the user's phone, forced parallax and animation that prevents navigation.
- Use loading indicators with text so progress isn't communicated only by an indeterminate spinner.

## 11. Iconography

- Prefer **Lucide** line icons for the website; an approved alternate library may be used if visually consistent.
- Keep one stroke family and consistent viewBox/visual weight (starting point: 1.75–2 px stroke at 20–24 px icon size).
- Pair icons with text for essential actions and all hazard/connection states.
- Meaning matters more than aesthetics: use location pin for location, shield for consent/security, battery for battery, activity for readings, bell for notifications.
- Do not use human disability-related icons as decorative shorthand for all people with visual impairments.
- Mark decorative icons as hidden from assistive technologies when implemented; meaningful icons need accessible labels.
- Do not rely on emoji as primary navigation or vital-status icons.

## 12. Photography, Hardware Images & Illustrations

### Visual priorities

1. **Genuine user-supplied prototype photo**: classroom Arduino/breadboard assembly; label it **“Current breadboard prototype”**, not a market-ready belt.
2. **User-supplied team photo**: only when user approves site publication and corresponding description.
3. **Accurate explanatory diagram**: one central sensor, two motors, and frontal distance-to-haptics loop.
4. **Clearly labeled conceptual renders**: optional illustration of future product form factor, not evidence of a finished device.

### Accuracy rules

- Current sensing is from **one forward-facing VL53L0X**. The current **two motors may activate together** to indicate closeness, **not independent left-vs-right object direction**.
- Current controller is **Arduino UNO R3**; **ESP32, GPS, live Wi-Fi telemetry and physical SOS** belong to future development unless separately verified.
- Never insert a photo of unrelated electronics and label it the working AURA GUIDE prototype.
- Do not re-use an old HC-SR04/multi-sensor sketch as an image of the *current* hardware without an explicit **“early concept; not current hardware”** label.
- Team images should not identify which visible person is which without supplied confirmation. Avoid claiming all four members are visible when fewer may appear.
- Image alt text describes **what is shown and why it matters**, not a keyword dump. Decorative backgrounds have no redundant accessible description.

### Illustration direction

Use clean technical line art, clear callouts, sufficient whitespace and restrained navy/cyan/teal. Avoid overcomplicated photorealistic medical/safety imagery or scenes implying guaranteed collision prevention.

## 13. Content Strategy & Brand Voice

### Voice

Use **simple, precise, calm, inclusive, encouraging** writing. Lead with user benefit, then explain how it works, and state limitations close to claims.

### Approved messaging examples

| Context | Prefer | Avoid |
|---|---|---|
| Hero | “Feel the space. Navigate with confidence.” | “Never hit an obstacle again.” |
| Product description | “A haptic-first wearable prototype for frontal obstacle awareness.” | “A fully autonomous navigation system.” |
| Current hardware | “One ToF sensor estimates distance ahead.” | “AI sees every obstacle around you.” |
| Haptic behavior | “Both motors increase their cue as an obstacle approaches.” | “The left motor identifies objects on the left.” |
| Research | “In our exploratory survey (n = 10), 70% preferred combined haptic and audio alerts.” | “70% of visually impaired people want this.” |
| Simulator | “DEMO — simulated distance; no wearable connected.” | “Live device: 45 cm” when invented |
| Future roadmap | “GPS-based sharing is planned and would require consent.” | “Your guardian can track you anywhere now.” |
| SOS | “SOS simulation — no message is sent.” | “Emergency services notified” in a demo |

### Copy standards

- Prefer **person-first or identity-first terms as each individual prefers**; use neutral language such as “people with visual impairments” in broad public copy.
- Avoid “helpless,” “suffers from,” “normal people,” “cures blindness,” and fear-inducing copy.
- Use **“wearer”** for the person using the device; **“guardian”** only when they genuinely have an authorized role.
- Keep CTAs specific: `Explore the prototype`, `See how it works`, `Try demo dashboard`.
- Every research chart includes sample size and methodology caveat; survey interest is not measured product effectiveness.
- Format numbers with units (cm, %, battery level when actually measured, local times with time zone when relevant).
- Use Hindi/Hinglish only if the user requests that voice for the live website; default public copy is professional plain English.

## 14. Accessibility Standards (Mandatory)

**Target:** WCAG **2.2 AA** where applicable, with manual review and assistive-technology testing where possible. A set of tokens alone does not guarantee compliance.

- **Contrast:** at least **4.5:1** for normal text, **3:1** for large text, and **3:1** for essential non-text interface boundaries; verify every real pairing.
- **Keyboard:** every interactive feature has logical Tab order, visible focus, functional Enter/Space and Escape behavior where appropriate; no keyboard traps.
- **Semantic UI:** recognizable landmarks, one meaningful H1 per page, nested headings, real labels and status announcements.
- **Forms:** error prevention, labeled fields, meaningful errors and clear descriptions; no inaccessible placeholder-only controls.
- **Touch/pointer:** target WCAG minimums and aim for approximately **44 × 44 CSS px** on touch-heavy interfaces.
- **Zoom / text resizing:** verify at **200% text resize** and **400% zoom**, including long labels and dashboard cards.
- **Reduced motion:** reflect user preference without hiding warnings.
- **Alerts:** provide text + icon + accessible live-region announcements when appropriate; avoid excessive announcements from rapidly changing simulated distance.
- **Charts:** accessible summary plus table where necessary; chart meaning must not depend only on color.
- **Maps:** textual location/status equivalent, accessible controls and explicit location-availability state.
- **Themes:** readable in both modes, including focus, disabled and hover states.
- **Media:** captions/transcripts for explanatory videos and useful alt text for images.
- **Authentication (future):** accessible login patterns and non-punitive recovery flows.

**Real user testing:** Consult people with visual impairments before claiming an experience is usable or safer. Automated tools and internal demos cannot establish field safety.

## 15. Responsive Design

### Practical breakpoint guidance (adjust to actual content)

| Range | Layout expectation |
|---|---|
| Compact phones (around 320–479 px) | Single column, concise nav, 16–20 px gutters, no horizontal scroll |
| Larger phones (around 480–767 px) | Single column or occasional paired statistic cards |
| Tablet (around 768–1023 px) | Two-column bento modules, collapsible dashboard rail |
| Desktop (around 1024–1439 px) | Desktop navigation, flexible multi-column analytics |
| Wide displays (1440 px and above) | Controlled max-width, whitespace, no stretched paragraphs |

- Use a content-first approach: cards stack without losing alert priority or chart labels.
- Navigation must remain usable at high zoom and in landscape orientation.
- Tables may scroll **within their region** with contextual labels or convert to meaningful stacked rows; avoid a horizontally scrolling entire page.
- Keep key device state, source label and warning context visible in mobile dashboard views.
- Test pointer and keyboard navigation; do not rely on hover for essential actions.

## 16. Trust, Safety, Consent & Privacy (Mandatory)

### Current vs. future product truth

| Feature | Correct status to present now |
|---|---|
| Arduino UNO + one VL53L0X + two motors | **Current physical prototype** |
| Distance feedback display on website | **Simulated until live sensor input is proven** |
| Battery percentage / uptime | **Sample demo data unless electrically measured** |
| Guardian live GPS tracking | **Future; needs hardware, consent and verified integration** |
| SOS alert dispatch | **Future; UI-only simulation must say no alert sent** |
| Cloud remote motor settings | **Future; demo settings affect only simulation** |
| Audio and AI object recognition | **Future concepts, not current features** |
| Detection direction | **Frontal proximity only; not left/right hazard localization** |

### Guardian features must empower, not surveil

- Wearer must retain meaningful control over any future sharing, access, scope and revocation.
- Default real location sharing **off** until informed opt-in and verified controls exist.
- Never show demo coordinates as someone's actual position; avoid visually persuasive maps that imply real-time tracking.
- Provide clear **source state** on all telemetry: `DEMO` vs verified real integration (and `Offline`/`Stale` when applicable).
- Never silently replace failing live telemetry with fabricated values.
- Avoid implying a browser-only mock SOS alarm contacts authorities or guardians.
- Protect real credentials, personal data and logs; no secrets in screenshots, source files, or a public Git repository.
- Do not claim any device is medically certified, crash-preventing or suitable as a sole mobility aid.
- Before actual product use, human-factors trials, safe electrical design, power management and reliability checks are necessary.

## 17. Design Do's & Don'ts

| Do | Don't |
|---|---|
| Use consistent dark/light semantic tokens | Hard-code a different accent into each new page |
| Use bento grids for concise dashboards | Turn every paragraph into a card |
| Make one primary action per main section obvious | Put five competing glowing CTAs side by side |
| Keep actual prototype photos authentic | Present AI artwork as completed hardware |
| Say **Demo** on simulated graphs and alerts | Label sample readings as verified live data |
| Provide keyboard and reduced-motion experiences | Add flashing alert animations or inaccessible hover-only controls |
| Use honest survey sample-size labels | Treat n = 10 research as a large representative study |
| Use precise icons with text | Use ambiguous icon-only critical actions |
| Clarify the belt complements mobility aids | Say the belt replaces a white cane |
| Request approval for brand-breaking changes | Change logo, stack or identity automatically |
| Show clear error/offline/empty states | Show misleading “Connected” status by default |
| Make creativity intentional and reviewable | Use generic crowded dashboards or gratuitous 3D everywhere |

## 18. AI Agent Enforcement & Approval Rules

### Enforcement categories

**Category A — Mandatory: no discretion**

- Product and capability accuracy, non-exaggeration, source labels and privacy consent.
- Accessibility fundamentals, readable contrast and functional navigation.
- Explicit human approval before creating/editing files, running commands, installing packages, connecting external services, purchasing, committing/pushing, publishing or deploying, as governed by the master PRD.
- No invented certifications, test results, testimonials or identity claims.

**Category B — Brand defaults: flexible within limits**

- The defined palette and fonts should remain the starting point; gradients, layout composition, module widths, elevation and section-specific background treatments may vary when justified.
- A designer may propose an alternate shape, composition or accessible chart palette, but must **explain the difference** and keep the brand recognizable.
- Light/dark theme layouts need not be pixel-identical; shared hierarchy and affordances must remain consistent.

**Category C — Approval required for exceptions**

- Replacing the brand name, tagline, wordmark/logo or base palette.
- Introducing a third official font family or fundamentally different UI language.
- Publicly publishing real user/team imagery or sensitive project data if permission is not established.
- Marketing assertions about live GPS/SOS, remote control, safety performance or other new capabilities.
- New production integrations, tracking, authentication, notifications or hardware functions.

### Agent's required design workflow

1. **Read:** inspect the master PRD, this brand file, and any current approved design assets.
2. **Plan:** describe exact approved page/component, design tokens, content sources, files to be touched and commands to run.
3. **Ask:** request a clear, scoped **YES/APPROVE**; do not interpret the PRD as blanket consent.
4. **Implement only the approved scope**, with reusable tokens and simple components.
5. **Verify:** responsive layout, both themes, keyboard, contrast, reduced motion, demo labeling, accurate hardware representation.
6. **Report:** list changes and tests run; distinguish tested, untested and blocked items.
7. **Stop:** ask before next page, component group, phase or deployment.

**Conflict priority:** Most recent explicit user instruction → approved product/safety constraints in master PRD → these brand guidelines → optional aesthetic experimentation. Do not use this priority to bypass security or accessibility obligations; instead raise conflicts for approval.

---

## Appendix A. Design Tokens Reference (Specification; Not Website Code)

The names below are **suggested semantic identifiers** for a future approved implementation. They are **not CSS or a request to write code now**. Keep a single central token source once implementation is approved.

### A1. Theme tokens

| Semantic token name | Dark value | Light value |
|---|---|---|
| `color.background` | `#071321` | `#F5F9FC` |
| `color.surface` | `#102238` | `#FFFFFF` |
| `color.surface.subtle` | `#142B43` | `#EAF3F8` |
| `color.text.primary` | `#F2F8FF` | `#11283A` |
| `color.text.secondary` | `#B9CBDC` | `#40576B` |
| `color.action.primary` | `#36D6E9` | `#087C91` |
| `color.action.onPrimary` | `#071321` | `#FFFFFF` |
| `color.accent.secondary` | `#14B8A6` | `#087C91` |
| `color.border` | `#345069` | `#CEDFE9` |
| `color.focus` | `#F9DF74` | `#1358A8` |

### A2. Non-color tokens

| Group | Suggested identifiers | Guidance |
|---|---|---|
| Space | `space.1` 4px, `space.2` 8px, `space.3` 12px, `space.4` 16px, `space.6` 24px, `space.8` 32px, `space.12` 48px, `space.16` 64px | Reuse before inventing a new value |
| Radii | `radius.control` 10px, `radius.card` 16px, `radius.feature` 24px | Allow justified component-specific variation |
| Type | `font.heading` Space Grotesk, `font.body` Inter | Include system fallbacks |
| Heading sizes | `type.hero`, `type.page`, `type.section`, `type.card` | Responsive variants; see Section 05 |
| Elevation | `shadow.card`, `shadow.popover`, `shadow.dialog` | Low-contrast, restrained and theme-aware |
| Motion | `motion.fast` 150ms, `motion.base` 220ms, `motion.slow` 300ms | User reduced-motion overrides |
| Container | `layout.maxContent` approx. 1200px | Adapt based on context and accessibility |
| Z-index roles | `layer.nav`, `layer.dropdown`, `layer.dialog`, `layer.toast` | Centralize; avoid random large numbers |

### A3. Token review

All tokens are **proposed values**, not production validation. Check rendered contrast, focus ring visibility, chart palette legibility and typography in real browsers. Alternate approved token values should be recorded as an intentional brand decision.

## Appendix B. Approved Component & Copy Patterns

These are **design and copy examples only**, **not JSX/HTML/CSS components**.

### B1. Public hero

- Eyebrow: `Assistive technology · Prototype`
- Heading: `Feel the space. Navigate with confidence.`
- Supporting text: `A haptic-first wearable prototype that explores tactile cues for frontal obstacle awareness.`
- Main action: `Explore the prototype`
- Secondary action: `Try interactive demo`
- Footnote where relevant: `Designed to complement existing mobility aids.`
- Visual: authentic prototype photo, accurate sensor illustration, or clearly marked concept rendering.

### B2. Device-status module (demo)

- Title: `Device overview`
- Source indicator: `DEMO — simulated data`
- State: `Simulation active` (not “Real device online”)
- Distance readout: `80 cm · simulated` (illustrative example only)
- Warning: `Approaching · Both haptic motors indicated`
- Action: `Open proximity simulator`
- Help: `Your hardware is not connected to this demo.`

### B3. Proximity states

| State | Text | Visual concept | Hardware accuracy |
|---|---|---|---|
| Safe | `Safe — no frontal warning` | Quiet sensor arc, calm status chip | No claimed all-around clearance |
| Approaching | `Approaching — gentle vibration cue` | Amber + text + icon | Two motors may activate together |
| Close | `Close — stronger vibration cue` | Stronger red emphasis without flashing | Two motors may activate together |
| Offline | `No sensor data available` | Muted panel with explicit explanation | **Never** show “Safe” when sensor is offline |

### B4. SOS and location (future/demo)

- Future card: `SOS notifications — planned feature`
- Demo confirmation: `This only simulates an SOS event. No alert will be sent.`
- Example map label: `Illustrative demo map — not a person's live location`
- Current hardware: `GPS tracking is not available on the current prototype.`

### B5. Empty/error states

- Empty analytics: `No demo events yet. Adjust the proximity simulator to create example events.`
- Disconnected live mode: `Device offline. Live readings are unavailable; the last known status is shown with a timestamp.`
- Permission unavailable: `This information has not been shared with your account.`
- Do **not** silently swap these for sample success data.

## Appendix C. Brand Quality Checklist & Review Handoff

### C1. Before proposing work

- [ ] Confirm which one approved page/component/phase is in scope.
- [ ] Read the master PRD and these guidelines; record any conflict.
- [ ] Identify real assets available and ask for missing ones; do not fabricate.
- [ ] State files/commands/dependencies that would be changed; obtain explicit approval.

### C2. During design implementation (only after approval)

- [ ] Uses the core semantic token names rather than inconsistent local values.
- [ ] Both dark and light modes look deliberate and readable.
- [ ] CTA, navigation, forms and dashboard states have clear meaning.
- [ ] Every metric/chart has units and data-source labels.
- [ ] Current one-sensor/two-motor hardware depiction is accurate.
- [ ] Planned GPS/SOS/AI/audio features are honestly labeled.
- [ ] Icons, illustrations, imagery and fonts are consistent and licensed/approved.
- [ ] No overdone gradients, animated noise or inaccessible glass panels.

### C3. Quality checks after approved implementation

- [ ] Keyboard Tab/Enter/Space/Escape behavior verified where applicable.
- [ ] Normal/large text, focus rings and essential graphic contrast evaluated.
- [ ] Screen-reader labels and status announcements considered/tested.
- [ ] Reduced-motion mode works; no flashing hazards.
- [ ] Mobile narrow width, tablet, desktop and zoom/reflow checked.
- [ ] No broken links, clipped labels, dead buttons or fake success states.
- [ ] Demo indicators visible at both global and relevant local data points.
- [ ] Error/offline/stale/loading/empty states are understandable.
- [ ] Actual executed tests and unresolved problems are reported honestly.

### C4. Required agent handoff message after each authorized task

Provide these six fields in plain language:

1. **Approved scope completed:** what was requested and what was actually done.
2. **Files changed:** exact list (or `none`).
3. **Brand consistency:** any approved variations and rationale.
4. **Evidence:** screenshots, manual checks, commands/tests run, and observed results.
5. **Known issues:** accessibility, device truthfulness, browser/layout or technical gaps.
6. **Next proposed step:** describe it but **DO NOT START** until approved.

---

### Document relationship and provenance

- This file is the **brand/design companion** to `AURA_GUIDE_ANTIGRAVITY_MASTER_PRD.md` (17 October 2026). It does not replace that PRD or its approval gates.
- The earlier `aura_guide_ai_agent_prd.md` outlined Phase 2 ESP32/GPS/guardian features; these remain future-facing unless implemented and independently verified.
- Project identity, hardware distinctions, tagline and exploratory survey framing were drawn from the AURA GUIDE project context and pitch/PRD; palette, typography, component tokens and design rules in this file are **proposed brand recommendations** pending creative acceptance.
- Accessibility standard for reference: [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/). Actual compliance requires testing, not just documentation.

**Final instruction to Antigravity:** Read, summarize and ask permission. Do not create or edit the website, backend, firmware, other Markdown files, external services or assets simply because this brand document is present.
