import React from 'react';
import '../styles/testimonials.css';

function Testimonials() {
  const testimonials = [
    { id: 1, name: 'Jane Doe', text: 'I love the results of my facial treatment. My skin has never looked better!' },
    { id: 2, name: 'John Smith', text: 'The laser hair removal treatment was quick and effective. Highly recommended!' },
    { id: 3, name: 'Emily Brown', text: 'The staff is professional and friendly. I always feel comfortable here.' }
  ];

  return (
    <section id="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
