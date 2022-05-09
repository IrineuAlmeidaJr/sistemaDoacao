import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';

const localRecursos = 'http://localhost:4000/tamanho'

export default function FormCadTamanho (tamanhoPass) {
    const [tamanho, setTamanho] = React.useState('');
    const [estaAtualizando, setEstaAtualizando] = React.useState(false);
    React.useEffect(()=>{
        atualiza()
    });
    function atualiza(){
        if(tamanhoPass.location.state === undefined){
            setEstaAtualizando(false)
        }
        else{
            setEstaAtualizando(true)
            setTamanho({cod: tamanhoPass.location.state.cod, tipo: tamanhoPass.location.state.tipo})
        }
    }
    function handler() {
        setTamanho({tipo:document.getElementById('tipo').value});
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!estaAtualizando){
            fetch(localRecursos,{method:"POST",
                                headers:{'Content-Type':'application/json'},
                                body:JSON.stringify(tamanho)
            })
            .then(resposta=>alert(resposta.statusText))
            .catch(e=>alert(e))        

            swal("Finalizado!", "Cadastrado efetuado com sucesso.", "success").then(function() {
                window.location = '/';
            }); 
        }
        else{
            fetch(localRecursos,{method:"PUT",
                                 headers:{'Content-Type':'application/json'},
                                 body:JSON.stringify(tamanho)
            })
            .then(resposta=>alert(resposta.statusText))
            .catch(e=>alert(e))        
            
 
            swal("Finalizado!", "tamanho alterado com sucesso.", "success").then(function() {
                window.location = '/';
            }); 
        }
        setTamanho('');
        

    }
    function manipularMudanca(e){
        /*o evento "e" traz quem disparou o evento (target) */
        const componente = e.target;
        /*valor trazido pelo componente no momento em que o evento é disparado */
        const valor = componente.value;
        /*identificação do componente */
        const nome = componente.name;
        setTamanho({...tamanho,[nome]:valor});
    }
    
    
    return(
        <div>
            <Header/>
            <div class="cadastro">
                <form class="campos-cadastro" onSubmit={handleSubmit}>
                    <h3 class="titulo-style-1">Cadastrar Tamanho</h3><br/>

                    <div class="inputBox">
                        <label class="label-bold" for="tipoDoacao">Tamanho:</label><br/>
                        <input class="input-style-1"  type="text" id="tipo" name="tipo" size="15"  value={tamanho.tipo} onChange={manipularMudanca}/>
                    </div>


                    <br/><br/>
                    <button class="btConfirmar" onClick={handler}>Enviar</button>
                </form>
            </div>
            
        </div>
    );
}