/* All content on the site, sourced from the resume.
 * Numbers here are the ones on the resume — keep them in sync. */

export const heroMetrics = [
  { value: 50, suffix: '%', label: 'less manual effort in claim adjudication', source: 'AI prescription extraction' },
  { value: 2, suffix: '×', label: 'revenue growth supported by Partner Platform', source: '30+ partners onboarded' },
  { value: 20, suffix: '%', label: 'lift in booking completion rate', source: 'Funnel analysis → UX fixes' },
  { value: 30, suffix: '%', label: 'faster claim resolution', source: 'Automated reconciliation' },
];

export const tickerItems = [
  '25% TAT reduction · 5,000+ bookings / month',
  '25% higher fulfillment via WhatsApp automation',
  '40% faster reporting · 20+ client dashboards',
  '15% adoption on a 0→1 cashless OPD launch',
  '50+ sprints · 200+ user stories shipped',
  '20% faster sprint velocity',
  '200+ users on SkillSprint · 70% completion',
];

export const caseStudies = [
  {
    id: 'claims',
    index: '01',
    tag: 'AI Automation · Healthtech Ops',
    title: 'Automating claim adjudication with AI prescription extraction',
    oneLiner:
      'Replaced manual prescription reading and reconciliation with AI extraction and rule-based matching.',
    headline: { value: '50%', label: 'manual effort cut' },
    metrics: [
      { value: '50%', label: 'reduction in manual Ops effort' },
      { value: '30%', label: 'faster claim resolution' },
    ],
    flow: ['Prescription upload', 'AI extraction', 'Auto reconciliation', 'Ops exception review', 'Claim decision'],
    context:
      'Truworth Wellness processes OPD and wellness claims for corporate and insurer clients. Every claim depended on an Ops reviewer reading an uploaded prescription and checking it against the claim line by line.',
    problem:
      'The prescription upload → Ops review step was the bottleneck of the whole adjudication pipeline. Review time scaled linearly with claim volume, turnaround was slow for members, and repetitive manual reading created room for errors.',
    role: 'Product owner — discovery, solution design, requirements, rollout with Ops and engineering.',
    approach: [
      'Mapped the adjudication pipeline end to end with the Ops team to find where reviewer time actually went.',
      'Separated the work into what a machine can read reliably (doctor, date, medicines, diagnosis fields) and what needs human judgment.',
      'Designed AI-driven extraction of structured data from prescription images, feeding automated reconciliation logic against the claim.',
      'Kept Ops in the loop for exceptions only, so low-confidence or mismatched cases still get a human check.',
    ],
    solution: [
      'AI prescription data extraction at upload',
      'Automated reconciliation rules between prescription and claim',
      'Exception-first Ops review queue',
    ],
    impact: [
      'Cut manual effort in the pipeline by 50%',
      'Contributed to 30% faster claim resolution',
      'Ops capacity freed to scale with claim volume instead of headcount',
    ],
    learnings:
      'Automation lands when the people it affects help define the exceptions. Designing for the human-review path first made the AI path trustworthy.',
    skills: ['AI/LLM workflows', 'Process mapping', 'PRD writing', 'Ops stakeholder management', 'SQL validation'],
  },
  {
    id: 'partner',
    index: '02',
    tag: 'Platform · B2B2C Integrations',
    title: 'Partner Platform: one standard way to onboard insurers & TPAs',
    oneLiner:
      'Built a platform that standardized integrations with partners like ICICI Lombard, Care Health Insurance and Medi Assist.',
    headline: { value: '2×', label: 'revenue growth supported' },
    metrics: [
      { value: '30+', label: 'partners onboarded on a standard flow' },
      { value: '2×', label: 'revenue growth supported' },
    ],
    flow: ['Partner signs', 'Standard config', 'API integration', 'Eligibility & services live', 'Revenue'],
    context:
      'Growth depended on distributing wellness and OPD services through insurers and TPAs. Each partner — ICICI Lombard, Care Health Insurance, Medi Assist and others — came with its own integration and service setup.',
    problem:
      'Partner onboarding was bespoke. Every new partner meant custom work, which slowed go-lives and made the partner business hard to scale.',
    role: 'Product owner for the Partner Platform — requirements, integration design with engineering, partner rollout.',
    approach: [
      'Identified what every partner integration had in common versus what was genuinely partner-specific.',
      'Turned the common parts into a standard onboarding and configuration flow.',
      'Worked with engineering on API integrations so new partners plug into the same model.',
      'Rolled out partner by partner with business teams to validate the standard against real contracts.',
    ],
    solution: [
      'Standardized partner onboarding flow',
      'Configurable partner setup instead of custom builds',
      'API integrations with insurer and TPA partners',
    ],
    impact: [
      'Standardized onboarding for 30+ partners',
      'Supported 2× revenue growth',
      'Integrated major partners: ICICI Lombard, Care Health Insurance, Medi Assist',
    ],
    learnings:
      'A platform is a bet on what stays the same. Getting the shared model right early is what let partner number 30 be as easy as partner number 5.',
    skills: ['Platform thinking', 'API integration', 'B2B2C partnerships', 'Requirements design', 'GTM coordination'],
  },
  {
    id: 'opd',
    index: '03',
    tag: '0→1 Launch · Healthcare Journey',
    title: 'Launching a 0→1 cashless OPD journey',
    oneLiner:
      'Owned the full lifecycle of a new cashless outpatient experience and cleared the roadblocks blocking adoption.',
    headline: { value: '15%', label: 'user adoption' },
    metrics: [
      { value: '0→1', label: 'end-to-end product lifecycle owned' },
      { value: '15%', label: 'user adoption achieved' },
    ],
    flow: ['Check eligibility', 'Book / visit', 'Cashless at provider', 'Claim submission', 'Settled'],
    context:
      'Outpatient (OPD) care in India is mostly pay-and-claim: members pay first and then file for reimbursement. A cashless OPD journey removes that friction, but it had never existed on the platform.',
    problem:
      'Early users dropped off at two points: they could not easily tell whether they were eligible, and claim submission was confusing. Both blocked adoption of an otherwise valuable benefit.',
    role: 'Owner of the end-to-end product lifecycle — discovery, scoping, launch and iteration.',
    approach: [
      'Scoped an MVP of the cashless journey and defined the success metric as user adoption.',
      'Traced where users got stuck after launch; eligibility and claim submission stood out.',
      'Redesigned eligibility checks so users know upfront what is covered.',
      'Simplified claim submission steps to reduce drop-off.',
    ],
    solution: [
      'New cashless OPD user journey (0→1)',
      'Clear upfront eligibility checks',
      'Simplified claim submission flow',
    ],
    impact: [
      'Achieved 15% user adoption for a brand-new benefit',
      'Resolved the two main blockers — eligibility and claim submission',
    ],
    learnings:
      'In 0→1, the launch is the start of discovery. Watching where real users stall told us more than any pre-launch assumption.',
    skills: ['0→1 product', 'MVP scoping', 'Customer journey mapping', 'User research', 'Adoption metrics'],
  },
  {
    id: 'funnel',
    index: '04',
    tag: 'Growth · Conversion Optimization',
    title: 'Fixing booking funnel drop-offs with analytics',
    oneLiner:
      'Used MoEngage funnel analytics to find where bookings leaked, then shipped UX and workflow fixes.',
    headline: { value: '20%', label: 'booking completion lift' },
    metrics: [
      { value: '20%', label: 'lift in booking completion rate' },
      { value: '20%', label: 'feature adoption boost in 60 days (engagement features)' },
    ],
    flow: ['Landing', 'Select service', 'Pick slot', 'Details', 'Booking confirmed'],
    context:
      'Health check and consultation bookings are a core conversion for Truworth. Traffic was reaching the booking flow but too many users were not completing it.',
    problem:
      'The team knew bookings were leaking but not exactly where or why, so fixes were guesswork.',
    role: 'Product Associate — analysis, hypotheses, UX/workflow changes with design and engineering.',
    approach: [
      'Instrumented and analysed the booking funnel step by step in MoEngage.',
      'Pinpointed the steps with the steepest drop-offs and formed hypotheses about the cause.',
      'Shipped targeted UI/UX enhancements and workflow optimizations for those steps.',
      'Tracked completion rate after release to confirm the lift.',
    ],
    solution: [
      'Step-level funnel instrumentation',
      'UI/UX fixes on high drop-off steps',
      'Workflow optimizations in the booking flow',
    ],
    impact: [
      'Lifted booking completion rate by 20%',
      'Set up a repeatable, data-first way to diagnose conversion issues',
    ],
    learnings:
      'Measure the funnel before redesigning it. The biggest wins came from the few steps the data pointed to, not a full redesign.',
    skills: ['Funnel analysis', 'MoEngage', 'Conversion optimization', 'UX iteration', 'KPI definition'],
  },
];

