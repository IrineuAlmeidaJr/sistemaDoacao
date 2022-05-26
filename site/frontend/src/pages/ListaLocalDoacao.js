import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import Table from '../components/TableLocalDoacao';
//const localRecursos = 'http://localhost:4000/LocalDoacao'
import api from '../service/api';


const ListaLocalDoacao = () => {
    const history = useHistory();
    const[ListaLocalDoacao, setListaLocalDoacao] = React.useState([]);
    
    React.useEffect(() => {
        fetchBeneficiarios();
    }, [])

    async function fetchBeneficiarios() 
    {
       try {
            const response = await api.get('/LocalDoacao');
            setListaLocalDoacao(response.data);
        } catch(err) {
                console.log(err);
            }
        
    }

    function deletar(LocalDoacaoR) {
        const id = LocalDoacaoR.id;
        console.log("deletar: " + id);
        try {
            api.delete(`/localDoacao/${id}`);
            fetchBeneficiarios();
        } catch(err) {
               //console.log(err);
               swal("Erro", "Erro ao deletar", "error");             
          }
    }
    
    function alterar(LocalDoacaoR) {
        history.push({
        pathname: '/CadLocalDoacao',
        state:{id: LocalDoacaoR.id, nomerua: LocalDoacaoR.nomeRua, numero: LocalDoacaoR.numero, bairro: LocalDoacaoR.bairro, cidade: LocalDoacaoR.cidade, estado: LocalDoacaoR.estado, usuarioId: LocalDoacaoR.usuarioId},
    });
    }
     
        return(
            <div>
            <Header />
            <div class="boxPrincipal">
            
                <div class="campo-exibicao">
                    <h1>Gerenciar Local Doacao</h1>
                    <div class="box-senha">
                            <label for="Busca">Buscar por nome</label>
                            <input type="input" name="busca" id="busca"/>
                    </div>
                    <Table
                        locais={ListaLocalDoacao} 
                        deletar={deletar} 
                        alterar={alterar}
                    />                  
                </div>
            </div>
        </div>
    
        );         
}
export default ListaLocalDoacao;