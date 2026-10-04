# VigyanSetu — Design Document

**Product:** VigyanSetu — Unified Scientific Archive & Outreach Platform
**Tagline:** From Research Data to Public Knowledge
**Source:** PRD v1.0 (SIH proposal / prototype blueprint)
**This document covers:** brand identity, logo and favicon, design principles, information architecture, visual design system, every page and key flow, AI-specific interface patterns, accessibility and multilingual design, front-end implementation mapping, and the SIH demo storyboard.

---

## Contents

1. Design brief: what the PRD asks the design to do
2. The name and the big idea
3. Design principles
4. Brand identity (logo, favicon, voice)
5. Visual language: the "provenance" system
6. Colour
7. Typography (including Indian scripts)
8. Layout, grid, spacing, shape
9. Iconography and illustration
10. Information architecture and navigation
11. Component library
12. AI interface patterns (the heart of the product)
13. Public portal pages
14. Expedition Digital Twin
15. Dataset experience
16. Search, Research Assistant and Knowledge Graph
17. Researcher portal
18. Admin and curator portal
19. Content Studio (research-to-outreach)
20. Multilingual and Learn experience
21. Access, embargo and preservation UI
22. Analytics and knowledge-gap UI
23. Motion and interaction
24. States: loading, empty, error, partial
25. Accessibility
26. Content design and microcopy
27. Responsive behaviour
28. Implementation guide (Next.js, Tailwind, shadcn/ui)
29. SIH demo design: storyboard of the 11-step flow
30. Presentation (PPT) design guidance
31. Design QA checklist
32. Appendix: asset list, token export, sample data

---

## 1. Design brief: what the PRD asks the design to do

The PRD defines VigyanSetu as a scientific knowledge infrastructure with four layers: **preservation, scientific knowledge, intelligent discovery and public outreach**. It names four design-critical truths that this document turns into interface decisions.

| PRD statement | What it means for design |
|---|---|
| "Not merely a repository or CMS" (§1) | The interface must show **connections** (researcher → project → expedition → dataset → publication → media → story), not just lists of files. Every page needs a visible "connected to" area. |
| "AI assists, humans decide" (PP-02) | The interface must make it instantly clear what is **AI-suggested** and what is **human-approved**. This is the central visual idea (section 5). |
| "Source first" (PP-01) | Every AI answer, summary and outreach claim shows its **evidence**: document, page, section. Citations are first-class UI, not footnotes. |
| "Public and researcher needs are different" (PP-07) | One data model, several experiences: Public (warm, story-led), Student (simple, visual), Researcher (dense, precise), Curator/Admin (queue-driven, efficient). |

### 1.1 Who the design serves

Citizens, students, researchers, archivists, scientific curators, communications officers, institutional administrators and external academics (PRD §7). Roles and permissions follow the PRD table in §8.

### 1.2 What the design must prove at the SIH demo

The end-to-end loop in PRD §102:

`UPLOAD → AI METADATA → REVIEW → ARCHIVE → CONNECT → SEARCH → RAG → OUTREACH → VERIFY → APPROVE → PUBLISH`

The visual system is built so that a judge can see each stage change state on screen: a dotted "suggested" look becomes a solid "approved" look as a human reviews it.

---

## 2. The name and the big idea

**Vigyan** (विज्ञान) means science. **Setu** (सेतु) means bridge. VigyanSetu is a **bridge from science to society**, and the tagline names both banks: *Research Data* on one side, *Public Knowledge* on the other.

The bridge has three jobs in the product, and the design expresses each:

1. **Connect assets to each other** — the knowledge graph. In the logo: nodes on the arch joined by hangers.
2. **Carry knowledge across** — from fragmented to unified, from technical to understandable. In the logo: the deck changes from separate dashes to one solid span.
3. **Hold weight safely** — trust, evidence, governance. In the logo: a strong arch with a single warm point at the top, the "approved" signal.

Every major screen uses a simple recurring story: **something starts as fragments or suggestions (dashed, dotted) and becomes connected and verified (solid)**.

---

## 3. Design principles

| # | Principle | PRD link | In practice |
|---|---|---|---|
| D1 | **Show the source** | PP-01, §26, §30 | Every claim, summary or answer has a citation chip that opens the exact page or section. |
| D2 | **Make AI visible, never invisible** | PP-02, §16 | AI output has a distinct dotted treatment and the label *AI suggested* until a person accepts it. |
| D3 | **Connections are content** | §23, PP-04 | Relationship panels sit next to the main content on every resource page. |
| D4 | **One record, many views** | PP-03, PP-07 | Audience switch (Researcher / Student / Public) changes presentation, not facts. |
| D5 | **Calm, scientific, welcoming** | §3 | Quiet colour, generous space, one warm accent. Looks like an institution people trust, not a dashboard toy. |
| D6 | **Indian by default** | §34, PP-10 | Multilingual layout, Indic typography, native-script language names, dates and numbers in local formats. |
| D7 | **Accessible by default** | §52 | WCAG 2.2 AA is a build requirement, not a polish step. |
| D8 | **Status is never colour alone** | §30, §44 | Every status has colour, icon, text and (for review states) a line style. |
| D9 | **Efficient for experts** | §18, §32 | Queues, keyboard shortcuts, side-by-side review, bulk accept. |
| D10 | **Fail honestly** | §26 | When evidence is missing, the interface says so plainly rather than producing a confident answer. |

---

## 4. Brand identity

### 4.1 Logo

All files are in `vigyansetu-brand/`.

| File | Use |
|---|---|
| `logo-mark.svg` / `logo-mark-512.png` | Mark only: avatars, app tile, small spaces |
| `logo-mark-reversed.svg` / `logo-mark-reversed-512.png` | Mark on dark (Neel) backgrounds |
| `logo-full.svg` / `logo-full.png` | Mark + wordmark + tagline (primary lockup) |
| `logo-full-reversed.svg` / `.png` | Primary lockup on dark backgrounds |
| `logo-bilingual.svg` / `.png` | Mark + wordmark + विज्ञानसेतु (Hindi/Devanagari) for Indian-language contexts, posters, certificates |

All wordmarks are **converted to outlines** (no font dependency) so they render identically everywhere.

**Concept.** An arch bridge drawn as a data diagram.
- The **arch** is the bridge and the "setu" idea.
- **Three nodes on the arch**, joined by **hangers** to the deck, are the knowledge graph: separate things held together by relationships. The two outer nodes are teal; the **centre node is turmeric amber**, the single warm point that stands for human-approved, verified knowledge.
- The **deck** starts as **three separate dashes** (fragmented archives, files, silos) and ends as **one solid span** (unified, preserved, public knowledge). This reads left to right as "From Research Data to Public Knowledge".

**Wordmark.** "VigyanSetu" in a custom-outlined bold grotesque (Anek Latin, 700). "Vigyan" in Neel, "Setu" in Sagar, so the two halves of the name are visible. Written as one word with a capital S (CamelCase). In running text and legal copy, "VigyanSetu" is used (not all capitals). The PRD's capitalised "VIGYANSETU" is acceptable for document titles only.

**Devanagari wordmark.** विज्ञानसेतु set in Anek Devanagari SemiBold, outlined, with correct conjunct shaping (ज्ञ).

**Clear space.** Keep clear space equal to the height of the amber apex node (about one-fifth of the mark height) on all sides.

**Minimum sizes.** Mark: 20 px on screen, 8 mm in print. Primary lockup: 140 px wide on screen, 35 mm in print. Below 20 px use the favicon.

**Colour versions.** Full colour on light; reversed on Neel; one-colour Neel; one-colour white. The amber node may become white in one-colour versions.

**Do not:** stretch, rotate, outline the mark, recolour the amber node to another hue, reorder the dashes, add shadows or gradients, set the wordmark in all caps, or place the full-colour logo on photographs without a solid backing.

### 4.2 Favicon

- `favicon.svg` is the master: a rounded Neel tile (radius 7 on a 32 grid) holding a simplified bridge: a pale arch, a solid deck and the **amber apex dot**.
- Simplified from the main mark for legibility at 16 px: the nodes and hangers are removed, the fragmented deck is merged into one bar, and the amber dot is enlarged.
- Exports: `favicon.ico` (16, 32, 48), `favicon-16.png`, `favicon-32.png`, `favicon-48.png`, `favicon-180.png` (Apple touch icon), `favicon-192.png`, `favicon-512.png` (web manifest, `any maskable`).
- `site.webmanifest` is included with name, theme colour `#12264A` and background `#EAF2F6`.

Add to the `<head>` in `frontend/app/layout.tsx`:

```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="apple-touch-icon" href="/favicon-180.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#12264A">
```

Environment variants (so staff never confuse sites): staging favicon has a small Sindoor-red corner dot; development has a violet dot.

### 4.3 Brand voice

**Voice:** clear, careful, welcoming. Scientific without jargon; confident about sources, modest about conclusions.

| Context | Tone | Example |
|---|---|---|
| Public story | Warm, curious | "In 2025, scientists sailed into the Bay of Bengal to listen to the ocean breathe." |
| Student | Friendly, direct | "Plankton are tiny living things that float in water. Let's see why they matter." |
| Researcher | Precise, neutral | "Salinity measured at 5 stations, 2 m intervals, CTD cast." |
| AI answer | Plain, sourced | "The report describes five sampling stations [1, p. 12]." |
| No evidence | Honest | "I could not find sufficient evidence in the available institutional collection to answer this reliably." (exact wording from PRD §26) |
| Error | Helpful | "This file is larger than 5 GB. Use the resumable uploader." |

Rules: sentence case; active voice; explain a term once; no hype words ("revolutionary", "breakthrough") unless the source says so; every button names its action ("Accept suggestion", "Send for review").

---

## 5. Visual language: the "provenance" system

This is the signature idea of the product. It is how the design shows PP-01 and PP-02 at a glance.

