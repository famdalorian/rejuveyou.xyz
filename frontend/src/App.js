import React, { useState } from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState(""); // State to track active section
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle mobile nav

  const renderSection = () => {
    switch (activeSection) {
      case "services":
        return <Services />;
      case "booking":
        return <Booking />;
      case "about":
        return <About />;
      case "testimonials":
        return <Testimonials />;
      case "contact":
        return <Contact />;
      default:
        return null; // No section is active by default
    }
  };

  return (
    <div className="App">
      {/* Navigation for sections */}
      <nav>
        <div className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
          <span className={isNavOpen ? "bar open" : "bar"}></span>
          <span className={isNavOpen ? "bar open" : "bar"}></span>
          <span className={isNavOpen ? "bar open" : "bar"}></span>
        </div>
        <ul className={isNavOpen ? "nav-open" : ""}>
          <Header />
          <li>
            <button onClick={() => setActiveSection("services")}>
              Services
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection("about")}>About</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("testimonials")}>
              Testimonials
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection("contact")}>Contact</button>
          </li>
        </ul>
      </nav>
      {/* Hero section */}
      <Hero />
      {/* Conditionally rendered sections */}
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;
