import React from 'react';
import Logo from '../components/rjylogo.png'; // Ensure the path is correct
import '../styles/header.css'; // Ensure the path is correct

function Header() {
  return (
    <header>
      <div className="header-logo-title">
        <img src={Logo} alt="Rejuve You Logo" className="logo" />  {/* Correct usage of image */}
        
      </div>
     
    </header>
  );
}

export default Header;
