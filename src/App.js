import "./App.css";
import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";

import Clients from "./components/Entity/Clients";
import Register from "./components/Entity/Register";
import Login from "./components/Entity/Login";
import Versements from "./components/Entity/Versements";
import Protection from "./components/Entity/Protected";
import Retrait from "components/Entity/Retrait";

import Historiqueclient from "./components/Entity/Historiqueclient";
import Historiqueversement from "components/Entity/Historiqueversement";
import Historiqueretrait from "./components/Entity/Historiqueretrait";




//import Ajout_Lieux from "./components/Ajout_Lieux";
//import Home from "./components/Home";
/*import Lieux from "./components/Lieux";
import Domaine from "./components/Domaine";
import Type_domaine from "./components/Type_domaine";
import Email from "./components/Email"
import Contactajout from "./components/Contactajout";
import Entite from "./components/Entite";
import Detailsociete from "./components/Detailsociete";
import Activite from "./components/Activite";
import Main from "./components/Main";
import Production from "./components/Production";
import Ajoutproduction from "./components/Ajoutproduction";
import Ajoutproduit from "./components/Ajoutproduit";
import Unite from "./components/Unite";
import Compte from "./components/Compte";
import Utilisateur from "./components/Utilisateur";
import ProductionJ from "./components/ProductionJ";
import ProductionM from "./components/ProductionM";
import ProductionA from "./components/ProductionA";
import Espece from "./components/Espece";
import Productionhebdo from "./components/Productionhebdo";*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/clients">
            <Clients/>
          </Route>
          <Route path="/versements">
            <Versements />
          </Route>
          <Route path="/retraits">
            <Retrait/>
          </Route>

          <Route path="/historiqueclient">
            <Historiqueclient/>
          </Route>
          <Route path="/historiqueversement">
            <Historiqueversement/>
          </Route>
          <Route path="/historiqueretrait">
            <Historiqueretrait/>
          </Route>

          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;

