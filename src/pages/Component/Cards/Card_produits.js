import React, { useState, useEffect } from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

function ContainerCardProduits(props) {
  
  
 // Export de la variable id_produit

  const [prix, setPrix] = useState(props.prix);

  // Mise à jour du prix après la promotion
  useEffect(() => {
    if (props.promotion) {
      const prixAvecPromotion = props.prix - props.promotion*props.prix/100;
      setPrix(prixAvecPromotion);
    }
  }, [props.promotion, props.prix]);

  return (
    <div className='container_card_produits'>
      <Link to='/vitrines'>
        <div className='promotion' style={props.style}>
          <p style={{ fontSize: '22px' }}>-{props.promotion}%</p>
        </div>
        <img
          src={props.images}
          alt='chaussure'
          style={{ borderRadius: '15px', height: '20rem', width: '19rem', background: 'transparent' }}
        />
        <p style={{ color: 'black' }}> {props.discription}</p>
        <p style={{ color: 'gray' }}>{prix} د.ج</p>
      </Link>
    </div>
  );
}

export default ContainerCardProduits;
