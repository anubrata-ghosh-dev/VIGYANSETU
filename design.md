# VIGYANSETU — Design System & UI/UX Specification

**Document:** `design.md`  
**Version:** 1.0  
**Status:** SIH Design Blueprint  
**Product:** VIGYANSETU — Unified Scientific Archive & Outreach Platform  
**Design direction:** Indian institutional / government portal + scientific knowledge platform  
**Primary objective:** Create a trustworthy, accessible, restrained and modern public-sector visual language without looking outdated or imitating any specific government department.

---

# 1. Design Executive Summary

VIGYANSETU should look like a **credible Indian public-sector scientific institution**, not like a consumer startup and not like a generic SaaS dashboard.

The visual language should communicate:

- institutional authority
- scientific credibility
- public trust
- accessibility
- permanence
- transparency
- information density without clutter
- Indian public-sector familiarity
- modern digital infrastructure

The design should therefore combine:

```text
Government Portal Familiarity
            +
Scientific Editorial Quality
            +
Modern Information Architecture
            +
Strong Accessibility
            +
Subtle Indian Visual Identity
```

The interface should be:

> **Serious enough for a ministry/research institution, modern enough for students and researchers, and simple enough for ordinary citizens.**

---

# 2. Research Basis

This design system is based primarily on current Indian government guidance and observed patterns from official public digital platforms, with international government design systems used only as comparative references.

## 2.1 GIGW 3.0

The Guidelines for Indian Government Websites and Apps (GIGW 3.0) are the primary reference.

GIGW describes the need for consistent conventions, layout standards, navigation strategies, accessibility, security and user-centric information architecture. It specifically emphasizes UI/UX, user-centric IA, CMS, monitoring, accessibility, multilingual capabilities and integration with public digital infrastructure.

Source:

- https://guidelines.india.gov.in/

GIGW 3.0 is developed with NIC, STQC and CERT-In participation and is intended to improve quality, accessibility and security of Indian government web and app experiences.

Design implication:

```text
Do:
- consistent navigation
- predictable components
- clear ownership
- accessible contrast
- semantic hierarchy
- mobile-first layouts
- clear page titles
- meaningful breadcrumbs
- strong search
- multilingual support

Do not:
- invent complex navigation
- hide important information behind decorative interactions
- depend on colour alone
- create excessive animations
- use low-contrast text
```

---

# 3. Research Findings That Directly Affect the Design

## 3.1 Government identity must be visible

GIGW states that association with government/institutional ownership should be demonstrated through the appropriate emblem or logo, displayed prominently and correctly.

For VIGYANSETU:

**Important:** Do not use the State Emblem of India, an official ministry emblem, or another government seal unless the eventual institution has authorization to use it.

For the SIH prototype:

```text
[Concept Institution Logo]
VIGYANSETU
Scientific Knowledge & Outreach Platform
```

The design should provide a reserved identity area that can later accommodate an authorized institutional logo/emblem.

Reference:

https://guidelines.india.gov.in/guidelines/

---

# 4. Indian Government Portal References

## 4.1 National Portal of India

The National Portal of India presents itself as a central access point for government information and services.

Its current information architecture uses:

- search
- trending searches
- services
- information categories
- citizen engagement
- multilingual capability
- content sources

The India Portal 2.0 material also emphasizes:

- citizen-centric information architecture
- enhanced search
- multilingual presentation
- accessibility
- user-segment-oriented information

Reference:

https://www.india.gov.in/

Design lessons for VIGYANSETU:

1. Search should be prominent.
2. Users should be able to discover by category.
3. Information should be organized around user needs.
4. The homepage should not be a giant visual banner with little usable information.
5. Content should be presented in recognizable groups.

---

# 5. MyGov Reference

MyGov provides a useful reference for public-sector accessibility controls.

Its interface exposes accessibility functionality such as:

- high contrast
- dark contrast
- highlight links
- text-size controls
- line-height adjustment
- text-spacing controls
- big cursor
- screen-reader support

Reference:

https://www.mygov.in/

VIGYANSETU should adopt the principle rather than necessarily copying the exact UI.

Recommended accessibility toolbar:

```text
Accessibility
|
+-- Text size
+-- Contrast
+-- Highlight links
+-- Reduce motion
+-- Keyboard navigation help
+-- Screen reader-friendly structure
```

---

# 6. BHASHINI Reference

BHASHINI represents India's public digital infrastructure approach to language technology.

Its current platform provides access to:

- Indian language services
- APIs
- AI models
- language resources
- glossaries
- multilingual solutions

Reference:

https://bhashini.gov.in/

Design implication:

Multilingual support should not be an afterthought.

Language switching should be:

```text
EN | हिन्दी | বাংলা | தமிழ் | తెలుగు | ...
```

and should preserve the user's current page/context whenever possible.

---

# 7. International Reference: GOV.UK Design System

GOV.UK is useful as a design-system reference because it demonstrates how a government service can be:

- restrained
- highly readable
- component-driven
- accessible
- consistent
- content-first

Reference:

https://design-system.service.gov.uk/

GOV.UK explicitly uses reusable components and design tokens for layout, typography, colour and interactions.

VIGYANSETU should learn from this **systematic approach**, not copy the UK branding.

---

# 8. International Reference: USWDS

The U.S. Web Design System is another useful reference for:

- design tokens
- role-based colour
- reusable components
- typography
- accessibility
- government-service consistency

Reference:

https://designsystem.digital.gov/

USWDS organizes colour through role-based tokens rather than arbitrary colours.

VIGYANSETU should follow the same principle:

```text
Primary
Secondary
Accent
Surface
Text
Border
Success
Warning
Error
Focus
```

instead of scattering arbitrary hex codes throughout the application.

---

# 9. Design Philosophy

## 9.1 Visual Character

VIGYANSETU should feel:

| Attribute | Target |
|---|---|
| Trustworthy | Very high |
| Institutional | Very high |
| Scientific | High |
| Modern | Medium-high |
| Friendly | Medium |
| Decorative | Low |
| Playful | Low |
| Dense | Medium |
| Editorial | High |
| Accessible | Very high |

---

# 10. What the Product Should NOT Look Like

Avoid:

- neon gradients
- glassmorphism everywhere
- excessive rounded cards
- giant animated hero sections
- dark-mode-only UI
- huge AI chatbot dominating the homepage
- crypto-style dashboards
- startup landing-page language
- excessive purple/pink AI branding
- excessive orange
- excessive use of the Indian flag colours
- decorative 3D illustrations
- excessive shadows
- unnecessary animations

The government/scientific identity comes from:

```text
Typography
+
Spacing
+
Grid
+
Hierarchy
+
Restrained Colour
+
Consistent Components
```

not from putting a saffron stripe everywhere.

---

# 11. Core Visual Direction

Recommended visual composition:

```text
┌──────────────────────────────────────────────────────────┐
│ INSTITUTION / GOVERNMENT IDENTITY BAR                    │
├──────────────────────────────────────────────────────────┤
│ LOGO   VIGYANSETU                  Language  Accessibility│
├──────────────────────────────────────────────────────────┤
│ Discover  Research  Data  Expeditions  Learn  Outreach   │
├──────────────────────────────────────────────────────────┤
│                                                          │
│                       CONTENT                            │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ FOOTER                                                   │
└──────────────────────────────────────────────────────────┘
```

The header should be information-rich but not visually heavy.

---

# 12. Colour System

## 12.1 Design Goal

The colour system should feel:

- Indian
- institutional
- scientific
- trustworthy
- calm
- authoritative

without becoming a literal Indian flag recreation.

The primary visual identity should be **deep institutional blue**, supported by:

- warm saffron accent
- restrained scientific green
- neutral white/off-white surfaces
- dark navy text

---

# 13. Primary Palette

## P-01 — Institutional Navy

```text
Name: Institutional Navy
HEX: #123B5D
RGB: 18, 59, 93
```

Primary brand colour.

Use for:

- primary navigation
- major buttons
- section headers
- active states
- institutional bands
- footer
- key links where appropriate

Do not use it for every element.

---

# 14. Primary Dark

```text
Name: Deep Navy
HEX: #0B253A
RGB: 11, 37, 58
```

Use for:

- footer
- very high-emphasis headings
- dark information panels
- navigation hover states

---

# 15. Primary Mid

```text
Name: Research Blue
HEX: #1B5A85
RGB: 27, 90, 133
```

Use for:

- secondary buttons
- links
- active navigation indicators
- charts
- map controls

---

# 16. Primary Light

```text
Name: Research Blue 100
HEX: #EAF3F8
```

Use for:

- selected filters
- information cards
- search suggestions
- soft backgrounds

---

# 17. Primary Pale

```text
Name: Research Blue 050
HEX: #F5FAFC
```

Use for:

- page sections
- alternate backgrounds
- empty-state backgrounds

---

# 18. Saffron Accent

```text
Name: Institutional Saffron
HEX: #D9822B
RGB: 217, 130, 43
```

Purpose:

- accent line
- featured marker
- visual highlight
- timeline accent
- research discovery indicator
- small decorative elements

Important:

**Do not use saffron as body text on white.**

It is primarily an accent colour.

---

# 19. Saffron Soft

```text
HEX: #FFF4E5
```

Use for:

- notices
- featured metadata
- warm informational cards
- subtle highlights

---

# 20. Scientific Green

```text
Name: Research Green
HEX: #2E6B4E
RGB: 46, 107, 78
```

Use for:

- verified
- published
- available dataset
- environmentally related scientific visualizations
- positive status

Never use green alone to communicate meaning.

Always pair it with:

- text
- icon
- status label

---

# 21. Green Soft

```text
HEX: #EAF5EE
```

Use for:

- success panels
- approved states
- positive quality indicators

---

# 22. Error Red

```text
HEX: #B42318
```

Use for:

- validation errors
- failed processing
- dangerous actions
- critical warnings

Soft background:

```text
#FDECEC
```

---

# 23. Warning Amber

```text
HEX: #9A6700
```

Use for:

- pending review
- incomplete metadata
- embargo warning
- quality warning

Soft background:

```text
#FFF7D6
```

---

# 24. Information Blue

```text
HEX: #175CD3
```

Use sparingly for:

- informational alerts
- system messages

Soft background:

```text
#EFF8FF
```

---

# 25. Focus Yellow

```text
HEX: #FFD43B
```

Use specifically for:

- keyboard focus
- accessibility focus indicator

Do not use it as general branding.

A high-visibility focus state is consistent with government design-system practice.

---

# 26. Neutral Palette

## Neutral 950

```text
#17202A
```

Primary text.

## Neutral 900

```text
#1F2933
```

Heading text.

## Neutral 700

```text
#52606D
```

Secondary text.

## Neutral 600

```text
#66788A
```

Metadata.

## Neutral 500

```text
#7B8794
```

Placeholder text only where contrast remains sufficient.

## Neutral 400

```text
#9AA5B1
```

Disabled/decorative.

## Neutral 300

```text
#CBD2D9
```

Borders.

## Neutral 200

```text
#E4E7EB
```

Dividers.

## Neutral 100

```text
#F1F3F5
```

Surface.

## Neutral 050

```text
#F8FAFC
```

Page background.

## White

```text
#FFFFFF
```

Primary surface.

---

# 27. Recommended Colour Roles

```text
                 60%
              NEUTRALS
        White / Off-white / Gray

                 25%
             BLUE SYSTEM
       Navy / Research Blue

                 10%
             SENSITIVE ACCENTS
       Saffron / Green / Amber

                  5%
             FUNCTIONAL STATES
      Error / Warning / Success
```

This is a design target, not a mathematical requirement.

The important rule is:

> **Neutral surfaces should dominate.**

---

# 28. Colour Usage Matrix

| Element | Colour |
|---|---|
| Page background | #F8FAFC |
| Main surface | #FFFFFF |
| Header | #FFFFFF |
| Primary navigation | #123B5D |
| Primary button | #123B5D |
| Primary button hover | #0B253A |
| Secondary button | #FFFFFF + #123B5D border |
| Main heading | #17202A |
| Body text | #1F2933 |
| Secondary text | #52606D |
| Link | #1B5A85 |
| Link hover | #123B5D |
| Border | #CBD2D9 |
| Divider | #E4E7EB |
| Success | #2E6B4E |
| Warning | #9A6700 |
| Error | #B42318 |
| Focus | #FFD43B |
| Saffron accent | #D9822B |

---

# 29. Accessibility Colour Rules

GIGW requires colour not to be the sole mechanism for communicating information and requires sufficient contrast.

For normal text, target at least:

```text
4.5:1
```

For large text:

```text
3:1
```

For critical interactive elements, use stronger contrast wherever possible.

Reference:

https://guidelines.india.gov.in/guidelines/

GIGW also states that colour must not be the only visual means of conveying information.

Therefore:

```text
BAD

● red = error
● green = success

GOOD

✕ Error — Upload failed
✓ Success — Resource published
```

---

# 30. Colour + Icon + Text Rule

Every status should use three signals where practical:

```text
ICON + LABEL + COLOUR
```

Example:

```text
✓ Published
```

not simply:

```text
[green dot]
```

---

# 31. Typography

## Primary Font

Recommended:

**Noto Sans**

Why:

- excellent Unicode coverage
- Indian-language support
- clean institutional appearance
- highly legible
- consistent Latin + Devanagari and other scripts

Recommended stack:

```css
font-family:
  "Noto Sans",
  "Noto Sans Devanagari",
  "Noto Sans Bengali",
  system-ui,
  sans-serif;
```

Where specific scripts require them, use appropriate Noto Sans script families.

---

# 32. Optional Display Typeface

Do not introduce a decorative display font.

Scientific/government interfaces should prioritize consistency and readability.

Use the same family for most UI.

---

# 33. Type Scale

Desktop:

```text
Display:      48px / 56px
H1:           36px / 44px
H2:           28px / 36px
H3:           22px / 30px
H4:           18px / 26px
Body Large:   18px / 30px
Body:         16px / 26px
Body Small:   14px / 22px
Caption:      12px / 18px
```

Mobile:

```text
H1:           30px / 38px
H2:           24px / 32px
H3:           20px / 28px
Body:         16px / 26px
Small:        14px / 22px
```

---

# 34. Typography Rules

1. Only one H1 per page.
2. H2 introduces major sections.
3. H3 introduces subsections.
4. Never use heading tags purely to make text large.
5. Body text should remain comfortably readable.
6. Use bold for emphasis, not colour alone.
7. Avoid all-caps body text.
8. Avoid overly tight line height.
9. Keep paragraphs short.
10. Prefer left alignment.

GIGW emphasizes meaningful heading hierarchy and semantic markup.

Reference:

https://guidelines.india.gov.in/using-semantically-correct-markup/

---

# 35. Reading Width

Long-form content should have a controlled reading width.

Target:

```text
60–75 characters per line
```

For research articles:

```text
max-width: 720–780px
```

For metadata-heavy pages:

Use wider layouts.

---

# 36. Spacing System

Use an 8-point base grid.

```text
4px
8px
12px
16px
24px
32px
40px
48px
64px
80px
96px
```

Primary spacing tokens:

```text
space-1 = 4px
space-2 = 8px
space-3 = 12px
space-4 = 16px
space-5 = 24px
space-6 = 32px
space-7 = 40px
space-8 = 48px
space-9 = 64px
space-10 = 80px
space-11 = 96px
```

---

# 37. Layout Grid

Desktop:

```text
12-column grid
```

Maximum content width:

```text
1280px
```

Preferred content width:

```text
1200px
```

Gutter:

```text
24px
```

Mobile:

```text
4-column grid
```

Tablet:

```text
8-column grid
```

---

# 38. Page Container

```css
max-width: 1280px;
margin-inline: auto;
padding-inline: 24px;
```

Mobile:

```css
padding-inline: 16px;
```

---

# 39. Government Identity Strip

Top strip:

```text
┌─────────────────────────────────────────────────────────────┐
│ Government / Institution Identity            Accessibility  │
└─────────────────────────────────────────────────────────────┘
```

Height:

```text
32–36px
```

Background:

```text
#F1F3F5
```

Text:

```text
#52606D
```

Purpose:

- institutional context
- accessibility link
- language selector
- important official links

Do not make this strip visually dominant.

---

# 40. Main Header

Recommended:

```text
┌─────────────────────────────────────────────────────────────┐
│ [LOGO] VIGYANSETU                     EN | हिन्दी | বাংলা  │
│        Scientific Knowledge & Outreach                      │
└─────────────────────────────────────────────────────────────┘
```

Height:

```text
72–88px
```

Background:

```text
#FFFFFF
```

Border:

```text
1px solid #E4E7EB
```

---

# 41. Main Navigation

Use a deep navy horizontal bar on desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│ Discover  Research  Data  Expeditions  Learn  Outreach     │
└─────────────────────────────────────────────────────────────┘
```

Background:

```text
#123B5D
```

Text:

```text
#FFFFFF
```

Active item:

```text
White text
+
bottom saffron indicator
```

Do not use large pill-shaped navigation buttons.

---

# 42. Search

Search is a first-class product feature.

Homepage search:

```text
┌──────────────────────────────────────────────────────────────┐
│ 🔎 Search reports, datasets, expeditions, researchers...    │
└──────────────────────────────────────────────────────────────┘
```

Desktop width:

```text
640–760px
```

Height:

```text
52–60px
```

Search button:

```text
#123B5D
```

---

# 43. Search Suggestions

Suggestions should be grouped:

```text
Recent searches
Research
Datasets
Expeditions
Researchers
Topics
```

Example:

```text
Search:
marine biodiversity

Research
  Bay of Bengal Expedition Report

Datasets
  Marine Biodiversity Dataset 2025

Expeditions
  Bay of Bengal Expedition 2025
```

---

# 44. Breadcrumbs

Every deep page should show breadcrumbs.

Example:

```text
Home
› Research
› Expeditions
› Bay of Bengal Expedition 2025
```

Breadcrumbs should be:

- small
- readable
- keyboard accessible
- visible above H1

GIGW navigation guidance explicitly recommends breadcrumbs for showing current location in a site hierarchy.

---

# 45. Buttons

## Primary

```text
Background: #123B5D
Text: #FFFFFF
Radius: 3px
Height: 44px
```

Example:

```text
[ Explore Expedition ]
```

## Secondary

```text
Background: #FFFFFF
Border: #123B5D
Text: #123B5D
```

## Tertiary

Text-only.

Do not create ten visually different button styles.

---

# 46. Button Shape

Avoid giant pill buttons.

Recommended:

```text
3px–4px radius
```

Government portals typically benefit from functional geometry.

Slight rounding is acceptable for modernity, but avoid:

```text
border-radius: 9999px
```

for ordinary buttons.

---

# 47. Cards

Cards should be used sparingly.

Recommended:

```text
background: #FFFFFF
border: 1px solid #E4E7EB
border-radius: 4px
```

Shadow:

```text
none
```

or very subtle:

```text
0 1px 3px rgba(...)
```

Do not create floating cards everywhere.

---

# 48. Resource Card

Example:

```text
┌───────────────────────────────────────────────┐
│ DATASET                                       │
│                                               │
│ Bay of Bengal Temperature Dataset 2025       │
│                                               │
│ Oceanography · 2025 · 14 MB                  │
│                                               │
│ Water temperature observations collected     │
│ during the 2025 expedition.                  │
│                                               │
│ [View Dataset]                                │
└───────────────────────────────────────────────┘
```

---

# 49. Metadata Chips

Use compact rectangular tags.

Example:

```text
[Dataset] [Oceanography] [2025]
```

Avoid excessive pill shapes.

Radius:

```text
3px
```

---

# 50. Status Tags

Examples:

```text
✓ Published
! Review Required
⏳ Embargoed
× Processing Failed
```

Each must include text.

---

# 51. Tables

Scientific repositories need tables.

Rules:

- header row
- visible borders
- adequate padding
- horizontal scrolling only when genuinely necessary
- responsive alternative for narrow screens
- sortable controls must be keyboard accessible

Never use HTML tables for layout.

GIGW explicitly recommends tables for actual tabular data with proper headers/captions rather than layout.

---

# 52. Dataset Table

```text
┌─────────────┬──────────┬──────────┬──────────────┐
│ Station     │ Depth    │ Temp.    │ Salinity     │
├─────────────┼──────────┼──────────┼──────────────┤
│ BOB-01      │ 20 m     │ 28.4°C   │ 34.2 PSU     │
│ BOB-02      │ 50 m     │ 27.9°C   │ 34.8 PSU     │
└─────────────┴──────────┴──────────┴──────────────┘
```

---

# 53. Alerts

## Information

Blue left border.

```text
ⓘ This dataset is available through the public repository.
```

## Success

Green.

```text
✓ Resource published successfully.
```

## Warning

Amber.

```text
! Metadata requires curator review.
```

## Error

Red.

```text
× Upload failed. Please try again.
```

---

# 54. Do Not Use Colour Alone

Bad:

```text
red circle
```

Good:

```text
× Processing failed
```

Bad:

```text
green dataset card
```

Good:

```text
✓ Public Dataset
```

---

# 55. Accessibility Toolbar

Recommended desktop location:

Top utility bar.

```text
Accessibility
|
Text -
Text +
Contrast
Highlight Links
Reduce Motion
```

Mobile:

Accessible menu item.

Do not let the toolbar cover content.

---

# 56. Skip Link

Every page must begin with a keyboard-accessible skip link:

```text
Skip to main content
```

It should become visible when focused.

GIGW explicitly recommends this.

Reference:

https://guidelines.india.gov.in/quick-tips/

---

# 57. Focus State

Keyboard focus:

```text
2px solid #FFD43B
outline-offset: 2px
```

Never remove browser focus without replacing it with a clearly visible equivalent.

---

# 58. Link Design

Default:

```text
#1B5A85
text-decoration: underline
```

Hover:

```text
#123B5D
```

Visited:

Use a distinguishable accessible colour where required.

Links should remain visually identifiable without colour perception.

---

# 59. Iconography

Use one icon family consistently.

Recommended:

**Lucide Icons**

Why:

- simple
- technical
- accessible
- open source
- clean
- not cartoonish

Rules:

- 16px for metadata
- 20px for controls
- 24px for feature icons
- 32px+ only for large feature illustrations

Icons should not replace text for important actions.

---

# 60. Imagery

Scientific photography should be a major visual differentiator.

Use:

- expedition photographs
- laboratory photographs
- field research
- instruments
- landscapes
- maps
- researchers at work

Avoid generic:

- stock scientists
- generic AI robots
- handshake photographs
- random corporate office imagery

---

# 61. Image Treatment

Hero research image:

```text
16:9
```

Cards:

```text
4:3 or 16:9
```

Researcher portraits:

```text
1:1
```

Images should have:

- alt text
- caption where relevant
- source
- copyright/license
- date where available

---

# 62. Hero Design

Avoid a giant marketing hero.

Use an institutional hero:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│ Discover Scientific Knowledge                               │
│                                                             │
│ Explore expeditions, datasets, publications and research   │
│ from [Institution Name].                                    │
│                                                             │
│ [ Search research ]                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Optional right-side image:

```text
scientific expedition photograph
```

---

# 63. Homepage Layout

Recommended order:

```text
1. Government/Institution identity
2. Header
3. Navigation
4. Search
5. Featured research/expedition
6. Explore by resource type
7. Featured science stories
8. Research statistics
9. Latest publications/datasets
10. Student science section
11. Institutional activities
12. Footer
```

---

# 64. Homepage Wireframe

```text
┌─────────────────────────────────────────────────────────────┐
│ INSTITUTION BAR                                             │
├─────────────────────────────────────────────────────────────┤
│ LOGO   VIGYANSETU                          EN | हिन्दी | ...│
├─────────────────────────────────────────────────────────────┤
│ Discover | Research | Data | Expeditions | Learn | Outreach│
├─────────────────────────────────────────────────────────────┤
│                                                             │
│             DISCOVER SCIENTIFIC KNOWLEDGE                   │
│                                                             │
│  Explore research, datasets, expeditions and publications. │
│                                                             │
│     [ 🔎 Search scientific knowledge... ]                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FEATURED EXPEDITION                                         │
│                                                             │
│ [ Large scientific photograph ]  Bay of Bengal Expedition  │
│                                  2025                       │
│                                  [ Explore ]                │
├─────────────────────────────────────────────────────────────┤
│ EXPLORE                                                      │
│                                                             │
│ [Publications] [Datasets] [Expeditions] [Researchers]       │
├─────────────────────────────────────────────────────────────┤
│ SCIENCE STORIES                                             │
│ [Card] [Card] [Card]                                       │
├─────────────────────────────────────────────────────────────┤
│ LATEST RESEARCH                                             │
│ Publications | Datasets | Reports                           │
├─────────────────────────────────────────────────────────────┤
│ SCIENCE FOR STUDENTS                                        │
├─────────────────────────────────────────────────────────────┤
│ INSTITUTIONAL ACTIVITIES                                    │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