### 5.1 Line styles carry meaning

| Style | Meaning | Where |
|---|---|---|
| **Dotted amber outline** | AI-suggested. Not yet accepted by a person. | Metadata fields marked `AI_SUGGESTED`, AI drafts, generated chart suggestions, suggested relationships |
| **Dashed neutral outline** | Incomplete or draft (human work in progress) | Draft records, empty required fields |
| **Solid teal outline / left rule** | Human-accepted or published | Accepted fields, published resources |
| **Solid green + tick** | Verified against evidence | `VERIFIED` claims |
| **Solid amber fill + half-tick** | Partially supported | `PARTIALLY_SUPPORTED` claims |
| **Solid violet + eye** | Needs human review | `NEEDS_REVIEW` claims |
| **Solid red + cross** | Unsupported | `UNSUPPORTED` claims |

The same motif appears in the logo deck (dashes → solid). Teach it once in onboarding with a one-line legend ("Dotted = AI suggested. Solid = approved by a person.") and repeat it as a persistent legend in the review screens.

### 5.2 The "Accept" transition

When a reviewer accepts an AI-suggested field, the dotted amber outline animates (200 ms) to a solid teal rule and the badge changes from *AI suggested* to *Reviewed by [name], [date]*. This is the single most important micro-interaction in the demo (reduced-motion users get an instant change).

### 5.3 Evidence everywhere

Citation chips such as `[1] p. 12` appear inline after AI sentences. Clicking opens the **Evidence drawer** (section 12.3) showing the highlighted passage in the source document.

### 5.4 The bridge motif in layout

A slim "span" divider (a thin line that changes from dashes to solid across its width) marks transitions on the homepage: between "Research" and "Public" sections. It is used at most twice per page and is decorative (hidden from assistive technology).

### 5.5 Two experiences, one language

- **Public portal:** light, spacious, story-led, large images, serif reading text.
- **Researcher / Curator / Admin portals:** denser, neutral surfaces, tables, side panels, monospace for identifiers.
Both use the same colours, status system and components, so a curator moving between "preview public page" and "review queue" never feels lost.

---

## 6. Colour

Names are drawn from Indian words so the palette belongs to the product.

### 6.1 Core palette

| Token | Name (meaning) | Hex | Role |
|---|---|---|---|
| `--neel` | Neel (deep indigo) | `#12264A` | Primary text, header, dark surfaces, logo |
| `--sagar` | Sagar (sea) | `#0E7C86` | Primary action, links, accepted/solid rule |
| `--hawa` | Hawa (air) | `#EAF2F6` | Page background (light), quiet panels |
| `--haldi` | Haldi (turmeric) | `#F2A30F` | The single warm accent: AI-suggested marker, apex, highlights |
| `--sindoor` | Sindoor (vermilion) | `#C8372D` | Errors, unsupported claims, destructive actions |
| `--patta` | Patta (leaf) | `#2E7D4F` | Verified, success |
| `--jamun` | Jamun (plum) | `#6B3FA0` | Needs review |
| `--safed` | Safed (white) | `#FFFFFF` | Cards, inputs |

Neutral ramp (cool, derived from Neel): `#F6F9FB`, `#DDE6EC`, `#B7C6D1`, `#8497A6`, `#5B6E80`, `#3A4C68`, `#1C2D4D`.

Supporting tints: Sagar-100 `#D3EDEF`, Sagar-300 `#7FD0D6`, Haldi-100 `#FDEFCB`, Haldi-700 `#8A5A00` (text on amber), Sindoor-100 `#F9DCD9`, Patta-100 `#D9EEE1`, Jamun-100 `#E8DFF3`.

### 6.2 Semantic tokens

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#EAF2F6` | `#0B1830` |
| `--surface` | `#FFFFFF` | `#12264A` |
| `--surface-2` | `#F6F9FB` | `#1A3159` |
| `--text` | `#12264A` | `#EAF2F6` |
| `--text-muted` | `#3A4C68` | `#B7C6D1` |
| `--border` | `#DDE6EC` | `#2C4570` |
| `--primary` | `#0E7C86` | `#2BA3AE` |
| `--primary-text` | `#FFFFFF` | `#08202C` |
| `--link` | `#0B6670` | `#7FD0D6` |
| `--ai` (suggestion) | `#F2A30F` | `#F6B93B` |
| `--ai-bg` | `#FDEFCB` | `#3B3010` |
| `--verified` | `#2E7D4F` | `#5BC184` |
| `--review` | `#6B3FA0` | `#B494DC` |
| `--unsupported` | `#C8372D` | `#F0766D` |
| `--focus` | `#F2A30F` ring over Neel outline | same |

### 6.3 Contrast notes (checked)

- Neel on Hawa: about 13:1. Neel on White: about 15:1.
- White on Sagar: about 4.9:1 (passes AA for normal text).
- Sindoor on White: about 5.2:1. Patta on White: about 5.0:1. Jamun on White: about 7.4:1.
- **Haldi is never used as text on light backgrounds.** Use Haldi-700 `#8A5A00` for amber text, and Haldi only as a fill, outline or icon.
- Focus ring: 3 px Haldi outer ring with 2 px Neel inner ring, visible on both light and dark.

### 6.4 Data and chart palette

Categorical (colour-blind safe): Sagar `#0E7C86`, Haldi `#F2A30F`, Neel `#12264A`, Jamun `#6B3FA0`, Sindoor `#C8372D`, Sky `#5BA8D6`, Leaf `#6BA84F`, Slate `#8497A6`. Sequential (e.g. temperature, salinity): `#EAF2F6 → #7FD0D6 → #0E7C86 → #12264A`. Diverging (anomalies): `#C8372D → #F2A30F → #EAF2F6 → #5BA8D6 → #12264A`. Always add direct labels, markers or patterns; never colour alone.

### 6.5 Dark mode

Optional but supported on all portals. Neel-based surfaces; photographs gain a 1 px inner border at 10 percent white; status colours switch to the lighter dark-mode variants above, keeping the same icons and line styles.

---

## 7. Typography

### 7.1 Typefaces

| Role | Family | Why |
|---|---|---|
| **UI and headings** | **Anek** superfamily (Anek Latin; Anek Devanagari, Bangla, Gujarati, Gurmukhi, Kannada, Malayalam, Odia, Tamil, Telugu) | One design across English and Indian scripts, variable weight and width, so mixed-language screens look consistent. |
| **Long reading text** | **Source Serif 4** (Latin) with **Noto Serif Devanagari** and other Noto Serif scripts as the serif fallback | Comfortable for science stories, report HTML and glossary text. |
| **Identifiers and code** | **JetBrains Mono** | DOIs, checksums, resource IDs, API paths, file names, CSV preview cells. Used only where exact characters matter. |
| **Urdu / RTL** | Noto Nastaliq Urdu or Noto Naskh Arabic | Right-to-left support if Urdu is enabled. |

Fonts are self-hosted as WOFF2, `font-display: swap`, subset by script and loaded only for the active language (via `unicode-range`).

### 7.2 Type scale (Latin; ratio about 1.2–1.25)

| Token | Size / line | Weight | Use |
|---|---|---|---|
| `display` | 52 / 58 (mobile 36 / 42) | 700 | Homepage hero only |
| `h1` | 38 / 46 (30 / 38) | 700 | Page titles |
| `h2` | 28 / 36 (24 / 32) | 650 | Section titles |
| `h3` | 22 / 30 (20 / 28) | 600 | Sub-sections, card titles |
| `h4` | 18 / 26 | 600 | Panel titles |
| `body` | 16 / 26 | 400 | Interface text |
| `body-long` | 18 / 30 (serif) | 400 | Stories, reports, glossary |
| `small` | 14 / 20 | 400 | Metadata, captions |
| `micro` | 12.5 / 16 | 500 | Badges, chip text (never below 12.5 px) |
| `mono` | 14 / 22 | 400 | Identifiers, code |

### 7.3 Indic script rules

- Devanagari, Bangla, Tamil, Telugu etc. need more vertical room. Use **line-height 1.7 for body** and **1.4 for headings** in these scripts (Latin stays at 1.5–1.6).
- Minimum body size **16 px** in Indic scripts; scale headings 1.05× relative to Latin so apparent size matches.
- **No letter-spacing** on Indic text; no all-caps equivalents; no synthetic bold or italic (use real weights).
- Do not truncate with ellipsis in the middle of a conjunct; truncate at word boundaries.
- Numerals follow the user's choice (Latin 0–9 default; native digits optional in settings).
- Dates shown as `4 Oct 2026` (Latin) or localised month names; ISO 8601 in data contexts.
- Line length: 60–75 characters for Latin serif, about 45–60 characters for Indic scripts.
- Mixed-script strings (e.g. an English dataset title inside Hindi text) are wrapped with `lang` attributes so the correct font and shaping apply.

### 7.4 Typographic rules

- Sentence case for all headings, buttons and labels.
- Left-aligned text; no justified text; centred only for short hero lines and empty states.
- Tabular numerals for tables and statistics.
- Scientific notation, units and symbols follow SI: a thin space between number and unit (`32 m`, `34.5 PSU`). Subscripts and superscripts are real (`CO₂`, `m²`), not images.

---

## 8. Layout, grid, spacing, shape

- **Base unit:** 4 px. Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96.
- **Grid:** 12 columns, gutters 24 px (16 px mobile). Content max width 1240 px; reading column 700 px; wide column 960 px.
- **Breakpoints:** 360, 600, 840, 1120, 1440 px.
- **Resource-page layout:** 8 + 4 columns. Main content left; the **Connected-to rail** on the right (collapses beneath content on mobile).
- **Portal shells:**
  - Public: top navigation, full-width content.
  - Researcher: top bar + left sidebar (collapsible).
  - Admin/Curator: top bar + left sidebar + optional right "inspector" panel for review.
