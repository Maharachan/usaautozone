import React, { useState } from "react";
import './Admin1.css';

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
  const [images, setImages] = useState([]); // Handle multiple images
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImages([...e.target.files]); // Store multiple selected files
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false); // Reset success state in case of retry

    // Create FormData object
    const formData = new FormData();
    Object.keys(newCar).forEach((key) => {
      formData.append(key, newCar[key]);
    });
    
    // Append each image file
    images.forEach((image) => {
      formData.append("images", image); // Append each image with the same key
    });

    try {
      const response = await fetch("http://localhost:5000/api/cars", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to add car");
      }

      // Call onAddCar function to update the parent state
      onAddCar(data.car);

      // Set success state and reset the form
      setSuccess(true);
      setNewCar({
        name: "",
        year: "",
        miles: "",
        transmission: "",
        fuel: "",
        features: "",
        price: "",
      });
      setImages([]); // Clear the image input
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  const handleAddAnotherCar = () => {
    setSuccess(false); // Reset success state
    setNewCar({
      name: "",
      year: "",
      miles: "",
      transmission: "",
      fuel: "",
      features: "",
      price: "",
    });
    setImages([]); // Clear the image input
  };

  return (
    <div className="admin-page">
      <h1>ADD A NEW VEHICLE</h1>
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
            name="model"
            placeholder="Model"
            value={newCar.model}
            onChange={handleChange}
          />
          <input
            type="text"
            name="miles"
            placeholder="Miles"
            value={newCar.miles}
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
            name="images"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Add Car</button>
        </form>
      )}
    </div>
  );
}

export default AdminPage;