---

# 65. Explore Section

Instead of overwhelming users with menus, provide clear discovery blocks:

```text
Explore Research
----------------

Publications
Datasets
Reports
Expeditions
Projects
Researchers
Facilities
Media
```

Each block should have:

- icon
- short explanation
- count
- link

---

# 66. Search Results Page

Layout:

```text
┌─────────────────────────────────────────────────────────────┐
│ Search: marine biodiversity                                 │
├───────────────┬─────────────────────────────────────────────┤
│ FILTERS       │ 243 results                                 │
│               │                                             │
│ Type          │ Dataset                                     │
│ □ Dataset     │ Bay of Bengal Biodiversity Dataset          │
│ □ Publication │ ...                                         │
│               │                                             │
│ Year          │ Publication                                 │
│ □ 2026        │ Marine Biodiversity Survey                  │
│ □ 2025        │ ...                                         │
│               │                                             │
│ Domain        │ Expedition                                  │
│ □ Marine      │ Bay of Bengal Expedition 2025               │
│               │ ...                                         │
└───────────────┴─────────────────────────────────────────────┘
```

Desktop filters can be left-side.

Mobile filters should become:

```text
[ Filters (4) ]
```

---

# 67. Resource Detail Page

```text
Breadcrumb

DATASET

Bay of Bengal Temperature Dataset 2025

Short description...

[Download] [Cite] [Share]

---------------------------------------

Overview
Metadata
Preview
Data Dictionary
Quality
Versions
Related Research

---------------------------------------

Related Expedition

Bay of Bengal Expedition 2025

---------------------------------------

Related Publications
```

---

# 68. Dataset Page

The dataset page should feel scientific rather than corporate.

Top:

```text
Dataset
Bay of Bengal Temperature Dataset 2025

Status: ✓ Published

Version: 1.2

[Download Dataset]
```

Then:

```text
Overview
Coverage
Variables
Preview
Visualization
Quality
Provenance
Versions
Related Resources
```

---

# 69. Expedition Page

This is a flagship page.

Hero:

```text
BAY OF BENGAL EXPEDITION 2025

23 days
32 stations
17 researchers
14 datasets
```

Then:

```text
Interactive Route Map
```

Then:

```text
Expedition Timeline
```

Then:

```text
Research Team
```

Then:

```text
Datasets
Reports
Publications
Photos
Videos
Science Story
```

---

# 70. Expedition Map Design

Map should use muted scientific colours.

Recommended:

- land: #EEF1F4
- water: #EAF3F8
- route: #123B5D
- station: #D9822B
- selected station: #0B253A

Do not use highly saturated map colours.

Map must have:

- zoom
- reset
- legend
- keyboard alternative where practical
- textual station list

---

# 71. Expedition Timeline

Use a vertical timeline:

```text
● 10 Feb
  Departure

│

● 13 Feb
  Station 01
  Samples collected

│

● 18 Feb
  Station 12
  Biodiversity survey

│

● 05 Mar
  Return
```

Colour should not be the only way to distinguish event types.

---

# 72. Research Story Page

Visual language should become slightly more editorial while retaining institutional structure.

```text
SCIENCE STORY

How Scientists Study Marine Biodiversity

5 min read
Based on:
Bay of Bengal Expedition 2025

[Hero image]

Why was the expedition conducted?

...

What did scientists observe?

...

Explore the original research
```

---

# 73. Student Mode

Student content may use slightly warmer visuals.

Still maintain:

- institutional navy
- white surfaces
- clear typography
- scientific photography

Add:

- illustrations
- diagrams
- glossary
- quizzes
- "Why it matters"

Avoid childish cartoon styling.

---

# 74. Research Assistant UI

Do not make it look like ChatGPT.

It should look like an institutional research tool.

```text
┌────────────────────────────────────────────────────────────┐
│ Institutional Research Assistant                           │
│ Ask about the research collection.                        │
├────────────────────────────────────────────────────────────┤
│                                                            │
│ You                                                        │
│ What expeditions studied marine biodiversity after 2022?  │
│                                                            │
│ Assistant                                                  │
│ I found 4 relevant expeditions...                         │
│                                                            │
│ Sources                                                    │
│ [1] Expedition Report 2025, p. 18                         │
│ [2] Marine Biodiversity Dataset, v1.1                     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

# 75. AI Trust UI

Every AI answer should visibly communicate provenance.

Example:

```text
Answer generated from institutional sources

Sources:
1. Bay of Bengal Expedition Report — p. 18
2. Marine Biodiversity Dataset — v1.1
```

Do not say:

```text
AI is 98% accurate
```

unless such a metric has actually been scientifically validated.

---

# 76. Content Studio Design

Admin interface:

```text
CONTENT STUDIO

