import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import Table from '../components/TableBeneficiario';
import api from '../service/api';



const ListaBeneficiarios = () => {
    
    const history = useHistory();
    const[ListaBeneficiarios, setListaBeneficiarios] = React.useState([]);
    
    React.useEffect(() => {
        fetchBeneficiarios()
    }, [])

    async function fetchBeneficiarios() 
    {
       try {
            const response = await api.get('/beneficiario');
            setListaBeneficiarios(response.data);
        } catch(err) {
                console.log(err);
            }
    }
    

    async function buscarNome() {
        const nome = document.getElementById('pesquisarUsu').value;
        console.log("buscarNome: " + nome);
        try {
            const response = await api.get(`/beneficiario/${nome}`);
            setListaBeneficiarios(response.data);  
        } catch(err) {
            console.log(err);
        }            
    }

    async function deletar(beneficiarioR) {
       const id = beneficiarioR.id;
       //console.log("deletar: " + id);
       try {
        swal("Deletar", "Deseja realmente deletar este item?", "warning", {buttons: ["Não", "Sim"]})
        .then(async (sim) => {
            if(sim) {
                await api.delete(`/beneficiario/${id}`);
                fetchBeneficiarios();
            }
        }
        );
         } catch(err) {
            swal("Erro", "Erro ao deletar", "error");
        }
        
    }
    
    function alterar(beneficiarioR) {
        //console.log("alterar:"+beneficiarioR.id)
        history.push({
        pathname: '/CadBeneficiario',
        state:{id: beneficiarioR.id, nome: beneficiarioR.nome, cpf: beneficiarioR.cpf, datanascimento: beneficiarioR.dataNascimento, usuarioId: beneficiarioR.usuarioId},
    });
    }
     
        return(
            <div>
            <Header />
            <div class="boxPrincipal">
            
                <div class="campo-exibicao">
                    <h1>Gerenciar Beneficiarios</h1>
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
                    <Table
                        beneficiarios={ListaBeneficiarios} 
                        deletar={deletar} 
                        alterar={alterar}
                    />                  
                </div>
            </div>
        </div>
    
        );         
}
export default ListaBeneficiarios;