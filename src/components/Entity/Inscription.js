import React, { useState, useEffect } from "react";
import './inscription.css'; // Assurez-vous d'avoir ce fichier CSS pour les styles
import logoi from './efianara.png';
import Navbar2 from "./Navbar2";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Inscription = () => {

    const [password, setPassword] = useState("");
    const [nom, setNom] = useState("");
    const [type, setType] = useState("1");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [site, setSite] = useState("");
    const [dateCreation, setDateCreation] = useState("");
    const [numNif, setNumNif] = useState("");
    const [numStat, setNumStat] = useState("");
    const [statutLegal, setStatutLegal] = useState("");
   

    const [logo, setLogo] = useState("");
    const [imageStat, setImageStat] = useState("");
    const [imageNif, setImageNif] = useState("");
  


    const handleLogoChange = (e) => {
      setLogo(e.target.files[0]);
    };
  
    const handleImageStatChange = (e) => {
      setImageStat(e.target.files[0]);
    };
  
    const handleImageNifChange = (e) => {
      setImageNif(e.target.files[0]);
    };

    async function signUp() {
        e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("nom", nom);
    formData.append("type", type);
    formData.append("phone", phone);
    formData.append("site", site);
    formData.append("dateCreation", dateCreation);
    formData.append("numNif", numNif);
    formData.append("numStat", numStat);
    formData.append("statutLegal", statutLegal);
    formData.append("logo", logo);
    formData.append("imageStat", imageStat);
    formData.append("imageNif", imageNif);

        let result = await fetch("http://localhost:8000/api/Registre", {
          method: "Post",
    
          body: formData,
        });
        result = await result.json();
        console.warn("result", result);
        handleClose();
        ListeUtilisateur();
      }

    return (
        <div className="inscription">
             <Container>
             
      <Row>
        <Col md={6}>
            <Form>
              <Form.Group controlId="formType">
                <Form.Label>Type organisation</Form.Label>
                
                <Form.Control as="select" value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="1">Association</option>
                  <option value="2">ONG</option>
                  <option value="3">Entreprise</option>
                  {type}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formNom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                {nom}
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formSite">
                <Form.Label>Site</Form.Label>
                <Form.Control type="text" value={site} onChange={(e) => setSite(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formDateCreation">
                <Form.Label>Date de Création</Form.Label>
                <Form.Control type="date" value={dateCreation} onChange={(e) => setDateCreation(e.target.value)} />
              </Form.Group>
              {/* ... autres champs pour la première moitié du formulaire */}
            </Form>
          
        </Col>

        <Col md={6}>
          
        <Form>
              
              <Form.Group controlId="formNumNif">
                <Form.Label>Numéro NIF</Form.Label>
                <Form.Control type="text" value={numNif} onChange={(e) => setNumNif(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formNumStat">
                <Form.Label>Numéro Statistique</Form.Label>
                <Form.Control type="text" value={numStat} onChange={(e) => setNumStat(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formStatutLegal">
                <Form.Label>Statut Légal</Form.Label>
                <Form.Control type="text" value={statutLegal} onChange={(e) => setStatutLegal(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formLogo">
                <Form.Label>Logo</Form.Label>
                <Form.Control type="file" onChange={handleLogoChange} />
              </Form.Group>
              <Form.Group controlId="formImageStat">
                <Form.Label>Image Statistique</Form.Label>
                <Form.Control type="file" onChange={handleImageStatChange} />
              </Form.Group>
              <Form.Group controlId="formImageNif">
                <Form.Label>Image NIF</Form.Label>
                <Form.Control type="file" onChange={handleImageNifChange} />
              </Form.Group>
            </Form>
        </Col>
      </Row>
      <div className="buttons">
                <Button variant="primary" type="submit">Enregistrer</Button>
                
              </div>
    </Container>        
        </div>
    );
};

export default Inscription;
