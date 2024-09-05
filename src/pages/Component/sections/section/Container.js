import React from "react";
import './Container.css'
import Card from "../../Cards/Card";
import Data_cards from "C:/Users/L13 YOGA/OneDrive/Bureau/mes projets/projet React/icomers-web/src/data/Data.js";
function Container(props) {
  return (
    <div className="container">
        <div className="title"> 
        <h1> {props.title} </h1>
        <p> {props.text} </p>
        </div>
        <div className="cards">
        {Data_cards.map((  curentvalue ,index) => 
        <Card
          key={index}
          category={curentvalue.category}
          stock={curentvalue.stock}
          image={curentvalue.image}
        />
      )}
        </div>
    </div>
  );
}

export default Container;
