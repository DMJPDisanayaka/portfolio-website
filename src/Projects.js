import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'GPA Calculator',
      description:
        'A clean and intuitive GPA calculation tool that helps students quickly compute semester and cumulative GPA with instant results.',
      tech: 'HTML • CSS • JavaScript',
      link: 'https://github.com/DMJPDisanayaka/Gpa-Calculetor.git',
      impact: 'User-Friendly Utility',
    },
    {
      title: 'University Event Management System',
      description:
        'A full MERN platform for managing university events with organizer workflows, participant registration, role-based access, and admin reporting.',
      tech: 'MERN Stack • Role-Based Access',
      link: 'https://github.com/DMJPDisanayaka/event-management-system.git',
      impact: 'Full-Featured Platform',
    },
    {
      title: 'Kidney Patient Portal',
      description:
        'A healthcare-focused MERN platform that connects kidney patients with suitable donors using profile-based matching and guided request workflows.',
      tech: 'MERN Stack • Healthcare System',
      link: 'https://github.com/DMJPDisanayaka/Kidney-Donation-Platform.git',
      impact: 'Social Impact Project',
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'A responsive personal portfolio website to present my profile, skills, and projects with smooth one-page navigation and modern UI.',
      tech: 'React • CSS • GitHub Pages',
      link: 'https://github.com/DMJPDisanayaka/portfolio-website',
      impact: 'Professional Branding',
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
