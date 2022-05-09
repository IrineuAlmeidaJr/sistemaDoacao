import React from 'react';
import '../css/Tabelas.css';
import {Button } from "react-bootstrap";



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
                                <Button variant="outline-primary" onClick={()=>alert("alterar")}>A</Button>{' '}
                                <Button variant='outline-danger' onClick={()=>{props.deletarTamanho(tamanho)}}>X</Button>
                            </td>
                        </tr>
                    ))
                
                }
            </table>
        </div>
    );
}

export default Table;