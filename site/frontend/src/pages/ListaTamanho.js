import React from 'react';
import Header from '../components/Header';
import '../css/ListaUsuario.css'
import { useHistory } from 'react-router-dom';
import Table from '../components/TableTamanho.js';
const localRecursos = 'http://localhost:4000/tamanho'

const ListaTamanho = () => {
    const history = useHistory();

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
    
    function deletar(tamanhoR) { 
        let cod = {cod: tamanhoR.tamanho_id}
        fetch(localRecursos,{method:"DELETE",
                                 headers:{'Content-Type':'application/json'},
                                 body:JSON.stringify(cod)
            })
            .then(alert("excluído"))  
        fetchTamanho()
    }
    function alterar(tamanhoR){
        
        history.push({
            pathname: `/cadTamanho`,
            state: { cod: tamanhoR.tamanho_id,tipo: tamanhoR.tamanho_tam },
          });
    }

    return (
        <div>
            <Header />
            <div class="boxPrincipal">
                <div class="campo-exibicao">
                    <h1>Tamanho</h1>

                    
                    <Table
                        tamanhos={listaTamanho} deletarTamanho={deletar} alterarTamanho={alterar}
                    />
                  

                </div>
            </div>
        </div>
    );
}

export default ListaTamanho;