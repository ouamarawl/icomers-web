import React from "react";
import "./Boutique.css";
import Cards_boutique from "./Cards_boutique";
import { Data_cards_Boutique } from "../../data/Data";
import { Data_cards_promo } from "C:/Users/L13 YOGA/OneDrive/Bureau/mes projets/projet React/icomers-web/src/data/Data.js";
import Card_promo from "../Component/Cards/Card_promo";

function Boutique() {
  return (
    <div className="boutique_container">
      <div className="boutique">
        <h1 style={{ color: "white", fontSize: "90px" }}>Boutique</h1>
        <div className="logo_boutique">
          {Data_cards_Boutique.map((currentvalue, index) => (
            <Cards_boutique
              key={index}
              category={currentvalue.category}
              nbr_produit={currentvalue.nbr_produit}
            />
          ))}
        </div>
      </div>
      <div className="boutique_produits">
        {Data_cards_promo.map((currentValue, index) => (
          <Card_promo
            key={index}
            promotion={currentValue.promotion}
            icons={currentValue.icons}
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

export default Boutique;
