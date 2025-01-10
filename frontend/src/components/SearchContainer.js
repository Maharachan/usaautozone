import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchContainer.css";

function SearchContainer() {
  const [filters, setFilters] = useState({ brand: "", model: "", price: "" });
  const navigate = useNavigate();

  const handleSearch = () => {
    const queryParams = new URLSearchParams(filters).toString();
    navigate(`/cars?${queryParams}`);
  };

  return (
    <div className="search-container">
      <select
        value={filters.brand}
        onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
        className="filter"
      >
        <option value="">Select Brand</option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        <option value="BMW">BMW</option>
        <option value="Tesla">Tesla</option>
      </select>

      <select
        value={filters.model}
        onChange={(e) => setFilters({ ...filters, model: e.target.value })}
        className="filter"
      >
        <option value="">Select Model</option>
        <option value="Corolla">Corolla</option>
        <option value="Civic">Civic</option>
        <option value="X5">X5</option>
        <option value="Model S">Model S</option>
      </select>

      <select
        value={filters.price}
        onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        className="filter"
      >
        <option value="">Select Price</option>
        <option value="20000">Under $20,000</option>
        <option value="50000">Under $50,000</option>
        <option value="80000">Under $80,000</option>
      </select>

      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
}

export default SearchContainer;
