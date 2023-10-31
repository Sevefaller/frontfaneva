import React, { useState } from 'react';
import { Typography, Stepper, Step, StepLabel, Button, Paper } from '@mui/material';
import axios from 'axios';

const steps = ['Étape 1', 'Étape 2', 'Étape 3'];

const RegistrationForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    type: '1',
    sectAct: '1',
    nom: '',
    password: '',
    phone: '',
    email: '',
    site: '',
    dateCreation: '',
    numNif: '',
    numStat: '',
    statutLegal: '',
    logo: null,
    imageStat: null,
    imageNif: null,
  });

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

      const response = await axios.post('http://127.0.0.1:8000/api/demande', formDataToSend);
      console.log("Réponse de l'API :", response.data);
      // Traitez la réponse ici

    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      // ok
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{ marginTop: '20px' }}>
        {activeStep === 0 && <StepOne formData={formData} setFormData={setFormData} />}
        {activeStep === 1 && <StepTwo formData={formData} setFormData={setFormData} />}
        {activeStep === 2 && <StepThree formData={formData} setFormData={setFormData} signUp={signUp} />}
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" disabled={activeStep === 0} onClick={handleBack}>
          Précédent
        </Button>
        <Button variant="contained" onClick={handleNext} disabled={activeStep === 2}>
          {activeStep === 2 ? 'Enregistrer' : 'Suivant'}
        </Button>
      </div>
    </Paper>
  );
};

const StepOne = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Typography variant="h6">Étape 1</Typography>
      {/* Vos champs pour l'étape 1 */}
      {/* Exemple de champ : */}
      {/* <input type="text" name="nom" value={formData.nom} onChange={handleChange} /> */}
    </div>
  );
};

const StepTwo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Typography variant="h6">Étape 2</Typography>
      {/* Vos champs pour l'étape 2 */}
    </div>
  );
};

const StepThree = ({ formData, setFormData, signUp }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Typography variant="h6">Étape 3</Typography>
      {/* Vos champs pour l'étape 3 */}
      {/* Exemple de champ : */}
      {/* <input type="file" name="logo" onChange={handleChange} /> */}
      <Button variant="contained" onClick={signUp}>
        Enregistrer
      </Button>
    </div>
  );
};

export default RegistrationForm;
