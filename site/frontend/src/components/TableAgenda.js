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
                    <td>Tamanho</td>
                    <td>Tipo de doação</td>
                    <td>Doador</td>
                    <td>Editar</td>
                    <td>Deletar</td>
                </tr>

            {  
                props.agendas.map(agenda => (
                    <tr>
                        <td>{agenda.id}</td>
                        <td>{agenda.nome}</td>
                        <td>{agenda.quantidade}</td>
                        <td>{agenda.tamanho_id}</td>
                        <td>{agenda.tipoDoacao_id}</td>
                        <td>{agenda.doacao_id}</td>
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