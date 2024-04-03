import React from "react";
import "./MenuLateral.css";
import { Link } from 'react-router-dom';
import IconUm from "../template/assets/Icone-1.png";
import IconDois from "../template/assets/Icone-2.png";
import IconTre from "../template/assets/Icone-3.png";
import IconQua from "../template/assets/Icone-4.png";
import IconCin from "../template/assets/Icone-5.png";
import IconSei from "../template/assets/Icone-6.png";
import "./MenuLateral.css";

export default props => (
  <div className="col-md-1 bg-light">
    <ul className="nav flex-column" style={{ backgroundColor: '#649FBF', height: "100vh", width: '56px', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: '0 20px 20px 0' }}>
      <li className="nav-item mb-2">
        <Link to="/breve" className="nav-link active"><img src={IconUm} alt="icone de itens" className="icon-elemento" /></Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="../main " className="nav-link"><img src={IconDois} alt="icone de cadastro" className="icon-elemento" /></Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/breve" className="nav-link"><img src={IconTre} alt="icon de ramificação" className="icon-elemento" /></Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/breve" className="nav-link"><img src={IconQua} alt="icone de notificação" className="icon-elemento" /></Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/breve" className="nav-link"><img src={IconCin} alt="icone de prazo" className="icon-elemento" /></Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/breve" className="nav-link"><img src={IconSei} alt="icon de usuário" className="icon-elemento" /></Link>
      </li>
    </ul>
  </div>
);
