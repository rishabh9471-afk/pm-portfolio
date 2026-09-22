/* ------------------------------------------------------------------
 *  EDIT THIS FILE FIRST.
 *  Every link on the site is read from here. Paste your real URLs
 *  between the quotes. Any link left as "" is hidden automatically
 *  (buttons don't render), so the site never shows a broken link.
 * ------------------------------------------------------------------ */

export const profile = {
  name: 'Rishabh Sharma',
  role: 'AI Product Manager',
  location: 'Bengaluru, India',
  email: 'rishabh9471@gmail.com',
  phone: '+91 7742313435',
  showPhone: false, // set true if you want your phone number visible publicly
  availability: 'Available to join immediately',
  resumeUrl: '/Rishabh_Sharma_Resume.pdf', // file lives in /public
};

export const socialLinks = {
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'
  github: '', // e.g. 'https://github.com/your-handle'
  medium: '', // optional: blog / Medium / Substack
  calendly: '', // optional: booking link for recruiter calls
};

export const projectLinks = {
  skillsprint: {
    live: '', // e.g. 'https://skillsprint.vercel.app'  ← also used for the live embed
    github: '', // e.g. 'https://github.com/your-handle/skillsprint'
    prd: '', // optional: link to the PRD (Notion / Google Doc)
  },
  ddp: {
    live: '', // e.g. 'https://ddp-prototype.vercel.app'
    github: '', // optional
    prd: '', // optional
  },
};

/* ------------------------------------------------------------------
 *  CERTIFICATIONS
 *  Replace the sample entry below with your real certification(s).
 *  Delete every entry (leave the array empty: []) to hide the section.
 * ------------------------------------------------------------------ */
export const certifications = [
  {
    name: 'Your Certification Name',
    issuer: 'Issuing Organization',
    date: 'Month YYYY',
    credentialUrl: '', // verification link
    skills: ['Skill one', 'Skill two'],
  },
];
