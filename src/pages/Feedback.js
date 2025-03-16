import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Feedback.css';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get('/api/feedbacks')
      .then((res) => setFeedbacks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="feedback">
      <h1>Customer Feedback</h1>
      <div className="feedback-list">
        {feedbacks.map((feedback) => (
          <div key={feedback._id} className="feedback-card">
            <h3>{feedback.name}</h3>
            <p>{feedback.comment}</p>
            <span>{feedback.rating} Stars</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