- **Radius by role:** 4 px (inputs, chips), 8 px (buttons, cards), 14 px (modals, large media), full (avatars, status dots). Not one radius everywhere.
- **Borders over shadows:** 1 px `--border` separates; shadows only for floating layers: `0 10px 30px rgba(18,38,74,0.16)`.
- **Density modes:** Comfortable (public, researcher) and Compact (admin tables, 36 px rows vs 48 px).

---

## 9. Iconography and illustration

### 9.1 Icons

Stroke icons, 24 px grid, 1.75 px stroke, rounded ends. Library base: **Lucide** (ships with shadcn/ui) plus a small custom set for science concepts: expedition, vessel, station, CTD/instrument, sample, dataset, data dictionary, DOI, ORCID, provenance, embargo, checksum, knowledge graph, claim, evidence, AI-suggested (sparkle inside a dotted circle), verified (tick in a solid circle), needs-review (eye), unsupported (cross), translation.

Every icon beside meaning-bearing text; icon-only controls have accessible names and tooltips.

### 9.2 Resource-type colours

Subtle accent used for small icons and left rules (not for backgrounds): Publication — Neel; Dataset — Sagar; Expedition — Sky `#5BA8D6`; Media — Jamun; Project — Leaf `#6BA84F`; Researcher — Slate; Event — Haldi-700; Story — Sindoor-soft `#D66A5F`.

### 9.3 Illustration

Minimal, map-like line illustrations (ocean contours, instrument outlines, bathymetric lines) in Neel and Sagar on Hawa. Used for empty states, the Student Zone and onboarding. No stock "robot" or "brain" AI imagery anywhere.

### 9.4 Photography

Real field photographs, with people working and instruments in context. Scale references where possible. Credits always visible. AI-generated images are not used as scientific evidence; any generated illustration is labelled.

---

## 10. Information architecture and navigation

Follows PRD §10 exactly.

```text
VigyanSetu
├── Discover   Research · Publications · Datasets · Expeditions · Projects · Researchers · Facilities · Media
├── Explore    Map · Timeline · Topics · Collections
├── Learn      Science Stories · Student Zone · Glossary · Videos · Infographics
├── Outreach   News · Events · Campaigns · Newsletter
├── Research Assistant
├── Researcher Portal
└── Admin Portal
```

### 10.1 Header (public)

`[mark] VigyanSetu` · **Discover ▾ · Explore ▾ · Learn ▾ · Outreach ▾** · **Ask the assistant** · `[Search…]` · `[Language: English ▾]` · `[Sign in]`

- Mega-menus on desktop list sub-items with one-line descriptions; on mobile, a full-screen sheet with accordions.
- Search is always visible; a keyboard shortcut `/` focuses it.
- The language switcher shows native names: English, हिन्दी, বাংলা, தமிழ், తెలుగు, मराठी, ગુજરાતી, ಕನ್ನಡ, മലയാളം, ਪੰਜਾਬੀ, ଓଡ଼ିଆ, اردو (list is configurable per PRD §34).
- Audience switch (Public / Student / Researcher) appears on resource and story pages, not in the header.

### 10.2 Footer

Four columns: *About VigyanSetu*, *Explore*, *For researchers* (submit, API, metadata standards, licences), *Support* (accessibility, privacy, contact). Beneath: institution logo, licence statement, "Metadata available via OAI-PMH and JSON-LD" link, language switcher.

### 10.3 Researcher and Admin navigation (left sidebar)

Researcher: Dashboard · My submissions · Upload research · Datasets · Publications · Expeditions · Projects · Profile · Usage statistics.
Curator/Archivist: Review queue · Metadata · Taxonomy · Collections · Preservation · Embargoes.
Communications: Content Studio · Drafts · Approvals · Calendar · Campaigns · Newsletter.
Admin: Users and roles · Workflows · Analytics · Audit log · AI jobs · Settings.
Items are shown by permission (PRD §8 table).

### 10.4 Breadcrumbs and URLs

Breadcrumbs on all resource pages. Stable, human-readable URLs: `/expeditions/bay-of-bengal-marine-expedition-2025`, `/datasets/ds-2025-0007`, `/publications/pub-2025-0014`. Language prefix when translated: `/hi/...`.

---

## 11. Component library

Built on shadcn/ui and Tailwind (PRD §57), restyled with the tokens above. Each component lists its purpose, variants and states.

### 11.1 Foundations

**Button** — Primary (Sagar fill), Secondary (outline), Ghost, Accent (Haldi fill, Neel text; used for "Generate", the one AI action per screen), Destructive (Sindoor outline). Sizes: 36 / 44 px. States: hover, pressed, focus ring, disabled (with helper text explaining why), loading (spinner, label kept).

**Input, Select, Combobox, Textarea, Checkbox, Radio, Switch, Date picker** — labels above, help text below, errors below with icon and text, never placeholder-only. Combobox supports taxonomy terms (PRD §15) with synonyms, and shows the term's definition on hover/focus.

**Tabs, Accordion, Dialog, Sheet, Popover, Tooltip, Toast, Dropdown** — standard behaviour; dialogs trap focus, Esc closes, focus returns to trigger. Toasts auto-dismiss after 6 s unless they hold an action.

**Table** — sticky header, sortable columns, row selection, bulk actions bar, compact/comfortable density, responsive collapse to stacked cards under 600 px.

### 11.2 Status and provenance components

**ReviewStatusBadge** — Draft, Submitted, In review, Published, Archived, Preserved (PRD §44). Pill with dot, text and a line-style cue.

**AISuggestedField** — a form field wrapper. Shows the value in a dotted amber outline with the badge *AI suggested*, a confidence meter (e.g. 82 percent) and three actions: **Accept**, **Edit**, **Reject**. After Accept: solid teal rule and *Reviewed by Name*.

**ConfidenceMeter** — thin bar plus number plus words (High, Medium, Low). Thresholds configurable; low confidence adds a "check carefully" hint.

**ClaimChip** — `VERIFIED` (green tick), `PARTIALLY_SUPPORTED` (amber half-tick), `NEEDS_REVIEW` (violet eye), `UNSUPPORTED` (red cross). Each with text label, icon, colour and consistent position at the start of the claim row.

**AccessBadge** — PUBLIC, RESTRICTED, INTERNAL, EMBARGOED (with release date), CONFIDENTIAL (PRD §41). Lock icons with text; separate badges for Metadata / File / Preview / Download / API access in the resource's permissions panel.

**VersionBadge** — `v1.1`, with tooltip showing parent, uploader, timestamp.

**LicenceBadge** — icon and short code (CC BY 4.0). Clicking opens a plain-language explanation.

**ChecksumLine** — SHA-256 shown truncated in mono with copy button and "Verified 12 Sep 2026" last-integrity-check time.

**FAIRIndicator** — four small segments (F, A, I, R) with scores and an info tooltip "Internal readiness indicator, not formal certification" (PRD §47).

### 11.3 Content components

**ResourceCard** — type icon, title, one-line summary, creator, date, access badge, licence, a "connected to" count (e.g. "6 links"). Variants by type: Publication, Dataset (adds format chips, size, quality score), Expedition (adds map thumbnail, dates), Media (thumbnail, duration), Researcher (photo, designation), Project, Event, Story.

**ConnectedRail** — grouped lists: *Part of*, *People*, *Datasets*, *Publications*, *Reports*, *Media*, *Stories*, *Expeditions*. Each group shows up to 4 items then "See all". Relationship verbs are shown in plain words (generated by, documents, uses, derived from, cited by) from PRD §23.

**CitationBlock** — tabs: APA, BibTeX, RIS, plain; copy button; DOI line.

**ProvenancePanel** — timeline of events: uploaded by, AI processed, metadata reviewed, published, versions, access changes, embargo releases. Each event has actor, time and link to the audit entry.

**EvidenceChip** — `[1] p. 12`; opens the Evidence drawer.

**GlossaryTerm** — dotted underline on first occurrence of a glossary term; opens a popover with the simplified definition and "More".

**AudienceSwitch** — segmented control: Public · Student · Researcher.

**MapPanel** — MapLibre with muted base map, layers, legend, list alternative (section 14.5).

**Chart** — Apache ECharts wrapper with accessible data-table toggle, keyboard focus and download CSV.

**DatasetPreviewTable** — monospace cells, sticky header, per-column type icon, missing-value indicator, scroll in both directions.

**KnowledgeGraphView** — force or layered layout (section 16.4) with node-type legend, filters and "open as list".

**UploadDropzone** — resumable multipart upload; per-file progress, checksum calculation indicator, scan status (Security scan → Validation → Processing).

**JobTimeline** — vertical steps showing the processing pipeline from PRD §16: Upload, Security scan, Validation, Extraction, AI classification, Metadata extraction, Confidence scoring, Human review. Active step animates subtly; failed step shows a retry link.

**Notification** — in-app bell, list, and per-type icons (PRD §68).

---

## 12. AI interface patterns (the heart of the product)

### 12.1 Rules for any AI output

1. Label it: *AI suggested*, *AI draft*, or *AI answer* with sparkle-in-dotted-circle icon.
2. Show its evidence: citation chips or "Based on" list with the source resources.
3. Show its confidence or support status where the PRD defines one.
4. Provide the human action next to it (Accept / Edit / Reject; Send for review).
5. Never place AI output in a state that looks identical to approved content.
6. Show which model/prompt version produced it in the details panel (PRD §83, point 8), not in the main view.

### 12.2 Metadata review screen (AI_SUGGESTED)

Split view: **left** the original document viewer (PDF with page thumbnails, OCR text toggle); **right** the metadata form.

