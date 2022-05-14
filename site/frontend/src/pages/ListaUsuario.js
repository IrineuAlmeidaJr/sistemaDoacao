import React from 'react';
import api from '../service/api'
import Header from '../components/Header';
import '../css/ListaUsuario.css'

import Table from '../components/Table';

const ListaUsuario = () => {


    const [listaUsuarios, setListaUsuarios] = React.useState([]);

    React.useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await api.get('/usuario');
            setListaUsuarios(response.data);
        
        } catch(err) {
            console.log(err);
        }    
    }
    
    async function deletar() {
        const id = document.querySelector('#deletarUsu').value;
        try {
            await api.delete(`/usuario/${id}`);
            fetchUsers();
            setListaUsuarios(listaUsuarios.filter(listaUsuarios => 
                listaUsuarios.usu_id !==id
            )) // Não muda desta forma porque a tabela está em um componente 
            // e não segue o usar o Estado, apenas se eu jogar para dentro de Estado
        
        } catch(err) {
            console.log(err);
        }   
    }


    return (
        <div>
            <Header />
            <div class="boxPrincipal">
                <div class="campo-exibicao">
                    <h1>Tipo de Usuários</h1>
                    
                    <div class="opcoes">
                        <div class="legenda">
                            <h3>Lista Usuario</h3>
                            <p>1 - Colaborador</p>
                            <p>2 - Doador</p>
                            <p>3 - Responsável</p>
                        </div>

                        <div class="alterar">
                            <h3>Alterar</h3>
                            <div class="alterarInterno">
                                <label for="nome">ID</label>
                                <input type="number" id="alterarUsu" placeholder="ID que deseja alterar..." />
                                <div class="botao">
                                    <button>Alterar</button>
                                </div>
                            </div>
                        </div>

                        <div class="deletar">
                            <h3>Deletar</h3>
                            <div class="deletarInterno">
                                <label for="nome">ID</label>
                                <input type="number" id="deletarUsu" placeholder="ID que deseja excluir..." />
                                <div class="botao">
                                    <button onClick={deletar}>Deletar</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <Table
                        usuarios={listaUsuarios}
                    />

                </div>
            </div>
        </div>
    );
}

export default ListaUsuario;