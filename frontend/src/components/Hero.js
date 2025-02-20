import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const HeroSection = () => {
  const navigate = useNavigate(); 

  const handleExploreCars = () => {
    navigate("/cars");
  };

  return (
    <div className="hero-section10">
      <div className="hero-container">
        
        {/* Left Column */}
        <div className="left-column">
          <h1 className="hero-title1">Your Dream Car</h1>
          <h1 className="hero-title2">Awaits</h1>
          <button className="hero-button" onClick={handleExploreCars}>
            Explore Cars
          </button>
        </div>

        {/* Right Column - Working Hours */}
        <div className="right-column">
          <h2>Opening Hours</h2>
          <ul className="working-hours">
            <li>Monday : 10AM - 7PM</li>
            <li>Tuesday : 10AM - 7PM</li>
            <li>Wednesday : 10AM - 7PM</li>
            <li>Thursday : 10AM - 7PM</li>
            <li>Friday : 10AM - 7PM</li>
            <li>Saturday : 10AM - 7PM</li>
            <li>Sunday : 10AM - 7PM</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
