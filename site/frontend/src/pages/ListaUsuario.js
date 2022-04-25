import React from 'react';
import Header from '../components/Header';
import './ListaUsuario.css'

import Table from '../components/Table';
const localRecursos = 'http://localhost:4000/usuario'

const ListaUsuario = () => {


    const [listaUsuarios, setListaUsuarios] = React.useState([]);

    React.useEffect(() => {
        fetchUsers()
    }, [])

    function fetchUsers() {
        fetch(localRecursos,{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setListaUsuarios(dados);
        }, 
        error =>{
            alert(error)
        });
    }
    
    function deletar() {
        const id = {id: document.querySelector('#deletarUsu').value}
        fetch(localRecursos,{method:"DELETE",
                                 headers:{'Content-Type':'application/json'},
                                 body:JSON.stringify(id)
            })
            .then(resposta=>alert(resposta.json()))    
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