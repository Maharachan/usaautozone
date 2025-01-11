import React from "react";
import Slider from "react-slick";
import "./Section1.css";

// Import images locally
import image1 from '../assets/6.png';
import image2 from '../assets/7.png';
import image3 from '../assets/8.png';
import image4 from '../assets/9.png';
import image5 from '../assets/10.png';
import image6 from '../assets/11.png';
import image7 from '../assets/12.png';

const carData = [
  {
    image: image1, // Use imported image
    price: "$3,995",
    oldPrice: "$13,995",
    title: "2017 FORD TRANSIT CONNECT",
    miles: "123,786 miles",
    link: "/car/2017-ford-transit-connect",
  },
  {
    image: image2,
    price: "$4,495",
    oldPrice: "$5,495",
    title: "2011 FORD RANGER",
    miles: "216,620 miles",
    link: "/car/2011-ford-ranger",
  },
  {
    image: image3,
    price: "$3,995",
    oldPrice: "$4,995",
    title: "2014 FORD FIESTA",
    miles: "114,599 miles",
    link: "/car/2014-ford-fiesta",
  },
  {
    image: image4,
    price: "$7,999",
    oldPrice: "",
    title: "2012 FORD TRANSIT CONNECT",
    miles: "84,555 miles",
    link: "/car/2012-ford-transit-connect",
  },
  {
    image: image5,
    price: "$5,995",
    oldPrice: "$6,995",
    title: "2015 FORD ESCAPE",
    miles: "98,123 miles",
    link: "/car/2015-ford-escape",
  },
  {
    image: image6,
    price: "$6,495",
    oldPrice: "$7,495",
    title: "2018 FORD EDGE",
    miles: "75,321 miles",
    link: "/car/2018-ford-edge",
  },
  {
    image: image7,
    price: "$8,495",
    oldPrice: "",
    title: "2020 FORD EXPLORER",
    miles: "50,123 miles",
    link: "/car/2020-ford-explorer",
  },
];

const CarListing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="car-listing-container">
      <div className="carousel-header">
        <span className="our-text">OUR</span>
        <h2 className="featured-cars-heading">FEATURED CARS</h2>
      </div>
      <div className="car-listing-carousel">
        <Slider {...settings}>
          {carData.map((car, index) => (
            <a href={car.link} className="car-card" key={index}>
              <div className="car-image">
                <img src={car.image} alt={car.title} />
                <div className="price-tag">
                  <span className="current-price">{car.price}</span>
                  {car.oldPrice && (
                    <span className="old-price">{car.oldPrice}</span>
                  )}
                </div>
              </div>
              <div className="car-details">
                <h4>{car.title}</h4>
                <p>{car.miles}</p>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarListing;
