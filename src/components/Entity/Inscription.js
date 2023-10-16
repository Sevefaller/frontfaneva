import React, { useState, useEffect } from "react";
import './inscription.css'; // Assurez-vous d'avoir ce fichier CSS pour les styles
import logoi from './efianara.png';
import Navbar2 from "./Navbar2";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import api from "./Update";

const divStyle = {
    // Pour assurer que l'image de fond couvre tout l'élément
    backgroundPosition: 'center',
    color: 'black',
    // Vous pouvez également ajouter d'autres styles ici selon vos besoins
};
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
        try {
          const formData = new FormData();
          formData.append("email_org", email);
          formData.append("password", password);
          formData.append("nom_org", nom);
          formData.append("type_org", type);
          formData.append("telephone_org", phone);
          formData.append("siteweb_org", site);
          formData.append("date_creation", dateCreation);
          formData.append("num_nif", numNif);
          formData.append("num_stat", numStat);
          formData.append("statut_legal_org", statutLegal);
          formData.append("logo_org", logo);
          formData.append("imgStat", imageStat);
          formData.append("imgNif", imageNif);
          const response = await axios.post('http://127.0.0.1:8000/api/demande', formData);
          console.log("Réponse de l'API :", response.data);
          // Traitez la réponse ici
      
        } catch (error) {
          console.error("Erreur lors de la requête :", error);
          // Gérez les erreurs ici
        }
      }


    

    return (
        <div className="inscription">
            <Container className="mt-2 mt-md-2 mb-4">
                <Card style={divStyle}>
                    <Container className="mt-2 mt-md-2 mb-4">

                        <Form>
                            <Row>
                                <Col md={6}>

                                    <Form.Group controlId="formType">
                                        <Form.Label>Type organisation</Form.Label>
                                          <h6>Type organisation</h6>
                                     
                                        <Form.Control as="select" value={type} onChange={(e) => setType(e.target.value)}>
                                            <option value="1">Association</option>
                                            <option value="2">ONG</option>
                                            <option value="3">Entreprise</option>
                                            {type}
                                        </Form.Control>
                                    </Form.Group>

                    <Form.Group controlId="formNom">
                      
                      <Form.Label>Nom organisation</Form.Label>
                      <h6>Nom</h6>
                                        <Form.Control type="text" value={nom} onChange={(e) => setNom(e.target.value)} />

                                    </Form.Group>

                                    <Form.Group controlId="formPassword">
                                        <Form.Label>Mot de passe</Form.Label><h6>Mot de passe</h6>
                                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="formPhone">
                                        <Form.Label>Téléphone</Form.Label><h6>Téléphone organisation</h6>
                                        <Form.Control type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email</Form.Label><h6>Email organisation</h6>
                                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="formSite">
                                        <Form.Label>Site</Form.Label><h6>Site web ou Réseaux sociaux</h6>
                                        <Form.Control type="text" value={site} onChange={(e) => setSite(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="formDateCreation">
                                        <Form.Label>Date de Création</Form.Label><h6>Date de Création</h6>
                                        <Form.Control type="date" value={dateCreation} onChange={(e) => setDateCreation(e.target.value)} />
                                    </Form.Group>
                                    {/* ... autres champs pour la première moitié du formulaire */}
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formNumNif">
                                        <Form.Label>Numéro NIF</Form.Label><h6>Numéro NIF</h6>
                                        <Form.Control type="text" value={numNif} onChange={(e) => setNumNif(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="formNumStat">
                                        <Form.Label>Numéro Statistique</Form.Label><h6>Numéro Statistique</h6>
                                        <Form.Control type="text" value={numStat} onChange={(e) => setNumStat(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="formStatutLegal">
  <Form.Label>Statut Légal</Form.Label>
  <Form.Label as="h6">Statut Légal</Form.Label>
  <Form.Control type="text" value={statutLegal} onChange={(e) => setStatutLegal(e.target.value)} />
</Form.Group>

                                    <Form.Group controlId="formLogo">
                                        <Form.Label>Logo</Form.Label><h6>Logo</h6>
                                        <Form.Control type="file" onChange={handleLogoChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formImageStat">
                                        <Form.Label>Image Statistique</Form.Label><h6>Image Statistique</h6>
                                        <Form.Control type="file" onChange={handleImageStatChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formImageNif">
                                        <Form.Label>Image NIF</Form.Label><h6>Image NIF</h6>
                                        <Form.Control type="file" onChange={handleImageNifChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="formImageNif" className="button-group">
                                <Button variant="primary" onClick={signUp} >Enregistrer</Button>
                                <Button href="about" >Retour</Button>
                                
                            </Form.Group>
                        </Form>
                    </Container>
                </Card>
            </Container>
        </div>
    );
};

export default Inscription;
