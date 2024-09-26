import React, { useState, useEffect } from 'react';
import '../styles/footer.css'; // Assuming you have a CSS file for styling

function Footer() {
  const [isVisible, setIsVisible] = useState(false); // Initially hidden
  let activityTimeout = null; // To store the timeout

  const resetFooterTimer = () => {
    setIsVisible(false); // Hide the footer as soon as there's activity

    // Clear any existing timeout
    if (activityTimeout) {
      clearTimeout(activityTimeout);
    }

    // Set a new timeout to show the footer after 1.5 seconds of inactivity
    activityTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
  };

  useEffect(() => {
    // Add event listeners for mouse movement, key presses, and touch events
    window.addEventListener('mousemove', resetFooterTimer);
    window.addEventListener('keydown', resetFooterTimer);
    window.addEventListener('touchstart', resetFooterTimer);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', resetFooterTimer);
      window.removeEventListener('keydown', resetFooterTimer);
      window.removeEventListener('touchstart', resetFooterTimer);
      if (activityTimeout) {
        clearTimeout(activityTimeout); // Clear any active timeout on unmount
      }
    };
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="footer-content">
        {/* Social Media and Contact Icons */}
        <ul className="footer-icons">
          <li>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="tel:+1234567890">
              <i className="fas fa-phone"></i>
            </a>
          </li>
          <li>
            <a href="mailto:info@yourdomain.com">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>

        {/* Footer Text */}
        <p>© 2024 ReJuve You. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
