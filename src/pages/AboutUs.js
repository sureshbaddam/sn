import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About SN Gangaram Furniture Studio</h1>
      <p>
        SN Gangaram Furniture Studio is committed to providing high-quality,
        custom-made furniture to suit all your needs. Located in METPALLY, our
        mission is to offer stylish and durable furniture options for every home
        and office space.
      </p>
      <div className="about-us-grid">
        <div className="about-us-item">
          <h2>Our Mission</h2>
          <p>
            To deliver high-quality, custom furniture that meets the unique
            needs of our customers.
          </p>
        </div>
        <div className="about-us-item">
          <h2>Our Vision</h2>
          <p>
            To become the leading furniture provider in the region, known for
            innovation and excellence.
          </p>
        </div>
        <div className="about-us-item">
          <h2>Our Values</h2>
          <p>
            Quality, customer satisfaction, and sustainability are at the core
            of everything we do.
          </p>
        </div>
      </div>
      <div className="about-us-image">
        <img src="/images/showroom.jpg" alt="Our Showroom" />
      </div>
      <a href="/products" className="cta-button">
        Explore Our Products
      </a>
    </div>
  );
};

export default AboutUs;
