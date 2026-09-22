import { analytics } from '../data';
import { useInView, useTypewriter } from '../hooks';
import { Reveal, SectionHeader } from './ui';

const KEYWORDS = new Set([
  'WITH', 'AS', 'SELECT', 'FROM', 'WHERE', 'GROUP', 'BY', 'SUM', 'MAX', 'ROUND', 'NULLIF',
  'INTERVAL', 'CURRENT_DATE', 'AND', 'OR', 'ON', 'JOIN', 'LEFT', 'ORDER',
]);

function highlight(code) {
  const re = /(--[^\n]*)|('[^'\n]*'?)|(\b\d+(?:\.\d+)?\b)|(\b[A-Za-z_]+\b)/g;
  const out = [];
  let last = 0;
  let m;
  let k = 0;
  while ((m = re.exec(code))) {
    if (m.index > last) out.push(code.slice(last, m.index));
    const [tok, comment, str, num, word] = m;
    let cls = null;
    if (comment) cls = 'tk-comment';
    else if (str) cls = 'tk-string';
    else if (num) cls = 'tk-number';
    else if (word && KEYWORDS.has(word)) cls = 'tk-keyword';
    out.push(cls ? <span key={k++} className={cls}>{tok}</span> : tok);
    last = m.index + tok.length;
  }
  if (last < code.length) out.push(code.slice(last));
  return out;
}

function SqlPanel() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const typed = useTypewriter(analytics.sql, inView);
  const done = typed.length >= analytics.sql.length;

  return (
    <div className="code-panel" ref={ref}>
      <div className="code-head">
        <span className="dots"><i /><i /><i /></span>
        <span className="code-file">booking_funnel.sql</span>
        <span className="code-note">illustrative</span>
      </div>
      <pre className="code-body">
        <code>
          {highlight(typed)}
          {!done && <span className="caret" />}
        </code>
      </pre>
    </div>
  );
}

function LiftChart() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <div className="lift-chart" ref={ref}>
      <div className="lift-title">Booking completion rate, indexed (before = 100)</div>
      <div className="lift-row">
        <span className="lift-label">Before</span>
        <div className="lift-track">
          <div className="lift-bar before" style={{ width: inView ? '83.33%' : '0%' }} />
        </div>
        <span className="lift-val">100</span>
      </div>
      <div className="lift-row">
        <span className="lift-label">After</span>
        <div className="lift-track">
          <div className="lift-bar after" style={{ width: inView ? '83.33%' : '0%' }} />
          <div className="lift-extra" style={{ width: inView ? '16.67%' : '0%' }} />
        </div>
        <span className="lift-val accent">120</span>
      </div>
      <p className="lift-foot">A 20% relative lift after fixing the steps with the steepest drop-offs.</p>
    </div>
  );
}

export default function Analytics() {
  return (
    <section className="section section-alt" id="analytics">
      <div className="container">
        <SectionHeader
          eyebrow="The data angle"
          title="A PM who writes the SQL"
          intro="I don't wait in a queue for an analyst. I query the data myself, build the dashboards clients use, and make sure the numbers can be trusted."
        />

        <div className="stat-row">
          {analytics.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>

        <div className="analytics-grid">
          <Reveal>
            <SqlPanel />
          </Reveal>
          <div className="analytics-side">
            <Reveal delay={100}>
              <LiftChart />
            </Reveal>
            <div className="pillars">
              {analytics.pillars.map((p, i) => (
                <Reveal key={p.title} delay={150 + i * 70} className="pillar">
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                  <div className="chips small">
                    {p.tools.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
