import React, { useState } from "react";
import './Admin1.css'; // Import the Admin CSS for styling

function AdminPage({ onAddCar }) {
  const [newCar, setNewCar] = useState({
    name: "",
    year: "",
    miles: "",
    transmission: "",
    fuel: "",
    features: "",
    price: "",
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // Track success state

  // Handle form input changes
  const handleChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    // Create FormData object to send text and file data
    const formData = new FormData();
    Object.keys(newCar).forEach((key) => {
      formData.append(key, newCar[key]);
    });
    if (image) formData.append("image", image);

    try {
      // Make the API request to add the car
      const response = await fetch("http://localhost:5000/api/cars", {
        method: "POST",
        body: formData,
      });

      // Check if the response is OK, otherwise throw an error
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to add car");
      }

      // Notify parent component that a new car has been added
      onAddCar(data);

      // Set success state to true after successful car addition
      setSuccess(true);

      // Reset form after successful car addition
      setNewCar({
        name: "",
        year: "",
        miles: "",
        transmission: "",
        fuel: "",
        features: "",
        price: "",
      });
      setImage(null);
    } catch (err) {
      // Set error message if the request fails
      setError(err.message);
    }
  };

  // Handle "Add another car" click
  const handleAddAnotherCar = () => {
    setSuccess(false); // Reset success state to show the form again
    setNewCar({
      name: "",
      year: "",
      miles: "",
      transmission: "",
      fuel: "",
      features: "",
      price: "",
    });
    setImage(null);
  };

  return (
    <div className="admin-page">
      <h1>ADD A NEW VEHICLE</h1>

      {/* Show success message and "Add Another Car" button if the car was added successfully */}
      {success ? (
        <div>
          <p className="success-message">New car added successfully!</p>
          <button onClick={handleAddAnotherCar}>Add Another Car</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            name="name"
            placeholder="Car Name"
            value={newCar.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={newCar.year}
            onChange={handleChange}
          />
          <input
            type="text"
            name="miles"
            placeholder="Miles"
            value={newCar.mile}
            onChange={handleChange}
          />
          <input
            type="text"
            name="transmission"
            placeholder="Transmission"
            value={newCar.transmission}
            onChange={handleChange}
          />
          <input
            type="text"
            name="fuel"
            placeholder="Fuel Type"
            value={newCar.fuel}
            onChange={handleChange}
          />
          <textarea
            name="features"
            placeholder="Features (comma-separated)"
            value={newCar.features}
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={newCar.price}
            onChange={handleChange}
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit1">Add Car</button>
        </form>
      )}
    </div>
  );
}

export default AdminPage;
