import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For fetching params from the URL
import "./cardetails.css";

// Dummy car data for example, replace with actual data or fetch logic
import image1 from "../assets/6.png"; // Replace with actual paths
import image2 from "../assets/7.png";
import image3 from "../assets/8.png";

const carsData = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    name: "Toyota Corolla 2020",
    year: 2020,
    miles: "35,000",
    transmission: "Automatic",
    fuel: "Gasoline",
    owners: 1,
    description: "A reliable sedan with great fuel economy.",
    trim: "LE",
    bodyStyle: "Sedan",
    exteriorStyle: "Metallic",
    interiorType: "Leather",
    price: 22000,
    discountedPrice: 19999,
    features: [
      "Fuel",
      "Owners",
      "Description",
      "Trim",
      "Body style",
      "Exterior style",
      "Interior type",
    ],
    images: [image1, image2, image3], // Array of image paths
  },
  // Add more cars if needed
];

function CarDetails() {
  const { id } = useParams(); // Get the car ID from the URL params
  const [car, setCar] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // To track the currently visible image

  useEffect(() => {
    // Find the car from the car data based on the ID from the URL
    const selectedCar = carsData.find((car) => car.id === parseInt(id));
    if (selectedCar) {
      setCar(selectedCar);
    }
  }, [id]); // Only rerun the effect if the id changes

  // If car is not found or is still loading, show a loading state or error message
  if (!car) {
    return <div>Loading...</div>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < car.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : car.images.length - 1
    );
  };

  return (
    <div className="car-details-page">
      {/* Car Image and Navigation */}
      <div className="car-image-container">
        <img
          src={car.images[currentImageIndex]}
          alt={car.model}
          className="car-image"
        />
        <div className="image-navigation">
          <button onClick={handlePreviousImage}>&lt; </button>
          <button onClick={handleNextImage}> &gt;</button>
        </div>
      </div>

      {/* Car Brand and Model */}
      <div className="car-brand-model">
        <h2>
          {car.brand} {car.model}
        </h2>
      </div>

      {/* Details and Contact Sections */}
      <div className="car-details-sections">
        {/* Car Details Section */}
        <div className="car-details">
          <h3>Car Details</h3>
          <ul className="details-list">
            <li>
              <i className="fas fa-calendar-alt"></i> <strong>Year:</strong> {car.year}
            </li>
            <li>
              <i className="fas fa-dollar-sign"></i> <strong>Price:</strong> ${car.discountedPrice}
            </li>
            <li>
              <i className="fas fa-tachometer-alt"></i> <strong>Miles:</strong> {car.miles}
            </li>
            <li>
              <i className="fas fa-cogs"></i> <strong>Transmission:</strong> {car.transmission}
            </li>
            <li>
              <i className="fas fa-gas-pump"></i> <strong>Fuel:</strong> {car.fuel}
            </li>
            <li>
              <i className="fas fa-user"></i> <strong>Owners:</strong> {car.owners}
            </li>
            <li>
              <i className="fas fa-paint-brush"></i> <strong>Exterior Style:</strong> {car.exteriorStyle}
            </li>
            <li>
              <i className="fas fa-couch"></i> <strong>Interior Type:</strong> {car.interiorType}
            </li>
            <li>
              <i className="fas fa-align-left"></i> <strong>Description:</strong> {car.description}
            </li>
          </ul>
        </div>

        {/* Contact Buttons Section */}
        <div className="contact-section">
          <h3>Contact Us</h3>
          <button className="contact-btn">Mail Us</button>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;