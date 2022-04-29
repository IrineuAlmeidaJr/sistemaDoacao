import React from 'react';
import Header from '../components/Header';
import '../css/ListaUsuario.css'

import Table from '../components/TableTamanho';
const localRecursos = 'http://localhost:4000/tamanho'

const ListaTamanho = () => {


    const [listaTamanho, setListaTamanhos] = React.useState([]);

    React.useEffect(() => {
        fetchTamanho()
    }, [])

    function fetchTamanho() {
        fetch(localRecursos,{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setListaTamanhos(dados);
        }, 
        error =>{
            alert(error)
        });
    }
    
    function deletar() { 
        const cod= {cod: document.querySelector('#deletarTamanho').value}
        fetch(localRecursos,{method:"DELETE",
                                 headers:{'Content-Type':'application/json'},
                                 body:JSON.stringify(cod)
            })
            .then(resposta=>alert("sucesso"))    
            fetchTamanho()
    }


    return (
        <div>
            <Header />
            <div class="boxPrincipal">
                <div class="campo-exibicao">
                    <h1>Tamanho</h1>
                    
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
                                <input type="number" id="deletarTamanho" placeholder="ID que deseja excluir..." />
                                <div class="botao">
                                    <button onClick={deletar}>Deletar</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    
                    <Table
                        tamanhos={listaTamanho}
                    />
                  

                </div>
            </div>
        </div>
    );
}

export default ListaTamanho;