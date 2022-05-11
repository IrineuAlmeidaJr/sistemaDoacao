import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';

export default function FormCadLocalDoacao (tamanhoPass){

    const [nomeRua, setNomeRua] = React.useState('');
    const [numero, setNumero] = React.useState('');
    const [bairro, setBairro] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const [estado, setEstado] = React.useState('');
    const [CodUsuario, setCodUsuario] = React.useState(0);
    const[atualizando, setAtualizando] = React.useState(false);


    React.useEffect(()=>{
        atualiza()
    });

    function atualiza(){
        if(tamanhoPass.location.state === undefined)
            setAtualizando(false)    
        else
            setAtualizando(true)              
    }

    function handler() {
        setNomeRua(document.getElementById('nomeRua').value);
        setNumero(document.getElementById('numero').value);
        setBairro(document.getElementById('bairro').value);
        setCidade(document.getElementById('cidade').value);
        setEstado(document.getElementById('estado').value);
        
    }


    function handleSubmit(e) {

        e.preventDefault();

        if(!atualizando)
        {
            const localDoacaoJSON = {
                nomeRua: nomeRua,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
            }
    
    
            fetch('http://localhost:4000/localDoacao',{method:"POST",
                                                        headers:{'Content-Type':'application/json'},
                                                        body:JSON.stringify(localDoacaoJSON)
            })
            //check if the response is status is 200
            .then(resposta=>{
                if(resposta.status === 200){
                    swal("Finalizado!", "Cadastrado efetuado com sucesso.", "success").then(function() {
                        window.location = '/';
                    }
                );
                }
                else
                    swal("Erro!", "Erro ao cadastrar Verifique a conexão com o banco.", "error")     
            })
            .catch(e=>{
                swal("Erro!", "Erro ao cadastrar Verifique a conexão com o banco.", "error")
            }
            )
        }
        else{
            fetch('http://localhost:4000/localDoacao',{method:"PUT",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(tamanhoPass.location.state)
                })
                .then(resposta=>alert(resposta.statusText))
                .catch(e=>alert(e))        


                swal("Finalizado!", "tamanho alterado com sucesso.", "success").then(function() {
                window.location = '/';
                });  
        }

        setBairro('');
        setCidade('');
        setEstado('');
        setNomeRua('');
        setNumero('');
    }


    return(
        <div>
            <Header/>

            <div class="cadastro">
                <form action="POST" class="campos-cadastro" onSubmit={handleSubmit}>

                    <h1>Cadastro Local de doação</h1>

                    <div class="box-nome">
                        <label for="nomeRua">Nome da Rua</label>
                        <input type="text" name="nomeRua" id="nomeRua" placeholder="Digite o Nome da rua" required="true"/>
                    </div>

                    <div class="box-cpf">
                        <label for="numero">Numero</label>
                        <input type="text" name="numero" id="numero" placeholder="01" required="true" />
                    </div>

                    <div class="box-senha">
                        <label for="nome">Bairro</label>
                        <input type="text" name="bairro" id="bairro" placeholder="Informe p bairro" required="true"/>
                    </div>

                    <div class="box-dtNasc">
                        <label for="cidade">Cidade</label>
                        <input type="text" name="cidade" id="cidade" placeholder="Informe a cidade" required="true"/>
                    </div>

                    <div class="box-endereco">
                        <label for="estado">Estado</label>
                        <input type="text" name="estado" id="estado" placeholder="Informe o estado" required="true" />
                    </div>

                    <button class="bt-cadUsuario" type="submit" onClick={handler}>Enviar</button>
                </form>
            </div>
        </div>
    );

}