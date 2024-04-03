import React, { useState } from "react";
import "./BotaoProximo.css";
import { Switch } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function BotaoProximo(props) {
  const [switchAtivado, setSwitchAtivado] = useState(false);
  const navigate = useNavigate();

  const handleClickProximo = () => {
    if (switchAtivado) {
      navigate('/progresso');
    } else {
     
    }
  };

  const handleSwitchChange = (checked) => {
    setSwitchAtivado(checked);
  };

  return (
    <div>
      <div className="row mt-3">
        <div className="col">
          <div className="card-body d-flex flex-row justify-content-end align-items-center ">
            <p className="card-title mb-0 me-3">A etapa está concluída?</p>
            <div>
              <Switch checkedChildren="Sim" unCheckedChildren="Não" defaultChecked={switchAtivado} onChange={handleSwitchChange} />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-end"> 
            <button
              type="button"
              className={`btn btn-primary mt-3 ${switchAtivado ? '' : 'disabled'}`}
              onClick={handleClickProximo}
              disabled={!switchAtivado}
            >
              Próximo passo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
