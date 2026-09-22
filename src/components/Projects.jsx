import { useState } from 'react';
import { projectLinks } from '../config';
import { projects } from '../data';
import { Doc, External, GitHub } from './Icons';
import { LinkButton, Reveal, SectionHeader } from './ui';

function ProjectLinks({ links }) {
  const isDev = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV;
  const hasAny = links.live || links.github || links.prd;
  if (!hasAny && !isDev) return null;
  return (
    <div className="project-links">
      <LinkButton href={links.live} variant="primary">
        <External /> Live site
      </LinkButton>
      <LinkButton href={links.github}>
        <GitHub /> GitHub repo
      </LinkButton>
      <LinkButton href={links.prd}>
        <Doc /> PRD
      </LinkButton>
    </div>
  );
}

function Impact({ items }) {
  return (
    <div className="project-impact">
      {items.map((m) => (
        <div key={m.label}>
          <strong>{m.value}</strong>
          <span>{m.label}</span>
        </div>
      ))}
    </div>
  );
}

function LiveEmbed({ url, name }) {
  const [loaded, setLoaded] = useState(false);
  const host = url ? url.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'your-app.vercel.app';

  return (
    <div className="browser">
      <div className="browser-bar">
        <span className="dots"><i /><i /><i /></span>
        <span className="browser-url">
          <span className="lock">●</span> {host}
        </span>
        {url && (
          <a className="browser-open" href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${name} in a new tab`}>
            <External />
          </a>
        )}
      </div>
      <div className="browser-view">
        {url ? (
          <>
            {!loaded && <div className="browser-loading">Loading live app…</div>}
            <iframe
              src={url}
              title={`${name} live demo`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </>
        ) : (
          <div className="embed-placeholder">
            <strong>Live embed goes here</strong>
            <span>
              Add your SkillSprint URL to <code>projectLinks.skillsprint.live</code> in <code>src/config.js</code> and the
              live app appears in this window.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [skillsprint, ddp] = projects;
  const ssLinks = projectLinks.skillsprint;
  const ddpLinks = projectLinks.ddp;

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Built & shipped"
          title="Products I built outside the day job"
          intro="Taking ideas from insight to a working product myself — PRD, build, deploy, and real users."
        />

        <Reveal className="feature-project">
          <div className="feature-copy">
            <div className="project-kind">
              <span className="pulse-dot" /> {skillsprint.kind}
            </div>
            <h3>{skillsprint.name}</h3>
            <p className="project-tagline">{skillsprint.tagline}</p>
            <h4>The problem</h4>
            <p>{skillsprint.problem}</p>
            <h4>What I built</h4>
            <p>{skillsprint.built}</p>
            <Impact items={skillsprint.impact} />
            <div className="chips">
              {skillsprint.skills.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
            <ProjectLinks links={ssLinks} />
          </div>
          <LiveEmbed url={ssLinks.live} name={skillsprint.name} />
        </Reveal>

        <Reveal className="project-card" delay={80}>
          <div className="project-card-head">
            <div>
              <div className="project-kind muted">{ddp.kind}</div>
              <h3>{ddp.name}</h3>
              <p className="project-tagline">{ddp.tagline}</p>
            </div>
            <Impact items={ddp.impact} />
          </div>
          <div className="project-card-body">
            <div>
              <h4>The problem</h4>
              <p>{ddp.problem}</p>
            </div>
            <div>
              <h4>What I built</h4>
              <p>{ddp.built}</p>
            </div>
          </div>
          <div className="chips">
            {ddp.skills.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
          <ProjectLinks links={ddpLinks} />
        </Reveal>
      </div>
    </section>
  );
}
