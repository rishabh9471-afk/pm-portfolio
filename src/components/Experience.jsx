import { education, experience } from '../data';
import { Reveal, SectionHeader } from './ui';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader eyebrow="Experience" title="Where I've built" />
        <div className="exp-list">
          {experience.map((job, i) => (
            <Reveal key={job.title} delay={i * 60} className="exp-item">
              <div className="exp-when">{job.period}</div>
              <div className="exp-what">
                <h3>
                  {job.title} <span>· {job.company}</span>
                </h3>
                <p>{job.summary}</p>
                <ul className="exp-highlights">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <Reveal className="exp-item edu" delay={120}>
            <div className="exp-when">{education.period}</div>
            <div className="exp-what">
              <h3>
                {education.degree} <span>· {education.school}</span>
              </h3>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
