import './Carousel.css'
import React, { useState, useEffect } from 'react';
import old_money_maron from "../../../data/assets/image/Old_mony_maron.webp";
import old_money_bleu from "../../../data/assets/image/old_mony_bleu.webp";
import old_mony_beige from "../../../data/assets/image/old_mony_beige.webp";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    old_money_maron,
    old_money_bleu,
    old_mony_beige
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
