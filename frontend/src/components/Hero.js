import React from "react";
import "./Hero.css"; // Import the CSS file for styling
import { FaEnvelope, FaPhone, FaFacebook,  } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Title at the Top */}
      <h1 className="centered-text">GET YOUR DREAM CAR NOW !!</h1>

      {/* Contact Information Section */}
      <div className="contact-info">
        <div className="contact-column">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>usaautozone@gmail.com</p>
        </div>

        <div className="contact-column">
          <FaPhone className="icon" />
          <h3>Phone</h3>
          <p>+1 903 978 0137</p>
        </div>

        <div className="contact-column-1"> 
        <h3>Facebook</h3>
          <div className="social-icons">
          
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" /> 
            </a>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