export const analytics = {
  stats: [
    { value: '20+', label: 'client dashboards built in Superset & Metabase' },
    { value: '40%', label: 'faster reporting for clients' },
    { value: '30%', label: 'metric inconsistencies eliminated with SQL validation' },
    { value: '20%', label: 'booking lift found through funnel analysis' },
  ],
  pillars: [
    {
      title: 'Client dashboards',
      body: 'Built SQL dashboards in Superset and Metabase for 20+ clients, cutting reporting time by 40%.',
      tools: ['SQL', 'Superset', 'Metabase'],
    },
    {
      title: 'Data reliability',
      body: 'Added SQL-based validation and reconciliation checks so dashboards agree with each other, eliminating metric inconsistencies by 30%.',
      tools: ['SQL', 'Reconciliation', 'QA'],
    },
    {
      title: 'Funnel & product analytics',
      body: 'Diagnosed booking drop-offs in MoEngage and turned the findings into a 20% completion lift.',
      tools: ['MoEngage', 'Funnels', 'A/B testing'],
    },
    {
      title: 'Metrics that drive decisions',
      body: 'Define KPIs before building, then measure adoption, retention and conversion after release.',
      tools: ['KPI design', 'Retention', 'Segmentation'],
    },
  ],
  // Illustrative query shown in the code panel (not production code).
  sql: `-- Where do users drop off in the booking funnel?
WITH steps AS (
  SELECT user_id,
         MAX(event = 'service_selected')  AS s1,
         MAX(event = 'slot_selected')     AS s2,
         MAX(event = 'details_submitted') AS s3,
         MAX(event = 'booking_confirmed') AS s4
  FROM   app_events
  WHERE  event_date >= CURRENT_DATE - INTERVAL '30 days'
  GROUP  BY user_id
)
SELECT SUM(s1) AS selected_service,
       SUM(s2) AS selected_slot,
       SUM(s3) AS submitted_details,
       SUM(s4) AS confirmed,
       ROUND(100.0 * SUM(s4) / NULLIF(SUM(s1), 0), 1) AS completion_pct
FROM   steps;`,
};

