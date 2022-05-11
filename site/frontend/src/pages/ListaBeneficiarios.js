import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import Table from '../components/TableBeneficiario';
const localRecursos = 'http://localhost:4000/Beneficiario'


const ListaBeneficiarios = () => {
    const history = useHistory();
    const[ListaBeneficiarios, setListaBeneficiarios] = React.useState([]);
    
    React.useEffect(() => {
        fetchBeneficiarios();
    }, [])

    function fetchBeneficiarios() {
        fetch(localRecursos,{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setListaBeneficiarios(dados);
        }, 
        error =>{
            alert(error)
    }); 
    }

    function deletar(beneficiarioR) {
        console.log(beneficiarioR)
        let cod = {cod: beneficiarioR.bene_id}
        fetch(localRecursos,{method:"DELETE",
                                    headers:{'Content-Type':'application/json'},
                                    body:JSON.stringify(cod)
        })
        .then(alert("excluído"))
        fetchBeneficiarios()
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