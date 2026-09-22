import { profile } from '../config';
import { heroMetrics, tickerItems } from '../data';
import { useCountUp, useInView } from '../hooks';
import { ArrowRight, Download, Mail } from './Icons';

function Metric({ value, suffix, label, source, index, active }) {
  const n = useCountUp(value, active, 1400 + index * 200);
  return (
    <div className="hero-metric" style={{ animationDelay: `${500 + index * 120}ms` }}>
      <div className="hero-metric-value">
        {n}
        <span className="suffix">{suffix}</span>
      </div>
      <div className="hero-metric-label">{label}</div>
      <div className="hero-metric-source">{source}</div>
    </div>
  );
}

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const loop = [...tickerItems, ...tickerItems];

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="status-pill">
            <span className="pulse-dot" />
            {profile.availability}
          </span>
          <h1>
            I turn operational bottlenecks into{' '}
            <span className="gradient-text">AI-powered products</span> that move the numbers.
          </h1>
          <p className="hero-sub">
            {profile.role} with 3+ years owning 0→1 launches and growth-stage products across B2B SaaS and
            B2B2C healthcare. I combine AI-driven automation, SQL analytics and structured product thinking.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#case-studies">
              Read the case studies <ArrowRight />
            </a>
            <a className="btn btn-ghost" href={profile.resumeUrl} download>
              <Download /> Resume
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              <Mail /> Email me
            </a>
          </div>
        </div>

        <div className="hero-metrics" ref={ref}>
          {heroMetrics.map((m, i) => (
            <Metric key={m.label} {...m} index={i} active={inView} />
          ))}
        </div>
      </div>

      <div className="ticker" aria-label="More outcomes">
        <div className="ticker-track">
          {loop.map((t, i) => (
            <span key={i} className="ticker-item" aria-hidden={i >= tickerItems.length}>
              <span className="ticker-dot" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
