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

    ListeUtilisateur();
    
  }, []);


  async function ListeUtilisateur() {
    let result = await fetch("http://localhost:8000/api/ListeUtilisateur");
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
          </div>
          
        </div>
      </div>
      
    </>
  );
}

export default Utilisateurlist;
