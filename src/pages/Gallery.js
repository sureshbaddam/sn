import React from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Our Showroom Gallery</h1>
      <div className="gallery-images">
        <img src="/images/showroom1.jpg" alt="Showroom Image 1" />
        <img src="/images/showroom2.jpg" alt="Showroom Image 2" />
        <img src="/images/showroom3.jpg" alt="Showroom Image 3" />
        <img src="/images/showroom4.jpg" alt="Showroom Image 4" />
        <img src="/images/showroom5.jpg" alt="Showroom Image 5" />
        <img src="/images/showroom6.jpg" alt="Showroom Image 6" />
      </div>
    </div>
  );
};

export default Gallery;
