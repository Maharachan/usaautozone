import React from "react";
import { FaAward, FaFileInvoice, FaExchangeAlt } from "react-icons/fa"; // Importing icons
import "./Section2.css";

const Section2 = () => {
  return (
    <div className="section2">
      {/* Title */}
      <h1 className="section-title">Why choose us?</h1>

      {/* Feature Cards Container */}
      <div className="features-container">
        {/* Feature 1 */}
        <div className="feature-card">
          <div className="feature-icon">
            <FaAward size={50} color="#FF6F61" />
          </div>
          <h2 className="feature-title">Car Zone Certified Cars</h2>
          <p className="feature-description">
            High Quality Cars with warranty from Car Zone.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <div className="feature-icon">
            <FaFileInvoice size={50} color="#4CAF50" />
          </div>
          <h2 className="feature-title">Auction Sheet Verification</h2>
          <p className="feature-description">
            We import Japanese cars on our customer’s demand. Buy Japanese cars
            with confidence with Car Zone Verified Auction Sheet.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <div className="feature-icon">
            <FaExchangeAlt size={50} color="#FF6F61" />
          </div>
          <h2 className="feature-title">Exchange Your Car</h2>
          <p className="feature-description">
            At Car Zone, we will buy your used car, assist you in buying a new
            one or help you exchange it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
