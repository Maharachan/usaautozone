import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Import icons
import "./Footer.css";
import logo from "../assets/logos.png";

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
          <b>USA AUTO ZONE</b> is your go-to place for quality vehicles. We offer a great selection of well-maintained cars and a hassle-free buying experience, supported by a friendly and knowledgeable team. Drive home with confidence today!"
          </p>
        </div>
        <div className="footer-contact">
          <div className="contact-item">
            <FaEnvelope className="icon1" />
            <span>sasif4ever@yahoo.com</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon1" />
            <span>+1 903 978 0137</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
