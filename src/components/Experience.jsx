import { education, experience } from '../data';
import { Reveal, SectionHeader } from './ui';

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Three years, one company, two levels"
          intro="Promoted from L1 to L2 at Truworth Wellness, moving from growth and delivery work to owning AI, platform and 0→1 bets."
        />
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.title} delay={i * 100} className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-head">
                  <div>
                    <h3>{job.title}</h3>
                    <span className="timeline-company">
                      {job.company} · {job.location}
                    </span>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <p className="timeline-summary">{job.summary}</p>
                <ul className="timeline-list">
                  {job.highlights.map((h) => {
                    const [what, result] = h.split(' → ').map((s) => s.trim());
                    return (
                      <li key={h}>
                        <span>{what}</span>
                        {result && <strong>{result}</strong>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
          <Reveal delay={200} className="timeline-item">
            <span className="timeline-dot muted" />
            <div className="timeline-card edu">
              <div className="timeline-head">
                <div>
                  <h3>{education.degree}</h3>
                  <span className="timeline-company">{education.school}</span>
                </div>
                <span className="timeline-period">{education.period}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
