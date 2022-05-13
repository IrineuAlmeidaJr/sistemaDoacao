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
                    <td>ID da Campanha</td>
                    <td>Nome da Campanha</td>
                    <td>Data Início</td>
                    <td>Data Fim</td>
                    <td> Editar </td>
                    <td> Deletar </td>
                </tr>
                {
                    props.campanhas.map(campanha=>(
                        <tr> 
                            <td>{campanha.cod}</td>
                            <td>{campanha.nome}</td>
                            <td>{campanha.dataInicio}</td>
                            <td>{campanha.dataFim}</td> 
                            <td><Button variant="outline-primary" onClick={()=>{props.alterar(campanha)}}><img src={editar} alt="Botao editar"/></Button>{' '}</td>
                            <td><Button variant='outline-danger' onClick={()=>{props.deletar(campanha)}}><img src={deletar} alt="Botao deletar"/></Button></td>               
                        </tr>
                    ))
                }
            </table>
        </div>
    );


}

export default Table;