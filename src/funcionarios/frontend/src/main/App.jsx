import React from 'react';
import "./App.css";
import Main from "../components/template/Main";
import Breve from '../components/template/Breve';
import Progresso from '../components/template/Progresso';
import BotaoProximo from '../components/template/BotaoProximo';
import MenuLateral from '../components/template/MenuLateral';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <MenuLateral /> 
            <div className="col-md-11 col-lg-10 col-xl-11"> 
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/main" element={<Main />} />
                <Route path="/breve" element={<Breve />} />
                <Route path="/progresso" element={<Progresso />} />
                <Route path="/botao-proximo" element={<BotaoProximo />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
