import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const handleSearchClick = () => {
    navigate("/"); // Redirect to Hero section on Search button click
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img
          src={logo}
          alt="USA Auto Zone"
          className="logo"
        />
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li> {/* Home link */}
        <li><Link to="/cars">Cars</Link></li> {/* Cars link */}
        <li><Link to="/admin">Admin</Link></li> {/* Admin link */}
        <li><a href="#section4">Contact Us</a></li> {/* Contact Us link */}
      </ul>

      {/* Search Button */}
      <button className="navbar-search-btn" onClick={handleSearchClick}>
        <FaSearch className="search-icon" /> Search
      </button>
    </nav>
  );
};

// JavaScript to add 'scrolled' class on scroll
window.onscroll = function() {
  var navbar = document.querySelector('.navbar');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

export default Navbar;