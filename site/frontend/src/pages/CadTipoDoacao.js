import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';
import api from '../service/api';


export default function FormCadTipoDoacao () {
    const [nome, setNome] = React.useState('');
    
    function handler() {
        setNome(document.getElementById('tipoDoacao').value);
        
    }

    function handleSubmit(e) {
        e.preventDefault();

        //console.log(nome);

        const tipodoacao = {
            nome: nome
        };

        api.post('/tipoDoacao', tipodoacao); 
        

                

        setNome('');

        swal("Finalizado!", "Cadastro tipo de doação efetuado com sucesso.", "success").then(function() {
            window.location = '/';
        });   
        

    }
    
    return(
        <div>
            <Header/>
            <div class="cadastro">
                <form class="campos-cadastro" onSubmit={handleSubmit}>
                    <h3 class="titulo-style-1">Cadastrar Tipo de Doação</h3><br/>

                    <div class="inputBox">
                        <label class="label-bold" for="tipoDoacao">Tipo de doação:</label><br/>
                        <input class="input-style-1" type="text" id="tipoDoacao" name="tipoDoacao" size="15"/>
                    </div>
                    

                    <br/><br/>
                    <button class="btConfirmar" onClick={handler}>Confirmar</button>
                </form>
            </div>
            
        </div>
    );
}