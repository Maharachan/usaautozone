import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Section3.css";

const Section3 = () => {
  const phoneNumber = "9039780137";
  const emailAddress = "sasif4ever@yahoo.com";

  return (
    <div className="section3">
      <div className="section3-card">
        <h2 className="section3-title">Contact Us</h2>
        <div className="section0-divider1"></div>

        {/* Contact Information Section */}
        <div className="contact-info">
          {/* Call Section */}
          <div className="contact-item">
            <FaPhoneAlt className="large-icon" />
            <div className="contact-details-wrapper">
              <div className="contact-details">
                <span className="contact-label">CALL US : {phoneNumber}</span>
              </div>
              <button
                className="contact-button1"
                onClick={() => window.location.href = `tel:${phoneNumber}`}
              >
                Call Now
              </button>
            </div>
          </div>

          {/* Email Section */}
          <div className="contact-item">
            <FaEnvelope className="large-icon" />
            <div className="contact-details-wrapper">
              <div className="contact-details">
                <span className="contact-label">EMAIL US : {emailAddress}</span>
                
              </div>
              <button
                className="contact-button1"
                onClick={() => window.location.href = `mailto:${emailAddress}`}
              >
                Email Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
