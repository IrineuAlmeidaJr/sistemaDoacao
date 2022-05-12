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
    const [CodUsuario, setCodUsuario] = React.useState(2);
    const[atualizando, setAtualizando] = React.useState(false);
    const[listaAlterar, setListaAlterar] = React.useState([]);


    React.useEffect(()=>{
        if(!atualizando)
        atualiza()
    });

    function atualiza(){
        if(tamanhoPass.location.state === undefined)
            setAtualizando(false)   
        else
            {
                setAtualizando(true)
                setListaAlterar({cod: tamanhoPass.location.state.cod, nomerua: tamanhoPass.location.state.nomerua, numero: tamanhoPass.location.state.numero, bairro: tamanhoPass.location.state.bairro, cidade: tamanhoPass.location.state.cidade, estado: tamanhoPass.location.state.estado, codusuario: tamanhoPass.location.state.usuario_id_usu})
            }             
    }

    function handler() {
        setNomeRua(document.getElementById('nomeRua').value);
        setNumero(document.getElementById('numero').value);
        setBairro(document.getElementById('bairro').value);
        setCidade(document.getElementById('cidade').value);
        setEstado(document.getElementById('estado').value);
        setCodUsuario(tamanhoPass.location.state.cod);
        
    }


    function handleSubmit(e) {

        e.preventDefault();
        console.log(atualizando)
        if(!atualizando)
        {
            const localDoacaoJSON = {
                nomeRua: nomeRua,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                codUsuario: CodUsuario
                
            }
            console.log(localDoacaoJSON)
    
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
            const listaAlterar = {
                nomeRua: nomeRua,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                codUsuario: CodUsuario
                
            }
            fetch('http://localhost:4000/localDoacao',{method:"PUT",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(listaAlterar)
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
        setCodUsuario(2);
    }

    function manipularMudanca(e){
        /*o evento "e" traz quem disparou o evento (target) */
        const componente = e.target;
        /*valor trazido pelo componente no momento em que o evento é disparado */
        const valor = componente.value;
        /*identificação do componente */
        const nome = componente.name;


        setListaAlterar({...listaAlterar, [nome]: valor}); 
    }  

    return(
        <div>
            <Header/>

            <div class="cadastro">
                <form action="POST" class="campos-cadastro" onSubmit={handleSubmit}>

                    <h1>Cadastro Local de doação</h1>

                    <div class="box-nome">
                        <label for="nomerua">Nome da Rua</label>
                        <input type="text" name="nomeRua" id="nomeRua" placeholder="Digite o Nome da rua" required="true" defaultValue={listaAlterar.nomerua} onChange={manipularMudanca}/>
                    </div>

                    <div class="box-cpf">
                        <label for="numero">Numero</label>
                        <input type="text" name="numero" id="numero" placeholder="01" required="true" defaultValue={listaAlterar.numero}  onChange={manipularMudanca}/>
                    </div>

                    <div class="box-senha">
                        <label for="nome">Bairro</label>
                        <input type="text" name="bairro" id="bairro" placeholder="Informe p bairro" required="true" defaultValue={listaAlterar.bairro} onChange={manipularMudanca}/>
                    </div>

                    <div class="box-dtNasc">
                        <label for="cidade">Cidade</label>
                        <input type="text" name="cidade" id="cidade" placeholder="Informe a cidade" required="true" defaultValue={listaAlterar.cidade} onChange={manipularMudanca}/>
                    </div>

                    <div class="box-endereco">
                        <label for="estado">Estado</label>
                        <input type="text" name="estado" id="estado" placeholder="Informe o estado" required="true" defaultValue={listaAlterar.estado} onChange={manipularMudanca} />
                    </div>

                    <button class="bt-cadUsuario" type="submit" onClick={handler}>Enviar</button>
                </form>
            </div>
        </div>
    );

}