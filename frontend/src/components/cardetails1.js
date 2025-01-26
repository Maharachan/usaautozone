import React from "react";
import "./cardetails1.css";

const CarDetails1 = () => {
  const columnData = [
    {
      heading: "3902",
      text: "MILES",
    },
    {
      heading: "USED",
      text: "CONDITION",
    },
    {
      heading: "2020",
      text: "YEAR",
    },
    {
      heading: "1",
      text: "NO OF OWNERS",
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
