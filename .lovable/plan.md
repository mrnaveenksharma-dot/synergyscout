
# Synergy Scout — Planning (Phase 2)

Locked from your answers:
- Logo: faithful SVG reconstruction of the two-path interlocking geometry (swap-in-place when finals arrive).
- About: no founder identity section for now — About will lead with "recruiter standard" + values + responsible-technology, no placeholder person.
- Contact: frontend-only forms with realistic validation and a demo success state; backend deferred to Phase 7.
- This turn: written plan + three rendered hero directions.

---

## 1. Component architecture

Design tokens (`src/styles.css`) — brand navy `#082D58`, midnight `#05172B`, signal `#2F6BFF`, warm paper `#F4F1EA`, soft paper `#FAF8F4`, body ink `#10283F`, muted `#617184`, rules at 14% opacity. Manrope (display + body), IBM Plex Mono (technical labels). Radii 8 / 12 / 16. 1280px max, 12-col, gutters 32 / 24 / 20. Sections 120–160 desktop / 72–96 mobile.

```
src/
  components/
    brand/
      Logo.tsx                 // 2-path SVG, variants: horizontal-navy | horizontal-white | symbol
      GeometryPath.tsx         // reusable curved-path primitive (role side / candidate side)
      IntersectionMarker.tsx   // small alignment dot used across sections
    layout/
      SiteHeader.tsx           // logo left, 4 links, primary CTA right, mobile sheet
      SiteFooter.tsx           // compact, mono labels, rules not shadows
      Section.tsx              // enforces vertical rhythm + max-width
      Container.tsx            // 12-col grid helper
      Eyebrow.tsx              // uppercase mono label
    home/
      Hero.tsx                 // signature alignment sequence + recommendation panel
      RecommendationPanel.tsx  // interactive "illustrative example" object
      RoleBriefReveal.tsx      // before/after with drag or scroll-controlled reveal
      Deliverables.tsx         // 4 preview drawers
      MethodStages.tsx         // 4 stages, sticky-side layout on desktop
      StandardPanels.tsx       // 3 connected panels: trained / AI-assisted / accountable
      CandidateBand.tsx        // full-width band, single link
      FinalCTA.tsx             // midnight background
    method/  candidates/  about/  contact/   // page-scoped subtrees
    ui/                        // shadcn primitives, restyled to tokens
  routes/
    __root.tsx                 // header + <Outlet /> + footer; head() defaults only
    index.tsx                  // client-focused home
    method.tsx
    candidates.tsx
    about.tsx
    contact.tsx
    privacy.tsx
    ai-use.tsx
    terms.tsx
    $.tsx                      // brand-consistent 404 (splat)
  lib/
    motion.ts                  // prefers-reduced-motion helper, tiny variants
    validators.ts              // zod schemas for both forms
```

Each shareable route defines its own `head()` (title, description, og:title, og:description). No og:image at __root.

---

## 2. Three hero directions

All three share: locked palette, Manrope display, IBM Plex Mono eyebrow, headline "A shortlist should come with reasons.", both CTAs, one-time alignment animation, "Illustrative example — not a real candidate" tag. They differ in composition, density and where the geometry lives.

**Direction A — "Two lanes converging" (asymmetric split, warm paper)**
- Left column (7/12): eyebrow, headline, supporting copy, two CTAs stacked to inline.
- Right column (5/12): the recommendation panel, floating on warm paper with a fine 1px rule frame (no shadow).
- Geometry: two continuous curves enter from top-left and bottom-right of the whole viewport, pass behind the headline and the panel, and meet at a single intersection marker sitting on the panel's top edge. Curves are 1px signal-blue at 24% opacity; the intersection is a solid 6px dot.
- Feel: editorial and calm. Closest to a broadsheet feature.

**Direction B — "Document-forward" (centered stage, soft paper)**
- Copy block centered, narrow (max ~52ch), CTAs inline below.
- Below the copy, the recommendation panel is the hero object — larger, layered as two offset sheets (role thesis behind, candidate recommendation in front) with a 12px radius and a hairline rule.
- Geometry: the two paths are printed *on* the two sheets — one path traces across the back sheet (role side), the other across the front sheet (candidate side), and they align at a marker exactly where the sheets overlap.
- Feel: the deliverable is the hero. Most literal expression of "the shortlist, explained."

