# Rishabh Sharma — AI Product Manager Portfolio

Dark, minimal portfolio built with React + Vite, deployed on Vercel.

## Structure

- **Home:** About (intro + photo + links) → Work → Experience → Projects → Skills → Certifications → Contact
- **Case study pages:** `/#/work/claims-automation`, `/#/work/partner-platform`, `/#/work/cashless-opd`, `/#/work/booking-funnel`

## Where to edit

| File | What's in it |
|---|---|
| `src/config.js` | Name, status, email, social links, project links, certifications |
| `src/data.js` | Intro text, metric row, the 4 case studies, experience, projects, skills |
| `public/profile.jpg` | Profile photo |
| `public/Rishabh_Sharma_Resume.pdf` | Resume (downloaded from the Contact section) |
| `src/styles.css` | Colours at the top (`--accent`, `--bg`, …) |

Empty links in `config.js` are hidden automatically.

### Project previews
Both project cards embed the live site in a preview window. If a window shows
"refused to connect", that site blocks embedding: for the DDP prototype, publish it
from v0 to Vercel and put the `*.vercel.app` URL in `projectLinks.ddp.embed`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub; Vercel redeploys automatically.
