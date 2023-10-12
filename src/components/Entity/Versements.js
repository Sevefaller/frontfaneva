import React, { useEffect, useState, useRef } from "react";
import { useLocation, Route, Switch, NavLink} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { Badge, Table, Tab, Tabs, Spinner, Toast, Form } from "react-bootstrap";
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

import sidebarImage from "assets/img/sidebar-3.jpg";

function Versements() {
  
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
        Listeretrait();
      }, []);
      const [image, setImage] = useState(sidebarImage);
  const [color, setColor] = useState("black");
  const [hasImage, setHasImage] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
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

  const [a, setA] = useState("");
 // const [b, setB] = useState(utilisateur.id);
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [b, setB] = useState("");
  const [e, setE] = useState("");
  
  const [date, setDate] = useState("");
  const [datemodif, setDatemodif] = useState("");


  async function ListeEntite() {
    let result = await fetch("http://localhost:8000/api/listeclients");
    result = await result.json();
    setData(result);
   
    setLoading(false);
  }

  async function Listeretrait() {
    let result = await fetch("http://localhost:8000/api/listeversements");
    result = await result.json();
    setData4(result);
   
    setLoading(false);
  }

  async function ajout_entite() {
    
    const formData = new FormData();
    const formData2 = new FormData();
    if (entite == "" || adresseentite=="") {
      setShow3(true);
    }
    else {
      
    formData.append("numcompte", entite);
    formData.append("montant_versement", adresseentite);
    formData.append("date", date);
    formData.append("user", user);
    
   
    let result = await fetch("http://localhost:8000/api/ajoutversements", {
      method: "Post",

      body: formData,
    });

    ListeEntite();
    Listeretrait();
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
      "http://localhost:8000/api/supprimerversements/" + id,
      {
        method: "DELETE",
      }
    );
    result = await result.json();
    console.log(result);
    handleClose();
    handleClose2();
    ListeEntite();
    Listeretrait();
  }

  async function modifierentite(id) {
    const formData = new FormData();
    formData.append("numcompte", entitemodifier);
    formData.append("montant_versement", adressemodifier);
    formData.append("date", datemodif);
    formData.append("user", user);

    let result = await fetch(
      "http://localhost:8000/api/modificationversements/" + id + "?_method=PUT",
      {
        method: "Post",

        body: formData,
      }
    );
    handleClose();

    ListeEntite();
    Listeretrait();
  }

  async function Passeentite(id) {
    handleShow();
    let result = await fetch("http://localhost:8000/api/obtclivers/" + id);
    result = await result.json();
    setData1(result);
    setEntitemodifier(result.numcompte);
    setAdressemodifier(result.montant_versement);
    setDatemodif(result.date);
    
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
    let result = await fetch("http://localhost:8000/api/obtclivers/" + id);
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
                        <h4 className="text-white text-center bg-info">Liste des versements</h4>
                      </Card.Title>

                      <Card.Text></Card.Text>
                      {loading ? (
                        <Spinner animation="grow" />
                      ) : (
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>numcompte</th>
                              <th>montant versement</th>
                              <th>date de versement</th>
                              
                              
                            </tr>
                          </thead>
                          <tbody>
                            {data4.map((item) => (
                              <tr>
                                
                                <td>C001{item.numcompte}</td>
                                <td>{item.montant_versement}</td>
                                
                                <td>{item.date}</td>
                               
                                
                              
                                <td>
                                 
                                  <FaCogs
                                    style={{ cursor: "pointer"}}
                                    onClick={() => {
                                      Passeentite(item.idversement);
                                    }}
                                  />
                                  </td>

                                  <td>
                                 
                                 <FaTrash
                                   style={{ cursor: "pointer" , color:"red"}}
                                   onClick={() => {
                                     Passeentitesup(item.idversement);
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
                        <h4 className="text-white text-center bg-info">Versements</h4>
                        

                      </Card.Title>
                      <Card.Text>
                      
                      <Form.Group>
                              <label>Choisir numéro de compte</label>
                              <Form.Control
                                as="select"
                                onChange={(e) => setEntite(e.target.value)}
                              >
                                {data.map((item) => (
                                  <option value={item.numcompte}>
                                    {item.numcompte +' - ' +item.nom} 
                                  </option>
                                ))}
                              </Form.Control>
                             
                            </Form.Group>

                            <Form.Group>
                              <label>Entrez le montant : </label>
                              <Form.Control
                                value={adresseentite}
                                onChange={(e) => setAdresseentite(e.target.value)}
                                type="number"
                                required
                                label="120"
                              ></Form.Control>
                              
                            </Form.Group>

                       
  
                        

                        
                        <Form.Group>
                              <label>Date</label>
                              <Form.Control
                                onChange={(e) => setDate(e.target.value)}
                                type="date"
                                required
                              ></Form.Control>
                             
                            </Form.Group>
                        
                      
                            {date}


                        
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
            <Form.Group>
                              <label>Choisir numéro de compte</label>
                              <Form.Control
                                as="select"
                                onChange={(e) => setEntitemodifier(e.target.value)}
                              >
                                {data.map((item) => (
                                  <option value={item.numcompte}>
                                    {item.numcompte +' - ' +item.nom} 
                                  </option>
                                ))}
                              </Form.Control>
                             {entitemodifier}
                            </Form.Group>

                            <Form.Group>
                              <label>Entrez le montant : </label>
                              <Form.Control
                                value={adressemodifier}
                                onChange={(e) => setAdressemodifier(e.target.value)}
                                type="number"
                                required
                                label="120"
                              ></Form.Control>
                              
                            </Form.Group>

                       
  
                        

                        
                        <Form.Group>
                              <label>Date</label>
                              <Form.Control
                                onChange={(e) => setDatemodif(e.target.value)}
                                type="date"
                                required
                              ></Form.Control>
                             
                            </Form.Group>
                        
                      {datemodif}
            
             <br />
                        <br />
          </Modal.Body>
          <Modal.Footer>
            <Button class="btn btn-outline-info" onClick={handleClose}>
              Fermer
            </Button>
            <Button
              class="btn  btn-outline-success"
              onClick={() => modifierentite(data1.idversement)}
            >
              Enregistrer la modification
            </Button>
            <Button
              class="btn  btn-outline-danger"
              onClick={() => Suprimerentite(data1.idversement)}
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
              onClick={() => Suprimerentite(data3.idversement)}
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

export default Versements