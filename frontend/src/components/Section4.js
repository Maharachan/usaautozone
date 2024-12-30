// Section4.js
import React from "react";
import "./Section4.css";

const Section4 = () => {
  return (

    <div className="section4">
      <h2 className="newsletter-title">Newsletter</h2>
      <form className="newsletter-form">
        <input
          type="email"
          className="email-input"
          placeholder="Your email address"
        />
        <button type="submit" className="sign-up">
          Submit
        </button>
      </form>
    </div>
    
  );
};

export default Section4;