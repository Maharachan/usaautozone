import React from "react";
import { FaPhoneAlt, FaSearch } from "react-icons/fa"; // Import phone and search icons
import "./Section3.css";

const Section3 = () => {
  return (
    <div className="section3">
      {/* Left Red Section */}
      <div className="section3-card left-card">
        <h2 className="section3-title">
          Find Best Cars within your budget in wide range.
        </h2>
        <button className="section3-button">
          <FaSearch className="search-icon" /> {/* Add the search icon */}
          Search
        </button>
      </div>

      {/* Right Dark Section */}
      <div className="section3-card right-card">
        <h2 className="section3-title">Needs Consultation?</h2>
        <div className="contact-info">
          <FaPhoneAlt className="phone-icon" />
          <span className="phone-number">+1 903 978 0137</span>
        </div>
        <button className="section3-button">Call us Now!</button>
      </div>
    </div>
  );
};

export default Section3;