```text
┌ Review: "Bay of Bengal Expedition Report 2025" ─── Step 4 of 6: Human review ─┐
│ Document viewer                         │ Metadata (23 suggested · 5 accepted) │
│ ┌───────────────────────────────────┐   │ Title        ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│ │  page 1 of 48   [⟵][⟶]  zoom      │   │  Bay of Bengal Marine Expedition…   │
│ │  (highlight: where this came from)│   │  AI suggested · 96%  [Accept][Edit] │
│ │                                   │   │ Authors      ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│ └───────────────────────────────────┘   │  A. Rao, S. Iyer … (10)  91%        │
│ Show OCR text ▢   Confidence overlay ▢  │ Dates        ━━━━━ accepted ✔ ━━━━━ │
│                                         │ Location     ┄┄┄┄ 88%  [Accept]…    │
│                                         │ Domain       ┄┄┄┄ Marine biodiversity│
│                                         │ Keywords     ┄┄┄┄ chips (editable)  │
│                                         │ Abstract     ┄┄┄┄ 84%               │
│ [Reject submission]                     │ [Accept all above 90%] [Send back]  │
│                                         │ [Approve and publish]                │
└─────────────────────────────────────────┴──────────────────────────────────────┘
```

- Clicking a field highlights its source text in the document (bounding boxes from OCR where available, PRD §18).
- **Accept all above threshold** is available but shows a summary before confirming.
- Low-confidence fields (below 70 percent) sort to the top with a *Check carefully* flag.
- Keyboard: `J/K` next/previous field, `A` accept, `E` edit, `R` reject, `Shift+A` accept all above threshold.

### 12.3 Evidence drawer

A right-side drawer opened from any citation chip.

```text
┌ Evidence ─────────────────────────────┐
│ Source: Bay of Bengal Expedition      │
│ Report 2025 · Section 3.2 · p. 12     │
│ [Open document] [Open record]         │
│ ─────────────────────────────────     │
│  "...five CTD stations were sampled   │
│   between 14 and 19 March..."         │   ← highlighted passage
│ ─────────────────────────────────     │
│ Used for: Claim 2 in this draft       │
│ Support: ✔ Verified                   │
│ Retrieved by: keyword + semantic      │
│ [Previous evidence] [Next evidence]   │
└───────────────────────────────────────┘
```

Quoted passages are short excerpts of institutional material, displayed with the source and page. The drawer also lists *other evidence considered* so reviewers can spot cherry-picking.

### 12.4 No-evidence state

When retrieval finds too little evidence, the assistant shows a neutral card (not an error):

```text
┌ ◌ Not enough evidence ───────────────────────────────────────────┐
│ I could not find sufficient evidence in the available            │
│ institutional collection to answer this reliably.                │
│                                                                  │
│ What I searched: marine biodiversity · Bay of Bengal · 2025      │
│ Closest matches (not enough to answer):                          │
│   ▸ Report: Coastal Survey 2023                                  │
│ [Rephrase] [Search the archive instead] [Ask a curator]          │
└──────────────────────────────────────────────────────────────────┘
```

The wording of the first sentence is the PRD's exact phrase.

### 12.5 Job and processing feedback

All AI work is asynchronous (PRD §69). Show a **JobTimeline**, an estimated time, and let people leave the page. A notification arrives when metadata is ready (PRD §68). Failed jobs show *what failed*, *what is safe*, and *Retry*.

### 12.6 Generated summaries

Summaries in resource pages are collapsed into a card titled *Summary (AI generated, reviewed by A. Rao)* when reviewed, or *Summary (AI generated, not yet reviewed)* with a dotted outline when not. Public pages show only reviewed summaries unless an administrator allows otherwise.

### 12.7 Transparency page

A public page, "How VigyanSetu uses AI", explains the rules from PRD §83 in plain language, with a diagram of the review gates, and lists which model/provider classes are used. Linked from every AI-labelled element.

---

## 13. Public portal pages

### 13.1 Homepage (FR-PUB-001)

```text
┌ Header ─────────────────────────────────────────────────────────────────────┐
│ [mark] VigyanSetu   Discover  Explore  Learn  Outreach  Ask  [Search…] [EN▾]│
├─────────────────────────────────────────────────────────────────────────────┤
│  HERO                                                                       │
│  From Research Data to Public Knowledge                                     │
│  ┌──────────────────────────────────────────────────────┐ [Search]         │
│  │ Search or ask: "marine biodiversity datasets Bay of…"│                  │
│  └──────────────────────────────────────────────────────┘                  │
│  Try: Coral ecosystems · Bay of Bengal datasets · Research in 2024         │
│  (right/background: featured expedition route drawn on a muted map)         │
├─ ╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌ ━━━━━━━━━━━━━━━━━━ (span divider) ────────────────────┤
│ Featured expedition: Bay of Bengal Marine Expedition 2025                   │
│ 23 days · 5 stations · 10 researchers · 3 datasets   [Explore the expedition]│
├─────────────────────────────────────────────────────────────────────────────┤
│ Latest research (publications)        │ Featured datasets                   │
│  row · row · row                      │  card · card                        │
├─────────────────────────────────────────────────────────────────────────────┤
│ Science stories  ▢ big story │ ▢ │ ▢ │ ▢     [All stories]                  │
├─────────────────────────────────────────────────────────────────────────────┤
│ Photographs and film (justified row)                    [Open media library]│
├─────────────────────────────────────────────────────────────────────────────┤
│ Student Zone                   │ Upcoming activities                        │
│  explainer · glossary · quiz   │  event · event · event                     │
├─────────────────────────────────────────────────────────────────────────────┤
│ The archive in numbers: resources · datasets · expeditions · researchers    │
└─────────────────────────────────────────────────────────────────────────────┘
```

Design notes:
- The hero's first element is the **search/ask box**, because discovery is the product's primary job. The featured expedition's route is the visual (a thin amber line on a Neel-and-Hawa map), a recognisable "memorable thing" for the page.
- The search box accepts both keywords and natural-language questions (PRD §25). A tiny toggle "Search | Ask" is inside the box; placeholder text rotates through example queries only on focus, never auto-animating otherwise.
- Statistics are real counts from the archive, each linking to its list.

### 13.2 Search results page (PRD §66)

```text
Results for "marine biodiversity Bay of Bengal after 2022"      412 results
We understood: Domain = Marine biodiversity · Location = Bay of Bengal · Year > 2022 [Edit]
Tabs: All · Datasets (38) · Publications (61) · Expeditions (3) · Media (240) · Reports · Researchers · Projects
[Map view ▢]   Sort: Relevance ▾

┌ Filters ───────────┐ ┌ Results ─────────────────────────────────────────────┐
│ Resource type      │ │ ▢ Dataset · DS-2025-0007  CSV · 14 MB · CC BY 4.0     │
│ Year ──●────●──    │ │   Plankton counts, Bay of Bengal, March 2025           │
│ Domain ▾           │ │   Matched: location, domain · Connected: 1 expedition │
│ Region ▾ [map]     │ │ ▢ Publication · …                                     │
│ Access ▾           │ │ …                                                     │
│ Language ▾         │ └───────────────────────────────────────────────────────┘
│ Has data ▢ Has video│
└────────────────────┘
```

- The **"We understood" line** shows how a natural-language query was converted to structured filters (PRD §24). Each filter is an editable chip. This builds trust and lets users correct the system.
- Each result shows *why it matched* (title, abstract, full text, metadata, semantic similarity).
- Zero-result state suggests broader filters and shows the closest topics; it offers "Ask the assistant".

### 13.3 Resource page (FR-PUB-003/004/005)

```text
Breadcrumb: Discover / Publications / PUB-2025-0014
[Publication]  Title (h1)                           [Cite] [Share] [Download ▾]
Authors · Institution · Published 12 Jun 2025 · DOI 10.xxxx/…  [PUBLIC] [CC BY 4.0] [v1.0]
Audience: ( Public | Student | Researcher )

┌ Main (8) ─────────────────────────────────┐ ┌ Connected to (4) ───────────────┐
│ Summary (reviewed)                        │ │ Part of: Project: Coastal Seas   │
│ Abstract                                  │ │ Expedition: Bay of Bengal 2025   │
│ Preview (PDF viewer / data preview / media)│ │ Uses: Dataset DS-2025-0007       │
│ Key terms (glossary chips)                │ │ Researchers: A. Rao, S. Iyer …   │
│ Full metadata (accordion)                 │ │ Media: 12 photos · 2 videos      │
│ Provenance & versions (accordion)         │ │ Stories: "Listening to the sea"  │
│ Cite this                                 │ │ [View as graph]                  │
└───────────────────────────────────────────┘ └──────────────────────────────────┘
```

- Open Graph image, JSON-LD and canonical URL are generated from this page (PRD §11, §51).
- The audience switch changes the summary and examples shown; the metadata and citations stay the same.

### 13.4 Collections, Topics and Timeline

- **Topics:** index of research domains with counts and a short plain description; topic pages combine datasets, publications, stories and a glossary strip.
- **Collections:** curated sets with cover mosaic and a curator note.
- **Timeline:** horizontal timeline of expeditions, events and milestones; filters by topic.

### 13.5 Media library

Justified-row grid; filters by type, expedition, project, topic, year, licence. Asset page: zoomable viewer, caption, AI-suggested caption marked as suggestion until approved (PRD §36), credit, rights, linked expedition/project, download sizes. Videos show transcript, chapters (clickable), summary and captions (PRD §37).

### 13.6 Events and institutional activities (PRD §38)

Calendar and list. Event page: what, who, when, where, how to join; links to speakers (researcher profiles), projects, publications and the recap story. Past events show materials and photos.

### 13.7 Researcher profile and Project page

Profile: photo, designation, department, interests, bio, ORCID, tabs: Publications · Datasets · Projects · Expeditions · Media · Awards. Only approved information is public (PRD §39, §55).
Project page: objective, duration, PI, team, domain, outputs, linked datasets/publications/expeditions/media/stories (PRD §40) with a mini graph.

---

## 14. Expedition Digital Twin