Source
[ Bay of Bengal Expedition 2025 ]

Audience
[ General Public ]

Language
[ English ]

Format
[ Science Story ]

Tone
[ Informative ]

Length
[ Medium ]

[ Generate Draft ]
```

After generation:

```text
AI DRAFT

Scientific claims: 14
Verified: 13
Needs review: 1

[ Edit Draft ]

Evidence
---------------------------------
Claim 1 ✓
Claim 2 ✓
Claim 3 !
```

---

# 77. Claim Verification UI

```text
CLAIM REVIEW

Claim:
"The expedition collected samples from 32 stations."

Status:
✓ SUPPORTED

Evidence:
Expedition Report 2025
Page 18

[ Open Source ]
```

Unsupported:

```text
! NEEDS REVIEW

No sufficiently direct evidence found.

[ Edit Claim ]
[ Remove Claim ]
```

---

# 78. Admin Design Language

Admin screens can be denser than public screens.

Use:

- compact tables
- filters
- side navigation
- status tags
- metrics
- review queues

But keep the same design tokens.

---

# 79. Admin Layout

```text
┌───────────────┬─────────────────────────────────────────────┐
│ ADMIN         │ Dashboard                                   │
│               │                                             │
│ Dashboard     │ [Resources] [Reviews] [AI Jobs] [Storage]  │
│ Resources     │                                             │
│ Submissions   │ Pending Review                              │
│ Datasets      │ ------------------------------------------  │
│ Publications  │ Resource                    Status          │
│ Expeditions   │ Expedition Report           Review          │
│ AI Studio     │ Dataset 2025                Approved        │
│ Reviews       │ ...                                         │
│ Analytics     │                                             │
│ Users         │                                             │
│ Audit Logs    │                                             │
└───────────────┴─────────────────────────────────────────────┘
```

---

# 80. Admin Sidebar

Desktop width:

```text
240–260px
```

Background:

```text
#0B253A
```

Text:

```text
#FFFFFF
```

Active:

```text
#123B5D
+
saffron left border
```

Mobile:

Sidebar becomes drawer.

---

# 81. Forms

Forms should be simple and government-service-like.

Structure:

```text
Label
Hint
Input
Validation
```

Example:

```text
Dataset title
Enter the official title used in the research record.

[________________________________]

Required
```

Do not put labels only inside placeholders.

---

# 82. File Upload

```text
Upload scientific resource

[ Choose file ]

Accepted:
PDF, CSV, XLSX, JSON, GeoJSON, JPG, PNG, MP4

Maximum:
Configured by administrator
```

After upload:

```text
✓ File uploaded

Processing:
████████████░░░ 82%

Metadata extraction in progress...
```

---

# 83. Review Queue

```text
REVIEW QUEUE

Filter:
[Scientific Metadata] [Outreach] [Datasets]

-----------------------------------------------

Resource
Bay of Bengal Expedition Report

Submitted by
Dr. A. Kumar

AI metadata
92% confidence

Status
Needs Review

[Review]
```

---

# 84. Empty States

Do not use cartoon illustrations.

Use concise explanatory text.

Example:

```text
No datasets found.

Try changing the year, domain or location filters.

[Clear filters]
```

---

# 85. Error States

Error messages should explain:

1. What happened.
2. Why.
3. What the user can do.

Bad:

```text
Error 500
```

Good:

```text
We couldn't process this document.

The PDF could not be read successfully.

You can:
• try uploading the file again
• upload a different copy
• contact the archive administrator
```

---

# 86. Loading States

Prefer skeletons for content retrieval.

Example:

```text
██████████████████
████████████
████████████████████
```

For AI jobs:

Use explicit status:

```text
Extracting text...
Finding metadata...
Creating search index...
```

---

# 87. Motion

Motion should be minimal.

Use animation only for:

- loading
- state changes
- drawer transitions
- map interactions

Avoid:

- auto-playing hero animation
- parallax
- bouncing buttons
- excessive hover effects

Provide reduced-motion support.

---

# 88. Responsive Design

GIGW emphasizes responsive design and accessibility across device sizes.

Reference:

https://guidelines.india.gov.in/accessibility-guidelines-and-attributes/

Minimum conceptual target:

```text
320px
375px
768px
1024px
1280px
1440px+
```

No horizontal scrolling for ordinary content at 320 CSS px.

---

# 89. Mobile Navigation

Mobile header:

```text
┌────────────────────────────────────┐
│ ☰  VIGYANSETU       🔍  EN        │
└────────────────────────────────────┘
```

Menu:

```text
Discover
Research
Data
Expeditions
Learn
Outreach

Accessibility
Language
Help
```

---

# 90. Mobile Search

Search should remain easy to reach.

```text
[ 🔎 Search scientific knowledge ]
```

Place near the top of the homepage.

---

# 91. Mobile Resource Cards

Use single-column layout.

Avoid multi-column dense grids.

```text
┌──────────────────────┐
│ DATASET              │
│                      │
│ Marine Dataset 2025  │
│                      │
│ Oceanography · 2025  │
│                      │
│ [View Dataset]       │
└──────────────────────┘
```

---

# 92. Footer

Footer should communicate ownership.

Structure:

```text
┌─────────────────────────────────────────────────────────────┐
│ VIGYANSETU                                                  │
│ Scientific Knowledge & Outreach Platform                    │
│                                                             │
│ Research      Data      Expeditions      Outreach           │
│                                                             │
│ Accessibility | Sitemap | Privacy | Terms | Copyright      │
│                                                             │
│ About this portal                                            │
│ Owned by: [Institution]                                      │
│ Developed by: [Authorized Team]                             │
│                                                             │
│ Last Updated: DD MMM YYYY                                   │
└─────────────────────────────────────────────────────────────┘
```

GIGW emphasizes clear ownership and last-updated/review information.

---

# 93. Footer Colour

```text
Background: #0B253A
Text: #FFFFFF
Secondary text: #D7E0E8
Links: #FFFFFF
Accent: #D9822B
```

---

# 94. Ownership Notice

For an actual government deployment:

```text
Content owned and managed by:
[Institution / Ministry / Department]
```

For SIH prototype:

```text
Prototype interface for demonstration purposes.
Institutional identity and official emblem to be configured
by the authorized organization.
```

This prevents accidental representation as an official government website.

---

# 95. Language Switcher

Desktop:

```text
English ▼
```

Expanded:

```text
English
हिन्दी
বাংলা
मराठी
தமிழ்
తెలుగు
...
```

Do not display flags as language identifiers.

Use language names.

---

# 96. Language Consistency

All translated versions must preserve:

- navigation hierarchy
- page meaning
- resource identifiers
- scientific terms
- citations
- metadata relationships

GIGW emphasizes synchronization between multilingual versions.

---

# 97. Scientific Terminology

Important terms should preserve the canonical scientific term.

Example:

```text
Phytoplankton bloom
फाइटोप्लवक प्रस्फुटन
```

Where translation is uncertain:

```text
Phytoplankton bloom
(technical term retained)
```

---

# 98. Charts

Charts should use restrained colours.

Primary:

```text
#123B5D
```

Secondary:

```text
#1B5A85
```

Accent:

```text
#D9822B
```

Positive:

```text
#2E6B4E
```

Do not use 10 unrelated colours in one chart.

---

# 99. Chart Accessibility

Every chart must have:

- title
- textual summary
- accessible data table or equivalent
- legend
- units
- source

Do not communicate differences using colour alone.

---

# 100. Data Visualization Style

Scientific charts should look publication-adjacent.

Avoid:

- 3D charts
- decorative gradients
- excessive shadows
- unnecessary chart junk

Prefer:

- clean axes
- subtle gridlines
- clear units
- source labels
- simple legends

---

# 101. Map Design

Maps should visually subordinate geography to scientific information.

Base map:

```text
light neutral
```

Research route:

```text
Institutional Navy
```

Sampling station:

```text
Saffron
```

Selected station:

```text
Deep Navy
```

Restricted location:

```text
Do not expose exact coordinates
```

---

# 102. Logo Direction

Conceptual logo:

### Symbol idea

A bridge connecting:

```text
Research
    |
