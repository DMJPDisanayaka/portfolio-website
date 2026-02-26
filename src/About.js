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
              I am a BICT (Honours) undergraduate at the University of Jaffna – Vavuniya Campus, passionate about building practical software solutions that solve real-world problems. I enjoy learning new technologies and applying them to create products that are both useful and visually polished.
            </p>
            <p>
              My core stack is MERN (MongoDB, Express.js, React.js, Node.js), and I am especially interested in full-stack product development. I focus on writing clean code, building responsive interfaces, and creating robust backend APIs that support scalable applications.
            </p>
            <p>
              In addition to coding, I continuously improve my skills in UI/UX, software quality, and teamwork practices. I am committed to growing as a professional software engineer and contributing to impactful projects through discipline, creativity, and consistent learning.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>🎯 My Focus</h3>
              <p>Building secure and scalable full-stack applications with excellent user experience.</p>
            </div>
            <div className="highlight-card">
              <h3>💡 My Approach</h3>
              <p>Combining structured problem-solving with modern engineering practices for reliable results.</p>
            </div>
            <div className="highlight-card">
              <h3>🚀 My Vision</h3>
              <p>To grow into a product-minded engineer who builds meaningful solutions for global users.</p>
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
