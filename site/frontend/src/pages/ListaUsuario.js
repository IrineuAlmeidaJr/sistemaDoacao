import React from 'react';
import Header from '../components/Header';
import './ListaUsuario.css'

import supabaseClient from '../config/supabase'
import Table from '../components/Table';


// import { createClient } from '@supabase/supabase-js';
// const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqeW1odnB4bG9ndnFpbW9reXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk2MzE1ODUsImV4cCI6MTk2NTIwNzU4NX0.b32YpSZum0hX5rGX6GM_JsNFl8rKn0dirVzvDDTE_qo'
// const SUPABASE_URL = 'https://tjymhvpxlogvqimokytv.supabase.co'
// const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const ListaUsuario = () => {


    const [listaUsuarios, setListaUsuarios] = React.useState([]);

    React.useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        const { data } = await supabaseClient
            .from('usuario')
            .select()


        setListaUsuarios(data)

        // usuario.forEach((usu) => {
        //     console.log(`\nNome:  ${usu.nome_usu} `)
        // })
    }

    async function deletar() {
        try {
            const idExcluir = document.querySelector('#deletarUsu').value;
            console.log(`ID de Excluir --> ${idExcluir}`);
            await supabaseClient
                .from('usuario')
                .delete()
                .eq('id_usu', idExcluir);
            // Faz chamada para atualizar a tabela, pois, depois
            // que excluir tem que fazer um novo select OU bastava deletar
            // do array qual seria melhor?? 
            fetchUsers(); 

        } catch (error) {
            console.log('error', error);
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
                            <h3>Alterar</h3>
                            <div class="alterarInterno">
                                <label for="nome">ID</label>
                                <input type="number" id="alterarUsu" placeholder="ID que deseja alterar..." />
                                <div class="botao">
                                    <button>Alterar</button>
                                </div>
                            </div>
                        </div>

                        <div class="deletar">
                            <h3>Deletar</h3>
                            <div class="deletarInterno">
                                <label for="nome">ID</label>
                                <input type="number" id="deletarUsu" placeholder="ID que deseja excluir..." />
                                <div class="botao">
                                    <button onClick={deletar}>Deletar</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <Table
                        usuarios={listaUsuarios}
                    />

                </div>
            </div>
        </div>
    );
}

export default ListaUsuario;