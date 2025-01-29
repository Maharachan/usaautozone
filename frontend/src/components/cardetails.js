import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./cardetails.css";

// Import images
import image1 from "../assets/6.png";
import image2 from "../assets/7.png";
import image3 from "../assets/8.png";

const images = [image1, image2, image3];

const CarDetailsPage = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const details1Data = [
    { heading: "3902", text: "MILES" },
    { heading: "USED", text: "CONDITION" },
    { heading: "2020", text: "YEAR" },
    { heading: "1", text: "NO OF OWNERS" },
  ];

  const details2Data = [
    { heading: "5000", text: "ENGINE CC" },
    { heading: "SUV", text: "BODY STYLE" },
    { heading: "COMFORTABLE", text: "INTERIOR STYLE" },
    { heading: "HATCHBACKS", text: "EXTERIOR STYLE" },
    { heading: "XL", text: "TRIM" },
  ];

  const details3Data = [
    { heading: "BLACK", text: "COLOUR" },
    { heading: "MANUAL", text: "TRANSMISSION" },
    { heading: "AWD", text: "DRIVE TYPE" },
    { heading: "PETROL", text: "FUEL" },
  ];

  const features = [
    "360-degree camera",
    "Blind spot alert",
    "Bluetooth connectivity",
    "Cooled seats",
    "Keyless start",
  ];

  const securityFeatures = [
    "Adaptive headlights",
    "Backup camera",
    "Blind-spot warning",
    "Lane keeping assist",
    "Pedestrian detection",
  ];

  return (
    <div className="car-details-page">
      {/* Image Carousel Section */}
      <div className="carousel-section">
        <div className="carousel-container-10">
          <Slider {...carouselSettings}>
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-content10">
          <h2>Toyota Hilux</h2>
          <div className="price-section10">
            <p className="discounted-price10">$1000</p>
            <p className="original-price10">$1200</p>
          </div>
        </div>
      </div>

      {/* Car Details Section 1 */}
      <div className="car-details10-container">
        <div className="row">
          {details1Data.map((item, index) => (
            <div key={index} className="column">
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Car Details Section 2 */}
      <div className="car-details20-container">
        <div className="row">
          {details2Data.map((item, index) => (
            <div key={index} className="column">
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Car Details Section 3 */}
      <div className="car-details30-container">
        <div className="row">
          {details3Data.map((item, index) => (
            <div key={index} className="column">
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="features-section10">
          <h3>Features</h3>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Security Features Section */}
        <div className="security-features-section10">
          <h3>Security Features</h3>
          <ul>
            {securityFeatures.map((securityFeature, index) => (
              <li key={index}>{securityFeature}</li>
            ))}
          </ul>
        </div>

        {/* Buttons Section */}
        <div className="button-container10">
          <button className="btn primary-btn10">Learn More</button>
          <button className="btn secondary-btn10">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
