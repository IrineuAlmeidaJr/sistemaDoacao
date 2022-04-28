import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";

const localRecursos = 'http://localhost:4000/tipoDoacao'

export default function FormCadTipoDoacao () {
    const [tipodoacao, setTipodoacao] = React.useState('');
    
    function handler() {
        setTipodoacao(document.getElementById('tipoDoacao').value);
        
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(tipodoacao);
        const tipoDoacaoJSON = {
            tipo: tipodoacao
        }

        fetch(localRecursos,{method:"POST",
                            headers:{'Content-Type':'application/json'},
                            body:JSON.stringify(tipoDoacaoJSON)
        })
        .then(resposta=>alert(resposta.statusText))
        .catch(e=>alert(e))
        

                

        setTipodoacao('');
        

    }
    
    return(
        <div>
            <Header/>
            <form onSubmit={handleSubmit}>
                    <h3 class="titulo-style-1">Cadastrar Tipo de Doação</h3><br/>
                    <label class="label-bold" for="tipoDoacao">Tipo de doação:</label><br/>
                    <input class="input-style-1" type="text" id="tipoDoacao" name="tipoDoacao" size="15"/>

                    <br/><br/>
                    <button onClick={handler}>Confirmar</button>
            </form>
        </div>
    );
}