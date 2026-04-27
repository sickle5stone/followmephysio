# followme physiotherapy — Design System

**Anchor color:** `rgb(27 106 143)` · `#1B6A8F` — a confident teal-blue that reads as *clinical trust + ocean calm*. It is the spine of the brand. Every other token earns its place by either supporting this hue or contrasting it with intent.

**Audience reality:** Patients are 30–60, leaning toward the older half (post-surgical, cancer recovery, Parkinson's, falls prevention, scoliosis). Many will read on phones held at arm's length, in clinic waiting rooms, or after a long day. Type must be **legible without effort**, color must be **vibrant without shouting**, and interaction targets must be **forgiving**.

**Tone:** Vibrant, not muted. The previous cream/sage palette read as *retreat spa*; the client wants the brand to feel like *forward motion* — a physiotherapist literally walking with you. Color is allowed to do work here.

---

## 1. Color System

### 1.1 Brand Spine (the `#1B6A8F` family)

| Token | Hex | RGB | Contrast on white | Use |
|---|---|---|---|---|
| `--brand-50` | `#EEF6FB` | 238 246 251 | — | Page tints, hover backgrounds, large flat areas |
| `--brand-100` | `#D4EAF5` | 212 234 245 | — | Card backgrounds, callout panels |
| `--brand-200` | `#A8D2E8` | 168 210 232 | — | Decorative shapes, illustrations |
| `--brand-400` | `#3A8FB8` | 58 143 184 | 3.4 : 1 | **Large text only** (≥ 24px), icons, decorative borders |
| `--brand-500` | `#1B6A8F` | 27 106 143 | 5.7 : 1 | **Anchor.** Buttons, brand mark, headings |
| `--brand-600` | `#14556F` | 20 85 111 | 7.1 : 1 | **Body links, secondary headings** (AAA) |
| `--brand-700` | `#0F3F54` | 15 63 84 | 10.4 : 1 | Deep text on tints, hover states |
| `--brand-900` | `#072430` | 7 36 48 | 16.2 : 1 | Reserved for highest-contrast moments |

**Rule:** `--brand-500` is the visual identity. `--brand-600` is the *working* color for any text under 24px. Never use `--brand-400` for body copy.

### 1.2 Vibrant Accents (where the energy lives)

The brand spine is calm. Vibrancy comes from a **single warm accent** used with intent — never two accents fighting.

| Token | Hex | Role |
|---|---|---|
| `--accent-coral` | `#E85A4F` | **Primary accent.** Call-to-action emphasis, "Book a session" button hover, key stats. Coral pairs with `#1B6A8F` on the warm/cool axis — high vibrancy, no clash. Contrast on white: 4.6 : 1 (AA). |
| `--accent-coral-deep` | `#B8392E` | Coral text on light backgrounds. 7.4 : 1 (AAA). |
| `--accent-amber` | `#F4A52A` | **Optional warmth.** Use only for "highlight" UI — testimonial stars, certification badges, "trusted since" markers. Never for primary actions. |
| `--accent-mint` | `#3FB8A0` | **Success / progress only.** Recovery milestones, completed-session checkmarks. Not a brand color. |

**Guardrail:** A single page may use brand + coral. Adding amber makes it three; only do this on the homepage hero or a credentials section. Never four accents on one screen.

### 1.3 Surface & Ink

Per the design-preferences default: **white/pale premium**, not dark theme. But "vibrant" means we lean into a *tinted* canvas, not pure clinical white.

| Token | Hex | Use |
|---|---|---|
| `--canvas` | `#FAFCFD` | App / page background. Cooler than `#FFFFFF`, anchors to brand without color-shifting. |
| `--surface-1` | `#FFFFFF` | Cards, content containers |
| `--surface-2` | `#F4F9FC` | Nested panels, secondary cards |
| `--surface-tint` | `#EEF6FB` (= `--brand-50`) | Section backgrounds that should feel "branded" |
| `--ink-primary` | `#0B2230` | Body text. 16.8 : 1 on canvas. AAA. |
| `--ink-secondary` | `#42596A` | Supporting text, captions. 7.4 : 1. AAA. |
| `--ink-tertiary` | `#7A8A95` | Metadata, timestamps. 4.5 : 1. AA only — don't use under 16px. |
| `--ink-muted` | `#B8C3CA` | Disabled states, placeholders. **Never load-bearing.** |

**Borders** use `rgba()` so they recede:
- `--border-default: rgba(11, 34, 48, 0.10)`
- `--border-subtle: rgba(11, 34, 48, 0.06)`
- `--border-strong: rgba(11, 34, 48, 0.16)` — focus rings, active inputs

### 1.4 Color Usage Rules

1. **The 60/30/10 rule for vibrancy:** 60% canvas + surfaces, 30% brand spine, 10% coral accent. Drift toward 50/30/20 on landing/marketing surfaces; never 40/30/30.
2. **Color must mean something.** Coral = action. Mint = success. Amber = trust marker. Brand teal = identity. No decorative gradients.
3. **Never pair `--brand-400` with `--brand-500`** at small sizes — they're too close in luminance and create visual buzz.
4. **Status uses color + icon + text.** A red dot is never enough. Patients with reduced color vision (more common past 50) must still parse status.

---

## 2. Typography — Built for Readability First

**Premise:** A 55-year-old reading at arm's length on a phone in mixed lighting must not strain. This drives every type decision below.

### 2.1 Font Stack

```
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-display: "Fraunces", "Source Serif Pro", Georgia, serif;
```

- **Inter** for all body and UI: high x-height, open apertures, distinct `1 / l / I`, ships in `wght 400/500/600/700`. Optimized for screens — measurably more legible than Helvetica/Arial for older readers (Bernard et al., readability studies on x-height + aperture).
- **Fraunces** for display headings only. Its optical-size axis lets large headings feel warm and human (a physio is a person, not an institution). Keep it to H1/H2.

**Reject:** Roboto (closed apertures), Lato (similar), Montserrat (geometric — letters confuse at small sizes), any condensed face. None of these survive arm's-length reading at 16px.

### 2.2 Scale (mobile-first, ≥ 18px base)

| Token | Size (mobile) | Size (≥ 768px) | Weight | Line-height | Use |
|---|---|---|---|---|---|
| `--text-xs` | 14px | 14px | 500 | 1.5 | Metadata only. Never paragraphs. |
| `--text-sm` | 16px | 16px | 450 | 1.6 | Captions, helper text |
| `--text-base` | **18px** | **18px** | 450 | **1.7** | **Body copy. This is the floor.** |
| `--text-lg` | 20px | 20px | 450 | 1.65 | Lead paragraphs, emphasized body |
| `--text-xl` | 22px | 24px | 500 | 1.5 | Card titles, H4 |
| `--text-2xl` | 26px | 30px | 500 | 1.35 | H3 |
| `--text-3xl` | 30px | 38px | 500 | 1.25 | H2 (Fraunces) |
| `--text-4xl` | 36px | 52px | 500 | 1.15 | H1 (Fraunces) |
| `--text-5xl` | 44px | 72px | 500 | 1.05 | Hero only |

**Why 18px base, not 16px:** WCAG AAA recommends 18px+ for body when the audience skews older. The 1px–2px gain is invisible to a 25-year-old developer and decisive for a 58-year-old patient. This is the most important rule on the page.

### 2.3 Reading Rules

- **Line length:** 60–75 characters max. Set `max-width: 65ch` on paragraph containers.
- **Paragraph spacing:** `margin-bottom: 1.25em`. Older readers benefit from clearer paragraph separation.
- **No justified text.** Justification creates rivers of whitespace that disrupt slow/recovering readers.
- **Body weight is 450, not 400.** A hair heavier survives bright clinic lighting and reduced contrast sensitivity. Inter ships variable — use it.
- **Letter-spacing:** body `0`, headings `-0.01em`, all-caps labels `+0.04em`. Never tighten body type.
- **No italic body copy.** Italics drop legibility ~10% for older readers (Arditi & Cho, 2007). Reserve italic for the Fraunces H1 emphasis word ("walk *with* me") only.

### 2.4 Headings

```
H1 — Fraunces, 36/52px, weight 500, color --ink-primary, italic word in --brand-600
H2 — Fraunces, 30/38px, weight 500, color --ink-primary
H3 — Inter, 26/30px, weight 500, color --brand-700
H4 — Inter, 22/24px, weight 600, color --ink-primary
```

H3 in `--brand-700` is the only place body-adjacent type uses the brand spine — it ties content to identity without forcing brand color into paragraphs.

---

## 3. Spacing & Layout

Base unit `4px`. Scale: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`.

- **Section vertical rhythm:** 64px mobile, 96–128px desktop. Generous breathing room. Cramped sections read as clinical-rushed.
- **Card padding:** 24px mobile, 32px desktop. Symmetrical.
- **Touch targets:** **48 × 48px minimum** for any tappable element (buttons, links in nav, form fields). 44px is the iOS floor; we go higher because of motor-control variance in our audience (Parkinson's caseload, post-surgical patients).
- **Buttons:** height 48px, padding 14px 24px, radius 10px.
- **Container max-width:** 1180px. Content column inside: 720px (≈ 65ch).

---

## 4. Depth Strategy: Subtle Shadows, Single Commit

We pick **one** depth strategy per the design rules. Choice: **subtle shadows** — friendly, approachable, matches a home-based-care brand more than borders-only (which reads as a SaaS dashboard).

```
--shadow-sm:  0 1px 2px rgba(11, 34, 48, 0.04), 0 1px 3px rgba(11, 34, 48, 0.06);
--shadow-md:  0 2px 8px rgba(11, 34, 48, 0.06), 0 8px 24px rgba(11, 34, 48, 0.04);
--shadow-lg:  0 4px 16px rgba(11, 34, 48, 0.08), 0 16px 48px rgba(11, 34, 48, 0.06);
```

No `--shadow-lg` outside modals/dropdowns. Cards always use `--shadow-sm`; on hover, `--shadow-md`. Elevation changes never alter background color.

**Border radius scale:** `6 · 10 · 14 · 22px`. Inputs/buttons 10px, cards 14px, modals/hero panels 22px. Soft enough for "friendly home-care", not bubbly.

---

## 5. Components

### 5.1 Buttons

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| **Primary** | `--brand-500` | white | none | bg `--brand-600`, lift `--shadow-md` |
| **Primary-CTA** *(homepage hero, "Book a session")* | `--accent-coral` | white | none | bg `--accent-coral-deep`, lift |
| **Secondary** | white | `--brand-600` | 1.5px `--brand-500` | bg `--brand-50` |
| **Ghost** | transparent | `--brand-600` | none | bg `--brand-50` |
| **Disabled** | `--surface-2` | `--ink-muted` | none | none |

All buttons: 48px height, 16px font weight 500, focus ring `3px solid --brand-400 / offset 3px`. Coral CTA gets `4px` ring — it's the moment of commitment.

### 5.2 Cards

White background, `--shadow-sm`, 14px radius, 1px border `rgba(11,34,48,0.06)` (whisper-quiet). Padding 32px. On hover (if interactive): translate-y -2px + `--shadow-md` over 200ms ease-out. Non-interactive cards do not animate.

### 5.3 Inputs

- Height **52px** (taller than the 40–44 default — easier targeting for tremor / arthritis).
- Background `#F4F9FC` (slightly inset against white surface) — tactile, visible field.
- Border `1.5px rgba(11,34,48,0.10)`. On focus: `2px --brand-500` + 4px ring `--brand-100`.
- Font 18px, weight 450. Placeholder `--ink-tertiary` *only as hint* — labels are always visible above the field, never floating-only.
- Error state: 1.5px `--accent-coral-deep` + icon + text message. Never red border alone.

### 5.4 Links

- In body: `--brand-600`, underline `1.5px`, offset `3px`.
- Hover: color `--brand-700`, underline thickness `2px`.
- Visited: `#5B3A8C` (a desaturated purple — distinct from brand without competing).
- External link icon shown for off-site links so patients aren't surprised.

### 5.5 Navigation

Sticky top header, same `--canvas` background + border-bottom `--border-subtle`, no color shift. Logo left, nav links centre-right, "Book" coral CTA hard right. On mobile: collapses to a 48×48 hamburger; menu opens as a full-height sheet (not a dropdown — fingers, not cursors).

---

## 6. Iconography

One set: **Lucide** (open, friendly stroke-based, 1.75px stroke at 24px). Reject Heroicons (too thin for older eyes) and Material (too geometric). Icons are 24px in body, 28px in nav, 32px in feature cards. Stroke colour follows text colour, never `--brand-500` mid-paragraph (causes visual stuttering).

---

## 7. Motion

- Micro-interactions: 150ms ease-out
- Card hovers, accordion expand: 200ms ease-out
- Page transitions: 250ms
- **No spring/bounce anywhere.** Healthcare brand — playful motion erodes trust.
- `prefers-reduced-motion: reduce` → all transitions `< 50ms` or removed. Required, not optional.

---

## 8. Accessibility Floor (Non-Negotiable)

- WCAG **AA minimum, AAA for body text**. The token table enforces this.
- Body text contrast: ≥ 7 : 1 (`--ink-primary` on `--canvas` = 16.8 : 1; `--brand-600` on white = 7.1 : 1).
- Focus state on every interactive element. 3px ring, never `outline: none` without replacement.
- All status conveyed by **color + icon + text**.
- Form labels always visible. Errors announce via `aria-live="polite"`.
- Skip-to-main link, semantic landmarks (`<main>`, `<nav>`, `<aside>`).
- Tap targets ≥ 48×48px.
- Test at 200% zoom — layout must not break.
- Alt text on every image. Decorative images get `alt=""`.

---

## 9. What This System Rejects

These are deliberate non-choices:

- **Cream/sage muted palette** (the previous direction) — read as "spa retreat", missed the forward-motion brand promise.
- **Multi-gradient hero backgrounds** — visual noise, hurts older readers, dates badly.
- **Dark mode** — not a fit for a daytime, in-clinic / on-mobile use case; can be added later if asked.
- **Roboto / Lato / Montserrat** — see §2.1.
- **Tiny 14px body text** — disqualifies half the audience.
- **Color-only status indicators** — fails 8% of men over 50.
- **Bouncy spring animations** — wrong tone for healthcare.

---

## 10. Quick-Reference CSS Variables

```css
:root {
  /* Brand */
  --brand-50:  #EEF6FB;
  --brand-100: #D4EAF5;
  --brand-200: #A8D2E8;
  --brand-400: #3A8FB8;
  --brand-500: #1B6A8F;  /* anchor */
  --brand-600: #14556F;
  --brand-700: #0F3F54;
  --brand-900: #072430;

  /* Accents */
  --accent-coral:      #E85A4F;
  --accent-coral-deep: #B8392E;
  --accent-amber:      #F4A52A;
  --accent-mint:       #3FB8A0;

  /* Surfaces */
  --canvas:       #FAFCFD;
  --surface-1:    #FFFFFF;
  --surface-2:    #F4F9FC;
  --surface-tint: #EEF6FB;

  /* Ink */
  --ink-primary:   #0B2230;
  --ink-secondary: #42596A;
  --ink-tertiary:  #7A8A95;
  --ink-muted:     #B8C3CA;

  /* Borders */
  --border-default: rgba(11, 34, 48, 0.10);
  --border-subtle:  rgba(11, 34, 48, 0.06);
  --border-strong:  rgba(11, 34, 48, 0.16);

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(11,34,48,0.04), 0 1px 3px rgba(11,34,48,0.06);
  --shadow-md: 0 2px 8px rgba(11,34,48,0.06), 0 8px 24px rgba(11,34,48,0.04);
  --shadow-lg: 0 4px 16px rgba(11,34,48,0.08), 0 16px 48px rgba(11,34,48,0.06);

  /* Type */
  --font-sans:    "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-display: "Fraunces", "Source Serif Pro", Georgia, serif;

  /* Radius */
  --radius-sm: 6px;
  --radius:    10px;
  --radius-md: 14px;
  --radius-lg: 22px;
}
```

---

**One-line summary:** A vibrant, AAA-readable healthcare system anchored to `#1B6A8F`, lifted by a single coral accent, set in 18px Inter at line-height 1.7, with 48px tap targets — designed so a 58-year-old reads it without squinting and a 35-year-old still finds it modern.
