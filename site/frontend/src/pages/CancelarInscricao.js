import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';
import ComboBoxBeneficiario from '../components/ComboBoxBeneficiario';
import ComboBoxCampanha from '../components/ComboBoxCampanha';
import ComboBoxInscricao from '../components/ComboBoxInscricao';

const localRecursos = 'http://localhost:4000/inscricao'

export default function CancelarInscricao() {
    const [cancelar, setCancelar] = React.useState('');
    const [listaB, setlistaB] = React.useState([])
    const [listaC, setlistaC] = React.useState([])

    React.useEffect(() => {
        fetchInscricoes()
        fetchCampanhas()
    }, [])

    async function fetchInscricoes() {
        await fetch('http://localhost:4000/inscricao/busca/'+localStorage.getItem("usuario"),{method:"GET"})
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
            let obj = document.getElementById('inscrito').value
            console.log(obj)
            //setCancelar({bene_id: ,campanha_id:document.getElementById('campanha').value}); 
    }

    async function handleSubmit(e) {
        /*e.preventDefault();
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
        setInscricao('');*/
        alert("beleza")
        

    }

    return(
        <div>
            <Header/>
            <div class="cadastro">
                <form class="campos-cadastro" onSubmit={handleSubmit}>
                    <h3 class="titulo-style-1">Cadastrar Tamanho</h3><br/>
                    <form class="inputBox">
                        <ComboBoxInscricao inscricoes={listaB}/>
                    </form>

                    <br/><br/>
                    <button class="btConfirmar" onClick={handler}>Cancelar</button>
                </form>
            </div>
            
        </div>
    );
}