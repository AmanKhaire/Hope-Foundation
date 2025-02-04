import  { useState, useEffect } from 'react';
import './Home.css';
import HomeCause from './HomeCause';    
import Gallery from './Gallery'; 
import DonateHome from './DonateHome'; 
import Testimonial from './Testimonal';
function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img8.jpg"
  ];

  const captions = [
    "Bringing Change to Communities", 
    "Together We Make a Difference", 
    "Empowering Lives Through Action", 
    "Support a Better Future", 
    "Changing the World, One Step at a Time", 
    "Helping Hands, Heartfelt Action", 
    "Uniting for a Greater Cause"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="carousel-container">
          <img src={images[currentImage]} alt="Hero" className="hero-img img-fluid" />
          <button className="carousel-btn prev" onClick={goToPreviousImage}>&#10094;</button>
          <button className="carousel-btn next" onClick={goToNextImage}>&#10095;</button>
        </div>
        <div className="hero-overlay">
          <h1 className="hero-title">We Make a Difference</h1>
          <p className="hero-description">{captions[currentImage]}</p>
          <a href="/Donation">
          <button className="btn btn-donate">Donate</button>
                      </a>
                      <a href="/Blog">
                      <button className="btn btn-learn-more">Learn More</button>
                      </a>
          
        </div>

        
        
      </div>
      <HomeCause/>
      <Gallery/>
      <DonateHome/>
      <Testimonial/>
      {/* Footer */}
      
    </div>
  );
}

export default App;
