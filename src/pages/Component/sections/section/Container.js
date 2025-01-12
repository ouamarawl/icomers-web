import React from "react";
import './Container.css'

import Card_category from "../../Cards/Card_gategory";
import { data_base } from "../../../../data/Data";

function Container(props) {
  return (
    <div className="container">
        <div className="title"> 
        <h1> {props.title} </h1>
        <p> {props.text} </p>
        </div>
        <div className="cards">
        {data_base.Data_cards_category.map((  curentvalue ,index ,) => 
        <Card_category
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
