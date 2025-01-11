import React, { useState } from "react";
import './Admin1.css';

function AdminPage() {
  const [newCar, setNewCar] = useState({
    name: "",
    year: "",
    miles: "",
    transmission: "",
    fuel: "",
    features: "",
    price: "",
    owners: "",
    exteriorStyle: "",
    interiorType: "",
    description: ""
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(true); // Mark as successful submission

    // Reset form state after successful submission
    setNewCar({
      name: "",
      year: "",
      miles: "",
      transmission: "",
      fuel: "",
      features: "",
      price: "",
      owners: "",
      exteriorStyle: "",
      interiorType: "",
      description: ""
    });
    setImages([]); // Clear the image input
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
      owners: "",
      exteriorStyle: "",
      interiorType: "",
      description: ""
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
        <form onSubmit={handleSubmit}>
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
          <input
            type="number"
            name="owners"
            placeholder="Owners"
            value={newCar.owners}
            onChange={handleChange}
          />
          <input
            type="text"
            name="exteriorStyle"
            placeholder="Exterior Style"
            value={newCar.exteriorStyle}
            onChange={handleChange}
          />
          <input
            type="text"
            name="interiorType"
            placeholder="Interior Type"
            value={newCar.interiorType}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newCar.description}
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
