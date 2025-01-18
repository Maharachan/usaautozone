import React from "react";
import "./cardetails2.css";

const CarDetails2 = () => {
  const columnData = [
    {
      heading: "V12",
      text: "ENGINE",
    },
    {
      heading: "6496CC",
      text: "TOTAL DISPLACEMENT",
    },
    {
      heading: "800CV",
      text: "MAXIMUM POWER",
    },
    {
      heading: "1250KG",
      text: "DRY WEIGHT",
    },
    {
      heading: "2.8s",
      text: "0-100 KM/H",
    },
  ];

  return (
    <div className="car-details2-container">
      <div className="row">
        {columnData.map((item, index) => (
          <div key={index} className="column">
            <h3>{item.heading}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="button-container">
        <button className="btn primary-btn">Learn More</button>
        <button className="btn secondary-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default CarDetails2;
