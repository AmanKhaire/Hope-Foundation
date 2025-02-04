import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-banner" style={{ backgroundImage: 'url(/img7.jpg)' }}>
        <h1>Contact Us</h1>
      </div>

      {/* Contact Form Section */}
      <div className="contact-content">
        <div className="contact-details">
          <h2>Become A Volunteer</h2>
          <form>
            <label>Your Name (required)</label>
            <input type="text" name="name" required />

            <label>Your Email (required)</label>
            <input type="email" name="email" required />

            <label>Your Message</label>
            <textarea name="message"></textarea>

            <button type="submit" className="contact-button">
              Send Request
            </button>
          </form>
        </div>
        
        {/* Contact Image Section */}
        <div className="contact-photo">
          <img src="/img1.jpg" alt="Volunteers" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
