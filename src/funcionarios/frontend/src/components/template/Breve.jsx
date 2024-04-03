import React from 'react';
import './Breve.css';
import MenuLateral from './MenuLateral';

export default props => (
  <div className="container-fluid m-0 p-0 bg-light">
    <div className="row">
      
      <div className="col">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <header className="header">
              <div className="d-grid gap-1 justify-content-center">
                <button className="btn btn-primary rounded-pill" type="button" style={{ width: 1000, fontSize:28,
                 backgroundColor:"#649FBF" }}>Em breve</button>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  </div>
);
