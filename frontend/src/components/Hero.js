import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Hero.css"; // Import the CSS file for styling

const HeroSection = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  // States for filters
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  // Handle search button click
  const handleSearch = () => {
    // Build query parameters for filters
    const queryParams = new URLSearchParams({
      brand: brand || "",
      model: model || "",
      price: price || "",
    });

    // Redirect to Cars page with query parameters
    navigate(`/cars?${queryParams.toString()}`);
  };

  return (
    <div className="hero-section">
      {/* Search Container */}
      <div className="search-container">
        <div className="filter-group">
          {/* Brand Filter */}
          <select
            className="filter"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">Brand</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="BMW">BMW</option>
            <option value="Tesla">Tesla</option>
            {/* Add more options as needed */}
          </select>

          {/* Model Filter */}
          <select
            className="filter"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="">Model</option>
            <option value="Corolla">Corolla</option>
            <option value="Civic">Civic</option>
            <option value="Model S">Model S</option>
            <option value="X5">X5</option>
            {/* Add more options as needed */}
          </select>

          {/* Price Filter */}
          <select
            className="filter"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">Price</option>
            <option value="10000">Under $10,000</option>
            <option value="20000">Under $20,000</option>
            <option value="30000">Under $30,000</option>
            <option value="50000">Under $50,000</option>
          </select>

          {/* Search Button */}
          <button className="search-button" onClick={handleSearch}>
            <i className="fa fa-search"></i> {/* Font Awesome search icon */}
          </button>
        </div>
      </div>

      {/* Text Below the Search Container */}
      <h1 className="centered-text">GET YOUR DREAM CAR NOW !!</h1>

      {/* Left-Aligned Text Below */}
      <h3 className="left-aligned-text">CONTACT US :</h3>
      <p className="left-aligned-text1">+1 903 978 0137, usaautozone@gmail.com</p>
    </div>
  );
};

export default HeroSection;