PRD §22 calls this the flagship. It should feel like exploring a place and a moment in time.

### 14.1 Layout

```text
┌ Hero: Bay of Bengal Marine Expedition 2025 ─────────────────────────────────┐
│ Objective in one sentence · 14–19 Mar 2025 · RV Sagar Kanya* · PI: Dr. A. Rao │
│ [Overview] [Map] [Timeline] [Team] [Data] [Publications] [Media] [Findings]  │
├──────────────────────────────────────────────┬───────────────────────────────┤
│                MAP (large)                   │ Inspector panel               │
│  route (solid line, Haldi)                   │  Station S3                   │
│  stations (Sagar circles, numbered)          │  16.2°N 84.1°E (generalised?) │
│  layers: Samples · Photos · Datasets         │  Depth cast: 0–200 m          │
│                                              │  Instruments: CTD, Niskin     │
│                                              │  Samples (4) · Photos (7)     │
│                                              │  Datasets (2) [Open]          │
├──────────────────────────────────────────────┴───────────────────────────────┤
│ TIMELINE:  departure ●──S1──S2──S3──S4──S5──● return                        │
│ scrubber synchronised with the map; events as markers (sampling, observation) │
└──────────────────────────────────────────────────────────────────────────────┘
```
*Placeholder vessel name for illustration only.

### 14.2 Behaviour

- **Route** is a solid line; the section the timeline scrubber has passed is bold, the remaining route is dashed. (The bridge motif again: dashed becomes solid as the journey progresses.)
- **Stations** are numbered circles; selecting one opens the Inspector with coordinates, metadata, samples, photos, datasets (PRD §22).
- **Timeline and map are linked:** dragging the scrubber moves the vessel marker; clicking a station jumps the scrubber to its time.
- **Layers:** route, stations, samples, photographs (geotagged thumbnails), datasets (coverage polygons), protected areas.
- **Play:** a "Play journey" button animates the vessel along the route (skipped for reduced motion; steps one station at a time instead).
- **Sensitive coordinates:** if a station is generalised (PRD §55), show a soft-edged circle and the label *Location generalised*.

### 14.3 Overview tab

Plain-language summary, objectives, "At a glance" figures (days, stations, researchers, datasets, reports, publications, photos, videos), key findings (each links to evidence), related projects and a small knowledge graph of the expedition.

### 14.4 Findings

Each finding is a short statement with an evidence chip. Findings written by AI are shown only after approval; unreviewed suggestions appear in the curator view with dotted outline.

### 14.5 Map accessibility

A **List view** toggle presents stations in a table with the same data; keyboard users move between stations with arrow keys on the map; screen readers get a text summary ("Route of 520 km; 5 stations; start Chennai; end Visakhapatnam"). Satisfies PRD §52 "accessible map alternatives".

---

## 15. Dataset experience

### 15.1 Dataset page (PRD §66)

```text
[Dataset] Plankton counts, Bay of Bengal, March 2025
DS-2025-0007 · v1.1 · CC BY 4.0 · [PUBLIC] · DOI 10.xxxx/… · Updated 2 Apr 2025
[Download ▾ CSV · NetCDF · Metadata]  [Use via API] [Cite] [Follow updates]

Tabs: Overview · Preview · Data dictionary · Visualisations · Quality · Versions · Related

Overview: description · spatial & temporal coverage (map + range) · instrument · method
Preview: first rows table · column names · types · missing-values bar
Data dictionary: variable · unit · type · definition · allowed range   (AI suggested ┄ / reviewed ━)
Visualisations: suggested charts (dotted) + "Make your own"
Quality dashboard (see 15.2)
Versions: v1.0 → v1.1 timeline; compare; checksum; uploader; change description
Related: expedition · publications using it · other datasets
```

### 15.2 Quality dashboard (PRD §19, §48)

```text
Metadata completeness   ████████████░  94%     ▸ 2 optional fields empty
Schema validity         █████████████  98%     ▸ 1 inconsistent type (col "depth")
Documentation           ███████████░░  88%     ▸ methods note short
Licence                 ✔ Present (CC BY 4.0)
Coordinate validation   ✔ Passed (60 / 60 points inside bounds)
Missing values          3.2%   ▸ column "chlorophyll" 11%
Advisory checks         ⚠ 2 suspicious outliers (rows 412, 413)   [Review]
```

- Every score expands to show **the checks behind it** (PRD §48: "score must show its underlying checks").
- Checks are advisory by default (PRD §19), shown with an "Advisory" tag; configurable blocking checks show a lock icon.
- FAIR readiness appears as four segments with plain explanations and a note that it is an internal indicator.

### 15.3 Auto-visualisation (PRD §20)

The system suggests charts (time series, scatter, distribution, bar, heatmap, map). Suggestions have a dotted amber outline labelled *Suggested chart*. The user can change chart type, variables and filters, then "Save as view". Every chart has a data-table toggle and CSV download.

### 15.4 Upload flow (researcher)

1. Drop file(s) and documentation.
2. Progress: upload → security scan → validation → profiling.
3. Preview, suggested data dictionary (editable), quality report.
4. Link to expedition / project / publication.
5. Choose access level, licence, embargo (if any).
6. Submit for review.
Each step is a numbered stepper because it is a real sequence.

### 15.5 Versioning UI

Version timeline with change notes; "Compare v1.0 and v1.1" shows schema and row-count differences and checksum. Older versions remain downloadable according to retention policy (PRD §21).

---

## 16. Search, Research Assistant and Knowledge Graph

### 16.1 Search box behaviour

- Type-ahead groups: Resources, Researchers, Expeditions, Topics, Places, Glossary terms.
- Query interpretation preview ("We understood…") for natural-language queries.
- Recent searches and saved searches for signed-in users.

### 16.2 Research Assistant (PRD §26–27)

```text
┌ Research Assistant ─────────────────────────────  Scope: [All ▾] [Expedition ▾] ┐
│ Ask about the institution's research…                                          │
│                                                                                │
│ You: What were the main activities of this expedition?                         │
│                                                                                │
│ ✦ AI answer · based on 4 sources                                               │
│ The expedition sampled five stations over 23 days [1, p. 12], collected        │
│ plankton and water-property data [2], and documented fieldwork with 40         │
│ photographs [3].                                                               │
│                                                                                │
│ Sources:  [1] Expedition Report 2025 · p. 12   [2] Dataset DS-2025-0007        │
│           [3] Media collection · 40 items       [4] Publication PUB-2025-0014  │
│ [Open in Evidence drawer]  [Copy with citations]  [Report a problem]           │
│                                                                                │
│ Ask a follow-up…                                              [Send]           │
└────────────────────────────────────────────────────────────────────────────────┘
```

Design rules:
- Sources are listed beneath every answer; inline chips link to exact pages.
- Scope selector limits retrieval to the whole archive, a project, an expedition or a single document (useful for demos and for researchers).
- Streaming text appears progressively; citations attach as they resolve.
- A "Report a problem" button sends the answer, sources and prompt version to the curator queue.
- The assistant shows suggested follow-ups drawn from the connected records, not generic prompts.
- Access-controlled sources are never cited to a user who cannot open them.

### 16.3 Natural-language search vs assistant

Search returns resources; the assistant returns an answer with sources. The UI keeps these distinct: after a question-like query, the results page offers *"Get an answer with sources"* as a card at the top.

### 16.4 Knowledge Graph view (PRD §23, should-have)

- Nodes by type (Researcher, Project, Expedition, Dataset, Publication, Report, Photo, Video, Story) in the resource-type colours with distinct shapes (circle, square, diamond, hexagon) so type is not colour-only.
- Edges labelled in plain words (generated by, documents, uses, authored by, cites, version of).
- Default view: ego-graph around the current resource with two hops. Controls: filter by type, depth, relationship, time.
- Selecting a node shows a mini ResourceCard; double-click recentres.
- **Suggested relationships** (AI) are dotted edges with an Accept/Reject action for curators; accepted edges become solid.
- "View as list" gives an accessible equivalent (grouped lists of connections).
- Large graphs are clustered; maximum 150 nodes visible by default.

---

## 17. Researcher portal

### 17.1 Dashboard (PRD §93)

```text
Welcome, Dr. Rao                                        [Upload research]
My submissions:  Drafts 2 · Under review 3 · Published 18 · Rejected 1
Needs your attention: 2 AI metadata suggestions ready · 1 dataset changes requested
Recent resources: Dataset v1.1 · Expedition report · Publication
Impact (last 12 months): views · downloads · citations   (small sparkline charts)
Profile completeness: 80%  [Add ORCID] [Add biography]
```

### 17.2 Submissions

Table with status badges, last updated, reviewer comments and next action. Status detail page shows a stepper of the lifecycle (Draft → Submitted → Review → Published → Archived → Preserved) and the audit trail relevant to the researcher.

### 17.3 Profile editor

Fields from PRD §39. Each field has a visibility toggle (Public / Institution / Private). A live preview of the public profile appears on the right. Publications and datasets can be suggested from ORCID and accepted with one click.

### 17.4 Statistics

Per-resource views, downloads, citations and geography (country level). Exports to CSV.

---

## 18. Admin and curator portal

### 18.1 Admin dashboard (PRD §67, §94)

```text
Resources 12,482 | Pending review 42 | Datasets 1,240 | Expeditions 186

┌ Needs attention ─────────────┐ ┌ AI processing ─────────────────────────────┐
│ 42 submissions to review     │ │ Completed 98.2%  Failed 1.8%               │
│ 7 scientific reviews pending │ │ Queue depth 12   Avg time 3 m 40 s         │
│ 5 outreach approvals pending │ │ Failed jobs: 9  [Retry all] [Open]         │
│ 14 dataset quality warnings  │ └────────────────────────────────────────────┘
└──────────────────────────────┘ ┌ Outreach ──────────────────────────────────┐
┌ Storage ─────────────────────┐ │ Drafts 84 · Approved 51 · Published 47     │
│ 6.2 TB of 20 TB              │ └────────────────────────────────────────────┘
└──────────────────────────────┘ Popular searches: Ocean · Climate · Biodiversity
```

