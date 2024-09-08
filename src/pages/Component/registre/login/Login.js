import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Connect() {
  // États pour stocker les valeurs du formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoute ici la logique pour valider ou envoyer les données de connexion
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className='Formulaire'>
      <form className="order-form" onSubmit={handleSubmit}>
        <h1 style={{ color: 'white', fontSize: '3rem', marginLeft: '10rem' }}>LOGIN</h1>
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="login.email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Gérer la mise à jour de l'email
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="login.password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Gérer la mise à jour du mot de passe
        />

        <h1 style={{ color: 'white', fontSize: '1rem', marginLeft: '168px' }}>Mot de passe oublié ?</h1>

        <button type="submit">Login</button>

        <Link to={'/signup'}>
          <h1 style={{ color: 'white', fontSize: '1rem', marginLeft: '120px' }}>
            Pas encore de compte ? Inscription
          </h1>
        </Link>
      </form>
    </div>
  );
}

export default Connect;
