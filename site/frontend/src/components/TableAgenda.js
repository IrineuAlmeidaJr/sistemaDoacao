import React from 'react';
import '../css/Tabelas.css';
import {Button } from "react-bootstrap";
import editar from "../images/icones/imgEditar.png";
import deletar from "../images/icones/imgDeletar.png";


const Table = (props) => {
    return (

        <div>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Item</td>
                    <td>Quantidade</td>
                    <td>Data</td>
                    <td>Doador</td>
                    <td>Confirmar</td>
                    <td>Editar</td>
                    <td>Deletar</td>
                </tr>

            {  
                props.agendas.map(agenda => (
                    <tr>
                        <td>{agenda.doacao_id}</td>
                        <td>{agenda.itens_nome}</td>
                        <td>{agenda.quantidade}</td>
                        <td>{agenda.doacao_dataDoacao.substr(0, 10)}</td>
                        <td>{agenda.usu_nome}</td>
                        <td>
                            <Button variant="outline-primary" onClick={()=>{props.confirmar(agenda)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                            </svg>
                            </Button>{' '}
                        </td>
                        <td><Button variant="outline-primary" onClick={()=>{props.alterar(agenda)}}><img src={editar} alt="Botao editar"/></Button>{' '}</td>
                        <td><Button variant='outline-danger' onClick={()=>{props.deletar(agenda)}}><img src={deletar} alt="Botao deletar"/></Button></td>
                    </tr>
                ))


            }
            </table>
        </div>
    );
        }
    
export default Table;