Knowledge
    |
Public
```

Possible visual motif:

- subtle bridge
- open book
- data nodes
- scientific orbit
- Indian geographic abstraction

Avoid:

- literal Ashoka Chakra recreation
- copied government seals
- excessive tricolour
- AI robot imagery

---

# 103. Logo Lockup

```text
[ SYMBOL ]

VIGYANSETU
Scientific Knowledge & Outreach Platform
```

Optional institutional lockup:

```text
[Institution Logo] | VIGYANSETU
```

---

# 104. Design Tokens

Recommended CSS token structure:

```css
:root {
  --color-brand-950: #0B253A;
  --color-brand-900: #123B5D;
  --color-brand-700: #1B5A85;
  --color-brand-100: #EAF3F8;
  --color-brand-50: #F5FAFC;

  --color-accent-saffron: #D9822B;
  --color-accent-saffron-soft: #FFF4E5;

  --color-success: #2E6B4E;
  --color-success-soft: #EAF5EE;

  --color-warning: #9A6700;
  --color-warning-soft: #FFF7D6;

  --color-error: #B42318;
  --color-error-soft: #FDECEC;

  --color-info: #175CD3;
  --color-info-soft: #EFF8FF;

  --color-focus: #FFD43B;

  --color-text: #1F2933;
  --color-heading: #17202A;
  --color-muted: #52606D;
  --color-border: #CBD2D9;
  --color-divider: #E4E7EB;
  --color-surface: #FFFFFF;
  --color-background: #F8FAFC;
}
```

---

# 105. Border System

Default:

```text
1px solid #E4E7EB
```

Strong:

```text
1px solid #CBD2D9
```

Focus:

```text
2px solid #FFD43B
```

Avoid thick borders except for:

- alerts
- active states
- institutional section separators

---

# 106. Shadow System

Government/institutional design should use minimal elevation.

```text
shadow-sm:
0 1px 2px rgba(11, 37, 58, 0.06)

shadow-md:
0 3px 8px rgba(11, 37, 58, 0.08)
```

Do not use heavy floating-card shadows.

---

# 107. Border Radius

```text
radius-none: 0px
radius-sm: 2px
radius-md: 4px
radius-lg: 8px
```

Default:

```text
4px
```

Use 8px for:

- modals
- large media containers

Avoid excessive 16px/24px rounded UI.

---

# 108. Component Inventory

Build a reusable component library containing:

### Navigation

- GovernmentIdentityBar
- Header
- MainNavigation
- MobileNavigation
- Breadcrumbs
- Footer

### Search

- GlobalSearch
- SearchSuggestions
- SearchFilters
- SearchResult
- SearchPagination

### Content

- ResourceCard
- PublicationCard
- DatasetCard
- ExpeditionCard
- ResearcherCard
- StoryCard

### Data

- DataTable
- MetadataTable
- DatasetPreview
- QualityIndicator
- VersionHistory

### Status

- StatusTag
- Alert
- NotificationBanner
- ProcessingStatus

### Forms

- TextInput
- Textarea
- Select
- Checkbox
- Radio
- FileUpload
- DateInput

### AI

- ResearchAssistant
- SourceCitation
- ClaimReview
- ContentStudio
- AIConfidence

### Maps

- ExpeditionMap
- StationPopup
- MapLegend
- RouteTimeline

### Accessibility

- AccessibilityToolbar
- SkipLink
- LanguageSwitcher

---

# 109. Component Naming

Use product-specific names.

Example:

```text
VigyanHeader
VigyanSearch
VigyanResourceCard
VigyanDatasetPreview
VigyanExpeditionMap
VigyanContentStudio
```

Avoid mixing naming conventions.

---

# 110. Design System Folder

Recommended:

```text
src/
  design-system/
    tokens/
      colors.css
      spacing.css
      typography.css
      shadows.css
      radii.css

    components/
      Button/
      Header/
      Search/
      Card/
      Table/
      Alert/
      Modal/
      Form/
      Breadcrumbs/

    patterns/
      SearchResults/
      ResourceDetail/
      ExpeditionDetail/
      AdminReview/
```

---

# 111. Figma Organization

Recommended Figma structure:

```text
VIGYANSETU
|
+-- 00 Cover
+-- 01 Foundations
|   +-- Colour
|   +-- Typography
|   +-- Spacing
|   +-- Grid
|   +-- Icons
|
+-- 02 Components
|   +-- Navigation
|   +-- Buttons
|   +-- Forms
|   +-- Cards
|   +-- Tables
|   +-- Alerts
|
+-- 03 Patterns
|   +-- Search
|   +-- Resource Detail
|   +-- Dataset
|   +-- Expedition
|   +-- Review
|
+-- 04 Public Portal
+-- 05 Researcher Portal
+-- 06 Admin Portal
+-- 07 Mobile
```

---

# 112. Public Portal Design Principles

Public pages should prioritize:

1. Findability
2. Readability
3. Context
4. Trust
5. Visual storytelling
6. Accessibility

---

# 113. Researcher Portal Principles

Researcher pages should prioritize:

1. Efficiency
2. Metadata
3. Submission status
4. Versioning
5. Search
6. Citation
7. Data access

---

# 114. Admin Portal Principles

Admin pages should prioritize:

1. Workflow
2. Density
3. Review
4. Auditability
5. Filtering
6. Bulk operations
7. Clear status

---

# 115. Government-Like Without Looking Outdated

This is a central design requirement.

Use:

```text
Government credibility
+
Modern spacing
+
Modern typography
+
Strong photography
+
Scientific visualization
```

Do NOT use:

```text
old-style gradients
tiny text
dense menus everywhere
ornamental borders
excessive government seals
dated icons
```

---

# 116. Indian Identity Strategy

Indian identity should be subtle.

Recommended:

### Primary

Deep blue

### Secondary

Warm saffron

### Supporting

Scientific green

### Neutral

White / gray

The interface should **not** become:

```text
Orange + White + Green everywhere
```

That would feel like a political/flag-themed interface rather than a scientific institution.

---

# 117. Saffron Usage Rule

Use saffron for approximately:

```text
5–10% of visual accents
```

Good:

```text
active navigation underline
timeline marker
featured label
small section rule
```

Bad:

```text
saffron body text
saffron backgrounds everywhere
saffron buttons everywhere
```

---

# 118. Government Identity vs Product Identity

There are two layers.

## Layer 1 — Institutional identity

```text
Institution logo
Department name
Government ownership
```

## Layer 2 — Product identity

```text
VIGYANSETU
Scientific Knowledge & Outreach Platform
```

This makes the product deployable by different institutions.

---

# 119. Official Emblem Handling

For prototype:

```text
DO NOT fabricate or modify an official government emblem.
```

Use:

```text
[Institution Logo Placeholder]
```

If deployed by an authorized government organization, its approved emblem/logo assets can be inserted according to institutional brand rules.

---

# 120. Content Design

Use plain, citizen-facing language.

Bad:

> Leveraging an AI-enabled multimodal semantic retrieval architecture to democratize knowledge.

Good:

> Find research, datasets and scientific discoveries from one place.

---

# 121. Headline Style

Prefer:

```text
Discover Scientific Knowledge
Explore Research Expeditions
Find Open Datasets
Understand New Discoveries
```

Avoid:

```text
Revolutionizing the Future of Science
The World's Most Advanced AI Platform
Unlock Infinite Knowledge
```

The second style sounds like startup marketing.

---

# 122. Microcopy

Buttons:

```text
Explore
View Dataset
Download
Read Report
View Expedition
Ask the Research Assistant
Generate Draft
Review
Approve
```

Avoid:

```text
Let's Go!
Unlock Now!
Experience Magic!
```

---

# 123. Search Microcopy

Placeholder:

```text
Search reports, datasets, expeditions, publications...
```

Alternative:

```text
Search scientific knowledge
```

---

# 124. AI Microcopy

Instead of:

```text
Ask our super-intelligent AI
```

use:

```text
Institutional Research Assistant
```

Description:

```text
Ask questions about the institution's research collection.
Answers are grounded in available institutional sources.
```

---

# 125. Trust Indicators

Use factual trust indicators:

```text
Official institutional source
Reviewed by scientific curator
Published
Version 1.2
Last reviewed: 15 Sep 2026
Source document available
```

Do not use meaningless badges such as:

```text
AI Verified
100% Accurate
Trusted AI
```

unless the claim is properly defined and validated.

---

# 126. Publication Page

Structure:

```text
PUBLICATION

