import React from "react";
import "./Contact.css";
import { data_base} from "../../data/Data";
import Questions from "./Component_contact/Questions";

function Contact() {
  return (
    <div className="contact">
      <div className="Questions">
        <div className="Qestion1">
          <p style={{ color: "gray" , fontSize:"35px"}}>Plus d'informations</p>
          <h1 style={{ fontSize: "35px" }}>Les questions les plus poser</h1>
          <hr />
        </div>
        {data_base.Data_questions.map((currentvalue, index) => (
          <Questions
            key={index}
            questions={currentvalue.questions}
            reponse={currentvalue.reponse}
          />
        ))}
      </div>
      <div className="contacter_nous">
        <p style={{ color: "gray", fontSize:"35px", marginBottom:'1rem' }}>
        Contactez Nous
        </p>
        <div className="telphone" style={{ marginBottom:'3rem'}}>
        <h1 style={{fontFamily:'"Playfair Display", Arial, Helvetica, sans-serif', fontSize: "35px"}} >Téléphone :</h1>
        <h2 style={{fontFamily:'"Playfair Display", Arial, Helvetica, sans-serif' ,fontSize:'25px' }}>nom prénom : 0557 *** 006 <br/>
        nom prénom : 0770 *** 679</h2>
        </div>
        <div className="Email" style={{ marginBottom:'1rem'}}>
        <h1 style={{fontFamily:'"Playfair Display", Arial, Helvetica, sans-serif' , fontSize: "35px" }}>Adresse mail :</h1>
        <h2 style={{fontFamily:'"Playfair Display", Arial, Helvetica, sans-serif' ,fontSize:'25px'}}>LogoByExemple@gmail.com</h2>
        </div>
        <></>

      </div>
    </div>
  );
}

export default Contact;
