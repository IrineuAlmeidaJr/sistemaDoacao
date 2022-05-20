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
                    <td>Nome</td>
                    <td>CPF</td>
                    <td>Data de Nascimento</td>
                    <td>Usuário</td>
                    <td> Editar </td>
                    <td> Deletar </td>
                </tr>
                {
                    props.beneficiarios.map(beneficiario => (
                        <tr> 
                            <td>{beneficiario.id}</td>
                            <td>{beneficiario.nome}</td>
                            <td>{beneficiario.cpf}</td>
                            <td>{beneficiario.dataNasc.substr(0, 10)}</td>
                            <td>{beneficiario.usuarioId}</td>
                            <td><Button variant="outline-primary" onClick={()=>{props.alterar(beneficiario)}}><img src={editar} alt="Botao editar"/></Button>{' '}</td>
                            <td><Button variant='outline-danger' onClick={()=>{props.deletar(beneficiario)}}><img src={deletar} alt="Botao deletar"/></Button></td>               
                        </tr>
                    ))
                }
            </table>
        </div>
    );


}

export default Table;