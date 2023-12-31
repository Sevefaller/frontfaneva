import React, { useState } from 'react';
import {Input, Typography, Stepper, Step, StepLabel, Button, Paper, FormControl, InputLabel, TextField, MenuItem, FormHelperText } from '@mui/material';
import Select from '@mui/material/Select';
import axios from 'axios';
import logo from './inscription.jpg';

import Navbar2 from "./Navbar2";
import './Registre.css';
const steps = ['Étape 1', 'Étape 2', 'Étape 3', 'Étape 4'];

import Footer2 from "./Footer2";

const RegistrationForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nom: '',
    type: '1',
    sectAct: '1',
    province: '1',
    region: '1',
    codePostal: '1',
    adresse:'',
    phone: '',
    site: '',
    dateCreation: '',
    numNif: '',
    numStat: '',
    statutLegal: '',
    logo: null,
    imageStat: null,
    imageNif: null,
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;

    setFormData({ ...formData, [name]: file });
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const signUp = async () => {
    try {
      const formDataToSend = new FormData();

      formDataToSend.append("email_org", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("nom_org", formData.nom);
      formDataToSend.append("type_org", formData.type);
      formDataToSend.append("sect_act", formData.sectAct);
      formDataToSend.append("province", formData.province);
      formDataToSend.append("region", formData.region);
      formDataToSend.append("code_postal", formData.codePostal);
      formDataToSend.append("adresse", formData.adresse);
      formDataToSend.append("telephone_org", formData.phone);
      formDataToSend.append("siteweb_org", formData.site);
      formDataToSend.append("date_creation", formData.dateCreation);
      formDataToSend.append("num_nif", formData.numNif);
      formDataToSend.append("num_stat", formData.numStat);
      formDataToSend.append("statut_legal_org", formData.statutLegal);
      formDataToSend.append("logo_org", formData.logo);
      formDataToSend.append("imgStat", formData.imageStat);
      formDataToSend.append("imgNif", formData.imageNif);
      console.log(formDataToSend);
      // ... ajouter les autres champs ici
      const response = await axios.post('http://127.0.0.1:8000/api/demande', formDataToSend);
      console.log("Réponse de l'API :", response.data);
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  };

  return (
   
    <div style={{
     
     
    }}> <Navbar2 />
      
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', marginTop: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '90vh' }}>
    <div style={{ flex: '0 0 60%', paddingRight: '20px' }}>
      <Typography variant="h6" className="inscription-title">Inscription</Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{ marginTop: '20px' }}>
        {activeStep === 0 && <StepOne formData={formData} setFormData={setFormData} />}
        {activeStep === 1 && <StepTwo formData={formData} setFormData={setFormData} handleFileChange={handleFileChange} />}
        {activeStep === 2 && <StepThree formData={formData} setFormData={setFormData}handleFileChange={handleFileChange}  />}
        {activeStep === 3 && <StepFour formData={formData} setFormData={setFormData} handleFileChange={handleFileChange} />}
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" disabled={activeStep === 0} onClick={handleBack}>
          Précédent
        </Button>
        {activeStep === 3 && (
          <Button variant="contained" onClick={signUp}>
            Enregistrer
          </Button>
        )}
        {activeStep !== 3 && (
          <Button variant="contained" onClick={handleNext}>
            Suivant
          </Button>
        )}
      </div>
    </div>
    <div style={{ flex: '0 0 40%' }}>
      <img src={logo} alt="Logo"  style={{ width: '100%', height: 'auto', marginTop:'120px' }} />
    </div>
  </Paper>
  
  
                <Footer2 />
            
  </div>
  
    

    
    
  );
};

const StepOne = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      
      <FormControl fullWidth margin="normal">
        
        <TextField 
          id="email" 
          name="email" 
          type="email" 
          label = "Email"
          value={formData.email} 
          onChange={handleChange} 
          fullWidth 
        />
      </FormControl>


      <FormControl fullWidth margin="normal">
        
        <TextField 
          id="password" 
          name="password" 
          type="password" 
          label = "Mot de passe"
          value={formData.password} 
          onChange={handleChange} 
          fullWidth 
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        
        <TextField 
          id="nom" 
          name="nom" 
          type="text" 
          label = "Nom organisation"
          value={formData.nom} 
          onChange={handleChange} 
          fullWidth 
        />
      </FormControl>

     



      <FormControl fullWidth margin="normal">
      <FormHelperText>Type d'organisation</FormHelperText>
        <Select
          id="type"
          label = "Type organisation"
          name="type"
          value={formData.type}
          
          onChange={handleChange}
          fullWidth
        >
         
          <MenuItem value="1">Association</MenuItem>
          <MenuItem value="2">ONG</MenuItem>
          <MenuItem value="3">Entreprise</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <FormHelperText>Secteur Activité</FormHelperText>
        <Select
          id="sectAct"
          name="sectAct"
          label = "Secteur activité"
          value={formData.sectAct}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="1">Services financières</MenuItem>
          <MenuItem value="2">Technologie de l'information</MenuItem>
          <MenuItem value="3">Education</MenuItem>
          {/* Ajoutez d'autres options ici */}
        </Select>
      </FormControl>
    </div>
  );
};

