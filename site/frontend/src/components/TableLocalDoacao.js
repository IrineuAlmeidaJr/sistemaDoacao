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
                            <td>{Local.local_id}</td>
                            <td>{Local.local_nomerua}</td>
                            <td>{Local.local_numero}</td>
                            <td>{Local.local_bairro}</td>
                            <td>{Local.local_cidade}</td>
                            <td>{Local.local_estado}</td>
                            <td>{Local.usuario_usu_id}</td>
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