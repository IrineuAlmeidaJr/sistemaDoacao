import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import Table from '../components/TabelaCampanhaDoacao';
const localRecursos = 'http://localhost:4000/campanhaDoacao'


const ListaCampanhaDoacao = () => {
    const history = useHistory();
    const[ListaCampanhaDoacao, setListaCampanhaDoacao] = React.useState([]);
    
    React.useEffect(() => {
        fetchCampanhas();
    }, [])

    function fetchCampanhas() {
        fetch(localRecursos,{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setListaCampanhaDoacao(dados);
        }, 
        error =>{
            alert(error)
    }); 
    }

    async function deletar(campanha) {
        console.log(campanha)
        let cod = {cod: campanha.cod}
        fetch(localRecursos,{method:"DELETE",
                                    headers:{'Content-Type':'application/json'},
                                    body:JSON.stringify(cod)
        })
        .then(alert("excluído"))
        fetchCampanhas()
    }
    
    function alterar(campanha) {
        history.push({
        pathname: '/CadCampanhaDoacao',
        state:{cod: campanha.cod, nome: campanha.nome, datainicio: campanha.dataInicio, datafim: campanha.dataFim},
    });
    }
     
        return(
            <div>
            <Header />
            <div class="boxPrincipal">
            
                <div class="campo-exibicao">
                    <h1>Gerenciar Campanha Doação</h1>
                    <div class="box-senha">
                            <label for="Busca">Buscar por nome</label>
                            <input type="input" name="busca" id="busca"/>
                    </div>
                    <Table
                        campanhas={ListaCampanhaDoacao} 
                        deletar={deletar} 
                        alterar={alterar}
                    />                  
                </div>
            </div>
        </div>
    
        );         
}
export default ListaCampanhaDoacao;