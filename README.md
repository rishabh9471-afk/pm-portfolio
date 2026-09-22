# Rishabh Sharma — PM Portfolio

Dark, animated, metrics-first portfolio built with React + Vite, ready for Vercel.

## 1. Add your links (2 minutes)

Open **`src/config.js`** — every link on the site lives there:

| Field | What it does |
|---|---|
| `socialLinks.linkedin / github / calendly` | Buttons in the Contact section |
| `projectLinks.skillsprint.live` | **Live embed** of SkillSprint + "Live site" button |
| `projectLinks.skillsprint.github / prd` | Repo and PRD buttons |
| `projectLinks.ddp.live / github / prd` | DDP prototype buttons |
| `certifications` | Replace the sample entry; set to `[]` to hide the section |
| `profile.showPhone` | `true` to show your phone number publicly |

Empty links are **hidden on the live site** and shown as dashed "add link" hints while running `npm run dev`, so you can see where each goes.

> If the SkillSprint embed shows blank, the app is sending an `X-Frame-Options`/CSP header that blocks iframes. Vercel doesn't set one by default; if you added one, allow framing from your portfolio domain.

## 2. Run locally

```bash
npm install
npm run dev
```

## 3. Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. On vercel.com → **Add New → Project** → import the repo.
3. Vercel detects Vite automatically (build `npm run build`, output `dist`). Click **Deploy**.

## Editing content

- **`src/data.js`** — hero metrics, ticker, the 4 case studies, analytics section, experience, projects, skills.
- **`public/Rishabh_Sharma_Resume.pdf`** — replace to update the downloadable resume.
- **`src/styles.css`** — colours are CSS variables at the top (`--violet`, `--cyan`, …).

The case-study narratives (context, approach, learnings) were written from your resume bullets — read them through and adjust wording to match what actually happened.

## Structure

```
src/
  config.js        ← links & certifications (edit first)
  data.js          ← all site content
  hooks.js         ← scroll reveal, count-up, typewriter, active section
  components/      ← Nav, Hero, CaseStudies (+ modal), Analytics, Projects,
                     Experience, Skills/Certifications, Contact, Background
  styles.css
```

Animations respect the visitor's "reduce motion" setting.
