import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Button,
  Modal,
  TextField,
} from '@mui/material';

const OffreList = () => {
  const [offres, setOffres] = useState([]);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedOffre, setSelectedOffre] = useState(null);
  const [editedOffre, setEditedOffre] = useState({
    type_offre: '',
    titre_offre: '',
    description: '',
  });

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newOffre, setNewOffre] = useState({
    type_offre: '',
    titre_offre: '',
    user_id:'1',
    description: '',
  });

  const fetchOffres = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/listOBE/1'); // Remplacez 1 par l'ID de l'utilisateur actuel
    setOffres(response.data);
  };

  useEffect(() => {
    fetchOffres();
  }, []);

  const deleteOffre = async () => {
    if (selectedOffre) {
      await axios.delete(`http://127.0.0.1:8000/api/deleteOffre/${selectedOffre.id}`);
      setOffres(offres.filter((offre) => offre.id !== selectedOffre.id));
      setDeleteModalOpen(false);
    }
  };

  const handleEdit = (offre) => {
    setSelectedOffre(offre);
    setEditedOffre({
      type_offre: offre.type_offre,
      titre_offre: offre.titre_offre,
      description: offre.description,
    });
    setEditModalOpen(true);
  };

  const handleEditSave = async () => {
    await axios.post(`http://127.0.0.1:8000/api/updateOffre/${selectedOffre.id}`, editedOffre);
    setEditModalOpen(false);
    fetchOffres();
  };

  const ajouterOffre = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/ajoutOffre', newOffre);
      setAddModalOpen(false);
      fetchOffres();
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'offre :', error);
      // Gérez l'erreur ici, affichez un message d'erreur à l'utilisateur si nécessaire
    }
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {offres.map((offre) => (
        <Card key={offre.id} style={{ margin: '10px', minWidth: '200px' }}>
          <CardContent>
            <h2>Type: {offre.type_offre}</h2>
            <h3>Titre: {offre.titre_offre}</h3>
            <p>Description: {offre.description}</p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEdit(offre)}
              style={{ marginRight: '10px' }}
            >
              Modifier
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setSelectedOffre(offre);
                setDeleteModalOpen(true);
              }}
            >
              Supprimer
            </Button>
          </CardContent>
        </Card>
        
      ))}
      <Button variant="contained" color="primary" onClick={() => setAddModalOpen(true)}>
        Ajouter Offre
      </Button>

      <Modal open={addModalOpen} onClose={() => setAddModalOpen(false)}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h2>Ajouter une nouvelle offre</h2>
          <TextField
            label="Type d'offre"
            variant="outlined"
            fullWidth
            value={newOffre.type_offre}
            onChange={(e) => setNewOffre({ ...newOffre, type_offre: e.target.value })}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Titre d'offre"
            variant="outlined"
            fullWidth
            value={newOffre.titre_offre}
            onChange={(e) => setNewOffre({ ...newOffre, titre_offre: e.target.value })}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={newOffre.description}
            onChange={(e) => setNewOffre({ ...newOffre, description: e.target.value })}
            style={{ marginBottom: '20px' }}
          />
          <Button variant="contained" onClick={ajouterOffre} style={{ marginRight: '10px' }}>
            Ajouter
          </Button>
          <Button variant="contained" onClick={() => setAddModalOpen(false)}>
            Annuler
          </Button>
        </div>
      </Modal>

<Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <h2>Confirmez la suppression</h2>
    <Button variant="contained" onClick={deleteOffre} style={{ marginRight: '10px' }}>
      Oui
    </Button>
    <Button variant="contained" onClick={() => setDeleteModalOpen(false)}>
      Annuler
    </Button>
  </div>
</Modal>


      <Modal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h2>Modifier l'offre</h2>
          <TextField
            label="Type d'offre"
            variant="outlined"
            fullWidth
            value={editedOffre.type_offre}
            onChange={(e) => setEditedOffre({ ...editedOffre, type_offre: e.target.value })}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Titre d'offre"
            variant="outlined"
            fullWidth
            value={editedOffre.titre_offre}
            onChange={(e) => setEditedOffre({ ...editedOffre, titre_offre: e.target.value })}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={editedOffre.description}
            onChange={(e) => setEditedOffre({ ...editedOffre, description: e.target.value })}
            style={{ marginBottom: '20px' }}
          />
          <Button variant="contained" onClick={handleEditSave} style={{ marginRight: '10px' }}>
            Enregistrer
          </Button>
          <Button variant="contained" onClick={() => setEditModalOpen(false)}>
            Annuler
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default OffreList;
