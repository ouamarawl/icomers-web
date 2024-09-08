import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Form() {
  // États pour gérer les champs de formulaire
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  // Fonction pour gérer l'envoi du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoute ici la logique pour envoyer les données ou les valider
    console.log({ name, firstName, email, number, password, confirmation });
  };

  return (
    <div className='Formulaire'>
      <form className="order-form" onSubmit={handleSubmit}>
        <h1 style={{ color: 'white', fontSize: '3rem', marginLeft: '10rem' }}>SIGNUP</h1>
        
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="signup.name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="first_name">Prénom:</label>
        <input
          type="text"
          id="signup.first_name"
          name="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="signup.email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="number">Numéro:</label>
        <input
          type="number"
          id="signup.number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <label htmlFor="password">password:</label>
        <input
          type="password"
          id="signup.password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmation">Confirme :</label>
        <input
          type="password"
          id="signup.password1"
          name="confirmation"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
        />

        <button type="submit">S'inscrire</button>

        <Link to={'/login'}>
          <h1 style={{ color: 'white', fontSize: '1rem', marginLeft: '140px' }}>
            Already have an account? Login
          </h1>
        </Link>
      </form>
    </div>
  );
}

export default Form;
