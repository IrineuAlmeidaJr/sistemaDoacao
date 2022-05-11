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
                </tr>
                {
                    props.tamanhos.map(tamanho => (
                        <tr>
                            <td>{tamanho.tamanho_id}</td>
                            <td>{tamanho.tamanho_tam}</td>
                            <td>
                                <Button variant="outline-primary" onClick={()=>{props.alterarTamanho(tamanho)}}><img src={editar} alt="Botao editar"/></Button>{' '}
                                <Button variant='outline-danger' onClick={()=>{props.deletarTamanho(tamanho)}}><img src={deletar} alt="Botao deletar"/></Button>
                            </td>
                        </tr>
                    ))
                
                }
            </table>
        </div>
    );
}

export default Table;