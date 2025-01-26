import React from "react";
import "./cardetails2.css";

const CarDetails2 = () => {
  const columnData = [
    {
      heading: "5000",
      text: "ENGINE CC",
    },
    {
      heading: "SUV",
      text: "BODY STYLE",
    },
    {
      heading: "CONFORTABLE",
      text: "INTERIOR STYLE",
    },
    {
      heading: "HATCHBACKS",
      text: "EXTERIOR STYLE",
    },
    {
      heading: "XL",
      text: "TRIM",
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

    </div>
  );
};

export default CarDetails2;
