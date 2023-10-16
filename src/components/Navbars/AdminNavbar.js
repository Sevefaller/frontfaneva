/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button, Image } from "react-bootstrap";
import {FaEllipsisV, FaUser} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import { useHistory } from "react-router-dom";

import routes from "routes.js";

function Header() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };
  const history = useHistory();
  
  function logout() {
    localStorage.clear();
    history.push("/about");
   
  }

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <FaEllipsisV/>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            
           
            <Nav.Item>
              <Nav.Link
                className="m-0 text-success text-center"
                
              
              >
                <i className="nc-icon nc-zoom-split"></i>
                <span className="d-lg-block" style={{fontSize:25}}><b>E fianara</b></span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto" navbar>
           
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                aria-expanded={false}
                aria-haspopup={true}
                as={Nav.Link}
                data-toggle="dropdown"
                id="navbarDropdownMenuLink"
                variant="default"
                className="m-0"
              >
                <span className="no-icon"><FaUser/> Compte</span>
              </Dropdown.Toggle>
              <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                <Dropdown.Item
                  
                  
                >
                  <NavLink to="/versments"  className="m-0">
                  Profil
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item
                  
                  onClick={logout}
                  className="m-0" >
                  Déconnection
                </Dropdown.Item>
               
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item>
              
                
              {localStorage.getItem("user-info") ? (
              <Nav.Link
                className="m-0"
                
                
              >
                <span className="no-icon"> <Image src={"http://localhost:8000/" + user.image_utilisateur} style={{width:60, height:40}} roundedCircle /></span>
              </Nav.Link> ) : null}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
