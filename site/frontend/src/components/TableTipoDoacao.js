import React from 'react';
import {Button} from 'react-bootstrap';
import '../css/Tabelas.css';
import editar from '../images/icones/imgEditar.png';
import deletar from '../images/icones/imgDeletar.png';

const Table = (props) => {

    return (
        <div>            
            <table>
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>Ação</td>
                </tr>
                {
                    props.tipos.map(tipo => (
                        <tr>
                            <td>{tipo.id}</td>
                            <td>{tipo.nome}</td>
                            <td>
                                <Button variant="outline-primary" onClick={()=>{props.alterarTipo(tipo)}}><img src={editar} alt="Botao editar"/></Button>{' '}
                                <Button variant='outline-danger' onClick={()=>{props.deletarTipo(tipo)}}><img src={deletar} alt="Botao deletar"/></Button>
                            </td>
                        </tr>
                    ))
                
                }
            </table>
        </div>
    );
}

export default Table;