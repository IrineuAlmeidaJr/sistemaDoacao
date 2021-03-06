import React from 'react';
import api from '../service/api'
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';
import ComboBox from '../components/ComboBoxLocalDoacao';
const localRecursos = 'http://localhost:4000/campanhaDoacao'


export default function FormCadCampanhaDoacao (campanhaPass){


    const [campanha,setCampanha] = React.useState('')
    const [estaAtualizando, setEstaAtualizando] = React.useState(false);
    const [listaL, setlistaL]=React.useState([])
    React.useEffect(()=>{
        if(!estaAtualizando)
            atualiza()
        fetchCampanhas()      
    }, []);

    // React.useEffect(() => {
    //     fetchCampanhas()  
    // }, [])

    function atualiza(){
        // *** OBS: depois arrumar essar parte está dando problema
         if(campanhaPass.location.state === undefined){
             setEstaAtualizando(false)
         }
         else{
             setEstaAtualizando(true)
             setCampanha({cod: campanhaPass.location.state.cod,nome: campanhaPass.location.state.nome,dataInicio: campanhaPass.location.state.dataInicio,dataFim: campanhaPass.location.dataFim})
         }
    }
    

    function handler() {
        if(!estaAtualizando){
            setCampanha({nome: document.getElementById('nome').value,dataInicio: document.getElementById('dataInicio').value,dataFim: document.getElementById('dataFim').value})
        }
        else{
            setCampanha({cod: campanhaPass.location.state.cod, nome: document.getElementById('nome').value,dataInicio: document.getElementById('dataInicio').value,dataFim: document.getElementById('dataFim').value})
        }
        
    }

    async function fetchCampanhas() {
        try {
            const response = await api.get('/localDoacao');
            setlistaL(response.data);            
        
        } catch(err) {
            console.log(err);
        }  
    }

    async function handleSubmit(e) {
        alert(campanha.nome)
        e.preventDefault();
        if(!estaAtualizando){
            await fetch(localRecursos,{method:"POST",

                                                    headers:{'Content-Type':'application/json'},
                                                    body:JSON.stringify(campanha)
            })

            .catch(e=>alert(e))


            swal("Finalizado!", "Cadastro efetuado com sucesso.", "success").then(function() {
                window.location = '/';
            }); 
        }
        else{
            await fetch(localRecursos,{method:"PUT",
                                 headers:{'Content-Type':'application/json'},
                                 body:JSON.stringify(campanha)
            })
            .catch(e=>alert(e))        
            
 
            swal("Finalizado!", "Campanha de doação alterada com sucesso.", "success").then(function() {
                window.location = '/';
            }); 
        }

    }


    return(
<div>
            <Header/>

            <div class="cadastro">
                <form action="POST" class="campos-cadastro" onSubmit={handleSubmit}>

                    <h1>Cadastro Campanha de doação</h1>

                    <div class="box-nome">
                        <label for="nomeCampanha">Nome da campanha</label>
                        <input type="text" name="nome" id="nome" placeholder="Nome da campanha" defaultValue={campanha.nome} />
                    </div>

                    <div class="box-cpf">
                        <label for="dataInicio">Data de inicio</label>
                        <input type="date" name="dataInicio" id="dataInicio" defaultValue={campanha.dataInicio}/>
                    </div>

                    <div class="box-senha">
                        <label for="dataFim">Data de termino</label>
                        <input type="date" name="dataFim" id="dataFim" defaultValue={campanha.dataFim}/>
                    </div>
                    <div class="box-local">
                        <p for="local">Selecione o local</p>
                       
                        <ComboBox locais={listaL}/>
                        
                    </div>
                    <button class="bt-cadUsuario" type="submit" onClick={handler}>Confirmar</button>
                </form>
            </div>
        </div>
    );

}