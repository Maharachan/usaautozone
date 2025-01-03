import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { scroller } from "react-scroll"; // Import scroller for smooth scrolling
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Cars from "./components/cars";
import CarDetails from "./components/cardetails";
import AdminPage from "./components/Admin";
import Login from "./components/Login";
import Footer from "./components/Footer";
import "./App.css";

// ScrollToSection component handles the scroll after navigation
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    // Check if location.state.scrollTo is passed for scrolling
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
        offset: -70, // Adjust if you have a fixed navbar
      });
    }
  }, [location]);

  return null; // This component does not render anything
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <ScrollToSection /> {/* Component to handle scrolling after navigation */}
      <div className="App">
        <Navbar />
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
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Cars/:id" element={<CarDetails />} /> {/* Dynamic route for car details */}

          {/* Protected route for AdminPage */}
          <Route
            path="/admin"
            element={
              isAuthenticated ? (
                <AdminPage onAddCar={(carData) => console.log(carData)} />
              ) : (
                <Login onLoginSuccess={handleLoginSuccess} />
              )
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
