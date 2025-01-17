import React from "react";
import Slider from "react-slick";
import "./Section1.css";

// Import images locally
import image1 from "../assets/6.png";
import image2 from "../assets/7.png";
import image3 from "../assets/8.png";
import image4 from "../assets/9.png";

const carouselData = [
  {
    image: image1,
    heading: "Tayota",
    paragraph: "Tayota Hilux",
    buttonText: "More Details",
    buttonLink: "/cars",
  },
  {
    image: image2,
    heading: "Audi",
    paragraph: "Audi R8",
    price: "1000$",
    buttonText: "More Details",
    buttonLink: "/models",
  },
  {
    image: image3,
    heading: "BMW",
    paragraph: "BMW S-Class",
    buttonText: "More Details",
    buttonLink: "/performance",
  },
  {
    image: image4,
    heading: "Mercedes",
    paragraph: "Merceded G-Wagon",
    buttonText: "More Details",
    buttonLink: "/innovation",
  },
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
              <p>{slide.paragraph}</p>
              <p>{slide.price}</p>
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

export default ImageCarousel;
