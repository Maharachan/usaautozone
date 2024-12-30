import React from "react";
import "./Section1.css"; // Import the CSS file for styling

// Import local images
import largeCarImage from "../assets/6.png"; // Replace with your image path
import smallCarImage1 from "../assets/7.png"; // Replace with your image path
import smallCarImage2 from "../assets/8.png"; // Replace with your image path

const Section1 = () => {
  return (
    <div className="section1">
      {/* Heading Section */}
      <div className="heading">
        <h3 className="heading-red">OUR</h3>
        <h1 className="heading-dark">POPULAR CARS</h1>
      </div>

      {/* Card Container */}
      <div className="card-container">
        {/* Left Column with Single Large Card */}
        <div className="large-card">
          <div className="card">
            <img
              src={largeCarImage} // Use the imported image
              alt="Popular Car"
              className="card-image"
            />
            <div className="card-text">
              <h2>Popular Car Name</h2>
              <p>Miles: 20km/l</p>
            </div>
          </div>
        </div>

        {/* Right Column with Two Small Cards */}
        <div className="small-cards">
          {/* Small Card 1 */}
          <div className="card">
            <img
              src={smallCarImage1} // Use the imported image
              alt="Popular Car"
              className="card-image"
            />
            <div className="card-text">
              <h2>Popular Car Name</h2>
              <p>Miles: 18km/l</p>
            </div>
          </div>

          {/* Small Card 2 */}
          <div className="card">
            <img
              src={smallCarImage2} // Use the imported image
              alt="Popular Car"
              className="card-image"
            />
            <div className="card-text">
              <h2>Popular Car Name</h2>
              <p>Miles: 15km/l</p>
            </div>
          </div>
        </div>
                {/* Right Column with Two Small Cards */}
                <div className="small-cards">
          {/* Small Card 1 */}
          <div className="card">
            <img
              src={smallCarImage1} // Use the imported image
              alt="Popular Car"
              className="card-image"
            />
            <div className="card-text">
              <h2>Popular Car Name</h2>
              <p>Miles: 18km/l</p>
            </div>
          </div>

          {/* Small Card 2 */}
          <div className="card">
            <img
              src={smallCarImage2} // Use the imported image
              alt="Popular Car"
              className="card-image"
            />
            <div className="card-text">
              <h2>Popular Car Name</h2>
              <p>Miles: 15km/l</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
