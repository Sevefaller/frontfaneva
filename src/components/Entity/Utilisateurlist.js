/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useEffect, useState, useRef } from "react";
import { useLocation, Route, Switch, withRouter, useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { Badge, Table, Tab, Tabs, Spinner, Toast } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaHome,
  FaAddressBook,
  FaAddressCard,
  FaPhone,
  FaRegUser,
  FaEdit,
  FaExclamationCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaCogs,
  FaMapMarker,
  FaTrash,
  FaEye,FaSave
} from "react-icons/fa";

import Nav1 from "../Navbars/AdminNavbar";

import Sidebar from "../Sidebar/Sidebar";






//import sidebarImage from "../assets/img/sidebar-3.jpg";


function Utilisateurlist() {
  const history = useHistory();
  
  
  //const [image, setImage] = useState(sidebarImage);
  const [color, setColor] = useState("yellow");
  const [hasImage, setHasImage] = useState(true);
  const location = useLocation();
  const mainPanel = useRef(null);
  const [showsup, setShowsup] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClose2 = () => setShowsup(false);
  const handleShow2 = () => setShowsup(true);
  
  const [data, setData] = useState([]);


  useEffect(() => {
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

    ListeUtilisateurAccepte();
    
  }, []);


  async function ListeUtilisateurAccepte() {
    let result = await fetch("http://localhost:8000/api/listAccepte");
    result = await result.json();
    setData(result);

    setLoading(false);
  }
  return (
    <>
      <div className="wrapper">
        <Sidebar/>
        <div className="main-panel" ref={mainPanel}>
          <Nav1 />
          <div className="content">
             <Card>
                            <Card.Body>
                                <Card.Title>
                                    {" "}
                                    <h4 className="text-white text-center bg-info">
                                        Liste des utilisateurs
                                    </h4>
                                </Card.Title>

                                <Card.Text></Card.Text>
                                {loading ? (
                                    <Spinner animation="grow" />
                                ) : (
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Image</th>                                   
                                                <th>Rôle</th>
                                                <th>Status</th>
                                                <th>Type organisation</th>
                                                <th>Nom de l'organisation</th>
                                                <th>Secteur d'activité</th>
                                                <th>Email</th>
                                                <th>Téléphone</th>
                                                <th>Site web ou réseaux sociaux</th>
                                                <th>Date de création</th>
                                                <th>Numéro NIF</th>
                                                <th>Numéro STAT</th>
                                                <th>Statut légal de l'organisation</th>
                                                <th>Province</th>
                                                <th>Région</th>
                                                <th>Adresse</th>
                                                <th>Code postal</th>
                                                <th>Logo de l'organisation</th>
                                                <th>Photo carte NIF</th>
                                                <th>Photo carte STAT</th>
                                               
                                                
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item) => (
                                                <tr>
                                                    <td>
                                                        {" "}
                                                        <img
                                                            style={{ width: 120, height: 80 }}
                                                            src={
                                                                "http://localhost:8000/" +
                                                                item.logo_org
                                                            }
                                                        />
                                                    </td>
                                                    <td>{item.role}</td>
                                                    <td>{item.status}</td>
                                                    <td>{item.type_org}</td>
                                                    <td>{item.nom_org}</td>
                                                    <td>{item.sect_act}</td>
                                                    <td>{item.email_org}</td>
                                                    <td>{item.telephone_org}</td>
                                                    <td>{item.siteweb_org}</td>
                                                    <td>{item.date_creation}</td>
                                                    <td>{item.num_nif}</td>
                                                    <td>{item.num_stat}</td>
                                                    <td>{item.statut_legal_org}</td>
                                                    <td>{item.province}</td>
                                                    <td>{item.region}</td>
                                                    <td>{item.adresse}</td>
                                                    <td>{item.code_postal}</td>
                                                     <td>
                                                        {" "}
                                                        <img
                                                            style={{ width: 120, height: 80 }}
                                                            src={
                                                                "http://localhost:8000/" +
                                                                item.logo_org
                                                            }
                                                        />
                                                    </td>
                                                         <td>
                                                        {" "}
                                                        <img
                                                            style={{ width: 120, height: 80 }}
                                                            src={
                                                                "http://localhost:8000/" +
                                                                item.imgStat
                                                            }
                                                        />
                                                    </td>
                                                      <td>
                                                        {" "}
                                                        <img
                                                            style={{ width: 120, height: 80 }}
                                                            src={
                                                                "http://localhost:8000/" +
                                                                item.imgStat
                                                            }
                                                        />
                                                    </td>
                                                    
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                )}
                            </Card.Body>
                        </Card>
          </div>
          
        </div>
      </div>
      
    </>
  );
}

export default Utilisateurlist;
