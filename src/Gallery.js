import { useState, useEffect } from 'react';
import "./Gallery.css";

const images = [
  { src: "img1.jpg", title: "Bright Smiles" },
  { src: "img2.jpg", title: "Learning Together" },
  { src: "img3.jpg", title: "Future Leaders" },
  { src: "img5.jpg", title: "Hands of Hope" },
  { src: "img6.jpg", title: "Dreams in the Making" },
  { src: "img7.jpg", title: "Building a Better Tomorrow" },
  { src: "img8.jpg", title: "Laughter and Play" },
];

const Gallery = () => {
  return (
    <div className="photo-container">
      <p className="photo-title">Photography</p>
      <h2 className="photo-heading">Check Our Gallery</h2>
      <div className="photo-grid">
        {images.map((img, index) => (
          <div key={index} className="photo-item">
            <img src={img.src} alt={`Gallery Image ${index + 1}`} />
            <div className="photo-overlay">
              <p>{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
