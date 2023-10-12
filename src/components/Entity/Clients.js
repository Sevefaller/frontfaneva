import React, { useEffect, useState, useRef } from "react";
import { useLocation, Route, Switch, NavLink, Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { Badge, Table, Tab, Tabs, Spinner, Toast } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//import Button from "@material-ui/core/Button";
import Card from "react-bootstrap/Card";

import Headers from "../Navbars/AdminNavbar"
import Sidebar from "../Sidebar/Sidebar"
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

//import Sidebar from "./components/Sidebar/Sidebar";


import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";

function Clients() {
  const utilisateur = JSON.parse(localStorage.getItem("user-info"));
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
      const [image, setImage] = useState(sidebarImage);
  const [color, setColor] = useState("black");
  const [hasImage, setHasImage] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data3, setData3] = useState([]);
  const [show, setShow] = useState(false);
  const [showsup, setShowsup] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShowsup(false);
  const handleShow2 = () => setShowsup(true);

  const [entite, setEntite] = useState("");
//  const [user, setUser] = useState(utilisateur.id);
  const [bouttonpersonne, setBouttonpersonne] = useState("personne");
  const [numentite, setNumentite] = useState("");
  const [personne, setPersonne] = useState(false);
  const [showpersonne, setShowpersonne] = useState(false);
  const [adresseentite, setAdresseentite] = useState("");
  const [refentite, setRefentite] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [entitemodifier, setEntitemodifier] = useState("");
  const [adressemodifier, setAdressemodifier] = useState("");
  const [personnemodifier, setPersonnemodifier] = useState("");
  const [loading, setLoading] = useState(true);
  async function ListeEntite() {
    let result = await fetch("http://localhost:8000/api/listeclients");
    result = await result.json();
    setData(result);
   
    setLoading(false);
  }

  async function ajout_entite() {
    
    const formData = new FormData();
    const formData2 = new FormData();
    if (entite == "" || adresseentite=="") {
      setShow3(true);
    }
    else {
      
    formData.append("nom", entite);
    formData.append("solde", adresseentite);
    formData.append("user", user);
    
   
    let result = await fetch("http://localhost:8000/api/ajoutclients", {
      method: "Post",

      body: formData,
    });

    ListeEntite();
    setShow2(true);
    


    
  } 
    
  }

async function ajoutpersonne(data){

  let result2 = await fetch("http://localhost:8000/api/ajoutpersonne", {
        method: "Post",
  
        body: data,
      });
  

}
  async function Suprimerentite(id) {
    let result = await fetch(
      "http://localhost:8000/api/supprimerclient/" + id,
      {
        method: "DELETE",
      }
    );
    result = await result.json();
    console.log(result);
    handleClose();
    handleClose2();
    ListeEntite();
  }

  async function modifierentite(id) {
    const formData = new FormData();
    formData.append("nom", entitemodifier);
    formData.append("solde", adressemodifier);
    formData.append("user", user);

    let result = await fetch(
      "http://localhost:8000/api/modificationclient/" + id + "?_method=PUT",
      {
        method: "Post",

        body: formData,
      }
    );
    handleClose();

    ListeEntite();
  }

  async function Passeentite(id) {
    handleShow();
    let result = await fetch("http://localhost:8000/api/obtclient/" + id);
    result = await result.json();
    setData1(result);
    setEntitemodifier(result.nom);
    setAdressemodifier(result.solde);
    
  }


  async function Numentite(){
   
    let result2 = await fetch("http://localhost:8000/api/listeentite2");
    result2 = await result2.json();
    if(result2.length==1){
      let refunite = result2[0].refentite
      let h = parseInt(refunite) + 1
      setNumentite(h);
      console.log(numentite);
    }
  
  }

  async function Passeentitesup(id) {
    handleShow2();
    let result = await fetch("http://localhost:8000/api/obtclient/" + id);
    result = await result.json();
    setData3(result);
    
  
  }

  function verifier(id) {
    let a = "mmmm";
    fetch("http://localhost:8000/api/obtientpersonne/" + id)
      .then((res) => res.json())
      .then((donE) => {
        if (donE.length != 0) {
          a = "personne";
        } else {
          a = "non personne";
        }
      });
    //.then(donE=> a = donE)

    /* if(result.length == 0){
      a=false
    }
    else if(result.length != 0){
      a=true
    }

    return a;*/
    console.log(a);
    return a;
  }

  async function verification2(id) {
   
 
   
      let item ={id}
      let result2 = await fetch("http://localhost:8000/api/obtientpersonne",{
        method :"POST",
        headers : {
          'Content-Type':'application/json',
          'Accept':'application/json',
        }, 
        body:JSON.stringify(item)
      });
      result2 = await result2.json();

     if(result2.length!= 0) {
       return false
     }
     
     else{
       return true
     }
    
      
    }

    function afficherformulairepersonne(){
      setPersonne(!personne)
      setShowpersonne(!personne)
      if (bouttonpersonne=="personne"){
        setBouttonpersonne("personne morale")
      }
      if(bouttonpersonne=="personne morale"){
        setBouttonpersonne("personne")
      }
      
    }
      return (
        <>
          <div className="wrapper">
          <Sidebar/>
            <div className="main-panel" ref={mainPanel}>
              <Headers />
              <div className="content">
              <Container>
              <Row>
                <Col sm={8}>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        {" "}
                        <h4 className="text-white text-center bg-info">Liste des clients</h4>
                      </Card.Title>

                      <Card.Text></Card.Text>
                      {loading ? (
                        <Spinner animation="grow" />
                      ) : (
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>numcompte</th>
                              <th>Nom</th>
                              <th>Solde</th>
                              
                              
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((item) => (
                              <tr>
                                <td>C001{item.numcompte}</td>
                                <td>{item.nom}</td>
                                
                                <td>{item.solde}</td>
                               
                                
                              
                                <td>
                                 
                                  <FaCogs
                                    style={{ cursor: "pointer"}}
                                    onClick={() => {
                                      Passeentite(item.numcompte);
                                    }}
                                  />
                                  </td>

                                  <td>
                                 
                                 <FaTrash
                                   style={{ cursor: "pointer" , color:"red"}}
                                   onClick={() => {
                                     Passeentitesup(item.numcompte);
                                   }}
                                 />
                                 </td>
                                  
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      )}

                      
                    </Card.Body>
                  </Card>
                </Col>

                <Col sm={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        {" "}
                        <h4 className="text-white text-center bg-info">Nouveaux clients</h4>
                      </Card.Title>
                      <Card.Text>
                        <TextField
                          value={entite}
                          onChange={(e) => setEntite(e.target.value)}
                          type="text"
                          
                          label="Nom"
                          style={{ margin: 8 }}
                          fullWidth
                          
                        />
  <TextField
                          value={adresseentite}
                          onChange={(e) => setAdresseentite(e.target.value)}
                          type="text"
                          label="Solde"
                          style={{ margin: 8 }}
                          fullWidth
                        />
                        
 
                        
                      



                        
                        <br />
                        <br />
                        <button
                          type="button"
                          onClick={ajout_entite}
                          class="btn btn-block btn-outline-info"
                        >
                          Ajouter
                        </button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
              </div>
              <Modal show={show} onHide={handleClose}>
            
            <Modal.Title class="text-center bg-dark text-white"></Modal.Title>
            
         
          <Modal.Body>
           
            <p class="text-center">Modification</p>
            <TextField
              value={entitemodifier}
              onChange={(e) => setEntitemodifier(e.target.value)}
              type="text"
              className="form-control"
              label="Client"
            />
 <br />
                        <br />
            <TextField
              value={adressemodifier}
              onChange={(e) => setAdressemodifier(e.target.value)}
              type="text"
              className="form-control"
              label="Solde"
            />
             <br />
                        <br />
          </Modal.Body>
          <Modal.Footer>
            <Button class="btn btn-outline-info" onClick={handleClose}>
              Fermer
            </Button>
            <Button
              class="btn  btn-outline-success"
              onClick={() => modifierentite(data1.numcompte)}
            >
              Enregistrer la modification
            </Button>
            <Button
              class="btn  btn-outline-danger"
              onClick={() => Suprimerentite(data1.numcompte)}
            >
              Supprimer
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showsup} onHide={handleClose2}>
        <Modal.Title class="text-center bg-dark text-white"></Modal.Title>
          <Modal.Body>
            <h6> <FaExclamationCircle/> Vous voulez vraiment supprimer ce client</h6>
          </Modal.Body>
          <Modal.Footer>
            <Button class="btn btn-outline-dark" onClick={handleClose2}>
              Fermer
            </Button>
           
            
            <Button
              class="btn  btn-outline-danger"
              onClick={() => Suprimerentite(data3.numcompte)}
            >
              Supprimer
            </Button>
          </Modal.Footer>
        </Modal>

        <Toast
            onClose={() => setShow2(false)}
            show={show2}
            delay={1500}
            autohide
            style={{
              position: "absolute",
              top: 80,
              right: 50,
              backgroundColor: "green",
              color: "white",
            }}
          >
            <Toast.Body variant="danger">
              <FaCheckCircle /> Ajout effectué!
            </Toast.Body>
          </Toast>

          <Toast
            onClose={() => setShow3(false)}
            show={show3}
            delay={1500}
            autohide
            style={{
              position: "absolute",
              top: 20,
              right: 50,
              backgroundColor: "red",
              color: "whitesmoke",
            }}
            animation={true}
          >
            <Toast.Body>
            <FaExclamationTriangle/> ajout non effectués <br/> Veuillez remplir tous les formulaires
            </Toast.Body>
          </Toast>
             
              
            </div>
          </div>
          
        </>
      );
  
}

export default Clients