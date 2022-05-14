import React from 'react';
import '../css/Tabelas.css';



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
                            <td>{usuario.dataNasc}</td>
                            <td>{usuario.endereco}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.telefone}</td>
                            <td>{usuario.tipo}</td>

                        </tr>
                    ))
                
                }
            </table>
        </div>
    );
}

export default Table;