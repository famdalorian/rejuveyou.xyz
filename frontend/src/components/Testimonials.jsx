import React from 'react';
import '../styles/testimonials.css';

function Testimonials() {
  const testimonials = [
    { id: 1, name: 'Jane', text: 'I’ve never felt more confident in my skin. The results speak for themselves!' },
    { id: 2, name: 'John', text: 'The experience was professional and seamless. I’m so glad I chose this clinic!' },
    { id: 3, name: 'Emily', text: 'I always feel so welcomed and comfortable during my visits. Highly recommended!' }
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
