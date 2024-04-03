import React, { useState, useEffect } from 'react';
import Form from './Form';
import FuncionarioCard from './FuncionarioCard';
import { Switch } from 'antd'; 
import db from '../../db.json';
import "./Addfuncionario.css"

function Addfuncionario() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarGradeFuncionarios, setMostrarGradeFuncionarios] = useState(true);
  const [mostrarBotoesAdicionar, setMostrarBotoesAdicionar] = useState(true);
  const [funcionarios, setFuncionarios] = useState(db.users);
  const [filtroAtivos, setFiltroAtivos] = useState(false);
  const [funcionariosFiltrados, setFuncionariosFiltrados] = useState([]);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);
  const [switchSelecionado, setSwitchSelecionado] = useState(false); 

  const handleClick = () => {
    setMostrarFormulario(true);
    setMostrarGradeFuncionarios(false);
    setMostrarBotoesAdicionar(false);
  };

  const handleVoltar = () => {
    setMostrarFormulario(false);
    setMostrarGradeFuncionarios(true);
    setMostrarBotoesAdicionar(true);
    setFuncionarioSelecionado(null);
  };

  const suaFuncaoAdicionarFuncionario = (novoFuncionario) => {
    setFuncionarios([...funcionarios, novoFuncionario]); 
    handleVoltar(); 
  };

  useEffect(() => {
    if (filtroAtivos) {
      const ativos = funcionarios.filter(funcionario => funcionario.status === 'Ativo');
      setFuncionariosFiltrados(ativos);
    } else {
      setFuncionariosFiltrados(funcionarios);
    }
  }, [funcionarios, filtroAtivos]);

  const filtrarFuncionariosAtivos = () => {
    setFiltroAtivos(true);
  };

  const limparFiltro = () => {
    setFiltroAtivos(false);
  };

  const handleAlterar = (id) => {
    const funcionario = funcionarios.find(funcionario => funcionario.id === id);
    setFuncionarioSelecionado(funcionario);
    setMostrarFormulario(true);
    setMostrarGradeFuncionarios(false);
    setMostrarBotoesAdicionar(false);
  };

  const handleExcluir = (id) => {
    const funcionariosRestantes = funcionarios.filter(funcionario => funcionario.id !== id);
    setFuncionarios(funcionariosRestantes);
  };

  return (
    <div className="container-fluid m-0 p-0 bg-white">
      <div className='row container-fluid m-0 p-0 '>
        <div className='col container-fluid m-0 p-0'>
          <div className='funcionario' >Funcionário(s)</div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          {!mostrarFormulario && (
            <button className="btn btn-outline-primary mb-3 py-3" style={{ width: "100%", height:"70px", borderRadius: "13px" }} onClick={handleClick}>+ Adicionar Funcionário</button>
          )}
          {mostrarFormulario && (
            <>
              <button className="btn btn-primary mb-3 " style={{ width: "100%" }} onClick={handleVoltar}>Voltar</button>
              <Form adicionarFuncionario={suaFuncaoAdicionarFuncionario} funcionario={funcionarioSelecionado} />
            </>
          )}
        </div>
      </div>

      {mostrarBotoesAdicionar && (
        <div className='row'>
          <div className='col d-flex justify-content-between'>
            <button className="btn btn-outline-primary me-4" style={{ width: "192px", height:"36px",borderRadius: "10px", gap:"10px" }} onClick={filtrarFuncionariosAtivos}>Ver apenas ativos</button>
            <button className="btn btn-outline-primary" style={{ width: "192px", height:"36px",borderRadius: "10px", gap:"10px", color:"#959595" }} onClick={limparFiltro}>Limpar filtros</button>
            <p>Ativos {funcionarios.filter(funcionario => funcionario.status === 'Ativo').length}/{funcionarios.length}</p>
          </div> 
        </div>
      )}

      {mostrarGradeFuncionarios && (
        <div className="row mt-3">
          <div className="col">
            {funcionariosFiltrados.map(funcionario => (
              <div className="col-md-12" key={funcionario.id}>
                <FuncionarioCard 
                  funcionario={funcionario} 
                  onAlterar={() => handleAlterar(funcionario.id)} 
                  onExcluir={() => handleExcluir(funcionario.id)} 
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Addfuncionario;