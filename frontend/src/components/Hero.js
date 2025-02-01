import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleExploreCars = () => {
    navigate("/cars"); // Redirect to the cars page
  };

  return (
    <div className="hero-section10">
      {/* Left-Aligned Text */}
      <div className="hero-content10">
        <h1 className="hero-title1">Your Dream Car</h1>
        <h1 className="hero-title2">Awaits</h1>

        {/* Left-Aligned Button */}
        <button className="hero-button" onClick={handleExploreCars}>
          Explore Cars
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
