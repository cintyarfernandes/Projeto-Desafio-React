import React from "react";
import "./Progresso.css";
import ComponentUm from "../template/assets/Component-1.png";
import ComponentDois from "../template/assets/Component-2.png";
import ComponentTres from "../template/assets/Component-3.png";
import ComponentQuatro from "../template/assets/Component-4.png";
import ComponentCinco from "../template/assets/Component-5.png";
import ComponentSeis from "../template/assets/Component-6.png";
import ComponentSete from "../template/assets/Component-7.png";
import ComponentOito from "../template/assets/Component-8.png";
import ComponentNove from "../template/assets/Component-9.png";
import Linha from "../template/assets/Linha.png";


export default function Progresso(props) {
  return (
  
    <div className="container-fluid">

      <div className="row" style={{ marginRight: "15px", marginLeft: "-5px" }}>
        <div className="col-12 m-0 p-0">
          <div className="container-fluid">
            <div className="row justify-content-start align-items-start">
              <ul className="nav justify-content-center" style={{ backgroundColor: "white", borderRadius: '20px', gap: '25px', marginTop: "30px", marginBottom: "30px", paddingBottom: "10px" }}>
                <li className="nav-item" style={{ zIndex: "1" }}>
                  <a className="nav-link" href="#"><img src={ComponentUm} alt="Menu de etapa 1" className="img-fluid" /></a>
                </li>
                <li className="nav-item" style={{ zIndex: "1" }}>
                  <a className="nav-link" href="#"><img src={ComponentDois} alt="Menu de etapa 2" className="img-fluid" /></a>
                </li>
                <li className="nav-item" style={{ zIndex: "1" }}>
                  <a className="nav-link" href="#"><img src={ComponentTres} alt="Menu de etapa 3" className="img-fluid" /></a>
                </li>
                <li className="nav-item" style={{ zIndex: "1" }}>
                  <a className="nav-link" href="#"><img src={ComponentQuatro} alt="Menu de etapa 4" className="img-fluid" /></a>
                </li>
                <li className="nav-item" style={{ zIndex: "1" }}>
                  <a className="nav-link" href="#"><img src={ComponentCinco} alt="Menu de etapa 5" className="img-fluid" /></a>
                </li>
                <li className="nav-item" style={{ zIndex: "1" }}>
                  <a className="nav-link" href="#"><img src={ComponentSeis} alt="Menu de etapa 6" className="img-fluid" /></a>
                </li>
                <li className="nav-item" style={{ zIndex: "1" }}>
                  <a className="nav-link" href="#"><img src={ComponentSete} alt="Menu de etapa 7" className="img-fluid" /></a>
                </li>
                <li className="nav-item" style={{ zIndex: "1" }}>
                  <a className="nav-link" href="#"><img src={ComponentOito} alt="Menu de etapa 8" className="img-fluid" /></a>
                </li>
                <li className="nav-item" style={{ zIndex: "1" }}>
                  <a className="nav-link" href="#"><img src={ComponentNove} alt="Menu de etapa 9" className="img-fluid" /></a>
                </li>
                <li className="nav-item" style={{ marginTop: '-110px', zIndex: "0" }}>
                  <a className="nav-link" href="#"><img src={Linha} alt="Linha de transição da etapa" className="img-fluid" /></a>
                </li>
              </ul>           
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}
