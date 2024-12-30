// Footer.js
import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="USA AUTO PLAZA" />
        </div>
        <div className="footer-links">
          <ul>
            <li>Listings</li>
            <li>FAQ</li>
            <li>About us</li>
          </ul>
          <ul>
            <li>Blog</li>
            <li>Our team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-description">
          <p>
            USA AUTO PLAZA, established in 2002, is one of the most reputable automobile sales
            and purchase companies in Pakistan. For over 18 years, we have been
            supplying our clients with quality second-hand Japanese and local
            vehicles at competitive prices.
          </p>
        </div>
        <div className="footer-contact">
          <p>support@usaautoplaza.com</p>
          <p>+1 903 978 0137</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
