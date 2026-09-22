import { useCallback, useEffect, useRef, useState } from 'react';
import { caseStudies } from '../data';
import { ArrowRight, Close } from './Icons';
import { Reveal, SectionHeader } from './ui';

function Flow({ steps }) {
  return (
    <ol className="flow">
      {steps.map((s, i) => (
        <li key={s} className="flow-step" style={{ animationDelay: `${i * 140}ms` }}>
          <span className="flow-num">{i + 1}</span>
          <span className="flow-label">{s}</span>
        </li>
      ))}
    </ol>
  );
}

function CaseModal({ study, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <article
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`cs-${study.id}-title`}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close case study">
          <Close />
        </button>

        <header className="modal-head">
          <span className="eyebrow">
            Case study {study.index} · {study.tag}
          </span>
          <h3 id={`cs-${study.id}-title`}>{study.title}</h3>
          <div className="modal-metrics">
            {study.metrics.map((m) => (
              <div key={m.label} className="modal-metric">
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </header>

        <div className="modal-body">
          <section>
            <h4>The flow</h4>
            <Flow steps={study.flow} />
          </section>

          <div className="modal-cols">
            <section>
              <h4>Context</h4>
              <p>{study.context}</p>
            </section>
            <section>
              <h4>Problem</h4>
              <p>{study.problem}</p>
            </section>
          </div>

          <section>
            <h4>My role</h4>
            <p>{study.role}</p>
          </section>

          <section>
            <h4>Approach</h4>
            <ol className="approach">
              {study.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ol>
          </section>

          <div className="modal-cols">
            <section>
              <h4>What shipped</h4>
              <ul className="tick-list">
                {study.solution.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
            <section>
              <h4>Impact</h4>
              <ul className="tick-list impact">
                {study.impact.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="learning">
            <h4>What I learned</h4>
            <p>{study.learnings}</p>
          </section>

          <div className="chips">
            {study.skills.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default function CaseStudies() {
  const [openId, setOpenId] = useState(null);
  const open = caseStudies.find((c) => c.id === openId);
  const close = useCallback(() => setOpenId(null), []);

  return (
    <section className="section" id="case-studies">
      <div className="container">
        <SectionHeader
          eyebrow="Case studies"
          title="Four problems, four measurable outcomes"
          intro="Each one follows the same arc: find the real bottleneck, design the smallest thing that removes it, measure the result."
        />
        <div className="case-grid">
          {caseStudies.map((c, i) => (
            <Reveal key={c.id} delay={i * 90}>
              <button className="case-card" onClick={() => setOpenId(c.id)}>
                <div className="case-top">
                  <span className="case-index">{c.index}</span>
                  <span className="case-tag">{c.tag}</span>
                </div>
                <div className="case-headline">
                  <span className="case-headline-value">{c.headline.value}</span>
                  <span className="case-headline-label">{c.headline.label}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.oneLiner}</p>
                <div className="case-flow-mini" aria-hidden="true">
                  {c.flow.map((s, j) => (
                    <span key={s} className="mini-step" style={{ '--d': `${j * 0.35}s` }} />
                  ))}
                </div>
                <span className="case-cta">
                  Read case study <ArrowRight />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {open && <CaseModal study={open} onClose={close} />}
    </section>
  );
}
