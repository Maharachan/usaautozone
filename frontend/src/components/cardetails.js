import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./cardetails.css";
import axios from "axios";

const CarDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [carDetails, setCarDetails] = useState(null);
  const [sliderRef, setSliderRef] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null); // State for zoom functionality

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Removed auto movement
    arrows: false, // Hiding default arrows (we'll use custom buttons)
  };

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/cars/${id}`);
        if (response.data.success === false) {
          console.error("Car not found or API error:", response.data.message);
        } else {
          setCarDetails(response.data.car);
        }
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };
    fetchCarDetails();
  }, [id]);

  if (!carDetails) {
    return <p>Loading car details...</p>;
  }

  return (
    <div className="car-details-page">
      {/* Image Carousel Section */}
      <div className="carousel-section">
        <div className="carousel-container-10">
          <Slider ref={setSliderRef} {...carouselSettings}>
            {carDetails.images && carDetails.images.length > 0 ? (
              carDetails.images.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img
                    src={image}
                    alt=""
                    className="carousel-image"
                    onClick={() => setZoomedImage(image)} // Clicking image will zoom
                  />
                </div>
              ))
            ) : (
              <div className="carousel-slide">
                <img src="default-image.jpg" alt="" className="carousel-image" />
              </div>
            )}
          </Slider>
        </div>
        <div className="carousel-controls">
          <button className="prev-btn" onClick={() => sliderRef?.slickPrev()}>
            ❮ Prev
          </button>
          <button className="next-btn" onClick={() => sliderRef?.slickNext()}>
            Next ❯
          </button>
        </div>

        <div className="text-content10">
          <h2>{carDetails.name}</h2>
          <div className="price-section10">
            <p className="discounted-price10">${carDetails.price}</p>
          </div>
        </div>
      </div>

      {/* Car Details Sections */}
      <div className="car-details10-container">
        <div className="row">
          <div className="column">
            <h3>{carDetails.miles}</h3>
            <p>Miles</p>
          </div>
          <div className="column">
            <h3>{carDetails.conditions}</h3>
            <p>Condition</p>
          </div>
          <div className="column">
            <h3>{carDetails.year}</h3>
            <p>Year</p>
          </div>
          <div className="column">
            <h3>{carDetails.owners}</h3>
            <p>No of Owners</p>
          </div>
        </div>
      </div>

      <div className="car-details20-container">
        <div className="row">
          <div className="column">
            <h3>{carDetails.engineCC}</h3>
            <p>Engine CC</p>
          </div>
          <div className="column">
            <h3>{carDetails.bodyStyle}</h3>
            <p>Body Style</p>
          </div>
          <div className="column">
            <h3>{carDetails.interiorStyle}</h3>
            <p>Interior Style</p>
          </div>
          
          <div className="column">
            <h3>{carDetails.trim}</h3>
            <p>Trim</p>
          </div>
        </div>
      </div>

      <div className="car-details30-container">
        <div className="row">
          <div className="column">
            <h3>{carDetails.color}</h3>
            <p>Color</p>
          </div>
          <div className="column">
            <h3>{carDetails.transmission}</h3>
            <p>Transmission</p>
          </div>
          <div className="column">
            <h3>{carDetails.driveType}</h3>
            <p>Drive Type</p>
          </div>
          <div className="column">
            <h3>{carDetails.fuel}</h3>
            <p>Fuel</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section10">
          <h3>Features</h3>
          <ul>
            {carDetails.features && carDetails.features.length > 0 ? (
              carDetails.features.map((feature, index) => <li key={index}>{feature}</li>)
            ) : (
              <li>No features listed.</li>
            )}
          </ul>
        </div>

        {/* Security Features Section */}
        <div className="security-features-section10">
          <h3>Security Features</h3>
          <ul>
            {carDetails.safetyFeatures && carDetails.safetyFeatures.length > 0 ? (
              carDetails.safetyFeatures.map((securityFeature, index) => <li key={index}>{securityFeature}</li>)
            ) : (
              <li>No security features listed.</li>
            )}
          </ul>
        </div>

        {/* Buttons Section */}
        <div className="button-container10">
          <button
            className="btn primary-btn10"
            onClick={() => window.location.href = `tel:${9039780137}`}
          >
            Call Now
          </button>
          <button className="btn secondary-btn10" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <div className="zoom-modal" onClick={() => setZoomedImage(null)}>
          <img src={zoomedImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}
    </div>
  );
};

export default CarDetailsPage;
