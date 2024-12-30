import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar component
import HeroSection from "./components/Hero"; // Import the HeroSection component
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Cars from "./components/cars"; // Import Cars page
import CarDetails from "./components/cardetails"; // Import CarDetails component
import AdminPage from "./components/Admin"; // Import Admin page
import Login from "./components/Login"; // Import the Login component
import Footer from "./components/Footer"; // Import the Footer component
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication status

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Set authenticated status to true after successful login
  };

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Render Navbar at the top */}
        <Routes>
          {/* Public routes */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
              </>
            }
          />
          <Route path="/Cars" element={<Cars />} /> {/* Render Cars page */}
          <Route path="/Cars/:id" element={<CarDetails />} /> {/* Dynamic route for car details */}

          {/* Protected route for AdminPage */}
          <Route
            path="/admin"
            element={
              isAuthenticated ? (
                <AdminPage onAddCar={(carData) => console.log(carData)} /> // AdminPage visible only if authenticated
              ) : (
                <Login onLoginSuccess={handleLoginSuccess} /> // Redirect to Login if not authenticated
              )
            }
          />
        </Routes>
        <Footer /> {/* Render Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
