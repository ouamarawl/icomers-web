import React from "react";
import "./Container.css";

import Card_produits from "../../Cards/Card_produits";
import { data_base } from "../../../../data/Data";

function Container1(props) {
  return (
    <div className="container">
      <div className="title">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <div className="cards">
        {data_base.Data_cards_produit.map((currentValue, index) => (
          <Card_produits
            key={index}
            id={currentValue.id}
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
