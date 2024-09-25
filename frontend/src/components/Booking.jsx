import React, { useState } from 'react';

function Booking() {
  const [booking, setBooking] = useState({
    service: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission without any API call
    console.log('Booking submitted (no API call):', booking);
    // Reset form
    setBooking({ service: '', date: '', time: '' });
  };

  return (
    <section id="booking">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <select
          name="service"
          value={booking.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a Service</option>
          <option value="facial">Facial Treatment</option>
          <option value="botox">Botox</option>
          <option value="laser">Laser Hair Removal</option>
        </select>
        <input
          type="date"
          name="date"
          value={booking.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={booking.time}
          onChange={handleChange}
          required
        />
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default Booking;
