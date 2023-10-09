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
import { useLocation, NavLink, Link } from "react-router-dom";

import { Nav } from "react-bootstrap";

import logo from "assets/img/reactlogo.png";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const utilisateur = JSON.parse(localStorage.getItem("user-info"));
  const [user, setUser] = useState(utilisateur.type);
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-color="black">
    <div
      className="sidebar-background"
      style={{
        backgroundColor: "green",
      }}
    />
    <div className="sidebar-wrapper">
      <div className="logo d-flex align-items-center justify-content-start">
        <a
         
          className="simple-text logo-mini mx-1"
        >
          
        </a>
        <a className="simple-text">
          BANK
        </a>
      </div>
      <Nav>

      {user == 'Utilisateur_simple' ? (

<>
<li>
        <Link to="/clients" className="nav-link">
          
         <p>Clients</p>
        </Link>
      </li>
      <li>
        <Link to="/versements" className="nav-link">
          
         <p> Versements</p>
        </Link>
      </li>

      <li>
        <NavLink to="/retraits" className="nav-link">
          
         <p> Retrait</p>
        </NavLink>
      </li>

</>
        
               ) : (
               
                <>
                <li>
                <NavLink to="/historiqueclient" className="nav-link">
                  
                 <p> Historique sur les clients</p>
                </NavLink>
              </li><li>
                <NavLink to="/historiqueversement" className="nav-link">
                  
                 <p>Historique sur les versements </p>
                </NavLink>
              </li><li>
                <NavLink to="/historiqueretrait" className="nav-link">
                  
                 <p>Historique sur les retraits </p>
                </NavLink>
              </li>
                </>
               

               )}
      

        



      </Nav>
    </div>
  </div>
);
  
}

export default Sidebar;
