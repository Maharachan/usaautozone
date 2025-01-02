import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar component
import "./cars.css";

function Cars() {
  const [originalCars, setOriginalCars] = useState([]); // Original car data from API
  const [filteredCars, setFilteredCars] = useState([]); // Filtered cars to display
  const [error, setError] = useState(null); // Handle API errors
  const [loading, setLoading] = useState(true); // Loading state

  // States for filters
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  const location = useLocation(); // Get query parameters from URL

  // Fetch car data from the API when the component mounts
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/carsdata/fetch");
        const data = await response.json();

        if (response.ok) {
          setOriginalCars(data); // Store original data
          setFilteredCars(data); // Set filtered cars as the original initially
        } else {
          throw new Error(data.message || "Failed to fetch cars");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Parse query parameters from URL and apply filters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const initialBrand = queryParams.get("brand") || "";
    const initialModel = queryParams.get("model") || "";
    const initialPrice = queryParams.get("price") || "";

    setBrand(initialBrand);
    setModel(initialModel);
    setPrice(initialPrice);

    // Apply filters based on query parameters
    const filtered = originalCars.filter((car) => {
      return (
        (initialBrand ? car.brand === initialBrand : true) &&
        (initialModel ? car.model === initialModel : true) &&
        (initialPrice ? car.price <= parseInt(initialPrice) : true)
      );
    });

    setFilteredCars(filtered);
  }, [location.search, originalCars]);

  // Handle the search/filter logic
  const handleSearch = () => {
    const filtered = originalCars.filter((car) => {
      return (
        (brand ? car.brand === brand : true) &&
        (model ? car.model === model : true) &&
        (price ? car.price <= parseInt(price) : true)
      );
    });
    setFilteredCars(filtered);
  };

  // Reset filters and show all cars
  const handleReset = () => {
    setBrand("");
    setModel("");
    setPrice("");
    setFilteredCars(originalCars); // Reset to original data
  };

  // Show loading or error messages
  if (loading) {
    return <p>Loading cars...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Search Filters */}
      <div className="hero-section-1">
        <div className="search-container-1">
          <div className="filter-group-1">
            {/* Brand Filter */}
            <select
              className="filter-1"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="">Brand</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="BMW">BMW</option>
              <option value="Tesla">Tesla</option>
              {/* Add more options as needed */}
            </select>

            {/* Model Filter */}
            <select
              className="filter-1"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              <option value="">Model</option>
              <option value="Corolla">Corolla</option>
              <option value="Civic">Civic</option>
              <option value="Model S">Model S</option>
              <option value="X5">X5</option>
              {/* Add more options as needed */}
            </select>

            {/* Price Filter */}
            <select
              className="filter-1"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="">Price</option>
              <option value="10000">Under $10,000</option>
              <option value="20000">Under $20,000</option>
              <option value="30000">Under $30,000</option>
              <option value="50000">Under $50,000</option>
            </select>

            {/* Search Button */}
            <button className="search-button-1" onClick={handleSearch}>
              <i className="fa fa-search"></i>
            </button>

            {/* Reset Button */}
            <button className="reset-button-1" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Cars List */}
      <div className="cars-list">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div key={car.id} className="car-card">
              <div className="car-card-content">
                {/* Car Image */}
                <div className="car-image">
                  <img
                    src={`data:image/jpeg;base64,${btoa(
                      new Uint8Array(car.image.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ""
                      )
                    )}`}
                    alt={car.name}
                    className="car-image-img"
                  />
                </div>

                {/* Car Details */}
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
                    <strong>Price:</strong> ${car.price}
                  </p>
                  <Link to={`/cars/${car.id}`} className="view-details-btn">
                    View Details
                  </Link>
                </div>
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
