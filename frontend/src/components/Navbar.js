import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // Import RouterLink for navigation
import "./Navbar.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa"; // Import icons for the toggle button
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to toggle mobile menu
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleContactUsClick = () => {
    navigate("/", { state: { scrollTo: "section4" } }); // Navigate to home and scroll to Section4
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle menu item click
  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu when a menu item is clicked
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={logo} alt="USA Auto Zone" className="logo" />
      </div>

      {/* Toggle Button for Mobile View */}
      <button className="navbar-toggle-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <li>
          <RouterLink to="/" onClick={handleMenuItemClick}>Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/cars" onClick={handleMenuItemClick}>Cars</RouterLink>
        </li>
        <li>
          <RouterLink to="/admin" onClick={handleMenuItemClick}>Admin</RouterLink>
        </li>
        <li>
          {/* Trigger scroll to Section4 */}
          <button className="contact-us-btn" onClick={handleContactUsClick}>
            Contact Us
          </button>
        </li>
      </ul>

      {/* Search Button */}
      <button className="navbar-search-btn" onClick={handleSearchClick}>
        <FaSearch className="search-icon" /> Search
      </button>
    </nav>
  );
};

export default Navbar;
