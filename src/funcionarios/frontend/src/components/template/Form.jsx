import React, { useState } from "react";
import { Switch, Button } from 'antd';

import "./Form.css";

export default function Form({ adicionarFuncionario }) {
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [switchSelecionado, setSwitchSelecionado] = useState(false);
    const [funcionario, setFuncionario] = useState({
        nome: '',
        sexo: 'Feminino',
        cpf: '',
        dataNascimento: '',
        rg: '',
        cargo: 'Cargo 1',
        status: 'Ativo',
        atividades: [],
        atestadoSaude: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFuncionario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleNomeChange = (e) => {
        const { value } = e.target;
        setFuncionario(prevState => ({
            ...prevState,
            nome: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        adicionarFuncionario({
            id: Date.now(), 
            ...funcionario
        });
        setFuncionario({
            nome: '',
            sexo: 'Feminino',
            cpf: '',
            dataNascimento: '',
            rg: '',
            cargo: 'Cargo 1',
            status: 'Ativo',
            atividades: [],
            atestadoSaude: null
        });
    };

    return (
        <div className="container-fluid m-0 p-0 --bs-body-bg-rgb">
            <div className="row">
                <div className="col-12">
                    <div className="container-fluid">
                        <form className="formulario" onSubmit={handleSubmit}>
                            <div className="box-one mb-3">
                                <div className="form-check form-switch">
                                    <div className="row">
                                        <div className="col-6">
                                            <label className="form-check-label" htmlFor="jobAtivo"> <h6 style={{marginLeft:-20}}>O trabalhador está ativo ou inativo?</h6></label>
                                        </div>
                                        <div className="col-6 text-end">                                        
                                            <Switch checkedChildren="Ativo" unCheckedChildren="Inativo" defaultChecked={switchSelecionado} onChange={(checked) => setSwitchSelecionado(checked)} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-one mb-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="inputName">Nome</label>
                                            <input type="text" className="form-control" id="inputName" name="nome" value={funcionario.nome} onChange={handleNomeChange} placeholder="Nome" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="inputRadio">Sexo:</label>
                                            <div className="form-check">
                                                <input type="radio" name="sexo" id="gridRadios1" value="Feminino" checked={funcionario.sexo === 'Feminino'} onChange={handleChange} />
                                                <label className="form-check-label m-1" htmlFor="gridRadios1">Feminino</label>
                                                <input type="radio" name="sexo" id="gridRadios2" value="Masculino" checked={funcionario.sexo === 'Masculino'} onChange={handleChange} className="ml-3" />
                                                <label className="form-check-label m-1" htmlFor="gridRadios2">Masculino</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="inputCpf">CPF</label>
                                            <input type="text"                                       
                                            className="form-control" id="inputCpf" 
                                            name="cpf" value={funcionario.cpf} onChange={handleChange}
                                            placeholder="CPF" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="inputData">Data de Nascimento</label>
                                            <input type="date" className="form-control" id="inputData" name="dataNascimento" value={funcionario.dataNascimento} onChange={handleChange} placeholder="Data de Nascimento" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="inputRg">RG</label>
                                            <input type="text" className="form-control" id="inputRg" name="rg" value={funcionario.rg} onChange={handleChange} placeholder="RG" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="selectCargo">Cargo</label>
                                            <select id="selectCargo" className="form-select" name="cargo" value={funcionario.cargo} onChange={handleChange}>
                                                <option value="Cargo 1">Cargo 1</option>
                                                <option value="Cargo 2">Cargo 2</option>
                                                <option value="Cargo 3">Cargo 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-one mb-3">
                                <div className='nome-epi mb-3 mt-3'>
                                    <h6>Quais EPIs o trabalhador usa na atividade?</h6>
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="validationFormCheck1"
                                            checked={checkboxChecked}
                                            onChange={(e) => setCheckboxChecked(e.target.checked)}
                                        />
                                        <label className="form-check-label pb-3" htmlFor="validationFormCheck1">
                                            O trabalhador não usa EPI
                                        </label>
                                    </div>
                                </div>
                                
                               
                                {!checkboxChecked && (
                                    <>
                                        <div className="box-one">
                                            <label htmlFor="selectAtividade">Selecione a atividade:</label>
                                            <select id="selectAtividade" className="form-select mb-3">
                                                <option selected> Atividade 1</option>
                                                <option>Atividade 2</option>
                                                <option>Atividade 3</option>
                                            </select>
                                            
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label htmlFor="selectEpi">Selecione o EPI:</label>
                                                    <select id="selectEpi" className="form-select">
                                                        <option selected>Calçado de segurança</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                              
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputCa">Informe o número do CA:</label>
                                                    <input type="text" className="form-control" id="inputCa" placeholder="9356" />
                                                </div>
                                                
                                                <div className="form-group col-4 mb-2">
                                                <Button block className="btn-epi">Adicionar EPI</Button>
                                                </div>
                                            </div>
                                            </div>
                                           
                                                <div className="col pb-4 pt-4">
                                                <Button block>Adicionar outra atividade</Button>
                                                </div>
                                       
                                        

                                         <div className="box-one mb-4">
                                            <div className='nome-epi pb-2'>
                                                <h6>Adicione Atestado de Saúde (opcional):</h6>
                                            </div>
                                            <div className="form-row">
                                                <div className="input-group mb-3">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="inputGroupFile" aria-describedby="inputGroupFileAddon" name="fileToUpload" />
                                                        
                                                    </div>
                                                    
                                                </div>
                                              
                                            </div>
                                        </div>
                                    </>
                                )}
                         
                                
                                    <div className="col">
                                    <Button block htmlType="submit">Salvar</Button>
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}