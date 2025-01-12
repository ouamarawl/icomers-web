import SNEAKERS from "../data/assets/image/SNEAKERS.jpg";
import SANDALS from "../data/assets/image/SANDALS.jpg";
import promo from "../data/assets/image/promo.jpeg";
import femme from "../data/assets/image/femme.jpeg";
import classique from "../data/assets/image/classique.jpeg";
import boots from "../data/assets/image/boots.jpeg";
import ACCESSORIES from "../data/assets/image/ACCESSORIES.jpeg";
import ETE_2024 from "../data/assets/image/ETE_2024.jpeg";
import black from "../data/assets/image/balck.webp";
import vgris from "../data/assets/image/v_gris.webp";
import shark from "../data/assets/image/shark.webp";
import sneakers from "../data/assets/image/sneakers300.webp";
import xgris from "../data/assets/image/x_gris.webp";
import slips from "../data/assets/image/slips.webp";
import x_vert from "../data/assets/image/xverts.webp";
import vintage_vert from "../data/assets/image/vintage_vert.webp";
import blacky from "../data/assets/image/blacky.webp";
import carbon from "../data/assets/image/carbon.webp";
import horizon from "../data/assets/image/horizon.webp";
import horizon_noir from "../data/assets/image/horizon_noire.webp";
import Ox_sandales from "../data/assets/image/OX_sandals.webp";
import Ox_sandales2 from "../data/assets/image/OX_sandals2.webp";
import sandales_beige from "../data/assets/image/sandal_beige.webp";
import sandales_vert from "../data/assets/image/sandal_vert.webp";
import sandales_maron from "../data/assets/image/sandals_maron.webp";
import Old_mony from "../data/assets/image/Old_mony_maron.webp";
import Old_mony_bleu from "../data/assets/image/old_mony_bleu.webp";
import Old_mony_maron from "../data/assets/image/Old_mony_maron.webp";
import macro from "../data/assets/image/macro.webp";
import apex from "../data/assets/image/apex.webp";
import macro_maron from "../data/assets/image/macro_maron.webp";
import spider from "../data/assets/image/spider_noir.webp";
import spider_blanc_et_gris from "../data/assets/image/spider_blanc_et_gris.webp";
import spider_blanc from "../data/assets/image/spider_blanc.webp";
import rio from "../data/assets/image/rio.webp";

