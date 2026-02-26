import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS - Replace with your actual Public Key from emailjs.com
  useEffect(() => {
    emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }
    if (!formData.subject.trim()) {
      setError('Subject is required');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Message is required');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Send email using EmailJS
    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        to_email: 'janithdisanayaka12@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })
      .then(
        () => {
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setLoading(false);

          setTimeout(() => {
            setSubmitted(false);
          }, 3000);
        },
        (error) => {
          setError('Failed to send message. Please try again.');
          setLoading(false);
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <>
      <header className="contact-hero">
        <div className="contact-intro">
          <p className="eyebrow">GET IN TOUCH</p>
          <h1>Let&apos;s Connect</h1>
          <p className="hero-text">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
          </p>
        </div>
      </header>

      <main className="contact-main">
        <div className="contact-container">
          <div className="contact-content">
            <section className="contact-form-section">
              <h2>Send me a Message</h2>
              
              {submitted && (
                <div className="success-message">
                  ✓ Thank you! Your message is being sent. I'll get back to you soon!
                </div>
              )}

              {error && <div className="error-message">{error}</div>}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows="6"
                  />
                </div>

                <button type="submit" className="button primary send-btn" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </section>

            <aside className="contact-info">
              <h3>Other Ways to Reach Me</h3>

              <div className="info-card">
                <h4>Email</h4>
                <p>
                  <a href="mailto:janithdisanayaka12@gmail.com" className="info-link">
                    janithdisanayaka12@gmail.com
                  </a>
                </p>
              </div>

              <div className="info-card">
                <h4>Response Time</h4>
                <p>I typically respond within 24-48 hours</p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2025 Janith Disanayaka. Crafted with purpose.</p>
      </footer>
    </>
  );
}

export default Contact;
