import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import './Footer.css';
import logo2 from './efianara.png';
import { FaUserCircle, FaUserClock, FaEnvelope, FaSignInAlt } from "react-icons/fa";
import Footer from "components/Footer/Footer";


const Footer2 = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const navbarStyle = {
    background: "#2F4F4F", // Couleur de fond bleue
    color: "white", // Couleur du texte blanc
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
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
    <div className="Footer">
    <Navbar style={navbarStyle} expand="lg"  className="Navbar">
      <Navbar.Brand href="/" style={logo}>
        <img
          alt="Logo"
          src={logo2}
          width="30"
          className="d-inline-block align-top"
        />
        E-Fianara
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-center">
      
      
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
      
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default Footer2;
