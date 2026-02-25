import { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation({ scrollToSection, refs }) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { key: 'home', ref: refs.home },
        { key: 'about', ref: refs.about },
        { key: 'skills', ref: refs.skills },
        { key: 'projects', ref: refs.projects },
        { key: 'contact', ref: refs.contact },
      ];

      let current = 'home';
      for (const section of sections) {
        if (section.ref?.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section.key;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [refs]);

  const handleNavClick = (sectionKey) => {
    scrollToSection(refs[sectionKey]);
  };

  const handleBrandClick = () => {
    scrollToSection(refs.home);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button onClick={handleBrandClick} className="nav-brand">
          Janith Disanayaka
        </button>

        <ul className="nav-menu">
          <li className="nav-item">
            <button
              onClick={() => handleNavClick('home')}
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => handleNavClick('about')}
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About Me
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => handleNavClick('skills')}
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            >
              Skills
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => handleNavClick('projects')}
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => handleNavClick('contact')}
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
