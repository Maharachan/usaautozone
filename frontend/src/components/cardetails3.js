import React from "react";
import "./cardetails3.css";

const CarDetails3 = () => {
  const columnData = [
    {
      heading: "BLACK",
      text: "COLOUR",
    },
    {
      heading: "MANUAL",
      text: "TRANSMISSION",
    },
    {
      heading: "AWD",
      text: "DRIVE TYPE",
    },
    {
      heading: "PETROL",
      text: "FUEL",
    },
  ];

  const features = [
    "360-degree camera",
    "Blind spot alert",
    "Bluetooth connectivity",
    "Cooled seats",
    "Keyless start",
  ];

  const securityFeatures = [
    "Adaptive headlights",
    "Backup camera",
    "Blind-spot warning",
    "Lane keeping assist",
    "Pedestrian detection",
  ];

  return (
    <div className="car-details3-container">
      <div className="row">
        {columnData.map((item, index) => (
          <div key={index} className="column">
            <h3>{item.heading}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h3>Features</h3>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Security Features Section */}
      <div className="security-features-section">
        <h3>Security Features</h3>
        <ul>
          {securityFeatures.map((securityFeature, index) => (
            <li key={index}>{securityFeature}</li>
          ))}
        </ul>
      </div>

      {/* Buttons Section */}
      <div className="button-container">
        <button className="btn primary-btn">Learn More</button>
        <button className="btn secondary-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default CarDetails3;