export const experience = [
  {
    title: 'Product Associate L2',
    company: 'Truworth Wellness',
    location: 'Bengaluru',
    period: 'Jul 2024 – Present',
    summary:
      'Own AI automation, platform and 0→1 initiatives across claims, partners and member journeys.',
    highlights: [
      'AI prescription extraction + automated reconciliation → 50% less manual effort',
      'Partner Platform → 30+ partners standardized, 2× revenue supported',
      'Sponsored Health Check redesign → 5,000+ bookings/month, 25% lower TAT',
      '0→1 cashless OPD journey → 15% adoption',
      'WhatsApp post-consultation automation → 25% higher fulfillment',
      'SQL dashboards for 20+ clients → 40% faster reporting',
    ],
  },
  {
    title: 'Product Associate L1',
    company: 'Truworth Wellness',
    location: 'Bengaluru',
    period: 'Jun 2023 – Jun 2024',
    summary: 'Growth, engagement and data reliability, while running Scrum for the product team.',
    highlights: [
      'MoEngage funnel analysis + UX fixes → 20% booking completion lift',
      'SQL validation checks → 30% fewer metric inconsistencies',
      'Heart Rate Tracker & Check-in Challenges → 20% adoption boost in 60 days',
      'Led Scrum for 50+ sprints, 200+ user stories → 20% faster velocity',
    ],
  },
];

export const education = {
  degree: 'B.Tech, Mechanical Engineering',
  school: 'The LNM Institute of Information Technology, Jaipur',
  period: 'Aug 2018 – Jun 2022',
};

export const projects = [
  {
    id: 'skillsprint',
    name: 'SkillSprint',
    kind: 'Live product',
    tagline: 'A gamified learning platform for aspiring product managers',
    problem:
      'Most PM learning platforms are passive — videos and articles with little practice. A competitive audit showed engagement gaps: learners start but rarely practise real product decisions.',
    built:
      'Scenario-based PM challenges with XP, streaks and leaderboards. Taken from PRD to a live product, with automated deployment through GitHub and Vercel.',
    impact: [
      { value: '200+', label: 'users validated the product' },
      { value: '70%', label: 'scenario completion rate' },
      { value: 'PRD → Live', label: 'shipped end to end' },
    ],
    skills: ['Competitive audit', 'PRD writing', 'Gamification design', 'React', 'Vercel', 'GitHub CI/CD'],
  },
  {
    id: 'ddp',
    name: 'DDP — Doctor Discovery Platform',
    kind: 'Prototype',
    tagline: 'Finding the doctors customers already trust — from their prescriptions',
    problem:
      'Doctor discovery relied on sourcing generic internet listings, which did not reflect the doctors customers actually prefer.',
    built:
      'An AI-assisted sourcing workflow that extracts doctor profiles from prescription data and moves them through Ops review, verification and network onboarding. Interactive prototype on Vercel to show user flows and system interactions.',
    impact: [
      { value: '20%', label: 'better discovery efficiency' },
      { value: '30%', label: 'fewer stakeholder iteration cycles' },
    ],
    skills: ['Problem reframing', 'AI-assisted workflows', 'Rapid prototyping', 'Vercel', 'Stakeholder alignment'],
  },
];

export const skillGroups = [
  {
    title: 'Product Management',
    accent: 'violet',
    items: [
      'Roadmap Planning', 'MVP Scoping', 'PRD Writing', 'GTM Strategy', 'Feature Prioritization',
      'Agile / Scrum', 'User Stories', 'Wireframing', 'Customer Journey Mapping', 'User Segmentation',
      'Retention Analysis', 'API Integration', 'Cross-functional Collaboration',
    ],
  },
  {
    title: 'Data & Analytics',
    accent: 'cyan',
    items: [
      'SQL', 'Funnel Analysis', 'KPI Definition', 'Dashboarding', 'A/B Testing', 'Google Analytics',
      'Conversion Optimization',
    ],
  },
  {
    title: 'AI & Building',
    accent: 'amber',
    items: ['Claude', 'Lovable', 'Vercel', 'GitHub', 'AI-driven automation', 'Rapid prototyping'],
  },
  {
    title: 'Tools',
    accent: 'green',
    items: ['MoEngage', 'Superset', 'Metabase', 'Figma', 'Whimsical', 'Jira', 'Confluence', 'Excel'],
  },
];