Title

Authors
Institution
Publication date

Abstract

DOI
Citation

Files

Related Dataset
Related Expedition
Related Project

Metrics
```

---

# 127. Researcher Profile Design

Hero:

```text
[Portrait]

Dr. Name
Senior Scientist

Department
Institution

Research Areas:
Oceanography
Marine Ecology
```

Then:

```text
Publications
Datasets
Projects
Expeditions
```

---

# 128. Facility Page

```text
Research Facility

Description

Capabilities

Equipment

Research Areas

Projects

Publications

Contact

Virtual Tour / Images
```

---

# 129. Institutional Activity Page

```text
EVENT

National Science Outreach Workshop

Date
Location
Organized by

Overview

Agenda

Speakers

Photos

Videos

Related Research
```

---

# 130. Accessibility Requirements

Target:

**WCAG 2.2 AA where practical, with GIGW 3.0 as the Indian government reference framework.**

Important requirements:

- keyboard operation
- visible focus
- semantic HTML
- accessible labels
- text alternatives
- captions
- transcripts
- accessible tables
- colour independence
- contrast
- responsive layout
- zoom support
- reduced motion

---

# 131. Accessibility Testing

Test with:

### Keyboard

- Tab
- Shift+Tab
- Enter
- Space
- Escape
- Arrow keys where applicable

### Screen reader

Test with:

- NVDA
- VoiceOver

### Visual

Test:

- zoom 200%
- high contrast
- text spacing
- grayscale
- reduced motion

---

# 132. Browser Testing

Minimum:

- Chrome
- Edge
- Firefox
- Safari

Test:

- Windows
- macOS
- Android
- iOS

For Indian-language interfaces, explicitly test Unicode rendering and layout across browsers.

GIGW calls for regional-language font testing across popular browsers and platforms.

---

# 133. Mobile Breakpoints

Recommended:

```text
xs: 320px
sm: 480px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1440px
```

Do not design only for 375px and 1440px.

---

# 134. Responsive Rules

At mobile:

- navigation collapses
- cards become single column
- tables become scrollable or transform into stacked records
- map controls simplify
- filters become drawer
- sidebars become accordions/drawers
- typography reduces modestly
- buttons remain comfortably tappable

---

# 135. Touch Targets

Minimum target:

```text
44 × 44px
```

for important interactive controls.

Do not place tiny icons next to each other without adequate spacing.

---

# 136. Motion Tokens

```text
fast: 120ms
normal: 200ms
slow: 300ms
```

Use easing:

```text
ease-out
```

Avoid long animations.

---

# 137. Data-Dense Scientific UI

The admin and research interface may contain substantial information.

Use:

```text
dense tables
metadata columns
filters
sorting
pagination
```

But separate sections with whitespace.

Density should come from information structure, not tiny typography.

---

# 138. Search Filter Design

Desktop:

```text
FILTERS

Resource Type
☐ Dataset
☐ Publication
☐ Report

Research Domain
☐ Oceanography
☐ Biology
☐ Climate

Year
[2025] [2026]

Location
[Search location]

Access
☐ Public
☐ Restricted
```

---

# 139. Advanced Search

Provide:

```text
[ Advanced Search ]
```

Fields:

- title
- author
- domain
- location
- date range
- resource type
- expedition
- project
- license
- access
- dataset availability

---

# 140. Search Sorting

Options:

```text
Relevance
Newest
Oldest
Most viewed
Most downloaded
Recently updated
```

Do not use popularity as the only ranking.

---

# 141. Knowledge Graph Visualization

The public version should be simple.

Example:

```text
          Researcher
              |
              |
          Expedition
          /       \
     Dataset     Report
       |           |
 Publication     Photos
```

Admin/research mode can expose more relationships.

---

# 142. Knowledge Graph Colour

Use relationship categories:

```text
People       #123B5D
Research     #1B5A85
Data         #2E6B4E
Media        #D9822B
Projects     #52606D
```

But include labels and shapes so colour is not the only identifier.

---

# 143. Content Provenance

On every AI-generated content page, provide:

```text
Based on:
• Expedition Report 2025
• Dataset v1.2
• Publication XYZ
```

This makes the content traceable.

---

# 144. Last Updated

Every important public page should show:

```text
Last updated: 29 September 2026
```

Where appropriate:

```text
Last reviewed: 29 September 2026
```

Do not claim a review if none occurred.

---

# 145. Citation UI

Example:

```text
Source

Bay of Bengal Expedition Report 2025
Pages 18–22

[Open source]
```

For datasets:

```text
Citation:
Institution. (2025). Bay of Bengal Temperature Dataset v1.2.
```

---

# 146. Download UI

Never use:

```text
Download
```

alone for large or important resources.

Use:

```text
Download Dataset
CSV · 14 MB · Version 1.2
```

GIGW expects downloadable material to provide useful information such as title, size, format and usage instructions.

---

# 147. Licensing UI

Example:

```text
License

CC BY 4.0

You may:
✓ Share
✓ Adapt

With:
Attribution required
```

For institutional restrictions:

```text
Access:
Restricted