Widgets are clickable and filter the relevant queue. Failed counts always link to the failed jobs list.

### 18.2 Review queues

One table pattern for Submissions, Scientific reviews, Communications reviews and Content approvals: type icon, title, submitter, age, risk flags, confidence summary, assignee, action. Filters and saved views. Keyboard navigation (`↑/↓`, `Enter`). Bulk assign.

### 18.3 Review workspace

Three-pane layout: queue list (collapsible) · content under review · inspector (comments, history, checks). The inspector contains: AI confidence summary, claim verification summary, risk flags (PRD §31), access and licence settings, and the decision buttons (**Approve**, **Request changes**, **Reject**) with a required comment for the last two.

### 18.4 Taxonomy manager (PRD §15)

Tree editor for domains, subdomains, instruments, regions, licences, languages, audiences. Versioned (diff view); changes need no migration; term usage count; merge duplicates; synonyms; translations.

### 18.5 Users, roles, workflows

Matrix editor for the PRD §8 permissions; workflow designer for single or multi-reviewer approval (PRD §32) with a simple step builder.

### 18.6 Audit log (PRD §54)

Filterable table (user, action, resource, date, result) with previous/new value diff. Read-only. Export restricted to admins.

---

## 19. Content Studio (research-to-outreach)

The flagship AI feature (PRD §28, §33). The design must make "generate → verify → approve" feel safe and efficient.

### 19.1 Studio layout

```text
┌ Content Studio ──────────────────────────────────────────────────────────────┐
│ 1 Source ▸ 2 Audience ▸ 3 Format ▸ 4 Draft ▸ 5 Verify ▸ 6 Review ▸ 7 Publish   │
├────────────────┬─────────────────────────────────┬───────────────────────────┤
│ SETUP          │ DRAFT                           │ EVIDENCE & CLAIMS          │
│ Source:        │ Title                           │ Claims: 12                 │
│  Bay of Bengal │ Why did scientists go?          │ ✔ Verified 11              │
│  Expedition    │ Where did they go? …            │ 👁 Needs review 1          │
│  2025  [change]│ (AI draft ┄ dotted outline)     │ ✖ Unsupported 0            │
│ Audience:      │                                 │                            │
│  ( ) Researcher│ Each sentence with a claim has  │ Claim 3: "32 stations…"    │
│  (•) Student   │ a small marker; click to see    │  ⚠ Source says 5 stations  │
│  ( ) Public    │ evidence                        │  [Fix] [Show evidence]     │
│  ( ) Journalist│                                 │                            │
│  ( ) Policy    │ Glossary terms underlined       │ Risk flags: 1 numeric      │
│ Language: EN ▾ │ Reading level: Grade 8          │                            │
│ Format:        │                                 │ Workflow: Scientific review│
│  Science story │                                 │ → Communications → Final   │
│ Tone · Length  │                                 │                            │
│ [Generate draft]                                 │ [Save] [Send for review]   │
└────────────────┴─────────────────────────────────┴───────────────────────────┘
```

### 19.2 Setup panel

Matches PRD §33 and §29: source selection (search and pick approved resources only), audience, platform/format (website article, science story, student explainer, social post, LinkedIn post, caption, newsletter, press/fact sheet, FAQ, video description, infographic brief), language, tone, length. Unapproved sources are greyed with the reason "Source is not approved".

### 19.3 Draft canvas

- Rich text editor with block structure from PRD §91 (title, "Why did scientists conduct the expedition?", "Where did they go?", "What did they study?", etc.).
- Sentences containing factual claims are subtly marked (a small superscript claim number). Hover/focus shows the claim status; click opens the Evidence drawer.
- Editing a claim sentence re-runs verification for that claim and updates its status.
- Glossary terms are underlined; the student format adds a "Key terms" box automatically (PRD §92).
- Reading-level indicator and inclusive-language check.

### 19.4 Claim dashboard (PRD §30–31)

- Summary bar: `Claims 12 · Verified 11 · Partially supported 0 · Needs review 1 · Unsupported 0`.
- Claim list: each row = claim text, source resource, source location (page/section), status chip, confidence, reviewer.
- Risk flags (PRD §31) as separate chips: *unsupported numeric claim*, *altered terminology*, *invented citation*, *unsupported causal statement*, *incorrect date*, *unsupported location*, *exaggerated conclusion*, *ambiguous statement*.
- **Publish is disabled** while a configured high-risk claim is `UNSUPPORTED` or `NEEDS_REVIEW`, with an explanation: "1 claim needs review before this can be sent for approval."
- Reviewers can mark a claim *Accepted with note*, *Edited*, or *Removed*; each decision is logged.

### 19.5 Approval flow (PRD §32)

A horizontal stepper reflects the configured workflow: AI Draft → Scientific Review → Communications Review → Final Approval → Publish. Each stage shows who is assigned, status, and comments. Reviewers see a diff between AI draft and edited text. On approval, the draft receives a version number and moves to scheduling/publishing.

### 19.6 Multilingual workflow (PRD §34)

After approval of the master, **Translate** creates language versions in a side-by-side editor: master on the left (read-only), translation on the right (dotted until reviewed). A **terminology panel** lists preserved scientific terms and glossary translations; terms used differently from the glossary are flagged. Each translation has its own status, reviewer and version, and shows *Translated from English master v1.2*.

### 19.7 Social and newsletter outputs

Format previews inside the studio: LinkedIn post, short caption, newsletter block, press/fact sheet. Each preview has character counts, image suggestion (from linked media with credit), and the same claim check. MVP exports as copy/download; direct publishing is a "could have" (PRD §77).

### 19.8 Published story page (public)

Story layout with the structure in PRD §91; at the bottom: **"Explore the original research"** with linked expedition, dataset, report, publication. A small *Reviewed by [scientist name], [date]* line and *Sources used* list build trust. If AI-assisted, the story carries a short, plain disclosure.

---

## 20. Multilingual and Learn experience

### 20.1 Language experience

- Language switcher in header and footer, showing native names.
- Translated pages show a banner when only part of the content is translated: "Some details are available only in English."
- Search works across languages through multilingual embeddings (PRD §57).
- `hreflang` and language-specific URLs.
- Technical identifiers (DOI, IDs, units) stay Latin.
- RTL layout for Urdu if enabled (mirrored layout, icons that imply direction flip).

### 20.2 Student Zone

- Warm, visual, less dense. Larger type (18 px body), more illustration, friendlier microcopy.
- Content blocks per PRD §92: *What was the question? How did they study it? What did they find? Why does it matter? Key terms. Explore the original research.*
- Interactive pieces: glossary flashcards, mini quizzes, "Try it" charts using real data from datasets (simplified), expedition mini-maps.
- A **Teacher corner**: downloadable classroom packs and suggested activities, each tagged with grade bands.

### 20.3 Glossary (PRD §35)

Term page: scientific definition, student explanation, related terms, translations, examples, linked resources. Alphabet navigation for each script. Term cards used across the site via the GlossaryTerm popover.

### 20.4 Science Stories

Template families: Expedition story, Discovery explainer, Scientist profile, Data story, Photo essay, Event recap. Reading time, audience level, language available chips, "Listen" (text-to-speech) option where supported.

---

## 21. Access, embargo and preservation UI

### 21.1 Access (PRD §41)

On each resource, a **Permissions panel** (curators) lists five independently set layers: Metadata, File, Preview, Download, API. Each layer has a dropdown of access levels (PUBLIC, RESTRICTED, INTERNAL, EMBARGOED, CONFIDENTIAL). The public view shows only a plain statement: "Metadata is public. Data is available on request."

Restricted items show a **Request access** form (name, role, purpose, institution) that routes to the curator queue.

### 21.2 Embargo (PRD §42)

Embargo editor: start, end, reason, owner, release policy. The public page shows *Available from [date]*. A timeline visual shows lock → release. Automated changes appear in the audit log with a *System* actor.

### 21.3 Preservation (PRD §43–44)

Archivist view with:
- Lifecycle stepper: Draft → Submitted → Review → Published → Archived → Preserved.
- File integrity table: filename, MIME type, SHA-256, last verified, status (OK / Mismatch / Not yet checked).
- Retention policy and storage location.
- **Integrity check** history chart.
Integrity mismatches raise a red alert with steps (quarantine, restore from replica).

### 21.4 Provenance panel (public)

A friendly version: "Uploaded by Dr. A. Rao on 2 Apr 2025 · Reviewed by S. Iyer on 5 Apr 2025 · Published 7 Apr 2025 · Version 1.1 replaces 1.0." Expandable for the full audit-linked details (for permitted roles).

---

## 22. Analytics and knowledge-gap UI

### 22.1 Analytics dashboard (PRD §45)

Tabs: **Repository**, **Usage**, **Outreach**, **AI quality**.
- Repository: resource counts by type, metadata completeness trend, indexed percentage, resources with relationships.
- Usage: searches (top, zero-result), page views, dataset downloads, video views, story views, geography.
- Outreach: drafts generated, approved, published, language distribution, engagement.
- AI quality: extraction acceptance rate, citation coverage, unsupported-claim rate, average review time (PRD §81).
Charts use the data palette with direct labels; every chart has a table view and CSV export.

### 22.2 Knowledge-gap view (PRD §46)

```text
Topic: Deep-sea biodiversity
Research assets   ██████████ HIGH
Public content    ██░░░░░░░░ LOW
Search demand     █████████░ HIGH

Suggestion (analytics-based): Create a public explainer and a student module.
[Create draft in Content Studio]   [Dismiss]   [Snooze 30 days]
```

