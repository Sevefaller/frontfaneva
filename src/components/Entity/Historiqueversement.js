import React, { useEffect, useState, useRef } from "react";
import { useLocation, Route, Switch, NavLink} from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Container from "react-bootstrap/Container";
import Headers from "../Navbars/AdminNavbar"
import Sidebar from "../Sidebar/Sidebar"
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import {
  FaEnvelope,
  FaHome,
  FaAddressBook,
  FaAddressCard,
  FaPhone,
  FaRegUser,
  FaEdit,
  FaExclamationCircle,
  FaCheckCircle, FaExclamationTriangle, FaCogs, FaMapMarker, FaTrash, FaEye
} from "react-icons/fa";

import TextField from '@mui/material/TextField';

function Historiqueversement() {
    const location = useLocation();
    const mainPanel = React.useRef(null);
  
    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainPanel.current.scrollTop = 0;
        if (
          window.innerWidth < 993 &&
          document.documentElement.className.indexOf("nav-open") !== -1
        ) {
          document.documentElement.classList.toggle("nav-open");
          var element = document.getElementById("bodyClick");
          element.parentNode.removeChild(element);
        }
        ListeEntite();
      }, []);


      const [data, setData] = useState([]);

      async function ListeEntite() {
        let result = await fetch("http://localhost:8000/api/auditversements");
        result = await result.json();
        setData(result);
       
        setLoading(false);
      }

      function Etat(etat) {  
        if (etat=='insertion') {
          return "primary"
        } 

        if (etat=='Modification') {
          return "warning"
        } 

        if (etat=='Suppression') {
          return "danger"
          
        }
        
    }
function Etat2(etat, a, b, c, d, e, f, g, h, i, j, k) {

  if (etat=='insertion') {
    return ' Utilisateur ID : ' + a +' , Numéro  de versements : ' + b + '\n \n,  montant versé : ' + c + ' solde précedement : ' + i +' Total = '+ j  + ' , date : ' + convertirdate(k)
   
  } 

  if (etat=='Modification') {
    
    return ' Utilisateur ID : ' + a +' , Numéro  de versements : ' + b + '\n \n,  montant versé : ' + c + ' solde précedement : ' + i +' Total = '+ j  + ' , date : ' + convertirdate(k)
  } 

  if (etat=='Suppression') {
    return ' Utilisateur ID : ' + a +' ,  Numéro  de versements : ' + b +'\n \n,  montant supprimé : ' + c + ' solde précedement : ' + i +' Total = '+ j  + ' , date : ' + convertirdate(k)
    
  }
  
}
function convertirdate(date) {
  let today, annee, listeMois, mois, listeJours, jourNumero, jourNom, heures, minutes, secondes, deuxchiffres, resultat;
  today = new Date(date);
  annee = today.getFullYear();
  listeMois = ["janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  mois = listeMois[today.getMonth()];
  jourNumero = today.getDate();
  listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  jourNom = listeJours[today.getDay()];

  deuxchiffres = function(element) {
      if (element < 10) {
          return element = "0" + element
      } else {
          return element;
      }
  }
  heures = deuxchiffres(today.getHours());
  minutes = deuxchiffres(today.getMinutes());
  secondes = deuxchiffres(today.getSeconds());

  resultat = jourNom + "," + jourNumero + " " + mois + " " + annee
  console.log(resultat);

  return resultat;


  

}
const [filtreproduit, setFiltreproduit] = useState("");

const filtre = data.filter((item) => {
  return (
    item.action.toLowerCase().includes(filtreproduit.toLowerCase()) ||
    item.nomuser.toLowerCase().includes(filtreproduit.toLowerCase())
  );
});



      return (
        <>
          <div className="wrapper">
          <Sidebar/>
            <div className="main-panel" ref={mainPanel}>
              <Headers />
              <div className="content">
              <Container>
              <h2 style={{textAlign:'center'}}>Historique des versements</h2>
              <TextField
                id="outlined-basic"
                label="Rechercher"
                fullWidth
                onChange={(e) => setFiltreproduit(e.target.value)}
              />
 <br />
                        <br />

              <Card>
              {filtre.map((item) => (
                




<Card.Body>
<Alert variant={Etat(item.action) }> 


<Card.Title>{item.action} </Card.Title>
<Card.Text>
 {
  Etat2(item.action, item.nomuser, item.idclient, item.ancien_montant , item.nouveau_montant, item.ancien_numcompte, item.nouveau_numcompte, item.ancien_date, item.nouveau_date, item.ancien_solde, item.nouveau_solde, item.datepub)
 }
</Card.Text>

 </Alert>

</Card.Body>






))}
      
    </Card>

    
                </Container>
                
              </div>
              
             
              
            </div>
          </div>
          
        </>
      );
}

export default Historiqueversement