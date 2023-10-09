
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaUserCircle, FaUserClock } from "react-icons/fa";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Toast,
} from "react-bootstrap";
function Login() {
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [type, setType] = useState("Administrateur");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("./Clients");
    }
  }, []);

  async function login() {
    let item = { nom, type, password };
    let result = await fetch("http://localhost:8000/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.log(result);

    if (!result.error) {
      console.log(result);
      localStorage.setItem("user-info", JSON.stringify(result));
      if (type == 'Administrateur') {
        history.push("/historiqueclient");
      } else {
        history.push("/Clients");
      }
      
    } else {
      alert(result.error);
    }
  }

  return (
    <>
      <div className="content login">
        <Container>
          <div className="form">
            <Row className="lignehome">
              <Col className="loginform" md={{ span: 6, offset: 3 }}>
                <div class="text-center" style={{ padding: 8 }}>
                  <Row>
                    <Col sm={2}>
                      
                    </Col>
                    <Col sm={10}>
                      <h6 style={{ marginTop: 14, fontSize: 18 }}>
                        GESTION BANCAIRE
                      </h6>
                    </Col>
                  </Row>
                  <hr />
                </div>

                <h4 className="text-center">
                  <FaUserCircle /> <br />
                  S'hautentifier
                </h4>
                <label>Nom d'utilisateur</label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="form-control"
                />
                <br />
                <label>Mot de passe</label>
                <input
                  type="password"
                  alue={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
                <br />
                <br />

                <label>Catégorie</label>
                <select
                  alue={type}
                  onChange={(e) => setType(e.target.value)}
                  className="form-control"
                >
                  <option value="Administrateur">Administrateur</option>
                  <option value="Utilisateur_simple">Simple utilisateur</option>
                </select>
                <br />

                
                <button onClick={login} className="btn btn-primary btn-block">
                  Se connecter
                </button>

                <hr />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Login;
