import React from 'react';
import Header from '../components/Header';
import '../css/ListaUsuario.css'
import { useHistory } from 'react-router-dom';
import api from '../service/api';
import swal from 'sweetalert';
import Table from '../components/TableTamanho.js';
const localRecursos = 'http://localhost:4000/tamanho'

const ListaTamanho = () => {
    const history = useHistory();

    const [listaTamanho, setListaTamanhos] = React.useState([]);
    

    React.useEffect(() => {
        fetchTamanho()
    }, [])

    async function fetchTamanho() {
        /*fetch(localRecursos,{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setListaTamanhos(dados);
        }, 
        error =>{
            alert(error)
        });*/
        try {
            const response = await api.get('/tamanho');
            setListaTamanhos(response.data);
        
        } catch(err) {
            console.log(err);
        }    
    }
    
    async function deletar(tamanhoR) { 
        /*let cod = {cod: tamanhoR.cod}
        await fetch(localRecursos,{method:"DELETE",
                                 headers:{'Content-Type':'application/json'},
                                 body:JSON.stringify(cod)
            })
            .then(resposta=>{if(resposta.status != false){alert("excluido com sucesso")}})
            .catch(resposta=>alert(resposta.message))  
        fetchTamanho()*/

        const id = tamanhoR.cod;
        try {
            swal("Deletar", "Deseja realmente deletar este item?", "warning", {buttons: ["Não", "Sim"]})
            .then(async (sim) => {
                if (sim) {
                    await api.delete(`/tamanho/${id}`);
                    fetchTamanho();
                  
                }});
        } catch(err) {
            console.log(err);
        }   
    }
    function alterar(tamanhoR){
        
        history.push({
            pathname: `/cadTamanho`,
            state: { cod: tamanhoR.cod,tipo: tamanhoR.nome},
          });
    }

    async function buscarNome() {
        const nome = document.getElementById('pesquisar').value; 
        try {
            const response = await api.get(`/tamanhoNome/${nome}`);
            setListaTamanhos(response.data);  
        } catch(err) {
            console.log(err);
        }            
    }

    return (
        <div>
            <Header />
            <div class="boxPrincipal">
                <div class="campo-exibicao">
                    <h1>Tamanho</h1>

                    <div class="alterar">
                        <h3>Consultar por Nome</h3>
                        <div class="alterarInterno">
                            <label for="pesquisar">Nome</label>
                            <input type="text" id="pesquisar" placeholder="Tamanho que deseja buscar..." />
                            <div class="botao">
                                <button onClick={buscarNome}>Buscar</button>
                            </div>
                        </div>
                    </div>
                    
                    <Table
                        tamanhos={listaTamanho} deletarTamanho={deletar} alterarTamanho={alterar}
                    />
                  

                </div>
            </div>
        </div>
    );
}

export default ListaTamanho;