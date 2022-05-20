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
                    <td>Rua</td>
                    <td>Numero</td>
                    <td>Bairro</td>
                    <td>Cidade</td>
                    <td>estado</td>
                    <td>Usuario</td>
                    <td> Editar </td>
                    <td> Deletar </td>
                </tr>
                {
                    props.locais.map(Local => (
                        <tr>
                            <td>{Local.id}</td>
                            <td>{Local.nomeRua}</td>
                            <td>{Local.numero}</td>
                            <td>{Local.bairro}</td>
                            <td>{Local.cidade}</td>
                            <td>{Local.estado}</td>
                            <td>{Local.usuarioId}</td>
                            <td><Button variant="outline-primary" onClick={()=>{props.alterar(Local)}}><img src={editar} alt="Botao editar"/></Button>{' '}</td>
                            <td><Button variant='outline-danger' onClick={()=>{props.deletar(Local)}}><img src={deletar} alt="Botao deletar"/></Button></td>
                        </tr>
                    ))
                }
            </table>
        </div>

    );


}

export default Table;