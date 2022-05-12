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
                            <td>{beneficiario.bene_id}</td>
                            <td>{beneficiario.bene_nome}</td>
                            <td>{beneficiario.bene_cpf}</td>
                            <td>{beneficiario.bene_datanascimento}</td>
                            <td>{beneficiario.usuario_usu_id}</td>
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