Design rules: framed as **suggestions**, not decisions (PRD §46). A matrix chart (research volume vs public content) with a highlighted "gap" quadrant; clicking a bubble opens the topic with linked assets.

### 22.3 Public statistics

A simplified public page, "The archive in numbers", showing counts and a map of expeditions; no personal or usage data.

---

## 23. Motion and interaction

- **Principle:** motion confirms or explains; it never decorates. All durations 120–250 ms, ease-out `cubic-bezier(.2,.7,.2,1)`.
- **Signature moments (the only expressive motion):**
  1. *Accept transition:* dotted amber outline to solid teal rule.
  2. *Span divider draw:* on first view of the homepage, the dashed line completes into solid (600 ms, once).
  3. *Journey playback* in the expedition map (user-triggered).
- Skeleton loaders match final layouts. Streaming text for the assistant appears word-group by word-group with a steady cursor.
- **Reduced motion:** all of the above become instant state changes; no autoplay; no parallax.
- Keyboard shortcuts: `/` search, `g d` discover, `g r` review queue, `?` shortcut help; review shortcuts in 12.2.
- Hover is never the only way to reveal information; focus and tap reveal the same content.

---

## 24. States: loading, empty, error, partial

| State | Pattern | Example copy |
|---|---|---|
| Loading | Skeleton, then content; long jobs show JobTimeline | "Extracting metadata… about 2 minutes. You can leave this page." |
| Empty (first use) | Illustration, one sentence, one action | "No submissions yet. Upload your first research file." |
| Empty (search) | Suggestions and "Ask the assistant" | "No results for 'xyz'. Try fewer words or browse by topic." |
| No evidence (AI) | Neutral card (section 12.4) | PRD sentence |
| Error (recoverable) | What happened, what is safe, retry | "Processing failed at OCR. Your file is safe. Retry or contact a curator." |
| Error (permission) | Plain explanation, request access | "You don't have access to this file. Request access." |
| Partial | Show what loaded; quiet notice | "Previews unavailable for 2 files." |
| Offline/slow | Banner; uploads resume | "Connection lost. The upload will resume automatically." |
| Embargoed | Clear lock state with date | "This dataset is embargoed until 1 Jan 2027." |

Errors never blame the user, never use codes alone, and always include a reference ID for support.

---

## 25. Accessibility

Target **WCAG 2.2 AA** (PRD §52) across all portals.

- Semantic HTML and landmarks; one `h1` per page; no skipped heading levels.
- Full keyboard operation; visible focus ring (Haldi + Neel); skip links (main content, search).
- Contrast verified per token (section 6.3). Status uses icon + text + colour + line style.
- Text resizes to 200 percent; layouts reflow at 320 px width; text spacing overrides respected.
- Images: alt text mandatory at upload; AI-suggested alt text is marked and must be confirmed; decorative images use empty alt.
- Video/audio: captions, transcripts, chapters; no autoplay with sound.
- Charts: data-table alternative, keyboard-focusable data points, text summary of the trend, patterns/markers in addition to colour.
- Maps: list alternative and text summary (section 14.5).
- Knowledge graph: list alternative.
- Forms: persistent labels, error summary with links, helpful errors, no time limits on forms.
- Target size at least 44 × 44 px for touch (minimum 24 × 24 px per WCAG 2.2).
- Focus not obscured by sticky headers (`scroll-padding-top`).
- Drag-and-drop always has a non-drag alternative (e.g. in taxonomy tree and dashboard widgets).
- Language: `lang` on `<html>` and on inline language changes; accessible language switcher.
- Authentication: no cognitive-function test only; support password managers and passkeys.
- Testing: axe in CI, keyboard passes, NVDA/JAWS/VoiceOver/TalkBack scripts, and user testing with assistive-technology users before each release.
- Public accessibility statement with contact and response time.

---

## 26. Content design and microcopy

Principles: say what the thing is, say what happens, keep one action per button, keep names consistent across the flow ("Send for review" button → "Sent for review" toast → "In review" badge).

### 26.1 Sample microcopy

| Place | Copy |
|---|---|
| Search placeholder | Search or ask: "datasets from the Bay of Bengal" |
| Search | Search |
| Assistant button | Ask the assistant |
| AI badge | AI suggested |
| Accepted badge | Reviewed by {name} |
| Accept | Accept |
| Reject | Reject |
| Generate | Generate draft |
| Claim verified | Verified in source |
| Claim partial | Partly supported |
| Claim needs review | Needs a human check |
| Claim unsupported | Not found in source |
| Publish blocked | Resolve 1 claim before sending for approval. |
| Upload hint | PDF, CSV, XLSX, JSON, NetCDF, GeoTIFF, JPEG, PNG, MP4 and more. Large files upload in parts and resume if interrupted. |
| Access request | Tell us how you plan to use this data. A curator will reply by email. |
| Embargo | Available from {date}. |
| Checksum | SHA-256 verified on {date}. |
| Language banner | Some details are available only in English. |
| Empty submissions | No submissions yet. Upload your first research file. |
| Audit | This log is read-only. |
| AI transparency link | How VigyanSetu uses AI |

### 26.2 Hindi sample strings (for layout testing)

| English | हिन्दी |
|---|---|
| Search or ask | खोजें या पूछें |
| AI suggested | एआई द्वारा सुझाया गया |
| Reviewed by | समीक्षक |
| Accept | स्वीकार करें |
| Send for review | समीक्षा के लिए भेजें |
| From Research Data to Public Knowledge | शोध डेटा से जन-ज्ञान तक |
| Explore the original research | मूल शोध देखें |

Translations are illustrative; production strings are professionally translated and scientifically reviewed.

---

## 27. Responsive behaviour

| Breakpoint | Behaviour |
|---|---|
| < 600 px | Single column; header collapses; filters in a sheet with "Show n results"; connected rail beneath content; tables become stacked cards; map full width with bottom sheet inspector; Content Studio is a step-by-step flow (one pane at a time). |
| 600–840 px | Two-column cards; sidebar becomes icon rail; expedition inspector slides over the map. |
| 840–1120 px | Standard two-pane layouts; connected rail beside content; admin sidebar collapsible. |
| ≥ 1120 px | Full layouts, three-pane studio and review screens. |

Touch: 44 px targets; swipe between media; long-press disabled for critical actions. Low-bandwidth: images served in responsive sizes (AVIF/WebP), maps lazy-loaded, "light mode" toggle that avoids heavy previews.

---

## 28. Implementation guide

### 28.1 Mapping to the repository structure (PRD §86)

```text
frontend/
  app/
    (public)/                   # SSR for SEO
      page.tsx                  # Homepage
      search/page.tsx
      discover/[type]/page.tsx
      resources/[id]/page.tsx
      expeditions/[slug]/page.tsx
      datasets/[id]/page.tsx
      researchers/[slug]/page.tsx
      learn/...
      assistant/page.tsx
    (researcher)/dashboard/...
    (admin)/admin/...
    layout.tsx                  # fonts, favicon, theme
  components/
    ui/                         # shadcn/ui primitives, re-themed
    provenance/                 # AISuggestedField, ClaimChip, EvidenceChip, ReviewStatusBadge, ConfidenceMeter
    resource/                   # ResourceCard, ConnectedRail, CitationBlock, ProvenancePanel
    maps/                       # MapPanel, StationInspector, TimelineScrubber
    charts/                     # ECharts wrappers
    graph/                      # KnowledgeGraphView
    studio/                     # StudioStepper, DraftCanvas, ClaimList, TranslationEditor
    upload/                     # UploadDropzone, JobTimeline
  features/
    search/ review/ studio/ expeditions/ datasets/ analytics/
  lib/
    api/ i18n/ a11y/ tokens/
```

### 28.2 Tailwind theme (excerpt)

```ts
// tailwind.config.ts
export default {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        neel:   { DEFAULT: "#12264A", 700: "#1C2D4D", 500: "#3A4C68" },
        sagar:  { DEFAULT: "#0E7C86", 100: "#D3EDEF", 300: "#7FD0D6", 700: "#0B6670" },
        hawa:   "#EAF2F6",
        haldi:  { DEFAULT: "#F2A30F", 100: "#FDEFCB", 700: "#8A5A00" },
        sindoor:{ DEFAULT: "#C8372D", 100: "#F9DCD9" },
        patta:  { DEFAULT: "#2E7D4F", 100: "#D9EEE1" },
        jamun:  { DEFAULT: "#6B3FA0", 100: "#E8DFF3" },
      },
      fontFamily: {
        sans:  ["var(--font-anek)", "Noto Sans", "system-ui", "sans-serif"],
        serif: ["var(--font-source-serif)", "Noto Serif", "Georgia", "serif"],
        mono:  ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      borderRadius: { sm: "4px", md: "8px", lg: "14px" },
      boxShadow: { float: "0 10px 30px rgba(18,38,74,0.16)" },
      transitionTimingFunction: { out: "cubic-bezier(.2,.7,.2,1)" },
    },
  },
};
```

### 28.3 CSS variables for shadcn/ui

```css
:root {
  --background: 200 38% 94%;      /* hawa */
  --foreground: 218 60% 19%;      /* neel */
  --card: 0 0% 100%;
  --primary: 185 86% 29%;         /* sagar */
  --primary-foreground: 0 0% 100%;
  --accent: 39 90% 50%;           /* haldi */
  --accent-foreground: 218 60% 19%;
  --destructive: 5 63% 49%;       /* sindoor */
  --border: 202 28% 89%;
  --ring: 39 90% 50%;
  --radius: 8px;
}
.dark {
  --background: 218 62% 11%;
  --foreground: 200 38% 94%;
  --card: 218 60% 19%;
  --primary: 186 63% 42%;
  --primary-foreground: 195 65% 9%;
}
```

### 28.4 Provenance utility classes

