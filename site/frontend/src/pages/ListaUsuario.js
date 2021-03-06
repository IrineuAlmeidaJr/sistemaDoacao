import React from 'react';
import { useHistory } from 'react-router-dom';
import api from '../service/api'
import Header from '../components/Header';
import '../css/ListaUsuario.css'
import swal from 'sweetalert';

import Table from '../components/Table';

const ListaUsuario = () => {
    const history = useHistory();
    const [indice, setIndice] =  React.useState (0);
    const [listaUsuarios, setListaUsuarios] = React.useState([]);

    React.useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await api.get('/usuario');
            setListaUsuarios(response.data);            
        
        } catch(err) {
            console.log(err);
        }    
    }
    
    async function deletar(usu) {
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
                const id = usu.id;
                try {
                    await api.delete(`/usuario/${id}`);
                    swal("Excluido!", "Exclusão efetuada com sucesso.", "success").then(function() {
                        window.location = '/listaUsuario';
                    });
                    // fetchItens();
                } catch(err) {
                    swal("Erro", "Erro ao deletar", "error");
                }
            }
        });


        const id = usu.id;
        try {
            await api.delete(`/usuario/${id}`);
            fetchUsers();
            // setListaUsuarios(listaUsuarios.filter(listaUsuarios => 
            //     listaUsuarios.usu_id !==id
            // )) // Não muda desta forma porque a tabela está em um componente 
            // e não segue o usar o Estado, apenas se eu jogar para dentro de Estado
        
        } catch(err) {
            console.log(err);
        }   
    }

    function alterar(usu) {
        history.push({
            pathname: `/CadUsuario`,
            state: { id: usu.id, nome: usu.nome, cpf: usu.cpf, senha: usu.senha,  
                    dataNasc: usu.dataNascimento, endereco: usu.endereco, 
                    email: usu.email, telefone: usu.telefone, tipo: usu.tipo },
          });
    }

    async function buscarNome() {
        const nome = document.getElementById('pesquisarUsu').value; 
        try {
            const response = await api.get(`/usuario/${nome}`);
            setListaUsuarios(response.data);  
        } catch(err) {
            console.log(err);
        }            
    }

    async function buscarId() {
        const id = document.getElementById('pesquisarUsuId').value;
        console.log(id) 
        try { 
            let response;          
            if(id === '') {
                response = await api.get(`/usuario/${id}`);
            } else {
                response = await api.get(`/usuId/${id}`);
            }
            setListaUsuarios(response.data);  
        } catch(err) {
            console.log(err);
        }            
    }


    return (
        <div>
            <Header />
            <div class="boxPrincipal">
                <div class="campo-exibicao">
                    <h1>Tipo de Usuários</h1>
                    
                    <div class="opcoes">
                        <div class="legenda">
                            <h3>Lista Usuario</h3>
                            <p>1 - Colaborador</p>
                            <p>2 - Doador</p>
                            <p>3 - Responsável</p>
                        </div>

                        <div class="alterar">
                            <h3>Consultar por Nome</h3>
                            <div class="alterarInterno">
                                <label for="pesquisarUsu">Nome</label>
                                <input type="text" id="pesquisarUsu" placeholder="Nome deseja buscar..." />
                                <div class="botao">
                                    <button onClick={buscarNome}>Buscar</button>
                                </div>
                            </div>
                        </div>

                        <div class="deletar">
                            <h3>Consultar por ID</h3>
                            <div class="deletarInterno">
                                <label for="pesquisarUsuId">ID</label>
                                <input type="number" id="pesquisarUsuId" placeholder="ID que deseja buscar..." />
                                <div class="botao">
                                    <button onClick={buscarId}>Buscar</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <Table
                        usuarios={listaUsuarios}
                        deleta={deletar}
                        alterarUsu={alterar}
                    />

                </div>
            </div>
        </div>
    );
}

export default ListaUsuario;