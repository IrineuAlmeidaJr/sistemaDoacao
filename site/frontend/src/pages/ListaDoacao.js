import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import api from '../service/api';
import Table from '../components/TabelaDoacao';

const ListaDoacao = () => {
    const history = useHistory();
    const[ListaAgenda, setListaAgenda] = React.useState([]);
    const[ListaItens, setListaItens] = React.useState([]);
    //
    const[doacao, setDoacao] = React.useState([]);

    React.useEffect(() => {
        fetchItens()
        
    }
    , [])

    
    async function fetchItens()
    {
        try {
            const response = await api.get('/doacaoDetalhadoTodos');
            setListaItens(response.data);
            
        } catch(err) {
            console.log(err);
        }
    }

    function deletar(agendaR) {

        swal("Atenção","Deseja Excluir?", {
            closeOnClickOutside: false, //não fecha o swal se clicar fora
            dangerMode: true, //danger mode pra chamar atenção
            closeOnEsc: false, // não deixa fechar no esc
            buttons: {
                cancelar: {  // Posso mudar o nome aqui
                    text: "Cancelar", // texto do botão
                    value: "cancelar", // valor pra gente testar la em baixo
                    className: "swal-button--danger", // classe do botão css
                },
                confirmar: { // botao confirmar
                    text: "Confirmar", // texto do botão
                    value: "confirmar", // valor pra gente testar la em baixo
                    className: "swal-button--confirm", // classe do botão css
                },

            },
            icon: "info", // icone do swal
        })
        .then(async (value) => { // aqui é a ação !
            if(value == "confirmar"){ // se clicou em "confirmar" chama o ajax que faz a exclusão.
                const id = agendaR.doacao_id;
                try {
                    await api.delete(`/doacao/${id}`);
                    swal("Excluido!", "Exclusão efetuada com sucesso.", "success").then(function() {
                        window.location = '/listaDoacao';
                    });
                    // fetchItens();
                } catch(err) {
                    swal("Erro", "Erro ao deletar", "error");
                }
            }
        });
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

    function confirmar(item) {
        // console.log(item)
        // console.log(` ${item.doacao_id}`)
        // console.log(` ${item.itens_nome}`)
        // console.log(` ${item.quantidade}`)
        // console.log(` ${item.usu_nome}`)
        // console.log(` ${item.doacao_dataDoacao}`)
        // console.log(` ${item.campanha_id}`)
        // console.log(` ${item.local_id}`)
        // console.log(` ${item.usu_id}`)
        
        history.push({
            pathname: '/receberDoacao',
            state:{
                doacao_id: item.doacao_id, 
                item_nome: item.itens_nome,
                quatidade: item.quantidade, 
                doador_nome: item.usu_nome,
                data: item.doacao_dataDoacao,
                campanha_id: item.campanha_id,
                local_id: item.local_id,
                usu_id: item.usu_id
            },
        });
    }

    return(
        <div>
            <Header />
            <div class="boxPrincipal">
                <div class="campo-exibicao">
                    <h1>Lista de Doações</h1>
                    <div class="box-senha">
                        <label for="Busca">Buscar por nome de item</label>
                        <input type="input" name="busca" id="busca"/>
                    </div>
                    <Table
                        agendas={ListaItens}
                        confirmar={confirmar}
                        deletar={deletar}
                        alterar={alterar}
                    />
                </div>
            </div>
        </div>
    );

    }

export default ListaDoacao;