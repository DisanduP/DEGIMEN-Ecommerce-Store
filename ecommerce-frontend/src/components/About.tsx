import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About DEGIMEN</h1>
        <p className="about-subtitle">Your trusted online shopping destination</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            DEGIMEN was founded with a simple mission: to make quality products accessible to everyone
            at the best possible prices. We believe that great shopping should be convenient, secure,
            and enjoyable for all our customers.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Wide Selection</h3>
              <p>Electronics, books, clothing, and more - all in one place</p>
            </div>
            <div className="feature-item">
              <h3>Competitive Prices</h3>
              <p>Great deals and bargain prices on quality products</p>
            </div>
            <div className="feature-item">
              <h3>Secure Shopping</h3>
              <p>Safe and secure checkout process for peace of mind</p>
            </div>
            <div className="feature-item">
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to get your orders to you</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Commitment</h2>
          <p>
            We're committed to providing exceptional customer service and ensuring that every shopping
            experience with DEGIMEN is positive. Whether you're looking for the latest electronics,
            your favorite books, or trendy clothing, we're here to help you find exactly what you need.
          </p>
          <p>
            Thank you for choosing DEGIMEN. Happy shopping!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
