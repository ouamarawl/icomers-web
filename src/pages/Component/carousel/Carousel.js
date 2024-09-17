
import './Carousel.css'
import React, { useState, useEffect } from 'react';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
  ];

  const showSlide = (index) => {
    if (index >= slides.length) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  const currentSlide = (index) => {
    showSlide(index);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="carousel-slide"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          />
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>
        &#8592;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#8594;
      </button>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
