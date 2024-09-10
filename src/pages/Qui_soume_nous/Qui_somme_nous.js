import React from "react";
import './Qui_somme_nous.css'
import videoSource from 'C:/Users/L13 YOGA/OneDrive/Bureau/mes projets/projet React/icomers-web/src/data/assets/video/cosmos-the-story-of-a-shoe.mp4'
function Qui_somme_nous() {
  return (
    <div className="qui_somme_nous">
      <h4
        style={{
          fontFamily: '"Playfair Display", Arial, Helvetica, sans-serif;',
          fontSize: "36px",
        }}
      >
        Qui sommes nous ?
      </h4>
      <h1>Bienvenue chez Cosmos Algérie</h1>
      <p>
        Bienvenue sur le site officiel de Cosmos Algérie, une marque 100%
        algérienne fondée par les frères Chakib, Abdelillah et Hichem Benani.
        Nous nous engageons à révolutionner l'industrie en offrant des produits
        de qualité supérieure tout en incarnant les valeurs authentiques de
        notre nation.
      </p>
      <h1>Origine du nom Cosmos</h1>
      <p>
        "Cosmos" symbolise notre vision cosmopolite, embrassant les diversités
        culturelles et les influences mondiales.
      </p>
      <h1>Engagement envers l'excellence</h1>
      <p>
        Chez Cosmos Algérie, nous croyons en l'innovation, la passion et
        l'excellence. Chaque produit que nous fabriquons est imprégné de
        l'histoire riche de notre pays et de notre détermination à progresser.
      </p>
      <h1>Un mouvement pour l'Algérie</h1>
      <p>
        Nous sommes plus qu'une simple marque. Nous sommes un mouvement, une
        expression de l'ingéniosité et du dynamisme de l'Algérie.
      </p>
      <h1>Diversité de produits et qualité inégalée</h1>
      <p>
        Notre portefeuille comprend des biens de consommation courante et des
        innovations technologiques, tous conçus avec le plus grand soin pour
        garantir une qualité inégalée.
      </p>
      <h1>Engagement envers les communautés locales</h1>
      <p>
        Fiers de notre origine algérienne, nous soutenons les communautés
        locales et contribuons à leur développement, créant ainsi des
        opportunités et renforçant notre tissu social.
      </p>
      <h1>Création d'expériences</h1>
      <p>
        Au-delà de la simple vente de produits, notre objectif est de créer des
        expériences, d'inspirer, d'éduquer et d'élever nos clients.
        Rejoignez-nous dans notre voyage pour repousser les limites, défier les
        conventions et écrire le prochain chapitre de notre histoire. Cosmos
        Algérie : où l'innovation rencontre la tradition, où la qualité
        rencontre la passion.
      </p>
       {/* video */}
      
        <video  controls>
          <source src={videoSource} type="video/mp4" />
        </video>
      
    </div>
  );
}

export default Qui_somme_nous;
