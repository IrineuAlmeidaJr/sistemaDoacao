import React from 'react';
import Header from '../components/Header';
import '../css/ListaUsuario.css'

import Table from '../components/TableTamanho.js';
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
    
    function deletar(veiculo) { 
        let cod = {cod: veiculo.tamanho_id}
        fetch(localRecursos,{method:"DELETE",
                                 headers:{'Content-Type':'application/json'},
                                 body:JSON.stringify(cod)
            })
            .then(alert("excluído"))  
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

                    </div>

                    
                    <Table
                        tamanhos={listaTamanho} deletarTamanho={deletar}
                    />
                  

                </div>
            </div>
        </div>
    );
}

export default ListaTamanho;