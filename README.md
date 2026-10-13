# Honey Flores — Data Analyst Portfolio

A static, no-build-step site (plain HTML + Tailwind via CDN + a little JS). Deploys to Vercel with zero configuration.

## Projects

| # | Project | Tools | Page |
|---|---------|-------|------|
| 01 | Transaction Fraud Detection — SQL data prep + Random Forest classifier (0.75 ROC-AUC) | SQL, Python, scikit-learn | `project-1.html` · [Live demo](https://fraud-dispute-detection-pdfp2nuhle6pmqo57rsvrc.streamlit.app/) · [GitHub](https://github.com/honeytflores/fraud-dispute-detection) |
| 02 | LoReCast: Longformer-Based News Article Summarization — undergraduate thesis (team project) | Python, NLP | `project-2.html` · [GitHub](https://github.com/romalesjustine/thesis-tool) |
| 03 | Automating a Personal Budget Diagnosis — Excel data cleaning and reconciliation | Excel (VLOOKUP, SUMIFS) | `project-3.html` |

## Microsoft 365 & Power Platform tools used

These tools are featured on the site, each backed by real work:

- **Excel** — KPI tracker built at Citi (`files/Agent_KPI_Tracker.xlsx`), Budget Diagnosis Tracker (`files/Budget_Diagnosis_Tracker.xlsx`), VLOOKUP/PivotTable practice file (`files/excel_practice_vlookup_pivot.xlsx`)
- **Power BI** — dashboards for project milestones and KPIs (Hacktiv Colab internship)
- **Power Automate** — workflow automation (Hacktiv Colab internship)
- **Word** — LoReCast thesis manuscript (`files/LORECASTFinalManu.docx`)

## File structure

```
index.html        Home page: hero, about, projects, skills, experience, contact
project-1.html    Case study: Transaction Fraud Detection
project-2.html    Case study: LoReCast thesis (news article summarization)
project-3.html    Case study: Automating a Personal Budget Diagnosis
script.js         Hero stat count-up animation
design-plan.md    Color and type system
files/            Images, downloadable samples, code files and the resume
```

## Editing content
- Text/sections: `index.html` and the `project-*.html` pages
- Colors/fonts: the Tailwind config in the `<script>` block at the top of each HTML file (see `design-plan.md` for the color/type system)
- The hero stat count-up animation: `script.js`
- Downloads and screenshots: drop files into `files/` and link them from the relevant page

## Deploy to Vercel

**Option A — Vercel CLI**
```
npm i -g vercel        # if you don't have it yet
cd Flores-Honey-PORTFOLIO
vercel                 # follow prompts, choose "no framework / other"
vercel --prod          # once you're happy with the preview
```

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a GitHub repo.
2. On vercel.com → "Add New Project" → import that repo.
3. Framework preset: "Other" (no build command needed).
4. Deploy.

## Before you publish
- [ ] Add `files/Honey-Flores-Resume.pdf` — the "Download resume" links point to it, but the file isn't in the repo yet
- [ ] Double-check the email address and any contact details
- [ ] Consider adding a custom domain in Vercel's project settings once live
