import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const isAdmin = true; // Replace with actual admin check logic

  useEffect(() => {
    axios
      .get('/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products">
      <h1>Our Furniture Collection</h1>

      {/* Admin Add Product Button */}
      {isAdmin && (
        <div className="admin-add-product">
          <Link to="/admin" className="add-product-btn">
            Add Product
          </Link>
        </div>
      )}

      {/* Categories Section */}
      <div className="categories">
        <h2>Categories</h2>
        <div className="category-list">
          <div className="category">
            <h3>Sofas</h3>
            {/* List of sofas */}
          </div>
          <div className="category">
            <h3>Beds</h3>
            {/* List of beds */}
          </div>
          <div className="category">
            <h3>Tables</h3>
            {/* List of tables */}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
