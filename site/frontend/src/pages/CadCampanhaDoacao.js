import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';


const localRecursos = 'http://localhost:4000/campanhaDoacao'


export default function FormCadCampanhaDoacao (campanhaPass){

    const [nomeCampanha, setNomeCampanha] = React.useState('');
    const [dataInicio, setDataInicio] = React.useState(new Date());
    const [dataFim, setDataFim] = React.useState(new Date());
    const [campanha,setCampanha] = React.useState('')
    const [estaAtualizando, setEstaAtualizando] = React.useState(false);
    React.useEffect(()=>{
        if(!estaAtualizando)
            atualiza()
    });

    function atualiza(){
        if(tamanhoPass.location.state === undefined){
            setEstaAtualizando(false)
        }
        else{
            setEstaAtualizando(true)
            setCampanha({cod: campanhaPass.location.state.cod,nome: campanhaPass.location.state.nome,dataInicio: campanhaPass.location.state.dataInicio,dataFim: campanhaPass.location.dataFim})
        }
    }
    

    function handler() {
        setNomeCampanha(document.getElementById('nomeCampanha').value);
        setDataInicio(document.getElementById('dataInicio').value);
        setDataFim(document.getElementById('dataFim').value);
        if(!estaAtualizando){
            setCampanha({nome: nomeCampanha,dataInicio: dataInicio,dataFim: dataFim})
        }
        else{
            setCampanha({cod: campanhaPass.location.state.cod, nome: nomeCampanha,dataInicio: dataInicio,dataFim: dataFim})
        }
        
    }

    async function handleSubmit(e) {

        e.preventDefault();
        if(!estaAtualizando){

            await fetch(localRecursos,{method:"POST",

                                                    headers:{'Content-Type':'application/json'},
                                                    body:JSON.stringify(campanha)
            })

            .catch(e=>alert(e))


            swal("Finalizado!", "Cadastrado efetuado com sucesso.", "success").then(function() {
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
        
        setNomeCampanha('');
        setDataInicio(new Date());
        setDataFim(new Date());

    }


    return(
<div>
            <Header/>

            <div class="cadastro">
                <form action="POST" class="campos-cadastro" onSubmit={handleSubmit}>

                    <h1>Cadastro Campanha de doação</h1>

                    <div class="box-nome">
                        <label for="nomeCampanha">Nome da campanha</label>
                        <input type="text" name="nomeCampanha" id="nomeCampanha" placeholder="Nome da campanha" defaultValue={campanha.nome} />
                    </div>

                    <div class="box-cpf">
                        <label for="dataInicio">Data de inicio</label>
                        <input type="date" name="dataInicio" id="dataInicio" defaultValue={campanha.dataInicio}/>
                    </div>

                    <div class="box-senha">
                        <label for="dataFim">Data de termino</label>
                        <input type="date" name="dataFim" id="dataFim" defaultValue={campanha.dataFim}/>
                    </div>
                    
                    <button class="bt-cadUsuario" type="submit" onClick={handler}>Enviar</button>
                </form>
            </div>
        </div>
    );

}