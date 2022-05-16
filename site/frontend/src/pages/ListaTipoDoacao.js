import React from 'react';
import Header from '../components/Header';
import '../css/ListaUsuario.css';
import api from '../service/api';
import Table from '../components/TableTipoDoacao';
//const localRecursos = 'http://localhost:4000/tipoDoacao'

const ListaTipoDoacao = () => {


    const [listaTipos, setListaTipos] = React.useState([]);

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
            await api.delete(`/tipoDoacao/${id}`);
            fetchTypes();
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

                        <div class="deletar">
                            <h3>Deletar</h3>
                            <div class="deletarInterno">
                                <label for="nome">ID</label>
                                <input type="number" id="deletarTipo" placeholder="ID que deseja excluir..." />
                                <div class="botao">
                                    <button onClick={deletar}>Deletar</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    
                    <Table
                        tipos={listaTipos}
                        
                    />
                  

                </div>
            </div>
        </div>
    );
}

export default ListaTipoDoacao;