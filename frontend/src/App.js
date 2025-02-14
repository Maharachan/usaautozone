import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Section0 from "./components/Section0";
import Section1 from "./components/Section1";
import Section3 from "./components/Section3";
import Section5 from "./components/Section5";
import Cars from "./components/cars";
import CarDetailsPage from "./components/cardetails"; // Import updated component
import ContactForm from "./components/contactform"; // Import ContactForm
import AdminPage from "./components/Admin";
import Login from "./components/Login";
import Footer from "./components/Footer";
import "./App.css";

function ScrollToSection() {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  }, [location]);
  return null;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <ScrollToSection />
      <div className="App">
        <Navbar />
        <Routes>
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
          <Route path="/Cars/:id" element={<CarDetailsPage />} />
          <Route path="/contact" element={<ContactForm />} /> {/* New Route */}
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
