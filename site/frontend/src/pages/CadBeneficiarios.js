import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";


const localRecursos = 'http://localhost:4000/Beneficiario'

export default function FormCadBeneficiario (){

    const[nome, setNome] = React.useState('');
    const[cpf, setCpf] = React.useState('');
    const[dataNascimento, setDataNascimento] = React.useState(new Date());
    const[usuarioId, setUsuarioId] = React.useState(2);

    function handler() {
        setNome(document.getElementById('nome').value);
        setCpf(document.getElementById('cpf').value);
        setDataNascimento(document.getElementById('dataNascimento').value);

    }

    function handleSubmit(e) {
            
            e.preventDefault();
    
            console.log(nome);
            console.log(cpf);
            console.log(dataNascimento);
            console.log(usuarioId);

            const beneficiarioJSON = {
                cpf: cpf,
                nome: nome,                
                dataNascimento: dataNascimento,
                usuarioId: usuarioId
            }
            console.log(beneficiarioJSON);

            fetch(localRecursos,{method:"POST",
                                                    headers:{'Content-Type':'application/json'},
                                                    body:JSON.stringify(beneficiarioJSON)
            })

            .then(resposta=>alert(resposta.statusText))
            .catch(e=>alert(e))

            setNome('');
            setCpf('');
            setDataNascimento(new Date());
            setUsuarioId(2);

        }

        return(
            <div>
                        <Header/>
            
                        <div class="cadastro">
                            <form action="POST" class="campos-cadastro" onSubmit={handleSubmit}>
            
                                <h1>Cadastro de beneficiario</h1>
            
                                <div class="box-nome">
                                    <label for="cpf">Cpf</label>
                                    <input type="text" name="cpf" id="cpf" placeholder="CPF do beneficiario" />
                                </div>
            
                                <div class="box-cpf">
                                    <label for="nome">nome</label>
                                    <input type="text" name="nome" id="nome" placeholder='nome' />
                                </div>
            
                                <div class="box-senha">
                                    <label for="dataNascimento">Data de Nascimento</label>
                                    <input type="date" name="dataNascimento" id="dataNascimento"/>
                                </div>
                                
                                <button class="bt-cadUsuario" type="submit" onClick={handler}>Enviar</button>
                            </form>
                        </div>
                    </div>
                );



}
