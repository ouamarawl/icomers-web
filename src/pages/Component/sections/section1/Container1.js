import React from "react";
import "./Container.css";
import { Data_cards_promo } from "C:/Users/L13 YOGA/OneDrive/Bureau/mes projets/projet React/icomers-web/src/data/Data.js";
import Card_produits from "../../Cards/Card_produits";

function Container1(props) {
  return (
    <div className="container">
      <div className="title">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <div className="cards">
        {Data_cards_promo.map((currentValue, index) => (
          <Card_produits
            key={index}
            promotion={currentValue.promotion}
            discription={currentValue.discription}
            images={currentValue.images}
            prix={currentValue.prix}
            style={currentValue.style}
          />
        ))}
      </div>
    </div>
  );
}

export default Container1;
