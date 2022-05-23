import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';
import ComboBoxBeneficiario from '../components/ComboBoxBeneficiario';
import ComboBoxCampanha from '../components/ComboBoxCampanha';

const localRecursos = 'http://localhost:4000/inscricao'

export default function RealizarInscricao() {
    const [inscricao, setInscricao] = React.useState('');
    const [listaB, setlistaB] = React.useState([])
    const [listaC, setlistaC] = React.useState([])

    React.useEffect(() => {
        fetchBeneficiarios()
        fetchCampanhas()
    }, [])

    async function fetchBeneficiarios() {
        await fetch('http://localhost:4000/beneficiario/dependente/'+localStorage.getItem("usuario"),{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setlistaB(dados);
        }, 
        error =>{
            alert(error)
        });
    }
    async function fetchCampanhas() {
        await fetch('http://localhost:4000/campanhaDoacao',{method:"GET"})
        .then(resposta=>resposta.json())
        .then(dados=>{
            setlistaC(dados);
        }, 
        error =>{
            alert(error)
        });
    }


    function handler() {
            setInscricao({bene_id: document.getElementById('beneficiario').value,campanha_id:document.getElementById('campanha').value}); 
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if(inscricao.bene_id != "Selecione o beneficiario" && inscricao.campanha_id != "Selecione a campanha"){
            await fetch(localRecursos,{method:"POST",
                                headers:{'Content-Type':'application/json'},
                                body:JSON.stringify(inscricao)
            })
            .then(resposta=>resposta.json())
            .then(r=>{if(r.erro === undefined){
                swal("Finalizado!", "Inscricao efetuada com sucesso.", "success").then(function() {
                    window.location = '/realizarinscricao';
                }) 
                }else{
                    swal("Erro!", "Inscricao não efetuada com sucesso.", "error").then(function() {
                        window.location = '/realizarinscricao';
                    }) 
                }})
            .catch(e=>alert(e))    
               

        }
        else{
            swal("Não é possivel prosseguir!", "Por favor, selecione uma campanha e um beneficiario", "alert")
        }
        setInscricao('');
        

    }

    return(
        <div>
            <Header/>
            <div class="cadastro">
                <form class="campos-cadastro" onSubmit={handleSubmit}>
                    <h3 class="titulo-style-1">Inscrever beneficiario na campanha</h3><br/>
                    
                    <div class="comboBox">
                        <ComboBoxBeneficiario beneficiarios={listaB}/>
                    </div>
                    
                    <div class="comboBox">
                        <ComboBoxCampanha campanhas={listaC}/>
                    </div>
                    <button class="btConfirmar" onClick={handler}>Confirmar</button>
                
                </form>
            </div>
            
        </div>
    );
}