import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook } from 'react-icons/fa';
import '../styles/contact.css'; // Assuming you have a CSS file for styling

function Contact() {
  return (
    <section id="contact" className="contact-page">
      <h2>Contact Information</h2>

      {/* Contact Options with Icons */}
      <div className="contact-icons">
        <div className="contact-item">
          <FaEnvelope size={42} />
          <p>Email us <a href="mailto:Rejuve_you@outlook.com">Here</a></p>
        </div>
        <div className="contact-item">
          <FaPhone size={42} />
          <p>Call us <a href="tel:+44 7967 397 257">Here</a></p>
        </div>
        <div className="contact-item">
          <FaInstagram size={42} />
          <p>Follow us on <a href="https://www.instagram.com/rejuve_you?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        </div>
        <div className="contact-item">
          <FaFacebook size={42} />
          <p>Like us on <a href="https://www.facebook.com/p/Rejuve-You-Aesthetics-100067734095254/?_rdr" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
