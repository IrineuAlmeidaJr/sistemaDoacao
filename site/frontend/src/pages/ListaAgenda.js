import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import api from '../service/api';
import Table from '../components/TableAgenda';

const ListaAgenda = () => {
    const history = useHistory();
    const[ListaAgenda, setListaAgenda] = React.useState([]);
    const[ListaItens, setListaItens] = React.useState([]);

    React.useEffect(() => {
        fetchAgenda()
        fetchItens()
        
    }
    , [])

    async function fetchAgenda()
    {
        try {
            const response = await api.get('/doacao');
            setListaAgenda(response.data);
        } catch(err) {
            console.log(err);
        }
    }

    async function fetchItens()
    {
        try {
            const response = await api.get('/itensDoacaoDetalhado');
            setListaItens(response.data);
            
        } catch(err) {
            console.log(err);
        }
    }

    async function juntar(){
        setListaAgenda(ListaAgenda+ListaItens);
    }
    
    


    async function deletar(agendaR) {
        const id = agendaR.id;
        try {
            await api.delete(`/doacao/${id}`);
            fetchAgenda();
        } catch(err) {
            swal("Erro", "Erro ao deletar", "error");
        }
    }

    function alterar(agendaR, ItensR) {
        history.push({
            pathname: '/AgendarDoacao',
            state:{doacao_id: agendaR.id, doacao_dataDoacao: agendaR.dataDoacao, doacao_localDoacao_id: agendaR.localDoacao_id, campanha_id: agendaR.campanha_id, usu_id: agendaR.usu_id, doacao_status: agendaR.status, nomeitem: ItensR.nomeitem, quantidade: ItensR.quantidade, unidade: ItensR.unidadeMedida_id,  tamanho: ItensR.tamanho_id, genero: ItensR.genero_id },
        });
    }

    return(
        <div>
            <Header />
            <div class="boxPrincipal">
                <div class="campo-exibicao">
                    <h1>Agenda De Doação</h1>
                    <div class="box-senha">
                        <label for="Busca">Buscar por nome de item</label>
                        <input type="input" name="busca" id="busca"/>
                    </div>
                    <Table

                        agendas={ListaAgenda}
                        deletar={deletar}
                        alterar={alterar}
                    />
                </div>
            </div>
        </div>
    );

    }

export default ListaAgenda;