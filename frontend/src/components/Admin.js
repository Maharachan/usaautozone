import React, { useState } from "react";
import axios from "axios";
import "./Admin1.css";

function AdminPage() {
  const [newCar, setNewCar] = useState({
    name: "",
    conditions: "",
    year: "",
    price: "",
    owners: "",
    miles: "",
    engineCC: "",
    color: "",
    bodyStyle: "",
    exteriorStyle: "",
    interiorStyle: "",
    driveType: "",
    transmission: "",
    fuel: "",
    trim: "",
    descriptions: "",
    features: [],
    safetyFeatures: [],
  });

  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
  };

  const handleFeatureChange = (e) => {
    const { name, value, checked } = e.target;
    setNewCar((prev) => {
      const updatedFeatures = checked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value);
      return { ...prev, [name]: updatedFeatures };
    });
  };

  const handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
    setImages(fileList);
  };

  const resetForm = () => {
    setNewCar({
      name: "",
      conditions: "",
      year: "",
      price: "",
      owners: "",
      miles: "",
      engineCC: "",
      color: "",
      bodyStyle: "",
      exteriorStyle: "",
      interiorStyle: "",
      driveType: "",
      transmission: "",
      fuel: "",
      trim: "",
      descriptions: "",
      features: [],
      safetyFeatures: [],
    });
    setImages([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false); // Reset success message
  
    // Create a FormData object
    const formData = new FormData();
  
    // Append car details to the FormData
    formData.append("data", JSON.stringify(newCar));
  
    // Append images to the FormData
    images.forEach((image) => {
      formData.append("images", image);
    });
  
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/cars/create`, // Use the dynamic API URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      if (response.status === 200) {
        setSuccess(true);
        resetForm(); // Reset form after success
      } else {
        setError(response.data.message || "Failed to add car. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to add car. Please try again.");
    }
  };
  

  const handleAddAnotherCar = () => {
    setSuccess(false);
    resetForm();
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
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name & Model"
              value={newCar.name}
              onChange={handleChange}
            />
            <select
              name="conditions"
              value={newCar.conditions}
              onChange={handleChange}
            >
              <option value="">Condition</option>
              <option value="New">New</option>
              <option value="Pre-Owned">Used</option>
            </select>
            <input
              type="number"
              name="year"
              placeholder="Year"
              value={newCar.year}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={newCar.price}
              onChange={handleChange}
            />
            <input
              type="number"
              name="owners"
              placeholder="No of Owners"
              value={newCar.owners}
              onChange={handleChange}
            />
            <input
              type="text"
              name="miles"
              placeholder="Miles"
              value={newCar.miles}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="number"
              name="engineCC"
              placeholder="Engine CC"
              value={newCar.engineCC}
              onChange={handleChange}
            />
            <input
              type="text"
              name="color"
              placeholder="Color"
              value={newCar.color}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bodyStyle"
              placeholder="Body Style"
              value={newCar.bodyStyle}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
         
            <input
              type="text"
              name="interiorStyle"
              placeholder="Interior Style"
              value={newCar.interiorStyle}
              onChange={handleChange}
            />
            <select
              name="driveType"
              value={newCar.driveType}
              onChange={handleChange}
            >
              <option value="">Drive Type</option>
              <option value="FWD">FWD</option>
              <option value="RWD">RWD</option>
              <option value="AWD">AWD</option>
            </select>
          </div>

          <div className="form-row">
            <select
              name="transmission"
              value={newCar.transmission}
              onChange={handleChange}
            >
              <option value="">Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi Automatic">Semi Automatic</option>
            </select>
            <select
              name="fuel"
              value={newCar.fuel}
              onChange={handleChange}
            >
              <option value="">Fuel</option>
              <option value="Electric">Electric</option>
              <option value="Diesel">Diesel</option>
              <option value="Petrol">Petrol</option>
              <option value="Gas">Gas</option>
            </select>
            <input
              type="text"
              name="trim"
              placeholder="Trim"
              value={newCar.trim}
              onChange={handleChange}
            />
          </div>

          <div className="form-row full-width">
            <textarea
              name="descriptions"
              placeholder="Descriptions"
              value={newCar.descriptions}
              onChange={handleChange}
            />
          </div>

          <div className="form-row full-width">
            <label1>Features:</label1>
            <div className="checkbox-group">
              {["360-degree camera", "Blind spot alert", "Bluetooth", "Cooled seats", "Heated seats", "Keyless start", "Leather seats", "LED headlights", "Memory seat", "Navigation System", "Reversing camera", "Side airbags", "Sound system", "Traction Control", "USB port"].map((feature) => (
                <label key={feature}>
                  <input
                    type="checkbox"
                    name="features"
                    value={feature}
                    checked={newCar.features.includes(feature)}
                    onChange={handleFeatureChange}
                  />
                  {feature}
                </label>
              ))}
            </div>
          </div>

          <div className="form-row full-width">
            <label1>Safety Features:</label1>
            <div className="checkbox-group">
              {["Active head restraints", "Adaptive headlights", "Backup camera", "Blind-spot warning", "Brake assist", "Forward-collision warning", "Lane keeping assist", "Parking assist systems", "Pedestrian detection", "Sideview camera"].map((safetyFeature) => (
                <label key={safetyFeature}>
                  <input
                    type="checkbox"
                    name="safetyFeatures"
                    value={safetyFeature}
                    checked={newCar.safetyFeatures.includes(safetyFeature)}
                    onChange={handleFeatureChange}
                  />
                  {safetyFeature}
                </label>
              ))}
            </div>
          </div>

          <div className="form-row full-width">
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
            {images.length > 0 && (
              <div className="image-preview">
                <h4>Selected Images:</h4>
                <ul>
                  {images.map((image, index) => (
                    <li key={index}>{image.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {error && <p className="error">{error}</p>}
          <button type="submit">Add Car</button>
        </form>
      )}
    </div>
  );
}

export default AdminPage;
