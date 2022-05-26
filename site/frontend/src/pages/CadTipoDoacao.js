import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';
import api from '../service/api';


export default function FormCadTipoDoacao (tipodoacao) {
    const [nome, setNome] = React.useState('');
    const [estaAtualizando, setEstaAtualizando] = React.useState(false);

    React.useEffect(()=>{
        if(!estaAtualizando)
            atualiza()
    });

    function atualiza(){
        if(tipodoacao.location.state === undefined){
            setEstaAtualizando(false)
        }
        else{
            setEstaAtualizando(true)
            setNome({id: tipodoacao.location.state.id, nome: tipodoacao.location.state.nome})
        }
    }
    
    function handler() {
        if(!estaAtualizando){
            setNome({nome:document.getElementById('tipoDoacao').value});
        }
        else{
            setNome({cod: tipodoacao.location.state.cod,nome:document.getElementById('tipoDoacao').value});
        }        
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!estaAtualizando){ 
            const td = {
                nome: nome.nome
            };
            api.post('/tipoDoacao', td); 
            swal("Finalizado!", "Cadastro tipo de doação efetuado com sucesso.", "success").then(function() {
                window.location = '/';
            });  
        } else {
            const td = {
                id: tipodoacao.location.state.id,
                nome: nome.nome
            };
            api.put('/tipoDoacao', td); 
            swal("Finalizado!", "Alteração efetuada com sucesso.", "success").then(function() {
                window.location = '/';
            });
        }

        //console.log(nome); 

        setNome('');

         
        

    }
    
    return(
        <div>
            <Header/>
            <div class="cadastro">
                <form class="campos-cadastro" onSubmit={handleSubmit}>
                    <h3 class="titulo-style-1">Cadastrar Tipo de Doação</h3><br/>

                    <div class="inputBox">
                        <label class="label-bold" for="tipoDoacao">Tipo de doação:</label><br/>
                        <input class="input-style-1" type="text" id="tipoDoacao" name="tipoDoacao" size="15" defaultValue={nome.nome}/>
                    </div>
                    

                    <br/><br/>
                    <button class="btConfirmar" onClick={handler}>Confirmar</button>
                </form>
            </div>
            
        </div>
    );
}