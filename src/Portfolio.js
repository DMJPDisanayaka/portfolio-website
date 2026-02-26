import './App.css';
import Navigation from './Navigation';

function Portfolio() {
  const projects = [
    {
      title: 'GPA Calculator (Individual)',
      description:
        'A simple and user-friendly GPA calculator built with HTML, CSS, and JavaScript to help students quickly compute academic performance.',
      impact: 'HTML • CSS • JavaScript',
      link: 'https://github.com/DMJPDisanayaka',
    },
    {
      title: 'University Event Management System (Individual)',
      description:
        'A MERN stack platform featuring event creation, participant registration, real-time notifications, and an admin dashboard for full event control.',
      impact: 'MERN Stack Project',
      link: 'https://github.com/DMJPDisanayaka',
    },
    {
      title: 'Kidney Patient Portal (Individual)',
      description:
        'A MERN stack healthcare platform connecting kidney patients with compatible donors using blood type matching and streamlined patient workflows.',
      impact: 'MERN Stack Healthcare Platform',
      link: 'https://github.com/DMJPDisanayaka',
    },
  ];

  return (
    <div className="portfolio">
      <Navigation />
      <header className="hero">
        <div className="hero-content">
          <div className="profile-pic-wrapper">
            <img
              src="https://github.com/DMJPDisanayaka.png?size=200"
              alt="Janith Disanayaka GitHub Profile"
              className="profile-pic"
            />
          </div>
          <p className="eyebrow">PORTFOLIO • 2026</p>
          <h1>Designing important digital experiences that create measurable impact.</h1>
          <p className="hero-text">
            I build modern web applications that are beautiful, scalable, and practical. I focus on creating meaningful solutions that improve real user experiences.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button primary">
              View Projects
            </a>
            <a href="#about" className="button ghost">
              About Me
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <h2>About Me</h2>
          <p>
            I am Janith Disanayaka, a passionate individual developer with strong experience in full-stack development.
            I enjoy building impactful digital systems, especially with the MERN stack, and turning ideas into production-ready products.
          </p>
        </section>

        <section className="section" id="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <strong>{project.impact}</strong>
                <p>
                  <a href={project.link} className="button ghost" target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <h2>Let&apos;s Build Something Important</h2>
          <p>If you are looking for a dedicated developer to build modern and meaningful digital products, I would love to connect.</p>
          <a href="mailto:janithdisanayaka12@gmail.com" className="button primary">
            janithdisanayaka12@gmail.com
          </a>
        </section>
      </main>

      <footer>
        <p>© 2025 Janith Disanayaka. Crafted with purpose.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