const StepTwo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
     
      <FormControl fullWidth margin="normal">
       
        <TextField 
          id="phone" 
          name="phone" 
          type="text" 
          label = "Numéro téléphone"
          value={formData.phone} 
          onChange={handleChange} 
          fullWidth 
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField 
          id="site" 
          name="site" 
          type="text" 
          label ="Site web"
          value={formData.site} 
          onChange={handleChange} 
          fullWidth 
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
      <FormHelperText>Date de création : </FormHelperText>
        <TextField 
          id="dateCreation" 
          name="dateCreation" 
          type="date" 
          value={formData.dateCreation} 
          onChange={handleChange} 
          fullWidth 
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField 
          id="numNif" 
          name="numNif" 
          type="text" 
          label = "Numéro NIF"
          value={formData.numNif} 
          onChange={handleChange} 
          fullWidth 
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField 
          id="numStat" 
          name="numStat" 
          type="text" 
          label="Numéro Statistique"
          value={formData.numStat} 
          onChange={handleChange} 
          fullWidth 
        />
      </FormControl>
    </div>
  );
};


const StepThree = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      
      <FormControl fullWidth margin="normal">
      <FormHelperText>Type d'entreprise</FormHelperText>
        <Select
          id="province"
          label = "Province"
          name="province"
          value={formData.province}
          
          onChange={handleChange}
          fullWidth
        >
         
          <MenuItem value="1">Fianarantsoa</MenuItem>
         
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <FormHelperText>Région</FormHelperText>
        <Select
          id="region"
          name="region"
          label = "Région"
          value={formData.region}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="1">Amoron'i Mania</MenuItem>
          <MenuItem value="2">Haute Matsiatra</MenuItem>
          <MenuItem value="3">Vatovavy</MenuItem>
          <MenuItem value="4">Fitovinany</MenuItem>
          <MenuItem value="5">Atsimo-Atsinanana</MenuItem>
          <MenuItem value="6">Ihorombe</MenuItem>
          {/* Ajoutez d'autres options ici */}
        </Select>
      </FormControl>


       <FormControl fullWidth margin="normal">
        <FormHelperText>Code Postal</FormHelperText>
        <Select
          id="codePostal"
          name="codePostal"
          label = "Code postal"
          value={formData.codePostal}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="1">Amoron'i Mania</MenuItem>
          <MenuItem value="2">Haute Matsiatra</MenuItem>
          <MenuItem value="3">Vatovavy</MenuItem>
          <MenuItem value="4">Fitovinany</MenuItem>
          <MenuItem value="5">Atsimo-Atsinanana</MenuItem>
          <MenuItem value="6">Ihorombe</MenuItem>
          {/* Ajoutez d'autres options ici */}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        
        <TextField 
          id="adresse" 
          name="adresse" 
          type="text" 
          label = "Adresse"
          value={formData.adresse} 
          onChange={handleChange} 
          fullWidth 
        />
      </FormControl>
    </div>
  );
};

const StepFour = ({ formData, setFormData, signUp }) => {
  const handleChange = (e) => {
    if (e.target.name === "statutLegal") {
      // Si c'est un champ de texte
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      // Si c'est un champ de fichier
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    }
  };

  return (
    <div>
      <FormControl fullWidth margin="normal">
        <TextField 
          type="text" 
          name="statutLegal"
          label="Statut légal"
          value={formData.statutLegal}
          onChange={handleChange} 
          fullWidth 
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <FormHelperText>Logo</FormHelperText>
        <TextField 
          type="file" 
          name="logo"
          onChange={handleChange} 
          fullWidth 
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <FormHelperText>Image statistique</FormHelperText>
        <TextField 
          type="file" 
          name="imageStat"
          onChange={handleChange} 
          fullWidth 
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <FormHelperText>Image NIF</FormHelperText>
        <TextField
          type="file" 
          name="imageNif"
          onChange={handleChange} 
          fullWidth 
        />
      </FormControl>
    </div>
  );
};




export default RegistrationForm;
