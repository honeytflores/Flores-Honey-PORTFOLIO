# Design Plan — Honey Flores VA Portfolio

**Subject:** VA portfolio site, led with Data & Reporting, secondary Automation + E-commerce/CS Support.
**Audience:** Small business owners / solopreneurs hiring on Upwork/OnlineJobs.ph — people who want proof of spreadsheet/reporting competence, not corporate polish.
**Primary job:** Convince a skimming client in 10 seconds that she can turn messy data into clean, trustworthy output.

## Color
- `--ink` #1B2430 — near-black navy, headlines/text
- `--paper` #FBFAF6 — warm off-white page bg
- `--ledger` #2F6F5E — deep teal-green, primary accent (spreadsheet/growth association without being literal Excel green)
- `--amber` #C9892F — warm amber, secondary accent for highlights/tags
- `--line` #D8D3C7 — soft warm grey for rules/borders
- `--muted` #6B6456 — secondary text, warm grey-brown (not cold SaaS grey)

## Type
- Headline/display: **Fraunces** (serif, has personality, pairs with "ledger/record" concept — feels considered, not corporate-SaaS)
- Body: **Inter** — clean, highly legible
- Data/stat labels: **IBM Plex Mono** — used sparingly for numbers/stats only (ties to "data" identity without resorting to all-caps tracked labels)

## Layout concept
Single column, left-aligned, max-width ~720px content column against full-bleed section backgrounds. The through-line motif: a faint **ledger/row-line texture** (horizontal hairlines like a spreadsheet or accounting ledger) in section backgrounds — subtle, not a literal grid/graph-paper cliché. Portfolio samples and experience entries are styled as **ledger rows** (a left-side row reference like "01" only where truly sequential — experience IS chronological, so numbering there is earned, not decorative elsewhere).

```
[ HERO ]
 Honey Flores — serif, large
 one-line positioning statement
 big stat row (inline, mono numerals): 1,500+ disputes/mo · 95% resolution · 50k articles processed
 [see my work] [get in touch]

[ SERVICES ]
 left: short intro
 right: 3 stacked service rows, ledger-line separators

[ PORTFOLIO SAMPLES ]
 stacked cards, each a "record": title, 1-2 line context, tool tags, link/file

[ EXPERIENCE ]
 vertical list, chronological (numbered, since genuinely sequential), company/role/dates/outcome line

[ SKILLS ]
 tag cloud, grouped by category

[ CONTACT ]
 short line + email + availability
```

## Principles — what makes this specific to Honey, not a generic SaaS template
1. No cards-with-shadows kit; "ledger row" styling instead — ties visually to her actual skill (spreadsheets/records).
2. Serif headline (Fraunces) instead of default clean sans-everywhere — gives warmth/personality against the data-heavy subject.
3. Numbers in portfolio are real (from her actual resume/work), not placeholder lorem stats.
4. No tracked-out all-caps eyebrows, no "→" on buttons, no middle-dot meta strings as decoration — dates/meta use simple "·" only where it's genuinely a compact date range.
5. One deliberate motion moment: hero stat row counts up on load. Everything else static/instant.

## Self-review against generic AI defaults
- Not cream+terracotta (#D97757) — using teal-green/amber instead, different hue family entirely.
- Not dark+neon.
- Not broadsheet/newspaper columns — single column, generous whitespace.
- Not SaaS-card-kit — ledger-row device instead, grounded in subject matter (spreadsheets/accounting).
- Removed initial instinct to add ALL-CAPS section labels — replaced with plain sentence-case headings.
