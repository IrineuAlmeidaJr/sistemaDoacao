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
        fetchItens()
        
    }
    , [])

    
    async function fetchItens()
    {
        try {
            const response = await api.get('/itensDoacao');
            setListaItens(response.data);
            
        } catch(err) {
            console.log(err);
        }
    }

    async function deletar(agendaR) {
        const id = agendaR.id;
        try {
            await api.delete(`/doacao/${id}`);
            fetchItens();
        } catch(err) {
            swal("Erro", "Erro ao deletar", "error");
        }
    }

    function alterar(ItensR) {
        history.push({
            pathname: '/AgendarDoacao',
            state:{itens_id: ItensR.id, 
                itens_nome: ItensR.nome, 
                itens_quatidade: ItensR.quantidade, 
                tipodoacao_id: ItensR.tipoDoacao_id, 
                unidadeMedida_id:ItensR.unidadeMedida_id, 
                tamanho_id: ItensR.tamanho_id, 
                genero_id: ItensR.genero_id, 
                doacao_id: ItensR.doacao_id},
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

                        agendas={ListaItens}
                        deletar={deletar}
                        alterar={alterar}
                    />
                </div>
            </div>
        </div>
    );

    }

export default ListaAgenda;