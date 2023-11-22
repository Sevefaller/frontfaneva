import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './login.css';
import './inscription.css';
import logo from './efianara.png';
import Navbar2 from './Navbar2';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const Login2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [error, setError] = useState(null);
  async function signIn() {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
      const result = response.data;
  
      if (response.error) {
        setError(result.error);
      } 
      else if (result.user.status !== 0) {
        localStorage.setItem('user', JSON.stringify(result.user));
        

            if (result.user.role === 777) {
          history.push('/OrganisationListe');
        } else if (result.user.role === 756) {
          history.push('/EditeurListe');
        } else if (result.user.role === 755) {
          history.push('/CandidatureListe');
        } else {
          history.push('/lienParDefaut');
        }
      } else {
        setError("Votre compte n'est pas encore validé");
      }
  
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      setError("Veuillez vérifier email et mot de passe.");
    }

    const userString = localStorage.getItem('user');

// Si la valeur existe dans localStorage, parsez-la en objet JSON et affichez-la dans la console
if (userString) {
  const user = JSON.parse(userString);
  console.log("Contenu de localStorage - user :", user);
} else {
  console.log("Aucune valeur trouvée dans localStorage pour la clé 'user'");
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
            <Button href="registration">S'inscrire</Button>
          </Form.Group>
        </form>
        <div>
      {/* Votre formulaire et éléments d'interface utilisateur ici */}
      {error && <div>{error}</div>}
    </div>
      </div>
     
    </div>
  );
};

export default Login2;
