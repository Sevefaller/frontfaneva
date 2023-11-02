import React, { useState } from 'react';
import './login.css';
import './inscription.css';
import logo from './efianara.png';
import Navbar2 from './Navbar2';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const Login2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    try {
      const formData = new FormData();
      formData.append("email_org", email);
      formData.append("password", password);
      const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
      console.log("Réponse de l'API :", response.data);
      // Traitez la réponse ici
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      // Gérez les erreurs ici
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" className="logo animated-logo" />
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Entrez votre email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" placeholder="Entrez votre mot de passe" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Form.Group controlId="formImageNif" className="button-group">
            <Button variant="primary" onClick={signIn}>Se connecter</Button>
            <Button href="inscription">S'inscrire</Button>
          </Form.Group>
        </form>
      </div>
    </div>
  );
};

export default Login2;
