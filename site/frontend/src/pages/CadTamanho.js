import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';

const localRecursos = 'http://localhost:4000/tamanho'

export default function FormCadTamanho () {
    const [tamanho, setTamanho] = React.useState('');
    const [estaAtualizando, setEstaAtualizando] = React.useState(false);
    
    function handler() {
        setTamanho(document.getElementById('tamanho').value);
        
    }

    function handleSubmit(e) {
        e.preventDefault();

        const tamanhoJSON = {
            tipo: tamanho
        }

        fetch(localRecursos,{method:"POST",
                            headers:{'Content-Type':'application/json'},
                            body:JSON.stringify(tamanhoJSON)
        })
        .then(resposta=>alert(resposta.statusText))
        .catch(e=>alert(e))        
        setTamanho('');

        swal("Finalizado!", "Cadastrado efetuado com sucesso.", "success").then(function() {
            window.location = '/';
        }); 
        

    }
    
    return(
        <div>
            <Header/>
            <div class="cadastro">
                <form class="campos-cadastro" onSubmit={handleSubmit}>
                    <h3 class="titulo-style-1">Cadastrar Tamanho</h3><br/>

                    <div class="inputBox">
                        <label class="label-bold" for="tipoDoacao">Tamanho:</label><br/>
                        <input class="input-style-1" type="text" id="tamanho" name="tamanho" size="15"/>
                    </div>


                    <br/><br/>
                    <button class="btConfirmar" onClick={handler}>Confirmar</button>
                </form>
            </div>
            
        </div>
    );
}