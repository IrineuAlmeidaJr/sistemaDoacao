import React from 'react';
import Header from '../components/Header';
import '../css/ListaUsuario.css'

import Table from '../components/TableTipoDoacao';
const localRecursos = 'http://localhost:4000/tipoDoacao'

const ListaTipoDoacao = () => {


    const [listaTipos, setListaTipos] = React.useState([]);

    React.useEffect(() => {
        fetchTipo()
    }, [])

    function fetchTipo() {
        fetch(localRecursos,{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setListaTipos(dados);
        }, 
        error =>{
            alert(error)
        });
    }
    
    function deletar() {
        const id = {id: document.querySelector('#deletarTipo').value}
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
                        <div class="alterar">
                            <h3>Alterar</h3>
                            <div class="alterarInterno">
                                <label for="nome">ID</label>
                                <input type="number" id="alterarTipo" placeholder="ID que deseja alterar..." />
                                <div class="botao">
                                    <button>Alterar</button>
                                </div>
                            </div>
                        </div>

                        <div class="deletar">
                            <h3>Deletar</h3>
                            <div class="deletarInterno">
                                <label for="nome">ID</label>
                                <input type="number" id="deletarTipo" placeholder="ID que deseja excluir..." />
                                <div class="botao">
                                    <button onClick={deletar}>Deletar</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    
                    <Table
                        tipos={listaTipos}
                    />
                  

                </div>
            </div>
        </div>
    );
}

export default ListaTipoDoacao;