import TerminalFrame from '../components/layout/TerminalFrame.jsx';
import PlaceholderNotice from '../components/ui/PlaceholderNotice.jsx';
import { resumeData } from '../data/resumeData.js';

export default function Skills() {
  const categories = Object.entries(resumeData.skills);
  const hasAny = categories.some(([, list]) => list.length > 0);

  return (
    <TerminalFrame title="LUMON // MDR / SKILLS.DAT">
      <div className="stack">
        <h1 className="glow-text mono-label">Skill Refinement Index</h1>
        {!hasAny ? (
          <PlaceholderNotice label="SKILL RECORDS PENDING REFINEMENT" />
        ) : (
          <div className="two-col">
            {categories.map(([category, list]) => (
              <div className="card" key={category}>
                <h2 className="mono-label dim-text" style={{ marginTop: 0 }}>
                  {category}
                </h2>
                {list.length === 0 ? (
                  <PlaceholderNotice label="PENDING" />
                ) : (
                  <ul>
                    {list.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </TerminalFrame>
  );
}
