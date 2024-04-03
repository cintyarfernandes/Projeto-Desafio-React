import React from "react";
import "./Container.css";
import Imagem from "../template/assets/Vector.png"
import Addfuncionario from "./Addfuncionario";


export default props =>

    <div class="container-fluid m-0 p-0">

        <div className="row">
            <div className="col-3 texto" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit suscipit porttitor.
                Suspendisse ex lorem, rhoncus nec ante eu, venenatis aliquam turpis. Nulla facilisi.
                Curabitur nec mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut at
                tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec
                justo eget, luctus scelerisque.
                <img src={Imagem} alt="imagem de sombra de uma pessoa" className='imagem-vector img-fluid' />
            </div>
            <div className="col-8">
                <div className="container-fluid ">
                    <Addfuncionario />
                </div>
            </div>
        </div>
    </div>
