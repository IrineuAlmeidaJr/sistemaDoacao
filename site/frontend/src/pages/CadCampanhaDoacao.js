import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";


const localRecursos = 'http://localhost:4000/CampanhaDoacao'
export default function FormCadCampanhaDoacao (){

    const [nomeCampanha, setNomeCampanha] = React.useState('');
    const [dataInicio, setDataInicio] = React.useState(new Date());
    const [dataFim, setDataFim] = React.useState(new Date());
    

    function handler() {
        setNomeCampanha(document.getElementById('nomeCampanha').value);
        setDataInicio(document.getElementById('dataInicio').value);
        setDataFim(document.getElementById('dataFim').value);
        
    }

    function handleSubmit(e) {

        e.preventDefault();

        console.log(nomeCampanha);
        console.log(dataInicio);
        console.log(dataFim);

        const campanhaJSON = {
            nomeCampanha: nomeCampanha,
            dataInicio: dataInicio,
            dataFim: dataFim
        }

        fetch(localRecursos,{method:"POST",
             headers:{'Content-Type':'application/json'},
             body:JSON.stringify(campanhaJSON)
        }).then (res=>res.json())
        .then(resposta=>alert(resposta.statusText))
        .catch(e=>alert(e))

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
                        <input type="text" name="nomeCampanha" id="nomeCampanha" placeholder="Nome da campanha" />
                    </div>

                    <div class="box-cpf">
                        <label for="dataInicio">Data de inicio</label>
                        <input type="date" name="dataInicio" id="dataInicio" />
                    </div>

                    <div class="box-senha">
                        <label for="dataFim">Data de termino</label>
                        <input type="date" name="dataFim" id="dataFim"/>
                    </div>
                    
                    <button class="bt-cadUsuario" type="submit" onClick={handler}>Enviar</button>
                </form>
            </div>
        </div>
    );

}