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

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="carousel-section">
      {/* Image Carousel */}
      <div className="carousel-container-1">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Centered Heading and Price */}
      <div className="text-content">
        <h2>Toyota Hilux</h2>
        <div className="price-section">
          <p className="discounted-price">$1000</p>
          <p className="original-price">$1200</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
