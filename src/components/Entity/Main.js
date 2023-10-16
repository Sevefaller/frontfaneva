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






//import sidebarImage from "../assets/img/sidebar-3.jpg";


function Main() {
  const history = useHistory();
  
  
  //const [image, setImage] = useState(sidebarImage);
  const [color, setColor] = useState("yellow");
  const [hasImage, setHasImage] = useState(true);
  const location = useLocation();
  const mainPanel = useRef(null);

  



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
  }, [location]);
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

export default Main;
