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

import Nav1 from "../Navbars/AdminNavbar";

import Sidebar from "../Sidebar/Sidebar";



import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { Badge, Table, Tab, Tabs, Spinner, Toast, Button } from "react-bootstrap";
import TextField from "@mui/material/TextField";
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
    FaEye, FaSave
} from "react-icons/fa";





function UtilisateurDemande() {
    const history = useHistory();
    //const [image, setImage] = useState(sidebarImage);
    const [color, setColor] = useState("yellow");
    const [iddemande, setIddemande] = useState("");
    const [hasImage, setHasImage] = useState(true);
    const location = useLocation();
    const mainPanel = useRef(null);
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);

    const [showsup, setShowsup] = useState(false);
    const [showsup2, setShowsup2] = useState(false);

    const handleClose2 = () => setShowsup(false);
    const handleShow2 = () => setShowsup(true);



    const handleClose3 = () => setShowsup2(false);
    const handleShow3 = () => setShowsup2(true);


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

        ListeUtilisateur();
    }, []);

    async function ListeUtilisateur() {
        let result = await fetch("http://localhost:8000/api/list");
        result = await result.json();
        setData(result);
        setLoading(false);
    }

    function Passeutilisateuraccepte(id) {
        handleShow2();
        setIddemande(id);

    }


    function Passeutilisateursuprefus(id) {
        handleShow3();
        setIddemande(id);
    }

    async function Acceptdemande(id) {
        try {
            let updateResult = await fetch(`http://localhost:8000/api/validerUnCompte/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
              
            });

            if (updateResult.ok) {
                updateResult = await updateResult.json();
                console.log(updateResult);
                handleClose2();
                ListeUtilisateur();
            } else {
                console.error("Erreur lors de la mise à jour du compte.");
            }
        } catch (error) {
            console.error("Erreur inattendue :", error);
        }
    }


    async function Acceptrefus(id) {
        try {
            let updateResult = await fetch("http://localhost:8000/api/rejeterUnCompte/" + id, {
                method: "DELETE",
                
              
            });

            if (updateResult.ok) {
                updateResult = await updateResult.json();
                console.log(updateResult);
                handleClose3();
                ListeUtilisateur();
            } else {
                console.error("Erreur lors de la mise à jour du compte.");
            }
        } catch (error) {
            console.error("Erreur inattendue :", error);
        }
    }

    return (
        <>
            <div className="wrapper">
                <Sidebar />
                <div className="main-panel" ref={mainPanel}>
                    <Nav1 />
                    <div className="content">

                        <Modal show={showsup} onHide={handleClose2}>
                            <Modal.Header closeButton>


                            </Modal.Header>
                            <Modal.Body>
                                <h5> Vous voulez vraiment accepter cette demande de Compte ?</h5>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button class="btn btn-outline-info" onClick={handleClose2}>
                                    Annuler
                                </Button>


                                <Button
                                    class="btn  btn-outline-danger"
                                    onClick={() => Acceptdemande(iddemande)} >
                                    Accepter
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal show={showsup2} onHide={handleClose3}>
                            <Modal.Header closeButton>


                            </Modal.Header>
                            <Modal.Body>
                                <h5> Vous voulez vraiment refuser cette demande de Compte ?</h5>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button class="btn btn-outline-info" onClick={handleClose3}>
                                    Annuler
                                </Button>


                                <Button
                                    class="btn  btn-outline-danger"
                                    onClick={() => Acceptrefus(iddemande)}
                                >
                                    Accepter
                                </Button>
                            </Modal.Footer>
                        </Modal>



                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    {" "}
                                    <h4 className="text-white text-center bg-info">
                                        Liste de demande en attente
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
                                                <th>Action</th>
                                                
                                                
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
                                                    <td>
                                                  <Button variant="success" onClick={() => Passeutilisateuraccepte(item.id)}>
    <FaCheckCircle /> Accepter la demande
</Button>

<Button variant="danger" onClick={() => Passeutilisateursuprefus(item.id)}>
    <FaTimesCircle /> Refuser la demande
</Button>

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

export default UtilisateurDemande;
