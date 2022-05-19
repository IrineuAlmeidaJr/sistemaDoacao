import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';
import api from '../service/api';


//const localRecursos = 'http://localhost:4000/Beneficiario'

export default function FormCadBeneficiario (tamanhoPass){


    const[id, setId] = React.useState('');
    const[nome, setNome] = React.useState('');
    const[cpf, setCpf] = React.useState('');
    const[dataNascimento, setDataNascimento] = React.useState(new Date());
    const[usuarioId, setUsuarioId] = React.useState(24);
    const[atualizando, setAtualizando] = React.useState(false);
    

    React.useEffect(()=>{
    if(!atualizando)
        atualiza()
    });

    function atualiza(){
        if(tamanhoPass.location.state === undefined){
            setAtualizando(false)
        }
        else{
            setAtualizando(true)
            setNome(tamanhoPass.location.state.nome);
            setCpf(tamanhoPass.location.state.cpf);
            setDataNascimento(tamanhoPass.location.state.dataNascimento);
            setUsuarioId(tamanhoPass.location.state.usuarioId);
            setId(tamanhoPass.location.state.id);
        }
    }

    function handler() {
        setNome(document.getElementById('nome').value);
        setCpf(document.getElementById('cpf').value);
        setDataNascimento(document.getElementById('dataNascimento').value);
        setUsuarioId(24); //não tem sessão implemetada ainda
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!verificaCpf(cpf)){
            swal("Erro!", "CPF inválido!", "error");
        }
        else
        {
            if(!atualizando){
                const ben = {
                    nome: nome,
                    cpf: cpf,
                    dataNascimento: dataNascimento,
                    usuarioId: usuarioId
                };
            api.post('/Beneficiario', ben);
            swal("Finalizado!", "Cadastro de beneficiário efetuado com sucesso.", "success")/*.then(function() {
                window.location = '/';
            });*/
            } else {
                const ben = {
                    id: id,
                    nome: nome,
                    cpf: cpf,
                    dataNascimento: dataNascimento,
                    usuarioId: usuarioId
                };
                api.put('/Beneficiario', ben);
                swal("Finalizado!", "Cadastro de beneficiário efetuado com sucesso.", "success").then(function() {
                    window.location = '/';
                });
            }
    
            setNome('');
            setCpf('');
            setDataNascimento('');
            setUsuarioId(24);
        }
    }
    
    //verify if cpf is valid
    function verificaCpf(cpf) {
        let soma = 0;
        let resto;
        let cpfArray = cpf.split('');
        if (cpfArray.length !== 11) {
            return false;
        }
        if (cpfArray[9] === cpfArray[10]) {
            return false;
        }
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpfArray[i]) * (10 - i);
        }
        resto = soma % 11;
        if (resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }
        if (resto !== parseInt(cpfArray[9])) {
            return false;
        }
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpfArray[i]) * (11 - i);
        }
        resto = soma % 11;
        if (resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }
        if (resto !== parseInt(cpfArray[10])) {
            return false;
        }
        return true;
    }


        return(
            <div>
                <Header/>
    
                <div class="cadastro">
                    <form action="POST" class="campos-cadastro" onSubmit={handleSubmit}>
    
                        <h1>Cadastro de beneficiario</h1>
    
                        <div class="box-nome">
                            <label for="cpf">Cpf</label>
                            <input type="text" name="cpf" id="cpf" placeholder="CPF do beneficiario" required="True" defaultValue={cpf}/>
                        </div>
    
                        <div class="box-cpf">
                            <label for="nome">nome</label>
                            <input type="text" name="nome" id="nome" placeholder='nome' required="True" defaultValue={nome} />
                        </div>
    
                        <div class="box-senha">
                            <label for="dataNascimento">Data de Nascimento</label>
                            <input type="date" name="dataNascimento" id="dataNascimento" required="True" defaultValue={dataNascimento}/>
                        </div>
                        
                        <button class="bt-cadUsuario" type="submit" onClick={handler}>Enviar</button>
                    </form>
                </div>               
            </div>
        );      
}
