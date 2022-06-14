import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import api from '../service/api';
import swal from 'sweetalert';

const localRecursos = 'http://localhost:4000/tamanho'

export default function FormCadTamanho (tamanhoPass) {
    const [tamanho, setTamanho] = React.useState('');
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
            setTamanho({cod: tamanhoPass.location.state.cod,nome: tamanhoPass.location.state.tipo})
        }
    }
    function handler() {
        if(!estaAtualizando){
            setTamanho({nome:document.getElementById('tipo').value});
        }
        else{
            setTamanho({cod: tamanhoPass.location.state.cod,nome:document.getElementById('tipo').value});
        }
        
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if(!estaAtualizando){
            /*await fetch(localRecursos,{method:"POST",
                                headers:{'Content-Type':'application/json'},
                                body:JSON.stringify(tamanho)
            })
            .catch(e=>alert(e))        

            swal("Finalizado!", "Cadastrado efetuado com sucesso.", "success").then(function() {
                window.location = '/';
            }); */

            const t = {
                nome: tamanho.nome
            };
            api.post('/tamanho', t); 
            swal("Finalizado!", "Cadastro de tamanho efetuado com sucesso.", "success").then(function() {
                window.location = '/';
            });
        }
        else{
            /*await fetch(localRecursos,{method:"PUT",
                                 headers:{'Content-Type':'application/json'},
                                 body:JSON.stringify(tamanho)
            })
            .catch(e=>alert(e))        
            
 
            swal("Finalizado!", "tamanho alterado com sucesso.", "success").then(function() {
                window.location = '/';
            }); */
            const t = {
                cod: tamanhoPass.location.state.cod,
                nome: tamanho.nome
            };
            api.put('/tamanho', t); 
            swal("Finalizado!", "Alteração efetuada com sucesso.", "success").then(function() {
                window.location = '/';
            });
        }
        setTamanho('');
        

    }
    /*function manipularMudanca(e){
        const componente = e.target;
        const valor = componente.value;
        const nome = componente.name;
        setTamanho({...tamanho,[nome]:valor, cod: tamanhoPass.location.state.cod});
 
    }*/

    return(
        <div>
            <Header/>
            <div class="cadastro">
                <form class="campos-cadastro" onSubmit={handleSubmit}>
                    <h3 class="titulo-style-1">Cadastrar Tamanho</h3><br/>

                    <div class="inputBox">
                        <label class="label-bold" for="tipoDoacao">Tamanho:</label><br/>
                        <input class="input-style-1"  type="text" id="tipo" name="tipo" size="15"  defaultValue={tamanho.nome}/>
                    </div>


                    <br/><br/>
                    <button class="btConfirmar" onClick={handler}>Confirmar</button>
                </form>
            </div>
            
        </div>
    );
}