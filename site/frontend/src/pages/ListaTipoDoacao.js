import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import '../css/ListaUsuario.css';
import api from '../service/api';
import swal from 'sweetalert';
import Table from '../components/TableTipoDoacao';
//const localRecursos = 'http://localhost:4000/tipoDoacao'

const ListaTipoDoacao = () => {


    const [listaTipos, setListaTipos] = React.useState([]);
    const history = useHistory();

    React.useEffect(() => {
        fetchTypes()
    }, []);

    async function fetchTypes() {
        try {
            const response = await api.get('/tipoDoacao');
            setListaTipos(response.data);
        
        } catch(err) {
            console.log(err);
        }    
    }
    
    async function deletar(td) { 
        const id = td.id;
        try {
            swal("Deletar", "Deseja realmente deletar este item?", "warning", {buttons: ["Não", "Sim"]})
            .then(async (sim) => {
                if (sim) {
                    await api.delete(`/tipoDoacao/${id}`);
                    fetchTypes();
                  
                }});
            //await api.delete(`/tipoDoacao/${id}`);
            //fetchTypes();
        } catch(err) {
            console.log(err);
        }   
    }

    function alterar(TD){
        
        history.push({
            pathname: `/CadTipoDoacao`,
            state: { id: TD.id,nome: TD.nome},
          });
    }

    async function buscarNome() {
        const nome = document.getElementById('pesquisar').value; 
        try {
            const response = await api.get(`/tipoDoacao/${nome}`);
            setListaTipos(response.data);  
        } catch(err) {
            console.log(err);
        }            
    }


    return (
        <div>
            <Header />
            <div class="boxPrincipal">
                <div class="campo-exibicao">
                    <h1>Tipo de Doação</h1>
                    
                    <div class="alterar">
                        <h3>Consultar por Nome</h3>
                        <div class="alterarInterno">
                            <label for="pesquisar">Nome</label>
                            <input type="text" id="pesquisar" placeholder="Nome que deseja buscar..." />
                            <div class="botao">
                                <button onClick={buscarNome}>Buscar</button>
                            </div>
                        </div>
                    </div>

                    

                    
                    <Table
                        tipos={listaTipos} deletarTipo={deletar} alterarTipo={alterar}
                        
                    />
                  

                </div>
            </div>
        </div>
    );
}

export default ListaTipoDoacao;