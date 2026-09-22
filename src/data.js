/* All site content. Case studies are copied verbatim from Rishabh's write-ups.
 * List items written as "Label: text" render the label in bold automatically. */

export const intro = {
  headline: 'I find the friction, apply the AI, and build the product.',
  bio: 'AI Product Manager with 3+ years owning 0→1 launches and growth-stage products across B2B SaaS and B2B2C healthcare at Truworth Wellness — combining AI-driven automation, SQL analytics and structured product thinking.',
};

export const heroMetrics = [
  { value: '50%', label: 'Ops effort reduced' },
  { value: '2×', label: 'Revenue growth supported' },
  { value: '20%', label: 'Booking conversion lift' },
  { value: '30%', label: 'Faster claim resolution' },
];

export const caseStudies = [
  {
    id: 'claims-automation',
    index: '01',
    tag: 'Ops / AI',
    period: '2024–present',
    title: 'Claims Automation & Adjudication',
    subtitle: 'Eliminating manual bottlenecks across the claim pipeline using AI-driven logic',
    metrics: [
      { value: '50%', label: 'Ops effort reduced' },
      { value: '30%', label: 'Faster claim resolution' },
      { value: '40%', label: 'Reporting time cut' },
    ],
    sections: [
      {
        icon: '◈',
        title: 'Background',
        blocks: [
          { p: 'Truworth Wellness operates a large-scale corporate health benefits platform serving 30+ insurance and TPA partners. At the core of this is a claims adjudication pipeline — the process by which user-submitted health claims (prescription uploads, OPD bills, diagnostics) are reviewed, validated, and approved for reimbursement. By mid-2024, this pipeline had become a significant operational bottleneck.' },
        ],
      },
      {
        icon: '◎',
        title: 'Problem',
        blocks: [
          { quote: '"Every claim required an ops analyst to manually open, read, and categorise prescription uploads — a process that didn\'t scale with our growing partner base."' },
          { p: 'The combined effect was a slow, expensive pipeline — ops teams were spending the majority of their time on low-value review tasks rather than exception handling or complex adjudications.' },
          {
            list: [
              'Manual prescription review: Ops analysts were opening each uploaded document individually to extract drug names, dosages, and validity — a fully manual, repetitive task prone to error and inconsistency.',
              'No reconciliation logic: There was no automated check to match claimed amounts against policy limits, eligible categories, or duplicate submissions — all of this required human judgement.',
              'Fragmented status tracking: Claim status updates were manually logged, creating lag in customer communication and dashboard accuracy.',
            ],
          },
        ],
      },
      {
        icon: '◉',
        title: 'Discovery & Research',
        blocks: [
          { p: 'I began by shadowing ops analysts for two days to map the exact steps in the claims review process. I documented every manual touchpoint, the time spent, and the error rate at each stage.' },
          {
            list: [
              '~70% of claims were straightforward and followed identical patterns — yet still required full manual review.',
              'Prescription parsing (identifying drug name, quantity, validity) was the single most time-consuming step.',
              'Reconciliation errors (claims approved outside policy limits) were the most costly failure mode.',
              'Analysts had no structured tool — they were working across PDFs, spreadsheets, and a CRM simultaneously.',
            ],
          },
          { p: 'I also interviewed 6 ops analysts and 2 team leads to understand pain points and build a priority matrix of what to automate first vs. what required human judgement.' },
        ],
      },
      {
        icon: '◆',
        title: 'Solution Design',
        blocks: [
          { p: 'I designed a two-layer automation system:' },
          {
            list: [
              'Layer 1 — AI-powered prescription parsing: Implemented an OCR + NLP pipeline to extract structured fields from prescription uploads (drug name, dosage, issuing doctor, date). This eliminated the most time-consuming manual step and produced a structured data object for downstream processing.',
              'Layer 2 — Rules-based reconciliation engine: Built configurable reconciliation logic that auto-validated claims against policy parameters (eligible drug categories, claim limits, duplicate detection). Claims that passed all rules were auto-approved; edge cases were flagged for analyst review with a pre-filled summary.',
            ],
          },
          { p: 'I also redesigned the ops interface to surface the AI-extracted data alongside the original document, reducing context-switching and making exception review faster.' },
        ],
      },
      {
        icon: '▶',
        title: 'Execution',
        blocks: [
          { p: 'I worked across three teams to deliver this:' },
          {
            list: [
              'Engineering: Defined the data contracts for the AI extraction pipeline and wrote detailed specs for the reconciliation rule engine.',
              'Operations: Ran weekly feedback sessions during the pilot phase to catch edge cases and refine rules.',
              'Data: Built SQL validation queries in Superset to track auto-approval rates, error rates, and analyst handle time across the pipeline.',
            ],
          },
          { p: 'The rollout was phased — we started with a single claim category (OPD pharmacy), validated for 2 weeks, then expanded to diagnostics and specialist consultations.' },
        ],
      },
      {
        icon: '✦',
        title: 'Outcomes',
        blocks: [
          {
            stats: [
              { value: '50%', label: 'Manual effort reduced' },
              { value: '~70%', label: 'Claims auto-approved' },
              { value: '30%', label: 'TAT improvement' },
            ],
          },
          {
            list: [
              '50% reduction in manual ops effort across the adjudication pipeline within 6 weeks of full rollout.',
              '~70% of incoming claims now auto-approved without analyst intervention.',
              '30% faster average claim resolution, improving both user satisfaction and partner SLA compliance.',
              'Analyst time re-allocated to exception handling and partner onboarding — higher value work.',
            ],
          },
        ],
      },
      {
        icon: '◇',
        title: 'Reflection',
        blocks: [
          { p: 'The biggest learning was the importance of the pilot phase. Early rules were too aggressive — the auto-approval rate was high but so were false positives. A two-week manual validation period before full rollout allowed us to tune thresholds and build ops trust in the system before removing human oversight.' },
          { p: "If I were to redo this, I'd invest more upfront time in edge case taxonomy — cataloguing the 20% of claims that don't follow standard patterns would have made the exception-handling spec significantly cleaner." },
        ],
      },
    ],
  },
  {
    id: 'partner-platform',
    index: '02',
    tag: 'Platform',
    period: '2024–present',
    title: 'Partner Integration Platform',
    subtitle: 'Standardising onboarding for 30+ insurance and TPA partners to unlock 2× revenue growth',
    metrics: [
      { value: '30+', label: 'Partners onboarded' },
      { value: '2×', label: 'Revenue growth' },
      { value: '60%', label: 'Faster onboarding' },
    ],
    sections: [
      {
        icon: '◈',
        title: 'Background',
        blocks: [
          { p: "Truworth Wellness's growth model is deeply tied to corporate health programs managed by insurance companies and TPAs (Third-Party Administrators). Each partner — ICICI Lombard, Care Health Insurance, Medi Assist, and others — brings a book of covered employees who access Truworth's health check and wellness services. As the partner base grew past 15 active clients, the lack of a standardised integration system became a serious constraint on growth." },
        ],
      },
      {
        icon: '◎',
        title: 'Problem',
        blocks: [
          { quote: '"We were rebuilding the same integration from scratch every time a new insurer came on board. It was unsustainable — and it was slowing down deals."' },
          { p: 'The result was high engineering overhead per onboarding, long lead times to activate new partners (4-6 weeks), and a fragile integration layer that broke frequently when partners changed their data formats.' },
          {
            list: [
              'Different data formats: some partners sent eligibility files as CSVs, others via API, others as Excel sheets with inconsistent schemas.',
              'Different workflow requirements: some required pre-authorisation before bookings, others worked on reimbursement, others on cashless OPD models.',
              'Different reporting needs: each partner had custom SLA dashboards they expected Truworth to maintain.',
            ],
          },
        ],
      },
      {
        icon: '◉',
        title: 'Discovery & Research',
        blocks: [
          { p: 'I started by auditing all existing partner integrations — mapping the data flows, touchpoints, and custom logic that had accumulated over time. I also interviewed the business development team to understand what friction points were slowing down partner deals.' },
          { p: 'The audit revealed that ~80% of the integration work was common across all partners — eligibility ingestion, booking confirmation, claims submission, and status reporting. Only ~20% was genuinely partner-specific. This 80/20 split became the design principle for the platform.' },
        ],
      },
      {
        icon: '◆',
        title: 'Solution Design',
        blocks: [
          { p: 'I designed the Partner Platform as a configurable onboarding system built around a standard data model:' },
          {
            list: [
              'Eligibility ingestion layer: A normalisation layer that accepted any common format (CSV, SFTP, REST API) and transformed it into a standard internal schema. Partners could configure their ingestion method without custom engineering.',
              'Booking configuration: A partner-level settings model that allowed each partner to configure their coverage scope, booking limits, authorisation workflows, and communication preferences.',
              'Reporting templates: A library of standard SLA reports in Superset, configurable per partner. New partners could be given access to a pre-built dashboard rather than requiring a custom build.',
              'Partner portal: A self-service interface for partner ops teams to view eligibility status, booking volumes, and claim summaries in real time.',
            ],
          },
        ],
      },
      {
        icon: '▶',
        title: 'Execution',
        blocks: [
          { p: 'This was a complex, multi-team delivery spanning 6 months:' },
          {
            list: [
              'Wrote the full PRD and ran fortnightly steering meetings with engineering, business development, and finance.',
              'Maintained a partner onboarding tracker that gave business development visibility into integration status — this alone reduced miscommunication and missed SLAs significantly.',
              'Worked with two anchor partners (ICICI Lombard and Medi Assist) as design partners during build, using their feedback to validate the configuration model before general rollout.',
            ],
          },
          { p: 'I also created a partner onboarding playbook — a standardised document that guided each new integration with clear checklists, data format specs, and timeline templates. This reduced dependency on tribal knowledge and enabled a junior ops analyst to own parts of the onboarding independently.' },
        ],
      },
      {
        icon: '✦',
        title: 'Outcomes',
        blocks: [
          {
            stats: [
              { value: '30+', label: 'Partners onboarded' },
              { value: '2×', label: 'Revenue growth' },
              { value: '60%', label: 'Faster onboarding' },
            ],
          },
          {
            list: [
              '30+ partners onboarded on the standardised platform within 12 months.',
              'Supported 2× revenue growth as faster partner activation unlocked new covered employee populations.',
              'Onboarding lead time reduced from 4-6 weeks to under 2 weeks for standard integrations.',
              'Engineering overhead per new partner dropped significantly — standard integrations required no custom code.',
            ],
          },
        ],
      },
      {
        icon: '◇',
        title: 'Reflection',
        blocks: [
          { p: 'The design partner approach with ICICI Lombard and Medi Assist was critical. Without their real-world feedback during the build phase, the configuration model would have been too rigid for the actual diversity of partner requirements.' },
          { p: "One thing I'd do differently: build the partner portal earlier. It was added late in the project, but partners consistently cited it as one of the highest-value features — real-time visibility into their data reduced inbound support queries by a significant margin." },
        ],
      },
    ],
  },
  {
    id: 'cashless-opd',
    index: '03',
    tag: '0→1',
    period: '2024',
    title: 'Cashless OPD Journey (0→1)',
    subtitle: 'Designing and launching an end-to-end cashless outpatient claim product from scratch',
    metrics: [
      { value: '0→1', label: 'Product launched' },
      { value: '15%', label: 'User adoption growth' },
      { value: '40+', label: 'User stories shipped' },
    ],
    sections: [
      {
        icon: '◈',
        title: 'Background',
        blocks: [
          { p: 'Corporate health insurance in India has historically been strong on hospitalisation coverage but weak on outpatient (OPD) — the day-to-day doctor visits, diagnostics, and pharmacy expenses that make up the majority of actual healthcare usage. Truworth Wellness identified cashless OPD as a significant growth opportunity: a product that would let covered employees access outpatient care without paying upfront and claiming reimbursement. This was a 0→1 build — no existing product, workflow, or technical infrastructure to build on.' },
        ],
      },
      {
        icon: '◎',
        title: 'Problem',
        blocks: [
          { quote: '"Users had insurance that theoretically covered OPD, but the reimbursement process was so cumbersome that many simply didn\'t use it — they paid out of pocket and gave up on the claim."' },
          {
            list: [
              'Eligibility complexity: OPD coverage limits varied by policy, employee grade, and remaining annual balance — users had no easy way to know what they were eligible for before booking.',
              'Fragmented journey: Users had to navigate multiple systems — check coverage, find an in-network provider, book an appointment, upload documents, track claim status — none of which were connected.',
              'High ops load: Without automation, every OPD claim required manual review and communication — not viable at scale.',
              'Trust deficit: Users who had tried reimbursement-based OPD claims previously had poor experiences — slow turnaround, opaque status, frequent rejections.',
            ],
          },
        ],
      },
      {
        icon: '◉',
        title: 'Discovery & Research',
        blocks: [
          { p: 'I ran a structured discovery phase over 4 weeks:' },
          {
            list: [
              "User interviews: Spoke with 12 end users across 3 corporate clients about their OPD claim behaviour. The core insight: most users weren't claiming because the effort outweighed the benefit for small amounts, not because they didn't want to.",
              'Ops audit: Mapped every step in the existing (reimbursement-based) OPD workflow to identify where the manual load concentrated and where errors occurred.',
              'Competitive review: Analysed how Plum, Nova Benefits, and Onsurity handled OPD — key insight was that cashless (no upfront payment) was a significantly stronger retention driver than reimbursement.',
              'Partner alignment: Worked with 3 insurance partners to understand their willingness to support cashless OPD and what data they needed from us to enable it.',
            ],
          },
        ],
      },
      {
        icon: '◆',
        title: 'Solution Design',
        blocks: [
          { p: 'I designed the cashless OPD journey as a connected 5-step flow:' },
          {
            list: [
              '1. Eligibility check: On login, users see their real-time OPD balance and eligible categories (general consultation, specialist, diagnostics, pharmacy) pulled from partner policy data.',
              '2. Provider discovery: In-network provider search filtered by specialty, location, and availability. Integrated with the Doctor Discovery Platform for validated provider data.',
              '3. Cashless booking: User books and confirms — a pre-authorisation request is auto-generated and sent to the insurer in the background.',
              '4. Consultation & claim: Post-consultation, the provider uploads the prescription/bill directly. The claim is auto-submitted using the prescription parsing pipeline.',
              '5. Status & settlement: Users receive WhatsApp updates at each stage. Settlement is processed directly to the provider — zero out-of-pocket.',
            ],
          },
          { p: 'I also built fallback workflows for cases where pre-authorisation is delayed or denied — ensuring users always had a path forward even in exception scenarios.' },
        ],
      },
      {
        icon: '▶',
        title: 'Execution',
        blocks: [
          { p: 'As the sole PM on this product, I owned the full lifecycle from PRD to launch:' },
          {
            list: [
              'Wrote the PRD including 40+ user stories, edge case specs, and API contracts with insurance partners.',
              'Ran 3-week sprints across a 5-person engineering team, with weekly design reviews and daily standups during the final sprint.',
              'Built a pilot with one corporate client (2,000 covered employees) before full rollout — this surfaced 8 critical edge cases in eligibility parsing that would have caused significant claim failures at scale.',
              'Created the ops runbook for handling exception cases, trained the ops team, and set up monitoring dashboards to track key metrics post-launch.',
            ],
          },
        ],
      },
      {
        icon: '✦',
        title: 'Outcomes',
        blocks: [
          {
            stats: [
              { value: '15%', label: 'Adoption growth' },
              { value: '40+', label: 'User stories shipped' },
              { value: '0', label: 'Critical bugs at launch' },
            ],
          },
          {
            list: [
              '15% user adoption growth in the first 90 days post-launch.',
              'Fully automated eligibility verification and claim submission — near-zero ops intervention for standard OPD claims.',
              'Partner feedback was positive — the structured pre-authorisation data we provided was more complete than their typical inbound claim data.',
              'Became the template for future 0→1 product launches at Truworth — the PRD structure, pilot playbook, and ops runbook were adopted as company-wide standards.',
            ],
          },
        ],
      },
      {
        icon: '◇',
        title: 'Reflection',
        blocks: [
          { p: 'The pilot phase was the most important decision I made on this project. The instinct was to launch fast given competitive pressure, but the pilot surfaced an eligibility parsing bug that affected ~15% of claims — catching that pre-launch vs. post-launch was the difference between a smooth rollout and a trust-destroying failure.' },
          { p: "The biggest challenge was alignment with insurance partners on pre-authorisation SLAs. I ended up building a 'soft cashless' fallback — where we show the user their claim is in process and cover the cost upfront — specifically to handle slow partner responses without degrading the user experience." },
        ],
      },
    ],
  },
  {
    id: 'booking-funnel',
    index: '04',
    tag: 'Growth',
    period: '2023–2024',
    title: 'Booking Funnel Optimisation',
    subtitle: 'Lifting health check booking completion by 20% through funnel analysis and UX iteration',
    metrics: [
      { value: '20%', label: 'Booking conversion lift' },
      { value: '5,000+', label: 'Bookings/month' },
      { value: '25%', label: 'TAT reduction' },
    ],
    sections: [
      {
        icon: '◈',
        title: 'Background',
        blocks: [
          { p: "Truworth Wellness's core product is a corporate health check booking platform — enabling employees to schedule preventive health screenings as part of their employer's wellness program. In 2023, despite strong top-of-funnel traffic driven by HR campaigns, booking completion rates were well below potential. This was my first major product initiative as Product Associate L1, and it gave me a deep foundation in funnel analytics and iterative product improvement." },
        ],
      },
      {
        icon: '◎',
        title: 'Problem',
        blocks: [
          { quote: '"We could see employees landing on the booking page — but a significant portion were dropping off before confirming their slot. We didn\'t know exactly where, or why."' },
          { p: "The symptoms were clear: low booking completion rates, high drop-off, and operational pressure from clients whose employee utilisation targets weren't being met. But the root causes weren't. We had limited event tracking and no systematic way to attribute drop-off to specific friction points in the flow." },
        ],
      },
      {
        icon: '◉',
        title: 'Discovery & Research',
        blocks: [
          { p: 'I set up a structured analytics programme using MoEngage to instrument the booking funnel end-to-end:' },
          {
            list: [
              'Defined 8 funnel events from landing to booking confirmation, mapped to specific UI interactions.',
              'Ran a 3-week data collection period to establish baseline conversion rates at each step.',
              'Segmented by client, employee type, device (mobile vs desktop), and time of day to identify patterns.',
            ],
          },
          { p: 'Key findings: Step 3 (centre selection) had 34% drop-off. Step 5 (slot confirmation) had a secondary spike from stale availability data. Mobile users converted at 40% lower rates than desktop. User interviews revealed confusion about health packages and anxiety about booking confirmation.' },
        ],
      },
      {
        icon: '◆',
        title: 'Solution Design',
        blocks: [
          { p: 'I prioritised 5 interventions based on impact-to-effort:' },
          {
            list: [
              "Centre recommendation logic: Added a 'nearest to you' sort and a 'most booked' badge to the centre selection step, reducing decision paralysis.",
              'Real-time slot availability: Worked with engineering to implement a slot availability sync that refreshed every 15 minutes, eliminating the stale-data error.',
              'Mobile UX overhaul: Redesigned the booking flow for mobile — larger tap targets, a simplified 3-step progress indicator, and a native date-picker replacing the custom calendar.',
              'Package clarity: Added a plain-language summary of what each health package includes directly on the selection screen, reducing confusion and support queries.',
              'Booking confirmation UX: Added an immediate in-app confirmation screen and triggered a WhatsApp confirmation message — addressing the anxiety about whether the booking had registered.',
            ],
          },
        ],
      },
      {
        icon: '▶',
        title: 'Execution',
        blocks: [
          { p: 'I ran this as an iterative sprint-based programme over 3 months:' },
          {
            list: [
              'Sprint 1 (centre recommendation + slot sync): Shipped in 2 weeks, monitored for 2 weeks before proceeding.',
              'Sprint 2 (mobile overhaul): Largest engineering effort — 4 weeks with a dedicated designer. A/B tested new vs old mobile flow for 10 days before full rollout.',
              'Sprint 3 (confirmation + package clarity): Smaller, faster — shipped in 10 days.',
            ],
          },
          { p: 'Each sprint had pre-defined success metrics. We only proceeded to the next sprint after validating that the previous intervention had moved the target metric in the right direction.' },
        ],
      },
      {
        icon: '✦',
        title: 'Outcomes',
        blocks: [
          {
            stats: [
              { value: '20%', label: 'Conversion lift' },
              { value: '5,000+', label: 'Monthly bookings' },
              { value: '3', label: 'Friction points resolved' },
            ],
          },
          {
            list: [
              '20% lift in overall booking completion rate over the 3-month programme.',
              'Mobile conversion gap closed by ~60% — mobile users now convert at comparable rates to desktop.',
              'Slot availability errors reduced to near-zero, improving both conversion and ops load from rescheduling.',
              'Client satisfaction scores improved — HR teams reported higher employee utilisation of health check programmes.',
              'The analytics framework and funnel dashboard became the standard monitoring tool for the booking product, still in use today.',
            ],
          },
        ],
      },
      {
        icon: '◇',
        title: 'Reflection',
        blocks: [
          { p: "This project taught me the value of doing the measurement work before jumping to solutions. The instinct — both mine and the team's — was to immediately redesign the funnel. But spending 3 weeks establishing a proper data baseline meant that every subsequent decision was grounded in evidence rather than opinion." },
          { p: "The A/B test on the mobile flow was particularly valuable. The real win turned out to be the confirmation UX, which had an outsized impact on completion rates relative to its implementation effort. I wouldn't have known that without measuring both." },
        ],
      },
    ],
  },
];

