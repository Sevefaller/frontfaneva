import React from 'react';
import './login.css'; // Assurez-vous d'avoir ce fichier CSS pour les styles
import logo from './efianara.png';
import Navbar2 from "./Navbar2";

const Login2 = () => {
  return (
    <div className="login-container">
    <div className="login-box">
      <img src={logo} alt="Logo" className="logo" />
      <form>
        <div className="form-group">
          <label htmlFor="username">Pseudo</label>
          <input type="text" id="username" name="username" placeholder="Entrez votre pseudo" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" placeholder="Entrez votre mot de passe" />
        </div>
        <div className="buttons">
          <button type="submit">Se connecter</button>
          <button type="submit">S'inscrire</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Login2;
