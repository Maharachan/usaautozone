import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // Import RouterLink for navigation
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleContactUsClick = () => {
    navigate("/", { state: { scrollTo: "section4" } }); // Navigate to home and scroll to Section4
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={logo} alt="USA Auto Zone" className="logo" />
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/cars">Cars</RouterLink>
        </li>
        <li>
          <RouterLink to="/admin">Admin</RouterLink>
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

// JavaScript to add 'scrolled' class on scroll
window.onscroll = function () {
  var navbar = document.querySelector(".navbar");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

export default Navbar;
