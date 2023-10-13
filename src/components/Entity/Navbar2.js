import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import './Couverture.css';

const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="Navbar">
      <Navbar.Brand href="/">
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
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Organisation
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">ONG</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Association</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Entreprise</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
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
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Offres
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
      <Nav>
        <Nav.Link key="home" href="/">
          Inscription
        </Nav.Link>
        <Nav.Link key="about" href="/about">
      Se connecter
        </Nav.Link>
       
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar2;
