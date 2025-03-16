import React, { useState } from 'react';
import axios from 'axios';
import '../styles/CustomOrders.css';

const CustomOrders = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    details: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/custom-orders', orderDetails)
      .then((res) => {
        alert('Order Submitted Successfully!');
        setOrderDetails({ name: '', phone: '', details: '' }); // Clear form after submission
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="custom-orders">
      <h1>Custom Furniture Orders</h1>
      <form onSubmit={handleSubmit} className="order-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={orderDetails.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={orderDetails.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Details of Custom Order:</label>
          <textarea
            name="details"
            value={orderDetails.details}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default CustomOrders;
