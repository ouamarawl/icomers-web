import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import'./Header.css'
function Header() {
  return (
    <div className="navbar">
      <div className="block_L">
        <FaRegHeart />
      </div>
      <div className="block_C">
        <div className="search">
        <button class="search-button">
           <input type="text" placeholder="Search..." class="search-input" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="search-icon"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="center">
          <Link to= '/'>ACCUEIL</Link>
          <Link to= 'boutique'>BOUTIQUE</Link>
           <h1>LOGO</h1>
          <Link to= 'qui_somme_nous_?'>QUI SOMME NOUS ? </Link>
          <Link to= 'contact'>CONTACT</Link>
          <Link to= 'suivre_mon_colis'>SUIVRE MON COLIS</Link>
        </div>
        <div className="profile" >
         <Link to={'signup'} > <CgProfile />  </Link> 
        </div>
      </div>
      <div className="block_R">
        <SlBasketLoaded />
      </div>
    </div>
  );
}

export default Header;
