import { certifications } from '../config';
import { skillGroups } from '../data';
import { External } from './Icons';
import { Reveal, SectionHeader } from './ui';

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="Toolkit"
          title="Skills I use every week"
          intro="Product craft, data fluency, and enough building ability to prototype ideas myself."
        />
        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 80} className={`skill-group accent-${g.accent}`}>
              <h3>{g.title}</h3>
              <div className="skill-cloud">
                {g.items.map((s, j) => (
                  <span key={s} className="skill" style={{ animationDelay: `${j * 40}ms` }}>
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  if (!certifications.length) return null;
  return (
    <section className="section section-tight" id="certifications">
      <div className="container">
        <SectionHeader eyebrow="Certifications" title="Credentials" />
        <div className="cert-grid">
          {certifications.map((c, i) => (
            <Reveal key={c.name + i} delay={i * 80} className="cert">
              <div className="cert-badge" aria-hidden="true">✦</div>
              <div className="cert-body">
                <h3>{c.name}</h3>
                <span className="cert-meta">
                  {c.issuer}
                  {c.date && ` · ${c.date}`}
                </span>
                {c.skills?.length > 0 && (
                  <div className="chips small">
                    {c.skills.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </div>
                )}
              </div>
              {c.credentialUrl && (
                <a className="cert-link" href={c.credentialUrl} target="_blank" rel="noopener noreferrer">
                  Verify <External />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
