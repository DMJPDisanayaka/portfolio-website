import './About.css';

function About() {
  return (
    <main className="about-main">
      <div className="about-container">
        <section className="about-header">
          <h1>About Me</h1>
        </section>

        <section className="about-content">
          <div className="about-text">
            <h2>Who I Am</h2>
            <p>
              I am a BICT (Honours) undergraduate at the University of Jaffna – Vavuniya Campus, with a strong passion for building modern, user-focused digital solutions. Throughout my academic journey, I have developed a solid foundation in information and communication technology, along with practical experience in full-stack web development.
            </p>
            <p>
              I primarily work with the MERN stack (MongoDB, Express.js, React.js, and Node.js) and enjoy creating responsive, interactive front-end interfaces as well as reliable and secure back-end systems. I am particularly interested in transforming ideas into scalable web applications that deliver real value through clean design, efficient functionality, and good user experience.
            </p>
            <p>
              In addition to development, I am continuously improving my knowledge in UI/UX design, Quality Assurance, and Networking, which helps me build well-rounded and maintainable software solutions. I am highly motivated, eager to learn new technologies, and committed to growing as a skilled software engineer while contributing positively to real-world projects.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>🎯 My Focus</h3>
              <p>Building modern, scalable web applications with attention to user experience and code quality.</p>
            </div>
            <div className="highlight-card">
              <h3>💡 My Approach</h3>
              <p>Combining technical expertise with creative thinking to deliver solutions that make a real difference.</p>
            </div>
            <div className="highlight-card">
              <h3>🚀 My Vision</h3>
              <p>To create digital products that are not just functional, but beautiful and meaningful to their users.</p>
            </div>
          </div>

          <div className="about-education">
            <h2>Education</h2>
            <div className="education-card">
              <h3>BICT (Honours) Undergraduate</h3>
              <p>University of Jaffna – Vavuniya Campus</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
