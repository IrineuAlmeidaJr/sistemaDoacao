import React from 'react';
import '../css/Formularios.css';
import Header from '../components/Header';
import swal from 'sweetalert';

const localRecursos = 'http://localhost:4000/usuario'

const CadUsuario = () => {
    const [nome, setNome] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [dtNasc, setDtNasc] = React.useState(new Date());
    const [endereco, setEndereco] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const [tipoUsuario, setTipoUsuario] = React.useState(0);

    function validaTexto(texto, qtde) {
        if (texto.length >= qtde) {
            return true;
        }
        return false;
    }

    function validaDtNasc() {
        // ***OBS --> VER ESTÁ DANDO ERRO
        // const dtAtual = new Date().toDateString();
        // let dtUsu = '';

        // if(dtNasc !== '') {
        //     dtUsu = new Date(`${dtNasc.substr(0,4)}/${dtNasc.substr(5,2)}/${dtNasc.substr(8,2)}`).toDateString();
        // }       

        // // Quando dava new e não tinha data dava -> invalid date
        // // Desta forma fez uma condição antes de dar new
        // if(dtUsu.length > 0 && dtUsu <= dtAtual) {
        //     return true;
        // } else {
        //     return false;
        // }

        if (dtNasc === '') {
            return false;
        }
        return true;
    }

    function validaTipoUsu() {
        if (tipoUsuario > 0 && tipoUsuario <= 3) {
            return true;
        }
        return false;
    }

    function handler() {
        setNome(document.querySelector('#nome').value);
        setCpf(document.querySelector('#cpf').value);
        setSenha(document.querySelector('#senha').value);
        setDtNasc(document.querySelector('#dtNasc').value);
        setEndereco(document.querySelector('#endereco').value);
        setEmail(document.querySelector('#email').value);
        setTelefone(document.querySelector('#telefone').value);
        setTipoUsuario(parseInt(document.querySelector('#tipoUsuario').value));
    }


    function handleSubmit(e) {
        e.preventDefault();

        console.log(`
        Nome - ${nome} \n
        CPF - ${cpf} \n
        Senha - ${senha} \n
        DtNasc - ${dtNasc} \n
        Endereco - ${endereco} \n
        Email - ${email}\n
        Telefone - ${telefone} \n
        Tipo Usu - ${tipoUsuario} \n\n`);

        const validaNome = validaTexto(nome, 5);
        const validaCpf = validaTexto(cpf, 5);
        const validaSenha = validaTexto(senha, 6);
        const validaEndereco = validaTexto(endereco, 5);
        const validaData = validaDtNasc();
        if (validaNome !== true) {
            alert("Erro!", "Preencher nome com no mínimo 5 caracter", "error");
            document.querySelector("#nome").focus();
            // --> não funciona .focus() tem que arrumar
        } else if (validaCpf !== true) {
            alert("Erro!", "CPF Inválido", "error");
            document.querySelector("#cpf").focus();
            // --> não funciona .focus() tem que arrumar
        } else if (validaSenha !== true) {
            alert("Erro!", "Senha deve conter no mínimo 6 caracter", "error");
            document.querySelector("#senha").focus();
            // --> não funciona .focus() tem que arrumar
        } else if (validaData !== true) {
            alert("Erro!", "Data inválida", "error");
            document.querySelector("#dtNasc").focus();
            // --> não funciona .focus() tem que arrumar
        } else if (validaEndereco !== true) {
            alert("Erro!", "Edereço deve conter no mínimo 10 caracter", "error");
            document.querySelector("#endereco").focus();
        } else if (validaTipoUsu() !== true) {
            alert("Erro!", "Selecione um tipo de usuário", "error");
            document.querySelector("#tipoUsuario").focus();
        } else {
            const usuario = {
                cpf: cpf,
                senha: senha,
                tipo: tipoUsuario,
                nome: nome,
                data: dtNasc,
                endereco: endereco,
                telefone: telefone,
                email: email
            }

            fetch(localRecursos,{method:"POST",
                                headers:{'Content-Type':'application/json'},
                                body:JSON.stringify(usuario)
            })
            .then(resposta=>alert(resposta.statusText))
            .catch(e=>alert(e))
            

                  

            setNome('');
            setCpf('');
            setSenha('');
            setDtNasc('');
            setEndereco('');
            setEmail('');
            setTelefone('');
            setTipoUsuario(0);

            swal("Finalizado!", "Cadastrado efetuado com sucesso.", "success").then(function() {
                window.location = '/';
            });            
            
        }

    }


    return (
        <div>
            <Header/>

            <div class="cadastro">
                <form action="POST" class="campos-cadastro" onSubmit={handleSubmit}>

                    <h1>Cadastrar Usuário</h1>

                    <div class="box-nome">
                        <label for="nome">Nome</label>
                        <input type="text" name="nome" id="nome" placeholder="Digite o seu nome" />
                    </div>

                    <div class="box-cpf">
                        <label for="cpf">CPF</label>

                        {/* <input type="text" id="campo_cpf" placeholder="Apenas Números"
                        onblur={validarCPF()}/> */}

                        <input type="text" name="cpf" id="cpf" placeholder="Apenas Números" />

                    </div>

                    <div class="box-senha">
                        <label for="nome">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Informe sua senha" />
                    </div>

                    <div class="box-dtNasc">
                        <label for="dtNasc">Data Nascimento</label>
                        <input type="date" name="dtNasc" id="dtNasc" />
                    </div>

                    <div class="box-endereco">
                        <label for="endereco">Endereço Completo</label>
                        <input type="text" name="endereco" id="endereco" placeholder="Informe o endereço completo, como nome da Cidade e Estado" />
                    </div>

                    <div class="box-email">
                        <label for="email">Email <p>(opcional)</p></label>
                        <input type="email" name="email" id="email" placeholder="Digite o seu email" />
                    </div>

                    <div class="box-telefone">
                        <label for="telefone">Telefone <p>(opcional)</p></label>
                        <input type="text" name="telefone" id="telefone" placeholder="Digite o numero do seu telefone" />
                    </div>

                    <div class="box-tipoUsuario">
                        <label for="tipoUsuario">Qual seu tipo de inscrição?</label>
                        <select name="tipoUsuario" id="tipoUsuario">
                            <option class="test" value='0' selected disabled>Selecione</option>
                            <option value="1">Colaborador</option>
                            <option value="2">Doador</option>
                            <option value="3">Responsável</option>
                        </select>
                    </div>

                    <button class="bt-cadUsuario" type="submit" onClick={handler}>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default CadUsuario;