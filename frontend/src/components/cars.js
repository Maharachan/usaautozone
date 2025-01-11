import React from "react";
import { Link } from "react-router-dom";
import "./cars.css";
import Navbar from "./Navbar";
import SearchContainer from "./SearchContainer";

// Importing local images
import car1Image from "../assets/6.png";
import car2Image from "../assets/6.png";
import car3Image from "../assets/6.png";
import car4Image from "../assets/6.png";

function Cars() {
  const carsData = [
    {
      id: 1,
      brand: "Toyota",
      model: "Corolla",
      originalPrice: 20000,
      discountedPrice: 18000,
      miles: 15000,
      image: car1Image,
      description: "A reliable sedan with great fuel economy.",
    },
    {
      id: 2,
      brand: "Honda",
      model: "Civic",
      originalPrice: 22000,
      discountedPrice: 20000,
      miles: 12000,
      image: car2Image,
      description: "Sporty sedan with a sleek design.",
    },
    {
      id: 3,
      brand: "BMW",
      model: "X5",
      originalPrice: 50000,
      discountedPrice: 47000,
      miles: 8000,
      image: car3Image,
      description: "Luxury SUV with high-end features.",
    },
    {
      id: 4,
      brand: "Tesla",
      model: "Model S",
      originalPrice: 80000,
      discountedPrice: 75000,
      miles: 5000,
      image: car4Image,
      description: "Electric luxury car with cutting-edge technology.",
    },
  ];

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
                <img src={car.image} alt={car.model} className="car-image" />
              </div>

              {/* Car Details Block */}
              <div className="car-details-container">
                <h3>
                  {car.brand} {car.model}
                </h3>
                <p>
                  <span className="discounted-price">${car.discountedPrice}</span>
                  <span className="original-price">${car.originalPrice}</span>
                </p>
                <p><i className="fas fa-tachometer-alt"></i> {car.miles} miles</p>

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
