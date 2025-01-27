import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Section1.css"; // Ensure this file contains your carousel styling
import { FaTag, FaRoad } from "react-icons/fa";

const ImageCarousel1 = () => {
  const [cars, setCars] = useState([]); // State to store car data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage errors

  // Get the API URL from the .env file
  const apiUrl = process.env.REACT_APP_API_URL;

  // Fetch car data from the backend
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/cars`);
        if (!response.ok) {
          throw new Error("Failed to fetch car data");
        }
        const data = await response.json();
        setCars(data); // Set fetched car data to the state
      } catch (err) {
        setError(err.message); // Capture any errors
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };

    fetchCars();
  }, [apiUrl]);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  // Handle errors
  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  // Render loading spinner
  if (loading) {
    return <div className="loading-message">Loading cars...</div>;
  }

  // Render car carousel
  return (
    <div className="carousel-container">
      <Slider {...sliderSettings}>
        {cars.map((car) => (
          <div key={car.id} className="carousel-slide">
            {/* Image */}
            <img
              src={`${apiUrl}/uploads/${car.image_path}`}
              alt={car.name}
              className="car-image1"
            />

            {/* Overlay content */}
            <div className="overlay-content">
              <h2 className="car-name">{car.name}</h2>
              <div className="price-section1">
                <FaTag className="icon" />
                <span className="car-price">${car.price}</span>
              </div>
              <div className="miles-section1">
                <FaRoad className="icon" />
                <span className="car-miles">{car.miles} miles</span>
              </div>
              {/* More Details Button */}
              <button className="more-details-button">More Details</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel1;