const style_p = {
  borderRadius: "00",
  height: "4rem",
  width: "4rem",
  // backgroundColor: "rgb(127, 96, 81)",
  margin: "0px",
  paddingTop: "13px",
  marginLeft: "1rem",
  marginTop: "1rem",
};
const style = {
  borderRadius: "100%",
  height: "4rem",
  width: "4rem",
  backgroundColor: "rgb(127, 96, 81)",
  margin: "0px",
  paddingTop: "13px",
  marginLeft: "1rem",
  marginTop: "1rem",
};
let  data_base = {
 Data_cards_category:[
    { category: "SNEAKERS", stock: "33 produits", image: SNEAKERS },
    { category: "SANDALS", stock: "12 produits", image: SANDALS },
    { category: "PROMOTION", stock: "25 produits", image: promo },
    { category: "FEMME", stock: "6 produits", image: femme },
    { category: "ETE 2024", stock: "43 produits", image: ETE_2024 },
    { category: "CLASSIQUES", stock: "14 produits", image: classique },
    { category: "BOOTS", stock: "5 produits", image: boots },
    { category: "ACCESSORIES", stock: "9 produits", image: ACCESSORIES },
  ],
  Data_cards_produit:[
    {
      id: 1,
      promotion: "29",
      style: style,
      discription: "Cosmos Black & white (Véritable Cuir)  Promotion, Sneakers",
      prix: "5500",
      images: black,
    },
    {
      id: 2,
      promotion: "15",
      style: style,
      discription: "Cosmos VGris – (Cuir Intérieur) Promotion, Sneakers",
      prix: "5500",
      images: vgris,
    },
    {
      id: 3,
      promotion: "15",
      style: style,
      discription: "Cosmos Shark (Confort +) Promotion, Sneakers",
      prix: "5500",
      images: shark,
    },
    {
      id: 4,
      promotion: "15",
      style: style,
      discription: "Sneakers 300 (Confort +) Été 2024, Promotion, Sneakers",
      prix: "5500",
      images: sneakers,
    },
    {
      id: 5,
      promotion: "25",
      style: style,
      discription: "Cosmos X – Gris (Édition Prémium) Été 2024, Promotion, Sneakers",
      prix: "5500",
      images: xgris,
    },
    {
      id: 6,
      promotion: "16",
      style: style,
      discription: "Privé Slips on (En Véritable cuir) Promotion, Sneakers",
      prix: "5500",
      images: slips,
    },
    {
      id: 7,
      promotion: "25",
      style: style,
      discription: "Cosmos X – Vert (Édition Prémium) Été 2024, Promotion, Sneakers",
      prix: "5500",
      images: x_vert,
    },
    {
      id: 8,
      promotion: "15",
      style: style,
      discription: "Vintage Vert en Croûte de Daim Promotion, Sneakers",
      prix: "5500",
      images: vintage_vert,
    },
    {
      id: 9,
      promotion: "25",
      style: style,
      discription: "Vintage Vert en Croûte de Daim Promotion, Sneakers",
      prix: "5500",
      images: blacky,
    },
    {
      id: 10,
      promotion: "25",
      style: style,
      discription: "Cosmos Carbon 2.0 (en cuir) Promotion, Sneakers",
      prix: "5500",
      images: carbon,
    },
    {
      id: 11,
      promotion: "15",
      style: style,
      discription: "Mocassin Horizon – Tabac Classiques, Été 2024, Promotion",
      prix: "5500",
      images: horizon,
    },
    {
      id: 12,
      promotion: "",
      style: style_p,
      discription: "Mocassin Horizon Noir (En véritable cuir) Classiques, Été 2024, Promotion",
      prix: "5500",
      images: horizon_noir,
    },
    {
      id: 13,
      promotion: "",
      style: style_p,
      discription: "Loafers Old money - Classiques, Été 2024",
      prix: "5500",
      images: Old_mony,
    },
    {
      id: 14,
      promotion: "",
      style: style_p,
      discription: "Loafers Old money – Bleu marine - Classiques, Été 2024",
      prix: "5500",
      images: Old_mony_bleu,
    },
    {
      id: 15,
      promotion: "",
      style: style_p,
      discription: "Loafers Old money – Marron - Classiques, Été 2024",
      prix: "5500",
      images: Old_mony_maron,
    },
    {
      id: 16,
      promotion: "",
      style: style_p,
      discription: "Cambridge Sandale – Marron - Été 2024, Sandale",
      prix: "5500",
      images: sandales_maron,
    },
    {
      id: 17,
      promotion: "",
      style: style_p,
      discription: "Cambridge Sandale – Vert - Été 2024, Sandale",
      prix: "5500",
      images: sandales_vert,
    },
    {
      id: 18,
      promotion: "",
      style: style_p,
      discription: "Cambridge Sandale – Beige - Été 2024, Sandale",
      prix: "5500",
      images: sandales_beige,
    },
    {
      id: 19,
      promotion: "",
      style: style_p,
      discription: "Oxford Sandale – Noir - Été 2024, Sandale",
      prix: "5500",
      images: Ox_sandales,
    },
    {
      id: 20,
      promotion: "",
      style: style_p,
      discription: "Cambridge Sandale – Noir - Été 2024, Sandale",
      prix: "5500",
      images: Ox_sandales2,
    },
    {
      id: 21,
      promotion: "",
      style: style_p,
      discription: "Cosmos Rio – Tricolores - Sneakers",
      prix: "5500",
      images: rio,
    },
    {
      id: 22,
      promotion: "",
      style: style_p,
      discription: "Cosmos Spider Blanc - Sneakers",
      prix: "5500",
      images: spider_blanc,
    },
    {
      id: 23,
      promotion: "",
      style: style_p,
      discription: "Cosmos Spider Blanc & Gris - Sneakers",
      prix: "5500",
      images: spider_blanc_et_gris,
    },
    {
      id: 24,
      promotion: "",
      style: style_p,
      discription: "Cosmos Spider Noir - Sneakers",
      prix: "5500",
      images: spider,
    },
    {
      id: 25,
      promotion: "",
      style: style_p,
      discription: "Chaussure Macro – Double Sangle en Cuir Marron - Classiques, Été 2024",
      prix: "5500",
      images: macro_maron,
    },
    {
      id: 26,
      promotion: "",
      style: style_p,
      discription: "Chaussure Apex – Richelieu en Cuir Noir - Classiques",
      prix: "5500",
      images: apex,
    },
    {
      id: 27,
      promotion: "",
      style: style_p,
      discription: "Chaussure Macro – Double Sangle en Cuir Noir - Classiques",
      prix: "5500",
      images: macro,
    },
    {
      id: 28,
      promotion: "",
      style: style_p,
      discription: "Cosmos Black & White (Véritable Cuir) - Promotion, Sneakers, Note 4.17 sur 5",
      prix: "5500",
      images: spider_blanc_et_gris,
    },
  ],
  
 Data_info_Boutique:[
    { nbr_produit: "9 produits", category: "ACCESOIRES" },
    { nbr_produit: "21 produits", category: "AUTOMNE 2024" },
    { nbr_produit: "25 produits", category: "PROMOTION" },
    { nbr_produit: "12 produits", category: "SANDALE" },
    { nbr_produit: "38 produits", category: "SEAKERS" },
    { nbr_produit: "5 produits", category: "BOOTS" },
    { nbr_produit: "6 produits", category: "FEMME" },
    { nbr_produit: "14 produits", category: "CLASSIQUES" },
  ],
 Data_questions:[
    {
      questions:
        "D'où proviennent les chaussures en cuir de votre boutique en ligne ?",
      reponse:
        "Toutes nos chaussures en cuir sont fabriquées en Algérie, avec du cuir véritable de haute qualité, mettant en valeur l'artisanat local.",
    },
    {
      questions: "	Comment puis-je passer une commande sur votre site ?",
      reponse:
        "Pour commander, sélectionnez la paire de chaussures désirée, choisissez la taille, puis suivez les étapes de paiement sécurisé sur notre site.",
    },
    {
      questions: "	Offrez-vous des promotions ou des remises sur vos chaussures ?							",
      reponse:
        "Oui, nous proposons régulièrement des promotions spéciales. Assurez vous d'être abonné(e) a nous sur les réseaux pour être informé(e) des offres exclusives ou bien consulter notre rebrique 'les bonnes affaires' disponible sur la page d'accueil.",
    },
    {
      questions: "	Comment puis-je contacter votre service clientèle ?	",
      reponse:
        "Vous pouvez nous contacter via notre formulaire de contact sur le site ou sur notre page officiel cosmos_algerie. Nous sommes là pour répondre à toutes vos questions.",
    },
    {
      questions: "Dans quelles régions proposez-vous la livraison express ?",
      reponse:
        "Nous proposons désormais notre service de livraison express dans toutes les 58 wilayas d'Algérie dans un délai de 24 a 72h tout dépend de votre emplacement.",
    },
  ],
}


export {data_base};
// export { Data_cards_produit };
// export { Data_info_Boutique };
// export { Data_questions };
// export {data};
