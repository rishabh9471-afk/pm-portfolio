import { profile, socialLinks } from '../config';
import { heroMetrics, intro } from '../data';
import { GitHub, LinkedIn, Mail } from './Icons';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-id">
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="about-thumb"
            width="88"
            height="88"
          />
          <div>
            <p className="about-name">{profile.name}</p>
            <p className="about-role">{profile.role}</p>
          </div>
        </div>

        <span className="status-pill">
          <span className="status-dot" />
          {profile.status}
        </span>

        <h1 className="about-headline">{intro.headline}</h1>
        <p className="about-bio">{intro.bio}</p>

        <div className="about-links">
          <a className="btn btn-ghost" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedIn /> LinkedIn
          </a>
          <a className="btn btn-ghost" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <GitHub /> GitHub
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            <Mail /> {profile.email}
          </a>
        </div>

        <ul className="about-metrics" aria-label="Selected outcomes">
          {heroMetrics.map((m) => (
            <li key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
