import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";

export default function FormCadLocalDoacao (){

    const [nomeRua, setNomeRua] = React.useState('');
    const [numero, setNumero] = React.useState('');
    const [bairro, setBairro] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const [estado, setEstado] = React.useState('');
    const [CodCamp, setCodCamp] = React.useState(0);
    const [CodUsuario, setCodUsuario] = React.useState(0);

    function handler() {
        setNomeRua(document.getElementById('nomeRua').value);
        setNumero(document.getElementById('numero').value);
        setBairro(document.getElementById('bairro').value);
        setCidade(document.getElementById('cidade').value);
        setEstado(document.getElementById('estado').value);
        setCodCamp(document.getElementById('CodCamp').value);
        
    }


    function handleSubmit(e) {

        e.preventDefault();

        console.log(nomeRua);
        console.log(numero);
        console.log(bairro);
        console.log(cidade);
        console.log(estado);
        console.log(CodCamp);


        const localDoacaoJSON = {
            nomeRua: nomeRua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            CodCamp: CodCamp
        }


        fetch('http://localhost:4000/localDoacao',{method:"POST",
                                                    headers:{'Content-Type':'application/json'},
                                                    body:JSON.stringify(localDoacaoJSON)
        })
        .then(resposta=>alert(resposta.statusText))
        .catch(e=>alert(e))

        setBairro('');
        setCidade('');
        setEstado('');
        setCodCamp(0);
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
                        <input type="text" name="nomeRua" id="nomeRua" placeholder="Digite o Nome da rua" />
                    </div>

                    <div class="box-cpf">
                        <label for="numero">Numero</label>
                        <input type="text" name="numero" id="numero" placeholder="01" />
                    </div>

                    <div class="box-senha">
                        <label for="nome">Bairro</label>
                        <input type="text" name="bairro" id="bairro" placeholder="Informe p bairro" />
                    </div>

                    <div class="box-dtNasc">
                        <label for="cidade">Cidade</label>
                        <input type="text" name="cidade" id="cidade" placeholder="Informe a cidade"/>
                    </div>

                    <div class="box-endereco">
                        <label for="estado">Estado</label>
                        <input type="text" name="estado" id="estado" placeholder="Informe o estado" />
                    </div>

                    <div class="box-email">
                        <label for="CodCamp">Codigo da campanha</label>
                        <input type="text" name="CodCamp" id="CodCamp" placeholder="Informe a qual campanha o local pertence" />
                    </div>                

                    <button class="bt-cadUsuario" type="submit" onClick={handler}>Enviar</button>
                </form>
            </div>
        </div>
    );

}