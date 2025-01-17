import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes, FaUserShield } from "react-icons/fa";
import logo from "../assets/logo3.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarScrolled(true); // Apply the black background
      } else {
        setNavbarScrolled(false); // Remove the black background
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleContactUsClick = () => {
    navigate("/", { state: { scrollTo: "section4" } });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${navbarScrolled ? "scrolled-navbar" : ""}`}>
      {/* Toggle Button Visible on Both Desktop and Mobile */}
      <button className="navbar-toggle-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Logo at Center */}
      <div className="navbar-logo center-logo">
        <RouterLink to="/" onClick={handleMenuItemClick}>
          <img src={logo} alt="USA Auto Zone" className="logo" />
        </RouterLink>
      </div>

      {/* Admin Link on Right */}
      <div className="admin-link">
        <RouterLink to="/admin">
          <FaUserShield className="admin-icon" />
        </RouterLink>
      </div>

      {/* Navigation Links Slide-in Menu Fixed on Left */}
      <ul className={`navbar-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <li>
          <RouterLink to="/" onClick={handleMenuItemClick}>
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/cars" onClick={handleMenuItemClick}>
            Cars
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/cars/1" onClick={handleMenuItemClick}>
            Car Details
          </RouterLink>
        </li>
        <li>
          <button className="contact-us-btn" onClick={handleContactUsClick}>
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
