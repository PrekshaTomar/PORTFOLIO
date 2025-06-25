import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Contact Me</h2>

      {/* Contact Info Links */}
      <div className="contact-links">
        <p>
          📧 Email: <a href="mailto:prekshatomar29@gmail.com">prekshatomar29@gmail.com</a>
        </p>
        <p>
          💼 LinkedIn: <a href="https://www.linkedin.com/in/preksha-tomar-968614225" target="_blank" rel="noreferrer">
            linkedin.com/in/preksha-tomar-968614225
          </a>
        </p>
        <p>
          🐙 GitHub: <a href="https://github.com/PrekshaTomar" target="_blank" rel="noreferrer">
            github.com/PrekshaTomar
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;


