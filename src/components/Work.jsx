import { caseStudies } from '../data';
import { ArrowRight } from './Icons';
import { Reveal, SectionHeader } from './ui';

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHeader eyebrow="Work" title="Real Problems. Measurable Impact." />
        <div className="case-grid">
          {caseStudies.map((c, i) => (
            <Reveal key={c.id} delay={i * 60}>
              <a className="case-card" href={`#/work/${c.id}`}>
                <div className="case-meta">
                  <span>{c.index}</span>
                  <span>{c.tag}</span>
                  <span>{c.period}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.subtitle}</p>
                <ul className="case-metrics">
                  {c.metrics.map((m) => (
                    <li key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </li>
                  ))}
                </ul>
                <span className="case-cta">
                  Read case study <ArrowRight />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
