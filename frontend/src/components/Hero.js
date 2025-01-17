import React from "react";
import "./Hero.css"; // Import the CSS file for styling
const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Left-Aligned Text */}
      <div className="hero-content">
        <h1 className="hero-title">Your Dream Car</h1>
        <h1 className="hero-title-1">Awaits</h1>

        {/* Left-Aligned Button */}
        <button className="hero-button">
          Explore cars
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
