import React from 'react';
import { Dropdown, Menu, Button, Switch, notification } from 'antd';
import "./FuncionarioCard.css";

function FuncionarioCard({ funcionario, onExcluir, onAlterar, mostrarFormulario }) {
  const handleAlterar = () => {
    onAlterar(funcionario.id);
  };

  const handleExcluir = () => {
    onExcluir(funcionario.id);
    notification.success({
      message: 'Sucesso',
      description: `Usuário ${funcionario.name} excluído com sucesso!`,
      duration: 3 
    });
  };

  const menu = (
    <Menu>
      <Menu.Item key="2" onClick={handleAlterar}>Alterar</Menu.Item>
      <Menu.Item key="1" onClick={handleExcluir}>Excluir</Menu.Item>
    </Menu>
  );

  return (
    <div className={`card ${mostrarFormulario ? 'd-none' : ''}`}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{funcionario.name}</h5>
          <div className="d-flex">
            <p className="card-text me-3 mb-2">{funcionario.value}</p>
            <p className="card-text me-3 mb-2">{funcionario.cpf}</p>
            <p className='card-text me-3 mb-2'>{funcionario.status}</p>
            <p className="card-text">{funcionario.cargo}</p>
          </div>
        </div>
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <Button style={{ height: '95px', transform: 'rotate(180deg)', backgroundColor: 'rgba(100, 159, 191, 0.9)', color: 'white'  }}>...</Button>
        </Dropdown>
      </div>
    </div>
  );
}

export default FuncionarioCard;