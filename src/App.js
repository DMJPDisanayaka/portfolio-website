import './App.css';
import { useRef } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio">
      <Navigation 
        scrollToSection={scrollToSection}
        refs={{
          home: homeRef,
          about: aboutRef,
          skills: skillsRef,
          projects: projectsRef,
          contact: contactRef,
        }}
      />
      
      <section ref={homeRef} className="portfolio-section home-section" data-section="home">
        <Home />
      </section>
      
      <section ref={aboutRef} className="portfolio-section about-section" data-section="about">
        <About />
      </section>
      
      <section ref={skillsRef} className="portfolio-section skills-section" data-section="skills">
        <Skills />
      </section>
      
      <section ref={projectsRef} className="portfolio-section projects-section" data-section="projects">
        <Projects />
      </section>
      
      <section ref={contactRef} className="portfolio-section contact-section" data-section="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
