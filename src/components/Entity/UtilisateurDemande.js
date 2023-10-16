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
//import Button from "@mui/material/Button";
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
    FaExclamationTriangle,
    FaCogs,
    FaMapMarker,
    FaTrash,
    FaEye, FaSave
} from "react-icons/fa";



//import sidebarImage from "../assets/img/sidebar-3.jpg";


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
        let result = await fetch("http://localhost:8000/api/listAccepte");
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
            let updateResult = await fetch("http://localhost:8000/api/validerUnCompte", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: iddemande, status: "ok" }),
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
            let updateResult = await fetch("http://localhost:8000/api/rejeterUnCompte", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: iddemande, status: "ok" }),
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
                                    onClick={() => Acceptdemande(id)}
                                >
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
                                    onClick={() => Acceptrefus(id)}
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
                                                <th>Nom</th>
                                                <th>Email</th>
                                                <th>Catégorie</th>
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
                                                    <td>{item.nom_org}</td>
                                                    <td>{item.email_org}</td>
                                                    <td>{item.email_org}</td>

                                                    <td>
                                                        <Button variant="success" onClick={Passeutilisateuraccepte(item.id)}>
                                                            <FaCheckCircle /> Accepter la demande
                                                        </Button>

                                                        <Button variant="danger" onClick={Passeutilisateursuprefus(item.id)}>
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
