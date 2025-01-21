import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Import icons
import "./Section3.css";

const Section3 = () => {
  return (
    <div className="section3">
      {/* Centered Contact Card */}
      <div className="section3-card">
        <h2 className="section3-title">Contact Us</h2>
        <div className="section0-divider1"></div>
        <div className="contact-info">
          {/* Phone Section */}
          <div className="contact-item">
            <FaPhoneAlt className="icon large-icon" />
            <div>
              <span className="contact-label">Call Us</span>
              <span className="contact-text">+1 903 978 0137</span>
            </div>
          </div>
          {/* Mail Section */}
          <div className="contact-item">
            <FaEnvelope className="icon large-icon" />
            <div>
              <span className="contact-label">Email Us</span>
              <span className="contact-text">info@carsales.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
