import axios from 'axios';
const api = {};

//* *************************** DEMANDE ************************************ */

api.addDemande = async (data) => {
    try {
      const response = await fetch('http://localhost:8000/api/demande', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
          // Ajoutez d'autres en-têtes si nécessaire, par exemple, pour l'authentification
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  };
  
  

//************************************************************************* */

//* ********************************* COMPTE  ********************************* */

api.validerCompte = (idUser, updatedData) => {
    return new Promise((resolve, reject) => {
        axios.put(`http://localhost:8000/api/validerUnCompte/${idUser}`, updatedData)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};


api.rejeterCompte = (idUser) => {
    return new Promise((resolve, reject) => {
        axios.delete(`http://localhost:8000/api/rejeterUnCompte/${idUser}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};


api.updateCompte = (idUser, updatedData) => {
    return new Promise((resolve, reject) => {
        axios.post(`http://localhost:8000/api/updateCompte/${idUser}`, updatedData)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};


api.deleteCompte = (idUser) => {
    return new Promise((resolve, reject) => {
        axios.delete(`http://localhost:8000/api/deleteCompte/${idUser}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

// ***************************************************************************


// ******************************  LOGIN ****************************** */

api.login = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/login', data)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

//******************************************************************* */


//******************************** OFFRE ********************************* */

api.addOffre = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/ajoutOffre', data)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

api.updateOffre = (idOffre, updatedData) => {
    return new Promise((resolve, reject) => {
        axios.post(`http://localhost:8000/api/updateOffre/${idOffre}`, updatedData)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

api.deleteOffre = (idOffre) => {
    return new Promise((resolve, reject) => {
        axios.delete(`http://localhost:8000/api/deleteOffre/${idOffre}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

//******************************************************************** */


//********************************* SA  **************************** */

api.addSA = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/ajoutSecteurA', data)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

api.updateSA = (idSA, updatedData) => {
    return new Promise((resolve, reject) => {
        axios.post(`http://localhost:8000/api/updateSecteurA/${idSA}`, updatedData)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};


api.deleteSA = (idSA) => {
    return new Promise((resolve, reject) => {
        axios.delete(`http://localhost:8000/api/deleteSecteurA/${idSA}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

//********************************************************************* */


export default api;