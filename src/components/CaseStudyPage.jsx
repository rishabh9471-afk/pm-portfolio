import { caseStudies } from '../data';
import { ArrowLeft, ArrowRight } from './Icons';

/** "Label: text" → bold label when the label is short. */
function ListItem({ text }) {
  const i = text.indexOf(': ');
  if (i > 0 && i < 50) {
    return (
      <li>
        <strong>{text.slice(0, i)}:</strong> {text.slice(i + 2)}
      </li>
    );
  }
  return <li>{text}</li>;
}

function Block({ block }) {
  if (block.p) return <p>{block.p}</p>;
  if (block.quote) return <blockquote>{block.quote}</blockquote>;
  if (block.list)
    return (
      <ul className="cs-list">
        {block.list.map((t) => (
          <ListItem key={t} text={t} />
        ))}
      </ul>
    );
  if (block.stats)
    return (
      <ul className="cs-stats">
        {block.stats.map((s) => (
          <li key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
    );
  return null;
}

export default function CaseStudyPage({ id }) {
  const idx = caseStudies.findIndex((c) => c.id === id);

  if (idx === -1) {
    return (
      <main className="cs container">
        <a className="cs-back" href="#work">
          <ArrowLeft /> All case studies
        </a>
        <h1 className="cs-title">Case study not found</h1>
      </main>
    );
  }

  const c = caseStudies[idx];
  const prev = caseStudies[(idx - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <main className="cs">
      <div className="container cs-container">
        <a className="cs-back" href="#work">
          <ArrowLeft /> All case studies
        </a>

        <header className="cs-head">
          <div className="case-meta">
            <span>{c.index}</span>
            <span>{c.tag}</span>
            <span>{c.period}</span>
          </div>
          <h1 className="cs-title">{c.title}</h1>
          <p className="cs-subtitle">{c.subtitle}</p>
          <ul className="cs-stats">
            {c.metrics.map((m) => (
              <li key={m.label}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </li>
            ))}
          </ul>
        </header>

        <div className="cs-layout">
          <nav className="cs-toc" aria-label="On this page">
            {c.sections.map((s) => (
              <a key={s.title} href={`#/work/${c.id}`} onClick={(e) => {
                e.preventDefault();
                document.getElementById(`cs-${s.title}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
                {s.title}
              </a>
            ))}
          </nav>

          <article className="cs-body">
            {c.sections.map((s) => (
              <section key={s.title} id={`cs-${s.title}`} className="cs-section">
                <h2>
                  <span className="cs-icon" aria-hidden="true">{s.icon}</span>
                  {s.title}
                </h2>
                {s.blocks.map((b, i) => (
                  <Block key={i} block={b} />
                ))}
              </section>
            ))}
          </article>
        </div>

        <nav className="cs-pager" aria-label="More case studies">
          <a href={`#/work/${prev.id}`}>
            <span className="cs-pager-label"><ArrowLeft /> Previous</span>
            <span className="cs-pager-title">{prev.title}</span>
          </a>
          <a href={`#/work/${next.id}`} className="next">
            <span className="cs-pager-label">Next <ArrowRight /></span>
            <span className="cs-pager-title">{next.title}</span>
          </a>
        </nav>
      </div>
    </main>
  );
}
