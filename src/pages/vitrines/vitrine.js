import React, { useState } from "react";
import "./vitrines.css"; 
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import Carousel from "../Component/carousel/Carousel";





function Vitrines() {
    const [quantite, setQuantite] = useState(1);

  const augmenterQuantite = () => setQuantite(quantite + 1);
  const diminuerQuantite = () => {
    if (quantite > 1) setQuantite(quantite - 1);
  };


  return (
    <div className="container_vitrine" >
      <div className="images_produits">
         <Carousel/>
      </div>
      <div className="achats">
        <div className="lien_ver">
          <p style={{ marginBottom: "1rem" }}>
            <Link>Accueil</Link>/<Link>Type De L'article</Link>/
            <Link><span style={{color:'black'}}>Nom De L'article</span></Link>
          </p>
          <h1
            style={{
              fontFamily: '"Lora", Arial, Helvetica, sans-serif',
              fontSize: "45px",
              marginBottom: "5px",
            }}
          >
            Nom De L'article
          </h1>
          <p
            style={{ color: "maroon", fontSize: "2rem", marginBottom: "2rem" }}
          >
            4600د.ج
          </p>
        </div>
        <div className="pointure" style={{ display: "flex" }}>
          <p
            style={{
              fontSize: "20px",
              marginLeft: "2px",
              marginRight: "2rem",
              fontFamily: " Lato, Arial, Helvetica, sans-serif",
            }}
          >
            pointures::
          </p>
          <Link>
            <button
              style={{
                borderRadius: "100%",
                backgroundColor: "white",
                height: "35px",
                width: "35px",
                marginLeft: "2px",
                marginRight: "2px",
              }}
            >
              42
            </button>
          </Link>
          <Link>
            <button
              style={{
                borderRadius: "100%",
                backgroundColor: "white",
                height: "35px",
                width: "35px",
                marginLeft: "2px",
                marginRight: "2px",
              }}
            >
              43
            </button>
          </Link>
          <Link>
            <button
              style={{
                borderRadius: "100%",
                backgroundColor: "white",
                height: "35px",
                width: "35px",
                marginLeft: "2px",
                marginRight: "2px",
              }}
            >
              44
            </button>
          </Link>
        </div>
        <p
          style={{
            fontSize: "20px",
            marginLeft: "2px",
            marginRight: "2rem",
            fontFamily: " Lato, Arial, Helvetica, sans-serif",
          }}
        >
          31 en stock
        </p>
        <div className="Bouttons" style={{ display: "flex" }}>
          <div className="bouttons_quontité">
            <button id="moins" style={{ border: " 1px solid gray" }} onClick={diminuerQuantite}> 
              -
            </button>
            <div>
              <p
                id="nbr_qnt"
                style={{
                  height: "100%",
                  width: "25px",
                  border: " 1px solid gray",
                  marginBottom:'0px',
                  textAlign:'center',
                  paddingTop:'12px'
                }}
              > {quantite} </p>
            </div>
            <button id="plus" style={{ border: " 1px solid gray" }} onClick={augmenterQuantite}>
              +
            </button>
          </div>
          <button
            style={{
              marginLeft: "3rem",
              marginRight: "3rem",
              border: " 1px solid gray",
              backgroundColor: "#918555",
            }}
          >
            <p
              style={{
                fontSize: "21px",
                color: "white",
                paddingTop: "1px",
                marginBottom: "0px",
              }}
            >
              Ajouter au panier
            </p>
          </button>
          <button
            style={{
              marginLeft: "3rem",
              marginRight: "3rem",
              border: "1px solid gray",
              backgroundColor: "#918555",
            }}
          >
            <p
              style={{
                fontSize: "21px",
                color: "white",
                paddingTop: "1px",
                marginBottom: "0px",
              }}
            >
              Commander maintenant
            </p>
          </button>
        </div>
        <div className="favori">
          <Link className="link">
            <FaRegHeart />{" "}
            <p style={{ fontSize: "18px", fontFamily: "-moz-initial" }}>
              Ajouter à mes favoris
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Vitrines;



{
    /* <img src={old_money_maron} className="d-block w-100" alt="..." />
  <img src={old_money_bleu} className="d-block w-100" alt="..." />
  <img src={old_mony_beige} className="d-block w-100" alt="..." /> */
  }