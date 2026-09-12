import TerminalFrame from '../components/layout/TerminalFrame.jsx';
import PlaceholderNotice from '../components/ui/PlaceholderNotice.jsx';
import { resumeData } from '../data/resumeData.js';

export default function Resume() {
  const { name, title, summary, experience, education, certifications } = resumeData;

  return (
    <TerminalFrame title="LUMON // MDR / RESUME.DAT">
      <div className="stack">
        <div>
          <h1 className="glow-text mono-label" style={{ marginBottom: 2 }}>
            {name}
          </h1>
          <p className="dim-text mono-label" style={{ marginTop: 0 }}>
            {title}
          </p>
        </div>

        {!summary ? (
          <PlaceholderNotice label="SUMMARY PENDING REFINEMENT" />
        ) : (
          <p>{summary}</p>
        )}

        <section>
          <h2 className="mono-label dim-text">Experience</h2>
          {experience.length === 0 ? (
            <PlaceholderNotice label="EXPERIENCE RECORDS PENDING REFINEMENT" />
          ) : (
            <div className="stack">
              {experience.map((job, i) => (
                <div className="card" key={i}>
                  <strong className="glow-text">{job.role}</strong>
                  <div className="dim-text">
                    {job.company} &middot; {job.location} &middot; {job.startDate}
                    {' – '}
                    {job.endDate}
                  </div>
                  <ul>
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <h2 className="mono-label dim-text">Education</h2>
          {education.length === 0 ? (
            <PlaceholderNotice label="EDUCATION RECORDS PENDING REFINEMENT" />
          ) : (
            <ul>
              {education.map((ed, i) => (
                <li key={i}>
                  {ed.credential}, {ed.school} ({ed.year})
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h2 className="mono-label dim-text">Certifications</h2>
          {certifications.length === 0 ? (
            <PlaceholderNotice label="CERTIFICATIONS PENDING REFINEMENT" />
          ) : (
            <ul>
              {certifications.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </TerminalFrame>
  );
}
