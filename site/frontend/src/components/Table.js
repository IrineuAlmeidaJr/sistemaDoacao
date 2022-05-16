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
                    <td>Dat. Nasc</td>
                    <td>Endereço</td>
                    <td>E-mail</td>
                    <td>Fone</td>
                    <td>Tipo Usuário</td>
                </tr>
                {
                    props.usuarios.map(usuario => (
                        <tr>                          
                            <td>{usuario.id}</td>
                            <td>{usuario.nome}</td>
                            <td>{usuario.cpf}</td>
                            <td>{usuario.dataNascimento.substr(0, 10)}</td>
                            <td>{usuario.endereco}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.telefone}</td>
                            <td>{usuario.tipo}</td>
                            <td><Button variant="outline-primary" onClick={()=>{props.alterarUsu(usuario)}}><img src={editar} alt="Botao editar"/></Button></td>
                            <td><Button variant='outline-danger' onClick={() => props.deleta(usuario)}><img src={deletar} alt="Botao deletar"/></Button></td>                        </tr>
                    ))
                
                }
            </table>
        </div>
    );
}

export default Table;