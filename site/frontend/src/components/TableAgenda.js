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
                    <td>Local</td>
                    <td>Editar</td>
                    <td>Deletar</td>
                </tr>

            {  
                props.agendas.map(agenda => (
                    <tr>
                        <td>{agenda.id}</td>
                        <td></td>
                        <td></td>
                        <td>{agenda.dataDoacao.substr(0,10)}</td>
                        <td></td>
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