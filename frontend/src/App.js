import React, { useState } from 'react';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(''); // State to track active section

  const renderSection = () => {
    switch (activeSection) {
      case 'services':
        return <Services />;
      case 'booking':
        return <Booking />;
      case 'about':
        return <About />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      default:
        return null; // No section is active by default
    }
  };

  return (
    <div className="App">
      <Header />
      
      {/* Hero section */}
      <Hero />

      {/* Navigation for sections */}
      <nav>
        <ul>
          <li><button onClick={() => setActiveSection('services')}>Services</button></li>
         
          <li><button onClick={() => setActiveSection('about')}>About</button></li>
          <li><button onClick={() => setActiveSection('testimonials')}>Testimonials</button></li>
          <li><button onClick={() => setActiveSection('contact')}>Contact</button></li>
        </ul>
      </nav>

      {/* Conditionally rendered sections */}
      {renderSection()}

      <Footer />
    </div>
  );
}

export default App;
