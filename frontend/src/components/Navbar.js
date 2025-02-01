import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes, FaUserShield } from "react-icons/fa";
import logo from "../assets/Logo5.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleContactUsClick = () => {
    navigate("/", { state: { scrollTo: "section4" } });
  };

  return (
    <nav className={`navbar ${navbarScrolled ? "scrolled-navbar" : ""}`}>
      {/* Mobile Toggle Button */}
      <button className="navbar-toggle-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Logo */}
      <div className="navbar-logo center-logo">
        <RouterLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logo} alt="USA Auto Zone" className="logo" />
        </RouterLink>
      </div>

      {/* Admin Link */}
      <div className="admin-link">
        <RouterLink to="/admin">
          <FaUserShield className="admin-icon" />
        </RouterLink>
      </div>

      {/* Navigation Links */}
      <ul
        className={`navbar-links ${
          isMobileMenuOpen ? "mobile-open" : "mobile-closed"
        }`}
      >
        <li>
          <RouterLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/cars" onClick={() => setIsMobileMenuOpen(false)}>
            Cars
          </RouterLink>
        </li>
        <li>
          <button className="contact-us-btn1" onClick={handleContactUsClick}>
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
