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
    

    async function deletar(beneficiarioR) {
       const id = beneficiarioR.bene_id;
       try {
        await api.delete(`/Beneficiario/${id}`);
           fetchBeneficiarios();
       } catch(err) {
              console.log(err);
              //sweetAlert("Erro", "Erro ao deletar", "error");              
         }
    }
    
    function alterar(beneficiarioR) {
        history.push({
        pathname: '/CadBeneficiario',
        state:{cod: beneficiarioR.bene_id, nome: beneficiarioR.bene_nome, cpf: beneficiarioR.bene_cpf, datanascimento: beneficiarioR.bene_dataNascimento, usuarioId: beneficiarioR.usuario_id_usu},
    });
    }
     
        return(
            <div>
            <Header />
            <div class="boxPrincipal">
            
                <div class="campo-exibicao">
                    <h1>Gerenciar Beneficiarios</h1>
                    <div class="box-senha">
                            <label for="Busca">Buscar por nome</label>
                            <input type="input" name="busca" id="busca"/>
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