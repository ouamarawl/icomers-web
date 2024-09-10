import React from "react";
import { Link } from "react-router-dom";

function Cards_boutique(props) {
  return (
    <Link>
      <h1 style={{fontSize:'18px', color :'white'}} > {props.category} </h1>
      <p style={{color:'gray'}}>{props.nbr_produit}</p>
    </Link>
  );
}

export default Cards_boutique;
