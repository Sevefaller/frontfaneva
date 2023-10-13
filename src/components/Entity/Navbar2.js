import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import './Couverture.css';
import { FaUserCircle, FaUserClock, FaEnvelope, FaSignInAlt } from "react-icons/fa";


const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const navbarStyle = {
    background: "linear-gradient(to right, #3498db, #8258FA, #8e44ad)",
   
    color: "white",
  };

  const dropStyle = {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", 
    color: "white",
    borderRadius: "40px 40px 0 0", // Augmentation de la taille des coins arrondis et bordure en demi-cercle
    padding: "20px", // Ajout de l'espace intérieur pour augmenter la taille
    fontSize: "18px", // Augmentation de la taille de la police
  };
  
  
  
  const linkstyle = {
    color: "white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Ombre de bordure avec une opacité de 0.3
    transition: "color 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Ajout de la transition pour la couleur et l'ombre de bordure
  };
  
  const logo = {
    color: "white",
     // Ajout de la transition pour la couleur et l'ombre de bordure
  };
  

  return (
    <Navbar style={navbarStyle} expand="lg" sticky="top" className="Navbar">
      <Navbar.Brand href="/" style={logo}>
        <img
          alt="Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          width="30"
          className="d-inline-block align-top"
        />
        E-Fianara
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-center">
      
      <Dropdown>
      <Dropdown.Toggle style={dropStyle} id="dropdown-basic">
        Organisation
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">ONG</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Association</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Entreprise</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle style={dropStyle} id="dropdown-basic">
        Secteur Activité
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Santé</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Communication</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Service financier </Dropdown.Item>
        <Dropdown.Item href="#/action-3">vente </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          

        <Dropdown>
      <Dropdown.Toggle style={dropStyle} id="dropdown-basic">
        Offres
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Stage</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Emploi</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
      <Nav>
        <Nav.Link key="home" href="/" style={linkstyle}>
        <FaEnvelope style={{ marginRight: '5px' }} /> Inscription
        </Nav.Link>
        <Nav.Link key="about" href="/about" style={linkstyle}>
        <FaSignInAlt style={{ marginRight: '5px' }} />Se connecter
        </Nav.Link>
       
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar2;
