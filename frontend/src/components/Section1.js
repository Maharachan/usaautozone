import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Section1.css";
import axios from "axios";

const Section1 = () => {
  const [cars, setCars] = useState([]); // State to store the car data
  const [error, setError] = useState(null); // State to handle errors
  const navigate = useNavigate(); // Hook to navigate to other pages

  // Fetch car data from the backend
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/carsdata/fetch"); // Correct URL
        console.log("Fetched cars:", response.data); // Log the response data
        if (response.data && response.data.length > 0) {
          setCars(response.data);
        } else {
          setError("No cars available to display.");
        }
      } catch (error) {
        console.error("Error fetching car data:", error);
        setError("Failed to load car data. Please try again later.");
      }
    };

    fetchCars();
  }, []); // Empty dependency array to run only on component mount

  const handleCardClick = (carId) => {
    // Redirect to the car details page with the car's ID in the URL
    navigate(`/cars/${carId}`);
  };

  return (
    <div className="section1">
      {/* Heading Section */}
      <div className="heading">
        <h3 className="heading-red">OUR</h3>
        <h1 className="heading-dark">POPULAR CARS</h1>
      </div>

      {/* Error Handling */}
      {error && <p className="error-message">{error}</p>}

      {/* Card Container */}
      <div className="card-container">
        {/* Check if there are cars to display */}
        {cars.length > 0 ? (
          <div className="row">
            {/* First Column with the Larger Card */}
            <div className="col-1" onClick={() => handleCardClick(cars[0].id)}>
              <div className="large-card">
                <div className="card">
                  {/* Display the first car's image, name, and miles */}
                  <img
                    src={`data:image/jpeg;base64,${btoa(
                      new Uint8Array(cars[0].image.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ""
                      )
                    )}`}
                    alt={cars[0].name}
                    className="card-image"
                  />
                  <div className="card-text">
                    <h2>{cars[0].name}</h2>
                    <p>Miles: {cars[0].miles}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second and Third Columns with Two Smaller Cards */}
            <div className="col-2">
              <div className="row">
                {cars.slice(1, 2).map((car) => (
                  <div
                    key={car.id}
                    className="col"
                    onClick={() => handleCardClick(car.id)} // Handle click for smaller card
                  >
                    <div className="card">
                      {/* Display each car's image, name, and miles */}
                      <img
                        src={`data:image/jpeg;base64,${btoa(
                          new Uint8Array(car.image.data).reduce(
                            (data, byte) => data + String.fromCharCode(byte),
                            ""
                          )
                        )}`}
                        alt={car.name}
                        className="card-image"
                      />
                      <div className="card-text">
                        <h2>{car.name}</h2>
                        <p>Miles: {car.miles}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-3">
              <div className="row">
                {cars.slice(2, 3).map((car) => (
                  <div
                    key={car.id}
                    className="col"
                    onClick={() => handleCardClick(car.id)} // Handle click for smaller card
                  >
                    <div className="card">
                      {/* Display each car's image, name, and miles */}
                      <img
                        src={`data:image/jpeg;base64,${btoa(
                          new Uint8Array(car.image.data).reduce(
                            (data, byte) => data + String.fromCharCode(byte),
                            ""
                          )
                        )}`}
                        alt={car.name}
                        className="card-image"
                      />
                      <div className="card-text">
                        <h2>{car.name}</h2>
                        <p>Miles: {car.miles}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="no-cars-message">No cars available to display at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Section1;