export const experience = [
  {
    title: 'Product Associate L2',
    company: 'Truworth Wellness',
    period: 'Jul 2024 – Present',
    summary:
      'Own AI automation, platform and 0→1 initiatives — claims automation, the Partner Platform, the cashless OPD journey, WhatsApp fulfilment journeys and client SQL dashboards.',
    highlights: ['50% less manual ops effort', '30+ partners, 2× revenue', '25% higher fulfilment'],
  },
  {
    title: 'Product Associate L1',
    company: 'Truworth Wellness',
    period: 'Jun 2023 – Jun 2024',
    summary:
      'Drove booking-funnel growth, engagement features and data reliability, and ran Scrum across 50+ sprints and 200+ user stories.',
    highlights: ['20% booking lift', '20% feature adoption', '20% faster velocity'],
  },
];

export const education = {
  degree: 'B.Tech, Mechanical Engineering',
  school: 'The LNM Institute of Information Technology, Jaipur',
  period: '2018 – 2022',
};

export const projects = [
  {
    id: 'skillsprint',
    name: 'SkillSprint',
    kind: 'Live product',
    tagline: 'Gamified learning platform for aspiring PMs',
    description:
      'Scenario-based PM challenges with XP, streaks and leaderboards — taken from a competitive-audit insight to a live, user-tested product with automated GitHub → Vercel deployment.',
    impact: [
      { value: '200+', label: 'Users' },
      { value: '70%', label: 'Scenario completion' },
    ],
    skills: ['PRD', 'Gamification', 'React', 'Vercel'],
  },
  {
    id: 'ddp',
    name: 'Doctor Discovery Platform',
    kind: 'Prototype',
    tagline: 'Finding the doctors customers already trust',
    description:
      'Reframed doctor discovery from generic internet listings to doctors customers already prefer — an AI-assisted workflow that extracts doctor profiles from prescription data for Ops review, verification and onboarding.',
    impact: [
      { value: '20%', label: 'Discovery efficiency' },
      { value: '30%', label: 'Fewer iteration cycles' },
    ],
    skills: ['Problem reframing', 'AI workflows', 'Prototyping', 'v0'],
  },
];

export const skillGroups = [
  {
    title: 'Product',
    items: ['Roadmap Planning', 'MVP Scoping', 'PRD Writing', 'GTM Strategy', 'Feature Prioritization', 'Agile/Scrum', 'User Stories', 'Wireframing', 'Customer Journey Mapping', 'User Segmentation', 'Retention Analysis', 'API Integration'],
  },
  {
    title: 'Data',
    items: ['SQL', 'Funnel Analysis', 'KPI Definition', 'Dashboarding', 'A/B Testing', 'Google Analytics', 'Conversion Optimization'],
  },
  {
    title: 'AI & Build',
    items: ['Claude', 'Lovable', 'v0', 'Vercel', 'GitHub'],
  },
  {
    title: 'Tools',
    items: ['MoEngage', 'Superset', 'Metabase', 'Figma', 'Whimsical', 'Jira', 'Confluence', 'Excel'],
  },
];
