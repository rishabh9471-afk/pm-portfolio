import { useState } from 'react';
import { profile, socialLinks } from '../config';
import { Check, Copy, Download, GitHub, LinkedIn } from './Icons';
import { Reveal } from './ui';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="contact-title">Let's build something.</h2>
          <p className="contact-text">
            Open to Product Manager and AI Product Manager roles. The fastest way to reach me is email.
          </p>
          <div className="contact-email">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button className="icon-btn" onClick={copy} aria-label="Copy email address">
              {copied ? <Check /> : <Copy />}
            </button>
          </div>
          <div className="contact-links">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedIn /> LinkedIn
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <GitHub /> GitHub
            </a>
            <a className="btn btn-primary" href={profile.resumeUrl} download>
              <Download /> Download resume
            </a>
          </div>
        </Reveal>
      </div>
      <footer className="footer container">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location}</span>
        </div>
      </footer>
    </section>
  );
}
