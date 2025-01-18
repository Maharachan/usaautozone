import React from "react";
import "./cardetails1.css";

const CarDetails1 = () => {
  const columnData = [
    {
      heading: "V8",
      text: "ENGINE",
    },
    {
      heading: "3902CC",
      text: "TOTAL DISPLACEMENT",
    },
    {
      heading: "670CV",
      text: "MAXIMUM POWER",
    },
    {
      heading: "1340KG",
      text: "DRY WEIGHT",
    },
  ];

  return (
    <div className="car-details1-container">
      <div className="row">
        {columnData.map((item, index) => (
          <div key={index} className="column">
            <h3>{item.heading}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDetails1;
