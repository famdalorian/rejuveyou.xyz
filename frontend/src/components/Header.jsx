import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-logo-title">
        <img src="/images/rjylogo.png" alt="Rejuve You Logo" className="logo" />
        <h1>Rejuve You</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
