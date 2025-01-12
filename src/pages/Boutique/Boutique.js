import React from "react";
import "./Boutique.css";
import Cards_boutique from "./Cards_boutique";
import { data_base} from "../../data/Data";
import Card_produits from "../Component/Cards/Card_produits";

function Boutique() {
  return (
    <div className="boutique_container">
      <div className="boutique">
        <h1 style={{ color: "white", fontSize: "90px" }}>Boutique</h1>
        <div className="logo_boutique">
          {data_base.Data_info_Boutique.map((currentvalue, index) => (
            <Cards_boutique
              key={index}
              category={currentvalue.category}
              nbr_produit={currentvalue.nbr_produit}
            />
          ))}
        </div>
      </div>
      <div className="boutique_produits">
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

export default Boutique;
