import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Section1.css"; // Ensure this file contains your carousel styling
import { FaTag, FaRoad } from "react-icons/fa";

const ImageCarousel1 = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/cars`);
        if (!response.ok) {
          throw new Error("Failed to fetch car data");
        }
        const data = await response.json();
        setCars(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, [apiUrl]);

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

  if (error) return <div className="error-message">Error: {error}</div>;
  if (loading) return <div className="loading-message">Loading cars...</div>;

  return (
    <div className="carousel-container">
      <Slider {...sliderSettings}>
        {cars.map((car) => (
          <div key={car.id} className="carousel-slide">
            <img
              src={`${apiUrl}/uploads/${car.image_path}`}
              alt={car.name}
              className="car-image1"
            />
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
              <Link to={`/Cars/${car.id}`} className="more-details-link">
                <button className="more-details-button">More Details</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel1;