Reason:
Embargo until 01 Jan 2028
```

---

# 148. Media Accessibility

Images:

```text
Alt text
Caption
Source
License
```

Videos:

```text
Captions
Transcript
Description
```

Audio:

```text
Transcript
```

GIGW explicitly addresses text alternatives and alternatives for time-based media.

---

# 149. Public vs Internal Visual Language

The same brand should span all portals.

Public:

```text
more whitespace
larger photography
simple navigation
```

Researcher:

```text
more metadata
more tables
more filters
```

Admin:

```text
dense tables
workflow controls
review status
```

The tokens remain identical.

---

# 150. Design QA Checklist

Before approving a screen:

### Identity

- [ ] Correct institutional identity
- [ ] Product logo correct
- [ ] No unauthorized emblem

### Layout

- [ ] Consistent grid
- [ ] Correct spacing
- [ ] No unnecessary visual clutter

### Typography

- [ ] One H1
- [ ] Logical headings
- [ ] readable line length
- [ ] adequate line height

### Colour

- [ ] correct token
- [ ] contrast checked
- [ ] colour not sole information carrier

### Accessibility

- [ ] keyboard accessible
- [ ] focus visible
- [ ] alt text
- [ ] labels
- [ ] responsive
- [ ] screen-reader order

### Content

- [ ] plain language
- [ ] dates clear
- [ ] source shown
- [ ] ownership shown

---

# 151. GIGW Alignment Checklist

| Design Area | VIGYANSETU Requirement |
|---|---|
| Institutional identity | Dedicated identity/header area |
| Ownership | Footer + important pages |
| Navigation | Consistent global navigation |
| Search | Prominent global search |
| Breadcrumbs | Deep pages |
| Accessibility | WCAG-oriented implementation |
| Colour | High contrast + redundant cues |
| Semantic structure | H1/H2/H3 hierarchy |
| Mobile | Responsive |
| Language | Multilingual architecture |
| Media | Alt text/captions/transcripts |
| Downloads | Format/size/license information |
| Updates | Last updated/reviewed metadata |
| Security | Security-aware architecture |
| Social | Shareable public content |
| APIs | Structured interoperability |
| CMS | Central content management |

---

# 152. Design Reference Summary

## Primary reference

**GIGW 3.0**

Use for:

- Indian government UX
- accessibility
- ownership
- navigation
- mobile
- content
- security

Reference:

https://guidelines.india.gov.in/

## Indian portal reference

**National Portal of India**

Use for:

- citizen-centric discovery
- search
- categories
- multilingual architecture
- information packaging

Reference:

https://www.india.gov.in/

## Citizen engagement reference

**MyGov**

Use for:

- accessibility controls
- public engagement
- content organization

Reference:

https://www.mygov.in/

## Indian language infrastructure reference

**BHASHINI**

Use for:

- multilingual product thinking
- language services
- Indian language accessibility

Reference:

https://bhashini.gov.in/

## International system reference

**GOV.UK Design System**

Use for:

- design tokens
- components
- government-service UX
- content-first design

Reference:

https://design-system.service.gov.uk/

## International design-token reference

**USWDS**

Use for:

- token architecture
- colour roles
- component systems
- accessibility

Reference:

https://designsystem.digital.gov/

---

# 153. Important Design Decision

VIGYANSETU should **not claim to be an official Government of India portal** in the SIH prototype.

The visual language may be designed for deployment in government/scientific institutions, but the prototype should clearly separate:

```text
Institutional visual language
```

from:

```text
Official government identity
```

Actual emblem/logo usage should be configured only after authorization.

---

# 154. Final Visual Direction

The final product should look approximately like:

```text
WHITE
────────────────────────────────────────
Institution identity

DEEP NAVY
────────────────────────────────────────
Discover | Research | Data | Expeditions

WHITE / OFF-WHITE
────────────────────────────────────────

Large scientific photograph

Discover Scientific Knowledge

[ Search scientific knowledge ]

────────────────────────────────────────

WHITE
Publications   Datasets   Expeditions

────────────────────────────────────────

VERY LIGHT BLUE
Featured Research

────────────────────────────────────────

WHITE
Science Stories

────────────────────────────────────────

OFF-WHITE
Student Science

────────────────────────────────────────

DEEP NAVY
Footer
────────────────────────────────────────
```

With small saffron accents.

---

# 155. Final Colour Scheme

## Core

```text
Institutional Navy    #123B5D
Deep Navy             #0B253A
Research Blue         #1B5A85
```

## Indian institutional accent

```text
Saffron               #D9822B
```

## Scientific accent

```text
Research Green        #2E6B4E
```

## Functional

```text
Success               #2E6B4E
Warning               #9A6700
Error                 #B42318
Info                  #175CD3
Focus                 #FFD43B
```

## Neutrals

```text
Background             #F8FAFC
Surface                #FFFFFF
Border                 #CBD2D9
Divider                #E4E7EB
Muted text             #52606D
Body text              #1F2933
Heading               #17202A
```

---

# 156. Final Design Principle

The most important design decision is:

> **Make the interface feel trustworthy before making it feel impressive.**

The platform is supposed to represent scientific knowledge and potentially institutional/government information.

Therefore:

```text
Trust > Decoration
Clarity > Cleverness
Evidence > Hype
Accessibility > Visual novelty
Consistency > Variety
Content > Animation
```

---

# 157. One-Sentence Design Brief

> **VIGYANSETU should look like a next-generation Indian scientific government portal: deep institutional blue, restrained saffron accents, white/off-white surfaces, highly legible Noto typography, strong search and information hierarchy, documentary scientific imagery, minimal decoration, accessible components, and a design-token architecture suitable for long-term institutional deployment.**

---

# 158. Implementation Checklist

Before development begins, freeze:

- [ ] colour tokens
- [ ] typography
- [ ] spacing
- [ ] grid
- [ ] button styles
- [ ] form styles
- [ ] navigation
- [ ] cards
- [ ] table
- [ ] status system
- [ ] accessibility toolbar
- [ ] footer
- [ ] language switcher
- [ ] map style
- [ ] chart style
- [ ] icon family
- [ ] logo placeholder
- [ ] public portal templates
- [ ] researcher templates
- [ ] admin templates

---

# 159. Sources

1. Guidelines for Indian Government Websites and Apps (GIGW 3.0)  
   https://guidelines.india.gov.in/

2. GIGW Introduction  
   https://guidelines.india.gov.in/introduction/

3. GIGW Guidelines and Attributes  
   https://guidelines.india.gov.in/guidelines/

4. GIGW Accessibility Guidelines  
   https://guidelines.india.gov.in/accessibility-guidelines-and-attributes/

5. GIGW Quick Tips  
   https://guidelines.india.gov.in/quick-tips/

6. GIGW Conformity Matrix  
   https://guidelines.india.gov.in/annexure-ii-matrix-to-check-conformity/

7. National Portal of India  
   https://www.india.gov.in/

8. MyGov India  
   https://www.mygov.in/

9. BHASHINI  
   https://bhashini.gov.in/

10. GOV.UK Design System  
    https://design-system.service.gov.uk/

11. GOV.UK Colour  
    https://design-system.service.gov.uk/styles/colour/

12. GOV.UK Typography  
    https://brand.design-system.service.gov.uk/typography/

13. US Web Design System  
    https://designsystem.digital.gov/

14. USWDS Colour Tokens  
    https://designsystem.digital.gov/design-tokens/color/overview/

15. USWDS Typography  
    https://designsystem.digital.gov/components/typography/

---

# 160. Conclusion

VIGYANSETU's visual identity should deliberately occupy the space between:

```text
Traditional government portal
          and
Modern scientific digital platform
```

It should inherit the strongest public-sector design principles:

- trust
- consistency
- accessibility
- clear ownership
- strong information architecture
- multilingual access
- predictable navigation
- restrained visual language

while improving the visual experience through:

- modern typography
- strong scientific imagery
- clean data visualization
- better spacing
- structured design tokens
- better search
- interactive expedition storytelling

The result should feel like a **serious national scientific knowledge infrastructure product**, not a generic website and not a flashy AI startup.
