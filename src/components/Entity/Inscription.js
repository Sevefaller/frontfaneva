import React, { useState, useEffect } from "react";
import './inscription.css'; // Assurez-vous d'avoir ce fichier CSS pour les styles
import logoi from './efianara.png';
import Navbar2 from "./Navbar2";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import api from "./Update";

const divStyle = {
    // Pour assurer que l'image de fond couvre tout l'élément
    color: 'black',
    background: "linear-gradient(to right, #3498db, #8258FA, #8e44ad)",
    
    // Vous pouvez également ajouter d'autres styles ici selon vos besoins
};
const Inscription = () => {
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [nom, setNom] = useState("");
    const [type, setType] = useState("1");
    const [sectAct, setSectAct] = useState("1");
    const [province, setProvince] = useState("");
    const [region, setRegion] = useState("");
    const [adresse, setAdresse] = useState("");
    const [codePostal, setCodePostal] = useState("");
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
          formData.append("sect_act", sectAct);
          formData.append("province", province);
          formData.append("region", region);
          formData.append("adresse", adresse);
          formData.append("code_postal", code_postal);
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
                                       
                                     
                                        <Form.Control as="select" value={type} onChange={(e) => setType(e.target.value)}>
                                            <option value="1">Association</option>
                                            <option value="2">ONG</option>
                                            <option value="3">Entreprise</option>
                                            {type}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="formsectAct">
                                        <Form.Label>Secteur Activité</Form.Label>
                                        <Form.Control as="select" value={sectAct} onChange={(e) => setSectAct(e.target.value)}>
                                            <option value="1">Services financières</option>
                                            <option value="2">Technologie de l'information</option>
                                            <option value="3">Education</option>
                                            <option value="4">Fabrication</option>
                                            <option value="5">Services professionnels</option>
                                            <option value="6">Energie</option>
                                            <option value="7">Immobilier</option>
                                            <option value="8">Transport et logistique</option>
                                            <option value="9">Restauration</option>
                                            <option value="10">Divertissement et médias</option>
                                            <option value="11">Agriculture</option>
                                            <option value="12">Environnement</option>
                                            <option value="13">Tourisme et hôtellerie</option>
                                            <option value="14">Télécommunications</option>
                                            <option value="15">Mode et textile</option>
                                            <option value="16">Informatique</option>
                                            <option value="17">Social</option>
                                            {sectAct}
                                        </Form.Control>
                                    </Form.Group>

                    <Form.Group controlId="formNom">
                      
                      <Form.Label>Nom organisation</Form.Label>
                     
                                        <Form.Control type="text" value={nom} onChange={(e) => setNom(e.target.value)} />

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
                                        <Form.Label>Site ou Réseaux sociaux</Form.Label>
                                        <Form.Control type="text" value={site} onChange={(e) => setSite(e.target.value)} />
                                    </Form.Group>
                                    
                                            <Form.Group controlId="formProvince">
                                        <Form.Label>Province</Form.Label>
                                        <Form.Control as="select" value={province} onChange={(e) => setProvince(e.target.value)}>
                                            <option value="1">Fianarantsoa</option>
                                            {province}
                                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formRegion">
                                        <Form.Label>Région</Form.Label>
                                        <Form.Control as="select" value={region} onChange={(e) => setRegion(e.target.value)}>
                                            <option value="1">Amoron'i Mania</option>
                                            <option value="2">Haute Matsiatra</option>
                                            <option value="3">Vatovavy</option>
                                            <option value="4">Fitovinany</option>
                                            <option value="5">Atsimo-Atsinanana</option>
                                            <option value="6">Ihorombe</option>
                                            {region}
                                        </Form.Control>
                                    </Form.Group>
                                    {/* ... autres champs pour la première moitié du formulaire */}
                  </Col>
                  
                  <Col md={6}>
                           <Form.Group controlId="formAdresse">
                                        <Form.Label>Adresse</Form.Label>
                                        <Form.Control type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
                    </Form.Group>
                     <Form.Group controlId="formCodePostal">
                                        <Form.Label>Code Postal</Form.Label>
                                        <Form.Control as="select" value={codePostal} onChange={(e) => setCodePostal(e.target.value)}>
                                            <option value="1">301</option>
                                            <option value="2">302</option>
                                            <option value="3">303</option>
                                            <option value="4">303</option>
                                            <option value="5">304</option>
                                            <option value="6">305</option>
                                            <option value="6">306</option>
                                            <option value="6">307</option>
                                            <option value="6">308</option>
                                            <option value="6">309</option>
                                            <option value="6">310</option>
                                            <option value="6">311</option>
                                            <option value="6">312</option>
                                            <option value="6">313</option>
                                            <option value="6">314</option>
                                            <option value="6">315</option>
                                            <option value="6">316</option>
                                            <option value="6">317</option>
                                            <option value="6">318</option>
                                            <option value="6">319</option>
                                            <option value="6">320</option>
                                            <option value="6">321</option>
                                            <option value="6">322</option>
                                            <option value="6">323</option>
                                            {codePostal}
                                        </Form.Control>
                                    </Form.Group>
                    <Form.Group controlId="formDateCreation">
                                        <Form.Label>Date de Création</Form.Label>
                                        <Form.Control type="date" value={dateCreation} onChange={(e) => setDateCreation(e.target.value)} />
                                    </Form.Group>
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
                                        <Form.Control type="file" onChange={handleImageNifChange}  placeholder="Veuillez ajouter ceci le photo de votre NIF"/>
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
