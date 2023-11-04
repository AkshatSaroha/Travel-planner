import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/cardSlider.css";



const CardSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const cardsPerSlide = 3;
  const cardData = [
    { image: "./Assets/Chandigarh.jpeg", text: "Chandigarh" },
    { image: "./Assets/Delhi.jpeg", text: "Delhi" },
    { image: "./Assets/Kerala.jpeg", text: "Kerala" },
    { image: "./Assets/Shimla.jpeg", text: "Shimla" },
    { image: "./Assets/Goa.jpeg", text: "Goa" },
    { image: "./Assets/Ladakh.jpg", text: "Ladakh" },
  ];

  const totalSlides = Math.ceil(cardData.length / cardsPerSlide);

  const nextSlide = () => {
    setActiveSlide((activeSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((activeSlide - 1 + totalSlides) % totalSlides);
  };

  const startCardIndex = activeSlide * cardsPerSlide;
  const endCardIndex = startCardIndex + cardsPerSlide;
  const visibleCards = cardData.slice(startCardIndex, endCardIndex);

  

  return (
    <div id="destinations">
      <div className="card-heading">
          <h2>Discover Your Next Favourite Destination</h2>
          <h3>Get inspired from guides <br/> with expert tips and recommendations</h3>
      </div>
      <div className="card-slider-container">
        <div className="card-slider">
          {visibleCards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt="" className="card-images"/>
              {card.text === "Delhi" ? (
                <Link to="/delhi" className="text-overlay">{card.text}</Link>
              ) : (
                <div className="text-overlay">
                  {card.text}
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="prev-button" onClick={prevSlide}>
          Previous
        </button>
        <button className="next-button" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
