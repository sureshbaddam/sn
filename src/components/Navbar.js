import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/logo1.png";
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="SNGR Furniture" />
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={closeMenu}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/custom-orders" onClick={closeMenu}>
            Custom Orders
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/about-us" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/feedback" onClick={closeMenu}>
            Feedback
          </Link>
        </li>
      </ul>

      {/* Login/Signup Button */}
      <button className="login-signup" onClick={closeMenu}>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
          Login/Signup
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
