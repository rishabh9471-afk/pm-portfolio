import { useState } from 'react';
import { profile, socialLinks } from '../config';
import { Calendar, Check, Copy, Download, GitHub, LinkedIn, Mail } from './Icons';
import { LinkButton, Reveal } from './ui';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact-card">
          <span className="eyebrow">Let's talk</span>
          <h2>
            Looking for a PM who ships <span className="gradient-text">and measures</span>?
          </h2>
          <p>
            I'm open to Product Manager and AI Product Manager roles, based in {profile.location}.{' '}
            {profile.availability}.
          </p>
          <div className="contact-email">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button className="icon-btn" onClick={copy} aria-label="Copy email address">
              {copied ? <Check /> : <Copy />}
            </button>
          </div>
          {profile.showPhone && profile.phone && (
            <a className="contact-phone" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              {profile.phone}
            </a>
          )}
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <Mail /> Email me
            </a>
            <LinkButton href={socialLinks.linkedin}>
              <LinkedIn /> LinkedIn
            </LinkButton>
            <LinkButton href={socialLinks.github}>
              <GitHub /> GitHub
            </LinkButton>
            <LinkButton href={socialLinks.calendly}>
              <Calendar /> Book a call
            </LinkButton>
            <a className="btn btn-ghost" href={profile.resumeUrl} download>
              <Download /> Resume
            </a>
          </div>
        </Reveal>
      </div>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React · Deployed on Vercel</span>
        </div>
      </footer>
    </section>
  );
}
