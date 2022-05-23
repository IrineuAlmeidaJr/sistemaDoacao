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

    React.useEffect(() => {
        fetchInscricoes()
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

    function handler() {
            let obj = document.getElementById('inscrito').value
            let aux = obj.split(",",2)
            setCancelar({bene_id: aux[0],campanha_id:aux[1]}); 
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if(cancelar.bene_id != "Selecione a inscricao"){
            await fetch(localRecursos,{method:"DELETE",
                                headers:{'Content-Type':'application/json'},
                                body:JSON.stringify(cancelar)
            })
            .then(resposta=>resposta.json())
            .then(r=>{if(r.erro === undefined){
                swal("Finalizado!", "Cancelamento efetudo com sucesso.", "success").then(function() {
                    window.location = '/cancelarinscricao';
                }) 
                }else{
                    swal("Erro!", "Inscricao não efetuada com sucesso.", "error").then(function() {
                        window.location = '/cancelarinscricao';
                    }) 
                }})
            .catch(e=>alert(e))    
               

        }
        else{
            swal("Não é possivel prosseguir!", "Por favor, selecione uma campanha e um beneficiario", "alert")
        }
        setCancelar('');
        alert("beleza")
        

    }

    return(
        <div>
            <Header/>
            <div class="cadastro">
                <form class="campos-cadastro" onSubmit={handleSubmit}>
                    <h3 class="titulo-style-1">Cancelar inscrição</h3><br/>
                    <form class="inputBox">
                        <ComboBoxInscricao inscricoes={listaB}/>
                    </form>

                    <br/><br/>
                    <button class="btConfirmar" onClick={handler}>Enviar</button>
                </form>
            </div>
            
        </div>
    );
}