import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import "./cars.css";

function Cars() {
  const [cars, setCars] = useState([]); // State to hold car data
  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(true); // State to handle loading state

  // States for filter options
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  // Fetch car data from the new API when the component mounts
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/carsdata/fetch"); // New API endpoint
        const data = await response.json();

        if (response.ok) {
          setCars(data); // Assuming the backend returns an array of cars
        } else {
          throw new Error(data.message || "Failed to fetch cars");
        }
      } catch (err) {
        setError(err.message); // Set error message if the request fails
      } finally {
        setLoading(false); // Set loading to false once data is fetched or error occurs
      }
    };

    fetchCars(); // Call the function to fetch cars
  }, []); // Empty dependency array means it runs only once when the component mounts

  const handleSearch = () => {
    // Logic to filter cars based on the selected filters (brand, model, price)
    // Example: Filtering by brand
    const filteredCars = cars.filter((car) => {
      return (
        (brand ? car.brand === brand : true) &&
        (model ? car.model === model : true) &&
        (price ? car.price <= price : true)
      );
    });
    setCars(filteredCars);
  };

  if (loading) {
    return <p>Loading cars...</p>; // Show loading message while fetching data
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message if there's any error
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Search Filters */}
      <div className="hero-section-1" >
        {/* Search Container */}
        <div className="search-container-1">
          <div className="filter-group-1">
            <select
              className="filter-1"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="">Brand</option>
              <option value="Brand1">Brand1</option>
              <option value="Brand2">Brand2</option>
              <option value="Brand3">Brand3</option>
              {/* Add more options as needed */}
            </select>
            <select
              className="filter-1"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              <option value="">Model</option>
              <option value="Model1">Model1</option>
              <option value="Model2">Model2</option>
              <option value="Model3">Model3</option>
              {/* Add more options as needed */}
            </select>
            <select
              className="filter-1"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="">Price</option>
              <option value="10000">Under 10k</option>
              <option value="20000">Under 20k</option>
              <option value="30000">Under 30k</option>
              {/* Add more options as needed */}
            </select>
            <button className="search-button-1" onClick={handleSearch}>
              <i className="fa fa-search"></i> {/* Font Awesome search icon */}
            </button>
          </div>
        </div>
      </div>

      {/* Cars List */}
      <div className="cars-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <div className="car-details">
              <h3>{car.name}</h3>
              <p>
                <strong>Year:</strong> {car.year}
              </p>
              <p>
                <strong>Miles:</strong> {car.miles}
              </p>
              <p>
                <strong>Transmission:</strong> {car.transmission}
              </p>
              <p>
                <strong>Fuel:</strong> {car.fuel}
              </p>
              <p>
                <strong>Features:</strong> {car.features.join(", ")}
              </p>
              <p>
                <strong>Price:</strong> {car.price}
              </p>
              <Link to={`/cars/${car.id}`} className="view-details-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
