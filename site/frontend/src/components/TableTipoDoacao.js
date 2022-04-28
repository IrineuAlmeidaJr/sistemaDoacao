import React from 'react';
import '../css/Tabelas.css';



const Table = (props) => {

    return (
        <div>            
            <table>
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                </tr>
                {
                    props.tipos.map(tipo => (
                        <tr>
                            <td>{tipo.tipo_id}</td>
                            <td>{tipo.tipo_nome}</td>
                        </tr>
                    ))
                
                }
            </table>
        </div>
    );
}

export default Table;