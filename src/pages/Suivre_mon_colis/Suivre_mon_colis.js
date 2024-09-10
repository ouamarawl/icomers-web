import React from "react";
import "./Suivre_mon_colis.css";
import { Link } from "react-router-dom";
import yalidine from '../../data/assets/icons/Sans-titre-41.webp'
import recaptcha from '../../data/assets/icons/recaptcha.png'

function Suivre_mon_colis() {
  return (
    <div className="suivre_mon_colis">
      <div className="logo">
        <h1 style={{ fontSize: "6rem ", color: "white" }}>Suivre Mon Colis</h1>
        <p style={{ fontSize: "20px", color: "white" }}>
          
          <Link to={"/accueil"}>Accueil</Link>/ Suivre Mon Colis
        </p>
      </div>
      <div className="explication">
      <p>
        Pour suivre votre colis veuillez entré votre numero de tracking que vous
        avez reçu par SMS.
        <br />
        <br />
        Les numero de tracking commence toujours par <br />
        <br />{" "}
        <span style={{ color: "maroon", borderBottom: "1px solid maroon" }}>
          YAL-xxxx
        </span>
      </p>
      </div>
     
      <div className="block_reclamation" style={{ border: "1px solid black" }}>
        <div className="formulaire">
          <div className="block1">
            <p style={{ color: "black" ,fontSize:'22px'}}>Suivre un colis</p>
          </div>
          
          <div className="block2">
            <form style={{display:'grid', gridTemplateColumns:'repeat(1, 20rem)'}}>
              <label htmlFor="tracking"><p style={{fontSize:'22px'}}>Tracking</p></label>
              <input
                type="tracking"
                id="login.tracking"
                name="tracking"
                required
              />
            </form>
            <div className="securité" >
             <button style={{height:'2rem', width:'2rem',borderRadius:'5px', border:'1px solid gray' ,backgroundColor:'white'}}></button>
             <p>je ne suis pas un robot</p>
             < img src={recaptcha} alt=""/>
            </div>
          </div>
          <hr />
          <div className="block3">
            <button > <p style={{color:'white', fontSize:'25px', margin:'0px'}}>Afficher l'historique</p></button>
          </div>
        </div>
        <div className="remarque">
        <img src={yalidine} alt=""/>
        <p style={{fontSize:'20px'}}>Opérateur de courrier Express en régime domestique.  Notre mission principale est de nous assurer de transporter vos courriers et vos colis.
        </p>
        <ul> 
        <li><Link to='{}' >Nos agences</Link > </li>
        <li><Link to='{}' >Produits interdits</Link > </li>
        <li><Link to='{}' >Conditions de transport</Link > </li>
        <li><Link to='{}' >Politique Qualité, Sécurité et Environnement</Link > </li>
        <li><Link to='{}' >Domaine d'application</Link > </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Suivre_mon_colis;
