# Honey Flores — VA Portfolio

A static, no-build-step site (plain HTML/CSS/JS). Deploys to Vercel with zero configuration.

## Deploy to Vercel

**Option A — Vercel CLI (fastest)**
```
npm i -g vercel        # if you don't have it yet
cd va-portfolio
vercel                 # follow prompts, choose "no framework / other"
vercel --prod          # once you're happy with the preview
```

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a new GitHub repo.
2. On vercel.com → "Add New Project" → import that repo.
3. Framework preset: "Other" (no build command needed).
4. Deploy.

## Editing content
- Text/sections: `index.html`
- Colors/fonts/spacing: `styles.css` (see `design-plan.md` for the color/type system)
- The hero stat count-up animation: `script.js`
- Portfolio sample downloads: drop files into `files/` and link them from `index.html`

## Before you publish
- [ ] Swap in real client samples as you get them (keep the "self-directed sample" labels honest until then)
- [ ] Double-check the email address and any contact details
- [ ] Consider adding a custom domain in Vercel's project settings once live
