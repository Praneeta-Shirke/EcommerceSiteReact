import React, { useState } from 'react';
import './index.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page container">
      {!submitted ? (
        <>
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-text">
            We'd love to hear from you! Reach out via the form below or email us directly.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </>
      ) : (
        <div className="thank-you-message">
          <h2>Thank you!</h2>
          <p>We've received your message and will get back to you shortly.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
