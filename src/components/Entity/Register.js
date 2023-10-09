import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


function Register() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("./clients");
    }
  }, []);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("Administrateur");
  const [image_utilisateur, setImage_utilisateur] = useState("");
  const history = useHistory();
  async function signUp() {
    let item = { name, password, email, image_utilisateur};
    const formData = new FormData();
    formData.append("nom", name);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("image_utilisateur", image_utilisateur);
    formData.append("type", type);
    
console.log(item)
    let result = await fetch("http://localhost:8000/api/Registre", {
      method: "Post",
      
      body:formData,
    });
    result = await result.json();
    console.warn("result", result);
    
  }

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>User Signup</h1>
        <label>Nom</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <label>Email</label>
        <input
          type="text"
          alue={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
        <br />
        <label>type</label>
        <select  alue={type}
          onChange={(e) => setType(e.target.value)}
          className="form-control">
          <option value="Administrateur">
        Administrateur
          </option>
          <option value="Utilisateur_simple">
        Utilisateursimple
          </option>
        </select>
        <br />
        <label>Image</label>
        <input
                    onChange={(e) => setImage_utilisateur(e.target.files[0])}
                    type="file"
                    className="form-control"
                    label="image"
                    required
                  />
        <button onClick={signUp} className="btn btn-primary">
          Enregistrer
        </button>
      </div>
    </>
  );
}

export default Register;
