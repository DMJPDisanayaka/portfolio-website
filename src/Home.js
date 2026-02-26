import './Home.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Home() {
  return (
    <>
      {/* Background effects */}
      <div className="home-bg-gradient"></div>
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>

      <header className="hero home-hero">
        <div className="hero-wrapper">
          {/* Left Profile Section */}
          <div className="profile-container">
            <div className="profile-pic-wrapper">
              <div className="pic-glow"></div>
              <img
                src="https://github.com/DMJPDisanayaka.png?size=300"
                alt="Janith Disanayaka GitHub Profile"
                className="profile-pic"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="hero-content">
            {/* Main Heading */}
            <div className="heading-section">
              <p className="hero-subtitle">Hello, I'm</p>
              <h1 className="gradient-text animated-name">
                {'Janith Disanayaka'.split('').map((letter, index) => (
                  <span key={index} className="letter" style={{animationDelay: `${index * 0.08}s`}}>
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </h1>
              <p className="tagline animated-tagline">BICT (Hons) Undergraduate | Full-Stack Web Developer</p>
            </div>

            {/* Description */}
            <p className="hero-description">
              I design and build modern web applications that are fast, responsive, and user-friendly. My main focus is the MERN stack, and I enjoy turning real ideas into clean digital products with strong UI/UX, maintainable code, and practical business value.
            </p>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <button onClick={() => document.querySelector('[data-section="projects"]')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary">
                <span>View Projects</span>
              </button>
              <button onClick={() => document.querySelector('[data-section="contact"]')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-secondary">
                <span>Get in Touch</span>
              </button>
              <a
                href={`${process.env.PUBLIC_URL}/cv/my_cv.pdf`}
                className="btn btn-outline"
                title="Open CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-social">
              <div className="social-icons">
                <a 
                  href="https://www.linkedin.com/in/janith-disanayaka" 
                  className="social-icon"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/DMJPDisanayaka" 
                  className="social-icon"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;
