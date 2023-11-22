import "./App.css";
import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";


import Login2 from "components/Entity/Login2";
import RegistrationForm from "components/Entity/RegistrationForm";
import OrganisationListe from "components/Entity/OrganisationListe";
import EditeurListe from "components/Entity/EditeurListe";
import CandidatureListe from "components/Entity/CandidatureListe";
import Inscription from "components/Entity/Inscription";
import Utilisateurlist from "components/Entity/Utilisateurlist";
import UtilisateurDemande from "components/Entity/UtilisateurDemande";
import Main from "./components/Entity/Main";
import OffreList from "components/Entity/Offres/OffreList";
import Clients from "./components/Entity/Clients";
import Register from "./components/Entity/Register";
import Login from "./components/Entity/Login";
import Versements from "./components/Entity/Versements";
import Protection from "./components/Entity/Protected";
import Retrait from "components/Entity/Retrait";
import Couverture from "components/Entity/Couverture";
import About from "components/Entity/About";
import Pagevide from "components/Entity/Pagevide";
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
          <Route path="/">
            <Login2/>
          </Route>
          <Route path="/registration">
            <RegistrationForm/>
          </Route>
          <Route path="/OrganisationListe">
            <OrganisationListe/>
          </Route>
          <Route path="/EditeurListe">
            <EditeurListe/>
          </Route>
           <Route path="/CandidatureListe">
            <CandidatureListe/>
          </Route>
      
          {/* <Route path="/clients">
            <Clients/>
          </Route>
          <Route path="/versements">
            <Versements />
          </Route>
          <Route path="/retraits">
            <Retrait/>
          </Route> */}

          {/* <Route path="/historiqueclient">
            <Historiqueclient/>
          </Route>
          <Route path="/historiqueversement">
            <Historiqueversement/>
          </Route>
          <Route path="/historiqueretrait">
            <Historiqueretrait/>
          </Route>

          <Route path="/couverture">
            <Couverture/>
          </Route> */}

          {/* <Route path="/about">
            <About/>
          </Route> */}

          {/* <Route path="/pagevide">
            <Pagevide/>
          </Route> */}
          {/* <Route path="/Inscription">
            <Inscription/>
          </Route> */}

          {/* <Route path="/pagevideadmin">
            <Main/>
          </Route> */}
{/* 
          <Route path="/listeUtilisateur">
            <Utilisateurlist/>
          </Route> */}

       
          {/* <Route path="/offre">
            <OffreList/>
          </Route> */}


          {/* <Route path="/listeDemandeUtilisateur">
            <UtilisateurDemande/>
          </Route> */}

          {/* <Route path="/">
            <About/>
          </Route> */}
        </Switch>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;

