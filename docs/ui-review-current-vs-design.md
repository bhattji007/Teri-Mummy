# UI Review: Current Website vs Pencil Design

Date: 2026-02-28  
Scope: Desktop only (`1440px` design track)  
Design source: `pencil-new.pen` nodes `RhLbl`, `sfWnk`, `a17HN`, `Dw4q4`, `ONBRl`, `spv58`, `wsd7i`, `9SQiB`

## Summary
- Visual language is close, but spacing and scale are still inconsistent in Hero, JokeZone, and lower sections.
- Biggest drift is rhythm: vertical paddings and text block spacing are compressed compared to design.
- API section and footer content are mostly aligned, but typography weight/size hierarchy still needs tuning.

## Findings

### 1) Hero block scale is smaller than design
- Design target:
  - Hero section padding: `72px 60px`
  - H1/H2/H3: `104px` Anton, line rhythm by stacked text blocks
  - Left-right gap: `48px`
- Current drift:
  - Headline appears ~20-30% smaller on desktop screenshot.
  - Left block leaves too much unused vertical space under CTA.
- Fix suggestion:
  - Keep container side gutters at ~`60px`.
  - Increase hero title clamp upper bound and desktop scale factor.
  - Match design paddings and maintain `gap: 48px` between left and right columns.

### 2) Hero internal spacing is compressed
- Design target:
  - Text stack to tagline separation is visually larger.
  - Seen row and CTA row have clear breathing room (`~8-16px` stagger).
- Current drift:
  - Tagline and seen-row are too close and low-contrast.
  - CTA row starts too soon after seen row.
- Fix suggestion:
  - Increase margin below title stack.
  - Add explicit spacing between `hero-copy`, `hero-seen-row`, and CTA row.
  - Raise seen-label contrast from near-invisible gray to readable medium gray.

### 3) Right panel composition differs from design proportions
- Design target:
  - Poster `420x500` and counter `420x244` with stronger textual hierarchy.
  - Counter headline and rows are compact but readable.
- Current drift:
  - Poster close to spec, but bio row text is slightly too tiny.
  - Counter numeric block dominates slightly too much relative to row labels.
- Fix suggestion:
  - Increase poster metadata text (`+1px`) and line-height.
  - Reduce counter number size by small step OR increase row label size by small step for balance.

### 4) Ticker section is correct in content, slightly tight in line rhythm
- Design target: 80px bar with large `18px` mono items and relaxed horizontal spacing.
- Current drift: perceived density is tighter due to viewport scaling and item spacing.
- Fix suggestion: keep height fixed at `80px`, increase ticker item gap to match design breathing room.

### 5) JokeZone card typography drift
- Design target:
  - Quote mark `80px`, headline `32px` Anton, large body spacing (`24px` vertical rhythm).
- Current drift:
  - Main joke text appears denser than design and wraps aggressively.
  - Izzat block and share-row sit tighter than intended.
- Fix suggestion:
  - Increase JokeZone content width fidelity to design (`800px` card, generous internal paddings).
  - Increase spacing around quote/title and between progress block/divider/share row.

### 6) StatsBar mostly aligned, but divider/label polish needed
- Design target: 4 equal stats with clear separators and one-line labels.
- Current drift: subtle differences in divider thickness and text micro-alignment.
- Fix suggestion:
  - Keep fixed group widths and 2px dividers.
  - Enforce center alignment with identical label baseline.

### 7) Testimonials cards are close, but text contrast hierarchy differs
- Design target:
  - Badge -> stars -> quote body -> signature, with quote body in mono `12px`.
- Current drift:
  - Quote body is a bit too dim and compact.
- Fix suggestion:
  - Increase quote body contrast and line-height.
  - Keep signature color accents exactly by card tone.

### 8) API section left-right balance still slightly off
- Design target:
  - Left copy column `480px`, terminal `600px`, gap `80px`.
- Current drift:
  - Terminal feels slightly cramped on current render.
- Fix suggestion:
  - Keep exact 480/600 column widths at desktop and preserve large inter-column gap.

### 9) Footer spacing and micro-type
- Design target:
  - Compact centered stack with low-contrast small metadata text.
- Current drift:
  - Footer is close; only minor line-height and letter-spacing differences.
- Fix suggestion:
  - Tighten logo-to-links spacing and use slightly more muted body line.

## Action Priority
1. Hero scale + spacing (largest visible mismatch)
2. JokeZone card spacing and typography rhythm
3. Right column micro-typography (poster metadata + counter row balance)
4. API section width balance
5. Testimonials and footer micro-polish

## API Payload Requirement Check
Required payload format:

```json
{
  "id": 69,
  "joke": "Teri mummy itni slow hai ki...",
  "punchline": "...usne Google Maps khola aur GPS ne bhi bol diya GOOD LUCK.",
  "damage": "∞ izzat",
  "category": "speed",
  "roast_level": "NUCLEAR"
}
```

Status: Implemented in the data model and API responses.
