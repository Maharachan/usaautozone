import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { scroller } from "react-scroll"; // Import scroller for smooth scrolling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Section0 from "./components/Section0";
import Section1 from "./components/Section1";
import Section3 from "./components/Section3";
import Section5 from "./components/Section5";
import Cars from "./components/cars";
import CarDetails from "./components/cardetails";
import CarDetails1 from "./components/cardetails1";
import CarDetails2 from "./components/cardetails2";
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
                <Section0 />
                <Section1 />
                <Section3 />
                <Section5 />
                
              </>
            }
          />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Cars/:id" 
          element={
            <>
            <CarDetails />
            <CarDetails1 />
            <CarDetails2 />
            </>
          } /> {/* Dynamic route for car details */}

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
