import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to SN Gangaram Furnitures Studio</h1>
          <p>Premium handcrafted furniture for your perfect space.</p>
          <Link to="/products" className="btn-primary">
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="products-container">
          <div className="product-card">
            <LazyLoadImage
              src="https://via.placeholder.com/300x200?text=Sofa"
              alt="Sofa"
              effect="blur"
              width="100%"
              height="200px"
              style={{ objectFit: 'cover' }}
            />
            <h3>Luxury Sofa</h3>
            <p>Comfortable and stylish sofas for modern homes.</p>
          </div>
          <div className="product-card">
            <LazyLoadImage
              src="https://via.placeholder.com/300x200?text=Bed"
              alt="Bed"
              effect="blur"
              width="100%"
              height="200px"
              style={{ objectFit: 'cover' }}
            />
            <h3>Premium Bed</h3>
            <p>Elegant beds crafted for perfect sleep.</p>
          </div>
          <div className="product-card">
            <LazyLoadImage
              src="https://via.placeholder.com/300x200?text=Dining"
              alt="Dining Table"
              effect="blur"
              width="100%"
              height="200px"
              style={{ objectFit: 'cover' }}
            />
            <h3>Modern Dining Set</h3>
            <p>Dining sets that blend style and function.</p>
          </div>
        </div>
      </section>

      {/* Custom Orders */}
      <section className="custom-orders-section">
        <h2>Looking for Custom Furniture?</h2>
        <p>Let us craft the perfect furniture for your home.</p>
        <Link to="/custom-orders" className="btn-secondary">
          Request a Custom Order
        </Link>
      </section>
    </div>
  );
};

export default Home;
