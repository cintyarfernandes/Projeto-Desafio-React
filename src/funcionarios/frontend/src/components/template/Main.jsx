import React from "react";
import Container from "./Container";
import Progresso from "./Progresso";
import BotaoProximo from "./BotaoProximo";

export default props => (
  <div className="container-fluid bg-light m-0 p-0">
    <div className="row">

      <div className="col-md-12">
        <div className="container-fluid">
          <div className="row justify-content-start align-items-start">
            <Progresso />
            <Container />
            <BotaoProximo/>

          </div>
        </div>
      </div>
    </div>
  </div>
);