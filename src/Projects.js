import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'GPA Calculator',
      description:
        'A simple and user-friendly GPA calculator built with HTML, CSS, and JavaScript to help students quickly compute academic performance.',
      tech: 'HTML • CSS • JavaScript',
      link: 'https://github.com/DMJPDisanayaka/Gpa-Calculetor.git',
      impact: 'User-Friendly Utility',
    },
    {
      title: 'University Event Management System',
      description:
        'A MERN stack platform featuring event creation, participant registration, real-time notifications, and an admin dashboard for full event control.',
      tech: 'MERN Stack',
      link: 'https://github.com/DMJPDisanayaka/event-management-system.git',
      impact: 'Full-Featured Platform',
    },
    {
      title: 'Kidney Patient Portal',
      description:
        'A MERN stack healthcare platform connecting kidney patients with compatible donors using blood type matching and streamlined patient workflows.',
      tech: 'MERN Stack • Healthcare',
      link: 'https://github.com/DMJPDisanayaka/Kidney-Donation-Platform.git',
      impact: 'Social Impact Project',
    },
  ];

  return (
    <main className="projects-main">
      <div className="projects-container">
        <section className="projects-header">
          <h1>Featured Projects</h1>
          <p className="subtitle">Showcasing my work and expertise</p>
        </section>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card-large">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-badge">{project.impact}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <span className="project-tech">{project.tech}</span>
              </div>
              <a href={project.link} className="button ghost" target="_blank" rel="noreferrer">
                View on GitHub →
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
