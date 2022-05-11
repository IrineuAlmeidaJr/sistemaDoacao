import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';


const localRecursos = 'http://localhost:4000/Beneficiario'

export default function FormCadBeneficiario (tamanhoPass)
{

    const[cod, setCod] = React.useState('');
    const[nome, setNome] = React.useState('');
    const[cpf, setCpf] = React.useState('');
    const[dataNascimento, setDataNascimento] = React.useState(new Date());
    const[usuarioId, setUsuarioId] = React.useState(2);
    const[atualizando, setAtualizando] = React.useState(false);
    //const[ListaBeneficiarios, setListaBeneficiarios] = React.useState([]);

    React.useEffect(()=>{
        atualiza()
    });

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


    function atualiza(){
        if(tamanhoPass.location.state === undefined)
            setAtualizando(false)    
        else
            setAtualizando(true)              
    }

    function handler() {
        setNome(document.getElementById('nome').value);
        setCpf(document.getElementById('cpf').value);
        setDataNascimento(document.getElementById('dataNascimento').value);

    }

    function handleSubmit(e)
    {
            
        const validaCpf = verificaCpf(cpf);
        if(!validaCpf)
            swal("Erro!", "CPF inválido.", "error");
        else
        {
            e.preventDefault();
            if(!atualizando)
            {
                const beneficiarioJSON = 
                {
                    cpf: cpf,
                    nome: nome,                
                    dataNascimento: dataNascimento,
                    usuarioId: usuarioId
                }
                //console.log(beneficiarioJSON);

                    fetch(localRecursos,{method:"POST",
                                                            headers:{'Content-Type':'application/json'},
                                                            body:JSON.stringify(beneficiarioJSON)
                    })
                    .then(resposta=>{
                        if(resposta.status === 400)
                            swal("Erro!", "CPF já cadastrado.", "error").then(function(){
                                window.location ='/';
                            });
                        else if(resposta.status === 401)
                            swal("Erro!", "Campo Obrigatorio não preenchido.", "error");
                        else
                            swal("Finalizado!", "Cadastrado efetuado com sucesso.", "success").then(function() {
                                window.location = '/';
                            }
                        );
                    })
                    .catch(e=>alert(e))
            }

            else
            {
                fetch(localRecursos,{method:"PUT",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(tamanhoPass.location.state)
                })
                .then(resposta=>alert(resposta.statusText))
                .catch(e=>alert(e))        


                swal("Finalizado!", "tamanho alterado com sucesso.", "success").then(function() {
                window.location = '/';
                });  
            }

            
            setNome('');
            setCpf('');
            setDataNascimento(new Date());
            setUsuarioId(2);
        }
    }

        return(
            <div>
                <Header/>
    
                <div class="cadastro">
                    <form action="POST" class="campos-cadastro" onSubmit={handleSubmit}>
    
                        <h1>Cadastro de beneficiario</h1>
    
                        <div class="box-nome">
                            <label for="cpf">Cpf</label>
                            <input type="text" name="cpf" id="cpf" placeholder="CPF do beneficiario" required="True" defaultValue={tamanhoPass.location.state.cpf}/>
                        </div>
    
                        <div class="box-cpf">
                            <label for="nome">nome</label>
                            <input type="text" name="nome" id="nome" placeholder='nome' required="True" defaultValue={tamanhoPass.location.state.nome} />
                        </div>
    
                        <div class="box-senha">
                            <label for="dataNascimento">Data de Nascimento</label>
                            <input type="date" name="dataNascimento" id="dataNascimento" required="True" defaultValue={tamanhoPass.location.state.dataNascimento}/>
                        </div>
                        
                        <button class="bt-cadUsuario" type="submit" onClick={handler}>Enviar</button>
                    </form>
                </div>               
            </div>
        );      
}
