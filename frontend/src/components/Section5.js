import React from 'react';
import './Section5.css';

const Section5 = () => {
  return (
    <div className="section5-container">
      <h2>Our Location</h2>
      <div className="section0-divider2"></div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.8413296794297!2d-95.27516863281085!3d32.30973425552138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8649cc4b95ad8c1d%3A0x94b04daefdc9e226!2sUSA%20Auto%20Plaza!5e0!3m2!1sen!2sin!4v1737106632289!5m2!1sen!2sin" // Replace this with your actual Google Maps embed URL
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location" // Added title for accessibility
        ></iframe>
      </div>
    </div>
  );
};

export default Section5;
