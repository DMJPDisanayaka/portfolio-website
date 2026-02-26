import './Skills.css';

function Skills() {
  const technicalSkills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'TypeScript', level: 75 },
    { name: 'Node.js & Express', level: 86 },
    { name: 'MongoDB', level: 82 },
    { name: 'MySQL', level: 78 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'REST APIs', level: 88 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'Responsive Design', level: 92 },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: '💡' },
    { name: 'Communication', icon: '💬' },
    { name: 'Team Collaboration', icon: '🤝' },
    { name: 'Time Management', icon: '⏱️' },
    { name: 'Attention to Detail', icon: '🎯' },
    { name: 'Creative Thinking', icon: '🎨' },
  ];

  return (
    <main className="skills-main">
      <div className="skills-container">
        <section className="skills-header">
          <h1>Skills & Expertise</h1>
          <p className="subtitle">Technical abilities and professional qualities</p>
        </section>

        <section className="skills-section technical-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
                <div className="skill-level">{skill.level}%</div>
              </div>
            ))}
          </div>
        </section>

        <section className="skills-section soft-section">
          <h2>Soft Skills</h2>
          <div className="soft-skills-grid">
            {softSkills.map((skill) => (
              <div key={skill.name} className="soft-skill-card">
                <div className="soft-skill-icon">{skill.icon}</div>
                <div className="soft-skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="skills-summary">
          <h2>Technology Stack</h2>
          <div className="tech-stack">
            <div className="stack-category">
              <h3>Frontend</h3>
              <p>React, JavaScript, TypeScript, HTML5, CSS3, Responsive Design</p>
            </div>
            <div className="stack-category">
              <h3>Backend</h3>
              <p>Node.js, Express.js, REST APIs, MongoDB, MySQL</p>
            </div>
            <div className="stack-category">
              <h3>Tools & Other</h3>
              <p>Git, GitHub, VS Code, Postman, Figma, Vercel</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Skills;
