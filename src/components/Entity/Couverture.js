import React from 'react';
import { Link } from 'react-router-dom';
import './Couverture.css';

const Couverture = () => {
  return (
    <div className="app-container">
      <div className="text-container">
        <div className="text-animation">e.fianara.com</div>
      </div>
      <div className="couverture">
        <div className="bouton-container">
          <Link to="/lien">
            <button className="bouton-3d">Commencer</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Couverture;
