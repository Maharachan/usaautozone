import React from "react";
import Slider from "react-slick";
import "./Section1.css";

// Import images and icons
import { FaTag, FaRoad } from "react-icons/fa";
import image1 from "../assets/6.png";
import image2 from "../assets/7.png";
import image3 from "../assets/8.png";
import image4 from "../assets/9.png";

const carouselData = [
  {
    image: image1,
    heading: "Toyota Hilux",
    originalPrice: "$50,000",
    discountedPrice: "$45,000",
    miles: "15,000 miles",
    buttonText: "More Details",
    buttonLink: "/cars",
  },
  {
    image: image2,
    heading: "Audi R8",
    originalPrice: "$120,000",
    discountedPrice: "$110,000",
    miles: "8,000 miles",
    buttonText: "More Details",
    buttonLink: "/models",
  },
  {
    image: image3,
    heading: "BMW S-Class",
    originalPrice: "$100,000",
    discountedPrice: "$92,000",
    miles: "20,000 miles",
    buttonText: "More Details",
    buttonLink: "/performance",
  },
  {
    image: image4,
    heading: "Mercedes G-Wagon",
    originalPrice: "$150,000",
    discountedPrice: "$140,000",
    miles: "10,000 miles",
    buttonText: "More Details",
    buttonLink: "/innovation",
  },
];

const ImageCarousel1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselData.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="overlay-content">
              <h2>{slide.heading}</h2>
              <div className="price-section">
                <FaTag className="price-icon" />
                <span className="discounted-price1">{slide.discountedPrice}</span>
                <span className="original-price1">{slide.originalPrice}</span>
                
              </div>
              <div className="miles-section">
                <FaRoad className="miles-icon" />
                <span>{slide.miles}</span>
              </div>
              <a href={slide.buttonLink} className="carousel-button">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel1;