**Direction C — "Aligned columns" (dual-column evidence, warm paper → white gradient stop at bottom)**
- Full-width headline across 12 cols; supporting copy under it constrained to 8 cols.
- Below: two mono-labelled columns — left "ROLE CONTEXT", right "CANDIDATE EVIDENCE" — each a short list of 3 fragments in Plex Mono. A single center rail aligns them; the recommendation resolves as a compact card centered on that rail.
- Geometry: the rail *is* the intersection; the two "paths" are the two evidence columns themselves. Signal blue used only on the resolved recommendation.
- Feel: most technically literate; nearest to an analyst's worksheet.

---

## 3. Signature interaction (WebGL-free)

Implementation: two SVG paths + a handful of absolutely-positioned mono-label chips, animated with Framer Motion timelines. No canvas, no particles, no library beyond `motion` (already lightweight).

Timeline (matches your spec, plays once, `prefers-reduced-motion` shows the final frame instantly):

| Time         | Change                                                                  |
| ------------ | ----------------------------------------------------------------------- |
| 0–400ms      | Role-side path draws (`pathLength` 0→1); 3 role fragments fade in.     |
| 400–900ms    | Candidate-side path draws; 3 evidence fragments fade in from opposite. |
| 900–1400ms   | Non-aligned fragments fade to 15%; aligned fragments translate 8–16px to the intersection. |
| 1400–1800ms  | Recommendation card fades + rises 8px into resolved position.          |
| >1800ms      | All motion stops. Panel becomes interactive (expandable rows).         |

Interactivity after settle: expandable rows for Role outcome / Relevant evidence / Candidate motivation / Known constraints / Recruiter concerns / Questions worth asking. Keyboard-navigable, ARIA-labelled, focus-visible rings in signal blue.

---

## 4. Desktop & mobile hierarchy (home)

Desktop (≥1024): 12-col, hero split per chosen direction; below the fold each section uses its own composition (never a repeating card grid).

Mobile (<768):
1. Header collapses to symbol + hamburger; primary CTA stays visible.
2. Hero copy stacks above the recommendation panel; animation still plays once, scaled.
3. Role-brief reveal switches from drag to a two-tab toggle ("Original brief" / "Clarified brief") — drag on touch is fragile.
4. Method stages become a vertical timeline with the sticky document collapsed into inline previews.
5. Standard panels stack; connective geometry becomes a single vertical rule.
6. Candidate band + final CTA remain full-width bands.

---

## 5. Technical risks & mitigations

- **SVG path animation on mobile Safari**: `pathLength` on complex `<path>` can jitter. Mitigation: keep both paths as single cubic segments, no dash arrays, animate `strokeDashoffset` as fallback.
- **Reduced motion**: all Framer variants gated through a `useReducedMotion()` helper that returns end-state variants immediately. No exceptions.
- **Font loading**: Manrope + Plex Mono via `<link rel="stylesheet">` in `__root` head with `display=swap` + preconnect; reserve heading heights via `font-size-adjust` and container min-heights to hold CLS < 0.1.
- **Drag reveal on role brief**: on touch, replace with tabs — avoids scroll-hijack conflict.
- **Placeholder assets forbidden by brief**: no stock photos, no fake logos/testimonials, no fake dashboards. About page will not include a founder block, per your instruction.
- **Form without backend**: forms validate with zod, show inline errors, and display an explicit demo success state that says "Frontend preview — submissions are not yet stored." So we don't quietly imply persistence.
- **Logo**: the SVG I ship is a faithful reconstruction; a `Logo` component with a single `src` swap means finals drop in without touching layouts.
- **Route architecture**: separate routes (not hash anchors) for Method/Candidates/About/Contact so each gets its own `head()` and SSR.

---

## 6. Information still required (non-blocking)

I will build placeholders that clearly say "to be provided" for these — no invented content:
- Real primary contact email + LinkedIn URL.
- Actual role specialisations you want listed on Method/Contact.
- Any real training-programme detail beyond the outline in your brief (kept generic if not provided).
- Copy for /privacy, /ai-use, /terms (will ship as clearly-marked stubs).

---

## 7. What happens after you approve this plan

1. Pick a hero direction (A / B / C).
2. I execute **Phase 3** (shell: tokens, typography, header, footer, buttons, form controls, Logo component, page shell) as one review-ready commit.
3. Then **Phase 4** (hero + signature interaction + recommendation panel) — you review desktop and mobile before I proceed.
4. Then Phase 5 sections in the order in your brief, one at a time.
5. Supporting pages, then policies + 404.
6. Backend deferred to Phase 7 per your answer.

Reply with **A**, **B**, or **C** (and any adjustments to this plan) and I'll start Phase 3.