```css
.ai-suggested { outline: 2px dotted var(--ai); outline-offset: 2px; background: var(--ai-bg); }
.draft        { outline: 2px dashed var(--border); }
.accepted     { border-left: 4px solid var(--primary); }
.claim-verified { --c: var(--verified); }
.claim-review   { --c: var(--review); }
.claim-unsupported { --c: var(--unsupported); }
@media (prefers-reduced-motion: no-preference) {
  .accept-transition { transition: outline-color .2s, border-left-width .2s, background .2s; }
}
```

### 28.5 Fonts (Next.js)

Use `next/font/local` for Anek Latin, Source Serif 4 and JetBrains Mono; load script-specific Anek families by `unicode-range` or per-locale layouts. Provide `lang` and `dir` on `<html>` based on locale. Use `next-intl` (or equivalent) for message catalogues and ICU plural/date formatting.

### 28.6 Component-to-API mapping (PRD §49)

| UI | Endpoint |
|---|---|
| Search page | `GET /api/v1/search` |
| Resource page | `GET /api/v1/resources/{id}` |
| Dataset page | `GET /api/v1/datasets` / `/{id}` |
| Expedition page | `GET /api/v1/expeditions/{id}` |
| Upload | `POST /api/v1/submissions` |
| Metadata review save | `PATCH /api/v1/resources/{id}` |
| AI metadata trigger / status | `POST /api/v1/ai/metadata` + job polling |
| Assistant | `POST /api/v1/ai/query` |
| Studio generate | `POST /api/v1/ai/content` |
| Claim check | `POST /api/v1/ai/verify` |
| Translate | `POST /api/v1/ai/translate` |
| Admin queues | `GET /api/v1/admin/reviews` |
| Audit | `GET /api/v1/admin/audit` |
| Analytics | `GET /api/v1/admin/analytics` |

### 28.7 Performance (PRD §69)

LCP at or under 2.5 s on public pages: server-rendered shell, responsive images with explicit dimensions, minimal blocking JS, maps/charts/graph loaded on demand, streaming for assistant responses, skeletons for slow regions. p95 search at or under 2 s: optimistic UI and progressive results. Large uploads: multipart/resumable with progress and retry.

### 28.8 SEO and sharing (PRD §51)

Server-rendered pages with canonical URLs, titles, descriptions, Open Graph and Twitter cards, JSON-LD (Schema.org `Dataset`, `ScholarlyArticle`, `ImageObject`, `VideoObject`, `Event`, `Person`), sitemap, robots, semantic HTML. Social preview image template: Neel background, resource type icon, title in Anek Bold, bridge mark and URL, 1200 × 630.

---

## 29. SIH demo design: storyboard of the 11-step flow

Designed so that each step produces a **visible state change** (dotted to solid) judges can follow without explanation.

| Step (PRD §79) | Screen | What the audience sees | Design cue |
|---|---|---|---|
| 1. Upload | Researcher → Upload research | Drag the expedition report PDF; progress bar; scan and validation ticks | JobTimeline starts |
| 2. AI processing | Processing view | Fields appear one by one in **dotted amber**: title, authors, location, dates, domain, keywords, abstract, each with confidence | *AI suggested* badges |
| 3. Human review | Review workspace | Reviewer clicks a field, source text highlights in the PDF; presses Accept; outline turns **solid teal** | Accept transition |
| 4. Dataset | Dataset upload | CSV preview, column statistics, suggested data dictionary, map of points | Dotted dictionary, solid after review |
| 5. Connect | Relationship step | Pick the expedition; edge appears dotted then solid | Connected rail updates live |
| 6. Explore | Expedition Digital Twin | Route draws, stations pop, timeline scrubs, researchers/datasets/publications/media in the rail | Dashed-to-solid route |
| 7. Ask AI | Research Assistant | "What were the main activities of this expedition?" → cited answer; click chip opens Evidence drawer on page 12 | Citation chips |
| 8. Generate outreach | Content Studio | Choose Student → Science story → **Generate draft** | Amber primary action |
| 9. Verify | Claim dashboard | "Claims 12 · Verified 11 · Needs review 1" with the flagged claim | Violet eye chip |
| 10. Approve | Review workflow | Reviewer fixes the claim, approves; stepper completes | Stepper turns solid |
| 11. Public portal | Homepage / Stories | New story appears; story page shows "Reviewed by" and "Explore the original research" | Solid, trusted look |

Demo tips: use the dataset described in PRD §78 (3 expeditions, 10 researchers, 5 projects, 20 publications, 10 datasets, 100+ images, 10 videos, 5 reports; flagship "Bay of Bengal Marine Expedition 2025"). Pre-seed a deliberate numeric error in the draft (for example "32 stations" instead of 5) so the claim check visibly catches it. Keep a 90-second version: steps 2, 3, 6, 7, 9, 11.

---

## 30. Presentation (PPT) design guidance

- Use the primary logo top-left on a Hawa background; reversed logo on Neel for title and closing slides.
- Slide palette: Neel for text, Sagar for key shapes, Haldi only for one highlight per slide.
- Title in Anek Bold; body at least 24 pt; diagrams drawn with the line-style system (dotted for AI, solid for approved).
- Recommended slide order: problem (fragmentation, P1–P10) → idea (bridge) → four layers (PRD §96) → architecture (PRD §56 simplified) → live demo (storyboard) → governance (human in the loop, claim verification) → impact and KPIs → roadmap → pitch statement (PRD §100).
- One signature visual: the logo deck motif as a thin line running through the slides, dashed on the early problem slides and solid on the solution slides.

---

## 31. Design QA checklist

**Brand**
- Logo versions correct on light and dark; clear space respected.
- Favicon visible at 16 px; manifest icons present.

**Provenance and AI**
- Every AI output labelled and in dotted style until accepted.
- Every claim has status with icon, text, colour.
- Every AI answer shows sources; no-evidence state implemented with the PRD sentence.
- Publish blocked for configured high-risk claims.

**Accessibility**
- Contrast tokens verified; focus visible; keyboard path through each flow.
- Alt text, captions, transcripts, chart tables, map list alternatives.
- Screen-reader pass on search, resource, review, studio.

**Multilingual**
- Hindi, Bangla, Tamil and one RTL language tested on key pages; no clipped conjuncts; line-height correct.
- Language banners for partial translations.

**Responsive and performance**
- 320 px reflow; touch targets; tables collapse.
- LCP and search latency targets met on test devices.

**Content**
- Microcopy consistent across flow; sentence case; no hype words.
- All numbers on public stories traceable to sources.

---

## 32. Appendix

### 32.1 Asset list (`vigyansetu-brand/`)

```text
logo-mark.svg                    logo-mark-512.png
logo-mark-reversed.svg           logo-mark-reversed-512.png
logo-full.svg                    logo-full.png
logo-full-reversed.svg           logo-full-reversed.png
logo-bilingual.svg               logo-bilingual.png
favicon.svg                      favicon.ico
favicon-16.png  favicon-32.png   favicon-48.png
favicon-180.png favicon-192.png  favicon-512.png
site.webmanifest
```

### 32.2 Design tokens (JSON)

```json
{
  "color": {
    "neel": "#12264A", "sagar": "#0E7C86", "hawa": "#EAF2F6",
    "haldi": "#F2A30F", "sindoor": "#C8372D", "patta": "#2E7D4F",
    "jamun": "#6B3FA0", "safed": "#FFFFFF"
  },
  "status": {
    "ai_suggested": { "outline": "dotted", "color": "#F2A30F", "bg": "#FDEFCB" },
    "draft":        { "outline": "dashed", "color": "#B7C6D1" },
    "accepted":     { "rule": "solid", "color": "#0E7C86" },
    "verified":     { "icon": "check", "color": "#2E7D4F" },
    "partially_supported": { "icon": "half-check", "color": "#8A5A00", "bg": "#FDEFCB" },
    "needs_review": { "icon": "eye", "color": "#6B3FA0" },
    "unsupported":  { "icon": "x", "color": "#C8372D" }
  },
  "font": {
    "sans": "Anek (Latin + Indic scripts)",
    "serif": "Source Serif 4 / Noto Serif",
    "mono": "JetBrains Mono"
  },
  "space": [4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96],
  "radius": { "sm": 4, "md": 8, "lg": 14, "full": 9999 },
  "breakpoint": { "xs": 360, "sm": 600, "md": 840, "lg": 1120, "xl": 1440 },
  "motion": { "fast": "120ms", "base": "200ms", "slow": "600ms", "ease": "cubic-bezier(.2,.7,.2,1)" }
}
```

### 32.3 Sample record for design mock-ups (from PRD §78)

```text
Expedition: Bay of Bengal Marine Expedition 2025
Team: 10 researchers · Stations: 5 · Datasets: 3 · Reports: 2
Publications: 4 · Photos: 40 · Videos: 3
Dataset: DS-2025-0007  "Plankton counts, Bay of Bengal, March 2025"  v1.1  CSV  14 MB  CC BY 4.0
Publication: PUB-2025-0014  DOI 10.xxxx/example
Story (student): "How scientists study the ocean"  Key terms: Oceanography, Plankton, Salinity, Biodiversity
Claim check: Claims 12 · Verified 11 · Needs review 1
```

All names, numbers and identifiers above are placeholders for design and demo purposes.

### 32.4 Open design decisions for the team

1. Confirm the institution co-brand: if VigyanSetu sits under a named institute, add a co-brand lockup rule (separator rule, equal heights).
2. Choose the first set of Indian languages for launch (suggest Hindi, Bangla, Tamil, Telugu, Marathi).
3. Decide whether unreviewed AI summaries are ever visible on public pages (recommended: never).
4. Decide the default confidence threshold for "Accept all" (recommended: 90 percent, with a confirmation summary).
5. Decide whether social publishing integrations are shown as disabled "coming soon" or hidden (recommended: hidden in MVP, per PRD §77).

---

*End of document.*
