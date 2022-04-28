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
                    props.tamanhos.map(tamanho => (
                        <tr>
                            <td>{tamanho.tamanho_id}</td>
                            <td>{tamanho.tamanho_tam}</td>
                        </tr>
                    ))
                
                }
            </table>
        </div>
    );
}

export default Table;