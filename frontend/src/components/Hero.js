import React from "react";
import "./Hero.css"; // Import the CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Search Container */}
      <div className="search-container">
        <div className="filter-group">
          <select className="filter">
            <option>Brand</option>
            <option>Brand</option>
            <option>Brand</option>
            <option>Brand</option>
            <option>Brand</option>
            {/* Add more options as needed */}
          </select>
          <select className="filter">
            <option>Model</option>
            <option>Brand</option>
            <option>Brand</option>
            <option>Brand</option>
            <option>Brand</option>
            <option>Brand</option>
            {/* Add more options as needed */}
          </select>
          <select className="filter">
            <option>Price</option>
            <option>Brand</option>
            <option>Brand</option>
            <option>Brand</option>
            <option>Brand</option>
            <option>Brand</option>
            {/* Add more options as needed */}
          </select>
          <button className="search-button">
            <i className="fa fa-search"></i> {/* Font Awesome search icon */}
          </button>
        </div>
      </div>
      

      {/* Text Below the Search Container */}
      <h1 className="centered-text">GET YOUR DREAM CAR NOW !!</h1>
      
      {/* Left-Aligned Text Below */}
      <h3 className="left-aligned-text">
          CONTACT US :
        </h3>
        <p className="left-aligned-text1">
        +1 903 978 0137, usaautozone@gmail.com
        </p>
    </div>
  );
};

export default HeroSection;
