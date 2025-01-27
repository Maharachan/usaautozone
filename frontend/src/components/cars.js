import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cars.css";
import Navbar from "./Navbar";
import SearchContainer from "./SearchContainer";

// Importing icons
import { FaTachometerAlt, FaDollarSign, FaCogs, FaCarSide } from "react-icons/fa";

function Cars() {
  const [carsData, setCarsData] = useState([]); // State to store fetched car data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage errors

  // Fetch car data from the backend
  useEffect(() => {
    const fetchCarsData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/cars`);
        if (!response.ok) {
          throw new Error("Failed to fetch car data");
        }
        const data = await response.json();
        setCarsData(data); // Set fetched car data to the state
      } catch (err) {
        setError(err.message); // Capture any errors
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };

    fetchCarsData();
  }, []);

  // Handle errors
  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  // Render loading spinner
  if (loading) {
    return <div className="loading-message">Loading cars...</div>;
  }

  return (
    <div>
      <Navbar />
      <SearchContainer />
      <div className="cars-list">
        {carsData.length > 0 ? (
          carsData.map((car) => (
            <div key={car.id} className="car-card">
              {/* Car Image Block */}
              <div className="car-image-container">
                <img
                  src={`${process.env.REACT_APP_API_URL}/uploads/${car.image_path}`}
                  alt={car.name}
                  className="car-image"
                />
              </div>

              {/* Car Details Block */}
              <div className="car-details-container">
                <h3 className="car-title">
                  {car.name}
                </h3>
                <p className="price-details">
                  <FaDollarSign className="icon" />
                  <span className="discounted-price">${car.price}</span>
                </p>
                <p className="additional-details">
                  <FaTachometerAlt className="icon" />
                  <span>{car.miles} miles</span>
                  <FaCogs className="icon" />
                  <span>{car.transmission}</span>
                  <FaCarSide className="icon" />
                  <span>{car.trim}</span>
                </p>

                {/* Link to CarDetails page with state */}
                <Link
                  to={{
                    pathname: `/cardetails`,
                    state: { car }, // Pass the car object as state
                  }}
                >
                  <button className="contact-button">Car Details</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No cars match your search criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Cars;
