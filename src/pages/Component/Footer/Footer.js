import React from "react";
import "./Footer.css";
import { TbTruckDelivery } from "react-icons/tb";
import { FiMessageCircle } from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";
import { Link } from "react-router-dom";
import yalidine from "C:/Users/L13 YOGA/OneDrive/Bureau/mes projets/projet React/icomers-web/src/data/assets/svg/Sans-titre-41.webp";
function Footer() {
  return (
    <div className="footer">
      <div className="block_sup" >
        <div className="livraison" style={{ display: "flex", margin:'3rem' }}>
          <TbTruckDelivery />
          <div>
            <h1 style={{ fontSize: "25px" }}>Livraison 58 wilayas.</h1>
            <p style={{ fontSize: "18px", color: "gray" }}>
              Livraison 24 - 48h.
            </p>
            <img src={yalidine} alt="" />
          </div>
        </div>
        <div className="suport" style={{ display: "flex" ,margin:'3rem' }}>
          <FiMessageCircle />
          <div>
            <h1 style={{ fontSize: "25px" }}>Support.</h1>
            <p style={{ fontSize: "18px", color: "gray" }}>Support 24h/7j.</p>
          </div>
        </div>
        <div className="payement" style={{ display: "flex",margin:'3rem' }}>
          <GiTakeMyMoney />
          <div>
            <h1 style={{ fontSize: "25px" }}>Payment a la livraison.</h1>
            <p style={{ fontSize: "18px", color: "gray" }}>
              Payer a la livraison
            </p>
          </div>
        </div>
        <div className="réseau" style={{margin:'3rem'}}>
          <h1 style={{ fontSize: "25px" }}>Logo</h1>
          <p style={{ fontSize: "18px", color: "gray" }}>Nos réseaux :</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <linearGradient
              id="Ld6sqrtcxMyckEl6xeDdMa"
              x1="9.993"
              x2="40.615"
              y1="9.993"
              y2="40.615"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#2aa4f4" />
              <stop offset="1" stop-color="#007ad9" />
            </linearGradient>
            <path
              fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
              d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
            />
            <path
              fill="#fff"
              d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8ma"
              cx="19.38"
              cy="42.035"
              r="44.899"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#fd5" />
              <stop offset=".328" stop-color="#ff543f" />
              <stop offset=".348" stop-color="#fc5245" />
              <stop offset=".504" stop-color="#e64771" />
              <stop offset=".643" stop-color="#d53e91" />
              <stop offset=".761" stop-color="#cc39a4" />
              <stop offset=".841" stop-color="#c837ab" />
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            />
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8mb"
              cx="11.786"
              cy="5.54"
              r="29.813"
              gradientTransform="matrix(1 0 0 .6663 0 1.849)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#4168c9" />
              <stop offset=".999" stop-color="#4168c9" stop-opacity="0" />
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            />
            <path
              fill="#fff"
              d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
            />
            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
            <path
              fill="#fff"
              d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
            />
          </svg>
        </div>
        <div className="nos_liens" style={{margin:'3rem'}}>
          <h1 style={{ fontSize: "25px" }}>lIEN RAPIDE</h1>
          <ul>
            <li>
              {" "}
              <Link> Accueil </Link>{" "}
            </li>
            <li>
              {" "}
              <Link> Boutique </Link>{" "}
            </li>
            <li>
              {" "}
              <Link> Contact </Link>{" "}
            </li>
            <li>
              {" "}
              <Link> A propos </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="categories" style={{margin:'3rem'}}>
          <h1 style={{ fontSize: "25px" }}>CATEGORIES :</h1>
          <ul>
            <li>
              {" "}
              <Link>sneakers </Link>{" "}
            </li>
            <li>
              {" "}
              <Link> boots </Link>{" "}
            </li>
            <li>
              {" "}
              <Link> accessoires </Link>{" "}
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="block_inf" style={{ textAlign: "center" }}>
        <h3>Cosmos algerie All rights reserved</h3>
      </div>
    </div>
  );
}

export default Footer;
