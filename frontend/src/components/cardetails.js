import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./cardetails.css";

function CarDetails() {
  const { id } = useParams(); // Get the car ID from the URL
  const [car, setCar] = useState(null); // State to hold the car data
  const [loading, setLoading] = useState(true); // State for loading state
  const [error, setError] = useState(null); // State for error handling

  // Fetch car data when the component mounts
  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/carsdata/fetch/${id}`); // Fetch the car details by ID
        const data = await response.json();

        if (response.ok) {
          setCar(data); // Set the fetched car data
        } else {
          throw new Error(data.message || "Car not found");
        }
      } catch (err) {
        setError(err.message); // Set error message if something goes wrong
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchCarDetails(); // Call the function to fetch the car details
  }, [id]); // Re-fetch if the ID changes

  if (loading) {
    return <p>Loading car details...</p>; // Show loading message
  }

  if (error) {
    return (
      <div className="not-found">
        <h2>{error}</h2>
        <Link to="/cars" className="back-link">
          Back to Cars
        </Link>
      </div>
    ); // Show error message
  }

  if (!car) {
    return (
      <div className="not-found">
        <h2>Car not found</h2>
        <Link to="/cars" className="back-link">
          Back to Cars
        </Link>
      </div>
    ); // If no car data found
  }

  return (
    <div className="car-details-container">
      {/* Car Details */}
      <div className="car-details-card">
        <div className="car-details-card-content">
          {/* Multiple Car Images */}
          <div className="car-details-images-container">
            {car.images && car.images.length > 0 ? (
              car.images.map((image, index) => (
                <div key={index} className="car-image-wrapper">
                  <img
                    src={`data:image/jpeg;base64,${btoa(
                      new Uint8Array(image.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ""
                      )
                    )}`}
                    alt={`Car ${index + 1}`}
                    className="car-details-image"
                  />
                </div>
              ))
            ) : (
              <p>No images available for this car.</p>
            )}
          </div>

          {/* Car Information */}
          <div className="car-details-info">
            <h2>{car.name}</h2>
            <p>
              <strong>Year:</strong> {car.year}
            </p>
            <p>
              <strong>Miles:</strong> {car.miles}
            </p>
            <p>
              <strong>Transmission:</strong> {car.transmission}
            </p>
            <p>
              <strong>Fuel:</strong> {car.fuel}
            </p>
            <p>
              <strong>Price:</strong> {car.price}
            </p>
            <h3>Features:</h3>
            <ul className="features-list">
              {car.features && car.features.length > 0 ? (
                car.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))
              ) : (
                <li>No features available</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Cars Button */}
      <div className="back-to-cars">
        <Link to="/cars" className="back-button">
          Back to Cars
        </Link>
      </div>
    </div>
  );
}

export default CarDetails;
