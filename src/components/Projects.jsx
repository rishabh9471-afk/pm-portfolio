import { useEffect, useRef, useState } from 'react';
import { certifications, projectLinks } from '../config';
import { projects, skillGroups } from '../data';
import { Doc, External, GitHub } from './Icons';
import { LinkButton, Reveal, SectionHeader } from './ui';

const FRAME_W = 1280; // the embedded site renders at desktop width, then scales down
const FRAME_H = 800;

function Preview({ url, name }) {
  const boxRef = useRef(null);
  const [scale, setScale] = useState(0.4);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / FRAME_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const host = url ? new URL(url).host : '';

  return (
    <div className="preview">
      <div className="preview-bar">
        <span className="dots"><i /><i /><i /></span>
        <span className="preview-url">{host}</span>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${name} in a new tab`}>
            <External />
          </a>
        )}
      </div>
      <div className="preview-view" ref={boxRef}>
        {!loaded && <div className="preview-loading">Loading {name}…</div>}
        {url && (
          <iframe
            src={url}
            title={`${name} preview`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            style={{ width: FRAME_W, height: FRAME_H, transform: `scale(${scale})`, opacity: loaded ? 1 : 0 }}
          />
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, links, delay }) {
  const liveLabel = project.kind === 'Prototype' ? 'View prototype' : 'Live site';
  return (
    <Reveal className="project" delay={delay}>
      <Preview url={links.embed || links.live} name={project.name} />
      <div className="project-body">
        <div className="project-top">
          <span className="project-kind">{project.kind}</span>
          <h3>{project.name}</h3>
          <p className="project-tagline">{project.tagline}</p>
        </div>
        <p className="project-desc">{project.description}</p>
        <ul className="project-impact">
          {project.impact.map((m) => (
            <li key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </li>
          ))}
        </ul>
        <div className="project-foot">
          <div className="tags">
            {project.skills.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <div className="project-links">
            <LinkButton href={links.live} variant="primary">
              <External /> {liveLabel}
            </LinkButton>
            <LinkButton href={links.prd}>
              <Doc /> PRD
            </LinkButton>
            <LinkButton href={links.github}>
              <GitHub /> Code
            </LinkButton>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <div id="projects">
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Projects" title="Where Ideas Become Products" />
          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} links={projectLinks[p.id]} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-small" id="skills">
        <div className="container">
          <Reveal>
            <h2 className="sub-heading">Skills</h2>
            <dl className="skills">
              {skillGroups.map((g) => (
                <div key={g.title} className="skills-row">
                  <dt>{g.title}</dt>
                  <dd>{g.items.join(' · ')}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {certifications.length > 0 && (
        <section className="section section-small" id="certifications">
          <div className="container">
            <Reveal>
              <h2 className="sub-heading">Certifications</h2>
              <ul className="certs">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <span className="cert-name">{c.name}</span>
                    <span className="cert-meta">
                      {c.issuer}
                      {c.date && ` · ${c.date}`}
                    </span>
                    {c.credentialUrl && (
                      <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer">
                        View credential <External />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}
    </div>
  );
}
