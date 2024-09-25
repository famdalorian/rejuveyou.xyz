import React, { useState } from 'react';
import '../styles/contact.css'; // Assuming you have a CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(''); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulating form submission delay without any API call
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setSubmitStatus('Message sent successfully (no API call).');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="contact-page">
      <h2>Get In Touch</h2>

      {/* Contact Options with Icons */}
      <div className="contact-icons">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>Email us at <a href="mailto:info@beautyshop.com">info@beautyshop.com</a></p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <p>Call us at <a href="tel:+123456789">+1 234 567 89</a></p>
        </div>
        <div className="contact-item">
          <i className="fab fa-instagram"></i>
          <p>Follow us on <a href="https://instagram.com/yourbeautyshop" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Status Message */}
      {submitStatus && <p className="submit-status">{submitStatus}</p>}
    </section>
  );
}

export default Contact;
