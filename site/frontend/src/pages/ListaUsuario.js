import React from 'react';
import { Link } from 'react-router-dom';

const ListaUsuario = () => {
    return (
        <div>
            <h1>Lista de Usuários</h1>
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}

export default ListaUsuario;