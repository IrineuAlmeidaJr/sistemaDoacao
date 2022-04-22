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
                            <td>{usuario.id_usu}</td>
                            <td>{usuario.nome_usu}</td>
                            <td>{usuario.cpf_usu}</td>
                            <td>{usuario.dataNasc_usu}</td>
                            <td>{usuario.endereco_usu}</td>
                            <td>{usuario.email_usu}</td>
                            <td>{usuario.telefone_usu}</td>
                            <td>{usuario.tipoUsuario_usu}</td>

                        </tr>
                    ))
                
                }
            </table>
        </div>
    );
}

export default Table;