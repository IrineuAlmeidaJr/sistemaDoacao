import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import Table from '../components/TableLocalDoacao';
const localRecursos = 'http://localhost:4000/LocalDoacao'


const ListaLocalDoacao = () => {
    const history = useHistory();
    const[ListaLocalDoacao, setListaLocalDoacao] = React.useState([]);
    
    React.useEffect(() => {
        fetchBeneficiarios();
    }, [])

    function fetchBeneficiarios() {
        fetch(localRecursos,{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setListaLocalDoacao(dados);
        }, 
        error =>{
            alert(error)
    }); 
    }

    function deletar(LocalDoacaoR) {
        console.log(LocalDoacaoR)
        let cod = {cod: LocalDoacaoR.local_id}
        fetch(localRecursos,{method:"DELETE",
                                    headers:{'Content-Type':'application/json'},
                                    body:JSON.stringify(cod)
        })
        .then(alert("excluído"))
        fetchBeneficiarios()
    }
    
    function alterar(LocalDoacaoR) {
        history.push({
        pathname: '/CadLocalDoacao',
        state:{cod: LocalDoacaoR.local_id, nomerua: LocalDoacaoR.local_nomerua, numero: LocalDoacaoR.local_numero, bairro: LocalDoacaoR.local_bairro, cidade: LocalDoacaoR.local_cidade, estado: LocalDoacaoR.local_estado, usuarioId: LocalDoacaoR.usuario_id_usu},
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